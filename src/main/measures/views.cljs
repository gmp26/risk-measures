(ns measures.views
  (:require
   [reagent.core :as r]
   [measures.base :as base :refer [page button-primary button-secondary-link link section1 section2 para spacer]]
   [measures.events :as events]
   [measures.db :as db]
   [measures.info :as info]
   [medley.core :as medley]
   [clojure.string :as string]))

(defn is-number?
  "Return true if x is a number"
  [x]
  (and (number? x) (not (js/isNaN x))))

(defn measures-menu
  []
  (let [selected-measure (:selected-measure @db/state)
        selected? (fn [m] (= (:key m) selected-measure))]
    [:div {:class "border border-gray-600 m-4 p-4 rounded-md w-72 shadow-lg"}
     [:span "Choose a measure"]
     (into [:ul.mx-2.w-100%
            #_{:class "sm:w-1/8"}]
           (map (fn [m] [:li {:class (str "px-2 py-2  w-full"
                                          " cursor-pointer "
                                          (if (selected? m)
                                            "text-white bg-blue-500 hover:bg-indigo-500"
                                            "text-lg text-gray-400 hover:bg-indigo-500"))
                              :on-click #(events/select-measure (:key m))}
                         (:title m)])
                info/measures))]))


(defn maths-detail
  []
  (fn []
    (let [m (info/current-measure)]
      [:<>
       [section2 (str "The Mathematics of " (:title m) " $(" (:name m) ")$")]
       [:<>
        [:section {:class "m-4"}
         "Let the baseline risk be $r$. 
          The risk in the 'active' group, $p$, depends on the measure of change"]
        [:ul
         [:li.m-4
          (:maths m)]]]])))


(defn maybe-value
  "return a value or an eror if value is invalid"
  [ref field new-value]
  (let [new-value ((if (db/numeric-fields field)
                     js/Number
                     identity) new-value)]
    (if (is-number? new-value)
      [nil new-value]
      [field (str new-value " is not a number")])))


#_(defn input-error
      "return an error if new-value cannot be assigned to the ref field,
       or return a valid replacement"
      [ref field new-value]
      (let [[error? value] (maybe-value ref field new-value)]
        (if error?)))

(defn get-field-change-handler 
  "Eeturn a change-handler for a field inside ref. The handler inserts the new value into
   the ref field, or it appends :errors in ref, leaving the field unchanged."
  [ref field]

  (fn [e]
    ;(js/console.log field)
    (-> e .-nativeEvent .preventDefault)
    (let [new-value (-> e .-target .-value)
          [err-field good-value :as error] (maybe-value ref field new-value)]
      ;(js/console.log "err-field " (pr-str err-field))
      (println [err-field good-value])
      (if err-field
        (swap! ref update :errors conj error)
        (swap! ref assoc field good-value)))))

(defn get-field-value [ref field]
  (@ref field))

(defn enter
  ([options ref field label]
   (let [options (medley/deep-merge {:id (name field)
                                     :class "ml-4 text-lg rounded-lg"

                                     :style {:width "120px"}
                                     :type "number"
                                     :min "0"
                                     :max "1"
                                     :step "0.01"
                                     ;; TODO: deref db/state in caller
                                     :value (get-field-value ref field)
                                     :on-change (get-field-change-handler ref field)}
                                    options)]
     #_[:b (pr-str "options-ref [options ref]")]
     [:section.flex.flex-col
      [:b [:label {:for (name field)} label ":"]]
      [:input options]
      (when (:percent? [:span.text-2xl " %"])
        [:span.text-2xl " %"])]))
  
  ([ref field label]
   (enter nil ref field label)))

(defn tool-button
  [label]
  [base/button-primary {:class "w-full p-2"} label])

(defn tool-menu
  []
  (let [selected-tool (:selected-tool @db/state)
        selected? (fn [m] (= (:key m) selected-tool))]
    [:div {:class "shadow-lg border border-gray-600 m-4 p-4 rounded-md w-60"}
     [:span "Choose a tool"]
     (into [:ul.mx-2.w-100%
            {:class "sm:w-1/8"}]
           (map (fn [m] [:li {:class (str "px-2 py-2  w-full"
                                          " cursor-pointer "
                                          (if (selected? m)
                                            "text-white bg-blue-500"
                                            "text-lg text-gray-400"))
                              :on-click #(events/select-tool (:key m))}
                         (:title m)])
                (info/tools)))]))

(def field :final)


(defn status
  []
  
  (let [measure (info/current-measure)
        final (js/Number ((:active-risk measure) (:baseline @db/state) (:measure-value @db/state)))
        measure-title (string/lower-case (:title measure))]
    [:section.w-72 {:class "flex flex-col"}
     [section2 (str "Currently")]
     [:p.ml-4 "The baseline risk is " (:baseline @db/state)]
     [:p.ml-4 (str "The " (string/lower-case (:title (info/measure-by :RR))) " is ") (:RR @db/state)]
     [:p.ml-4 (str "The " (string/lower-case (:title (info/measure-by :PC))) " is ") (:baseline @db/state)]
     [:p.ml-4 (str "The " (string/lower-case (:title (info/measure-by :OR))) " is ") (:baseline @db/state)]
     [:p.ml-4 (str "The " (string/lower-case (:title (info/measure-by :HR))) " is ") (:baseline @db/state)]
     [:p.ml-4 "So the final risk is " (:final @db/state)]

    


     #_[:span.ml-4 "The final Risk is "
        [:b.text-4xl (.toPrecision (js/Number final) 3)]
        " or "
        [:b.text-4xl (.toFixed (js/Number (* final 100)) 0) "%"]

        #_(.toPrecision (js/Number ((:active-risk measure) (:baseline @db/state) (:measure-value @db/state)))
                        2)]]))

(comment
  (info/current-measure)
  (:key (info/current-measure))
  (:min (info/current-measure))
  (:max (info/current-measure))
  )


(defn risk-measure-calculator
  []
  [:<>
   [section2 "Calculate the risk-measure from the baseline risk and the final risk"]
   [:form.m-4.w-full
    {:on-submit (fn [e] (-> e .-nativeEvent .preventDefault))}
    [enter db/state :baseline "Enter baseline risk"]]])


(defn error-report
  "Render any errors"
  []
  (when-let [errors (seq (:errors @db/state))]
    (into [:section] 
          (map (fn [err]
                 [:div (pr-str err)])
               errors)))
  )


(defn inputs-panel
  "Summarise the calculation"
  []
  (let [measure (info/current-measure)]
    [:<>
     [:section.flex.flex-col.md:flex-eow

      [:section.mt-4
       [:div.ml-4 [enter {:min 0 :max 1 :step 0.01}
                   db/state :baseline "Baseline risk "]]

       [:div.ml-4 [enter {:min (:min measure) :max (:max measure) :step 0.01}
                   db/state (:key measure) (:title measure)]]

       [:div.ml-4 [enter {:min 0 :max 1}
                   db/state :final "Final (absolute) risk"]]]]]))

(defn master-detail
  []
  [:section
   {:class "flex md:flex-row flex-col"}
   [:div {:class "w-64"}
    [error-report]]
   [:div.flex.flex-col
    [:div.flex.flex-col.sm:flex-row
     [measures-menu]
     [inputs-panel]
     [status]]
    [maths-detail]]])


(defn intro
  []
  [:<>
   [:div.text-center [:b "RealRisk - Light "]
    "is a crib sheet for those who just need a risk measure calculator and a quick reminder of how things work. 
           If you need more, visit"
    [link {:href "https://realrisk.wintoncentre.uk/"
                            :target "_blank"} "the full version."]]
   [:div {:class "hidden md:block bg-gray-200 p-4 mt-8  rounded-md"}
    [para [:span {:class "text-base text-2xl"} "Many studies compare the risks in an 'active' group to the risks
          in a 'baseline' or 'control' group."]
     [para "
          The results are often published as some relative measure risk"] "."
     " Depending on context, you may encounter Relative Risks, Percentage Changes, Odds Ratios, or Hazard Ratios. "]
    [para [:span.text-base "The maths differs in each case, but the final real risk
            is always determined by applying the relative risk measurement to the baseline risk."]]
    [para [:i "Here, we provide calculators and definitions for each of these risk measure."]]]
   #_[para [:b.text-blue-400 "Choose a risk measure to continue:"]]])


(defn flash
  []
  [:section {:class "text-gray-600 body-font"}
   [:div {:class "container mx-auto flex px-5 py- md:flex-row flex-col items-start"}
    [:div {:class "lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"}
     [:h1 {:class "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"}
      "RealRisk - Light"]
     [intro]
     [:section.my-8.flex.justify-center.space-between
      [button-secondary-link {:href "https://realrisk.wintoncentre.uk/"
                              :target "_blank"} "Full Version"]
      [spacer]
      [button-primary {:on-click events/go-home} "Light Version"]]]
    [:div {:class "sm:block :max-w-2xl lg:w-full md:w-1/2 w-5/6 "}
     [:img {:class "object-cover object-center rounded-md"
            :alt "hero"
            :src "/assets/flash.png"}]]]
   ]) 

(defn home []
  [:<>
   [master-detail]
   [:section.flex.justify-centre.w-full.m-4
    [button-primary {:on-click events/go-flash-page} "Home"]
    [spacer]
    [button-secondary-link {:href "https://realrisk.wintoncentre.uk/"
                            :target "_blank"} "Switch to Real Risk"]]])

(defn main
  []
  [page
    (if (db/flash?)
      [flash]
      [home])]

)
