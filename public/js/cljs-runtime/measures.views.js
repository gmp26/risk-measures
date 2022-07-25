goog.provide('measures.views');
/**
 * Return true if x is a number
 */
measures.views.is_number_QMARK_ = (function measures$views$is_number_QMARK_(x){
return ((typeof x === 'number') && (cljs.core.not(isNaN(x))));
});
measures.views.measures_menu = (function measures$views$measures_menu(){
var selected_measure = new cljs.core.Keyword(null,"selected-measure","selected-measure",848135654).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
var selected_QMARK_ = (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m),selected_measure);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border border-gray-600 m-4 p-2 rounded-md w-72 bg-white shadow-lg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Choose a measure"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mx-2.w-100%","ul.mx-2.w-100%",-2078389622)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-2 py-2  w-full"," cursor-pointer ",((selected_QMARK_(m))?"text-white bg-blue-500 hover:bg-indigo-500":"text-lg text-gray-400 hover:bg-indigo-500")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return measures.events.select_measure(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m));
})], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(m)], null);
}),measures.info.measures))], null);
});
measures.views.maths_detail = (function measures$views$maths_detail(){
return (function (){
var m = measures.info.current_measure();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.section2,["The Mathematics of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(m))," $(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)),")$"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"m-4"], null),"Let the baseline risk be $r$. \n          The risk in the 'exposed' group, $p$, depends on the measure of change"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"maxw-[800px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.ml-4.mt-0","li.ml-4.mt-0",-1750057846),new cljs.core.Keyword(null,"maths","maths",685326344).cljs$core$IFn$_invoke$arity$1(m)], null)], null)], null)], null);
});
});
/**
 * maximum relative risk
 */
measures.views.max_relative_risk = (function measures$views$max_relative_risk(baseline,final$){
if(cljs.core.truth_((function (){var and__4115__auto__ = baseline;
if(cljs.core.truth_(and__4115__auto__)){
return (final$ > (0));
} else {
return and__4115__auto__;
}
})())){
return (baseline / final$);
} else {
return Number.POSITIVE_INFINITY();
}
});
/**
 * Works except for 0.X0X
 */
measures.views.safe = (function measures$views$safe(v,fix){
if(((typeof v === 'string') && (((clojure.string.ends_with_QMARK_(v,"0")) || (clojure.string.ends_with_QMARK_(v,".")))))){
return v;
} else {
var x = Number(Number(v).toFixed(fix));
if(measures.views.is_number_QMARK_(x)){
} else {
throw (new Error("Assert failed: (is-number? x)"));
}

return x;
}
});
/**
 * return a value or an eror if value is invalid.
 * Type="number" inputs eliminate most - maybe all - typed entry errors, but some can arise
 * from applying the formulae.
 */
measures.views.maybe_value = (function measures$views$maybe_value(ref,field,new_value){
var measure_49504 = measures.info.current_measure();
var new_value_49505__$1 = (function (){var fexpr__49483 = (cljs.core.truth_((measures.db.numeric_fields.cljs$core$IFn$_invoke$arity$1 ? measures.db.numeric_fields.cljs$core$IFn$_invoke$arity$1(field) : measures.db.numeric_fields.call(null,field)))?Number:cljs.core.identity);
return (fexpr__49483.cljs$core$IFn$_invoke$arity$1 ? fexpr__49483.cljs$core$IFn$_invoke$arity$1(new_value) : fexpr__49483.call(null,new_value));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"baseline","baseline",1151033280))){
var r_49507 = new_value_49505__$1;
var p_49508 = (function (){var G__49485 = new_value_49505__$1;
var G__49486 = (function (){var G__49488 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(measure_49504);
var fexpr__49487 = cljs.core.deref(ref);
return (fexpr__49487.cljs$core$IFn$_invoke$arity$1 ? fexpr__49487.cljs$core$IFn$_invoke$arity$1(G__49488) : fexpr__49487.call(null,G__49488));
})();
var fexpr__49484 = new cljs.core.Keyword(null,"calc-final","calc-final",1060997511).cljs$core$IFn$_invoke$arity$1(measure_49504);
return (fexpr__49484.cljs$core$IFn$_invoke$arity$2 ? fexpr__49484.cljs$core$IFn$_invoke$arity$2(G__49485,G__49486) : fexpr__49484.call(null,G__49485,G__49486));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"final","final",1157881357),measures.views.safe(p_49508,(3)));

console.log(["r-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(measure_49504)),"->p "].join(''),r_49507,p_49508);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"final","final",1157881357))){
var r_49509 = new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref));
var p_49510 = new_value_49505__$1;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,new cljs.core.Keyword(null,"baseline","baseline",1151033280),measures.views.safe(r_49509,(3)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"RR","RR",-1849589574),measures.views.safe(measures.info.r_p__GT_RR(r_49509,p_49510),(2)),new cljs.core.Keyword(null,"PC","PC",-2096819416),measures.views.safe(measures.info.r_p__GT_PC(r_49509,p_49510),(1)),new cljs.core.Keyword(null,"OR","OR",-1220615924),measures.views.safe(measures.info.r_p__GT_OR(r_49509,p_49510),(2)),new cljs.core.Keyword(null,"HR","HR",1056134531),measures.views.safe(measures.info.r_p__GT_HR(r_49509,p_49510),(2))], 0));

console.log(["(r-p","->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(measure_49504))].join(''),r_49509,p_49510);
} else {
var r_49511 = Number(new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ref)));
var p_49512 = (function (){var fexpr__49489 = new cljs.core.Keyword(null,"calc-final","calc-final",1060997511).cljs$core$IFn$_invoke$arity$1(measure_49504);
return (fexpr__49489.cljs$core$IFn$_invoke$arity$2 ? fexpr__49489.cljs$core$IFn$_invoke$arity$2(r_49511,new_value_49505__$1) : fexpr__49489.call(null,r_49511,new_value_49505__$1));
})();
console.log("r-",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(measure_49504),"->p ",r_49511,p_49512);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"final","final",1157881357),measures.views.safe(p_49512,(3)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,new cljs.core.Keyword(null,"RR","RR",-1849589574),measures.views.safe(measures.info.r_p__GT_RR(r_49511,p_49512),(2)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"PC","PC",-2096819416),measures.views.safe(measures.info.r_p__GT_PC(r_49511,p_49512),(1)),new cljs.core.Keyword(null,"OR","OR",-1220615924),measures.views.safe(measures.info.r_p__GT_OR(r_49511,p_49512),(2)),new cljs.core.Keyword(null,"HR","HR",1056134531),measures.views.safe(measures.info.r_p__GT_HR(r_49511,p_49512),(2))], 0));

}
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new_value], null);
});
measures.views.log_error = (function measures$views$log_error(ref,field,error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"error","error",-978969032),error], null)], 0));
});
measures.views.new_baseline = (function measures$views$new_baseline(ref,new_val){
if((new_val > (0))){
} else {
throw (new Error("Assert failed: (pos? new-val)"));
}

return new_val;
});
measures.views.new_rr = (function measures$views$new_rr(ref,new_val){
return null;
});
measures.views.new_final = (function measures$views$new_final(ref,new_val){
return null;
});
/**
 * Eeturn a change-handler for a field inside ref. The handler inserts the new value into
 * the ref field, or it appends :errors in ref, leaving the field unchanged.
 */
measures.views.get_field_change_handler = (function measures$views$get_field_change_handler(ref,field){
return (function (e){
e.nativeEvent.preventDefault();

var new_value = e.target.value;
var vec__49490 = measures.views.maybe_value(ref,field,new_value);
var err_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49490,(0),null);
var good_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49490,(1),null);
var error = vec__49490;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err_field,good_value], null)], 0));

if(cljs.core.truth_(err_field)){
return measures.views.log_error(ref,field,error);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,field,good_value);
}
});
});
measures.views.step_from_field = (function measures$views$step_from_field(field){
var fexpr__49493 = measures.info.measure_by(field);
return (fexpr__49493.cljs$core$IFn$_invoke$arity$1 ? fexpr__49493.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"step","step",1288888124)) : fexpr__49493.call(null,new cljs.core.Keyword(null,"step","step",1288888124)));
});
measures.views.step_from_field(new cljs.core.Keyword(null,"HR","HR",1056134531));
measures.views.dps_from_step = (function measures$views$dps_from_step(step){
return (- Math.log10(step));
});
/**
 * Evaluate a field to configured precision
 */
measures.views.get_field_value = (function measures$views$get_field_value(ref,field){
return measures.views.safe((function (){var fexpr__49494 = cljs.core.deref(ref);
return (fexpr__49494.cljs$core$IFn$_invoke$arity$1 ? fexpr__49494.cljs$core$IFn$_invoke$arity$1(field) : fexpr__49494.call(null,field));
})(),(cljs.core.truth_((function (){var fexpr__49495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"baseline","baseline",1151033280),null,new cljs.core.Keyword(null,"final","final",1157881357),null], null), null);
return (fexpr__49495.cljs$core$IFn$_invoke$arity$1 ? fexpr__49495.cljs$core$IFn$_invoke$arity$1(field) : fexpr__49495.call(null,field));
})())?(3):measures.views.dps_from_step(measures.views.step_from_field(field))));
});
/**
 * enter a labelled field value to ref in a form
 */
measures.views.enter = (function measures$views$enter(var_args){
var G__49497 = arguments.length;
switch (G__49497) {
case 4:
return measures.views.enter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return measures.views.enter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(measures.views.enter.cljs$core$IFn$_invoke$arity$4 = (function (options,ref,field,label){
var options__$1 = medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],["0",measures.views.get_field_value(ref,field),"number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"120px"], null),"1",cljs.core.name(field),"ml-4 text-lg rounded-lg",measures.views.get_field_change_handler(ref,field),"0.01"]),options);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.flex-col.mb-1","section.flex.flex-col.mb-1",-499282624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),cljs.core.name(field)], null),label,":"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),options__$1], null),(cljs.core.truth_(new cljs.core.Keyword(null,"percent?","percent?",1802863544).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl","span.text-2xl",506731919)," %"], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl","span.text-2xl",506731919)," %"], null):null)], null);
}));

(measures.views.enter.cljs$core$IFn$_invoke$arity$3 = (function (ref,field,label){
return measures.views.enter.cljs$core$IFn$_invoke$arity$4(null,ref,field,label);
}));

(measures.views.enter.cljs$lang$maxFixedArity = 4);

measures.views.tool_button = (function measures$views$tool_button(label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.button_primary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full p-2"], null),label], null);
});
measures.views.tool_menu = (function measures$views$tool_menu(){
var selected_tool = new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
var selected_QMARK_ = (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m),selected_tool);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"shadow-lg border border-gray-600  m-4 p-4 rounded-md w-60",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Choose a tool"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mx-2.w-100%","ul.mx-2.w-100%",-2078389622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:w-1/8"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-2 py-2  w-full"," cursor-pointer ",((selected_QMARK_(m))?"text-white bg-blue-500":"text-lg text-gray-400")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return measures.events.select_tool(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m));
})], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(m)], null);
}),measures.info.tools()))], null);
});
measures.views.status = (function measures$views$status(){
var measure = measures.info.current_measure();
var final$ = Number((function (){var G__49499 = new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
var G__49500 = new cljs.core.Keyword(null,"measure-value","measure-value",-185107611).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
var fexpr__49498 = new cljs.core.Keyword(null,"calc-final","calc-final",1060997511).cljs$core$IFn$_invoke$arity$1(measure);
return (fexpr__49498.cljs$core$IFn$_invoke$arity$2 ? fexpr__49498.cljs$core$IFn$_invoke$arity$2(G__49499,G__49500) : fexpr__49498.call(null,G__49499,G__49500));
})());
var measure_title = clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measure));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4 mt-2 pr-2 first-letter:flex flex-col min-w-[300px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Status"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The baseline risk is ",measures.views.safe(new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)),(3))," or ",measures.views.safe(((100) * new cljs.core.Keyword(null,"baseline","baseline",1151033280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state))),(1)),"%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1","p.mt-1",-2099254984),["The ",clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measures.info.measure_by(new cljs.core.Keyword(null,"RR","RR",-1849589574))))," is "].join(''),new cljs.core.Keyword(null,"RR","RR",-1849589574).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1","p.mt-1",-2099254984),["The ",clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measures.info.measure_by(new cljs.core.Keyword(null,"PC","PC",-2096819416))))," is "].join(''),new cljs.core.Keyword(null,"PC","PC",-2096819416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)),"%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1","p.mt-1",-2099254984),["The ",clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measures.info.measure_by(new cljs.core.Keyword(null,"OR","OR",-1220615924))))," is "].join(''),new cljs.core.Keyword(null,"OR","OR",-1220615924).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1","p.mt-1",-2099254984),["The ",clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measures.info.measure_by(new cljs.core.Keyword(null,"HR","HR",1056134531))))," is "].join(''),new cljs.core.Keyword(null,"HR","HR",1056134531).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-1","p.mt-1",-2099254984),"So the final risk is ",measures.views.safe(new cljs.core.Keyword(null,"final","final",1157881357).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)),(3))," or ",measures.views.safe(((100) * new cljs.core.Keyword(null,"final","final",1157881357).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state))),(3)),"%."], null)], null);
});
/**
 * Render any errors
 */
measures.views.error_report = (function measures$views$error_report(){
var temp__5735__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state)));
if(temp__5735__auto__){
var errors = temp__5735__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (err){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err], 0))], null);
}),errors));
} else {
return null;
}
});
/**
 * Summarise the calculation
 */
measures.views.inputs_panel = (function measures$views$inputs_panel(){
var measure = measures.info.current_measure();
var delta = measures.info.delta;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.flex-col.md:flex-eow","section.flex.flex-col.md:flex-eow",-797403671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.mt-2.ml-4","form.mt-2.ml-4",1867047809),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.enter,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),delta,new cljs.core.Keyword(null,"max","max",61366548),((1) - delta),new cljs.core.Keyword(null,"step","step",1288888124),delta], null),measures.db.state,new cljs.core.Keyword(null,"baseline","baseline",1151033280),"Baseline risk "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.enter,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(measure),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(measure),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(measure)], null),measures.db.state,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(measure),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(measure)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.enter,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),delta,new cljs.core.Keyword(null,"max","max",61366548),((1) - delta),new cljs.core.Keyword(null,"step","step",1288888124),delta], null),measures.db.state,new cljs.core.Keyword(null,"final","final",1157881357),"Final 'exposed' risk"], null)], null)], null)], null)], null);
});
measures.views.master_detail = (function measures$views$master_detail(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex md:flex-row flex-col overflow-y-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.sm.bg-slate-200","div.flex.flex-col.sm.bg-slate-200",-1688166723),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.sm:flex-row","div.flex.flex-row.sm:flex-row",1576759687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.measures_menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.inputs_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.status], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.ml-4.mb-1.text-gray-600.text-sm","p.ml-4.mb-1.text-gray-600.text-sm",1624194469),"Red boxes indicate indicate out of range values, as also may 0 and 0.999"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.maths_detail], null)], null)], null);
});
measures.views.intro = (function measures$views$intro(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"RealRisk - Light "], null),"is a crib sheet for those who just need a risk measure calculator and a quick reminder of how things work. \n           If you need more, visit",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://realrisk.wintoncentre.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"the full version."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hidden md:block bg-gray-200 p-4 mt-8  rounded-md"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-base text-2xl"], null),"Many studies compare the risks in an 'exposed' group to the risks\n          in a 'baseline' or 'control' group."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"\n          The results are often published as some relative measure risk"], null),"."," Depending on context, you may encounter Relative Risks, Percentage Changes, Odds Ratios, or Hazard Ratios. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-base","span.text-base",-1826341282),"The maths differs in each case, but the final exposed risk\n            is always determined by applying the relative risk measurement to the baseline risk. ","The baseline risk, relative risk, and final risk are related so that knowing two allows you to determine the third."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Here, we provide calculators and definitions for each of these risk measures."], null)], null)], null)], null);
});
measures.views.flash = (function measures$views$flash(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 text-gray-600 body-font"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col md:flex-row justify-start items-start"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"], null),"RealRisk - Light"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.intro], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.my-8.flex.justify-center.space-between","section.my-8.flex.justify-center.space-between",1282419033),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.button_secondary_link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://realrisk.wintoncentre.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Full Version"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.spacer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.button_primary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),measures.events.go_home], null),"Light Version"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-[400px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"object-cover object-center rounded-md  w-auto ",new cljs.core.Keyword(null,"alt","alt",-3214426),"hero",new cljs.core.Keyword(null,"src","src",-1651076051),"/assets/flash.jpg"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)," Photo by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",new cljs.core.Keyword(null,"href","href",-793805698),"https://unsplash.com/@johnmoeses"], null),"John Moeses Bauan"], null)," on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",new cljs.core.Keyword(null,"href","href",-793805698),"https://unsplash.com/s/photos/risk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"], null),"Unsplash"], null)], null)], null)], null)], null);
});
measures.views.home = (function measures$views$home(){
setTimeout(measures.base.render_math,(10));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container flex flex-col h-screen justify-between pt-2"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.master_detail], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.flex.justify-centre.space-around.m-2","section.flex.justify-centre.space-around.m-2",1337441130),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.button_primary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),measures.events.go_flash_page], null),"Home"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.spacer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.button_secondary_link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://realrisk.wintoncentre.uk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Switch to Real Risk"], null)], null)], null);
});
measures.views.main = (function measures$views$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.page,((measures.db.flash_QMARK_())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.flash], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.views.home], null))], null);
});

//# sourceMappingURL=measures.views.js.map
