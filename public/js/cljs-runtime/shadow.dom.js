goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47864 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47864(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47867 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47867(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46914 = coll;
var G__46915 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46914,G__46915) : shadow.dom.lazy_native_coll_seq.call(null,G__46914,G__46915));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46935 = arguments.length;
switch (G__46935) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46937 = arguments.length;
switch (G__46937) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46949 = arguments.length;
switch (G__46949) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46960 = arguments.length;
switch (G__46960) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46966 = arguments.length;
switch (G__46966) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46978 = arguments.length;
switch (G__46978) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46995){if((e46995 instanceof Object)){
var e = e46995;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46995;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47000 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47001 = null;
var count__47002 = (0);
var i__47003 = (0);
while(true){
if((i__47003 < count__47002)){
var el = chunk__47001.cljs$core$IIndexed$_nth$arity$2(null,i__47003);
var handler_47969__$1 = ((function (seq__47000,chunk__47001,count__47002,i__47003,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47000,chunk__47001,count__47002,i__47003,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47969__$1);


var G__47970 = seq__47000;
var G__47971 = chunk__47001;
var G__47972 = count__47002;
var G__47973 = (i__47003 + (1));
seq__47000 = G__47970;
chunk__47001 = G__47971;
count__47002 = G__47972;
i__47003 = G__47973;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47000);
if(temp__5735__auto__){
var seq__47000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47000__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47000__$1);
var G__47975 = cljs.core.chunk_rest(seq__47000__$1);
var G__47976 = c__4556__auto__;
var G__47977 = cljs.core.count(c__4556__auto__);
var G__47978 = (0);
seq__47000 = G__47975;
chunk__47001 = G__47976;
count__47002 = G__47977;
i__47003 = G__47978;
continue;
} else {
var el = cljs.core.first(seq__47000__$1);
var handler_47979__$1 = ((function (seq__47000,chunk__47001,count__47002,i__47003,el,seq__47000__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47000,chunk__47001,count__47002,i__47003,el,seq__47000__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47979__$1);


var G__47980 = cljs.core.next(seq__47000__$1);
var G__47981 = null;
var G__47982 = (0);
var G__47983 = (0);
seq__47000 = G__47980;
chunk__47001 = G__47981;
count__47002 = G__47982;
i__47003 = G__47983;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47022 = arguments.length;
switch (G__47022) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47029 = cljs.core.seq(events);
var chunk__47030 = null;
var count__47031 = (0);
var i__47032 = (0);
while(true){
if((i__47032 < count__47031)){
var vec__47048 = chunk__47030.cljs$core$IIndexed$_nth$arity$2(null,i__47032);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47048,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47991 = seq__47029;
var G__47992 = chunk__47030;
var G__47993 = count__47031;
var G__47994 = (i__47032 + (1));
seq__47029 = G__47991;
chunk__47030 = G__47992;
count__47031 = G__47993;
i__47032 = G__47994;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47029);
if(temp__5735__auto__){
var seq__47029__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47029__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47029__$1);
var G__47995 = cljs.core.chunk_rest(seq__47029__$1);
var G__47996 = c__4556__auto__;
var G__47997 = cljs.core.count(c__4556__auto__);
var G__47998 = (0);
seq__47029 = G__47995;
chunk__47030 = G__47996;
count__47031 = G__47997;
i__47032 = G__47998;
continue;
} else {
var vec__47054 = cljs.core.first(seq__47029__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47054,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47999 = cljs.core.next(seq__47029__$1);
var G__48000 = null;
var G__48001 = (0);
var G__48002 = (0);
seq__47029 = G__47999;
chunk__47030 = G__48000;
count__47031 = G__48001;
i__47032 = G__48002;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47067 = cljs.core.seq(styles);
var chunk__47068 = null;
var count__47069 = (0);
var i__47070 = (0);
while(true){
if((i__47070 < count__47069)){
var vec__47083 = chunk__47068.cljs$core$IIndexed$_nth$arity$2(null,i__47070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47083,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48007 = seq__47067;
var G__48008 = chunk__47068;
var G__48009 = count__47069;
var G__48010 = (i__47070 + (1));
seq__47067 = G__48007;
chunk__47068 = G__48008;
count__47069 = G__48009;
i__47070 = G__48010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47067);
if(temp__5735__auto__){
var seq__47067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47067__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47067__$1);
var G__48014 = cljs.core.chunk_rest(seq__47067__$1);
var G__48015 = c__4556__auto__;
var G__48016 = cljs.core.count(c__4556__auto__);
var G__48017 = (0);
seq__47067 = G__48014;
chunk__47068 = G__48015;
count__47069 = G__48016;
i__47070 = G__48017;
continue;
} else {
var vec__47088 = cljs.core.first(seq__47067__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47088,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48018 = cljs.core.next(seq__47067__$1);
var G__48019 = null;
var G__48020 = (0);
var G__48021 = (0);
seq__47067 = G__48018;
chunk__47068 = G__48019;
count__47069 = G__48020;
i__47070 = G__48021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47107_48024 = key;
var G__47107_48025__$1 = (((G__47107_48024 instanceof cljs.core.Keyword))?G__47107_48024.fqn:null);
switch (G__47107_48025__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48064,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48064,"aria-");
}
})())){
el.setAttribute(ks_48064,value);
} else {
(el[ks_48064] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47120){
var map__47125 = p__47120;
var map__47125__$1 = (((((!((map__47125 == null))))?(((((map__47125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47125):map__47125);
var props = map__47125__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47135 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47146 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47146,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47146;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47148 = arguments.length;
switch (G__47148) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47149){
var vec__47150 = p__47149;
var seq__47151 = cljs.core.seq(vec__47150);
var first__47152 = cljs.core.first(seq__47151);
var seq__47151__$1 = cljs.core.next(seq__47151);
var nn = first__47152;
var first__47152__$1 = cljs.core.first(seq__47151__$1);
var seq__47151__$2 = cljs.core.next(seq__47151__$1);
var np = first__47152__$1;
var nc = seq__47151__$2;
var node = vec__47150;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47154 = nn;
var G__47155 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47154,G__47155) : create_fn.call(null,G__47154,G__47155));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47157 = nn;
var G__47158 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47157,G__47158) : create_fn.call(null,G__47157,G__47158));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47159 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47159,(1),null);
var seq__47162_48098 = cljs.core.seq(node_children);
var chunk__47163_48099 = null;
var count__47164_48100 = (0);
var i__47165_48101 = (0);
while(true){
if((i__47165_48101 < count__47164_48100)){
var child_struct_48102 = chunk__47163_48099.cljs$core$IIndexed$_nth$arity$2(null,i__47165_48101);
var children_48103 = shadow.dom.dom_node(child_struct_48102);
if(cljs.core.seq_QMARK_(children_48103)){
var seq__47189_48104 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48103));
var chunk__47191_48105 = null;
var count__47192_48106 = (0);
var i__47193_48107 = (0);
while(true){
if((i__47193_48107 < count__47192_48106)){
var child_48109 = chunk__47191_48105.cljs$core$IIndexed$_nth$arity$2(null,i__47193_48107);
if(cljs.core.truth_(child_48109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48109);


var G__48110 = seq__47189_48104;
var G__48111 = chunk__47191_48105;
var G__48112 = count__47192_48106;
var G__48113 = (i__47193_48107 + (1));
seq__47189_48104 = G__48110;
chunk__47191_48105 = G__48111;
count__47192_48106 = G__48112;
i__47193_48107 = G__48113;
continue;
} else {
var G__48114 = seq__47189_48104;
var G__48115 = chunk__47191_48105;
var G__48116 = count__47192_48106;
var G__48117 = (i__47193_48107 + (1));
seq__47189_48104 = G__48114;
chunk__47191_48105 = G__48115;
count__47192_48106 = G__48116;
i__47193_48107 = G__48117;
continue;
}
} else {
var temp__5735__auto___48118 = cljs.core.seq(seq__47189_48104);
if(temp__5735__auto___48118){
var seq__47189_48120__$1 = temp__5735__auto___48118;
if(cljs.core.chunked_seq_QMARK_(seq__47189_48120__$1)){
var c__4556__auto___48121 = cljs.core.chunk_first(seq__47189_48120__$1);
var G__48122 = cljs.core.chunk_rest(seq__47189_48120__$1);
var G__48123 = c__4556__auto___48121;
var G__48124 = cljs.core.count(c__4556__auto___48121);
var G__48125 = (0);
seq__47189_48104 = G__48122;
chunk__47191_48105 = G__48123;
count__47192_48106 = G__48124;
i__47193_48107 = G__48125;
continue;
} else {
var child_48126 = cljs.core.first(seq__47189_48120__$1);
if(cljs.core.truth_(child_48126)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48126);


var G__48127 = cljs.core.next(seq__47189_48120__$1);
var G__48128 = null;
var G__48129 = (0);
var G__48130 = (0);
seq__47189_48104 = G__48127;
chunk__47191_48105 = G__48128;
count__47192_48106 = G__48129;
i__47193_48107 = G__48130;
continue;
} else {
var G__48131 = cljs.core.next(seq__47189_48120__$1);
var G__48132 = null;
var G__48133 = (0);
var G__48134 = (0);
seq__47189_48104 = G__48131;
chunk__47191_48105 = G__48132;
count__47192_48106 = G__48133;
i__47193_48107 = G__48134;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48103);
}


var G__48135 = seq__47162_48098;
var G__48136 = chunk__47163_48099;
var G__48137 = count__47164_48100;
var G__48138 = (i__47165_48101 + (1));
seq__47162_48098 = G__48135;
chunk__47163_48099 = G__48136;
count__47164_48100 = G__48137;
i__47165_48101 = G__48138;
continue;
} else {
var temp__5735__auto___48141 = cljs.core.seq(seq__47162_48098);
if(temp__5735__auto___48141){
var seq__47162_48142__$1 = temp__5735__auto___48141;
if(cljs.core.chunked_seq_QMARK_(seq__47162_48142__$1)){
var c__4556__auto___48143 = cljs.core.chunk_first(seq__47162_48142__$1);
var G__48144 = cljs.core.chunk_rest(seq__47162_48142__$1);
var G__48145 = c__4556__auto___48143;
var G__48146 = cljs.core.count(c__4556__auto___48143);
var G__48147 = (0);
seq__47162_48098 = G__48144;
chunk__47163_48099 = G__48145;
count__47164_48100 = G__48146;
i__47165_48101 = G__48147;
continue;
} else {
var child_struct_48149 = cljs.core.first(seq__47162_48142__$1);
var children_48151 = shadow.dom.dom_node(child_struct_48149);
if(cljs.core.seq_QMARK_(children_48151)){
var seq__47226_48152 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48151));
var chunk__47228_48153 = null;
var count__47229_48154 = (0);
var i__47230_48155 = (0);
while(true){
if((i__47230_48155 < count__47229_48154)){
var child_48157 = chunk__47228_48153.cljs$core$IIndexed$_nth$arity$2(null,i__47230_48155);
if(cljs.core.truth_(child_48157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48157);


var G__48158 = seq__47226_48152;
var G__48159 = chunk__47228_48153;
var G__48160 = count__47229_48154;
var G__48161 = (i__47230_48155 + (1));
seq__47226_48152 = G__48158;
chunk__47228_48153 = G__48159;
count__47229_48154 = G__48160;
i__47230_48155 = G__48161;
continue;
} else {
var G__48162 = seq__47226_48152;
var G__48163 = chunk__47228_48153;
var G__48164 = count__47229_48154;
var G__48165 = (i__47230_48155 + (1));
seq__47226_48152 = G__48162;
chunk__47228_48153 = G__48163;
count__47229_48154 = G__48164;
i__47230_48155 = G__48165;
continue;
}
} else {
var temp__5735__auto___48166__$1 = cljs.core.seq(seq__47226_48152);
if(temp__5735__auto___48166__$1){
var seq__47226_48167__$1 = temp__5735__auto___48166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47226_48167__$1)){
var c__4556__auto___48168 = cljs.core.chunk_first(seq__47226_48167__$1);
var G__48169 = cljs.core.chunk_rest(seq__47226_48167__$1);
var G__48170 = c__4556__auto___48168;
var G__48171 = cljs.core.count(c__4556__auto___48168);
var G__48172 = (0);
seq__47226_48152 = G__48169;
chunk__47228_48153 = G__48170;
count__47229_48154 = G__48171;
i__47230_48155 = G__48172;
continue;
} else {
var child_48173 = cljs.core.first(seq__47226_48167__$1);
if(cljs.core.truth_(child_48173)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48173);


var G__48174 = cljs.core.next(seq__47226_48167__$1);
var G__48175 = null;
var G__48176 = (0);
var G__48177 = (0);
seq__47226_48152 = G__48174;
chunk__47228_48153 = G__48175;
count__47229_48154 = G__48176;
i__47230_48155 = G__48177;
continue;
} else {
var G__48178 = cljs.core.next(seq__47226_48167__$1);
var G__48179 = null;
var G__48180 = (0);
var G__48181 = (0);
seq__47226_48152 = G__48178;
chunk__47228_48153 = G__48179;
count__47229_48154 = G__48180;
i__47230_48155 = G__48181;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48151);
}


var G__48182 = cljs.core.next(seq__47162_48142__$1);
var G__48183 = null;
var G__48184 = (0);
var G__48185 = (0);
seq__47162_48098 = G__48182;
chunk__47163_48099 = G__48183;
count__47164_48100 = G__48184;
i__47165_48101 = G__48185;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47272 = cljs.core.seq(node);
var chunk__47273 = null;
var count__47274 = (0);
var i__47275 = (0);
while(true){
if((i__47275 < count__47274)){
var n = chunk__47273.cljs$core$IIndexed$_nth$arity$2(null,i__47275);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48202 = seq__47272;
var G__48203 = chunk__47273;
var G__48204 = count__47274;
var G__48205 = (i__47275 + (1));
seq__47272 = G__48202;
chunk__47273 = G__48203;
count__47274 = G__48204;
i__47275 = G__48205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47272);
if(temp__5735__auto__){
var seq__47272__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47272__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47272__$1);
var G__48206 = cljs.core.chunk_rest(seq__47272__$1);
var G__48207 = c__4556__auto__;
var G__48208 = cljs.core.count(c__4556__auto__);
var G__48209 = (0);
seq__47272 = G__48206;
chunk__47273 = G__48207;
count__47274 = G__48208;
i__47275 = G__48209;
continue;
} else {
var n = cljs.core.first(seq__47272__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48210 = cljs.core.next(seq__47272__$1);
var G__48211 = null;
var G__48212 = (0);
var G__48213 = (0);
seq__47272 = G__48210;
chunk__47273 = G__48211;
count__47274 = G__48212;
i__47275 = G__48213;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47280 = arguments.length;
switch (G__47280) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47286 = arguments.length;
switch (G__47286) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47312 = arguments.length;
switch (G__47312) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48218 = arguments.length;
var i__4737__auto___48219 = (0);
while(true){
if((i__4737__auto___48219 < len__4736__auto___48218)){
args__4742__auto__.push((arguments[i__4737__auto___48219]));

var G__48220 = (i__4737__auto___48219 + (1));
i__4737__auto___48219 = G__48220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47347_48222 = cljs.core.seq(nodes);
var chunk__47348_48223 = null;
var count__47349_48227 = (0);
var i__47350_48228 = (0);
while(true){
if((i__47350_48228 < count__47349_48227)){
var node_48229 = chunk__47348_48223.cljs$core$IIndexed$_nth$arity$2(null,i__47350_48228);
fragment.appendChild(shadow.dom._to_dom(node_48229));


var G__48230 = seq__47347_48222;
var G__48231 = chunk__47348_48223;
var G__48232 = count__47349_48227;
var G__48233 = (i__47350_48228 + (1));
seq__47347_48222 = G__48230;
chunk__47348_48223 = G__48231;
count__47349_48227 = G__48232;
i__47350_48228 = G__48233;
continue;
} else {
var temp__5735__auto___48234 = cljs.core.seq(seq__47347_48222);
if(temp__5735__auto___48234){
var seq__47347_48236__$1 = temp__5735__auto___48234;
if(cljs.core.chunked_seq_QMARK_(seq__47347_48236__$1)){
var c__4556__auto___48237 = cljs.core.chunk_first(seq__47347_48236__$1);
var G__48238 = cljs.core.chunk_rest(seq__47347_48236__$1);
var G__48239 = c__4556__auto___48237;
var G__48240 = cljs.core.count(c__4556__auto___48237);
var G__48241 = (0);
seq__47347_48222 = G__48238;
chunk__47348_48223 = G__48239;
count__47349_48227 = G__48240;
i__47350_48228 = G__48241;
continue;
} else {
var node_48243 = cljs.core.first(seq__47347_48236__$1);
fragment.appendChild(shadow.dom._to_dom(node_48243));


var G__48244 = cljs.core.next(seq__47347_48236__$1);
var G__48245 = null;
var G__48246 = (0);
var G__48247 = (0);
seq__47347_48222 = G__48244;
chunk__47348_48223 = G__48245;
count__47349_48227 = G__48246;
i__47350_48228 = G__48247;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47342){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47342));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47357_48253 = cljs.core.seq(scripts);
var chunk__47358_48254 = null;
var count__47359_48255 = (0);
var i__47360_48256 = (0);
while(true){
if((i__47360_48256 < count__47359_48255)){
var vec__47371_48258 = chunk__47358_48254.cljs$core$IIndexed$_nth$arity$2(null,i__47360_48256);
var script_tag_48259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47371_48258,(0),null);
var script_body_48260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47371_48258,(1),null);
eval(script_body_48260);


var G__48261 = seq__47357_48253;
var G__48262 = chunk__47358_48254;
var G__48263 = count__47359_48255;
var G__48264 = (i__47360_48256 + (1));
seq__47357_48253 = G__48261;
chunk__47358_48254 = G__48262;
count__47359_48255 = G__48263;
i__47360_48256 = G__48264;
continue;
} else {
var temp__5735__auto___48265 = cljs.core.seq(seq__47357_48253);
if(temp__5735__auto___48265){
var seq__47357_48266__$1 = temp__5735__auto___48265;
if(cljs.core.chunked_seq_QMARK_(seq__47357_48266__$1)){
var c__4556__auto___48267 = cljs.core.chunk_first(seq__47357_48266__$1);
var G__48268 = cljs.core.chunk_rest(seq__47357_48266__$1);
var G__48269 = c__4556__auto___48267;
var G__48270 = cljs.core.count(c__4556__auto___48267);
var G__48271 = (0);
seq__47357_48253 = G__48268;
chunk__47358_48254 = G__48269;
count__47359_48255 = G__48270;
i__47360_48256 = G__48271;
continue;
} else {
var vec__47374_48272 = cljs.core.first(seq__47357_48266__$1);
var script_tag_48273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47374_48272,(0),null);
var script_body_48274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47374_48272,(1),null);
eval(script_body_48274);


var G__48277 = cljs.core.next(seq__47357_48266__$1);
var G__48278 = null;
var G__48279 = (0);
var G__48280 = (0);
seq__47357_48253 = G__48277;
chunk__47358_48254 = G__48278;
count__47359_48255 = G__48279;
i__47360_48256 = G__48280;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47393){
var vec__47394 = p__47393;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47394,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47394,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47402 = arguments.length;
switch (G__47402) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47436 = cljs.core.seq(style_keys);
var chunk__47437 = null;
var count__47438 = (0);
var i__47439 = (0);
while(true){
if((i__47439 < count__47438)){
var it = chunk__47437.cljs$core$IIndexed$_nth$arity$2(null,i__47439);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48340 = seq__47436;
var G__48341 = chunk__47437;
var G__48342 = count__47438;
var G__48343 = (i__47439 + (1));
seq__47436 = G__48340;
chunk__47437 = G__48341;
count__47438 = G__48342;
i__47439 = G__48343;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47436);
if(temp__5735__auto__){
var seq__47436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47436__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47436__$1);
var G__48344 = cljs.core.chunk_rest(seq__47436__$1);
var G__48345 = c__4556__auto__;
var G__48346 = cljs.core.count(c__4556__auto__);
var G__48347 = (0);
seq__47436 = G__48344;
chunk__47437 = G__48345;
count__47438 = G__48346;
i__47439 = G__48347;
continue;
} else {
var it = cljs.core.first(seq__47436__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48348 = cljs.core.next(seq__47436__$1);
var G__48349 = null;
var G__48350 = (0);
var G__48351 = (0);
seq__47436 = G__48348;
chunk__47437 = G__48349;
count__47438 = G__48350;
i__47439 = G__48351;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47450,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47455 = k47450;
var G__47455__$1 = (((G__47455 instanceof cljs.core.Keyword))?G__47455.fqn:null);
switch (G__47455__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47450,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47460){
var vec__47461 = p__47460;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47461,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47461,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47449){
var self__ = this;
var G__47449__$1 = this;
return (new cljs.core.RecordIter((0),G__47449__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47451,other47452){
var self__ = this;
var this47451__$1 = this;
return (((!((other47452 == null)))) && ((this47451__$1.constructor === other47452.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47451__$1.x,other47452.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47451__$1.y,other47452.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47451__$1.__extmap,other47452.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47449){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47486 = cljs.core.keyword_identical_QMARK_;
var expr__47487 = k__4388__auto__;
if(cljs.core.truth_((pred__47486.cljs$core$IFn$_invoke$arity$2 ? pred__47486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47487) : pred__47486.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47487)))){
return (new shadow.dom.Coordinate(G__47449,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47486.cljs$core$IFn$_invoke$arity$2 ? pred__47486.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47487) : pred__47486.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47487)))){
return (new shadow.dom.Coordinate(self__.x,G__47449,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47449),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47449){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47449,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47454){
var extmap__4419__auto__ = (function (){var G__47516 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47454,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47454)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47516);
} else {
return G__47516;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47454),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47454),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47520,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47529 = k47520;
var G__47529__$1 = (((G__47529 instanceof cljs.core.Keyword))?G__47529.fqn:null);
switch (G__47529__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47520,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47531){
var vec__47532 = p__47531;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47532,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47532,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47519){
var self__ = this;
var G__47519__$1 = this;
return (new cljs.core.RecordIter((0),G__47519__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47521,other47522){
var self__ = this;
var this47521__$1 = this;
return (((!((other47522 == null)))) && ((this47521__$1.constructor === other47522.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.w,other47522.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.h,other47522.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47521__$1.__extmap,other47522.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47519){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47553 = cljs.core.keyword_identical_QMARK_;
var expr__47554 = k__4388__auto__;
if(cljs.core.truth_((pred__47553.cljs$core$IFn$_invoke$arity$2 ? pred__47553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47554) : pred__47553.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47554)))){
return (new shadow.dom.Size(G__47519,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47553.cljs$core$IFn$_invoke$arity$2 ? pred__47553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47554) : pred__47553.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47554)))){
return (new shadow.dom.Size(self__.w,G__47519,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47519),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47519){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47519,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47524){
var extmap__4419__auto__ = (function (){var G__47579 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47524,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47524)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47579);
} else {
return G__47579;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47524),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47524),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48602 = (i + (1));
var G__48603 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48602;
ret = G__48603;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47596){
var vec__47597 = p__47596;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47597,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47601 = arguments.length;
switch (G__47601) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48609 = ps;
var G__48610 = (i + (1));
el__$1 = G__48609;
i = G__48610;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47624 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47624,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47624,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47624,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47629_48615 = cljs.core.seq(props);
var chunk__47630_48616 = null;
var count__47631_48617 = (0);
var i__47632_48618 = (0);
while(true){
if((i__47632_48618 < count__47631_48617)){
var vec__47663_48636 = chunk__47630_48616.cljs$core$IIndexed$_nth$arity$2(null,i__47632_48618);
var k_48637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47663_48636,(0),null);
var v_48638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47663_48636,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48637);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48637),v_48638);


var G__48639 = seq__47629_48615;
var G__48640 = chunk__47630_48616;
var G__48641 = count__47631_48617;
var G__48642 = (i__47632_48618 + (1));
seq__47629_48615 = G__48639;
chunk__47630_48616 = G__48640;
count__47631_48617 = G__48641;
i__47632_48618 = G__48642;
continue;
} else {
var temp__5735__auto___48643 = cljs.core.seq(seq__47629_48615);
if(temp__5735__auto___48643){
var seq__47629_48644__$1 = temp__5735__auto___48643;
if(cljs.core.chunked_seq_QMARK_(seq__47629_48644__$1)){
var c__4556__auto___48645 = cljs.core.chunk_first(seq__47629_48644__$1);
var G__48646 = cljs.core.chunk_rest(seq__47629_48644__$1);
var G__48647 = c__4556__auto___48645;
var G__48648 = cljs.core.count(c__4556__auto___48645);
var G__48649 = (0);
seq__47629_48615 = G__48646;
chunk__47630_48616 = G__48647;
count__47631_48617 = G__48648;
i__47632_48618 = G__48649;
continue;
} else {
var vec__47667_48650 = cljs.core.first(seq__47629_48644__$1);
var k_48651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667_48650,(0),null);
var v_48652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667_48650,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48651);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48651),v_48652);


var G__48653 = cljs.core.next(seq__47629_48644__$1);
var G__48654 = null;
var G__48655 = (0);
var G__48656 = (0);
seq__47629_48615 = G__48653;
chunk__47630_48616 = G__48654;
count__47631_48617 = G__48655;
i__47632_48618 = G__48656;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47671 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671,(1),null);
var seq__47674_48657 = cljs.core.seq(node_children);
var chunk__47676_48658 = null;
var count__47677_48659 = (0);
var i__47678_48660 = (0);
while(true){
if((i__47678_48660 < count__47677_48659)){
var child_struct_48661 = chunk__47676_48658.cljs$core$IIndexed$_nth$arity$2(null,i__47678_48660);
if((!((child_struct_48661 == null)))){
if(typeof child_struct_48661 === 'string'){
var text_48662 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48662),child_struct_48661].join(''));
} else {
var children_48663 = shadow.dom.svg_node(child_struct_48661);
if(cljs.core.seq_QMARK_(children_48663)){
var seq__47740_48668 = cljs.core.seq(children_48663);
var chunk__47742_48669 = null;
var count__47743_48670 = (0);
var i__47744_48671 = (0);
while(true){
if((i__47744_48671 < count__47743_48670)){
var child_48672 = chunk__47742_48669.cljs$core$IIndexed$_nth$arity$2(null,i__47744_48671);
if(cljs.core.truth_(child_48672)){
node.appendChild(child_48672);


var G__48673 = seq__47740_48668;
var G__48674 = chunk__47742_48669;
var G__48675 = count__47743_48670;
var G__48676 = (i__47744_48671 + (1));
seq__47740_48668 = G__48673;
chunk__47742_48669 = G__48674;
count__47743_48670 = G__48675;
i__47744_48671 = G__48676;
continue;
} else {
var G__48677 = seq__47740_48668;
var G__48678 = chunk__47742_48669;
var G__48679 = count__47743_48670;
var G__48680 = (i__47744_48671 + (1));
seq__47740_48668 = G__48677;
chunk__47742_48669 = G__48678;
count__47743_48670 = G__48679;
i__47744_48671 = G__48680;
continue;
}
} else {
var temp__5735__auto___48681 = cljs.core.seq(seq__47740_48668);
if(temp__5735__auto___48681){
var seq__47740_48682__$1 = temp__5735__auto___48681;
if(cljs.core.chunked_seq_QMARK_(seq__47740_48682__$1)){
var c__4556__auto___48683 = cljs.core.chunk_first(seq__47740_48682__$1);
var G__48684 = cljs.core.chunk_rest(seq__47740_48682__$1);
var G__48685 = c__4556__auto___48683;
var G__48686 = cljs.core.count(c__4556__auto___48683);
var G__48687 = (0);
seq__47740_48668 = G__48684;
chunk__47742_48669 = G__48685;
count__47743_48670 = G__48686;
i__47744_48671 = G__48687;
continue;
} else {
var child_48688 = cljs.core.first(seq__47740_48682__$1);
if(cljs.core.truth_(child_48688)){
node.appendChild(child_48688);


var G__48689 = cljs.core.next(seq__47740_48682__$1);
var G__48690 = null;
var G__48691 = (0);
var G__48692 = (0);
seq__47740_48668 = G__48689;
chunk__47742_48669 = G__48690;
count__47743_48670 = G__48691;
i__47744_48671 = G__48692;
continue;
} else {
var G__48693 = cljs.core.next(seq__47740_48682__$1);
var G__48694 = null;
var G__48695 = (0);
var G__48696 = (0);
seq__47740_48668 = G__48693;
chunk__47742_48669 = G__48694;
count__47743_48670 = G__48695;
i__47744_48671 = G__48696;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48663);
}
}


var G__48697 = seq__47674_48657;
var G__48698 = chunk__47676_48658;
var G__48699 = count__47677_48659;
var G__48700 = (i__47678_48660 + (1));
seq__47674_48657 = G__48697;
chunk__47676_48658 = G__48698;
count__47677_48659 = G__48699;
i__47678_48660 = G__48700;
continue;
} else {
var G__48702 = seq__47674_48657;
var G__48703 = chunk__47676_48658;
var G__48704 = count__47677_48659;
var G__48705 = (i__47678_48660 + (1));
seq__47674_48657 = G__48702;
chunk__47676_48658 = G__48703;
count__47677_48659 = G__48704;
i__47678_48660 = G__48705;
continue;
}
} else {
var temp__5735__auto___48706 = cljs.core.seq(seq__47674_48657);
if(temp__5735__auto___48706){
var seq__47674_48707__$1 = temp__5735__auto___48706;
if(cljs.core.chunked_seq_QMARK_(seq__47674_48707__$1)){
var c__4556__auto___48709 = cljs.core.chunk_first(seq__47674_48707__$1);
var G__48710 = cljs.core.chunk_rest(seq__47674_48707__$1);
var G__48711 = c__4556__auto___48709;
var G__48712 = cljs.core.count(c__4556__auto___48709);
var G__48713 = (0);
seq__47674_48657 = G__48710;
chunk__47676_48658 = G__48711;
count__47677_48659 = G__48712;
i__47678_48660 = G__48713;
continue;
} else {
var child_struct_48714 = cljs.core.first(seq__47674_48707__$1);
if((!((child_struct_48714 == null)))){
if(typeof child_struct_48714 === 'string'){
var text_48715 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48715),child_struct_48714].join(''));
} else {
var children_48717 = shadow.dom.svg_node(child_struct_48714);
if(cljs.core.seq_QMARK_(children_48717)){
var seq__47769_48718 = cljs.core.seq(children_48717);
var chunk__47771_48719 = null;
var count__47772_48720 = (0);
var i__47773_48721 = (0);
while(true){
if((i__47773_48721 < count__47772_48720)){
var child_48723 = chunk__47771_48719.cljs$core$IIndexed$_nth$arity$2(null,i__47773_48721);
if(cljs.core.truth_(child_48723)){
node.appendChild(child_48723);


var G__48829 = seq__47769_48718;
var G__48830 = chunk__47771_48719;
var G__48831 = count__47772_48720;
var G__48832 = (i__47773_48721 + (1));
seq__47769_48718 = G__48829;
chunk__47771_48719 = G__48830;
count__47772_48720 = G__48831;
i__47773_48721 = G__48832;
continue;
} else {
var G__48834 = seq__47769_48718;
var G__48835 = chunk__47771_48719;
var G__48836 = count__47772_48720;
var G__48837 = (i__47773_48721 + (1));
seq__47769_48718 = G__48834;
chunk__47771_48719 = G__48835;
count__47772_48720 = G__48836;
i__47773_48721 = G__48837;
continue;
}
} else {
var temp__5735__auto___48838__$1 = cljs.core.seq(seq__47769_48718);
if(temp__5735__auto___48838__$1){
var seq__47769_48839__$1 = temp__5735__auto___48838__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47769_48839__$1)){
var c__4556__auto___48840 = cljs.core.chunk_first(seq__47769_48839__$1);
var G__48841 = cljs.core.chunk_rest(seq__47769_48839__$1);
var G__48842 = c__4556__auto___48840;
var G__48843 = cljs.core.count(c__4556__auto___48840);
var G__48844 = (0);
seq__47769_48718 = G__48841;
chunk__47771_48719 = G__48842;
count__47772_48720 = G__48843;
i__47773_48721 = G__48844;
continue;
} else {
var child_48845 = cljs.core.first(seq__47769_48839__$1);
if(cljs.core.truth_(child_48845)){
node.appendChild(child_48845);


var G__48846 = cljs.core.next(seq__47769_48839__$1);
var G__48847 = null;
var G__48848 = (0);
var G__48849 = (0);
seq__47769_48718 = G__48846;
chunk__47771_48719 = G__48847;
count__47772_48720 = G__48848;
i__47773_48721 = G__48849;
continue;
} else {
var G__48850 = cljs.core.next(seq__47769_48839__$1);
var G__48851 = null;
var G__48852 = (0);
var G__48853 = (0);
seq__47769_48718 = G__48850;
chunk__47771_48719 = G__48851;
count__47772_48720 = G__48852;
i__47773_48721 = G__48853;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48717);
}
}


var G__48854 = cljs.core.next(seq__47674_48707__$1);
var G__48855 = null;
var G__48856 = (0);
var G__48857 = (0);
seq__47674_48657 = G__48854;
chunk__47676_48658 = G__48855;
count__47677_48659 = G__48856;
i__47678_48660 = G__48857;
continue;
} else {
var G__48859 = cljs.core.next(seq__47674_48707__$1);
var G__48860 = null;
var G__48861 = (0);
var G__48862 = (0);
seq__47674_48657 = G__48859;
chunk__47676_48658 = G__48860;
count__47677_48659 = G__48861;
i__47678_48660 = G__48862;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48873 = arguments.length;
var i__4737__auto___48874 = (0);
while(true){
if((i__4737__auto___48874 < len__4736__auto___48873)){
args__4742__auto__.push((arguments[i__4737__auto___48874]));

var G__48875 = (i__4737__auto___48874 + (1));
i__4737__auto___48874 = G__48875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47782){
var G__47783 = cljs.core.first(seq47782);
var seq47782__$1 = cljs.core.next(seq47782);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47783,seq47782__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47821 = arguments.length;
switch (G__47821) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__44162__auto___48877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_47827){
var state_val_47828 = (state_47827[(1)]);
if((state_val_47828 === (1))){
var state_47827__$1 = state_47827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47827__$1,(2),once_or_cleanup);
} else {
if((state_val_47828 === (2))){
var inst_47824 = (state_47827[(2)]);
var inst_47825 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47827__$1 = (function (){var statearr_47830 = state_47827;
(statearr_47830[(7)] = inst_47824);

return statearr_47830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47827__$1,inst_47825);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44043__auto__ = null;
var shadow$dom$state_machine__44043__auto____0 = (function (){
var statearr_47831 = [null,null,null,null,null,null,null,null];
(statearr_47831[(0)] = shadow$dom$state_machine__44043__auto__);

(statearr_47831[(1)] = (1));

return statearr_47831;
});
var shadow$dom$state_machine__44043__auto____1 = (function (state_47827){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_47827);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e47843){var ex__44046__auto__ = e47843;
var statearr_47844_48930 = state_47827;
(statearr_47844_48930[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_47827[(4)]))){
var statearr_47845_48931 = state_47827;
(statearr_47845_48931[(1)] = cljs.core.first((state_47827[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48933 = state_47827;
state_47827 = G__48933;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
shadow$dom$state_machine__44043__auto__ = function(state_47827){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44043__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44043__auto____1.call(this,state_47827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44043__auto____0;
shadow$dom$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44043__auto____1;
return shadow$dom$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_47848 = f__44163__auto__();
(statearr_47848[(6)] = c__44162__auto___48877);

return statearr_47848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
