goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50973,p__50974){
var map__50975 = p__50973;
var map__50975__$1 = (((((!((map__50975 == null))))?(((((map__50975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50975):map__50975);
var svc = map__50975__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50975__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50976 = p__50974;
var map__50976__$1 = (((((!((map__50976 == null))))?(((((map__50976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50976):map__50976);
var msg = map__50976__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50976__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50976__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50983,p__50984){
var map__50985 = p__50983;
var map__50985__$1 = (((((!((map__50985 == null))))?(((((map__50985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50985):map__50985);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50986 = p__50984;
var map__50986__$1 = (((((!((map__50986 == null))))?(((((map__50986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50986):map__50986);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50986__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50994,p__50995){
var map__50996 = p__50994;
var map__50996__$1 = (((((!((map__50996 == null))))?(((((map__50996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50996):map__50996);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50996__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50997 = p__50995;
var map__50997__$1 = (((((!((map__50997 == null))))?(((((map__50997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50997):map__50997);
var msg = map__50997__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50997__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51004,tid){
var map__51005 = p__51004;
var map__51005__$1 = (((((!((map__51005 == null))))?(((((map__51005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51005):map__51005);
var svc = map__51005__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51005__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51016 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51017 = null;
var count__51018 = (0);
var i__51019 = (0);
while(true){
if((i__51019 < count__51018)){
var vec__51030 = chunk__51017.cljs$core$IIndexed$_nth$arity$2(null,i__51019);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51030,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51030,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51043 = seq__51016;
var G__51044 = chunk__51017;
var G__51045 = count__51018;
var G__51046 = (i__51019 + (1));
seq__51016 = G__51043;
chunk__51017 = G__51044;
count__51018 = G__51045;
i__51019 = G__51046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51016);
if(temp__5735__auto__){
var seq__51016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51016__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51016__$1);
var G__51047 = cljs.core.chunk_rest(seq__51016__$1);
var G__51048 = c__4556__auto__;
var G__51049 = cljs.core.count(c__4556__auto__);
var G__51050 = (0);
seq__51016 = G__51047;
chunk__51017 = G__51048;
count__51018 = G__51049;
i__51019 = G__51050;
continue;
} else {
var vec__51036 = cljs.core.first(seq__51016__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51036,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51036,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51054 = cljs.core.next(seq__51016__$1);
var G__51055 = null;
var G__51056 = (0);
var G__51057 = (0);
seq__51016 = G__51054;
chunk__51017 = G__51055;
count__51018 = G__51056;
i__51019 = G__51057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51007_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51007_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51008_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51008_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51009_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51009_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51010_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51010_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51039){
var map__51040 = p__51039;
var map__51040__$1 = (((((!((map__51040 == null))))?(((((map__51040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51040):map__51040);
var svc = map__51040__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51040__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51040__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
