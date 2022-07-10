(ns measures.info
  (:require [measures.db :as db]
            [measures.base :refer [page section1 para]]))

(def delta 
  "Our precision for any baseline or absolute risk"
  0.01)

;;
;; In the following calculations, r is the baseline risk and p is the final risk
;;

;--- RR
(defn r-p->RR
  "Find Relative Risk from baseline and final"
  [r p]
  (/ p r)
)
(defn r-RR->p
  "Find final from baseline and RR"
  [r RR]
  (* r RR))

(comment
  (r-p->RR 0.1 0.12)
  ;; => 1.2

  (r-RR->p 0.1 1.2)
  ;; => 0.12
  )
;--- PC
(defn r-p->PC
  "Find PCk from baseline and final"
  [r p]
  (* 100 (- (/ p r) 1)))
(defn r-PC->p
  [r PC]
  (+ r (* r (/ PC 100))))

(comment
  (r-p->PC 0.1 0.12)
  ;; => 19.999999999999996

  (r-PC->p 0.1 20)
  ;; => 0.12000000000000001
  )

;---OR
(defn r-p->OR
  [r p]
  (/ (/ p (- 1 p)) (/ r (- 1 r))))

(defn r-OR->p
  [r OR]
  #_(/ 1 (* OR r (/ 1 (- 1 r))))
  (- 1 (/ 1 (+ 1 (* OR r (/ 1 (- 1 r)) ))))
  #_(let [mu (* OR (/ r (- 1 r)))]
    (/ mu (inc mu))))

#_(defn r-OR->p
  [r OR]
  (/ (* r OR) (+ (* r (- r)) OR)))

(comment 
  (r-p->OR 0.1 0.12)
  ;; => 1.227272727272727

  (r-OR->p 0.1 1.227272727272727)
  ;; => 0.12000000000000001


)
;---
;---
(def measures
  [{:key :RR
    :name "RR"
    :title "Relative Risk"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01

    :evaluate r-p->RR
    :active-risk r-RR->p
    :maths [:<>
            [para
             "By definition, $$RR = \\frac{p}{r}$$."]
            [para "So the final risk is $$p = r \\times RR$$."]]}
   {:key :PC
    :name "PC"
    :title "Percentage Change"
    :min     :min js/Number.NEGATIVE_INFINITY
    :max     :max js/Number.POSITIVE_INFINITY
    :step 1
    :evaluate r-p->PC
    :active-risk r-PC->p
    :maths [:<>
           [para "By definition: $PC$ is the change in risk
                   expressed as a percentage $$\\frac{p - r}{r} \\times 100 %$$"] 
            [para "So the final risk is $$r + r \\times PC/100$$."]
            ]}
   {:key :OR
    :name "OR"
    :title "Odds Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01
    :evaluate r-p->OR
    :active-risk r-OR->p
    :maths [:<>
            [para
             "By definition, $$OR = \\frac{p}{(1-p)} / \\frac{r}{(1-r)}$$."]
            [para "Solving gives $$p = 1 - \\frac{1}{1+ OR \\frac{r}{(1-r)}}$$."]]}
   {:key :HR
    :name "HR"
    :title "Hazard Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01
    :evaluate (fn [r p]
                (/ (js/Math.log (- 1 p)) (js/Math.log (- 1 r))))
    :active-risk (fn [r HR]
                   (- 1 (js/Math.pow (- 1 r) HR)))
    :maths [:<>
            [para "By definition, $HR = h_1(t)/h_0(t)$, where $h_1(t), h_0(t)$ are the hazards in the 'active' and baseline groups respectively. "]
            [para "Therefore $HR = H_1(t)/H_0(t)$, where $H_1(t), H_0(t)$ are the cumulative hazards. "]
            [para "Now $H_1(t) = -\\log S_1(t), H_0(t) = -\\log S_0(t)$, where $S_1(t), S_0(t)$ are the survival probabilities.   "]
            [para "And so $HR = \\log S_1(t)/ \\log S_0(t).$"]
            [para "For a specified follow-up time $t$, we have risks $p = 1- S_1(t)$, $r = 1- S_0(t)$, and so $$HR = \\frac{\\log (1-p)}{\\log (1-r)}$$."]
            [para "Rearranging gives  $$p = 1 - (1-r)^{HR}$$."]]}])

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