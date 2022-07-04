(ns measures.base
  (:require [medley.core :as medley]))

(comment
  (medley/deep-merge {:a {:b 1}} {:a {:c 2}})

  )

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

(defn spacer []
  [:div.w-2])

(defn page [content]
  [:div
   {:class "container mx-auto mx-8 text-lg"}
   content])

(defn button-primary
  ([options label]
   [:button
    (medley/deep-merge options
           {:class "w-60 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"}
           )
    label])
  ([label]
   (button-primary nil label))
  )

(defn button-secondary
  [label]
  [:button {:class "inline-flex text-gray-700 bg-gray-100 border border-red-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg" }
   label])

(defn link
  ([options label]
   [:a (medley/deep-merge {:class
               "underline px-2 text-indigo-700 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
               #_"cursor-pointer ml-4 inline-flex text-gray-700 bg-gray-100 border border-red-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"}
              options)
    label])
  ([label]
   (link nil label)))

(defn button-secondary-link
  ([options label]
   [:a (medley/deep-merge {:class 
               "h-10 px-6 py-2 h-auto text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
               #_"cursor-pointer ml-4 inline-flex text-gray-700 bg-gray-100 border border-red-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"}
              options)
    label])
  ([label]
   (button-secondary-link nil label)))

(defn section1
  [header]
  [:h1 {:class "mx-4 my-2 text-4xl text-orange-600"}
   header])

(defn section2
  [header]
  [:h1 {:class "mx-4 my-2 text-2xl text-blue-400"}
   header])

(defn para [content]
  [:p {:class "text-lg leading-relaxed mt-4 text-gray-800"}
   content])
