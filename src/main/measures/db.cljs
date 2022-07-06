(ns measures.db
  (:require [reagent.core :as r]))

(defonce state (r/atom {:baseline 0.1
                        :final 0.1
                        :measure-value 1
                        :RR 1
                        :PC 0
                        :OR 1
                        :HR 1
                        :page? :flash
                        :user-dropdown? true
                        :selected-measure :RR
                        :selected-tool :maths}))

(defn flash?
  "Must be called from a component"
  []
  (= (:page? @state) :flash))

(defn home? 
  "Must be called from a component"
  []
  (= (:page? @state) :home))

(defn baseline [] (:baseline @state))
(defn final [] (:final @state))


  
