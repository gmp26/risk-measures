(ns measures.views
  (:require
   ;[reagent.core :as r]
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
    [:div {:class "border border-gray-600 m-4 p-2 rounded-md w-72 bg-white shadow-lg"}
     [:span [:b "Choose a measure"]]
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
          The risk in the 'exposed' group, $p$, depends on the measure of change"]
        [:ul {:class "maxw-[800px]"}
         [:li.ml-4.mt-0 
          (:maths m)]]]])))

(defn max-relative-risk
  "maximum relative risk"
  [baseline final]
  (if (and baseline (pos? final))
    (/ baseline final)
    (js/Number.POSITIVE_INFINITY)))

(comment

  (def measure (info/current-measure)
               ;; => {:min 0, :evaluate #object[measures$info$r_p__GT_RR], :key :RR, :maths [:<> [#object[measures$base$para] "By definition, $$RR = \\frac{p}{r}$$."] [#object[measures$base$para] "So the final risk is $$p = r \\times RR$$."]], :name "RR", :title "Relative Risk", :max ##Inf, :step 0.01, :calc-final #object[measures$info$r_RR__GT_p]}
    )
  (def new-value 0.11)
  (def ref db/state)
  (def field :baseline)
  (info/r-RR->p 0.11 1)
  (-> @ref measure))


(defn safe
  "Works except for 0.X0X"
  [v fix]
  (if (and (string? v) (or (string/ends-with? v "0")
                           (string/ends-with? v ".")))
    v
    (let [x (js/Number (.toFixed (js/Number v) fix))]
      (assert (is-number? x))
      x)))

(defn maybe-value
  "return a value or an eror if value is invalid.
   Type=\"number\" inputs eliminate most - maybe all - typed entry errors, but some can arise
   from applying the formulae."
  [ref field new-value]
  (let [measure (info/current-measure)
        new-value ((if (db/numeric-fields field)
                     js/Number
                     identity) new-value)]

    (cond
      (= field :baseline)
      ;; The baseline has been edited
      ;; We'll preserve the RR and update final

      (let [;; new baseline
            r new-value

            ;; recalculate final
            p ((:calc-final measure)
               new-value
               (@ref (:key measure)))]

        (swap! ref assoc :final (safe p 3))

        ;; r-XX->p
        (js/console.log (str "r-" (:name measure) "->p ")
                        r p))

      (= field :final)
      (let [;; The final field has been edited
            ;; We'll fix the baseline and recalculate the RR and all derived measures
            r (:baseline @ref)
            p new-value]

        ;; update all derived measures atomically
        (swap! ref assoc
               :baseline (safe r 3)
               :RR (safe (info/r-p->RR r p) 2)
               :PC (safe (info/r-p->PC r p) 1)
               :OR (safe (info/r-p->OR r p) 2)
               :HR (safe (info/r-p->HR r p) 2))

          ;; r-p->XX
        (js/console.log (str "(r-p" "->" (:name measure))
                        r p))

      :else
      (let
        ;; The measure field has changed
        ;; Keep baseline fixed recalculate final and other measures
       [r (js/Number (:baseline @ref))
        p ((:calc-final measure)
           r
           new-value)]

        (js/console.log "r-" (:name measure) "->p "
                        r
                        p)

        (swap! ref assoc :final (safe p 3))

                ;; update all derived measures atomically
        (swap! ref assoc
               :RR (safe (info/r-p->RR r p) 2)
               :PC (safe (info/r-p->PC r p) 1)
               :OR (safe (info/r-p->OR r p) 2)
               :HR (safe (info/r-p->HR r p) 2)))))

    [nil new-value])


#_(defn input-error
      "return an error if new-value cannot be assigned to the ref field,
       or return a valid replacement"
      [ref field new-value]
      (let [[error? value] (maybe-value ref field new-value)]
        (if error?)))

(defn log-error 
  [ref field error]
  (swap! ref update :errors conj {:field field :error error}))

(defn new-baseline
  [ref new-val]
  {:pre [(pos? new-val)]}
  new-val)

(comment
  (new-baseline (atom {}) -1)
  )

(defn new-rr
  [ref new-val]
  )

(defn new-final
  [ref new-val])

#_(defn new-rr
  "The final or baseline was changed by user, so recalculate the rest"
  [ref field new-val]

  (let [rr (let [[numerator denominator]
                 (if (= field :baseline)
                   [(:final @ref) new-val]
                   [new-val (:baseline @ref)])]
             (if (pos? denominator)
               (/ numerator denominator)))]))


#_(defn recalculate-on-value-change
  "The value in field has changed - we need to recalculate the rest.
   We ignore obvious errors here - they will be indicated in the display"
  [ref field]
  (condp = field)
  :baseline 
  :RR
  :PC
  :OR
  :HR
  :final)

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
        (log-error ref field error)
        (swap! ref assoc field good-value)))))

(comment
  (def ref db/state)
  (def field :RR)
  (safe (js/Number 0.10) 3)
  (def measure (info/current-measure))
  (-> @db/state :RR)
  )

(defn step-from-field
  [field]
  ((info/measure-by field) :step)
  )

(step-from-field :HR)

(defn dps-from-step
  [step]
  (- (js/Math.log10 step)))

(defn get-field-value
  "Evaluate a field to configured precision"
  [ref field]
  (safe (@ref field) (if (#{:baseline :final} field)
                       3
                       (-> field step-from-field dps-from-step)
                       #_(dps-from-step (step-from-field field))))
    #_(-> @ref
        field
        (js/Number.
         (.toFixed (if (#{:baseline :final} field)
                     3
                     (dps-from-step
                      (-> @ref field :step)))))))

(comment
  (-> @db/state :baseline :step)
  )

(defn enter
  "enter a labelled field value to ref in a form"
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
     [:section.flex.flex-col.mb-1
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
    [:div {:class "shadow-lg border border-gray-600  m-4 p-4 rounded-md w-60"
           :style {:background-color "#fff"}}
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


(defn status
  []
  
  (let [measure (info/current-measure)
        final (js/Number ((:calc-final measure) (:baseline @db/state) (:measure-value @db/state)))
        measure-title (string/lower-case (:title measure))]
    [:section {:class "ml-4 mt-2 pr-2 first-letter:flex flex-col min-w-[300px]"}
     ;[section2 (str "Currently")]
     [:b (str "Status")]
     [:p "The baseline risk is " (safe (:baseline @db/state) 3) " or "  (safe (* 100 (:baseline @db/state)) 1) "%"]
     [:p.mt-1 (str "The " (string/lower-case (:title (info/measure-by :RR))) " is ") (:RR @db/state)]
     [:p.mt-1 (str "The " (string/lower-case (:title (info/measure-by :PC))) " is ") (:PC @db/state) "%"]
     [:p.mt-1 (str "The " (string/lower-case (:title (info/measure-by :OR))) " is ") (:OR @db/state)]
     [:p.mt-1 (str "The " (string/lower-case (:title (info/measure-by :HR))) " is ") (:HR @db/state)]
     [:p.mt-1 "So the final risk is " (safe (:final @db/state) 3)
      " or " (safe (* 100 (:final @db/state)) 3) "%."]

    ]))

(comment
  (info/current-measure)
  (:key (info/current-measure))
  (:min (info/current-measure))
  (:max (info/current-measure))
  )


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
  (let [measure (info/current-measure)
        delta info/delta]
    [:<>
     [:section.flex.flex-col.md:flex-eow 

      [:form.mt-2.ml-4
       #_{:no-validate true}
       [:div [enter {:min delta :max (- 1 delta) :step delta}
                   db/state :baseline "Baseline risk "]]

       [:div [enter {:min (:min measure) :max (:max measure) :step (:step measure)}
                   db/state (:key measure) (:title measure)]]

       [:div [enter {:min delta :max (- 1 delta) :step delta}
                   db/state :final "Final 'exposed' risk"]]]]]))


(defn master-detail
  []
  [:section
   {:class "flex md:flex-row flex-col overflow-y-auto"}
   #_[:div {:class "w-64"}
    [error-report]]
   [:div.flex.flex-col
    [:div.flex.flex-col.sm:flex-row.bg-slate-200
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
    [para [:span {:class "text-base text-2xl"} "Many studies compare the risks in an 'exposed' group to the risks
          in a 'baseline' or 'control' group."]
     [para "
          The results are often published as some relative measure risk"] "."
     " Depending on context, you may encounter Relative Risks, Percentage Changes, Odds Ratios, or Hazard Ratios. "]
    [para [:span.text-base "The maths differs in each case, but the final exposed risk
            is always determined by applying the relative risk measurement to the baseline risk. "
           "The baseline risk, relative risk, and final risk are related so that knowing two allows you to determine the third."
                            ]]
    [para [:i "Here, we provide calculators and definitions for each of these risk measures."]]]
   #_[para [:b.text-blue-400 "Choose a risk measure to continue:"]]])


(defn flash
  []
  [:section {:class "p-4 text-gray-600 body-font"}
   [:div {:class "flex flex-col md:flex-row justify-start items-start"}
    [:div {:class "lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"}
     [:h1 {:class "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"}
      "RealRisk - Light"]
     [intro]
     [:section.my-8.flex.justify-center.space-between
      [button-secondary-link {:href "https://realrisk.wintoncentre.uk/"
                              :target "_blank"} "Full Version"]
      [spacer]
      [button-primary {:on-click events/go-home} "Light Version"]]]
    [:div {:class "max-w-[400px]" #_"sm:block :max-w-2xl lg:w-full md:w-1/2 w-5/6 "}
     [:img {:class "object-cover object-center rounded-md  w-auto "
            :alt "hero"
            :src "/assets/flash.jpg"}]
     [:div " Photo by "
      [:a {:class "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
           :href "https://unsplash.com/@johnmoeses"}
       "John Moeses Bauan"] " on "
      [:a {:class "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
           :href "https://unsplash.com/s/photos/risk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"} "Unsplash"]]]]
   ]) 

(defn home []
  (js/setTimeout base/render-math 10)
  [:div
   {:class "container flex flex-col h-screen justify-between pt-2"}
   [master-detail]
   [:section.flex.justify-centre.space-around.m-2
    [button-primary {:on-click events/go-flash-page} "Home"]
    [spacer]
    [button-secondary-link {:href "https://realrisk.wintoncentre.uk/"
                            :target "_blank"} "Switch to Real Risk"]]
   ])

(defn main
  []
  [page
    (if (db/flash?)
      [flash]
      [home])]

)



(comment
  @db/state
  (:final @db/state)
  (swap! db/state assoc :final 2)
  )
