(ns measures.views
  (:require
   [reagent.core :as r]
   [measures.base :as base :refer [page section1 section2 para]]
   [measures.events :as events]
   [measures.db :as db]
   [measures.info :as info]))

(defn current-measure
  []
  (let [selected-measure (:selected-measure @db/state)]
    (info/measure-by selected-measure)
    ))

(comment
  (current-measure)
  )

(defn measures-menu
  []
  (let [selected-measure (:selected-measure @db/state)
        selected? (fn [m] (= (:key m) selected-measure))]
    #_[:ul.m-4
       [:li [:button "Relative Risk"]]
       [:li "Percentage Change"]
       [:li "Odds Ratio"]
       [:li "Hazard Ratio"]]

    (into [:ul.m-4.border-t.border-gray-900]
          (map (fn [m] [:li {:class (str "px-6 py-2 border-b border-gray-900 w-full"
                                         " cursor-pointer "
                                         (if (selected? m)
                                           "text-white hover:text-red bg-blue-500"
                                           "text-lg"))
                             :on-click #(events/select-measure (:key m))}
                        (:title m) " >"])
               info/measures))))

(defn risk-measures
  []
  [:<>
   [section1 "Understanding Risk Measures"]
   [para [:span "Many studies compare the risks in an 'active' group to the risks
          in a 'baseline' or 'control' group.
          The results are often published as some measure of " [:b "relative risk"] "."
          ""]

   ]])

(defn measures-detail
  []
  (fn []
    (let [m (current-measure)]
      [:<>
       [section1 (str "The Mathematics of " (:title m))]
       [para [:<> ]]
       [:section {:class "m-4"}
        "Let the baseline risk be $r$. 
       The risk in the 'active' group, $p$, depends on the measure of change"]
       [:ul
        [:li.m-4
         [:<>
          [section2 (str (:title m) " $" (:name m) "$")]
          (:maths m)]]]]
      )))


(defn the-maths
  []
  [:<>
   [:div
    [section2 [:i "Choose one of these commonly encountered risk measures:"]]
    [measures-menu]
    [measures-detail]
    ]

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
        [para "Rearranging gives  $p = 1 - (1-r)^{HR}$."]]]]])


(defn main
  []
  [page
   [:<>
    [risk-measures]
    [the-maths]]]

)