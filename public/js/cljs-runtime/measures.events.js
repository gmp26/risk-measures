goog.provide('measures.events');
measures.events.check = (function measures$events$check(errors,key,new_val){
return null;
});
measures.events.baseline_changed = (function measures$events$baseline_changed(new_val){
var fexpr__45944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"baseline","baseline",1151033280),new_val);
return (fexpr__45944.cljs$core$IFn$_invoke$arity$0 ? fexpr__45944.cljs$core$IFn$_invoke$arity$0() : fexpr__45944.call(null));
});
/**
 * Set a value in the database at the given keyword
 */
measures.events.set_db_key = (function measures$events$set_db_key(key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,key,val);
});
/**
 * Change the selected measure and kick of a maths re-render.
 * The re-ender must occur after the HTML has rerendered, so we delay it.
 * 
 * Note: I expected triggering base/render-math from a :component-did-mount/update lifecycle
 * method to work here, but it doesn't. Hence the setTimeout kludge.
 * 
 */
measures.events.select_measure = (function measures$events$select_measure(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-measure","selected-measure",848135654),key);

return setTimeout(measures.base.render_math,(100));
});
measures.events.selected_measure = (function measures$events$selected_measure(){
return new cljs.core.Keyword(null,"selected-measure","selected-measure",848135654).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__45945 = cljs.core.deref(measures.db.state);
return (fexpr__45945.cljs$core$IFn$_invoke$arity$0 ? fexpr__45945.cljs$core$IFn$_invoke$arity$0() : fexpr__45945.call(null));
})());
});
/**
 * Change the selected tool and kick of a maths re-render.
 * The re-ender must occur after the HTML has rerendered, so we delay it.
 * 
 * Note: I expected triggering base/render-math from a :component-did-mount/update lifecycle
 * method to work here, but it doesn't. Hence the setTimeout kludge.
 * 
 */
measures.events.select_tool = (function measures$events$select_tool(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007),key);

return setTimeout(measures.base.render_math,(100));
});
measures.events.selected_tool = (function measures$events$selected_tool(){
return new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__45946 = cljs.core.deref(measures.db.state);
return (fexpr__45946.cljs$core$IFn$_invoke$arity$0 ? fexpr__45946.cljs$core$IFn$_invoke$arity$0() : fexpr__45946.call(null));
})());
});
measures.events.go_home = (function measures$events$go_home(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"page?","page?",644039860),new cljs.core.Keyword(null,"home","home",-74557309));
});
measures.events.go_flash_page = (function measures$events$go_flash_page(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(measures.db.state,cljs.core.assoc,new cljs.core.Keyword(null,"page?","page?",644039860),new cljs.core.Keyword(null,"flash","flash",934660619));
});

//# sourceMappingURL=measures.events.js.map
