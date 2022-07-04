(ns measures.db
  (:require [reagent.core :as r]))

(defonce state (r/atom {:baseline 0.1
                        :page? :flash
                        :user-dropdown? true
                        :selected-measure :RR}))

(defn flash?
  "Must be called from a component"
  []
  (= (:page? @state) :flash))

(defn home? 
  "Must be called from a component"
  []
  (= (:page? @state) :home))


  
