(ns measures.events
  (:require [measures.db :as db]
            [measures.base :as base]
            [measures.info :as info]))

(defn check
  [errors key new-val]
  )

(defn baseline-changed [new-val]
  ;; validate new-val
  (; recalculate values if possible using this baseline


   (swap! db/state assoc :baseline new-val))

  ;; Only change the db if ALL recalculated values are good
  )

(defn set-db-key
  "Set a value in the database at the given keyword"
  [key val]
  (swap! db/state assoc key val)
   )

(defn select-measure
  "Change the selected measure and kick of a maths re-render.
   The re-ender must occur after the HTML has rerendered, so we delay it.
   
   Note: I expected triggering base/render-math from a :component-did-mount/update lifecycle
   method to work here, but it doesn't. Hence the setTimeout kludge.
   "
  [key]
  (swap! db/state assoc :selected-measure key)
  (js/setTimeout base/render-math 100)
  )

(defn selected-measure []
  (:selected-measure (@db/state)))

(defn select-tool
  "Change the selected tool and kick of a maths re-render.
   The re-ender must occur after the HTML has rerendered, so we delay it.
   
   Note: I expected triggering base/render-math from a :component-did-mount/update lifecycle
   method to work here, but it doesn't. Hence the setTimeout kludge.
   "
  [key]
  (swap! db/state assoc :selected-tool key)
  (js/setTimeout base/render-math 100))

(defn selected-tool []
  (:selected-tool (@db/state)))


(defn go-home []
  (swap! db/state assoc :page? :home)
  )

(defn go-flash-page []
  (swap! db/state assoc :page? :flash))


(comment
  (select-measure :RR)
  (select-measure :PC)
  (select-measure nil)
  (selected-measure)
  (select-tool :maths)
  (select-tool :calc-final)
  (select-tool :calc-measure)
  (go-home)
  (go-flash-page)

  )