var _tmr=_tmr||[];
(function(){function w(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function F(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function ca(a){for(var b="",c,d=0;d<a;d++)c=16*Math.random()|0,b+=c.toString(16);return b}function t(){return(new Date).getTime()}function V(a){return(a=f.cookie.match(RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):null}
function G(a,b,c){c=c||{};var d=c.expires;"number"===typeof c.expires&&(d=new Date,d.setTime(d.getTime()+c.expires));d&&d.toUTCString&&(d=d.toUTCString());c.expires=d;a=a+"="+encodeURIComponent(b);for(var e in c)if((b=c[e])||0===b)a+="; "+e,!0!==b&&(a+="="+b);f.cookie=a}function wa(){var a="tmr"+(""+Math.random()).slice(2);try{return C=g.localStorage||null,C.setItem(a,a),C.removeItem(a),!0}catch(b){return C=null,!1}}function xa(){if(!K)return null;for(var a=u.hostname.split(".").reverse(),b,c=1,d=
a.length;c<d;c++){b=a[0];for(var e=1;e<=c;e++)b=a[e]+"."+b;var e=""+t(),f={domain:b,path:"/",expires:3E5};try{G("tmr_tcdhn",e,f);var g=V("tmr_tcdhn"),f=f||{};f.expires=-1;G("tmr_tcdhn","",f);if(g===e)return b}catch(h){n&&console.log("Error while test cookie for",b,h)}}return null}function L(a,b){K&&G(a,b,da);if(W)try{C.setItem(a,b)}catch(c){}}function X(a){var b;if(!(b=K?V(a):null)){var c;if(W)a:{try{c=C.getItem(a);break a}catch(d){}c=null}else c=null;b=c}return b}function ea(a){var b=";e="+escape("detect");
m(r(a,!0,!1,!1)+b)}function l(){}function M(a){a&&"object"===typeof a&&(!z&&"id"in a)&&(z=a.id)}function ya(a){return(a=!A?void 0:A[a])&&Y?a-Y:void 0}function fa(){if(A){for(var a=0,b="domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),c=0;c<b.length;c++){var d=!A?void 0:A[b[c]];if(0<d&&(d<a||0==a))a=d}return a?a:void 0}}function m(a){var b="https://top-fwz1.mail.ru"+a;"function"===typeof x.sendBeacon&&!0===x.sendBeacon(b)||(a=new Image,
a.src=b)}function N(a,b,c){if(!(b&&"object"===typeof b))return n&&console.warn("[TopMailRu]: Invalid event of "+a),null;var d={name:a,title:c.title||null};"id"in c&&!1!==c.id&&(d.id="id"in b&&b.id,!0!==c.id&&(d.id=d.id||c.id));if(n){var e=ga(b,{params:c.required,fn:c.fn});if(e.missed.length)return console.warn("[TopMailRu]"+(d.id?"["+d.id+"]":"")+": Unspecified "+(1<e.missed.length&&e.missed.slice(0,-1).join(", ")+" and "||"")+e.missed.slice(-1)+" in "+a),null;var f=ga(b,{params:c.optional,fn:c.fn}),
g=[].concat(e.values).concat(f.values),e=[].concat(e.missed).concat(f.missed);c.value&&(b="value"in b&&b.value,!0!==c.value&&(b=b||c.value),b?g.push("value: "+b):e.push("value"));d.value=g.length?"{ "+g.join(", ")+" }":"";d.empty=e.length?"("+(1<e.length?e.slice(0,-1).join(", ")+" and "+e.slice(-1)+" are":e.slice(-1)+" is")+" empty)":""}return"id"in c&&!1!==c.id&&!d.id?(n&&console.warn("[TopMailRu]: Undefined counter ID of "+a+" "+d.value),null):d}function ga(a,b){var c=[],d=[],e,f,g;if(b.params)for(e in b.params)if(b.params.hasOwnProperty(e)&&
!1!==b.params[e])if(f=e in a&&a[e],!0!==b.params[e]&&(f=f||b.params[e]),f)try{g=b.fn?b.fn:null,c.push(e+': "'+(g?g(e,f):f)+'"')}catch(h){}else d&&d.push(e);return{values:c,missed:d}}function O(a){console.info("[TopMailRu]["+a.id+"]: "+(a.title||a.name)+" "+a.value+" "+a.empty)}function r(a,b,c,d){L(Z,++D);var e="id"in a?a.id:z,h="url"in a?a.url:u.href,l="referrer"in a?a.referrer:f.referrer,n="title"in a?a.title:f.title,k;k=$;null===k&&(k=za());k=null!==k?k?1:0:null;var q="userid"in a?a.userid:y||
0===y?y:void 0,m;m=[];z&&e!==z&&m.push("sec");"dataLayer"in g&&m.push("dl");m=m.join(",");var s=g.screen,r;r=(new Date).getTimezoneOffset();var w="";if(g.Intl)try{w=g.Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(B){}r=r+"/"+w;a.start=fa();b=(b?"/tracker":"/counter")+"?js=13"+(e?";id="+escape(e):"")+(h?";u="+escape(h):"")+(l?";r="+escape(l):"")+(a.start?";st="+escape(a.start):"")+("gender"in a?";gender="+escape(a.gender):"")+("age"in a?";age="+escape(a.age):"")+("pid"in a?";pid="+escape(a.pid):
"")+(void 0!==q?";userid="+escape(q):"")+(d&&n?";title="+encodeURIComponent(n):"")+(s?";s="+s.width+"*"+s.height:"")+";vp=";e=d=0;f.documentElement&&(f.documentElement.clientWidth||f.documentElement.clientHeight)?(d=f.documentElement.clientWidth,e=f.documentElement.clientHeight):"number"==typeof g.innerWidth&&(d=g.innerWidth,e=g.innerHeight);b=b+(""+d+"*"+e)+";touch="+Aa+";hds="+Ba+";flash=";if(null===H)if(H="",x.plugins&&x.plugins["Shockwave Flash"])H=x.plugins["Shockwave Flash"].description.split(" ")[2];
else if(g.ActiveXObject)try{var p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),p=p.GetVariable("$version"),p=p.split(" ")[1].split(",");H=p[0]+"."+p[1]}catch(C){}p=b+H+";sid="+ha+";ver="+ia+";tz="+encodeURIComponent(r);if(c){if(!A||!aa)c="";else{c=[];c.push(aa.type);c.push(aa.redirectCount);c.push(Y);for(b=0;b<ja.length;b++)c.push(ya(ja[b]));c=c.join("/")}c=";nt="+c}else c="";c=p+c+("device"in a?";device="+escape(a.device):"")+";ni=";if(!x||!x.connection)p="";else{p=x.connection;b=[];for(e=
0;e<ka.length;e++){d=p[ka[e]];if(void 0!==d)switch(d){case !0:d=1;break;case !1:d=0;break;default:d=(""+d).replace(/\//g,"_")}b.push(d)}p=b.join("/")}c+=p;var v;if("params"in a){p=escape;if(a=a.params)if(b=typeof a,"number"===b||"boolean"===b||"string"===b||a.nodeType||a===a.window)v="";else{d=[];for(v in a)if(a.hasOwnProperty(v)){e=a[v];b=typeof e;if("string"===b)e='"'+e.replace(/[\"\']/g,"\\$&")+'"';else if(!("number"===b||"boolean"===b))continue;d.push('"'+v+'":'+e)}v=!d.length?"":"{"+d.join(",")+
"}"}else v="";v=";params="+p(v)}else v="";return c+v+(null!==k?";detect="+k:"")+(K||W?";lvid="+escape([I,t(),D,E].join(":")):"")+(m?";opts="+escape(m):"")+";_="+Math.random()}function la(a){a=";e="+escape("PVT/"+a);for(var b=0;b<k.length;b++)m(r(k[b],!0,!1,!0)+a)}function Ca(){$=!0;ma(1);if(!na&&!J){J=!0;for(var a=0;a<k.length;a++)ea(k[a])}}function Da(){ma(0);$=!1}function za(){var a=V(oa);if(null===a)return null;a=a.split("|");if(2!==a.length)return null;var b=a[1],b=t()-b;if(0>b||b>pa)return null;
a=parseInt(a[0],10);return isNaN(a)?null:a}function ma(a){var b=t();a=[a,b].join("|");G(oa,a,{path:"/",expires:pa})}function P(){f.addEventListener?(F(f,"DOMContentLoaded",P),_tmr.onready()):f.attachEvent&&"complete"===f.readyState&&(F(f,"readystatechange",P),_tmr.onready())}function qa(){F(g,"load",qa);_tmr.onready();_tmr.onload()}function Q(){F(g,"unload",Q);F(g,"beforeunload",Q);_tmr.unload()}if("[object Array]"===Object.prototype.toString.call(_tmr)){var g=window,x=navigator,f=document,u=location,
q="string"===typeof u.hostname?u.hostname:"",h=-1!=q.search(/(^|\.)odnoklassniki\.ru$/)||-1!=q.search(/(^|\.)ok\.ru$/),s=-1!=q.search(/(^|\.)vk\.com$/),B=-1!=q.search(/(^|\.)lamoda\.ru$/),q=-1!=q.search(/(^|\.)kommersant\.ru$/),Ea="string"===typeof u.search&&-1!=u.search.search(/[?&]rb_clickid=/),n="string"===typeof u.search&&-1!=u.search.search(/[?&]tmr_debug=1(?:&|$)/),ra=h||s||B||q,Fa=!Ea,Ga=h||s,Ha=h||s,sa=h||s,na=!1,K=!(0===u.hostname.search(/^(\d+.)+\d+$/g)||-1!==u.hostname.search(/:/g)),C=
null,W=wa(),da={domain:xa(),path:"/",expires:287712E5};(function(){var a;if(a=f.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)","g"))){for(var b=[],c,d=0,e=a.length;d<e;d++)c=a[d],(c=c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/))&&b.push(c.slice(1));a=b}else a=null;if(a){b=0;for(d=a.length;b<d;b++)e=a[b][0],c=da||{},c.expires=-1,G(e,"",c)}})();var J=!1,$=null,pa=864E5,oa="tmr_detect",Ia=function(){function a(a,c){var d=f.createElement("div");d.setAttribute("class",String.fromCharCode(97,100,118,
98,108,111,99,107,32,97,100,118,101,114,116,98,108,111,99,107,32,97,109,109,98,108,111,99,107,32,98,45,98,97,110,110,101,114,32,98,45,109,101,100,105,97,45,98,97,110,110,101,114,32,112,117,98,95,51,48,48,120,50,53,48,32,112,117,98,95,51,48,48,120,50,53,48,109,32,109,101,100,105,117,109,95,114,101,99,116,97,110,103,108,101,95,51,48,48,95,50,53,48,32,112,117,98,95,55,50,56,120,57,48,32,108,101,97,100,101,114,98,111,97,114,100,95,55,50,56,95,57,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,
101,114,95,49,54,48,95,54,48,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,120,54,48,48,32,116,101,120,116,45,97,100,32,116,101,120,116,65,100,32,116,101,120,116,95,97,100,32,116,101,120,116,95,97,100,115,32,116,101,120,116,45,97,100,115,32,116,101,120,116,45,97,100,45,108,105,110,107,115,32,97,100,95,116,101,120,116,32,97,100,95,116,101,120,116,32,98,97,110,110,101,114,95,116,101,120,116,32,116,101,120,116,45,98,97,110,110,101,114,32,98,45,114,98,32,114,98,45,115,108,
111,116,32,98,45,112,114,111,109,111,45,97,100,32,105,45,98,114,97,110,100,105,110,103,32,98,114,97,110,100,105,110,103,45,112,32,114,98,45,118,105,100,101,111,45,119,105,100,103,101,116,32,98,45,109,105,109,105,99,45,97,100,118,32,112,109,45,116,111,111,108,98,97,114,95,95,98,97,110,110,101,114,32,114,98,95,98,111,100,121,32,115,116,105,99,107,121,45,115,112,114,105,110,103,115,32,97,100,118,95,115,108,111,116,95,49,32,98,97,110,110,101,114,95,50,52,48,32,98,108,111,99,107,95,115,104,97,114,101,
32,97,99,116,105,111,110,45,45,115,104,97,114,101,32,115,104,97,114,101,108,105,115,116,32,106,115,45,98,97,110,110,101,114,32,100,105,114,101,99,116,32,112,99,45,109,105,109,105,99,32,116,103,98,45,98,97,110,110,101,114,32,121,97,100,105,114,101,99,116,32,106,115,45,112,114,111,109,111,45,112,111,112,117,112,32,109,45,115,117,98,115,99,114,105,112,116,105,111,110,32,112,45,116,97,114,103,101,116,32,112,45,100,105,114,101,99,116,104,97,99,107,32,114,98,45,102,108,111,97,116,105,110,103,32,116,114,
103,45,98,45,98,97,110,110,101,114,45,98,108,111,99,107));d.setAttribute("style","position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");d.setAttribute("id","trg-b-banners-1");d.setAttribute("data-view","SlotView.mimic");this.bait=f.body.appendChild(d);this.bait.offsetParent;this.bait.offsetHeight;this.bait.offsetLeft;this.bait.offsetTop;this.bait.offsetWidth;this.bait.clientHeight;this.bait.clientWidth;this.loopNumber=0;
this.fnPositive=a||null;this.fnNegative=c||null;var e=this;setTimeout(function(){e._checkBait.call(e)},1)}a.prototype._checkBait=function(){if(J)this._stop();else{var a=!1;null!==f.body.getAttribute("abp")||null===this.bait.offsetParent||0==this.bait.offsetHeight||0==this.bait.offsetLeft||0==this.bait.offsetTop||0==this.bait.offsetWidth||0==this.bait.clientHeight||0==this.bait.clientWidth?a=!0:void 0!==g.getComputedStyle&&(a=g.getComputedStyle(this.bait,null),a="none"==a.getPropertyValue("display")||
"hidden"==a.getPropertyValue("visibility"));(!0===a||10<=++this.loopNumber)&&this._stop();var c;if(a&&this.fnPositive)try{c=this.fnPositive,c()}catch(d){}else if(!a&&10>this.loopNumber){var e=this;setTimeout(function(){e._checkBait.call(e)},50*this.loopNumber)}else try{c=this.fnNegative,c()}catch(h){}}};a.prototype._stop=function(){try{f.body.removeChild(this.bait)}catch(a){}};return function(b,c){new a(b,c)}}(),ia="60.1.0",ba=0,R=0,ha=ca(16),y=null,S=0,Z="tmr_reqNum",D=X(Z),D=null===D?0:parseInt(D,
10);L(Z,D);var E=X("tmr_lvid"),I=X("tmr_lvidTS");if(null===E||-1===E.search(/^[0-9a-fA-F]+$/))E=ca(32);L("tmr_lvid",E);if(null===I||-1===I.search(/^\d+$/))I=""+t();L("tmr_lvidTS",I);var z=0,k=[],T=[],U=[],Aa="ontouchstart"in g||1<(x.maxTouchPoints||x.msMaxTouchPoints)?"1":"0",Ba=g.devicePixelRatio||0,H=null,h=g.performance||g.mozPerformance||g.msPerformance||g.webkitPerformance||{},A=h.timing||{},aa=h.navigation||{},ja="unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),
Y=!A?void 0:A.navigationStart,ka="downlink downlinkMax effectiveType rtt saveData type".split(" ");l.prototype.pageView=function(a){M(a);var b;if(b=a&&"object"===typeof a)if(b="id"in a)if(b=5>T.length){b:{for(b=0;b<T.length;b++)if(T[b]===a.id){b=!0;break b}b=!1}b=!b}b&&(T.push(a.id),!1!==a.beat&&U.push(a.id),k.push(a),J&&ea(a));if(b=N("pageView",a,{title:"Page view",id:!0,optional:{url:u.href}}))m(r(a,!1,!1,!0)),R=t(),n&&O(b)};l.prototype.reachGoal=function(a){M(a);var b=N("reachGoal",a,{title:"Reach goal",
id:z,value:!0,required:{goal:!0},optional:null,fn:null});if(b&&"goal"in a&&a.goal){var c="";"value"in a&&a.value&&(c=parseInt(a.value)||"");m(r(a,!0,!1,!0)+(";e="+escape("RG:"+c+"/"+a.goal)));n&&O(b)}};l.prototype.itemView=function(a){var b=N("itemView",a,{title:"Item view",id:z,optional:{list:!0,productid:!0,pagetype:!0,totalvalue:!0},fn:function(a,b){return(""+b).replace(/;/g," ")}});if(b){var c=a.list||"",d=a.productid||"",e=a.pagetype||"",f=a.totalvalue||0;(new Image).src="https://ad.mail.ru/retarget/?counter="+
b.id+"&list="+c+"&productid="+d+"&pagetype="+e+"&totalvalue="+f+"&_="+Math.random();c="IV:"+f+"/"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ")+";"+(""+e).replace(/;/g," ");m(r(a,!0,!1,!1)+(";e="+escape(c)));n&&O(b)}};l.prototype.sendEvent=function(a){M(a);var b=N("sendEvent",a,{title:"Send event",id:z,value:!0,required:{category:!0,action:!0},optional:{label:!0},fn:function(a,b){return(""+b).substr(0,300).replace(/;/g," ")}});if(b&&"category"in a&&a.category&&"action"in a&&a.action){var c=
(""+a.category).substr(0,300),d=(""+a.action).substr(0,300),e="";"label"in a&&a.label&&(e=(""+a.label).substr(0,300));var f="";"value"in a&&a.value&&(f=parseInt(a.value)||"");c="CE:"+f+"/"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ")+";"+(""+e).replace(/;/g," ");m(r(a,!0,!1,!1)+(";e="+escape(c)));n&&O(b)}};l.prototype.setUserID=function(a){if(null===a||!1===a||void 0===a)this.deleteUserID();else{var b=typeof a;"number"!==b&&"string"!==b?n&&console.warn("[TopMailRu]: Invalid user ID in setUserID"):
(y=a,n&&console.info("[TopMailRu]: Global user ID = "+y))}};l.prototype.getUserID=function(){return y||0===y?y:void 0};l.prototype.deleteUserID=function(){y=null;n&&console.info("[TopMailRu]: Reset global user ID to null")};l.prototype.getClientID=function(){var a=E;return a||0===a?a:void 0};l.prototype.processEvent=function(a){if(a&&"object"===typeof a)if("type"in a)switch(a.type){case "pageView":this.pageView(a);break;case "reachGoal":this.reachGoal(a);break;case "itemView":this.itemView(a);break;
case "sendEvent":this.sendEvent(a);break;case "setUserID":"userid"in a&&this.setUserID(a.userid);break;case "deleteUserID":this.deleteUserID()}else n&&console.warn("[TopMailRu]: Unspecified push event type");else n&&console.warn("[TopMailRu]: Invalid push event")};l.prototype.push=function(a){for(var b=0,c=arguments.length;b<c;b++)this.processEvent(arguments[b])};var ta=!1;l.prototype.onready=function(){ta||(ta=!0,!na&&!J&&Ia(Ca,Da))};var ua=!1;l.prototype.onload=function(){if(!ua){ua=!0;S=t();if(!Ha&&
0<k.length){for(var a=";e="+escape("RT/load")+";et="+S,b=0;b<k.length;b++)m(r(k[b],!0,!0,!1)+a);R=S}Fa||setTimeout(function(){la(2)},2E3);Ga||setTimeout(function(){la(15)},15E3)}};l.prototype.beat=function(){if(!ra&&ba){var a=t();if(!(12E4<a-ba)){if(12E4<a-R)for(var b=";e="+escape("RT/resend")+";et="+S,c=0;c<k.length;c++)!1!==k[c].beat&&m(r(k[c],!0,!1,!0)+b);else 0<U.length&&m("/tracker?js=13;id="+U[0]+";e="+escape("RT/beat")+";sid="+ha+";ids="+U.join()+";ver="+ia+";_="+Math.random());R=a}}};var va=
!1;l.prototype.unload=function(){if(!va&&(va=!0,!sa)){var a;a=(a=fa())?t()-a:void 0;a=";e="+escape("RT/unload")+";et="+t()+(a?";pvt="+escape(a):"");for(var b=0;b<k.length;b++)m(r(k[b],!0,!1,!1)+a)}};l.prototype.activity=function(a){ba=t()};s=new l;h=0;for(B=_tmr.length;h<B;h++)(q=_tmr[h])&&"object"===typeof q&&M(q);h=0;for(B=_tmr.length;h<B;h++)q=_tmr[h],s.processEvent(q);_tmr=s;if("complete"===f.readyState||"loading"!==f.readyState&&!f.documentElement.doScroll)_tmr.onready();else f.addEventListener?
w(f,"DOMContentLoaded",P):f.attachEvent&&w(f,"readystatechange",P);if("complete"===f.readyState)_tmr.onload();else w(g,"load",qa);sa||(w(g,"unload",Q),w(g,"beforeunload",Q));if(!ra){setInterval(function(){_tmr.beat()},6E4);try{s="scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" ");B=function(a){w(f,a,function(){_tmr.activity(a)})};for(h=0;h<s.length;h++)B(s[h]);w(g,"scroll",function(){_tmr.activity("scallback")})}catch(Ja){}}}})();