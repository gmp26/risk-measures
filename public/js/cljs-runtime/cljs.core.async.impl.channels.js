goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239 = (function (val,meta42240){
this.val = val;
this.meta42240 = meta42240;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42241,meta42240__$1){
var self__ = this;
var _42241__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239(self__.val,meta42240__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42241){
var self__ = this;
var _42241__$1 = this;
return self__.meta42240;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta42240","meta42240",86189644,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42239");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42239");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42239.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels42239 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels42239(val__$1,meta42240){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239(val__$1,meta42240));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42239(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_42468 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_42468(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_42469 = self__.puts.pop();
if((putter_42469 == null)){
} else {
var put_handler_42470 = putter_42469.handler;
var val_42471 = putter_42469.val;
if(put_handler_42470.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_42472 = put_handler_42470.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_42472,put_handler_42470,val_42471,putter_42469,this$__$1){
return (function (){
return (put_cb_42472.cljs$core$IFn$_invoke$arity$1 ? put_cb_42472.cljs$core$IFn$_invoke$arity$1(true) : put_cb_42472.call(null,true));
});})(put_cb_42472,put_handler_42470,val_42471,putter_42469,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4115__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__42476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__42476;
continue;
} else {
var G__42477 = takers;
takers = G__42477;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__42246_42478 = cljs.core.seq(take_cbs);
var chunk__42247_42479 = null;
var count__42248_42480 = (0);
var i__42249_42481 = (0);
while(true){
if((i__42249_42481 < count__42248_42480)){
var f_42482 = chunk__42247_42479.cljs$core$IIndexed$_nth$arity$2(null,i__42249_42481);
cljs.core.async.impl.dispatch.run(f_42482);


var G__42483 = seq__42246_42478;
var G__42484 = chunk__42247_42479;
var G__42485 = count__42248_42480;
var G__42486 = (i__42249_42481 + (1));
seq__42246_42478 = G__42483;
chunk__42247_42479 = G__42484;
count__42248_42480 = G__42485;
i__42249_42481 = G__42486;
continue;
} else {
var temp__5735__auto___42487 = cljs.core.seq(seq__42246_42478);
if(temp__5735__auto___42487){
var seq__42246_42488__$1 = temp__5735__auto___42487;
if(cljs.core.chunked_seq_QMARK_(seq__42246_42488__$1)){
var c__4556__auto___42489 = cljs.core.chunk_first(seq__42246_42488__$1);
var G__42490 = cljs.core.chunk_rest(seq__42246_42488__$1);
var G__42491 = c__4556__auto___42489;
var G__42492 = cljs.core.count(c__4556__auto___42489);
var G__42493 = (0);
seq__42246_42478 = G__42490;
chunk__42247_42479 = G__42491;
count__42248_42480 = G__42492;
i__42249_42481 = G__42493;
continue;
} else {
var f_42494 = cljs.core.first(seq__42246_42488__$1);
cljs.core.async.impl.dispatch.run(f_42494);


var G__42495 = cljs.core.next(seq__42246_42488__$1);
var G__42496 = null;
var G__42497 = (0);
var G__42498 = (0);
seq__42246_42478 = G__42495;
chunk__42247_42479 = G__42496;
count__42248_42480 = G__42497;
i__42249_42481 = G__42498;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5733__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__42267 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))?put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__42584 = cbs__$1;
cbs = G__42584;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42267,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__42363_42585 = cljs.core.seq(cbs);
var chunk__42364_42586 = null;
var count__42365_42587 = (0);
var i__42366_42588 = (0);
while(true){
if((i__42366_42588 < count__42365_42587)){
var cb_42589 = chunk__42364_42586.cljs$core$IIndexed$_nth$arity$2(null,i__42366_42588);
cljs.core.async.impl.dispatch.run(((function (seq__42363_42585,chunk__42364_42586,count__42365_42587,i__42366_42588,cb_42589,val,vec__42267,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_42589.cljs$core$IFn$_invoke$arity$1 ? cb_42589.cljs$core$IFn$_invoke$arity$1(true) : cb_42589.call(null,true));
});})(seq__42363_42585,chunk__42364_42586,count__42365_42587,i__42366_42588,cb_42589,val,vec__42267,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__42590 = seq__42363_42585;
var G__42591 = chunk__42364_42586;
var G__42592 = count__42365_42587;
var G__42593 = (i__42366_42588 + (1));
seq__42363_42585 = G__42590;
chunk__42364_42586 = G__42591;
count__42365_42587 = G__42592;
i__42366_42588 = G__42593;
continue;
} else {
var temp__5735__auto___42594 = cljs.core.seq(seq__42363_42585);
if(temp__5735__auto___42594){
var seq__42363_42595__$1 = temp__5735__auto___42594;
if(cljs.core.chunked_seq_QMARK_(seq__42363_42595__$1)){
var c__4556__auto___42596 = cljs.core.chunk_first(seq__42363_42595__$1);
var G__42597 = cljs.core.chunk_rest(seq__42363_42595__$1);
var G__42598 = c__4556__auto___42596;
var G__42599 = cljs.core.count(c__4556__auto___42596);
var G__42600 = (0);
seq__42363_42585 = G__42597;
chunk__42364_42586 = G__42598;
count__42365_42587 = G__42599;
i__42366_42588 = G__42600;
continue;
} else {
var cb_42602 = cljs.core.first(seq__42363_42595__$1);
cljs.core.async.impl.dispatch.run(((function (seq__42363_42585,chunk__42364_42586,count__42365_42587,i__42366_42588,cb_42602,seq__42363_42595__$1,temp__5735__auto___42594,val,vec__42267,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_42602.cljs$core$IFn$_invoke$arity$1 ? cb_42602.cljs$core$IFn$_invoke$arity$1(true) : cb_42602.call(null,true));
});})(seq__42363_42585,chunk__42364_42586,count__42365_42587,i__42366_42588,cb_42602,seq__42363_42595__$1,temp__5735__auto___42594,val,vec__42267,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__42604 = cljs.core.next(seq__42363_42595__$1);
var G__42605 = null;
var G__42606 = (0);
var G__42607 = (0);
seq__42363_42585 = G__42604;
chunk__42364_42586 = G__42605;
count__42365_42587 = G__42606;
i__42366_42588 = G__42607;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})())){
var has_val = (function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4115__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.puts.length === (0));
} else {
return and__4115__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_42675 = self__.takes.pop();
if((taker_42675 == null)){
} else {
if(taker_42675.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_42680 = taker_42675.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_42681 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4115__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_42680,val_42681,taker_42675,this$__$1){
return (function (){
return (take_cb_42680.cljs$core$IFn$_invoke$arity$1 ? take_cb_42680.cljs$core$IFn$_invoke$arity$1(val_42681) : take_cb_42680.call(null,val_42681));
});})(take_cb_42680,val_42681,taker_42675,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__42386 = (function (){var or__4126__auto__ = exh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__42386.cljs$core$IFn$_invoke$arity$1 ? fexpr__42386.cljs$core$IFn$_invoke$arity$1(t) : fexpr__42386.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__42390 = arguments.length;
switch (G__42390) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__42701 = null;
var G__42701__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e42431){var t = e42431;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__42701__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e42433){var t = e42433;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__42701 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__42701__1.call(this,buf__$1);
case 2:
return G__42701__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42701.cljs$core$IFn$_invoke$arity$1 = G__42701__1;
G__42701.cljs$core$IFn$_invoke$arity$2 = G__42701__2;
return G__42701;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
