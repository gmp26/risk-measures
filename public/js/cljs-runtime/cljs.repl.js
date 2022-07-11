goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50412){
var map__50413 = p__50412;
var map__50413__$1 = (((((!((map__50413 == null))))?(((((map__50413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50413):map__50413);
var m = map__50413__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50415_50566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50416_50567 = null;
var count__50417_50568 = (0);
var i__50418_50569 = (0);
while(true){
if((i__50418_50569 < count__50417_50568)){
var f_50570 = chunk__50416_50567.cljs$core$IIndexed$_nth$arity$2(null,i__50418_50569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50570], 0));


var G__50577 = seq__50415_50566;
var G__50578 = chunk__50416_50567;
var G__50579 = count__50417_50568;
var G__50580 = (i__50418_50569 + (1));
seq__50415_50566 = G__50577;
chunk__50416_50567 = G__50578;
count__50417_50568 = G__50579;
i__50418_50569 = G__50580;
continue;
} else {
var temp__5735__auto___50581 = cljs.core.seq(seq__50415_50566);
if(temp__5735__auto___50581){
var seq__50415_50582__$1 = temp__5735__auto___50581;
if(cljs.core.chunked_seq_QMARK_(seq__50415_50582__$1)){
var c__4556__auto___50583 = cljs.core.chunk_first(seq__50415_50582__$1);
var G__50584 = cljs.core.chunk_rest(seq__50415_50582__$1);
var G__50585 = c__4556__auto___50583;
var G__50586 = cljs.core.count(c__4556__auto___50583);
var G__50587 = (0);
seq__50415_50566 = G__50584;
chunk__50416_50567 = G__50585;
count__50417_50568 = G__50586;
i__50418_50569 = G__50587;
continue;
} else {
var f_50588 = cljs.core.first(seq__50415_50582__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50588], 0));


var G__50590 = cljs.core.next(seq__50415_50582__$1);
var G__50591 = null;
var G__50592 = (0);
var G__50593 = (0);
seq__50415_50566 = G__50590;
chunk__50416_50567 = G__50591;
count__50417_50568 = G__50592;
i__50418_50569 = G__50593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50594 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50594], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50594)))?cljs.core.second(arglists_50594):arglists_50594)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50419_50599 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50420_50600 = null;
var count__50421_50601 = (0);
var i__50422_50602 = (0);
while(true){
if((i__50422_50602 < count__50421_50601)){
var vec__50435_50603 = chunk__50420_50600.cljs$core$IIndexed$_nth$arity$2(null,i__50422_50602);
var name_50604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435_50603,(0),null);
var map__50438_50605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50435_50603,(1),null);
var map__50438_50606__$1 = (((((!((map__50438_50605 == null))))?(((((map__50438_50605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50438_50605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50438_50605):map__50438_50605);
var doc_50607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438_50606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438_50606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50604], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50608], 0));

if(cljs.core.truth_(doc_50607)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50607], 0));
} else {
}


var G__50613 = seq__50419_50599;
var G__50614 = chunk__50420_50600;
var G__50615 = count__50421_50601;
var G__50616 = (i__50422_50602 + (1));
seq__50419_50599 = G__50613;
chunk__50420_50600 = G__50614;
count__50421_50601 = G__50615;
i__50422_50602 = G__50616;
continue;
} else {
var temp__5735__auto___50621 = cljs.core.seq(seq__50419_50599);
if(temp__5735__auto___50621){
var seq__50419_50622__$1 = temp__5735__auto___50621;
if(cljs.core.chunked_seq_QMARK_(seq__50419_50622__$1)){
var c__4556__auto___50623 = cljs.core.chunk_first(seq__50419_50622__$1);
var G__50624 = cljs.core.chunk_rest(seq__50419_50622__$1);
var G__50625 = c__4556__auto___50623;
var G__50626 = cljs.core.count(c__4556__auto___50623);
var G__50627 = (0);
seq__50419_50599 = G__50624;
chunk__50420_50600 = G__50625;
count__50421_50601 = G__50626;
i__50422_50602 = G__50627;
continue;
} else {
var vec__50441_50632 = cljs.core.first(seq__50419_50622__$1);
var name_50633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50441_50632,(0),null);
var map__50444_50634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50441_50632,(1),null);
var map__50444_50635__$1 = (((((!((map__50444_50634 == null))))?(((((map__50444_50634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50444_50634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50444_50634):map__50444_50634);
var doc_50636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50444_50635__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50444_50635__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50633], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50637], 0));

if(cljs.core.truth_(doc_50636)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50636], 0));
} else {
}


var G__50638 = cljs.core.next(seq__50419_50622__$1);
var G__50639 = null;
var G__50640 = (0);
var G__50641 = (0);
seq__50419_50599 = G__50638;
chunk__50420_50600 = G__50639;
count__50421_50601 = G__50640;
i__50422_50602 = G__50641;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50447 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50448 = null;
var count__50449 = (0);
var i__50450 = (0);
while(true){
if((i__50450 < count__50449)){
var role = chunk__50448.cljs$core$IIndexed$_nth$arity$2(null,i__50450);
var temp__5735__auto___50643__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50643__$1)){
var spec_50644 = temp__5735__auto___50643__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50644)], 0));
} else {
}


var G__50647 = seq__50447;
var G__50648 = chunk__50448;
var G__50649 = count__50449;
var G__50650 = (i__50450 + (1));
seq__50447 = G__50647;
chunk__50448 = G__50648;
count__50449 = G__50649;
i__50450 = G__50650;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50447);
if(temp__5735__auto____$1){
var seq__50447__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50447__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50447__$1);
var G__50655 = cljs.core.chunk_rest(seq__50447__$1);
var G__50656 = c__4556__auto__;
var G__50657 = cljs.core.count(c__4556__auto__);
var G__50658 = (0);
seq__50447 = G__50655;
chunk__50448 = G__50656;
count__50449 = G__50657;
i__50450 = G__50658;
continue;
} else {
var role = cljs.core.first(seq__50447__$1);
var temp__5735__auto___50660__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50660__$2)){
var spec_50662 = temp__5735__auto___50660__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50662)], 0));
} else {
}


var G__50664 = cljs.core.next(seq__50447__$1);
var G__50665 = null;
var G__50666 = (0);
var G__50667 = (0);
seq__50447 = G__50664;
chunk__50448 = G__50665;
count__50449 = G__50666;
i__50450 = G__50667;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50672 = cljs.core.ex_cause(t);
via = G__50671;
t = G__50672;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50453 = datafied_throwable;
var map__50453__$1 = (((((!((map__50453 == null))))?(((((map__50453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50453):map__50453);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50453__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50453__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50453__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50454 = cljs.core.last(via);
var map__50454__$1 = (((((!((map__50454 == null))))?(((((map__50454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50454):map__50454);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50455 = data;
var map__50455__$1 = (((((!((map__50455 == null))))?(((((map__50455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50455):map__50455);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50456 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50456__$1 = (((((!((map__50456 == null))))?(((((map__50456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50456):map__50456);
var top_data = map__50456__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50467 = phase;
var G__50467__$1 = (((G__50467 instanceof cljs.core.Keyword))?G__50467.fqn:null);
switch (G__50467__$1) {
case "read-source":
var map__50469 = data;
var map__50469__$1 = (((((!((map__50469 == null))))?(((((map__50469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50469):map__50469);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50469__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50469__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50472 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50472__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50472,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50472);
var G__50472__$2 = (cljs.core.truth_((function (){var fexpr__50473 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50473.cljs$core$IFn$_invoke$arity$1 ? fexpr__50473.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50473.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50472__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50472__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50472__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50476 = top_data;
var G__50476__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50476,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50476);
var G__50476__$2 = (cljs.core.truth_((function (){var fexpr__50478 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50478.cljs$core$IFn$_invoke$arity$1 ? fexpr__50478.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50478.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50476__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50476__$1);
var G__50476__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50476__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50476__$2);
var G__50476__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50476__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50476__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50476__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50476__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50481 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50481,(3),null);
var G__50484 = top_data;
var G__50484__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50484,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50484);
var G__50484__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50484__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50484__$1);
var G__50484__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50484__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50484__$2);
var G__50484__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50484__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50484__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50484__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50484__$4;
}

break;
case "execution":
var vec__50489 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50452_SHARP_){
var or__4126__auto__ = (p1__50452_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50494 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50494.cljs$core$IFn$_invoke$arity$1 ? fexpr__50494.cljs$core$IFn$_invoke$arity$1(p1__50452_SHARP_) : fexpr__50494.call(null,p1__50452_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50495 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50495__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50495,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50495);
var G__50495__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50495__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50495__$1);
var G__50495__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50495__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50495__$2);
var G__50495__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50495__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50495__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50467__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50498){
var map__50499 = p__50498;
var map__50499__$1 = (((((!((map__50499 == null))))?(((((map__50499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50499):map__50499);
var triage_data = map__50499__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50506 = phase;
var G__50506__$1 = (((G__50506 instanceof cljs.core.Keyword))?G__50506.fqn:null);
switch (G__50506__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50510 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50511 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50512 = loc;
var G__50513 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50516_50717 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50517_50718 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50518_50719 = true;
var _STAR_print_fn_STAR__temp_val__50519_50720 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50518_50719);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50519_50720);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50496_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50496_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50517_50718);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50516_50717);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50510,G__50511,G__50512,G__50513) : format.call(null,G__50510,G__50511,G__50512,G__50513));

break;
case "macroexpansion":
var G__50523 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50524 = cause_type;
var G__50525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50526 = loc;
var G__50527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50523,G__50524,G__50525,G__50526,G__50527) : format.call(null,G__50523,G__50524,G__50525,G__50526,G__50527));

break;
case "compile-syntax-check":
var G__50528 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50529 = cause_type;
var G__50530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50531 = loc;
var G__50532 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50528,G__50529,G__50530,G__50531,G__50532) : format.call(null,G__50528,G__50529,G__50530,G__50531,G__50532));

break;
case "compilation":
var G__50537 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50538 = cause_type;
var G__50539 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50540 = loc;
var G__50541 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50537,G__50538,G__50539,G__50540,G__50541) : format.call(null,G__50537,G__50538,G__50539,G__50540,G__50541));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50542 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50543 = symbol;
var G__50544 = loc;
var G__50545 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50550_50729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50551_50730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50552_50731 = true;
var _STAR_print_fn_STAR__temp_val__50553_50732 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50552_50731);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50553_50732);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50497_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50497_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50551_50730);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50550_50729);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50542,G__50543,G__50544,G__50545) : format.call(null,G__50542,G__50543,G__50544,G__50545));
} else {
var G__50558 = "Execution error%s at %s(%s).\n%s\n";
var G__50559 = cause_type;
var G__50560 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50561 = loc;
var G__50562 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50558,G__50559,G__50560,G__50561,G__50562) : format.call(null,G__50558,G__50559,G__50560,G__50561,G__50562));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50506__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
