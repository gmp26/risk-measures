(ns tailwind.db
  (:require [reagent.core :as r]))

(defonce state (r/atom {:baseline 0.1
                        :auth? :main
                        :user-dropdown? true}))