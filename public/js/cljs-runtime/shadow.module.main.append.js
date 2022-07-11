
shadow.cljs.devtools.client.env.module_loaded('main');

try { measures.app.init(); } catch (e) { console.error("An error occurred when calling (measures.app/init)"); throw(e); }