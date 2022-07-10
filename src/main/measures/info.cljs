(ns measures.info
  (:require [measures.db :as db]
            [measures.base :refer [page section1 para]]))

(def delta 
  "Our precision for any absolute risk"
  0.01)

;;
;; In the following calculations, r is the baseline risk and p is the final risk
;;

(defn RR-from-r-p
  "Find Relative Risk from baseline and final"
  [r p]
  (if (pos? r)
    (/ p r)
    (if (zero? r)
      1
      (js/Number.POSITIVE_INFINITY))))

(defn p-from-r-rr
  "Find final from baseline and RR"
  [r RR]
  )

(defn calc-PC
    "Find Percentage Change from baseline and final"
  [r p]

  )

(def measures
  [{:key :RR
    :name "RR"
    :title "Relative Risk"
    :min 0
    :max js/Number.POSITIVE_INFINITY

    :evaluate (fn [r p] 
                (/ p r))
    :active-risk (fn [r RR] 
                   (* r RR))
    :maths [para
            "By definition, $RR = p/r$.  So the final risk is $p = r \\times RR$."]}
   {:key :PC
    :name "PC"
    :title "Percentage Change"
    :min     :min js/Number.NEGATIVE_INFINITY
    :max     :max js/Number.POSITIVE_INFINITY
    :evaluate (fn [r p]
                (* 100 (- p r)))
    :active-risk (fn [r PC]
                   (+ r (* r (/ PC 100))))
    :maths [para "The final risk is $r + r \\times PC/100$."]}
   {:key :OR
    :name "OR"
    :title "Odds Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :evaluate (fn [r p]
               (/ (/ p (- 1 p)) (/ r (- 1 r))))
    :active-risk (fn [r OR]
                   (- 1 (/ 1 (+ 1 (* OR (- 1 r (/ 1 r)))))))
    :maths [:<>
            [para
             "By definition, $OR = \\frac{p}{(1-p)} / \\frac{r}{(1-r)}$."]
            [para "Solving gives $p = 1- \\frac{1}{(1+ OR(1-r)/r)}$."]]}
   {:key :HR
    :name "HR"
    :title "Hazard Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :evaluate (fn [r p]
                (/ (js/Math.log (- 1 p)) (js/Math.log (- 1 r))))
    :active-risk (fn [r HR]
                   (- 1 (js/Math.pow (- 1 r) HR)))
    :maths [:<>
            [para "By definition, $HR = h_1(t)/h_0(t)$, where $h_1(t), h_0(t)$ are the hazards in the 'active' and baseline groups respectively. "]
            [para "Therefore $HR = H_1(t)/H_0(t)$, where $H_1(t), H_0(t)$ are the cumulative hazards. "]
            [para "Now $H_1(t) = -\\log S_1(t), H_0(t) = -\\log S_0(t)$, where $S_1(t), S_0(t)$ are the survival probabilities.   "]
            [para "And so $HR = \\log S_1(t)/ \\log S_0(t).$"]
            [para "For a specified follow-up time $t$, we have risks $p = 1- S_1(t)$, $r = 1- S_0(t)$, and so $HR = \\log (1-p) / \\log (1-r)$."]
            [para "Rearranging gives  $p = 1 - (1-r)^{HR}$."]]}])

(defn measure-by [key]
  (first ((group-by :key measures) key)))


(defn current-measure
  []
  (let [selected-measure (:selected-measure @db/state)]
    (measure-by selected-measure)))

(comment
  (current-measure))

;;;;

(defn tools
  []
  [{:key :maths
    :title "Show the maths"}
   {:key :calc-final
    :title "Final risk calculator"}]
  )

(defn tool-by [key]
  (first ((group-by :key (tools)) key)))

(defn current-tool
  []
  (let [selected-tool (:selected-tool @db/state)]
    (tool-by selected-tool)))

(comment
  (def key :RR)
  measures
  (group-by :key measures)
  (measure-by :RR)
  (measure-by :PC)

  (current-tool)
  )