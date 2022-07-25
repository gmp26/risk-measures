goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51333__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51372__i = 0, G__51372__a = new Array(arguments.length -  0);
while (G__51372__i < G__51372__a.length) {G__51372__a[G__51372__i] = arguments[G__51372__i + 0]; ++G__51372__i;}
  args = new cljs.core.IndexedSeq(G__51372__a,0,null);
} 
return G__51333__delegate.call(this,args);};
G__51333.cljs$lang$maxFixedArity = 0;
G__51333.cljs$lang$applyTo = (function (arglist__51373){
var args = cljs.core.seq(arglist__51373);
return G__51333__delegate(args);
});
G__51333.cljs$core$IFn$_invoke$arity$variadic = G__51333__delegate;
return G__51333;
})()
);

(o.error = (function() { 
var G__51374__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51375__i = 0, G__51375__a = new Array(arguments.length -  0);
while (G__51375__i < G__51375__a.length) {G__51375__a[G__51375__i] = arguments[G__51375__i + 0]; ++G__51375__i;}
  args = new cljs.core.IndexedSeq(G__51375__a,0,null);
} 
return G__51374__delegate.call(this,args);};
G__51374.cljs$lang$maxFixedArity = 0;
G__51374.cljs$lang$applyTo = (function (arglist__51376){
var args = cljs.core.seq(arglist__51376);
return G__51374__delegate(args);
});
G__51374.cljs$core$IFn$_invoke$arity$variadic = G__51374__delegate;
return G__51374;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
