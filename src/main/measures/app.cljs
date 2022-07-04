(ns measures.app
  (:require ["react-dom/client" :refer [createRoot]]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [measures.views :as views]
            [measures.db :as db]
            [measures.base :as base]
            
            [reagent.dom :as dom]))

(defn app
  []
  (condp = (:page @db/state)
    :main [views/main]
    :else (js/alert "bad states"))
  )

(defonce root (createRoot (gdom/getElement "app")))


(defn init []
  ;; Called when the page loads.
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (.render root (r/as-element [views/main]))
 )

(defn ^:dev/after-load rerender []
  (init)

  ;renderMathInElement may be not immediately available due to deferred load
  (js/console.log "RELOAD")
  (try (when js/renderMathInElement
         (js/renderMathInElement
          js/document.body
          #js{:delimiters #js[#js{:left "$$", :right "$$", :display true},
                              #js{:left "$", :right "$", :display false},
                              #js{:left "\\(", :right "\\)", :display false},
                              #js{:left "\\[", :right "\\]", :display true}],
              :throwOnError false}))
       (catch js/ReferenceError e
         (println "ERROR:" e))))


;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(comment
  (swap! db/state assoc :page :main)
  )