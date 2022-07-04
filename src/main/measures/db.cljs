(ns measures.db
  (:require [reagent.core :as r]))

(defonce state (r/atom {:baseline 0.1
                        :page? :flash
                        :user-dropdown? true
                        :selected-measure :RR}))

(defn flash?
  []
  (= (:page? @state) :flash))

(defn home? []
  (= (:page? @state) :home))

(home?)
  
