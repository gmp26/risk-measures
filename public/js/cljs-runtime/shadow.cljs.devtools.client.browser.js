goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51678 = arguments.length;
var i__4737__auto___51679 = (0);
while(true){
if((i__4737__auto___51679 < len__4736__auto___51678)){
args__4742__auto__.push((arguments[i__4737__auto___51679]));

var G__51680 = (i__4737__auto___51679 + (1));
i__4737__auto___51679 = G__51680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51422){
var G__51423 = cljs.core.first(seq51422);
var seq51422__$1 = cljs.core.next(seq51422);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51423,seq51422__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51424 = cljs.core.seq(sources);
var chunk__51425 = null;
var count__51426 = (0);
var i__51427 = (0);
while(true){
if((i__51427 < count__51426)){
var map__51435 = chunk__51425.cljs$core$IIndexed$_nth$arity$2(null,i__51427);
var map__51435__$1 = (((((!((map__51435 == null))))?(((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51435):map__51435);
var src = map__51435__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51437){var e_51682 = e51437;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51682);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51682.message)].join('')));
}

var G__51683 = seq__51424;
var G__51684 = chunk__51425;
var G__51685 = count__51426;
var G__51686 = (i__51427 + (1));
seq__51424 = G__51683;
chunk__51425 = G__51684;
count__51426 = G__51685;
i__51427 = G__51686;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51424);
if(temp__5735__auto__){
var seq__51424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51424__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51424__$1);
var G__51696 = cljs.core.chunk_rest(seq__51424__$1);
var G__51697 = c__4556__auto__;
var G__51698 = cljs.core.count(c__4556__auto__);
var G__51699 = (0);
seq__51424 = G__51696;
chunk__51425 = G__51697;
count__51426 = G__51698;
i__51427 = G__51699;
continue;
} else {
var map__51438 = cljs.core.first(seq__51424__$1);
var map__51438__$1 = (((((!((map__51438 == null))))?(((((map__51438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51438):map__51438);
var src = map__51438__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51440){var e_51706 = e51440;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51706);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51706.message)].join('')));
}

var G__51707 = cljs.core.next(seq__51424__$1);
var G__51708 = null;
var G__51709 = (0);
var G__51710 = (0);
seq__51424 = G__51707;
chunk__51425 = G__51708;
count__51426 = G__51709;
i__51427 = G__51710;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51442 = cljs.core.seq(js_requires);
var chunk__51443 = null;
var count__51444 = (0);
var i__51445 = (0);
while(true){
if((i__51445 < count__51444)){
var js_ns = chunk__51443.cljs$core$IIndexed$_nth$arity$2(null,i__51445);
var require_str_51718 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51718);


var G__51719 = seq__51442;
var G__51720 = chunk__51443;
var G__51721 = count__51444;
var G__51722 = (i__51445 + (1));
seq__51442 = G__51719;
chunk__51443 = G__51720;
count__51444 = G__51721;
i__51445 = G__51722;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51442);
if(temp__5735__auto__){
var seq__51442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51442__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51442__$1);
var G__51725 = cljs.core.chunk_rest(seq__51442__$1);
var G__51726 = c__4556__auto__;
var G__51727 = cljs.core.count(c__4556__auto__);
var G__51728 = (0);
seq__51442 = G__51725;
chunk__51443 = G__51726;
count__51444 = G__51727;
i__51445 = G__51728;
continue;
} else {
var js_ns = cljs.core.first(seq__51442__$1);
var require_str_51731 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51731);


var G__51733 = cljs.core.next(seq__51442__$1);
var G__51734 = null;
var G__51735 = (0);
var G__51736 = (0);
seq__51442 = G__51733;
chunk__51443 = G__51734;
count__51444 = G__51735;
i__51445 = G__51736;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51455){
var map__51456 = p__51455;
var map__51456__$1 = (((((!((map__51456 == null))))?(((((map__51456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51456):map__51456);
var msg = map__51456__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51458(s__51459){
return (new cljs.core.LazySeq(null,(function (){
var s__51459__$1 = s__51459;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51459__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51465 = cljs.core.first(xs__6292__auto__);
var map__51465__$1 = (((((!((map__51465 == null))))?(((((map__51465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51465):map__51465);
var src = map__51465__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51465__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51465__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51459__$1,map__51465,map__51465__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51456,map__51456__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51458_$_iter__51460(s__51461){
return (new cljs.core.LazySeq(null,((function (s__51459__$1,map__51465,map__51465__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51456,map__51456__$1,msg,info,reload_info){
return (function (){
var s__51461__$1 = s__51461;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51461__$1);
if(temp__5735__auto____$1){
var s__51461__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51461__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51461__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51463 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51462 = (0);
while(true){
if((i__51462 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51462);
cljs.core.chunk_append(b__51463,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51752 = (i__51462 + (1));
i__51462 = G__51752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51463),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51458_$_iter__51460(cljs.core.chunk_rest(s__51461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51463),null);
}
} else {
var warning = cljs.core.first(s__51461__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51458_$_iter__51460(cljs.core.rest(s__51461__$2)));
}
} else {
return null;
}
break;
}
});})(s__51459__$1,map__51465,map__51465__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51456,map__51456__$1,msg,info,reload_info))
,null,null));
});})(s__51459__$1,map__51465,map__51465__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51456,map__51456__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51458(cljs.core.rest(s__51459__$1)));
} else {
var G__51753 = cljs.core.rest(s__51459__$1);
s__51459__$1 = G__51753;
continue;
}
} else {
var G__51754 = cljs.core.rest(s__51459__$1);
s__51459__$1 = G__51754;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51469_51755 = cljs.core.seq(warnings);
var chunk__51470_51756 = null;
var count__51471_51757 = (0);
var i__51472_51758 = (0);
while(true){
if((i__51472_51758 < count__51471_51757)){
var map__51480_51759 = chunk__51470_51756.cljs$core$IIndexed$_nth$arity$2(null,i__51472_51758);
var map__51480_51760__$1 = (((((!((map__51480_51759 == null))))?(((((map__51480_51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51480_51759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51480_51759):map__51480_51759);
var w_51761 = map__51480_51760__$1;
var msg_51762__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480_51760__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480_51760__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480_51760__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51480_51760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51765)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51763),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51764),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51762__$1)].join(''));


var G__51769 = seq__51469_51755;
var G__51770 = chunk__51470_51756;
var G__51771 = count__51471_51757;
var G__51772 = (i__51472_51758 + (1));
seq__51469_51755 = G__51769;
chunk__51470_51756 = G__51770;
count__51471_51757 = G__51771;
i__51472_51758 = G__51772;
continue;
} else {
var temp__5735__auto___51773 = cljs.core.seq(seq__51469_51755);
if(temp__5735__auto___51773){
var seq__51469_51774__$1 = temp__5735__auto___51773;
if(cljs.core.chunked_seq_QMARK_(seq__51469_51774__$1)){
var c__4556__auto___51775 = cljs.core.chunk_first(seq__51469_51774__$1);
var G__51776 = cljs.core.chunk_rest(seq__51469_51774__$1);
var G__51777 = c__4556__auto___51775;
var G__51778 = cljs.core.count(c__4556__auto___51775);
var G__51779 = (0);
seq__51469_51755 = G__51776;
chunk__51470_51756 = G__51777;
count__51471_51757 = G__51778;
i__51472_51758 = G__51779;
continue;
} else {
var map__51482_51780 = cljs.core.first(seq__51469_51774__$1);
var map__51482_51781__$1 = (((((!((map__51482_51780 == null))))?(((((map__51482_51780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51482_51780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51482_51780):map__51482_51780);
var w_51782 = map__51482_51781__$1;
var msg_51783__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482_51781__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482_51781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482_51781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482_51781__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51786)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51784),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51785),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51783__$1)].join(''));


var G__51787 = cljs.core.next(seq__51469_51774__$1);
var G__51788 = null;
var G__51789 = (0);
var G__51790 = (0);
seq__51469_51755 = G__51787;
chunk__51470_51756 = G__51788;
count__51471_51757 = G__51789;
i__51472_51758 = G__51790;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51454_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51454_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51490){
var map__51491 = p__51490;
var map__51491__$1 = (((((!((map__51491 == null))))?(((((map__51491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51491):map__51491);
var msg = map__51491__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51491__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51493 = cljs.core.seq(updates);
var chunk__51495 = null;
var count__51496 = (0);
var i__51497 = (0);
while(true){
if((i__51497 < count__51496)){
var path = chunk__51495.cljs$core$IIndexed$_nth$arity$2(null,i__51497);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51530_51801 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51534_51802 = null;
var count__51535_51803 = (0);
var i__51536_51804 = (0);
while(true){
if((i__51536_51804 < count__51535_51803)){
var node_51805 = chunk__51534_51802.cljs$core$IIndexed$_nth$arity$2(null,i__51536_51804);
if(cljs.core.not(node_51805.shadow$old)){
var path_match_51806 = shadow.cljs.devtools.client.browser.match_paths(node_51805.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51806)){
var new_link_51807 = (function (){var G__51547 = node_51805.cloneNode(true);
G__51547.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51806),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51547;
})();
(node_51805.shadow$old = true);

(new_link_51807.onload = ((function (seq__51530_51801,chunk__51534_51802,count__51535_51803,i__51536_51804,seq__51493,chunk__51495,count__51496,i__51497,new_link_51807,path_match_51806,node_51805,path,map__51491,map__51491__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51805);
});})(seq__51530_51801,chunk__51534_51802,count__51535_51803,i__51536_51804,seq__51493,chunk__51495,count__51496,i__51497,new_link_51807,path_match_51806,node_51805,path,map__51491,map__51491__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51806], 0));

goog.dom.insertSiblingAfter(new_link_51807,node_51805);


var G__51808 = seq__51530_51801;
var G__51809 = chunk__51534_51802;
var G__51810 = count__51535_51803;
var G__51811 = (i__51536_51804 + (1));
seq__51530_51801 = G__51808;
chunk__51534_51802 = G__51809;
count__51535_51803 = G__51810;
i__51536_51804 = G__51811;
continue;
} else {
var G__51812 = seq__51530_51801;
var G__51813 = chunk__51534_51802;
var G__51814 = count__51535_51803;
var G__51815 = (i__51536_51804 + (1));
seq__51530_51801 = G__51812;
chunk__51534_51802 = G__51813;
count__51535_51803 = G__51814;
i__51536_51804 = G__51815;
continue;
}
} else {
var G__51816 = seq__51530_51801;
var G__51817 = chunk__51534_51802;
var G__51818 = count__51535_51803;
var G__51819 = (i__51536_51804 + (1));
seq__51530_51801 = G__51816;
chunk__51534_51802 = G__51817;
count__51535_51803 = G__51818;
i__51536_51804 = G__51819;
continue;
}
} else {
var temp__5735__auto___51820 = cljs.core.seq(seq__51530_51801);
if(temp__5735__auto___51820){
var seq__51530_51821__$1 = temp__5735__auto___51820;
if(cljs.core.chunked_seq_QMARK_(seq__51530_51821__$1)){
var c__4556__auto___51822 = cljs.core.chunk_first(seq__51530_51821__$1);
var G__51823 = cljs.core.chunk_rest(seq__51530_51821__$1);
var G__51824 = c__4556__auto___51822;
var G__51825 = cljs.core.count(c__4556__auto___51822);
var G__51826 = (0);
seq__51530_51801 = G__51823;
chunk__51534_51802 = G__51824;
count__51535_51803 = G__51825;
i__51536_51804 = G__51826;
continue;
} else {
var node_51827 = cljs.core.first(seq__51530_51821__$1);
if(cljs.core.not(node_51827.shadow$old)){
var path_match_51828 = shadow.cljs.devtools.client.browser.match_paths(node_51827.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51828)){
var new_link_51829 = (function (){var G__51548 = node_51827.cloneNode(true);
G__51548.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51828),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51548;
})();
(node_51827.shadow$old = true);

(new_link_51829.onload = ((function (seq__51530_51801,chunk__51534_51802,count__51535_51803,i__51536_51804,seq__51493,chunk__51495,count__51496,i__51497,new_link_51829,path_match_51828,node_51827,seq__51530_51821__$1,temp__5735__auto___51820,path,map__51491,map__51491__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51827);
});})(seq__51530_51801,chunk__51534_51802,count__51535_51803,i__51536_51804,seq__51493,chunk__51495,count__51496,i__51497,new_link_51829,path_match_51828,node_51827,seq__51530_51821__$1,temp__5735__auto___51820,path,map__51491,map__51491__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51828], 0));

goog.dom.insertSiblingAfter(new_link_51829,node_51827);


var G__51830 = cljs.core.next(seq__51530_51821__$1);
var G__51831 = null;
var G__51832 = (0);
var G__51833 = (0);
seq__51530_51801 = G__51830;
chunk__51534_51802 = G__51831;
count__51535_51803 = G__51832;
i__51536_51804 = G__51833;
continue;
} else {
var G__51834 = cljs.core.next(seq__51530_51821__$1);
var G__51835 = null;
var G__51836 = (0);
var G__51837 = (0);
seq__51530_51801 = G__51834;
chunk__51534_51802 = G__51835;
count__51535_51803 = G__51836;
i__51536_51804 = G__51837;
continue;
}
} else {
var G__51838 = cljs.core.next(seq__51530_51821__$1);
var G__51839 = null;
var G__51840 = (0);
var G__51841 = (0);
seq__51530_51801 = G__51838;
chunk__51534_51802 = G__51839;
count__51535_51803 = G__51840;
i__51536_51804 = G__51841;
continue;
}
}
} else {
}
}
break;
}


var G__51842 = seq__51493;
var G__51843 = chunk__51495;
var G__51844 = count__51496;
var G__51845 = (i__51497 + (1));
seq__51493 = G__51842;
chunk__51495 = G__51843;
count__51496 = G__51844;
i__51497 = G__51845;
continue;
} else {
var G__51846 = seq__51493;
var G__51847 = chunk__51495;
var G__51848 = count__51496;
var G__51849 = (i__51497 + (1));
seq__51493 = G__51846;
chunk__51495 = G__51847;
count__51496 = G__51848;
i__51497 = G__51849;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51493);
if(temp__5735__auto__){
var seq__51493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51493__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51493__$1);
var G__51850 = cljs.core.chunk_rest(seq__51493__$1);
var G__51851 = c__4556__auto__;
var G__51852 = cljs.core.count(c__4556__auto__);
var G__51853 = (0);
seq__51493 = G__51850;
chunk__51495 = G__51851;
count__51496 = G__51852;
i__51497 = G__51853;
continue;
} else {
var path = cljs.core.first(seq__51493__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51549_51854 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51553_51855 = null;
var count__51554_51856 = (0);
var i__51555_51857 = (0);
while(true){
if((i__51555_51857 < count__51554_51856)){
var node_51858 = chunk__51553_51855.cljs$core$IIndexed$_nth$arity$2(null,i__51555_51857);
if(cljs.core.not(node_51858.shadow$old)){
var path_match_51859 = shadow.cljs.devtools.client.browser.match_paths(node_51858.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51859)){
var new_link_51860 = (function (){var G__51572 = node_51858.cloneNode(true);
G__51572.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51859),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51572;
})();
(node_51858.shadow$old = true);

(new_link_51860.onload = ((function (seq__51549_51854,chunk__51553_51855,count__51554_51856,i__51555_51857,seq__51493,chunk__51495,count__51496,i__51497,new_link_51860,path_match_51859,node_51858,path,seq__51493__$1,temp__5735__auto__,map__51491,map__51491__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51858);
});})(seq__51549_51854,chunk__51553_51855,count__51554_51856,i__51555_51857,seq__51493,chunk__51495,count__51496,i__51497,new_link_51860,path_match_51859,node_51858,path,seq__51493__$1,temp__5735__auto__,map__51491,map__51491__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51859], 0));

goog.dom.insertSiblingAfter(new_link_51860,node_51858);


var G__51873 = seq__51549_51854;
var G__51874 = chunk__51553_51855;
var G__51875 = count__51554_51856;
var G__51876 = (i__51555_51857 + (1));
seq__51549_51854 = G__51873;
chunk__51553_51855 = G__51874;
count__51554_51856 = G__51875;
i__51555_51857 = G__51876;
continue;
} else {
var G__51877 = seq__51549_51854;
var G__51878 = chunk__51553_51855;
var G__51879 = count__51554_51856;
var G__51880 = (i__51555_51857 + (1));
seq__51549_51854 = G__51877;
chunk__51553_51855 = G__51878;
count__51554_51856 = G__51879;
i__51555_51857 = G__51880;
continue;
}
} else {
var G__51881 = seq__51549_51854;
var G__51882 = chunk__51553_51855;
var G__51883 = count__51554_51856;
var G__51884 = (i__51555_51857 + (1));
seq__51549_51854 = G__51881;
chunk__51553_51855 = G__51882;
count__51554_51856 = G__51883;
i__51555_51857 = G__51884;
continue;
}
} else {
var temp__5735__auto___51885__$1 = cljs.core.seq(seq__51549_51854);
if(temp__5735__auto___51885__$1){
var seq__51549_51886__$1 = temp__5735__auto___51885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51549_51886__$1)){
var c__4556__auto___51887 = cljs.core.chunk_first(seq__51549_51886__$1);
var G__51888 = cljs.core.chunk_rest(seq__51549_51886__$1);
var G__51889 = c__4556__auto___51887;
var G__51890 = cljs.core.count(c__4556__auto___51887);
var G__51891 = (0);
seq__51549_51854 = G__51888;
chunk__51553_51855 = G__51889;
count__51554_51856 = G__51890;
i__51555_51857 = G__51891;
continue;
} else {
var node_51892 = cljs.core.first(seq__51549_51886__$1);
if(cljs.core.not(node_51892.shadow$old)){
var path_match_51893 = shadow.cljs.devtools.client.browser.match_paths(node_51892.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51893)){
var new_link_51894 = (function (){var G__51573 = node_51892.cloneNode(true);
G__51573.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51893),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51573;
})();
(node_51892.shadow$old = true);

(new_link_51894.onload = ((function (seq__51549_51854,chunk__51553_51855,count__51554_51856,i__51555_51857,seq__51493,chunk__51495,count__51496,i__51497,new_link_51894,path_match_51893,node_51892,seq__51549_51886__$1,temp__5735__auto___51885__$1,path,seq__51493__$1,temp__5735__auto__,map__51491,map__51491__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51892);
});})(seq__51549_51854,chunk__51553_51855,count__51554_51856,i__51555_51857,seq__51493,chunk__51495,count__51496,i__51497,new_link_51894,path_match_51893,node_51892,seq__51549_51886__$1,temp__5735__auto___51885__$1,path,seq__51493__$1,temp__5735__auto__,map__51491,map__51491__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51893], 0));

goog.dom.insertSiblingAfter(new_link_51894,node_51892);


var G__51895 = cljs.core.next(seq__51549_51886__$1);
var G__51896 = null;
var G__51897 = (0);
var G__51898 = (0);
seq__51549_51854 = G__51895;
chunk__51553_51855 = G__51896;
count__51554_51856 = G__51897;
i__51555_51857 = G__51898;
continue;
} else {
var G__51899 = cljs.core.next(seq__51549_51886__$1);
var G__51900 = null;
var G__51901 = (0);
var G__51902 = (0);
seq__51549_51854 = G__51899;
chunk__51553_51855 = G__51900;
count__51554_51856 = G__51901;
i__51555_51857 = G__51902;
continue;
}
} else {
var G__51903 = cljs.core.next(seq__51549_51886__$1);
var G__51904 = null;
var G__51905 = (0);
var G__51906 = (0);
seq__51549_51854 = G__51903;
chunk__51553_51855 = G__51904;
count__51554_51856 = G__51905;
i__51555_51857 = G__51906;
continue;
}
}
} else {
}
}
break;
}


var G__51907 = cljs.core.next(seq__51493__$1);
var G__51908 = null;
var G__51909 = (0);
var G__51910 = (0);
seq__51493 = G__51907;
chunk__51495 = G__51908;
count__51496 = G__51909;
i__51497 = G__51910;
continue;
} else {
var G__51911 = cljs.core.next(seq__51493__$1);
var G__51912 = null;
var G__51913 = (0);
var G__51914 = (0);
seq__51493 = G__51911;
chunk__51495 = G__51912;
count__51496 = G__51913;
i__51497 = G__51914;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51574){
var map__51575 = p__51574;
var map__51575__$1 = (((((!((map__51575 == null))))?(((((map__51575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51575):map__51575);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51575__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51587){
var map__51588 = p__51587;
var map__51588__$1 = (((((!((map__51588 == null))))?(((((map__51588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51588):map__51588);
var _ = map__51588__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51588__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51590,done,error){
var map__51591 = p__51590;
var map__51591__$1 = (((((!((map__51591 == null))))?(((((map__51591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51591):map__51591);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51591__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51596,done,error){
var map__51597 = p__51596;
var map__51597__$1 = (((((!((map__51597 == null))))?(((((map__51597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51597):map__51597);
var msg = map__51597__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51616){
var map__51617 = p__51616;
var map__51617__$1 = (((((!((map__51617 == null))))?(((((map__51617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51617):map__51617);
var src = map__51617__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51617__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51620 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51620) : done.call(null,G__51620));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51621){
var map__51622 = p__51621;
var map__51622__$1 = (((((!((map__51622 == null))))?(((((map__51622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51622):map__51622);
var msg__$1 = map__51622__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51622__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51624){var ex = e51624;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51625){
var map__51626 = p__51625;
var map__51626__$1 = (((((!((map__51626 == null))))?(((((map__51626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51626):map__51626);
var env = map__51626__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51626__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51630){
var map__51634 = p__51630;
var map__51634__$1 = (((((!((map__51634 == null))))?(((((map__51634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51634):map__51634);
var msg = map__51634__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51634__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51636){
var map__51637 = p__51636;
var map__51637__$1 = (((((!((map__51637 == null))))?(((((map__51637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51637):map__51637);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51675){
var map__51676 = p__51675;
var map__51676__$1 = (((((!((map__51676 == null))))?(((((map__51676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51676):map__51676);
var svc = map__51676__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51676__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
