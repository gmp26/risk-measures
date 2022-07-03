(ns measures.base)

(defn render-math
  []
  (js/console.log "RENDER_MATHS")
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

;;
;; Base components
;;
(defn page [content]
  [:div
   {:class "container mx-auto mx-8 text-lg"}
   content])

(defn section1
  [header]
  [:h1 {:class "mx-4 my-2 text-4xl text-orange-600"}
   header])

(defn section2
  [header]
  [:h1 {:class "mx-4 my-2 text-2xl text-blue-400"}
   header])

(defn para [content]
  [:p {:class "text-lg leading-relaxed ml-4 mt-2 text-gray-800"}
   content])
