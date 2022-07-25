(ns measures.info
  (:require [measures.db :as db]
            [measures.base :refer [page section1 para]]))

(def delta 
  "Our precision for any baseline or absolute risk"
  0.001)

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
  (min (* r RR) (- 1 delta))
  #_(* r RR))

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
  (min (+ r (* r (/ PC 100))) (- 1 delta)))

(comment
  (r-p->PC 0.1 0.12)
  ;; => 19.999999999999996

  (r-PC->p 0.1 20)
  ;; => 0.12000000000000001

  (r-p->PC 0.1 0.12)
  ;; => 19.999999999999996

  )

;---OR
(defn r-p->OR
  [r p]
  (/ (/ p (- 1 p)) (/ r (- 1 r))))

(defn r-OR->p
  [r OR]
  #_(/ 1 (* OR r (/ 1 (- 1 r))))
  (min (- 1 (/ 1 (+ 1 (* OR r (/ 1 (- 1 r)))))) (- 1 delta))
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
(defn r-p->HR
  [r p]

  (/ (js/Math.log (- 1 p)) (js/Math.log (- 1 r))))

(defn r-HR->p
  [r HR]
  (min (- 1 (js/Math.pow (- 1 r) HR)) (- 1 delta)))

(comment
  (r-p->HR 0.1 0.12)
  ;; => 1.2132948544504327

  (r-HR->p 0.1 1.2132948544504327)
  ;; => 0.12
  )
;---

(def measures
  [{:key :RR
    :name "RR"
    :title "Relative Risk"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01

    :evaluate r-p->RR
    :calc-final r-RR->p
    :maths [:<>
            [para
             "By definition, $$RR = \\frac{p}{r}$$"]
            [para "So the final risk is $$p = r \\times RR$$"]]}
   {:key :PC
    :name "PC"
    :title "Percentage Change"
    :min     :min js/Number.NEGATIVE_INFINITY
    :max     :max js/Number.POSITIVE_INFINITY
    :step 1
    :evaluate r-p->PC
    :calc-final r-PC->p
    :maths [:<>
           [para "By definition: $PC$ is the change in risk
                   expressed as a percentage $$\\frac{p - r}{r} \\times 100 \\ \\%$$"] 
            [para "So the final risk is $$r + r \\times PC/100$$"]
            ]}
   {:key :OR
    :name "OR"
    :title "Odds Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01
    :evaluate r-p->OR
    :calc-final r-OR->p
    :maths [:<>
            [para
             "By definition, $$OR = \\frac{p}{(1-p)} / \\frac{r}{(1-r)}$$"]
            [para "Solving gives $$p = 1 - \\frac{1}{1+ OR \\frac{r}{(1-r)}}$$"]]}
   {:key :HR
    :name "HR"
    :title "Hazard Ratio"
    :min 0
    :max js/Number.POSITIVE_INFINITY
    :step 0.01
    :evaluate r-p->HR
    :calc-final r-HR->p
    :maths [:<>
            [:p "Hazard ratios are relevant when looking at survival over time."]
            [:p "By definition, " "$HR = h_1(t)/h_0(t)$" ", where " "$h_1(t), h_0(t)$"
             " are the hazards in the 'active'" " and baseline groups respectively at time $t$. "]
            [:p.pt-2 "Therefore " "$HR = H_1(t)/H_0(t)$" ", where $H_1(t), H_0(t)$ are the cumulative hazards. "]
            [:p.pt-2 "A standard result is that  $H_1(t) = -\\log S_1(t), H_0(t) = -\\log S_0(t)$, " 
             "where $S_1(t), S_0(t)$ are the survival probabilities up to time $t$."]
            [:p.pt-2 "And so $HR = \\log S_1(t)/ \\log S_0(t).$"]
            [:p.pt-2 "For a specified follow-up time $t$, we have risks" 
             " $p = 1- S_1(t)$, $r = 1- S_0(t)$, and so $$HR = \\frac{\\log (1-p)}{\\log (1-r)}$$"]
            [:p "Rearranging gives  $$p = 1 - (1-r)^{HR}$$"]]}])

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