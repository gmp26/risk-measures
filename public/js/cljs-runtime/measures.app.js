goog.provide('measures.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
measures.app.app = (function measures$app$app(){
var pred__48153 = cljs.core._EQ_;
var expr__48154 = new cljs.core.Keyword(null,"page?","page?",644039860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
if(cljs.core.truth_((pred__48153.cljs$core$IFn$_invoke$arity$2 ? pred__48153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main","main",-2117802661),expr__48154) : pred__48153.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),expr__48154)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.main], null);
} else {
if(cljs.core.truth_((pred__48153.cljs$core$IFn$_invoke$arity$2 ? pred__48153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),expr__48154) : pred__48153.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__48154)))){
return alert("bad states");
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48154)].join('')));
}
}
});
if((typeof measures !== 'undefined') && (typeof measures.app !== 'undefined') && (typeof measures.app.root !== 'undefined')){
} else {
measures.app.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
}
measures.app.init = (function measures$app$init(){
return measures.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.main], null)));
});
measures.app.rerender = (function measures$app$rerender(){
measures.app.init();

try{if(cljs.core.truth_(renderMathInElement)){
return renderMathInElement(document.body,({"delimiters": [({"left": "$$", "right": "$$", "display": true}),({"left": "$", "right": "$", "display": false}),({"left": "\\(", "right": "\\)", "display": false}),({"left": "\\[", "right": "\\]", "display": true})], "throwOnError": false}));
} else {
return null;
}
}catch (e48160){if((e48160 instanceof ReferenceError)){
var e = e48160;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR:",e], 0));
} else {
throw e48160;

}
}});
measures.app.stop = (function measures$app$stop(){
return null;
});

//# sourceMappingURL=measures.app.js.map
