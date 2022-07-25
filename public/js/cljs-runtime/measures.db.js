goog.provide('measures.db');
measures.db.numeric_fields = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"baseline","baseline",1151033280),null,new cljs.core.Keyword(null,"HR","HR",1056134531),null,new cljs.core.Keyword(null,"PC","PC",-2096819416),null,new cljs.core.Keyword(null,"OR","OR",-1220615924),null,new cljs.core.Keyword(null,"final","final",1157881357),null,new cljs.core.Keyword(null,"RR","RR",-1849589574),null], null), null);
measures.db.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"HR","HR",1056134531),new cljs.core.Keyword(null,"measure-value","measure-value",-185107611),new cljs.core.Keyword(null,"selected-measure","selected-measure",848135654),new cljs.core.Keyword(null,"sig-figs","sig-figs",1400822694),new cljs.core.Keyword(null,"PC","PC",-2096819416),new cljs.core.Keyword(null,"OR","OR",-1220615924),new cljs.core.Keyword(null,"final","final",1157881357),new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007),new cljs.core.Keyword(null,"page?","page?",644039860),new cljs.core.Keyword(null,"RR","RR",-1849589574)],[0.1,cljs.core.PersistentVector.EMPTY,(1),(1),new cljs.core.Keyword(null,"RR","RR",-1849589574),(2),(0),(1),0.1,new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"flash","flash",934660619),(1)]));
/**
 * Must be called from a component
 */
measures.db.flash_QMARK_ = (function measures$db$flash_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)),new cljs.core.Keyword(null,"flash","flash",934660619));
});
/**
 * Must be called from a component
 */
measures.db.home_QMARK_ = (function measures$db$home_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)),new cljs.core.Keyword(null,"home","home",-74557309));
});
measures.db.baseline = (function measures$db$baseline(){
return new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
});
measures.db.final$ = (function measures$db$final(){
return new cljs.core.Keyword(null,"final","final",1157881357).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
});

//# sourceMappingURL=measures.db.js.map
