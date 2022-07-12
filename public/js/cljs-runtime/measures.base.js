goog.provide('measures.base');
measures.base.render_math = (function measures$base$render_math(){
try{if(cljs.core.truth_(renderMathInElement)){
return renderMathInElement(document.body,({"delimiters": [({"left": "$$", "right": "$$", "display": true}),({"left": "$", "right": "$", "display": false}),({"left": "\\(", "right": "\\)", "display": false}),({"left": "\\[", "right": "\\]", "display": true})], "throwOnError": false}));
} else {
return null;
}
}catch (e48328){if((e48328 instanceof ReferenceError)){
var e = e48328;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ERROR:",e], 0));
} else {
throw e48328;

}
}});
measures.base.spacer = (function measures$base$spacer(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-2","div.w-2",1948670082)], null);
});
measures.base.page = (function measures$base$page(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mx-2 text-lg"], null),content], null);
});
measures.base.button_primary = (function measures$base$button_primary(var_args){
var G__48330 = arguments.length;
switch (G__48330) {
case 2:
return measures.base.button_primary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return measures.base.button_primary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(measures.base.button_primary.cljs$core$IFn$_invoke$arity$2 = (function (options,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"], null)),label], null);
}));

(measures.base.button_primary.cljs$core$IFn$_invoke$arity$1 = (function (label){
return measures.base.button_primary.cljs$core$IFn$_invoke$arity$2(null,label);
}));

(measures.base.button_primary.cljs$lang$maxFixedArity = 2);

measures.base.button_secondary = (function measures$base$button_secondary(label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex text-gray-700 bg-gray-100 border border-red-100 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg"], null),label], null);
});
measures.base.link = (function measures$base$link(var_args){
var G__48332 = arguments.length;
switch (G__48332) {
case 2:
return measures.base.link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return measures.base.link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(measures.base.link.cljs$core$IFn$_invoke$arity$2 = (function (options,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"underline px-2 text-indigo-700 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"], null),options),label], null);
}));

(measures.base.link.cljs$core$IFn$_invoke$arity$1 = (function (label){
return measures.base.link.cljs$core$IFn$_invoke$arity$2(null,label);
}));

(measures.base.link.cljs$lang$maxFixedArity = 2);

measures.base.button_secondary_link = (function measures$base$button_secondary_link(var_args){
var G__48334 = arguments.length;
switch (G__48334) {
case 2:
return measures.base.button_secondary_link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return measures.base.button_secondary_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(measures.base.button_secondary_link.cljs$core$IFn$_invoke$arity$2 = (function (options,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-10 px-6 py-2 h-auto text-blue-600 transition-colors duration-150 border border-indigo-500 rounded-md focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"], null),options),label], null);
}));

(measures.base.button_secondary_link.cljs$core$IFn$_invoke$arity$1 = (function (label){
return measures.base.button_secondary_link.cljs$core$IFn$_invoke$arity$2(null,label);
}));

(measures.base.button_secondary_link.cljs$lang$maxFixedArity = 2);

measures.base.section1 = (function measures$base$section1(header){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mx-4 my-2 text-4xl text-orange-600"], null),header], null);
});
measures.base.section2 = (function measures$base$section2(header){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mx-4 my-2 text-2xl text-blue-400"], null),header], null);
});
measures.base.para = (function measures$base$para(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg leading-relaxed mt-4 text-gray-800"], null),content], null);
});

//# sourceMappingURL=measures.base.js.map
