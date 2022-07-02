(ns tailwind.app
  (:require ["react-dom/client" :refer [createRoot]]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [tailwind.views :as views]
            [tailwind.db :as db]
            
            [reagent.dom :as dom]))

(defn app
  []
  (condp = (:auth? @db/state)
    true [views/authenticated]
    false [views/public]
    :main [views/main]
    :else (js/alert "bad states"))
  )

(defonce root (createRoot (gdom/getElement "app")))


(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (.render root (r/as-element [views/main]))
 )

(defn ^:dev/after-load rerender []
  (init)

  ;renderMathInElement may be not immediately available due to deferred load
  (try (when js/renderMathInElement
         (js/renderMathInElement
          js/document.body
          #js{:delimiters #js[#js{:left "$$", :right "$$", :display true},
                              #js{:left "$", :right "$", :display false},
                              #js{:left "\\(", :right "\\)", :display false},
                              #js{:left "\\[", :right "\\]", :display true}],
              :throwOnError false}))
       (catch js/ReferenceError _e
         #_(println "ERROR:" e))))


;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(comment
  (swap! db/state assoc :auth? false)
  (swap! db/state assoc :auth? true)
  (swap! db/state assoc :auth? :main)
  )