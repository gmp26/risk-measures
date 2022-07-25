goog.provide('measures.info');
/**
 * Our precision for any baseline or absolute risk
 */
measures.info.delta = 0.001;
/**
 * Find Relative Risk from baseline and final
 */
measures.info.r_p__GT_RR = (function measures$info$r_p__GT_RR(r,p){
return (p / r);
});
/**
 * Find final from baseline and RR
 */
measures.info.r_RR__GT_p = (function measures$info$r_RR__GT_p(r,RR){
return (r * RR);
});
/**
 * Find PCk from baseline and final
 */
measures.info.r_p__GT_PC = (function measures$info$r_p__GT_PC(r,p){
return ((100) * ((p / r) - (1)));
});
measures.info.r_PC__GT_p = (function measures$info$r_PC__GT_p(r,PC){
var x__4217__auto__ = (r + (r * (PC / (100))));
var y__4218__auto__ = ((1) - measures.info.delta);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
measures.info.r_p__GT_OR = (function measures$info$r_p__GT_OR(r,p){
return ((p / ((1) - p)) / (r / ((1) - r)));
});
measures.info.r_OR__GT_p = (function measures$info$r_OR__GT_p(r,OR){
var x__4217__auto__ = ((1) - ((1) / ((1) + ((OR * r) * ((1) / ((1) - r))))));
var y__4218__auto__ = ((1) - measures.info.delta);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
measures.info.r_p__GT_HR = (function measures$info$r_p__GT_HR(r,p){
return (Math.log(((1) - p)) / Math.log(((1) - r)));
});
measures.info.r_HR__GT_p = (function measures$info$r_HR__GT_p(r,HR){
var x__4217__auto__ = ((1) - Math.pow(((1) - r),HR));
var y__4218__auto__ = ((1) - measures.info.delta);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
measures.info.measures = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"calc-final","calc-final",1060997511),new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"step","step",1288888124)],[(0),measures.info.r_p__GT_RR,new cljs.core.Keyword(null,"RR","RR",-1849589574),measures.info.r_RR__GT_p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"By definition, $$RR = \\frac{p}{r}$$"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"So the final risk is $$p = r \\times RR$$"], null)], null),"RR","Relative Risk",Number.POSITIVE_INFINITY,0.01]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"calc-final","calc-final",1060997511),new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"name","name",1843675177),Number.NEGATIVE_INFINITY,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"step","step",1288888124)],[new cljs.core.Keyword(null,"min","min",444991522),measures.info.r_p__GT_PC,new cljs.core.Keyword(null,"PC","PC",-2096819416),measures.info.r_PC__GT_p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"By definition: $PC$ is the change in risk\n                   expressed as a percentage $$\\frac{p - r}{r} \\times 100 \\ \\%$$"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"So the final risk is $$r + r \\times PC/100$$"], null)], null),"PC",new cljs.core.Keyword(null,"max","max",61366548),"Percentage Change",Number.POSITIVE_INFINITY,(1)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"calc-final","calc-final",1060997511),new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"step","step",1288888124)],[(0),measures.info.r_p__GT_OR,new cljs.core.Keyword(null,"OR","OR",-1220615924),measures.info.r_OR__GT_p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"By definition, $$OR = \\frac{p}{(1-p)} / \\frac{r}{(1-r)}$$"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [measures.base.para,"Solving gives $$p = 1 - \\frac{1}{1+ OR \\frac{r}{(1-r)}}$$"], null)], null),"OR","Odds Ratio",Number.POSITIVE_INFINITY,0.01]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"evaluate","evaluate",1525218437),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"calc-final","calc-final",1060997511),new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"step","step",1288888124)],[(0),measures.info.r_p__GT_HR,new cljs.core.Keyword(null,"HR","HR",1056134531),measures.info.r_HR__GT_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hazard ratios are relevant when looking at survival over time."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"By definition, ","$HR = h_1(t)/h_0(t)$",", where ","$h_1(t), h_0(t)$"," are the hazards in the 'active'"," and baseline groups respectively at time $t$. "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),"Therefore ","$HR = H_1(t)/H_0(t)$",", where $H_1(t), H_0(t)$ are the cumulative hazards. "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),"A standard result is that  $H_1(t) = -\\log S_1(t), H_0(t) = -\\log S_0(t)$, ","where $S_1(t), S_0(t)$ are the survival probabilities up to time $t$."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),"And so $HR = \\log S_1(t)/ \\log S_0(t).$"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-2","p.pt-2",-247770776),"For a specified follow-up time $t$, we have risks"," $p = 1- S_1(t)$, $r = 1- S_0(t)$, and so $$HR = \\frac{\\log (1-p)}{\\log (1-r)}$$"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Rearranging gives  $$p = 1 - (1-r)^{HR}$$"], null)], null),"HR","Hazard Ratio",Number.POSITIVE_INFINITY,0.01])], null);
measures.info.measure_by = (function measures$info$measure_by(key){
return cljs.core.first((function (){var fexpr__48103 = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),measures.info.measures);
return (fexpr__48103.cljs$core$IFn$_invoke$arity$1 ? fexpr__48103.cljs$core$IFn$_invoke$arity$1(key) : fexpr__48103.call(null,key));
})());
});
measures.info.current_measure = (function measures$info$current_measure(){
var selected_measure = new cljs.core.Keyword(null,"selected-measure","selected-measure",848135654).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
return measures.info.measure_by(selected_measure);
});
measures.info.tools = (function measures$info$tools(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"maths","maths",685326344),new cljs.core.Keyword(null,"title","title",636505583),"Show the maths"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"calc-final","calc-final",1060997511),new cljs.core.Keyword(null,"title","title",636505583),"Final risk calculator"], null)], null);
});
measures.info.tool_by = (function measures$info$tool_by(key){
return cljs.core.first((function (){var fexpr__48104 = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),measures.info.tools());
return (fexpr__48104.cljs$core$IFn$_invoke$arity$1 ? fexpr__48104.cljs$core$IFn$_invoke$arity$1(key) : fexpr__48104.call(null,key));
})());
});
measures.info.current_tool = (function measures$info$current_tool(){
var selected_tool = new cljs.core.Keyword(null,"selected-tool","selected-tool",-136917007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(measures.db.state));
return measures.info.tool_by(selected_tool);
});

//# sourceMappingURL=measures.info.js.map
