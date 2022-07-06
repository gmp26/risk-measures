(ns measures.views
  (:require
   [reagent.core :as r]
   [measures.base :as base :refer [page button-primary button-secondary-link link section1 section2 para spacer]]
   [measures.events :as events]
   [measures.db :as db]
   [measures.info :as info]
   [medley.core :as medley]
   [clojure.string :as string]))

(defn measures-menu
  []
  (let [selected-measure (:selected-measure @db/state)
        selected? (fn [m] (= (:key m) selected-measure))]
    [:div {:class "border border-gray-600 m-4 p-4 rounded-md w-60 shadow-lg"}
     [:span "Choose a measure"]
     (into [:ul.mx-2.w-100%
            {:class "sm:w-1/8"}]
           (map (fn [m] [:li {:class (str "px-2 py-2  w-full"
                                          " cursor-pointer "
                                          (if (selected? m)
                                            "text-white bg-blue-500"
                                            "text-lg text-gray-400"))
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


(defn handler [key]
  (fn [e]
    (events/set-db-key key (-> e .-target .-value))))


(defn enter
  ([options key label]
   #_[:div (pr-str [options key (keyword? key) label])]
   [:form.m-4.w-full
    {:on-submit (fn [e] (-> e .-nativeEvent .preventDefault))}
    [:b [:label {:for (name key)} label ":"]]
    [:input
     (medley/deep-merge {:id (name key)
                         :class "ml-4 text-lg w-60"
                         :type "number"
                         :min "0"
                         :max "1"
                         :step "0.01"
                         :value (key @db/state)
                         :on-change (fn [e] (events/set-db-key key (-> e .-target .-value)))}
                        options)]
    (str " or " (* (key @db/state) 100) "%")])
  ([key label]
   (enter nil key label)))




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

(defn final-risk-calculator
  []
  (let [measure (info/current-measure)]
    (fn []
      (let [final (js/Number ((:active-risk measure) (:baseline @db/state) (:measure-value @db/state)))]
        [:section {:class "flex flex-col"}
         [section2 "Calculate the final risk from the baseline risk and the risk measure"]
         [enter {:min 1 :max 10 :step 0.01} :baseline "Enter baseline risk"]
         [enter {:min (:min measure) :max (:max measure)} :measure-value (str "Enter " (string/lower-case (:title measure)))]
         [:span.ml-4 "The final Risk is "
          [:b.text-4xl (.toPrecision (js/Number final) 3)]
          " or "
          [:b.text-4xl (.toFixed (js/Number (* final 100)) 0) "%"]

          #_(.toPrecision (js/Number ((:active-risk measure) (:baseline @db/state) (:measure-value @db/state)))
                          2)]
         ])))
  )
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
   [enter :baseline "Enter baseline risk"]])

(defn detail
  "Choose a detailed view based on menus"
  []
  (condp = (:key (info/current-tool))
    :maths [maths-detail]
    :calc-final [final-risk-calculator]
    :calc-measure [risk-measure-calculator]
    nil (pr-str (:key (info/current-tool)))))


(defn master-detail
  []
  [:section
   {:class "flex md:flex-row flex-col"}
   [:div {:class "w-64"}
    [measures-menu]
    [tool-menu]]
   [:div
    [detail]]])

   #_[:div {:class "m-4"}
      "Let the baseline risk be $r$.  The risk in the 'active' group, $p$, depends on the measure of change"
      [:ul
       [:li {:class "m-4"}
        [:b "Relative risk $RR$."]
        [para
         "By definition, $RR = p/r$.  So the final risk is $p = r \\times RR$."]]
       [:li {:class "m-4"}
        [:b "Percentage change $PC$."]
        [para
         "The final risk is $r + r \\times PC/100$."]]
       [:li {:class "m-4"}
        [:b "Odds ratio  $OR$."]
        [para
         "By definition, $OR = \\frac{p}{(1-p)} / \\frac{r}{(1-r)}$."]
        [para "Solving gives $p = 1- \\frac{1}{(1+ OR(1-r)/r)}$."]]
       [:li {:class "m-4"}
        [:b "Hazard ratio  $HR$."]
        [para "By definition, $HR = h_1(t)/h_0(t)$, where $h_1(t), h_0(t)$ are the hazards in the 'active' and baseline groups respectively. "]
        [para "Therefore $HR = H_1(t)/H_0(t)$, where $H_1(t), H_0(t)$ are the cumulative hazards. "]
        [para "Now $H_1(t) = -\\log S_1(t), H_0(t) = -\\log S_0(t)$, where $S_1(t), S_0(t)$ are the survival probabilities.   "]
        [para "And so $HR = \\log S_1(t)/ \\log S_0(t).$"]
        [para "For a specified follow-up time $t$, we have risks $p = 1- S_1(t)$, $r = 1- S_0(t)$, and so $HR = \\log (1-p) / \\log (1-r)$."]
        [para "Rearranging gives  $p = 1 - (1-r)^{HR}$."]]]]


(defn intro
  []
  [:<>
   [:div.text-center [:b "RealRisk - Light "]
    "is a crib sheet for those who just need a risk measure calculator and a quick reminder of how things work. 
           If you need more, visit"
    [link {:href "https://realrisk.wintoncentre.uk/"
                            :target "_blank"} "the full version."]]
   [:div {:class "hidden md:block bg-gray-600 p-4 mt-8 text-white rounded-md"} 
    [para [:span.text-base.text-white "Many studies compare the risks in an 'active' group to the risks
          in a 'baseline' or 'control' group.
          The results are often published as some relative measure risk" "."
                                                                      " Depending on context, you may encounter Relative Risks, Percentage Changes, Odds Ratios, or Hazard Ratios. "]]
    [para [:span.text-base.text-white "The maths differs in each case, but the final real risk
            is always determined by applying the relative risk measurement to the baseline risk.
            " [:b "Here, we provide calculators and a summary of the maths involved in using each risk measure."]]]]
   #_[para [:b.text-blue-400 "Choose a risk measure to continue:"]]])


(defn flash
  []
  [:section {:class "text-gray-600 body-font"}
   [:div {:class "container mx-auto flex px-5 py- md:flex-row flex-col items-center"}
    [:div {:class "lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"}
     [:h1 {:class "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"}
      "RealRisk - Light"]
     [intro]
     [:section.my-8.flex.justify-center.space-between
      [button-primary {:on-click events/go-home} "Light Version"]
      [spacer]
      [button-secondary-link {:href "https://realrisk.wintoncentre.uk/"
                              :target "_blank"} "Full Version"]]]
    [:div {:class "lg:max-w-lg lg:w-full md:w-1/2 w-5/6"}
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