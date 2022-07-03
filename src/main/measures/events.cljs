(ns measures.events
  (:require [measures.db :as db]
            [measures.base :as base]))

(defn select-measure
  "Change the selected measure and kick of a maths re-render.
   The re-ender must occur after the HTML has rerendered, so we delay it.
   
   Note: I expected triggering base/render-math from a :component-did-mount/update lifecycle
   method to work here, but it doesn't. Hence the setTimeout kludge.
   "
  [key]
  (swap! db/state assoc :selected-measure key)
  (js/setTimeout base/render-math 10)
  )

(defn selected-measure []
  (:selected-measure (@db/state)))

(comment
  (select-measure :RR)
  (select-measure :PC)
  (select-measure nil)

  (selected-measure)

  )