(ns measures.db
  (:require [reagent.core :as r]))

(def numeric-fields #{:baseline
                     :RR
                     :PC
                     :OR
                     :HR
                     :final})

(defonce state (r/atom {:page? :flash

                        :baseline 0.1
                        :RR 1
                        :PC 0
                        :OR 1
                        :HR 1
                        :final 0.1

                        :errors []
                        :measure-value 1
                        :selected-measure :RR
                        :sig-figs 2
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



