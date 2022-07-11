goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44221 = arguments.length;
switch (G__44221) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44222 = (function (f,blockable,meta44223){
this.f = f;
this.blockable = blockable;
this.meta44223 = meta44223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44224,meta44223__$1){
var self__ = this;
var _44224__$1 = this;
return (new cljs.core.async.t_cljs$core$async44222(self__.f,self__.blockable,meta44223__$1));
}));

(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44224){
var self__ = this;
var _44224__$1 = this;
return self__.meta44223;
}));

(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44223","meta44223",-1218783309,null)], null);
}));

(cljs.core.async.t_cljs$core$async44222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44222");

(cljs.core.async.t_cljs$core$async44222.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44222.
 */
cljs.core.async.__GT_t_cljs$core$async44222 = (function cljs$core$async$__GT_t_cljs$core$async44222(f__$1,blockable__$1,meta44223){
return (new cljs.core.async.t_cljs$core$async44222(f__$1,blockable__$1,meta44223));
});

}

return (new cljs.core.async.t_cljs$core$async44222(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44227 = arguments.length;
switch (G__44227) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44229 = arguments.length;
switch (G__44229) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44241 = arguments.length;
switch (G__44241) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47209 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47209) : fn1.call(null,val_47209));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47209) : fn1.call(null,val_47209));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44265 = arguments.length;
switch (G__44265) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___47219 = n;
var x_47220 = (0);
while(true){
if((x_47220 < n__4613__auto___47219)){
(a[x_47220] = x_47220);

var G__47221 = (x_47220 + (1));
x_47220 = G__47221;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44281 = (function (flag,meta44282){
this.flag = flag;
this.meta44282 = meta44282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44283,meta44282__$1){
var self__ = this;
var _44283__$1 = this;
return (new cljs.core.async.t_cljs$core$async44281(self__.flag,meta44282__$1));
}));

(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44283){
var self__ = this;
var _44283__$1 = this;
return self__.meta44282;
}));

(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44282","meta44282",1653028317,null)], null);
}));

(cljs.core.async.t_cljs$core$async44281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44281");

(cljs.core.async.t_cljs$core$async44281.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44281.
 */
cljs.core.async.__GT_t_cljs$core$async44281 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44281(flag__$1,meta44282){
return (new cljs.core.async.t_cljs$core$async44281(flag__$1,meta44282));
});

}

return (new cljs.core.async.t_cljs$core$async44281(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44286 = (function (flag,cb,meta44287){
this.flag = flag;
this.cb = cb;
this.meta44287 = meta44287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44288,meta44287__$1){
var self__ = this;
var _44288__$1 = this;
return (new cljs.core.async.t_cljs$core$async44286(self__.flag,self__.cb,meta44287__$1));
}));

(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44288){
var self__ = this;
var _44288__$1 = this;
return self__.meta44287;
}));

(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44287","meta44287",-1644390770,null)], null);
}));

(cljs.core.async.t_cljs$core$async44286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44286");

(cljs.core.async.t_cljs$core$async44286.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44286.
 */
cljs.core.async.__GT_t_cljs$core$async44286 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44286(flag__$1,cb__$1,meta44287){
return (new cljs.core.async.t_cljs$core$async44286(flag__$1,cb__$1,meta44287));
});

}

return (new cljs.core.async.t_cljs$core$async44286(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44289_SHARP_){
var G__44300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44289_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44300) : fret.call(null,G__44300));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44290_SHARP_){
var G__44301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44290_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44301) : fret.call(null,G__44301));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47278 = (i + (1));
i = G__47278;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47282 = arguments.length;
var i__4737__auto___47283 = (0);
while(true){
if((i__4737__auto___47283 < len__4736__auto___47282)){
args__4742__auto__.push((arguments[i__4737__auto___47283]));

var G__47284 = (i__4737__auto___47283 + (1));
i__4737__auto___47283 = G__47284;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44305){
var map__44306 = p__44305;
var map__44306__$1 = (((((!((map__44306 == null))))?(((((map__44306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44306):map__44306);
var opts = map__44306__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44303){
var G__44304 = cljs.core.first(seq44303);
var seq44303__$1 = cljs.core.next(seq44303);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44304,seq44303__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44309 = arguments.length;
switch (G__44309) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44162__auto___47296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44334){
var state_val_44335 = (state_44334[(1)]);
if((state_val_44335 === (7))){
var inst_44330 = (state_44334[(2)]);
var state_44334__$1 = state_44334;
var statearr_44344_47299 = state_44334__$1;
(statearr_44344_47299[(2)] = inst_44330);

(statearr_44344_47299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (1))){
var state_44334__$1 = state_44334;
var statearr_44351_47300 = state_44334__$1;
(statearr_44351_47300[(2)] = null);

(statearr_44351_47300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (4))){
var inst_44313 = (state_44334[(7)]);
var inst_44313__$1 = (state_44334[(2)]);
var inst_44314 = (inst_44313__$1 == null);
var state_44334__$1 = (function (){var statearr_44352 = state_44334;
(statearr_44352[(7)] = inst_44313__$1);

return statearr_44352;
})();
if(cljs.core.truth_(inst_44314)){
var statearr_44353_47301 = state_44334__$1;
(statearr_44353_47301[(1)] = (5));

} else {
var statearr_44354_47302 = state_44334__$1;
(statearr_44354_47302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (13))){
var state_44334__$1 = state_44334;
var statearr_44358_47303 = state_44334__$1;
(statearr_44358_47303[(2)] = null);

(statearr_44358_47303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (6))){
var inst_44313 = (state_44334[(7)]);
var state_44334__$1 = state_44334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44334__$1,(11),to,inst_44313);
} else {
if((state_val_44335 === (3))){
var inst_44332 = (state_44334[(2)]);
var state_44334__$1 = state_44334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44334__$1,inst_44332);
} else {
if((state_val_44335 === (12))){
var state_44334__$1 = state_44334;
var statearr_44364_47304 = state_44334__$1;
(statearr_44364_47304[(2)] = null);

(statearr_44364_47304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (2))){
var state_44334__$1 = state_44334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44334__$1,(4),from);
} else {
if((state_val_44335 === (11))){
var inst_44323 = (state_44334[(2)]);
var state_44334__$1 = state_44334;
if(cljs.core.truth_(inst_44323)){
var statearr_44365_47305 = state_44334__$1;
(statearr_44365_47305[(1)] = (12));

} else {
var statearr_44366_47306 = state_44334__$1;
(statearr_44366_47306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (9))){
var state_44334__$1 = state_44334;
var statearr_44367_47307 = state_44334__$1;
(statearr_44367_47307[(2)] = null);

(statearr_44367_47307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (5))){
var state_44334__$1 = state_44334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44368_47308 = state_44334__$1;
(statearr_44368_47308[(1)] = (8));

} else {
var statearr_44372_47309 = state_44334__$1;
(statearr_44372_47309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (14))){
var inst_44328 = (state_44334[(2)]);
var state_44334__$1 = state_44334;
var statearr_44373_47311 = state_44334__$1;
(statearr_44373_47311[(2)] = inst_44328);

(statearr_44373_47311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (10))){
var inst_44320 = (state_44334[(2)]);
var state_44334__$1 = state_44334;
var statearr_44374_47313 = state_44334__$1;
(statearr_44374_47313[(2)] = inst_44320);

(statearr_44374_47313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44335 === (8))){
var inst_44317 = cljs.core.async.close_BANG_(to);
var state_44334__$1 = state_44334;
var statearr_44375_47314 = state_44334__$1;
(statearr_44375_47314[(2)] = inst_44317);

(statearr_44375_47314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_44392 = [null,null,null,null,null,null,null,null];
(statearr_44392[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_44392[(1)] = (1));

return statearr_44392;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_44334){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44334);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44394){var ex__44046__auto__ = e44394;
var statearr_44395_47315 = state_44334;
(statearr_44395_47315[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44334[(4)]))){
var statearr_44396_47316 = state_44334;
(statearr_44396_47316[(1)] = cljs.core.first((state_44334[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47317 = state_44334;
state_44334 = G__47317;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_44334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_44334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44397 = f__44163__auto__();
(statearr_44397[(6)] = c__44162__auto___47296);

return statearr_44397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44404){
var vec__44405 = p__44404;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44405,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44405,(1),null);
var job = vec__44405;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44162__auto___47327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44412){
var state_val_44413 = (state_44412[(1)]);
if((state_val_44413 === (1))){
var state_44412__$1 = state_44412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44412__$1,(2),res,v);
} else {
if((state_val_44413 === (2))){
var inst_44409 = (state_44412[(2)]);
var inst_44410 = cljs.core.async.close_BANG_(res);
var state_44412__$1 = (function (){var statearr_44417 = state_44412;
(statearr_44417[(7)] = inst_44409);

return statearr_44417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44412__$1,inst_44410);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_44418 = [null,null,null,null,null,null,null,null];
(statearr_44418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__);

(statearr_44418[(1)] = (1));

return statearr_44418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1 = (function (state_44412){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44412);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44429){var ex__44046__auto__ = e44429;
var statearr_44430_47328 = state_44412;
(statearr_44430_47328[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44412[(4)]))){
var statearr_44431_47329 = state_44412;
(statearr_44431_47329[(1)] = cljs.core.first((state_44412[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47330 = state_44412;
state_44412 = G__47330;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = function(state_44412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1.call(this,state_44412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44432 = f__44163__auto__();
(statearr_44432[(6)] = c__44162__auto___47327);

return statearr_44432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44433){
var vec__44434 = p__44433;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(1),null);
var job = vec__44434;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___47335 = n;
var __47336 = (0);
while(true){
if((__47336 < n__4613__auto___47335)){
var G__44437_47337 = type;
var G__44437_47338__$1 = (((G__44437_47337 instanceof cljs.core.Keyword))?G__44437_47337.fqn:null);
switch (G__44437_47338__$1) {
case "compute":
var c__44162__auto___47340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47336,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = ((function (__47336,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function (state_44450){
var state_val_44451 = (state_44450[(1)]);
if((state_val_44451 === (1))){
var state_44450__$1 = state_44450;
var statearr_44452_47341 = state_44450__$1;
(statearr_44452_47341[(2)] = null);

(statearr_44452_47341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (2))){
var state_44450__$1 = state_44450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44450__$1,(4),jobs);
} else {
if((state_val_44451 === (3))){
var inst_44448 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44450__$1,inst_44448);
} else {
if((state_val_44451 === (4))){
var inst_44440 = (state_44450[(2)]);
var inst_44441 = process(inst_44440);
var state_44450__$1 = state_44450;
if(cljs.core.truth_(inst_44441)){
var statearr_44453_47343 = state_44450__$1;
(statearr_44453_47343[(1)] = (5));

} else {
var statearr_44454_47344 = state_44450__$1;
(statearr_44454_47344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (5))){
var state_44450__$1 = state_44450;
var statearr_44455_47345 = state_44450__$1;
(statearr_44455_47345[(2)] = null);

(statearr_44455_47345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (6))){
var state_44450__$1 = state_44450;
var statearr_44456_47346 = state_44450__$1;
(statearr_44456_47346[(2)] = null);

(statearr_44456_47346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44451 === (7))){
var inst_44446 = (state_44450[(2)]);
var state_44450__$1 = state_44450;
var statearr_44457_47351 = state_44450__$1;
(statearr_44457_47351[(2)] = inst_44446);

(statearr_44457_47351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47336,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
;
return ((function (__47336,switch__44042__auto__,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_44458 = [null,null,null,null,null,null,null];
(statearr_44458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__);

(statearr_44458[(1)] = (1));

return statearr_44458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1 = (function (state_44450){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44450);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44459){var ex__44046__auto__ = e44459;
var statearr_44460_47352 = state_44450;
(statearr_44460_47352[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44450[(4)]))){
var statearr_44461_47353 = state_44450;
(statearr_44461_47353[(1)] = cljs.core.first((state_44450[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47354 = state_44450;
state_44450 = G__47354;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = function(state_44450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1.call(this,state_44450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__;
})()
;})(__47336,switch__44042__auto__,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
})();
var state__44164__auto__ = (function (){var statearr_44462 = f__44163__auto__();
(statearr_44462[(6)] = c__44162__auto___47340);

return statearr_44462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
});})(__47336,c__44162__auto___47340,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
);


break;
case "async":
var c__44162__auto___47355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47336,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = ((function (__47336,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function (state_44475){
var state_val_44476 = (state_44475[(1)]);
if((state_val_44476 === (1))){
var state_44475__$1 = state_44475;
var statearr_44477_47380 = state_44475__$1;
(statearr_44477_47380[(2)] = null);

(statearr_44477_47380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44476 === (2))){
var state_44475__$1 = state_44475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44475__$1,(4),jobs);
} else {
if((state_val_44476 === (3))){
var inst_44473 = (state_44475[(2)]);
var state_44475__$1 = state_44475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44475__$1,inst_44473);
} else {
if((state_val_44476 === (4))){
var inst_44465 = (state_44475[(2)]);
var inst_44466 = async(inst_44465);
var state_44475__$1 = state_44475;
if(cljs.core.truth_(inst_44466)){
var statearr_44478_47381 = state_44475__$1;
(statearr_44478_47381[(1)] = (5));

} else {
var statearr_44479_47382 = state_44475__$1;
(statearr_44479_47382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44476 === (5))){
var state_44475__$1 = state_44475;
var statearr_44480_47383 = state_44475__$1;
(statearr_44480_47383[(2)] = null);

(statearr_44480_47383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44476 === (6))){
var state_44475__$1 = state_44475;
var statearr_44481_47384 = state_44475__$1;
(statearr_44481_47384[(2)] = null);

(statearr_44481_47384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44476 === (7))){
var inst_44471 = (state_44475[(2)]);
var state_44475__$1 = state_44475;
var statearr_44482_47385 = state_44475__$1;
(statearr_44482_47385[(2)] = inst_44471);

(statearr_44482_47385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47336,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
;
return ((function (__47336,switch__44042__auto__,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_44483 = [null,null,null,null,null,null,null];
(statearr_44483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__);

(statearr_44483[(1)] = (1));

return statearr_44483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1 = (function (state_44475){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44475);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44485){var ex__44046__auto__ = e44485;
var statearr_44490_47386 = state_44475;
(statearr_44490_47386[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44475[(4)]))){
var statearr_44491_47387 = state_44475;
(statearr_44491_47387[(1)] = cljs.core.first((state_44475[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47388 = state_44475;
state_44475 = G__47388;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = function(state_44475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1.call(this,state_44475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__;
})()
;})(__47336,switch__44042__auto__,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
})();
var state__44164__auto__ = (function (){var statearr_44492 = f__44163__auto__();
(statearr_44492[(6)] = c__44162__auto___47355);

return statearr_44492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
});})(__47336,c__44162__auto___47355,G__44437_47337,G__44437_47338__$1,n__4613__auto___47335,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44437_47338__$1)].join('')));

}

var G__47389 = (__47336 + (1));
__47336 = G__47389;
continue;
} else {
}
break;
}

var c__44162__auto___47390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44517){
var state_val_44518 = (state_44517[(1)]);
if((state_val_44518 === (7))){
var inst_44513 = (state_44517[(2)]);
var state_44517__$1 = state_44517;
var statearr_44519_47391 = state_44517__$1;
(statearr_44519_47391[(2)] = inst_44513);

(statearr_44519_47391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44518 === (1))){
var state_44517__$1 = state_44517;
var statearr_44520_47392 = state_44517__$1;
(statearr_44520_47392[(2)] = null);

(statearr_44520_47392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44518 === (4))){
var inst_44496 = (state_44517[(7)]);
var inst_44496__$1 = (state_44517[(2)]);
var inst_44497 = (inst_44496__$1 == null);
var state_44517__$1 = (function (){var statearr_44521 = state_44517;
(statearr_44521[(7)] = inst_44496__$1);

return statearr_44521;
})();
if(cljs.core.truth_(inst_44497)){
var statearr_44522_47397 = state_44517__$1;
(statearr_44522_47397[(1)] = (5));

} else {
var statearr_44523_47398 = state_44517__$1;
(statearr_44523_47398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44518 === (6))){
var inst_44501 = (state_44517[(8)]);
var inst_44496 = (state_44517[(7)]);
var inst_44501__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44504 = [inst_44496,inst_44501__$1];
var inst_44505 = (new cljs.core.PersistentVector(null,2,(5),inst_44502,inst_44504,null));
var state_44517__$1 = (function (){var statearr_44534 = state_44517;
(statearr_44534[(8)] = inst_44501__$1);

return statearr_44534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44517__$1,(8),jobs,inst_44505);
} else {
if((state_val_44518 === (3))){
var inst_44515 = (state_44517[(2)]);
var state_44517__$1 = state_44517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44517__$1,inst_44515);
} else {
if((state_val_44518 === (2))){
var state_44517__$1 = state_44517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44517__$1,(4),from);
} else {
if((state_val_44518 === (9))){
var inst_44510 = (state_44517[(2)]);
var state_44517__$1 = (function (){var statearr_44538 = state_44517;
(statearr_44538[(9)] = inst_44510);

return statearr_44538;
})();
var statearr_44539_47399 = state_44517__$1;
(statearr_44539_47399[(2)] = null);

(statearr_44539_47399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44518 === (5))){
var inst_44499 = cljs.core.async.close_BANG_(jobs);
var state_44517__$1 = state_44517;
var statearr_44540_47400 = state_44517__$1;
(statearr_44540_47400[(2)] = inst_44499);

(statearr_44540_47400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44518 === (8))){
var inst_44501 = (state_44517[(8)]);
var inst_44507 = (state_44517[(2)]);
var state_44517__$1 = (function (){var statearr_44541 = state_44517;
(statearr_44541[(10)] = inst_44507);

return statearr_44541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44517__$1,(9),results,inst_44501);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_44542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__);

(statearr_44542[(1)] = (1));

return statearr_44542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1 = (function (state_44517){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44517);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44543){var ex__44046__auto__ = e44543;
var statearr_44544_47403 = state_44517;
(statearr_44544_47403[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44517[(4)]))){
var statearr_44545_47409 = state_44517;
(statearr_44545_47409[(1)] = cljs.core.first((state_44517[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47410 = state_44517;
state_44517 = G__47410;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = function(state_44517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1.call(this,state_44517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44547 = f__44163__auto__();
(statearr_44547[(6)] = c__44162__auto___47390);

return statearr_44547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


var c__44162__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44587){
var state_val_44588 = (state_44587[(1)]);
if((state_val_44588 === (7))){
var inst_44583 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
var statearr_44590_47413 = state_44587__$1;
(statearr_44590_47413[(2)] = inst_44583);

(statearr_44590_47413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (20))){
var state_44587__$1 = state_44587;
var statearr_44593_47415 = state_44587__$1;
(statearr_44593_47415[(2)] = null);

(statearr_44593_47415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (1))){
var state_44587__$1 = state_44587;
var statearr_44595_47416 = state_44587__$1;
(statearr_44595_47416[(2)] = null);

(statearr_44595_47416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (4))){
var inst_44551 = (state_44587[(7)]);
var inst_44551__$1 = (state_44587[(2)]);
var inst_44552 = (inst_44551__$1 == null);
var state_44587__$1 = (function (){var statearr_44596 = state_44587;
(statearr_44596[(7)] = inst_44551__$1);

return statearr_44596;
})();
if(cljs.core.truth_(inst_44552)){
var statearr_44597_47418 = state_44587__$1;
(statearr_44597_47418[(1)] = (5));

} else {
var statearr_44598_47419 = state_44587__$1;
(statearr_44598_47419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (15))){
var inst_44564 = (state_44587[(8)]);
var state_44587__$1 = state_44587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44587__$1,(18),to,inst_44564);
} else {
if((state_val_44588 === (21))){
var inst_44578 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
var statearr_44599_47420 = state_44587__$1;
(statearr_44599_47420[(2)] = inst_44578);

(statearr_44599_47420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (13))){
var inst_44580 = (state_44587[(2)]);
var state_44587__$1 = (function (){var statearr_44600 = state_44587;
(statearr_44600[(9)] = inst_44580);

return statearr_44600;
})();
var statearr_44601_47421 = state_44587__$1;
(statearr_44601_47421[(2)] = null);

(statearr_44601_47421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (6))){
var inst_44551 = (state_44587[(7)]);
var state_44587__$1 = state_44587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44587__$1,(11),inst_44551);
} else {
if((state_val_44588 === (17))){
var inst_44573 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
if(cljs.core.truth_(inst_44573)){
var statearr_44605_47422 = state_44587__$1;
(statearr_44605_47422[(1)] = (19));

} else {
var statearr_44606_47424 = state_44587__$1;
(statearr_44606_47424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (3))){
var inst_44585 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44587__$1,inst_44585);
} else {
if((state_val_44588 === (12))){
var inst_44561 = (state_44587[(10)]);
var state_44587__$1 = state_44587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44587__$1,(14),inst_44561);
} else {
if((state_val_44588 === (2))){
var state_44587__$1 = state_44587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44587__$1,(4),results);
} else {
if((state_val_44588 === (19))){
var state_44587__$1 = state_44587;
var statearr_44607_47426 = state_44587__$1;
(statearr_44607_47426[(2)] = null);

(statearr_44607_47426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (11))){
var inst_44561 = (state_44587[(2)]);
var state_44587__$1 = (function (){var statearr_44608 = state_44587;
(statearr_44608[(10)] = inst_44561);

return statearr_44608;
})();
var statearr_44609_47427 = state_44587__$1;
(statearr_44609_47427[(2)] = null);

(statearr_44609_47427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (9))){
var state_44587__$1 = state_44587;
var statearr_44610_47428 = state_44587__$1;
(statearr_44610_47428[(2)] = null);

(statearr_44610_47428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (5))){
var state_44587__$1 = state_44587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44611_47429 = state_44587__$1;
(statearr_44611_47429[(1)] = (8));

} else {
var statearr_44612_47430 = state_44587__$1;
(statearr_44612_47430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (14))){
var inst_44564 = (state_44587[(8)]);
var inst_44564__$1 = (state_44587[(2)]);
var inst_44566 = (inst_44564__$1 == null);
var inst_44567 = cljs.core.not(inst_44566);
var state_44587__$1 = (function (){var statearr_44613 = state_44587;
(statearr_44613[(8)] = inst_44564__$1);

return statearr_44613;
})();
if(inst_44567){
var statearr_44614_47431 = state_44587__$1;
(statearr_44614_47431[(1)] = (15));

} else {
var statearr_44615_47432 = state_44587__$1;
(statearr_44615_47432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (16))){
var state_44587__$1 = state_44587;
var statearr_44616_47433 = state_44587__$1;
(statearr_44616_47433[(2)] = false);

(statearr_44616_47433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (10))){
var inst_44558 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
var statearr_44621_47434 = state_44587__$1;
(statearr_44621_47434[(2)] = inst_44558);

(statearr_44621_47434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (18))){
var inst_44570 = (state_44587[(2)]);
var state_44587__$1 = state_44587;
var statearr_44624_47435 = state_44587__$1;
(statearr_44624_47435[(2)] = inst_44570);

(statearr_44624_47435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44588 === (8))){
var inst_44555 = cljs.core.async.close_BANG_(to);
var state_44587__$1 = state_44587;
var statearr_44626_47440 = state_44587__$1;
(statearr_44626_47440[(2)] = inst_44555);

(statearr_44626_47440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_44630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__);

(statearr_44630[(1)] = (1));

return statearr_44630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1 = (function (state_44587){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44587);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44633){var ex__44046__auto__ = e44633;
var statearr_44635_47473 = state_44587;
(statearr_44635_47473[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44587[(4)]))){
var statearr_44636_47474 = state_44587;
(statearr_44636_47474[(1)] = cljs.core.first((state_44587[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47475 = state_44587;
state_44587 = G__47475;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__ = function(state_44587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1.call(this,state_44587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44637 = f__44163__auto__();
(statearr_44637[(6)] = c__44162__auto__);

return statearr_44637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

return c__44162__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44643 = arguments.length;
switch (G__44643) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44655 = arguments.length;
switch (G__44655) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44664 = arguments.length;
switch (G__44664) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44162__auto___47480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44697){
var state_val_44698 = (state_44697[(1)]);
if((state_val_44698 === (7))){
var inst_44693 = (state_44697[(2)]);
var state_44697__$1 = state_44697;
var statearr_44709_47481 = state_44697__$1;
(statearr_44709_47481[(2)] = inst_44693);

(statearr_44709_47481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (1))){
var state_44697__$1 = state_44697;
var statearr_44710_47482 = state_44697__$1;
(statearr_44710_47482[(2)] = null);

(statearr_44710_47482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (4))){
var inst_44674 = (state_44697[(7)]);
var inst_44674__$1 = (state_44697[(2)]);
var inst_44675 = (inst_44674__$1 == null);
var state_44697__$1 = (function (){var statearr_44713 = state_44697;
(statearr_44713[(7)] = inst_44674__$1);

return statearr_44713;
})();
if(cljs.core.truth_(inst_44675)){
var statearr_44715_47483 = state_44697__$1;
(statearr_44715_47483[(1)] = (5));

} else {
var statearr_44717_47484 = state_44697__$1;
(statearr_44717_47484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (13))){
var state_44697__$1 = state_44697;
var statearr_44721_47485 = state_44697__$1;
(statearr_44721_47485[(2)] = null);

(statearr_44721_47485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (6))){
var inst_44674 = (state_44697[(7)]);
var inst_44680 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44674) : p.call(null,inst_44674));
var state_44697__$1 = state_44697;
if(cljs.core.truth_(inst_44680)){
var statearr_44722_47498 = state_44697__$1;
(statearr_44722_47498[(1)] = (9));

} else {
var statearr_44726_47499 = state_44697__$1;
(statearr_44726_47499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (3))){
var inst_44695 = (state_44697[(2)]);
var state_44697__$1 = state_44697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44697__$1,inst_44695);
} else {
if((state_val_44698 === (12))){
var state_44697__$1 = state_44697;
var statearr_44727_47500 = state_44697__$1;
(statearr_44727_47500[(2)] = null);

(statearr_44727_47500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (2))){
var state_44697__$1 = state_44697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44697__$1,(4),ch);
} else {
if((state_val_44698 === (11))){
var inst_44674 = (state_44697[(7)]);
var inst_44684 = (state_44697[(2)]);
var state_44697__$1 = state_44697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44697__$1,(8),inst_44684,inst_44674);
} else {
if((state_val_44698 === (9))){
var state_44697__$1 = state_44697;
var statearr_44728_47502 = state_44697__$1;
(statearr_44728_47502[(2)] = tc);

(statearr_44728_47502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (5))){
var inst_44677 = cljs.core.async.close_BANG_(tc);
var inst_44678 = cljs.core.async.close_BANG_(fc);
var state_44697__$1 = (function (){var statearr_44729 = state_44697;
(statearr_44729[(8)] = inst_44677);

return statearr_44729;
})();
var statearr_44730_47503 = state_44697__$1;
(statearr_44730_47503[(2)] = inst_44678);

(statearr_44730_47503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (14))){
var inst_44691 = (state_44697[(2)]);
var state_44697__$1 = state_44697;
var statearr_44731_47504 = state_44697__$1;
(statearr_44731_47504[(2)] = inst_44691);

(statearr_44731_47504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (10))){
var state_44697__$1 = state_44697;
var statearr_44738_47505 = state_44697__$1;
(statearr_44738_47505[(2)] = fc);

(statearr_44738_47505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44698 === (8))){
var inst_44686 = (state_44697[(2)]);
var state_44697__$1 = state_44697;
if(cljs.core.truth_(inst_44686)){
var statearr_44739_47507 = state_44697__$1;
(statearr_44739_47507[(1)] = (12));

} else {
var statearr_44740_47508 = state_44697__$1;
(statearr_44740_47508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_44744 = [null,null,null,null,null,null,null,null,null];
(statearr_44744[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_44744[(1)] = (1));

return statearr_44744;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_44697){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44697);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44746){var ex__44046__auto__ = e44746;
var statearr_44747_47509 = state_44697;
(statearr_44747_47509[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44697[(4)]))){
var statearr_44748_47510 = state_44697;
(statearr_44748_47510[(1)] = cljs.core.first((state_44697[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47511 = state_44697;
state_44697 = G__47511;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_44697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_44697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44749 = f__44163__auto__();
(statearr_44749[(6)] = c__44162__auto___47480);

return statearr_44749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44162__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44774){
var state_val_44775 = (state_44774[(1)]);
if((state_val_44775 === (7))){
var inst_44769 = (state_44774[(2)]);
var state_44774__$1 = state_44774;
var statearr_44777_47512 = state_44774__$1;
(statearr_44777_47512[(2)] = inst_44769);

(statearr_44777_47512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (1))){
var inst_44751 = init;
var inst_44752 = inst_44751;
var state_44774__$1 = (function (){var statearr_44782 = state_44774;
(statearr_44782[(7)] = inst_44752);

return statearr_44782;
})();
var statearr_44783_47513 = state_44774__$1;
(statearr_44783_47513[(2)] = null);

(statearr_44783_47513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (4))){
var inst_44755 = (state_44774[(8)]);
var inst_44755__$1 = (state_44774[(2)]);
var inst_44756 = (inst_44755__$1 == null);
var state_44774__$1 = (function (){var statearr_44784 = state_44774;
(statearr_44784[(8)] = inst_44755__$1);

return statearr_44784;
})();
if(cljs.core.truth_(inst_44756)){
var statearr_44785_47514 = state_44774__$1;
(statearr_44785_47514[(1)] = (5));

} else {
var statearr_44786_47515 = state_44774__$1;
(statearr_44786_47515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (6))){
var inst_44755 = (state_44774[(8)]);
var inst_44752 = (state_44774[(7)]);
var inst_44759 = (state_44774[(9)]);
var inst_44759__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44752,inst_44755) : f.call(null,inst_44752,inst_44755));
var inst_44760 = cljs.core.reduced_QMARK_(inst_44759__$1);
var state_44774__$1 = (function (){var statearr_44787 = state_44774;
(statearr_44787[(9)] = inst_44759__$1);

return statearr_44787;
})();
if(inst_44760){
var statearr_44788_47517 = state_44774__$1;
(statearr_44788_47517[(1)] = (8));

} else {
var statearr_44789_47518 = state_44774__$1;
(statearr_44789_47518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (3))){
var inst_44771 = (state_44774[(2)]);
var state_44774__$1 = state_44774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44774__$1,inst_44771);
} else {
if((state_val_44775 === (2))){
var state_44774__$1 = state_44774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44774__$1,(4),ch);
} else {
if((state_val_44775 === (9))){
var inst_44759 = (state_44774[(9)]);
var inst_44752 = inst_44759;
var state_44774__$1 = (function (){var statearr_44793 = state_44774;
(statearr_44793[(7)] = inst_44752);

return statearr_44793;
})();
var statearr_44794_47538 = state_44774__$1;
(statearr_44794_47538[(2)] = null);

(statearr_44794_47538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (5))){
var inst_44752 = (state_44774[(7)]);
var state_44774__$1 = state_44774;
var statearr_44795_47539 = state_44774__$1;
(statearr_44795_47539[(2)] = inst_44752);

(statearr_44795_47539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (10))){
var inst_44766 = (state_44774[(2)]);
var state_44774__$1 = state_44774;
var statearr_44796_47540 = state_44774__$1;
(statearr_44796_47540[(2)] = inst_44766);

(statearr_44796_47540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44775 === (8))){
var inst_44759 = (state_44774[(9)]);
var inst_44762 = cljs.core.deref(inst_44759);
var state_44774__$1 = state_44774;
var statearr_44797_47541 = state_44774__$1;
(statearr_44797_47541[(2)] = inst_44762);

(statearr_44797_47541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44043__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44043__auto____0 = (function (){
var statearr_44798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44798[(0)] = cljs$core$async$reduce_$_state_machine__44043__auto__);

(statearr_44798[(1)] = (1));

return statearr_44798;
});
var cljs$core$async$reduce_$_state_machine__44043__auto____1 = (function (state_44774){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44774);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44799){var ex__44046__auto__ = e44799;
var statearr_44800_47543 = state_44774;
(statearr_44800_47543[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44774[(4)]))){
var statearr_44805_47544 = state_44774;
(statearr_44805_47544[(1)] = cljs.core.first((state_44774[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47545 = state_44774;
state_44774 = G__47545;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44043__auto__ = function(state_44774){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44043__auto____1.call(this,state_44774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44043__auto____0;
cljs$core$async$reduce_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44043__auto____1;
return cljs$core$async$reduce_$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44806 = f__44163__auto__();
(statearr_44806[(6)] = c__44162__auto__);

return statearr_44806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

return c__44162__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44162__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44817){
var state_val_44818 = (state_44817[(1)]);
if((state_val_44818 === (1))){
var inst_44812 = cljs.core.async.reduce(f__$1,init,ch);
var state_44817__$1 = state_44817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44817__$1,(2),inst_44812);
} else {
if((state_val_44818 === (2))){
var inst_44814 = (state_44817[(2)]);
var inst_44815 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44814) : f__$1.call(null,inst_44814));
var state_44817__$1 = state_44817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44817__$1,inst_44815);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44043__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44043__auto____0 = (function (){
var statearr_44822 = [null,null,null,null,null,null,null];
(statearr_44822[(0)] = cljs$core$async$transduce_$_state_machine__44043__auto__);

(statearr_44822[(1)] = (1));

return statearr_44822;
});
var cljs$core$async$transduce_$_state_machine__44043__auto____1 = (function (state_44817){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44817);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44823){var ex__44046__auto__ = e44823;
var statearr_44825_47546 = state_44817;
(statearr_44825_47546[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44817[(4)]))){
var statearr_44831_47547 = state_44817;
(statearr_44831_47547[(1)] = cljs.core.first((state_44817[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47548 = state_44817;
state_44817 = G__47548;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44043__auto__ = function(state_44817){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44043__auto____1.call(this,state_44817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44043__auto____0;
cljs$core$async$transduce_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44043__auto____1;
return cljs$core$async$transduce_$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44833 = f__44163__auto__();
(statearr_44833[(6)] = c__44162__auto__);

return statearr_44833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

return c__44162__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44835 = arguments.length;
switch (G__44835) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44162__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_44867){
var state_val_44868 = (state_44867[(1)]);
if((state_val_44868 === (7))){
var inst_44846 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44873_47550 = state_44867__$1;
(statearr_44873_47550[(2)] = inst_44846);

(statearr_44873_47550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (1))){
var inst_44840 = cljs.core.seq(coll);
var inst_44841 = inst_44840;
var state_44867__$1 = (function (){var statearr_44874 = state_44867;
(statearr_44874[(7)] = inst_44841);

return statearr_44874;
})();
var statearr_44879_47558 = state_44867__$1;
(statearr_44879_47558[(2)] = null);

(statearr_44879_47558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (4))){
var inst_44841 = (state_44867[(7)]);
var inst_44844 = cljs.core.first(inst_44841);
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44867__$1,(7),ch,inst_44844);
} else {
if((state_val_44868 === (13))){
var inst_44858 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44880_47561 = state_44867__$1;
(statearr_44880_47561[(2)] = inst_44858);

(statearr_44880_47561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (6))){
var inst_44849 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
if(cljs.core.truth_(inst_44849)){
var statearr_44881_47562 = state_44867__$1;
(statearr_44881_47562[(1)] = (8));

} else {
var statearr_44882_47563 = state_44867__$1;
(statearr_44882_47563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (3))){
var inst_44862 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44867__$1,inst_44862);
} else {
if((state_val_44868 === (12))){
var state_44867__$1 = state_44867;
var statearr_44883_47564 = state_44867__$1;
(statearr_44883_47564[(2)] = null);

(statearr_44883_47564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (2))){
var inst_44841 = (state_44867[(7)]);
var state_44867__$1 = state_44867;
if(cljs.core.truth_(inst_44841)){
var statearr_44886_47565 = state_44867__$1;
(statearr_44886_47565[(1)] = (4));

} else {
var statearr_44888_47566 = state_44867__$1;
(statearr_44888_47566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (11))){
var inst_44855 = cljs.core.async.close_BANG_(ch);
var state_44867__$1 = state_44867;
var statearr_44890_47567 = state_44867__$1;
(statearr_44890_47567[(2)] = inst_44855);

(statearr_44890_47567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (9))){
var state_44867__$1 = state_44867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44891_47568 = state_44867__$1;
(statearr_44891_47568[(1)] = (11));

} else {
var statearr_44892_47569 = state_44867__$1;
(statearr_44892_47569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (5))){
var inst_44841 = (state_44867[(7)]);
var state_44867__$1 = state_44867;
var statearr_44893_47570 = state_44867__$1;
(statearr_44893_47570[(2)] = inst_44841);

(statearr_44893_47570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (10))){
var inst_44860 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44895_47571 = state_44867__$1;
(statearr_44895_47571[(2)] = inst_44860);

(statearr_44895_47571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (8))){
var inst_44841 = (state_44867[(7)]);
var inst_44851 = cljs.core.next(inst_44841);
var inst_44841__$1 = inst_44851;
var state_44867__$1 = (function (){var statearr_44898 = state_44867;
(statearr_44898[(7)] = inst_44841__$1);

return statearr_44898;
})();
var statearr_44899_47572 = state_44867__$1;
(statearr_44899_47572[(2)] = null);

(statearr_44899_47572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_44901 = [null,null,null,null,null,null,null,null];
(statearr_44901[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_44901[(1)] = (1));

return statearr_44901;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_44867){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_44867);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e44902){var ex__44046__auto__ = e44902;
var statearr_44903_47573 = state_44867;
(statearr_44903_47573[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_44867[(4)]))){
var statearr_44904_47574 = state_44867;
(statearr_44904_47574[(1)] = cljs.core.first((state_44867[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47575 = state_44867;
state_44867 = G__47575;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_44867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_44867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_44905 = f__44163__auto__();
(statearr_44905[(6)] = c__44162__auto__);

return statearr_44905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

return c__44162__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44907 = arguments.length;
switch (G__44907) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47577 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47577(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47587 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47587(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47591 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47591(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47593 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47593(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44956 = (function (ch,cs,meta44957){
this.ch = ch;
this.cs = cs;
this.meta44957 = meta44957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44958,meta44957__$1){
var self__ = this;
var _44958__$1 = this;
return (new cljs.core.async.t_cljs$core$async44956(self__.ch,self__.cs,meta44957__$1));
}));

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44958){
var self__ = this;
var _44958__$1 = this;
return self__.meta44957;
}));

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44956.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44957","meta44957",1527109819,null)], null);
}));

(cljs.core.async.t_cljs$core$async44956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44956");

(cljs.core.async.t_cljs$core$async44956.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44956.
 */
cljs.core.async.__GT_t_cljs$core$async44956 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44956(ch__$1,cs__$1,meta44957){
return (new cljs.core.async.t_cljs$core$async44956(ch__$1,cs__$1,meta44957));
});

}

return (new cljs.core.async.t_cljs$core$async44956(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44162__auto___47602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_45187){
var state_val_45188 = (state_45187[(1)]);
if((state_val_45188 === (7))){
var inst_45183 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45198_47603 = state_45187__$1;
(statearr_45198_47603[(2)] = inst_45183);

(statearr_45198_47603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (20))){
var inst_45070 = (state_45187[(7)]);
var inst_45082 = cljs.core.first(inst_45070);
var inst_45083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45082,(0),null);
var inst_45084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45082,(1),null);
var state_45187__$1 = (function (){var statearr_45205 = state_45187;
(statearr_45205[(8)] = inst_45083);

return statearr_45205;
})();
if(cljs.core.truth_(inst_45084)){
var statearr_45206_47605 = state_45187__$1;
(statearr_45206_47605[(1)] = (22));

} else {
var statearr_45207_47612 = state_45187__$1;
(statearr_45207_47612[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (27))){
var inst_45115 = (state_45187[(9)]);
var inst_45117 = (state_45187[(10)]);
var inst_45025 = (state_45187[(11)]);
var inst_45122 = (state_45187[(12)]);
var inst_45122__$1 = cljs.core._nth(inst_45115,inst_45117);
var inst_45123 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45122__$1,inst_45025,done);
var state_45187__$1 = (function (){var statearr_45208 = state_45187;
(statearr_45208[(12)] = inst_45122__$1);

return statearr_45208;
})();
if(cljs.core.truth_(inst_45123)){
var statearr_45209_47613 = state_45187__$1;
(statearr_45209_47613[(1)] = (30));

} else {
var statearr_45210_47614 = state_45187__$1;
(statearr_45210_47614[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (1))){
var state_45187__$1 = state_45187;
var statearr_45211_47615 = state_45187__$1;
(statearr_45211_47615[(2)] = null);

(statearr_45211_47615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (24))){
var inst_45070 = (state_45187[(7)]);
var inst_45089 = (state_45187[(2)]);
var inst_45090 = cljs.core.next(inst_45070);
var inst_45037 = inst_45090;
var inst_45038 = null;
var inst_45039 = (0);
var inst_45040 = (0);
var state_45187__$1 = (function (){var statearr_45212 = state_45187;
(statearr_45212[(13)] = inst_45037);

(statearr_45212[(14)] = inst_45040);

(statearr_45212[(15)] = inst_45089);

(statearr_45212[(16)] = inst_45039);

(statearr_45212[(17)] = inst_45038);

return statearr_45212;
})();
var statearr_45214_47616 = state_45187__$1;
(statearr_45214_47616[(2)] = null);

(statearr_45214_47616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (39))){
var state_45187__$1 = state_45187;
var statearr_45219_47617 = state_45187__$1;
(statearr_45219_47617[(2)] = null);

(statearr_45219_47617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (4))){
var inst_45025 = (state_45187[(11)]);
var inst_45025__$1 = (state_45187[(2)]);
var inst_45026 = (inst_45025__$1 == null);
var state_45187__$1 = (function (){var statearr_45220 = state_45187;
(statearr_45220[(11)] = inst_45025__$1);

return statearr_45220;
})();
if(cljs.core.truth_(inst_45026)){
var statearr_45221_47618 = state_45187__$1;
(statearr_45221_47618[(1)] = (5));

} else {
var statearr_45222_47619 = state_45187__$1;
(statearr_45222_47619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (15))){
var inst_45037 = (state_45187[(13)]);
var inst_45040 = (state_45187[(14)]);
var inst_45039 = (state_45187[(16)]);
var inst_45038 = (state_45187[(17)]);
var inst_45066 = (state_45187[(2)]);
var inst_45067 = (inst_45040 + (1));
var tmp45215 = inst_45037;
var tmp45216 = inst_45039;
var tmp45217 = inst_45038;
var inst_45037__$1 = tmp45215;
var inst_45038__$1 = tmp45217;
var inst_45039__$1 = tmp45216;
var inst_45040__$1 = inst_45067;
var state_45187__$1 = (function (){var statearr_45228 = state_45187;
(statearr_45228[(13)] = inst_45037__$1);

(statearr_45228[(14)] = inst_45040__$1);

(statearr_45228[(16)] = inst_45039__$1);

(statearr_45228[(17)] = inst_45038__$1);

(statearr_45228[(18)] = inst_45066);

return statearr_45228;
})();
var statearr_45234_47620 = state_45187__$1;
(statearr_45234_47620[(2)] = null);

(statearr_45234_47620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (21))){
var inst_45093 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45245_47622 = state_45187__$1;
(statearr_45245_47622[(2)] = inst_45093);

(statearr_45245_47622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (31))){
var inst_45122 = (state_45187[(12)]);
var inst_45126 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45122);
var state_45187__$1 = state_45187;
var statearr_45252_47623 = state_45187__$1;
(statearr_45252_47623[(2)] = inst_45126);

(statearr_45252_47623[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (32))){
var inst_45115 = (state_45187[(9)]);
var inst_45117 = (state_45187[(10)]);
var inst_45116 = (state_45187[(19)]);
var inst_45114 = (state_45187[(20)]);
var inst_45128 = (state_45187[(2)]);
var inst_45129 = (inst_45117 + (1));
var tmp45237 = inst_45115;
var tmp45238 = inst_45116;
var tmp45239 = inst_45114;
var inst_45114__$1 = tmp45239;
var inst_45115__$1 = tmp45237;
var inst_45116__$1 = tmp45238;
var inst_45117__$1 = inst_45129;
var state_45187__$1 = (function (){var statearr_45253 = state_45187;
(statearr_45253[(9)] = inst_45115__$1);

(statearr_45253[(10)] = inst_45117__$1);

(statearr_45253[(19)] = inst_45116__$1);

(statearr_45253[(20)] = inst_45114__$1);

(statearr_45253[(21)] = inst_45128);

return statearr_45253;
})();
var statearr_45254_47627 = state_45187__$1;
(statearr_45254_47627[(2)] = null);

(statearr_45254_47627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (40))){
var inst_45152 = (state_45187[(22)]);
var inst_45156 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45152);
var state_45187__$1 = state_45187;
var statearr_45255_47628 = state_45187__$1;
(statearr_45255_47628[(2)] = inst_45156);

(statearr_45255_47628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (33))){
var inst_45136 = (state_45187[(23)]);
var inst_45141 = cljs.core.chunked_seq_QMARK_(inst_45136);
var state_45187__$1 = state_45187;
if(inst_45141){
var statearr_45256_47637 = state_45187__$1;
(statearr_45256_47637[(1)] = (36));

} else {
var statearr_45257_47638 = state_45187__$1;
(statearr_45257_47638[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (13))){
var inst_45058 = (state_45187[(24)]);
var inst_45063 = cljs.core.async.close_BANG_(inst_45058);
var state_45187__$1 = state_45187;
var statearr_45258_47654 = state_45187__$1;
(statearr_45258_47654[(2)] = inst_45063);

(statearr_45258_47654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (22))){
var inst_45083 = (state_45187[(8)]);
var inst_45086 = cljs.core.async.close_BANG_(inst_45083);
var state_45187__$1 = state_45187;
var statearr_45260_47657 = state_45187__$1;
(statearr_45260_47657[(2)] = inst_45086);

(statearr_45260_47657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (36))){
var inst_45136 = (state_45187[(23)]);
var inst_45143 = cljs.core.chunk_first(inst_45136);
var inst_45144 = cljs.core.chunk_rest(inst_45136);
var inst_45145 = cljs.core.count(inst_45143);
var inst_45114 = inst_45144;
var inst_45115 = inst_45143;
var inst_45116 = inst_45145;
var inst_45117 = (0);
var state_45187__$1 = (function (){var statearr_45261 = state_45187;
(statearr_45261[(9)] = inst_45115);

(statearr_45261[(10)] = inst_45117);

(statearr_45261[(19)] = inst_45116);

(statearr_45261[(20)] = inst_45114);

return statearr_45261;
})();
var statearr_45262_47658 = state_45187__$1;
(statearr_45262_47658[(2)] = null);

(statearr_45262_47658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (41))){
var inst_45136 = (state_45187[(23)]);
var inst_45162 = (state_45187[(2)]);
var inst_45163 = cljs.core.next(inst_45136);
var inst_45114 = inst_45163;
var inst_45115 = null;
var inst_45116 = (0);
var inst_45117 = (0);
var state_45187__$1 = (function (){var statearr_45268 = state_45187;
(statearr_45268[(9)] = inst_45115);

(statearr_45268[(25)] = inst_45162);

(statearr_45268[(10)] = inst_45117);

(statearr_45268[(19)] = inst_45116);

(statearr_45268[(20)] = inst_45114);

return statearr_45268;
})();
var statearr_45269_47659 = state_45187__$1;
(statearr_45269_47659[(2)] = null);

(statearr_45269_47659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (43))){
var state_45187__$1 = state_45187;
var statearr_45270_47660 = state_45187__$1;
(statearr_45270_47660[(2)] = null);

(statearr_45270_47660[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (29))){
var inst_45171 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45272_47662 = state_45187__$1;
(statearr_45272_47662[(2)] = inst_45171);

(statearr_45272_47662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (44))){
var inst_45180 = (state_45187[(2)]);
var state_45187__$1 = (function (){var statearr_45278 = state_45187;
(statearr_45278[(26)] = inst_45180);

return statearr_45278;
})();
var statearr_45279_47666 = state_45187__$1;
(statearr_45279_47666[(2)] = null);

(statearr_45279_47666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (6))){
var inst_45106 = (state_45187[(27)]);
var inst_45105 = cljs.core.deref(cs);
var inst_45106__$1 = cljs.core.keys(inst_45105);
var inst_45107 = cljs.core.count(inst_45106__$1);
var inst_45108 = cljs.core.reset_BANG_(dctr,inst_45107);
var inst_45113 = cljs.core.seq(inst_45106__$1);
var inst_45114 = inst_45113;
var inst_45115 = null;
var inst_45116 = (0);
var inst_45117 = (0);
var state_45187__$1 = (function (){var statearr_45281 = state_45187;
(statearr_45281[(9)] = inst_45115);

(statearr_45281[(27)] = inst_45106__$1);

(statearr_45281[(10)] = inst_45117);

(statearr_45281[(19)] = inst_45116);

(statearr_45281[(28)] = inst_45108);

(statearr_45281[(20)] = inst_45114);

return statearr_45281;
})();
var statearr_45283_47695 = state_45187__$1;
(statearr_45283_47695[(2)] = null);

(statearr_45283_47695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (28))){
var inst_45114 = (state_45187[(20)]);
var inst_45136 = (state_45187[(23)]);
var inst_45136__$1 = cljs.core.seq(inst_45114);
var state_45187__$1 = (function (){var statearr_45284 = state_45187;
(statearr_45284[(23)] = inst_45136__$1);

return statearr_45284;
})();
if(inst_45136__$1){
var statearr_45285_47698 = state_45187__$1;
(statearr_45285_47698[(1)] = (33));

} else {
var statearr_45286_47703 = state_45187__$1;
(statearr_45286_47703[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (25))){
var inst_45117 = (state_45187[(10)]);
var inst_45116 = (state_45187[(19)]);
var inst_45119 = (inst_45117 < inst_45116);
var inst_45120 = inst_45119;
var state_45187__$1 = state_45187;
if(cljs.core.truth_(inst_45120)){
var statearr_45287_47709 = state_45187__$1;
(statearr_45287_47709[(1)] = (27));

} else {
var statearr_45288_47710 = state_45187__$1;
(statearr_45288_47710[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (34))){
var state_45187__$1 = state_45187;
var statearr_45289_47711 = state_45187__$1;
(statearr_45289_47711[(2)] = null);

(statearr_45289_47711[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (17))){
var state_45187__$1 = state_45187;
var statearr_45290_47714 = state_45187__$1;
(statearr_45290_47714[(2)] = null);

(statearr_45290_47714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (3))){
var inst_45185 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45187__$1,inst_45185);
} else {
if((state_val_45188 === (12))){
var inst_45098 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45295_47717 = state_45187__$1;
(statearr_45295_47717[(2)] = inst_45098);

(statearr_45295_47717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (2))){
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45187__$1,(4),ch);
} else {
if((state_val_45188 === (23))){
var state_45187__$1 = state_45187;
var statearr_45302_47718 = state_45187__$1;
(statearr_45302_47718[(2)] = null);

(statearr_45302_47718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (35))){
var inst_45169 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45309_47719 = state_45187__$1;
(statearr_45309_47719[(2)] = inst_45169);

(statearr_45309_47719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (19))){
var inst_45070 = (state_45187[(7)]);
var inst_45074 = cljs.core.chunk_first(inst_45070);
var inst_45075 = cljs.core.chunk_rest(inst_45070);
var inst_45076 = cljs.core.count(inst_45074);
var inst_45037 = inst_45075;
var inst_45038 = inst_45074;
var inst_45039 = inst_45076;
var inst_45040 = (0);
var state_45187__$1 = (function (){var statearr_45315 = state_45187;
(statearr_45315[(13)] = inst_45037);

(statearr_45315[(14)] = inst_45040);

(statearr_45315[(16)] = inst_45039);

(statearr_45315[(17)] = inst_45038);

return statearr_45315;
})();
var statearr_45316_47724 = state_45187__$1;
(statearr_45316_47724[(2)] = null);

(statearr_45316_47724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (11))){
var inst_45037 = (state_45187[(13)]);
var inst_45070 = (state_45187[(7)]);
var inst_45070__$1 = cljs.core.seq(inst_45037);
var state_45187__$1 = (function (){var statearr_45317 = state_45187;
(statearr_45317[(7)] = inst_45070__$1);

return statearr_45317;
})();
if(inst_45070__$1){
var statearr_45318_47726 = state_45187__$1;
(statearr_45318_47726[(1)] = (16));

} else {
var statearr_45319_47727 = state_45187__$1;
(statearr_45319_47727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (9))){
var inst_45100 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45320_47728 = state_45187__$1;
(statearr_45320_47728[(2)] = inst_45100);

(statearr_45320_47728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (5))){
var inst_45035 = cljs.core.deref(cs);
var inst_45036 = cljs.core.seq(inst_45035);
var inst_45037 = inst_45036;
var inst_45038 = null;
var inst_45039 = (0);
var inst_45040 = (0);
var state_45187__$1 = (function (){var statearr_45321 = state_45187;
(statearr_45321[(13)] = inst_45037);

(statearr_45321[(14)] = inst_45040);

(statearr_45321[(16)] = inst_45039);

(statearr_45321[(17)] = inst_45038);

return statearr_45321;
})();
var statearr_45326_47729 = state_45187__$1;
(statearr_45326_47729[(2)] = null);

(statearr_45326_47729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (14))){
var state_45187__$1 = state_45187;
var statearr_45330_47730 = state_45187__$1;
(statearr_45330_47730[(2)] = null);

(statearr_45330_47730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (45))){
var inst_45177 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45360_47731 = state_45187__$1;
(statearr_45360_47731[(2)] = inst_45177);

(statearr_45360_47731[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (26))){
var inst_45106 = (state_45187[(27)]);
var inst_45173 = (state_45187[(2)]);
var inst_45174 = cljs.core.seq(inst_45106);
var state_45187__$1 = (function (){var statearr_45361 = state_45187;
(statearr_45361[(29)] = inst_45173);

return statearr_45361;
})();
if(inst_45174){
var statearr_45362_47747 = state_45187__$1;
(statearr_45362_47747[(1)] = (42));

} else {
var statearr_45363_47748 = state_45187__$1;
(statearr_45363_47748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (16))){
var inst_45070 = (state_45187[(7)]);
var inst_45072 = cljs.core.chunked_seq_QMARK_(inst_45070);
var state_45187__$1 = state_45187;
if(inst_45072){
var statearr_45368_47749 = state_45187__$1;
(statearr_45368_47749[(1)] = (19));

} else {
var statearr_45369_47750 = state_45187__$1;
(statearr_45369_47750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (38))){
var inst_45166 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45370_47751 = state_45187__$1;
(statearr_45370_47751[(2)] = inst_45166);

(statearr_45370_47751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (30))){
var state_45187__$1 = state_45187;
var statearr_45378_47752 = state_45187__$1;
(statearr_45378_47752[(2)] = null);

(statearr_45378_47752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (10))){
var inst_45040 = (state_45187[(14)]);
var inst_45038 = (state_45187[(17)]);
var inst_45049 = cljs.core._nth(inst_45038,inst_45040);
var inst_45058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45049,(0),null);
var inst_45060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45049,(1),null);
var state_45187__$1 = (function (){var statearr_45384 = state_45187;
(statearr_45384[(24)] = inst_45058);

return statearr_45384;
})();
if(cljs.core.truth_(inst_45060)){
var statearr_45385_47756 = state_45187__$1;
(statearr_45385_47756[(1)] = (13));

} else {
var statearr_45386_47757 = state_45187__$1;
(statearr_45386_47757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (18))){
var inst_45096 = (state_45187[(2)]);
var state_45187__$1 = state_45187;
var statearr_45387_47758 = state_45187__$1;
(statearr_45387_47758[(2)] = inst_45096);

(statearr_45387_47758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (42))){
var state_45187__$1 = state_45187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45187__$1,(45),dchan);
} else {
if((state_val_45188 === (37))){
var inst_45152 = (state_45187[(22)]);
var inst_45025 = (state_45187[(11)]);
var inst_45136 = (state_45187[(23)]);
var inst_45152__$1 = cljs.core.first(inst_45136);
var inst_45153 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45152__$1,inst_45025,done);
var state_45187__$1 = (function (){var statearr_45388 = state_45187;
(statearr_45388[(22)] = inst_45152__$1);

return statearr_45388;
})();
if(cljs.core.truth_(inst_45153)){
var statearr_45389_47759 = state_45187__$1;
(statearr_45389_47759[(1)] = (39));

} else {
var statearr_45390_47760 = state_45187__$1;
(statearr_45390_47760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45188 === (8))){
var inst_45040 = (state_45187[(14)]);
var inst_45039 = (state_45187[(16)]);
var inst_45042 = (inst_45040 < inst_45039);
var inst_45043 = inst_45042;
var state_45187__$1 = state_45187;
if(cljs.core.truth_(inst_45043)){
var statearr_45391_47761 = state_45187__$1;
(statearr_45391_47761[(1)] = (10));

} else {
var statearr_45392_47762 = state_45187__$1;
(statearr_45392_47762[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44043__auto__ = null;
var cljs$core$async$mult_$_state_machine__44043__auto____0 = (function (){
var statearr_45393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45393[(0)] = cljs$core$async$mult_$_state_machine__44043__auto__);

(statearr_45393[(1)] = (1));

return statearr_45393;
});
var cljs$core$async$mult_$_state_machine__44043__auto____1 = (function (state_45187){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_45187);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e45394){var ex__44046__auto__ = e45394;
var statearr_45395_47764 = state_45187;
(statearr_45395_47764[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_45187[(4)]))){
var statearr_45396_47765 = state_45187;
(statearr_45396_47765[(1)] = cljs.core.first((state_45187[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47766 = state_45187;
state_45187 = G__47766;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44043__auto__ = function(state_45187){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44043__auto____1.call(this,state_45187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44043__auto____0;
cljs$core$async$mult_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44043__auto____1;
return cljs$core$async$mult_$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_45421 = f__44163__auto__();
(statearr_45421[(6)] = c__44162__auto___47602);

return statearr_45421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45424 = arguments.length;
switch (G__45424) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47775 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47775(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47776 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47776(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47778 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47778(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47779 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47779(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47781 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47781(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47784 = arguments.length;
var i__4737__auto___47785 = (0);
while(true){
if((i__4737__auto___47785 < len__4736__auto___47784)){
args__4742__auto__.push((arguments[i__4737__auto___47785]));

var G__47786 = (i__4737__auto___47785 + (1));
i__4737__auto___47785 = G__47786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45453){
var map__45454 = p__45453;
var map__45454__$1 = (((((!((map__45454 == null))))?(((((map__45454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45454):map__45454);
var opts = map__45454__$1;
var statearr_45456_47787 = state;
(statearr_45456_47787[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45457_47788 = state;
(statearr_45457_47788[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45459_47790 = state;
(statearr_45459_47790[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45449){
var G__45450 = cljs.core.first(seq45449);
var seq45449__$1 = cljs.core.next(seq45449);
var G__45451 = cljs.core.first(seq45449__$1);
var seq45449__$2 = cljs.core.next(seq45449__$1);
var G__45452 = cljs.core.first(seq45449__$2);
var seq45449__$3 = cljs.core.next(seq45449__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45450,G__45451,G__45452,seq45449__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45465 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45466){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45466 = meta45466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45467,meta45466__$1){
var self__ = this;
var _45467__$1 = this;
return (new cljs.core.async.t_cljs$core$async45465(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45466__$1));
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45467){
var self__ = this;
var _45467__$1 = this;
return self__.meta45466;
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45466","meta45466",322973122,null)], null);
}));

(cljs.core.async.t_cljs$core$async45465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45465");

(cljs.core.async.t_cljs$core$async45465.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45465.
 */
cljs.core.async.__GT_t_cljs$core$async45465 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45466){
return (new cljs.core.async.t_cljs$core$async45465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45466));
});

}

return (new cljs.core.async.t_cljs$core$async45465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44162__auto___47829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_45593){
var state_val_45594 = (state_45593[(1)]);
if((state_val_45594 === (7))){
var inst_45508 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
var statearr_45597_47842 = state_45593__$1;
(statearr_45597_47842[(2)] = inst_45508);

(statearr_45597_47842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (20))){
var inst_45520 = (state_45593[(7)]);
var state_45593__$1 = state_45593;
var statearr_45601_47846 = state_45593__$1;
(statearr_45601_47846[(2)] = inst_45520);

(statearr_45601_47846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (27))){
var state_45593__$1 = state_45593;
var statearr_45603_47847 = state_45593__$1;
(statearr_45603_47847[(2)] = null);

(statearr_45603_47847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (1))){
var inst_45495 = (state_45593[(8)]);
var inst_45495__$1 = calc_state();
var inst_45497 = (inst_45495__$1 == null);
var inst_45498 = cljs.core.not(inst_45497);
var state_45593__$1 = (function (){var statearr_45604 = state_45593;
(statearr_45604[(8)] = inst_45495__$1);

return statearr_45604;
})();
if(inst_45498){
var statearr_45626_47849 = state_45593__$1;
(statearr_45626_47849[(1)] = (2));

} else {
var statearr_45629_47850 = state_45593__$1;
(statearr_45629_47850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (24))){
var inst_45553 = (state_45593[(9)]);
var inst_45544 = (state_45593[(10)]);
var inst_45567 = (state_45593[(11)]);
var inst_45567__$1 = (inst_45544.cljs$core$IFn$_invoke$arity$1 ? inst_45544.cljs$core$IFn$_invoke$arity$1(inst_45553) : inst_45544.call(null,inst_45553));
var state_45593__$1 = (function (){var statearr_45630 = state_45593;
(statearr_45630[(11)] = inst_45567__$1);

return statearr_45630;
})();
if(cljs.core.truth_(inst_45567__$1)){
var statearr_45631_47851 = state_45593__$1;
(statearr_45631_47851[(1)] = (29));

} else {
var statearr_45632_47852 = state_45593__$1;
(statearr_45632_47852[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (4))){
var inst_45511 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45511)){
var statearr_45633_47853 = state_45593__$1;
(statearr_45633_47853[(1)] = (8));

} else {
var statearr_45634_47855 = state_45593__$1;
(statearr_45634_47855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (15))){
var inst_45538 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45538)){
var statearr_45635_47856 = state_45593__$1;
(statearr_45635_47856[(1)] = (19));

} else {
var statearr_45636_47857 = state_45593__$1;
(statearr_45636_47857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (21))){
var inst_45543 = (state_45593[(12)]);
var inst_45543__$1 = (state_45593[(2)]);
var inst_45544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45593__$1 = (function (){var statearr_45638 = state_45593;
(statearr_45638[(13)] = inst_45545);

(statearr_45638[(12)] = inst_45543__$1);

(statearr_45638[(10)] = inst_45544);

return statearr_45638;
})();
return cljs.core.async.ioc_alts_BANG_(state_45593__$1,(22),inst_45546);
} else {
if((state_val_45594 === (31))){
var inst_45575 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45575)){
var statearr_45639_47858 = state_45593__$1;
(statearr_45639_47858[(1)] = (32));

} else {
var statearr_45640_47859 = state_45593__$1;
(statearr_45640_47859[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (32))){
var inst_45552 = (state_45593[(14)]);
var state_45593__$1 = state_45593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45593__$1,(35),out,inst_45552);
} else {
if((state_val_45594 === (33))){
var inst_45543 = (state_45593[(12)]);
var inst_45520 = inst_45543;
var state_45593__$1 = (function (){var statearr_45641 = state_45593;
(statearr_45641[(7)] = inst_45520);

return statearr_45641;
})();
var statearr_45642_47861 = state_45593__$1;
(statearr_45642_47861[(2)] = null);

(statearr_45642_47861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (13))){
var inst_45520 = (state_45593[(7)]);
var inst_45527 = inst_45520.cljs$lang$protocol_mask$partition0$;
var inst_45528 = (inst_45527 & (64));
var inst_45529 = inst_45520.cljs$core$ISeq$;
var inst_45530 = (cljs.core.PROTOCOL_SENTINEL === inst_45529);
var inst_45531 = ((inst_45528) || (inst_45530));
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45531)){
var statearr_45643_47862 = state_45593__$1;
(statearr_45643_47862[(1)] = (16));

} else {
var statearr_45644_47863 = state_45593__$1;
(statearr_45644_47863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (22))){
var inst_45553 = (state_45593[(9)]);
var inst_45552 = (state_45593[(14)]);
var inst_45551 = (state_45593[(2)]);
var inst_45552__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45551,(0),null);
var inst_45553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45551,(1),null);
var inst_45554 = (inst_45552__$1 == null);
var inst_45555 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45553__$1,change);
var inst_45556 = ((inst_45554) || (inst_45555));
var state_45593__$1 = (function (){var statearr_45645 = state_45593;
(statearr_45645[(9)] = inst_45553__$1);

(statearr_45645[(14)] = inst_45552__$1);

return statearr_45645;
})();
if(cljs.core.truth_(inst_45556)){
var statearr_45646_47865 = state_45593__$1;
(statearr_45646_47865[(1)] = (23));

} else {
var statearr_45647_47866 = state_45593__$1;
(statearr_45647_47866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (36))){
var inst_45543 = (state_45593[(12)]);
var inst_45520 = inst_45543;
var state_45593__$1 = (function (){var statearr_45648 = state_45593;
(statearr_45648[(7)] = inst_45520);

return statearr_45648;
})();
var statearr_45649_47868 = state_45593__$1;
(statearr_45649_47868[(2)] = null);

(statearr_45649_47868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (29))){
var inst_45567 = (state_45593[(11)]);
var state_45593__$1 = state_45593;
var statearr_45650_47884 = state_45593__$1;
(statearr_45650_47884[(2)] = inst_45567);

(statearr_45650_47884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (6))){
var state_45593__$1 = state_45593;
var statearr_45651_47898 = state_45593__$1;
(statearr_45651_47898[(2)] = false);

(statearr_45651_47898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (28))){
var inst_45563 = (state_45593[(2)]);
var inst_45564 = calc_state();
var inst_45520 = inst_45564;
var state_45593__$1 = (function (){var statearr_45652 = state_45593;
(statearr_45652[(15)] = inst_45563);

(statearr_45652[(7)] = inst_45520);

return statearr_45652;
})();
var statearr_45653_47902 = state_45593__$1;
(statearr_45653_47902[(2)] = null);

(statearr_45653_47902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (25))){
var inst_45589 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
var statearr_45654_47903 = state_45593__$1;
(statearr_45654_47903[(2)] = inst_45589);

(statearr_45654_47903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (34))){
var inst_45587 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
var statearr_45655_47904 = state_45593__$1;
(statearr_45655_47904[(2)] = inst_45587);

(statearr_45655_47904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (17))){
var state_45593__$1 = state_45593;
var statearr_45656_47906 = state_45593__$1;
(statearr_45656_47906[(2)] = false);

(statearr_45656_47906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (3))){
var state_45593__$1 = state_45593;
var statearr_45657_47908 = state_45593__$1;
(statearr_45657_47908[(2)] = false);

(statearr_45657_47908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (12))){
var inst_45591 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45593__$1,inst_45591);
} else {
if((state_val_45594 === (2))){
var inst_45495 = (state_45593[(8)]);
var inst_45500 = inst_45495.cljs$lang$protocol_mask$partition0$;
var inst_45501 = (inst_45500 & (64));
var inst_45502 = inst_45495.cljs$core$ISeq$;
var inst_45503 = (cljs.core.PROTOCOL_SENTINEL === inst_45502);
var inst_45504 = ((inst_45501) || (inst_45503));
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45504)){
var statearr_45658_47916 = state_45593__$1;
(statearr_45658_47916[(1)] = (5));

} else {
var statearr_45659_47917 = state_45593__$1;
(statearr_45659_47917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (23))){
var inst_45552 = (state_45593[(14)]);
var inst_45558 = (inst_45552 == null);
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45558)){
var statearr_45660_47918 = state_45593__$1;
(statearr_45660_47918[(1)] = (26));

} else {
var statearr_45661_47919 = state_45593__$1;
(statearr_45661_47919[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (35))){
var inst_45578 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
if(cljs.core.truth_(inst_45578)){
var statearr_45662_47920 = state_45593__$1;
(statearr_45662_47920[(1)] = (36));

} else {
var statearr_45663_47921 = state_45593__$1;
(statearr_45663_47921[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (19))){
var inst_45520 = (state_45593[(7)]);
var inst_45540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45520);
var state_45593__$1 = state_45593;
var statearr_45664_47922 = state_45593__$1;
(statearr_45664_47922[(2)] = inst_45540);

(statearr_45664_47922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (11))){
var inst_45520 = (state_45593[(7)]);
var inst_45524 = (inst_45520 == null);
var inst_45525 = cljs.core.not(inst_45524);
var state_45593__$1 = state_45593;
if(inst_45525){
var statearr_45665_47924 = state_45593__$1;
(statearr_45665_47924[(1)] = (13));

} else {
var statearr_45666_47925 = state_45593__$1;
(statearr_45666_47925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (9))){
var inst_45495 = (state_45593[(8)]);
var state_45593__$1 = state_45593;
var statearr_45667_47926 = state_45593__$1;
(statearr_45667_47926[(2)] = inst_45495);

(statearr_45667_47926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (5))){
var state_45593__$1 = state_45593;
var statearr_45668_47927 = state_45593__$1;
(statearr_45668_47927[(2)] = true);

(statearr_45668_47927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (14))){
var state_45593__$1 = state_45593;
var statearr_45669_47933 = state_45593__$1;
(statearr_45669_47933[(2)] = false);

(statearr_45669_47933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (26))){
var inst_45553 = (state_45593[(9)]);
var inst_45560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45553);
var state_45593__$1 = state_45593;
var statearr_45670_47934 = state_45593__$1;
(statearr_45670_47934[(2)] = inst_45560);

(statearr_45670_47934[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (16))){
var state_45593__$1 = state_45593;
var statearr_45671_47935 = state_45593__$1;
(statearr_45671_47935[(2)] = true);

(statearr_45671_47935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (38))){
var inst_45583 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
var statearr_45672_47936 = state_45593__$1;
(statearr_45672_47936[(2)] = inst_45583);

(statearr_45672_47936[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (30))){
var inst_45545 = (state_45593[(13)]);
var inst_45553 = (state_45593[(9)]);
var inst_45544 = (state_45593[(10)]);
var inst_45570 = cljs.core.empty_QMARK_(inst_45544);
var inst_45571 = (inst_45545.cljs$core$IFn$_invoke$arity$1 ? inst_45545.cljs$core$IFn$_invoke$arity$1(inst_45553) : inst_45545.call(null,inst_45553));
var inst_45572 = cljs.core.not(inst_45571);
var inst_45573 = ((inst_45570) && (inst_45572));
var state_45593__$1 = state_45593;
var statearr_45673_47955 = state_45593__$1;
(statearr_45673_47955[(2)] = inst_45573);

(statearr_45673_47955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (10))){
var inst_45495 = (state_45593[(8)]);
var inst_45516 = (state_45593[(2)]);
var inst_45517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45516,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45516,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45516,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45520 = inst_45495;
var state_45593__$1 = (function (){var statearr_45674 = state_45593;
(statearr_45674[(16)] = inst_45518);

(statearr_45674[(17)] = inst_45519);

(statearr_45674[(18)] = inst_45517);

(statearr_45674[(7)] = inst_45520);

return statearr_45674;
})();
var statearr_45675_47956 = state_45593__$1;
(statearr_45675_47956[(2)] = null);

(statearr_45675_47956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (18))){
var inst_45535 = (state_45593[(2)]);
var state_45593__$1 = state_45593;
var statearr_45676_47957 = state_45593__$1;
(statearr_45676_47957[(2)] = inst_45535);

(statearr_45676_47957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (37))){
var state_45593__$1 = state_45593;
var statearr_45677_47961 = state_45593__$1;
(statearr_45677_47961[(2)] = null);

(statearr_45677_47961[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45594 === (8))){
var inst_45495 = (state_45593[(8)]);
var inst_45513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45495);
var state_45593__$1 = state_45593;
var statearr_45678_47963 = state_45593__$1;
(statearr_45678_47963[(2)] = inst_45513);

(statearr_45678_47963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44043__auto__ = null;
var cljs$core$async$mix_$_state_machine__44043__auto____0 = (function (){
var statearr_45679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45679[(0)] = cljs$core$async$mix_$_state_machine__44043__auto__);

(statearr_45679[(1)] = (1));

return statearr_45679;
});
var cljs$core$async$mix_$_state_machine__44043__auto____1 = (function (state_45593){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_45593);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e45680){var ex__44046__auto__ = e45680;
var statearr_45681_47966 = state_45593;
(statearr_45681_47966[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_45593[(4)]))){
var statearr_45682_47967 = state_45593;
(statearr_45682_47967[(1)] = cljs.core.first((state_45593[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47968 = state_45593;
state_45593 = G__47968;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44043__auto__ = function(state_45593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44043__auto____1.call(this,state_45593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44043__auto____0;
cljs$core$async$mix_$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44043__auto____1;
return cljs$core$async$mix_$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_45683 = f__44163__auto__();
(statearr_45683[(6)] = c__44162__auto___47829);

return statearr_45683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47974 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47974(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47984 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47984(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47989 = (function() {
var G__48045 = null;
var G__48045__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48045__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48045 = function(p,v){
switch(arguments.length){
case 1:
return G__48045__1.call(this,p);
case 2:
return G__48045__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48045.cljs$core$IFn$_invoke$arity$1 = G__48045__1;
G__48045.cljs$core$IFn$_invoke$arity$2 = G__48045__2;
return G__48045;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45766 = arguments.length;
switch (G__45766) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47989(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47989(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45777 = arguments.length;
switch (G__45777) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45774_SHARP_){
if(cljs.core.truth_((p1__45774_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45774_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45774_SHARP_.call(null,topic)))){
return p1__45774_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45774_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45778 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45779){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45779 = meta45779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45780,meta45779__$1){
var self__ = this;
var _45780__$1 = this;
return (new cljs.core.async.t_cljs$core$async45778(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45779__$1));
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45780){
var self__ = this;
var _45780__$1 = this;
return self__.meta45779;
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45778.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45779","meta45779",523681012,null)], null);
}));

(cljs.core.async.t_cljs$core$async45778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45778");

(cljs.core.async.t_cljs$core$async45778.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45778.
 */
cljs.core.async.__GT_t_cljs$core$async45778 = (function cljs$core$async$__GT_t_cljs$core$async45778(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45779){
return (new cljs.core.async.t_cljs$core$async45778(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45779));
});

}

return (new cljs.core.async.t_cljs$core$async45778(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44162__auto___48053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_45863){
var state_val_45864 = (state_45863[(1)]);
if((state_val_45864 === (7))){
var inst_45859 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45865_48054 = state_45863__$1;
(statearr_45865_48054[(2)] = inst_45859);

(statearr_45865_48054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (20))){
var state_45863__$1 = state_45863;
var statearr_45866_48055 = state_45863__$1;
(statearr_45866_48055[(2)] = null);

(statearr_45866_48055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (1))){
var state_45863__$1 = state_45863;
var statearr_45867_48056 = state_45863__$1;
(statearr_45867_48056[(2)] = null);

(statearr_45867_48056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (24))){
var inst_45842 = (state_45863[(7)]);
var inst_45851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45842);
var state_45863__$1 = state_45863;
var statearr_45868_48057 = state_45863__$1;
(statearr_45868_48057[(2)] = inst_45851);

(statearr_45868_48057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (4))){
var inst_45794 = (state_45863[(8)]);
var inst_45794__$1 = (state_45863[(2)]);
var inst_45795 = (inst_45794__$1 == null);
var state_45863__$1 = (function (){var statearr_45869 = state_45863;
(statearr_45869[(8)] = inst_45794__$1);

return statearr_45869;
})();
if(cljs.core.truth_(inst_45795)){
var statearr_45870_48058 = state_45863__$1;
(statearr_45870_48058[(1)] = (5));

} else {
var statearr_45871_48059 = state_45863__$1;
(statearr_45871_48059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (15))){
var inst_45836 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45872_48061 = state_45863__$1;
(statearr_45872_48061[(2)] = inst_45836);

(statearr_45872_48061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (21))){
var inst_45856 = (state_45863[(2)]);
var state_45863__$1 = (function (){var statearr_45873 = state_45863;
(statearr_45873[(9)] = inst_45856);

return statearr_45873;
})();
var statearr_45874_48062 = state_45863__$1;
(statearr_45874_48062[(2)] = null);

(statearr_45874_48062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (13))){
var inst_45818 = (state_45863[(10)]);
var inst_45820 = cljs.core.chunked_seq_QMARK_(inst_45818);
var state_45863__$1 = state_45863;
if(inst_45820){
var statearr_45875_48067 = state_45863__$1;
(statearr_45875_48067[(1)] = (16));

} else {
var statearr_45876_48069 = state_45863__$1;
(statearr_45876_48069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (22))){
var inst_45848 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
if(cljs.core.truth_(inst_45848)){
var statearr_45877_48071 = state_45863__$1;
(statearr_45877_48071[(1)] = (23));

} else {
var statearr_45878_48072 = state_45863__$1;
(statearr_45878_48072[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (6))){
var inst_45844 = (state_45863[(11)]);
var inst_45842 = (state_45863[(7)]);
var inst_45794 = (state_45863[(8)]);
var inst_45842__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45794) : topic_fn.call(null,inst_45794));
var inst_45843 = cljs.core.deref(mults);
var inst_45844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45843,inst_45842__$1);
var state_45863__$1 = (function (){var statearr_45879 = state_45863;
(statearr_45879[(11)] = inst_45844__$1);

(statearr_45879[(7)] = inst_45842__$1);

return statearr_45879;
})();
if(cljs.core.truth_(inst_45844__$1)){
var statearr_45880_48073 = state_45863__$1;
(statearr_45880_48073[(1)] = (19));

} else {
var statearr_45881_48074 = state_45863__$1;
(statearr_45881_48074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (25))){
var inst_45853 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45882_48075 = state_45863__$1;
(statearr_45882_48075[(2)] = inst_45853);

(statearr_45882_48075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (17))){
var inst_45818 = (state_45863[(10)]);
var inst_45827 = cljs.core.first(inst_45818);
var inst_45828 = cljs.core.async.muxch_STAR_(inst_45827);
var inst_45829 = cljs.core.async.close_BANG_(inst_45828);
var inst_45830 = cljs.core.next(inst_45818);
var inst_45804 = inst_45830;
var inst_45805 = null;
var inst_45806 = (0);
var inst_45807 = (0);
var state_45863__$1 = (function (){var statearr_45883 = state_45863;
(statearr_45883[(12)] = inst_45806);

(statearr_45883[(13)] = inst_45807);

(statearr_45883[(14)] = inst_45805);

(statearr_45883[(15)] = inst_45829);

(statearr_45883[(16)] = inst_45804);

return statearr_45883;
})();
var statearr_45884_48077 = state_45863__$1;
(statearr_45884_48077[(2)] = null);

(statearr_45884_48077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (3))){
var inst_45861 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45863__$1,inst_45861);
} else {
if((state_val_45864 === (12))){
var inst_45838 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45897_48082 = state_45863__$1;
(statearr_45897_48082[(2)] = inst_45838);

(statearr_45897_48082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (2))){
var state_45863__$1 = state_45863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45863__$1,(4),ch);
} else {
if((state_val_45864 === (23))){
var state_45863__$1 = state_45863;
var statearr_45901_48085 = state_45863__$1;
(statearr_45901_48085[(2)] = null);

(statearr_45901_48085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (19))){
var inst_45844 = (state_45863[(11)]);
var inst_45794 = (state_45863[(8)]);
var inst_45846 = cljs.core.async.muxch_STAR_(inst_45844);
var state_45863__$1 = state_45863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45863__$1,(22),inst_45846,inst_45794);
} else {
if((state_val_45864 === (11))){
var inst_45818 = (state_45863[(10)]);
var inst_45804 = (state_45863[(16)]);
var inst_45818__$1 = cljs.core.seq(inst_45804);
var state_45863__$1 = (function (){var statearr_45903 = state_45863;
(statearr_45903[(10)] = inst_45818__$1);

return statearr_45903;
})();
if(inst_45818__$1){
var statearr_45904_48086 = state_45863__$1;
(statearr_45904_48086[(1)] = (13));

} else {
var statearr_45905_48087 = state_45863__$1;
(statearr_45905_48087[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (9))){
var inst_45840 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45906_48089 = state_45863__$1;
(statearr_45906_48089[(2)] = inst_45840);

(statearr_45906_48089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (5))){
var inst_45801 = cljs.core.deref(mults);
var inst_45802 = cljs.core.vals(inst_45801);
var inst_45803 = cljs.core.seq(inst_45802);
var inst_45804 = inst_45803;
var inst_45805 = null;
var inst_45806 = (0);
var inst_45807 = (0);
var state_45863__$1 = (function (){var statearr_45907 = state_45863;
(statearr_45907[(12)] = inst_45806);

(statearr_45907[(13)] = inst_45807);

(statearr_45907[(14)] = inst_45805);

(statearr_45907[(16)] = inst_45804);

return statearr_45907;
})();
var statearr_45908_48091 = state_45863__$1;
(statearr_45908_48091[(2)] = null);

(statearr_45908_48091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (14))){
var state_45863__$1 = state_45863;
var statearr_45912_48095 = state_45863__$1;
(statearr_45912_48095[(2)] = null);

(statearr_45912_48095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (16))){
var inst_45818 = (state_45863[(10)]);
var inst_45822 = cljs.core.chunk_first(inst_45818);
var inst_45823 = cljs.core.chunk_rest(inst_45818);
var inst_45824 = cljs.core.count(inst_45822);
var inst_45804 = inst_45823;
var inst_45805 = inst_45822;
var inst_45806 = inst_45824;
var inst_45807 = (0);
var state_45863__$1 = (function (){var statearr_45913 = state_45863;
(statearr_45913[(12)] = inst_45806);

(statearr_45913[(13)] = inst_45807);

(statearr_45913[(14)] = inst_45805);

(statearr_45913[(16)] = inst_45804);

return statearr_45913;
})();
var statearr_45914_48097 = state_45863__$1;
(statearr_45914_48097[(2)] = null);

(statearr_45914_48097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (10))){
var inst_45806 = (state_45863[(12)]);
var inst_45807 = (state_45863[(13)]);
var inst_45805 = (state_45863[(14)]);
var inst_45804 = (state_45863[(16)]);
var inst_45812 = cljs.core._nth(inst_45805,inst_45807);
var inst_45813 = cljs.core.async.muxch_STAR_(inst_45812);
var inst_45814 = cljs.core.async.close_BANG_(inst_45813);
var inst_45815 = (inst_45807 + (1));
var tmp45909 = inst_45806;
var tmp45910 = inst_45805;
var tmp45911 = inst_45804;
var inst_45804__$1 = tmp45911;
var inst_45805__$1 = tmp45910;
var inst_45806__$1 = tmp45909;
var inst_45807__$1 = inst_45815;
var state_45863__$1 = (function (){var statearr_45915 = state_45863;
(statearr_45915[(12)] = inst_45806__$1);

(statearr_45915[(13)] = inst_45807__$1);

(statearr_45915[(14)] = inst_45805__$1);

(statearr_45915[(16)] = inst_45804__$1);

(statearr_45915[(17)] = inst_45814);

return statearr_45915;
})();
var statearr_45916_48188 = state_45863__$1;
(statearr_45916_48188[(2)] = null);

(statearr_45916_48188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (18))){
var inst_45833 = (state_45863[(2)]);
var state_45863__$1 = state_45863;
var statearr_45918_48189 = state_45863__$1;
(statearr_45918_48189[(2)] = inst_45833);

(statearr_45918_48189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45864 === (8))){
var inst_45806 = (state_45863[(12)]);
var inst_45807 = (state_45863[(13)]);
var inst_45809 = (inst_45807 < inst_45806);
var inst_45810 = inst_45809;
var state_45863__$1 = state_45863;
if(cljs.core.truth_(inst_45810)){
var statearr_45922_48190 = state_45863__$1;
(statearr_45922_48190[(1)] = (10));

} else {
var statearr_45923_48191 = state_45863__$1;
(statearr_45923_48191[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_45924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45924[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_45924[(1)] = (1));

return statearr_45924;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_45863){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_45863);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e45925){var ex__44046__auto__ = e45925;
var statearr_45926_48192 = state_45863;
(statearr_45926_48192[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_45863[(4)]))){
var statearr_45927_48193 = state_45863;
(statearr_45927_48193[(1)] = cljs.core.first((state_45863[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48194 = state_45863;
state_45863 = G__48194;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_45863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_45863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_45928 = f__44163__auto__();
(statearr_45928[(6)] = c__44162__auto___48053);

return statearr_45928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45932 = arguments.length;
switch (G__45932) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45946 = arguments.length;
switch (G__45946) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45948 = arguments.length;
switch (G__45948) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44162__auto___48226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46012){
var state_val_46013 = (state_46012[(1)]);
if((state_val_46013 === (7))){
var state_46012__$1 = state_46012;
var statearr_46014_48283 = state_46012__$1;
(statearr_46014_48283[(2)] = null);

(statearr_46014_48283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (1))){
var state_46012__$1 = state_46012;
var statearr_46027_48284 = state_46012__$1;
(statearr_46027_48284[(2)] = null);

(statearr_46027_48284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (4))){
var inst_45960 = (state_46012[(7)]);
var inst_45961 = (state_46012[(8)]);
var inst_45963 = (inst_45961 < inst_45960);
var state_46012__$1 = state_46012;
if(cljs.core.truth_(inst_45963)){
var statearr_46028_48288 = state_46012__$1;
(statearr_46028_48288[(1)] = (6));

} else {
var statearr_46029_48290 = state_46012__$1;
(statearr_46029_48290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (15))){
var inst_45998 = (state_46012[(9)]);
var inst_46003 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45998);
var state_46012__$1 = state_46012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46012__$1,(17),out,inst_46003);
} else {
if((state_val_46013 === (13))){
var inst_45998 = (state_46012[(9)]);
var inst_45998__$1 = (state_46012[(2)]);
var inst_45999 = cljs.core.some(cljs.core.nil_QMARK_,inst_45998__$1);
var state_46012__$1 = (function (){var statearr_46031 = state_46012;
(statearr_46031[(9)] = inst_45998__$1);

return statearr_46031;
})();
if(cljs.core.truth_(inst_45999)){
var statearr_46032_48294 = state_46012__$1;
(statearr_46032_48294[(1)] = (14));

} else {
var statearr_46033_48295 = state_46012__$1;
(statearr_46033_48295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (6))){
var state_46012__$1 = state_46012;
var statearr_46034_48297 = state_46012__$1;
(statearr_46034_48297[(2)] = null);

(statearr_46034_48297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (17))){
var inst_46005 = (state_46012[(2)]);
var state_46012__$1 = (function (){var statearr_46036 = state_46012;
(statearr_46036[(10)] = inst_46005);

return statearr_46036;
})();
var statearr_46037_48298 = state_46012__$1;
(statearr_46037_48298[(2)] = null);

(statearr_46037_48298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (3))){
var inst_46010 = (state_46012[(2)]);
var state_46012__$1 = state_46012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46012__$1,inst_46010);
} else {
if((state_val_46013 === (12))){
var _ = (function (){var statearr_46038 = state_46012;
(statearr_46038[(4)] = cljs.core.rest((state_46012[(4)])));

return statearr_46038;
})();
var state_46012__$1 = state_46012;
var ex46035 = (state_46012__$1[(2)]);
var statearr_46048_48300 = state_46012__$1;
(statearr_46048_48300[(5)] = ex46035);


if((ex46035 instanceof Object)){
var statearr_46049_48302 = state_46012__$1;
(statearr_46049_48302[(1)] = (11));

(statearr_46049_48302[(5)] = null);

} else {
throw ex46035;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (2))){
var inst_45959 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45960 = cnt;
var inst_45961 = (0);
var state_46012__$1 = (function (){var statearr_46050 = state_46012;
(statearr_46050[(7)] = inst_45960);

(statearr_46050[(8)] = inst_45961);

(statearr_46050[(11)] = inst_45959);

return statearr_46050;
})();
var statearr_46051_48303 = state_46012__$1;
(statearr_46051_48303[(2)] = null);

(statearr_46051_48303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (11))){
var inst_45965 = (state_46012[(2)]);
var inst_45966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46012__$1 = (function (){var statearr_46052 = state_46012;
(statearr_46052[(12)] = inst_45965);

return statearr_46052;
})();
var statearr_46053_48305 = state_46012__$1;
(statearr_46053_48305[(2)] = inst_45966);

(statearr_46053_48305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (9))){
var inst_45961 = (state_46012[(8)]);
var _ = (function (){var statearr_46054 = state_46012;
(statearr_46054[(4)] = cljs.core.cons((12),(state_46012[(4)])));

return statearr_46054;
})();
var inst_45978 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45961) : chs__$1.call(null,inst_45961));
var inst_45979 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45961) : done.call(null,inst_45961));
var inst_45980 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45978,inst_45979);
var ___$1 = (function (){var statearr_46055 = state_46012;
(statearr_46055[(4)] = cljs.core.rest((state_46012[(4)])));

return statearr_46055;
})();
var state_46012__$1 = state_46012;
var statearr_46056_48309 = state_46012__$1;
(statearr_46056_48309[(2)] = inst_45980);

(statearr_46056_48309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (5))){
var inst_45990 = (state_46012[(2)]);
var state_46012__$1 = (function (){var statearr_46057 = state_46012;
(statearr_46057[(13)] = inst_45990);

return statearr_46057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46012__$1,(13),dchan);
} else {
if((state_val_46013 === (14))){
var inst_46001 = cljs.core.async.close_BANG_(out);
var state_46012__$1 = state_46012;
var statearr_46058_48316 = state_46012__$1;
(statearr_46058_48316[(2)] = inst_46001);

(statearr_46058_48316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (16))){
var inst_46008 = (state_46012[(2)]);
var state_46012__$1 = state_46012;
var statearr_46059_48317 = state_46012__$1;
(statearr_46059_48317[(2)] = inst_46008);

(statearr_46059_48317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (10))){
var inst_45961 = (state_46012[(8)]);
var inst_45983 = (state_46012[(2)]);
var inst_45984 = (inst_45961 + (1));
var inst_45961__$1 = inst_45984;
var state_46012__$1 = (function (){var statearr_46060 = state_46012;
(statearr_46060[(14)] = inst_45983);

(statearr_46060[(8)] = inst_45961__$1);

return statearr_46060;
})();
var statearr_46061_48318 = state_46012__$1;
(statearr_46061_48318[(2)] = null);

(statearr_46061_48318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46013 === (8))){
var inst_45988 = (state_46012[(2)]);
var state_46012__$1 = state_46012;
var statearr_46062_48319 = state_46012__$1;
(statearr_46062_48319[(2)] = inst_45988);

(statearr_46062_48319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46063[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46063[(1)] = (1));

return statearr_46063;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46012){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46012);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46064){var ex__44046__auto__ = e46064;
var statearr_46065_48320 = state_46012;
(statearr_46065_48320[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46012[(4)]))){
var statearr_46066_48321 = state_46012;
(statearr_46066_48321[(1)] = cljs.core.first((state_46012[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48322 = state_46012;
state_46012 = G__48322;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46077 = f__44163__auto__();
(statearr_46077[(6)] = c__44162__auto___48226);

return statearr_46077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46080 = arguments.length;
switch (G__46080) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___48324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46116){
var state_val_46117 = (state_46116[(1)]);
if((state_val_46117 === (7))){
var inst_46095 = (state_46116[(7)]);
var inst_46094 = (state_46116[(8)]);
var inst_46094__$1 = (state_46116[(2)]);
var inst_46095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46094__$1,(0),null);
var inst_46096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46094__$1,(1),null);
var inst_46097 = (inst_46095__$1 == null);
var state_46116__$1 = (function (){var statearr_46120 = state_46116;
(statearr_46120[(7)] = inst_46095__$1);

(statearr_46120[(9)] = inst_46096);

(statearr_46120[(8)] = inst_46094__$1);

return statearr_46120;
})();
if(cljs.core.truth_(inst_46097)){
var statearr_46122_48327 = state_46116__$1;
(statearr_46122_48327[(1)] = (8));

} else {
var statearr_46123_48328 = state_46116__$1;
(statearr_46123_48328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (1))){
var inst_46084 = cljs.core.vec(chs);
var inst_46085 = inst_46084;
var state_46116__$1 = (function (){var statearr_46124 = state_46116;
(statearr_46124[(10)] = inst_46085);

return statearr_46124;
})();
var statearr_46125_48329 = state_46116__$1;
(statearr_46125_48329[(2)] = null);

(statearr_46125_48329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (4))){
var inst_46085 = (state_46116[(10)]);
var state_46116__$1 = state_46116;
return cljs.core.async.ioc_alts_BANG_(state_46116__$1,(7),inst_46085);
} else {
if((state_val_46117 === (6))){
var inst_46112 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
var statearr_46134_48330 = state_46116__$1;
(statearr_46134_48330[(2)] = inst_46112);

(statearr_46134_48330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (3))){
var inst_46114 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46116__$1,inst_46114);
} else {
if((state_val_46117 === (2))){
var inst_46085 = (state_46116[(10)]);
var inst_46087 = cljs.core.count(inst_46085);
var inst_46088 = (inst_46087 > (0));
var state_46116__$1 = state_46116;
if(cljs.core.truth_(inst_46088)){
var statearr_46136_48331 = state_46116__$1;
(statearr_46136_48331[(1)] = (4));

} else {
var statearr_46137_48332 = state_46116__$1;
(statearr_46137_48332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (11))){
var inst_46085 = (state_46116[(10)]);
var inst_46105 = (state_46116[(2)]);
var tmp46135 = inst_46085;
var inst_46085__$1 = tmp46135;
var state_46116__$1 = (function (){var statearr_46140 = state_46116;
(statearr_46140[(11)] = inst_46105);

(statearr_46140[(10)] = inst_46085__$1);

return statearr_46140;
})();
var statearr_46141_48333 = state_46116__$1;
(statearr_46141_48333[(2)] = null);

(statearr_46141_48333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (9))){
var inst_46095 = (state_46116[(7)]);
var state_46116__$1 = state_46116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46116__$1,(11),out,inst_46095);
} else {
if((state_val_46117 === (5))){
var inst_46110 = cljs.core.async.close_BANG_(out);
var state_46116__$1 = state_46116;
var statearr_46147_48338 = state_46116__$1;
(statearr_46147_48338[(2)] = inst_46110);

(statearr_46147_48338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (10))){
var inst_46108 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
var statearr_46148_48339 = state_46116__$1;
(statearr_46148_48339[(2)] = inst_46108);

(statearr_46148_48339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (8))){
var inst_46095 = (state_46116[(7)]);
var inst_46085 = (state_46116[(10)]);
var inst_46096 = (state_46116[(9)]);
var inst_46094 = (state_46116[(8)]);
var inst_46100 = (function (){var cs = inst_46085;
var vec__46090 = inst_46094;
var v = inst_46095;
var c = inst_46096;
return (function (p1__46078_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46078_SHARP_);
});
})();
var inst_46101 = cljs.core.filterv(inst_46100,inst_46085);
var inst_46085__$1 = inst_46101;
var state_46116__$1 = (function (){var statearr_46149 = state_46116;
(statearr_46149[(10)] = inst_46085__$1);

return statearr_46149;
})();
var statearr_46150_48368 = state_46116__$1;
(statearr_46150_48368[(2)] = null);

(statearr_46150_48368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46173[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46173[(1)] = (1));

return statearr_46173;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46116){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46116);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46174){var ex__44046__auto__ = e46174;
var statearr_46175_48369 = state_46116;
(statearr_46175_48369[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46116[(4)]))){
var statearr_46176_48370 = state_46116;
(statearr_46176_48370[(1)] = cljs.core.first((state_46116[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48371 = state_46116;
state_46116 = G__48371;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46177 = f__44163__auto__();
(statearr_46177[(6)] = c__44162__auto___48324);

return statearr_46177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46181 = arguments.length;
switch (G__46181) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___48378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46206){
var state_val_46207 = (state_46206[(1)]);
if((state_val_46207 === (7))){
var inst_46188 = (state_46206[(7)]);
var inst_46188__$1 = (state_46206[(2)]);
var inst_46189 = (inst_46188__$1 == null);
var inst_46190 = cljs.core.not(inst_46189);
var state_46206__$1 = (function (){var statearr_46208 = state_46206;
(statearr_46208[(7)] = inst_46188__$1);

return statearr_46208;
})();
if(inst_46190){
var statearr_46215_48379 = state_46206__$1;
(statearr_46215_48379[(1)] = (8));

} else {
var statearr_46216_48380 = state_46206__$1;
(statearr_46216_48380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (1))){
var inst_46183 = (0);
var state_46206__$1 = (function (){var statearr_46217 = state_46206;
(statearr_46217[(8)] = inst_46183);

return statearr_46217;
})();
var statearr_46219_48385 = state_46206__$1;
(statearr_46219_48385[(2)] = null);

(statearr_46219_48385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (4))){
var state_46206__$1 = state_46206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46206__$1,(7),ch);
} else {
if((state_val_46207 === (6))){
var inst_46201 = (state_46206[(2)]);
var state_46206__$1 = state_46206;
var statearr_46220_48386 = state_46206__$1;
(statearr_46220_48386[(2)] = inst_46201);

(statearr_46220_48386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (3))){
var inst_46203 = (state_46206[(2)]);
var inst_46204 = cljs.core.async.close_BANG_(out);
var state_46206__$1 = (function (){var statearr_46221 = state_46206;
(statearr_46221[(9)] = inst_46203);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46206__$1,inst_46204);
} else {
if((state_val_46207 === (2))){
var inst_46183 = (state_46206[(8)]);
var inst_46185 = (inst_46183 < n);
var state_46206__$1 = state_46206;
if(cljs.core.truth_(inst_46185)){
var statearr_46222_48430 = state_46206__$1;
(statearr_46222_48430[(1)] = (4));

} else {
var statearr_46223_48431 = state_46206__$1;
(statearr_46223_48431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (11))){
var inst_46183 = (state_46206[(8)]);
var inst_46193 = (state_46206[(2)]);
var inst_46194 = (inst_46183 + (1));
var inst_46183__$1 = inst_46194;
var state_46206__$1 = (function (){var statearr_46224 = state_46206;
(statearr_46224[(8)] = inst_46183__$1);

(statearr_46224[(10)] = inst_46193);

return statearr_46224;
})();
var statearr_46225_48435 = state_46206__$1;
(statearr_46225_48435[(2)] = null);

(statearr_46225_48435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (9))){
var state_46206__$1 = state_46206;
var statearr_46226_48436 = state_46206__$1;
(statearr_46226_48436[(2)] = null);

(statearr_46226_48436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (5))){
var state_46206__$1 = state_46206;
var statearr_46227_48437 = state_46206__$1;
(statearr_46227_48437[(2)] = null);

(statearr_46227_48437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (10))){
var inst_46198 = (state_46206[(2)]);
var state_46206__$1 = state_46206;
var statearr_46228_48442 = state_46206__$1;
(statearr_46228_48442[(2)] = inst_46198);

(statearr_46228_48442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46207 === (8))){
var inst_46188 = (state_46206[(7)]);
var state_46206__$1 = state_46206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46206__$1,(11),out,inst_46188);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46229[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46229[(1)] = (1));

return statearr_46229;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46206){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46206);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46230){var ex__44046__auto__ = e46230;
var statearr_46231_48460 = state_46206;
(statearr_46231_48460[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46206[(4)]))){
var statearr_46232_48461 = state_46206;
(statearr_46232_48461[(1)] = cljs.core.first((state_46206[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48462 = state_46206;
state_46206 = G__48462;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46233 = f__44163__auto__();
(statearr_46233[(6)] = c__44162__auto___48378);

return statearr_46233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46237 = (function (f,ch,meta46238){
this.f = f;
this.ch = ch;
this.meta46238 = meta46238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46239,meta46238__$1){
var self__ = this;
var _46239__$1 = this;
return (new cljs.core.async.t_cljs$core$async46237(self__.f,self__.ch,meta46238__$1));
}));

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46239){
var self__ = this;
var _46239__$1 = this;
return self__.meta46238;
}));

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46268 = (function (f,ch,meta46238,_,fn1,meta46269){
this.f = f;
this.ch = ch;
this.meta46238 = meta46238;
this._ = _;
this.fn1 = fn1;
this.meta46269 = meta46269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46270,meta46269__$1){
var self__ = this;
var _46270__$1 = this;
return (new cljs.core.async.t_cljs$core$async46268(self__.f,self__.ch,self__.meta46238,self__._,self__.fn1,meta46269__$1));
}));

(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46270){
var self__ = this;
var _46270__$1 = this;
return self__.meta46269;
}));

(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46234_SHARP_){
var G__46277 = (((p1__46234_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46234_SHARP_) : self__.f.call(null,p1__46234_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46277) : f1.call(null,G__46277));
});
}));

(cljs.core.async.t_cljs$core$async46268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46238","meta46238",-49238060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46237","cljs.core.async/t_cljs$core$async46237",1651511822,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46269","meta46269",378578835,null)], null);
}));

(cljs.core.async.t_cljs$core$async46268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46268");

(cljs.core.async.t_cljs$core$async46268.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46268.
 */
cljs.core.async.__GT_t_cljs$core$async46268 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46268(f__$1,ch__$1,meta46238__$1,___$2,fn1__$1,meta46269){
return (new cljs.core.async.t_cljs$core$async46268(f__$1,ch__$1,meta46238__$1,___$2,fn1__$1,meta46269));
});

}

return (new cljs.core.async.t_cljs$core$async46268(self__.f,self__.ch,self__.meta46238,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46286 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46286) : self__.f.call(null,G__46286));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46238","meta46238",-49238060,null)], null);
}));

(cljs.core.async.t_cljs$core$async46237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46237");

(cljs.core.async.t_cljs$core$async46237.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46237.
 */
cljs.core.async.__GT_t_cljs$core$async46237 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46237(f__$1,ch__$1,meta46238){
return (new cljs.core.async.t_cljs$core$async46237(f__$1,ch__$1,meta46238));
});

}

return (new cljs.core.async.t_cljs$core$async46237(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46294 = (function (f,ch,meta46295){
this.f = f;
this.ch = ch;
this.meta46295 = meta46295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46296,meta46295__$1){
var self__ = this;
var _46296__$1 = this;
return (new cljs.core.async.t_cljs$core$async46294(self__.f,self__.ch,meta46295__$1));
}));

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46296){
var self__ = this;
var _46296__$1 = this;
return self__.meta46295;
}));

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46295","meta46295",-1698805376,null)], null);
}));

(cljs.core.async.t_cljs$core$async46294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46294");

(cljs.core.async.t_cljs$core$async46294.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46294.
 */
cljs.core.async.__GT_t_cljs$core$async46294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46294(f__$1,ch__$1,meta46295){
return (new cljs.core.async.t_cljs$core$async46294(f__$1,ch__$1,meta46295));
});

}

return (new cljs.core.async.t_cljs$core$async46294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46311 = (function (p,ch,meta46312){
this.p = p;
this.ch = ch;
this.meta46312 = meta46312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46313,meta46312__$1){
var self__ = this;
var _46313__$1 = this;
return (new cljs.core.async.t_cljs$core$async46311(self__.p,self__.ch,meta46312__$1));
}));

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46313){
var self__ = this;
var _46313__$1 = this;
return self__.meta46312;
}));

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46312","meta46312",1240868738,null)], null);
}));

(cljs.core.async.t_cljs$core$async46311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46311");

(cljs.core.async.t_cljs$core$async46311.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46311.
 */
cljs.core.async.__GT_t_cljs$core$async46311 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46311(p__$1,ch__$1,meta46312){
return (new cljs.core.async.t_cljs$core$async46311(p__$1,ch__$1,meta46312));
});

}

return (new cljs.core.async.t_cljs$core$async46311(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46330 = arguments.length;
switch (G__46330) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___48620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46352){
var state_val_46353 = (state_46352[(1)]);
if((state_val_46353 === (7))){
var inst_46348 = (state_46352[(2)]);
var state_46352__$1 = state_46352;
var statearr_46354_48624 = state_46352__$1;
(statearr_46354_48624[(2)] = inst_46348);

(statearr_46354_48624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (1))){
var state_46352__$1 = state_46352;
var statearr_46355_48625 = state_46352__$1;
(statearr_46355_48625[(2)] = null);

(statearr_46355_48625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (4))){
var inst_46334 = (state_46352[(7)]);
var inst_46334__$1 = (state_46352[(2)]);
var inst_46335 = (inst_46334__$1 == null);
var state_46352__$1 = (function (){var statearr_46370 = state_46352;
(statearr_46370[(7)] = inst_46334__$1);

return statearr_46370;
})();
if(cljs.core.truth_(inst_46335)){
var statearr_46371_48627 = state_46352__$1;
(statearr_46371_48627[(1)] = (5));

} else {
var statearr_46373_48628 = state_46352__$1;
(statearr_46373_48628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (6))){
var inst_46334 = (state_46352[(7)]);
var inst_46339 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46334) : p.call(null,inst_46334));
var state_46352__$1 = state_46352;
if(cljs.core.truth_(inst_46339)){
var statearr_46374_48631 = state_46352__$1;
(statearr_46374_48631[(1)] = (8));

} else {
var statearr_46375_48632 = state_46352__$1;
(statearr_46375_48632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (3))){
var inst_46350 = (state_46352[(2)]);
var state_46352__$1 = state_46352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46352__$1,inst_46350);
} else {
if((state_val_46353 === (2))){
var state_46352__$1 = state_46352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46352__$1,(4),ch);
} else {
if((state_val_46353 === (11))){
var inst_46342 = (state_46352[(2)]);
var state_46352__$1 = state_46352;
var statearr_46376_48701 = state_46352__$1;
(statearr_46376_48701[(2)] = inst_46342);

(statearr_46376_48701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (9))){
var state_46352__$1 = state_46352;
var statearr_46377_48708 = state_46352__$1;
(statearr_46377_48708[(2)] = null);

(statearr_46377_48708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (5))){
var inst_46337 = cljs.core.async.close_BANG_(out);
var state_46352__$1 = state_46352;
var statearr_46378_48716 = state_46352__$1;
(statearr_46378_48716[(2)] = inst_46337);

(statearr_46378_48716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (10))){
var inst_46345 = (state_46352[(2)]);
var state_46352__$1 = (function (){var statearr_46379 = state_46352;
(statearr_46379[(8)] = inst_46345);

return statearr_46379;
})();
var statearr_46380_48722 = state_46352__$1;
(statearr_46380_48722[(2)] = null);

(statearr_46380_48722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46353 === (8))){
var inst_46334 = (state_46352[(7)]);
var state_46352__$1 = state_46352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46352__$1,(11),out,inst_46334);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46384 = [null,null,null,null,null,null,null,null,null];
(statearr_46384[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46384[(1)] = (1));

return statearr_46384;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46352){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46352);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46386){var ex__44046__auto__ = e46386;
var statearr_46390_48724 = state_46352;
(statearr_46390_48724[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46352[(4)]))){
var statearr_46391_48727 = state_46352;
(statearr_46391_48727[(1)] = cljs.core.first((state_46352[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48729 = state_46352;
state_46352 = G__48729;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46399 = f__44163__auto__();
(statearr_46399[(6)] = c__44162__auto___48620);

return statearr_46399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44162__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46488){
var state_val_46489 = (state_46488[(1)]);
if((state_val_46489 === (7))){
var inst_46484 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46494_48791 = state_46488__$1;
(statearr_46494_48791[(2)] = inst_46484);

(statearr_46494_48791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (20))){
var inst_46445 = (state_46488[(7)]);
var inst_46456 = (state_46488[(2)]);
var inst_46460 = cljs.core.next(inst_46445);
var inst_46431 = inst_46460;
var inst_46432 = null;
var inst_46433 = (0);
var inst_46434 = (0);
var state_46488__$1 = (function (){var statearr_46495 = state_46488;
(statearr_46495[(8)] = inst_46431);

(statearr_46495[(9)] = inst_46456);

(statearr_46495[(10)] = inst_46433);

(statearr_46495[(11)] = inst_46432);

(statearr_46495[(12)] = inst_46434);

return statearr_46495;
})();
var statearr_46496_48796 = state_46488__$1;
(statearr_46496_48796[(2)] = null);

(statearr_46496_48796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (1))){
var state_46488__$1 = state_46488;
var statearr_46497_48800 = state_46488__$1;
(statearr_46497_48800[(2)] = null);

(statearr_46497_48800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (4))){
var inst_46420 = (state_46488[(13)]);
var inst_46420__$1 = (state_46488[(2)]);
var inst_46421 = (inst_46420__$1 == null);
var state_46488__$1 = (function (){var statearr_46498 = state_46488;
(statearr_46498[(13)] = inst_46420__$1);

return statearr_46498;
})();
if(cljs.core.truth_(inst_46421)){
var statearr_46499_48802 = state_46488__$1;
(statearr_46499_48802[(1)] = (5));

} else {
var statearr_46500_48803 = state_46488__$1;
(statearr_46500_48803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (15))){
var state_46488__$1 = state_46488;
var statearr_46504_48805 = state_46488__$1;
(statearr_46504_48805[(2)] = null);

(statearr_46504_48805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (21))){
var state_46488__$1 = state_46488;
var statearr_46505_48809 = state_46488__$1;
(statearr_46505_48809[(2)] = null);

(statearr_46505_48809[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (13))){
var inst_46431 = (state_46488[(8)]);
var inst_46433 = (state_46488[(10)]);
var inst_46432 = (state_46488[(11)]);
var inst_46434 = (state_46488[(12)]);
var inst_46441 = (state_46488[(2)]);
var inst_46442 = (inst_46434 + (1));
var tmp46501 = inst_46431;
var tmp46502 = inst_46433;
var tmp46503 = inst_46432;
var inst_46431__$1 = tmp46501;
var inst_46432__$1 = tmp46503;
var inst_46433__$1 = tmp46502;
var inst_46434__$1 = inst_46442;
var state_46488__$1 = (function (){var statearr_46507 = state_46488;
(statearr_46507[(8)] = inst_46431__$1);

(statearr_46507[(14)] = inst_46441);

(statearr_46507[(10)] = inst_46433__$1);

(statearr_46507[(11)] = inst_46432__$1);

(statearr_46507[(12)] = inst_46434__$1);

return statearr_46507;
})();
var statearr_46511_48815 = state_46488__$1;
(statearr_46511_48815[(2)] = null);

(statearr_46511_48815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (22))){
var state_46488__$1 = state_46488;
var statearr_46512_48816 = state_46488__$1;
(statearr_46512_48816[(2)] = null);

(statearr_46512_48816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (6))){
var inst_46420 = (state_46488[(13)]);
var inst_46429 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46420) : f.call(null,inst_46420));
var inst_46430 = cljs.core.seq(inst_46429);
var inst_46431 = inst_46430;
var inst_46432 = null;
var inst_46433 = (0);
var inst_46434 = (0);
var state_46488__$1 = (function (){var statearr_46513 = state_46488;
(statearr_46513[(8)] = inst_46431);

(statearr_46513[(10)] = inst_46433);

(statearr_46513[(11)] = inst_46432);

(statearr_46513[(12)] = inst_46434);

return statearr_46513;
})();
var statearr_46514_48821 = state_46488__$1;
(statearr_46514_48821[(2)] = null);

(statearr_46514_48821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (17))){
var inst_46445 = (state_46488[(7)]);
var inst_46449 = cljs.core.chunk_first(inst_46445);
var inst_46450 = cljs.core.chunk_rest(inst_46445);
var inst_46451 = cljs.core.count(inst_46449);
var inst_46431 = inst_46450;
var inst_46432 = inst_46449;
var inst_46433 = inst_46451;
var inst_46434 = (0);
var state_46488__$1 = (function (){var statearr_46515 = state_46488;
(statearr_46515[(8)] = inst_46431);

(statearr_46515[(10)] = inst_46433);

(statearr_46515[(11)] = inst_46432);

(statearr_46515[(12)] = inst_46434);

return statearr_46515;
})();
var statearr_46516_48822 = state_46488__$1;
(statearr_46516_48822[(2)] = null);

(statearr_46516_48822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (3))){
var inst_46486 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46488__$1,inst_46486);
} else {
if((state_val_46489 === (12))){
var inst_46474 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46517_48823 = state_46488__$1;
(statearr_46517_48823[(2)] = inst_46474);

(statearr_46517_48823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (2))){
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46488__$1,(4),in$);
} else {
if((state_val_46489 === (23))){
var inst_46482 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46518_48824 = state_46488__$1;
(statearr_46518_48824[(2)] = inst_46482);

(statearr_46518_48824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (19))){
var inst_46466 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46519_48892 = state_46488__$1;
(statearr_46519_48892[(2)] = inst_46466);

(statearr_46519_48892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (11))){
var inst_46431 = (state_46488[(8)]);
var inst_46445 = (state_46488[(7)]);
var inst_46445__$1 = cljs.core.seq(inst_46431);
var state_46488__$1 = (function (){var statearr_46520 = state_46488;
(statearr_46520[(7)] = inst_46445__$1);

return statearr_46520;
})();
if(inst_46445__$1){
var statearr_46521_48894 = state_46488__$1;
(statearr_46521_48894[(1)] = (14));

} else {
var statearr_46522_48895 = state_46488__$1;
(statearr_46522_48895[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (9))){
var inst_46476 = (state_46488[(2)]);
var inst_46477 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46488__$1 = (function (){var statearr_46523 = state_46488;
(statearr_46523[(15)] = inst_46476);

return statearr_46523;
})();
if(cljs.core.truth_(inst_46477)){
var statearr_46524_48897 = state_46488__$1;
(statearr_46524_48897[(1)] = (21));

} else {
var statearr_46525_48898 = state_46488__$1;
(statearr_46525_48898[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (5))){
var inst_46423 = cljs.core.async.close_BANG_(out);
var state_46488__$1 = state_46488;
var statearr_46526_48902 = state_46488__$1;
(statearr_46526_48902[(2)] = inst_46423);

(statearr_46526_48902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (14))){
var inst_46445 = (state_46488[(7)]);
var inst_46447 = cljs.core.chunked_seq_QMARK_(inst_46445);
var state_46488__$1 = state_46488;
if(inst_46447){
var statearr_46527_48903 = state_46488__$1;
(statearr_46527_48903[(1)] = (17));

} else {
var statearr_46528_48904 = state_46488__$1;
(statearr_46528_48904[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (16))){
var inst_46472 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46529_48906 = state_46488__$1;
(statearr_46529_48906[(2)] = inst_46472);

(statearr_46529_48906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (10))){
var inst_46432 = (state_46488[(11)]);
var inst_46434 = (state_46488[(12)]);
var inst_46439 = cljs.core._nth(inst_46432,inst_46434);
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46488__$1,(13),out,inst_46439);
} else {
if((state_val_46489 === (18))){
var inst_46445 = (state_46488[(7)]);
var inst_46454 = cljs.core.first(inst_46445);
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46488__$1,(20),out,inst_46454);
} else {
if((state_val_46489 === (8))){
var inst_46433 = (state_46488[(10)]);
var inst_46434 = (state_46488[(12)]);
var inst_46436 = (inst_46434 < inst_46433);
var inst_46437 = inst_46436;
var state_46488__$1 = state_46488;
if(cljs.core.truth_(inst_46437)){
var statearr_46540_48913 = state_46488__$1;
(statearr_46540_48913[(1)] = (10));

} else {
var statearr_46541_48914 = state_46488__$1;
(statearr_46541_48914[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____0 = (function (){
var statearr_46549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46549[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__);

(statearr_46549[(1)] = (1));

return statearr_46549;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____1 = (function (state_46488){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46488);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46554){var ex__44046__auto__ = e46554;
var statearr_46555_48921 = state_46488;
(statearr_46555_48921[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46488[(4)]))){
var statearr_46561_48923 = state_46488;
(statearr_46561_48923[(1)] = cljs.core.first((state_46488[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48925 = state_46488;
state_46488 = G__48925;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__ = function(state_46488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____1.call(this,state_46488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44043__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46562 = f__44163__auto__();
(statearr_46562[(6)] = c__44162__auto__);

return statearr_46562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));

return c__44162__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46564 = arguments.length;
switch (G__46564) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46572 = arguments.length;
switch (G__46572) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46577 = arguments.length;
switch (G__46577) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___48954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46615){
var state_val_46616 = (state_46615[(1)]);
if((state_val_46616 === (7))){
var inst_46610 = (state_46615[(2)]);
var state_46615__$1 = state_46615;
var statearr_46617_48956 = state_46615__$1;
(statearr_46617_48956[(2)] = inst_46610);

(statearr_46617_48956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (1))){
var inst_46592 = null;
var state_46615__$1 = (function (){var statearr_46618 = state_46615;
(statearr_46618[(7)] = inst_46592);

return statearr_46618;
})();
var statearr_46619_48961 = state_46615__$1;
(statearr_46619_48961[(2)] = null);

(statearr_46619_48961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (4))){
var inst_46595 = (state_46615[(8)]);
var inst_46595__$1 = (state_46615[(2)]);
var inst_46596 = (inst_46595__$1 == null);
var inst_46597 = cljs.core.not(inst_46596);
var state_46615__$1 = (function (){var statearr_46620 = state_46615;
(statearr_46620[(8)] = inst_46595__$1);

return statearr_46620;
})();
if(inst_46597){
var statearr_46621_48962 = state_46615__$1;
(statearr_46621_48962[(1)] = (5));

} else {
var statearr_46622_48963 = state_46615__$1;
(statearr_46622_48963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (6))){
var state_46615__$1 = state_46615;
var statearr_46623_48964 = state_46615__$1;
(statearr_46623_48964[(2)] = null);

(statearr_46623_48964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (3))){
var inst_46612 = (state_46615[(2)]);
var inst_46613 = cljs.core.async.close_BANG_(out);
var state_46615__$1 = (function (){var statearr_46624 = state_46615;
(statearr_46624[(9)] = inst_46612);

return statearr_46624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46615__$1,inst_46613);
} else {
if((state_val_46616 === (2))){
var state_46615__$1 = state_46615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46615__$1,(4),ch);
} else {
if((state_val_46616 === (11))){
var inst_46595 = (state_46615[(8)]);
var inst_46604 = (state_46615[(2)]);
var inst_46592 = inst_46595;
var state_46615__$1 = (function (){var statearr_46625 = state_46615;
(statearr_46625[(10)] = inst_46604);

(statearr_46625[(7)] = inst_46592);

return statearr_46625;
})();
var statearr_46626_48965 = state_46615__$1;
(statearr_46626_48965[(2)] = null);

(statearr_46626_48965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (9))){
var inst_46595 = (state_46615[(8)]);
var state_46615__$1 = state_46615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46615__$1,(11),out,inst_46595);
} else {
if((state_val_46616 === (5))){
var inst_46592 = (state_46615[(7)]);
var inst_46595 = (state_46615[(8)]);
var inst_46599 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46595,inst_46592);
var state_46615__$1 = state_46615;
if(inst_46599){
var statearr_46629_48966 = state_46615__$1;
(statearr_46629_48966[(1)] = (8));

} else {
var statearr_46630_48967 = state_46615__$1;
(statearr_46630_48967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (10))){
var inst_46607 = (state_46615[(2)]);
var state_46615__$1 = state_46615;
var statearr_46631_48968 = state_46615__$1;
(statearr_46631_48968[(2)] = inst_46607);

(statearr_46631_48968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46616 === (8))){
var inst_46592 = (state_46615[(7)]);
var tmp46627 = inst_46592;
var inst_46592__$1 = tmp46627;
var state_46615__$1 = (function (){var statearr_46634 = state_46615;
(statearr_46634[(7)] = inst_46592__$1);

return statearr_46634;
})();
var statearr_46635_48969 = state_46615__$1;
(statearr_46635_48969[(2)] = null);

(statearr_46635_48969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46647[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46647[(1)] = (1));

return statearr_46647;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46615){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46615);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46648){var ex__44046__auto__ = e46648;
var statearr_46649_48970 = state_46615;
(statearr_46649_48970[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46615[(4)]))){
var statearr_46650_48971 = state_46615;
(statearr_46650_48971[(1)] = cljs.core.first((state_46615[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48976 = state_46615;
state_46615 = G__48976;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46653 = f__44163__auto__();
(statearr_46653[(6)] = c__44162__auto___48954);

return statearr_46653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46660 = arguments.length;
switch (G__46660) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___49047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46700){
var state_val_46701 = (state_46700[(1)]);
if((state_val_46701 === (7))){
var inst_46696 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46702_49048 = state_46700__$1;
(statearr_46702_49048[(2)] = inst_46696);

(statearr_46702_49048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (1))){
var inst_46663 = (new Array(n));
var inst_46664 = inst_46663;
var inst_46665 = (0);
var state_46700__$1 = (function (){var statearr_46703 = state_46700;
(statearr_46703[(7)] = inst_46665);

(statearr_46703[(8)] = inst_46664);

return statearr_46703;
})();
var statearr_46704_49054 = state_46700__$1;
(statearr_46704_49054[(2)] = null);

(statearr_46704_49054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (4))){
var inst_46668 = (state_46700[(9)]);
var inst_46668__$1 = (state_46700[(2)]);
var inst_46669 = (inst_46668__$1 == null);
var inst_46670 = cljs.core.not(inst_46669);
var state_46700__$1 = (function (){var statearr_46711 = state_46700;
(statearr_46711[(9)] = inst_46668__$1);

return statearr_46711;
})();
if(inst_46670){
var statearr_46712_49055 = state_46700__$1;
(statearr_46712_49055[(1)] = (5));

} else {
var statearr_46713_49056 = state_46700__$1;
(statearr_46713_49056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (15))){
var inst_46690 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46715_49057 = state_46700__$1;
(statearr_46715_49057[(2)] = inst_46690);

(statearr_46715_49057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (13))){
var state_46700__$1 = state_46700;
var statearr_46723_49058 = state_46700__$1;
(statearr_46723_49058[(2)] = null);

(statearr_46723_49058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (6))){
var inst_46665 = (state_46700[(7)]);
var inst_46686 = (inst_46665 > (0));
var state_46700__$1 = state_46700;
if(cljs.core.truth_(inst_46686)){
var statearr_46724_49060 = state_46700__$1;
(statearr_46724_49060[(1)] = (12));

} else {
var statearr_46725_49061 = state_46700__$1;
(statearr_46725_49061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (3))){
var inst_46698 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46700__$1,inst_46698);
} else {
if((state_val_46701 === (12))){
var inst_46664 = (state_46700[(8)]);
var inst_46688 = cljs.core.vec(inst_46664);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46700__$1,(15),out,inst_46688);
} else {
if((state_val_46701 === (2))){
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46700__$1,(4),ch);
} else {
if((state_val_46701 === (11))){
var inst_46680 = (state_46700[(2)]);
var inst_46681 = (new Array(n));
var inst_46664 = inst_46681;
var inst_46665 = (0);
var state_46700__$1 = (function (){var statearr_46727 = state_46700;
(statearr_46727[(7)] = inst_46665);

(statearr_46727[(10)] = inst_46680);

(statearr_46727[(8)] = inst_46664);

return statearr_46727;
})();
var statearr_46729_49063 = state_46700__$1;
(statearr_46729_49063[(2)] = null);

(statearr_46729_49063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (9))){
var inst_46664 = (state_46700[(8)]);
var inst_46678 = cljs.core.vec(inst_46664);
var state_46700__$1 = state_46700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46700__$1,(11),out,inst_46678);
} else {
if((state_val_46701 === (5))){
var inst_46673 = (state_46700[(11)]);
var inst_46665 = (state_46700[(7)]);
var inst_46668 = (state_46700[(9)]);
var inst_46664 = (state_46700[(8)]);
var inst_46672 = (inst_46664[inst_46665] = inst_46668);
var inst_46673__$1 = (inst_46665 + (1));
var inst_46674 = (inst_46673__$1 < n);
var state_46700__$1 = (function (){var statearr_46731 = state_46700;
(statearr_46731[(11)] = inst_46673__$1);

(statearr_46731[(12)] = inst_46672);

return statearr_46731;
})();
if(cljs.core.truth_(inst_46674)){
var statearr_46732_49065 = state_46700__$1;
(statearr_46732_49065[(1)] = (8));

} else {
var statearr_46733_49066 = state_46700__$1;
(statearr_46733_49066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (14))){
var inst_46693 = (state_46700[(2)]);
var inst_46694 = cljs.core.async.close_BANG_(out);
var state_46700__$1 = (function (){var statearr_46739 = state_46700;
(statearr_46739[(13)] = inst_46693);

return statearr_46739;
})();
var statearr_46740_49067 = state_46700__$1;
(statearr_46740_49067[(2)] = inst_46694);

(statearr_46740_49067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (10))){
var inst_46684 = (state_46700[(2)]);
var state_46700__$1 = state_46700;
var statearr_46741_49068 = state_46700__$1;
(statearr_46741_49068[(2)] = inst_46684);

(statearr_46741_49068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46701 === (8))){
var inst_46673 = (state_46700[(11)]);
var inst_46664 = (state_46700[(8)]);
var tmp46735 = inst_46664;
var inst_46664__$1 = tmp46735;
var inst_46665 = inst_46673;
var state_46700__$1 = (function (){var statearr_46742 = state_46700;
(statearr_46742[(7)] = inst_46665);

(statearr_46742[(8)] = inst_46664__$1);

return statearr_46742;
})();
var statearr_46745_49069 = state_46700__$1;
(statearr_46745_49069[(2)] = null);

(statearr_46745_49069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46746[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46746[(1)] = (1));

return statearr_46746;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46700){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46700);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46747){var ex__44046__auto__ = e46747;
var statearr_46758_49185 = state_46700;
(statearr_46758_49185[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46700[(4)]))){
var statearr_46759_49186 = state_46700;
(statearr_46759_49186[(1)] = cljs.core.first((state_46700[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49187 = state_46700;
state_46700 = G__49187;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46760 = f__44163__auto__();
(statearr_46760[(6)] = c__44162__auto___49047);

return statearr_46760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46765 = arguments.length;
switch (G__46765) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44162__auto___49189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44163__auto__ = (function (){var switch__44042__auto__ = (function (state_46814){
var state_val_46815 = (state_46814[(1)]);
if((state_val_46815 === (7))){
var inst_46810 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
var statearr_46816_49190 = state_46814__$1;
(statearr_46816_49190[(2)] = inst_46810);

(statearr_46816_49190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (1))){
var inst_46771 = [];
var inst_46772 = inst_46771;
var inst_46773 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46814__$1 = (function (){var statearr_46821 = state_46814;
(statearr_46821[(7)] = inst_46773);

(statearr_46821[(8)] = inst_46772);

return statearr_46821;
})();
var statearr_46822_49191 = state_46814__$1;
(statearr_46822_49191[(2)] = null);

(statearr_46822_49191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (4))){
var inst_46776 = (state_46814[(9)]);
var inst_46776__$1 = (state_46814[(2)]);
var inst_46779 = (inst_46776__$1 == null);
var inst_46780 = cljs.core.not(inst_46779);
var state_46814__$1 = (function (){var statearr_46823 = state_46814;
(statearr_46823[(9)] = inst_46776__$1);

return statearr_46823;
})();
if(inst_46780){
var statearr_46824_49192 = state_46814__$1;
(statearr_46824_49192[(1)] = (5));

} else {
var statearr_46825_49193 = state_46814__$1;
(statearr_46825_49193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (15))){
var inst_46804 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
var statearr_46835_49194 = state_46814__$1;
(statearr_46835_49194[(2)] = inst_46804);

(statearr_46835_49194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (13))){
var state_46814__$1 = state_46814;
var statearr_46837_49196 = state_46814__$1;
(statearr_46837_49196[(2)] = null);

(statearr_46837_49196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (6))){
var inst_46772 = (state_46814[(8)]);
var inst_46799 = inst_46772.length;
var inst_46800 = (inst_46799 > (0));
var state_46814__$1 = state_46814;
if(cljs.core.truth_(inst_46800)){
var statearr_46843_49198 = state_46814__$1;
(statearr_46843_49198[(1)] = (12));

} else {
var statearr_46844_49199 = state_46814__$1;
(statearr_46844_49199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (3))){
var inst_46812 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46814__$1,inst_46812);
} else {
if((state_val_46815 === (12))){
var inst_46772 = (state_46814[(8)]);
var inst_46802 = cljs.core.vec(inst_46772);
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46814__$1,(15),out,inst_46802);
} else {
if((state_val_46815 === (2))){
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46814__$1,(4),ch);
} else {
if((state_val_46815 === (11))){
var inst_46782 = (state_46814[(10)]);
var inst_46776 = (state_46814[(9)]);
var inst_46792 = (state_46814[(2)]);
var inst_46793 = [];
var inst_46794 = inst_46793.push(inst_46776);
var inst_46772 = inst_46793;
var inst_46773 = inst_46782;
var state_46814__$1 = (function (){var statearr_46845 = state_46814;
(statearr_46845[(11)] = inst_46794);

(statearr_46845[(7)] = inst_46773);

(statearr_46845[(12)] = inst_46792);

(statearr_46845[(8)] = inst_46772);

return statearr_46845;
})();
var statearr_46846_49200 = state_46814__$1;
(statearr_46846_49200[(2)] = null);

(statearr_46846_49200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (9))){
var inst_46772 = (state_46814[(8)]);
var inst_46790 = cljs.core.vec(inst_46772);
var state_46814__$1 = state_46814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46814__$1,(11),out,inst_46790);
} else {
if((state_val_46815 === (5))){
var inst_46782 = (state_46814[(10)]);
var inst_46773 = (state_46814[(7)]);
var inst_46776 = (state_46814[(9)]);
var inst_46782__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46776) : f.call(null,inst_46776));
var inst_46783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46782__$1,inst_46773);
var inst_46784 = cljs.core.keyword_identical_QMARK_(inst_46773,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46785 = ((inst_46783) || (inst_46784));
var state_46814__$1 = (function (){var statearr_46853 = state_46814;
(statearr_46853[(10)] = inst_46782__$1);

return statearr_46853;
})();
if(cljs.core.truth_(inst_46785)){
var statearr_46854_49235 = state_46814__$1;
(statearr_46854_49235[(1)] = (8));

} else {
var statearr_46855_49236 = state_46814__$1;
(statearr_46855_49236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (14))){
var inst_46807 = (state_46814[(2)]);
var inst_46808 = cljs.core.async.close_BANG_(out);
var state_46814__$1 = (function (){var statearr_46861 = state_46814;
(statearr_46861[(13)] = inst_46807);

return statearr_46861;
})();
var statearr_46862_49237 = state_46814__$1;
(statearr_46862_49237[(2)] = inst_46808);

(statearr_46862_49237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (10))){
var inst_46797 = (state_46814[(2)]);
var state_46814__$1 = state_46814;
var statearr_46863_49238 = state_46814__$1;
(statearr_46863_49238[(2)] = inst_46797);

(statearr_46863_49238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46815 === (8))){
var inst_46782 = (state_46814[(10)]);
var inst_46776 = (state_46814[(9)]);
var inst_46772 = (state_46814[(8)]);
var inst_46787 = inst_46772.push(inst_46776);
var tmp46856 = inst_46772;
var inst_46772__$1 = tmp46856;
var inst_46773 = inst_46782;
var state_46814__$1 = (function (){var statearr_46864 = state_46814;
(statearr_46864[(7)] = inst_46773);

(statearr_46864[(14)] = inst_46787);

(statearr_46864[(8)] = inst_46772__$1);

return statearr_46864;
})();
var statearr_46865_49240 = state_46814__$1;
(statearr_46865_49240[(2)] = null);

(statearr_46865_49240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44043__auto__ = null;
var cljs$core$async$state_machine__44043__auto____0 = (function (){
var statearr_46866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46866[(0)] = cljs$core$async$state_machine__44043__auto__);

(statearr_46866[(1)] = (1));

return statearr_46866;
});
var cljs$core$async$state_machine__44043__auto____1 = (function (state_46814){
while(true){
var ret_value__44044__auto__ = (function (){try{while(true){
var result__44045__auto__ = switch__44042__auto__(state_46814);
if(cljs.core.keyword_identical_QMARK_(result__44045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44045__auto__;
}
break;
}
}catch (e46867){var ex__44046__auto__ = e46867;
var statearr_46868_49241 = state_46814;
(statearr_46868_49241[(2)] = ex__44046__auto__);


if(cljs.core.seq((state_46814[(4)]))){
var statearr_46869_49243 = state_46814;
(statearr_46869_49243[(1)] = cljs.core.first((state_46814[(4)])));

} else {
throw ex__44046__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49247 = state_46814;
state_46814 = G__49247;
continue;
} else {
return ret_value__44044__auto__;
}
break;
}
});
cljs$core$async$state_machine__44043__auto__ = function(state_46814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44043__auto____1.call(this,state_46814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44043__auto____0;
cljs$core$async$state_machine__44043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44043__auto____1;
return cljs$core$async$state_machine__44043__auto__;
})()
})();
var state__44164__auto__ = (function (){var statearr_46876 = f__44163__auto__();
(statearr_46876[(6)] = c__44162__auto___49189);

return statearr_46876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44164__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
