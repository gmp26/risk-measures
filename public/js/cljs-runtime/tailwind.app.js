goog.provide('tailwind.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
tailwind.app.app = (function tailwind$app$app(){
var pred__48231 = cljs.core._EQ_;
var expr__48232 = new cljs.core.Keyword(null,"auth?","auth?",-1680451378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tailwind.db.state));
if(cljs.core.truth_((pred__48231.cljs$core$IFn$_invoke$arity$2 ? pred__48231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main","main",-2117802661),expr__48232) : pred__48231.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),expr__48232)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailwind.views.main], null);
} else {
if(cljs.core.truth_((pred__48231.cljs$core$IFn$_invoke$arity$2 ? pred__48231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),expr__48232) : pred__48231.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__48232)))){
return alert("bad states");
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48232)].join('')));
}
}
});
if((typeof tailwind !== 'undefined') && (typeof tailwind.app !== 'undefined') && (typeof tailwind.app.root !== 'undefined')){
} else {
tailwind.app.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
}
tailwind.app.init = (function tailwind$app$init(){
console.log("init");

return tailwind.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tailwind.views.main], null)));
});
tailwind.app.rerender = (function tailwind$app$rerender(){
tailwind.app.init();

try{if(cljs.core.truth_(renderMathInElement)){
return renderMathInElement(document.body,({"delimiters": [({"left": "$$", "right": "$$", "display": true}),({"left": "$", "right": "$", "display": false}),({"left": "\\(", "right": "\\)", "display": false}),({"left": "\\[", "right": "\\]", "display": true})], "throwOnError": false}));
} else {
return null;
}
}catch (e48234){if((e48234 instanceof ReferenceError)){
var e = e48234;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR:",e], 0));
} else {
throw e48234;

}
}});
tailwind.app.stop = (function tailwind$app$stop(){
return console.log("stop");
});

//# sourceMappingURL=tailwind.app.js.map
