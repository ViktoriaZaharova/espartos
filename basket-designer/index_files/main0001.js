(function(e){if(!e.BX){e.BX={}}if(!e.BX.Main){e.BX.Main={}}else if(e.BX.Main.Date){return}var t=e.BX;t.Main.Date={AM_PM_MODE:{UPPER:1,LOWER:2,NONE:false},format:function(e,t,_,n){var a=this;var D=r.isDate(t)?new Date(t.getTime()):r.isNumber(t)?new Date(t*1e3):new Date;var i=r.isDate(_)?new Date(_.getTime()):r.isNumber(_)?new Date(_*1e3):new Date;var s=!!n;if(r.isArray(e))return g(e,D,i,s);else if(!r.isNotEmptyString(e))return"";var o=(e.match(/{{([^{}]*)}}/g)||[]).map(function(e){return(e.match(/[^{}]+/)||[""])[0]});if(o.length>0){o.forEach(function(t,r){e=e.replace("{{"+t+"}}","{{"+r+"}}")})}var M=/\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|sshort|ishort|Hshort|dshort|mhort|Yshort|yesterday|today|tommorow|tomorrow|[a-z])/gi;var u={d:function(){return r.strPadLeft(c(D).toString(),2,"0")},D:function(){return a._getMessage("DOW_"+H(D))},j:function(){return c(D)},l:function(){return a._getMessage("DAY_OF_WEEK_"+H(D))},N:function(){return H(D)||7},S:function(){if(c(D)%10==1&&c(D)!=11)return"st";else if(c(D)%10==2&&c(D)!=12)return"nd";else if(c(D)%10==3&&c(D)!=13)return"rd";else return"th"},w:function(){return H(D)},z:function(){var e=new Date(F(D),0,1);var t=new Date(F(D),T(D),c(D));return Math.ceil((t-e)/(24*3600*1e3))},W:function(){var e=new Date(D.getTime());var t=(H(D)+6)%7;R(e,c(e)-t+3);var _=e.getTime();S(e,0,1);if(H(e)!=4)S(e,0,1+(4-H(e)+7)%7);var n=1+Math.ceil((_-e)/(7*24*3600*1e3));return r.strPadLeft(n.toString(),2,"0")},F:function(){return a._getMessage("MONTH_"+(T(D)+1)+"_S")},f:function(){return a._getMessage("MONTH_"+(T(D)+1))},m:function(){return r.strPadLeft((T(D)+1).toString(),2,"0")},M:function(){return a._getMessage("MON_"+(T(D)+1))},n:function(){return T(D)+1},t:function(){var e=s?new Date(Date.UTC(F(D),T(D)+1,0)):new Date(F(D),T(D)+1,0);return c(e)},L:function(){var e=F(D);return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=new Date(D.getTime());R(e,c(e)-(H(D)+6)%7+3);return F(e)},Y:function(){return F(D)},y:function(){return F(D).toString().slice(2)},a:function(){return E(D)>11?"pm":"am"},A:function(){return E(D)>11?"PM":"AM"},B:function(){var e=(D.getUTCHours()+1)%24+D.getUTCMinutes()/60+D.getUTCSeconds()/3600;return r.strPadLeft(Math.floor(e*1e3/24).toString(),3,"0")},g:function(){return E(D)%12||12},G:function(){return E(D)},h:function(){return r.strPadLeft((E(D)%12||12).toString(),2,"0")},H:function(){return r.strPadLeft(E(D).toString(),2,"0")},i:function(){return r.strPadLeft(l(D).toString(),2,"0")},s:function(){return r.strPadLeft(A(D).toString(),2,"0")},u:function(){return r.strPadLeft((m(D)*1e3).toString(),6,"0")},e:function(){if(s)return"UTC";return""},I:function(){if(s)return 0;var e=new Date(F(D),0,1);var t=Date.UTC(F(D),0,1);var r=new Date(F(D),6,0);var _=Date.UTC(F(D),6,0);return 0+(e-t!==r-_)},O:function(){if(s)return"+0000";var e=D.getTimezoneOffset();var t=Math.abs(e);return(e>0?"-":"+")+r.strPadLeft((Math.floor(t/60)*100+t%60).toString(),4,"0")},P:function(){if(s)return"+00:00";var e=this.O();return e.substr(0,3)+":"+e.substr(3)},Z:function(){if(s)return 0;return-D.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(M,h)},r:function(){return"D, d M Y H:i:s O".replace(M,h)},U:function(){return Math.floor(D.getTime()/1e3)},sago:function(){return d(N((i-D)/1e3),{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"})},sdiff:function(){return d(N((i-D)/1e3),{0:"FD_SECOND_DIFF_0",1:"FD_SECOND_DIFF_1","10_20":"FD_SECOND_DIFF_10_20",MOD_1:"FD_SECOND_DIFF_MOD_1",MOD_2_4:"FD_SECOND_DIFF_MOD_2_4",MOD_OTHER:"FD_SECOND_DIFF_MOD_OTHER"})},sshort:function(){return a._getMessage("FD_SECOND_SHORT").replace(/#VALUE#/g,N((i-D)/1e3))},iago:function(){return d(N((i-D)/60/1e3),{0:"FD_MINUTE_AGO_0",1:"FD_MINUTE_AGO_1","10_20":"FD_MINUTE_AGO_10_20",MOD_1:"FD_MINUTE_AGO_MOD_1",MOD_2_4:"FD_MINUTE_AGO_MOD_2_4",MOD_OTHER:"FD_MINUTE_AGO_MOD_OTHER"})},idiff:function(){return d(N((i-D)/60/1e3),{0:"FD_MINUTE_DIFF_0",1:"FD_MINUTE_DIFF_1","10_20":"FD_MINUTE_DIFF_10_20",MOD_1:"FD_MINUTE_DIFF_MOD_1",MOD_2_4:"FD_MINUTE_DIFF_MOD_2_4",MOD_OTHER:"FD_MINUTE_DIFF_MOD_OTHER"})},isago:function(){var e=N((i-D)/60/1e3);var t=d(e,{0:"FD_MINUTE_0",1:"FD_MINUTE_1","10_20":"FD_MINUTE_10_20",MOD_1:"FD_MINUTE_MOD_1",MOD_2_4:"FD_MINUTE_MOD_2_4",MOD_OTHER:"FD_MINUTE_MOD_OTHER"});t+=" ";var r=N((i-D)/1e3)-e*60;t+=d(r,{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"});return t},ishort:function(){return a._getMessage("FD_MINUTE_SHORT").replace(/#VALUE#/g,N((i-D)/60/1e3))},Hago:function(){return d(N((i-D)/60/60/1e3),{0:"FD_HOUR_AGO_0",1:"FD_HOUR_AGO_1","10_20":"FD_HOUR_AGO_10_20",MOD_1:"FD_HOUR_AGO_MOD_1",MOD_2_4:"FD_HOUR_AGO_MOD_2_4",MOD_OTHER:"FD_HOUR_AGO_MOD_OTHER"})},Hdiff:function(){return d(N((i-D)/60/60/1e3),{0:"FD_HOUR_DIFF_0",1:"FD_HOUR_DIFF_1","10_20":"FD_HOUR_DIFF_10_20",MOD_1:"FD_HOUR_DIFF_MOD_1",MOD_2_4:"FD_HOUR_DIFF_MOD_2_4",MOD_OTHER:"FD_HOUR_DIFF_MOD_OTHER"})},Hshort:function(){return a._getMessage("FD_HOUR_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/1e3))},yesterday:function(){return a._getMessage("FD_YESTERDAY")},today:function(){return a._getMessage("FD_TODAY")},tommorow:function(){return a._getMessage("FD_TOMORROW")},tomorrow:function(){return a._getMessage("FD_TOMORROW")},dago:function(){return d(N((i-D)/60/60/24/1e3),{0:"FD_DAY_AGO_0",1:"FD_DAY_AGO_1","10_20":"FD_DAY_AGO_10_20",MOD_1:"FD_DAY_AGO_MOD_1",MOD_2_4:"FD_DAY_AGO_MOD_2_4",MOD_OTHER:"FD_DAY_AGO_MOD_OTHER"})},ddiff:function(){return d(N((i-D)/60/60/24/1e3),{0:"FD_DAY_DIFF_0",1:"FD_DAY_DIFF_1","10_20":"FD_DAY_DIFF_10_20",MOD_1:"FD_DAY_DIFF_MOD_1",MOD_2_4:"FD_DAY_DIFF_MOD_2_4",MOD_OTHER:"FD_DAY_DIFF_MOD_OTHER"})},dshort:function(){return a._getMessage("FD_DAY_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/24/1e3))},mago:function(){return d(N((i-D)/60/60/24/31/1e3),{0:"FD_MONTH_AGO_0",1:"FD_MONTH_AGO_1","10_20":"FD_MONTH_AGO_10_20",MOD_1:"FD_MONTH_AGO_MOD_1",MOD_2_4:"FD_MONTH_AGO_MOD_2_4",MOD_OTHER:"FD_MONTH_AGO_MOD_OTHER"})},mdiff:function(){return d(N((i-D)/60/60/24/31/1e3),{0:"FD_MONTH_DIFF_0",1:"FD_MONTH_DIFF_1","10_20":"FD_MONTH_DIFF_10_20",MOD_1:"FD_MONTH_DIFF_MOD_1",MOD_2_4:"FD_MONTH_DIFF_MOD_2_4",MOD_OTHER:"FD_MONTH_DIFF_MOD_OTHER"})},mshort:function(){return a._getMessage("FD_MONTH_SHORT").replace(/#VALUE#/g,N((i-D)/60/60/24/31/1e3))},Yago:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_AGO_0",1:"FD_YEARS_AGO_1","10_20":"FD_YEARS_AGO_10_20",MOD_1:"FD_YEARS_AGO_MOD_1",MOD_2_4:"FD_YEARS_AGO_MOD_2_4",MOD_OTHER:"FD_YEARS_AGO_MOD_OTHER"})},Ydiff:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_DIFF_0",1:"FD_YEARS_DIFF_1","10_20":"FD_YEARS_DIFF_10_20",MOD_1:"FD_YEARS_DIFF_MOD_1",MOD_2_4:"FD_YEARS_DIFF_MOD_2_4",MOD_OTHER:"FD_YEARS_DIFF_MOD_OTHER"})},Yshort:function(){return d(N((i-D)/60/60/24/365/1e3),{0:"FD_YEARS_SHORT_0",1:"FD_YEARS_SHORT_1","10_20":"FD_YEARS_SHORT_10_20",MOD_1:"FD_YEARS_SHORT_MOD_1",MOD_2_4:"FD_YEARS_SHORT_MOD_2_4",MOD_OTHER:"FD_YEARS_SHORT_MOD_OTHER"})},x:function(){var e=a.isAmPmMode(true);var t=e===a.AM_PM_MODE.LOWER?"g:i a":e===a.AM_PM_MODE.UPPER?"g:i A":"H:i";return a.format([["tomorrow","tomorrow, "+t],["-",a.convertBitrixFormat(a._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s","sago"],["i","iago"],["today","today, "+t],["yesterday","yesterday, "+t],["",a.convertBitrixFormat(a._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")]],D,i,s)},X:function(){var e=a.isAmPmMode(true);var t=e===a.AM_PM_MODE.LOWER?"g:i a":e===a.AM_PM_MODE.UPPER?"g:i A":"H:i";var r=a.format([["tomorrow","tomorrow"],["-",a.convertBitrixFormat(a._getMessage("FORMAT_DATE"))],["today","today"],["yesterday","yesterday"],["",a.convertBitrixFormat(a._getMessage("FORMAT_DATE"))]],D,i,s);var _=a.format([["tomorrow",t],["today",t],["yesterday",t],["",""]],D,i,s);if(_.length>0)return a._getMessage("FD_DAY_AT_TIME").replace(/#DAY#/g,r).replace(/#TIME#/g,_);else return r},Q:function(){var e=N((i-D)/60/60/24/1e3);if(e==0)return a._getMessage("FD_DAY_DIFF_1").replace(/#VALUE#/g,1);else return a.format([["d","ddiff"],["m","mdiff"],["","Ydiff"]],D,i)}};var f=false;if(e[0]&&e[0]=="^"){f=true;e=e.substr(1)}var O=e.replace(M,h);if(f){O=O.replace(/\s*00:00:00\s*/g,"").replace(/(\d\d:\d\d)(:00)/g,"$1").replace(/(\s*00:00\s*)(?!:)/g,"")}if(o.length>0){o.forEach(function(e,t){O=O.replace("{{"+t+"}}",e)})}return O;function g(e,t,r,_){var n=N((r-t)/1e3);for(var D=0;D<e.length;D++){var i=e[D][0];var s=e[D][1];var o=null;if(i=="s"){if(n<60)return a.format(s,t,r,_)}else if((o=/^s(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]&&n>o[2]){return a.format(s,t,r,_)}}else if(n<o[1]){return a.format(s,t,r,_)}}else if(i=="i"){if(n<60*60)return a.format(s,t,r,_)}else if((o=/^i(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*60&&n>o[2]*60){return a.format(s,t,r,_)}}else if(n<o[1]*60){return a.format(s,t,r,_)}}else if(i=="H"){if(n<24*60*60)return a.format(s,t,r,_)}else if((o=/^H(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*60*60&&n>o[2]*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*60*60){return a.format(s,t,r,_)}}else if(i=="d"){if(n<31*24*60*60)return a.format(s,t,r,_)}else if((o=/^d(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*24*60*60&&n>o[2]*24*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*24*60*60){return a.format(s,t,r,_)}}else if(i=="m"){if(n<365*24*60*60)return a.format(s,t,r,_)}else if((o=/^m(\d+)\>?(\d+)?/.exec(i))!=null){if(o[1]&&o[2]){if(n<o[1]*31*24*60*60&&n>o[2]*31*24*60*60){return a.format(s,t,r,_)}}else if(n<o[1]*31*24*60*60){return a.format(s,t,r,_)}}else if(i=="now"){if(t.getTime()==r.getTime()){return a.format(s,t,r,_)}}else if(i=="today"){var M=F(r),u=T(r),f=c(r);var O=_?new Date(Date.UTC(M,u,f,0,0,0,0)):new Date(M,u,f,0,0,0,0);var g=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);if(t>=O&&t<g)return a.format(s,t,r,_)}else if(i=="todayFuture"){var M=F(r),u=T(r),f=c(r);var O=r.getTime();var g=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);if(t>=O&&t<g)return a.format(s,t,r,_)}else if(i=="yesterday"){M=F(r);u=T(r);f=c(r);var E=_?new Date(Date.UTC(M,u,f-1,0,0,0,0)):new Date(M,u,f-1,0,0,0,0);var l=_?new Date(Date.UTC(M,u,f,0,0,0,0)):new Date(M,u,f,0,0,0,0);if(t>=E&&t<l)return a.format(s,t,r,_)}else if(i=="tommorow"||i=="tomorrow"){M=F(r);u=T(r);f=c(r);var A=_?new Date(Date.UTC(M,u,f+1,0,0,0,0)):new Date(M,u,f+1,0,0,0,0);var m=_?new Date(Date.UTC(M,u,f+2,0,0,0,0)):new Date(M,u,f+2,0,0,0,0);if(t>=A&&t<m)return a.format(s,t,r,_)}else if(i=="-"){if(n<0)return a.format(s,t,r,_)}}return e.length>0?a.format(e[e.length-1][1],t,r,_):""}function F(e){return s?e.getUTCFullYear():e.getFullYear()}function c(e){return s?e.getUTCDate():e.getDate()}function T(e){return s?e.getUTCMonth():e.getMonth()}function E(e){return s?e.getUTCHours():e.getHours()}function l(e){return s?e.getUTCMinutes():e.getMinutes()}function A(e){return s?e.getUTCSeconds():e.getSeconds()}function m(e){return s?e.getUTCMilliseconds():e.getMilliseconds()}function H(e){return s?e.getUTCDay():e.getDay()}function R(e,t){return s?e.setUTCDate(t):e.setDate(t)}function S(e,t,r){return s?e.setUTCMonth(t,r):e.setMonth(t,r)}function d(e,t){var r=e<100?Math.abs(e):Math.abs(e%100);var _=r%10;var n="";if(r==0)n=a._getMessage(t["0"]);else if(r==1)n=a._getMessage(t["1"]);else if(r>=10&&r<=20)n=a._getMessage(t["10_20"]);else if(_==1)n=a._getMessage(t["MOD_1"]);else if(2<=_&&_<=4)n=a._getMessage(t["MOD_2_4"]);else n=a._getMessage(t["MOD_OTHER"]);return n.replace(/#VALUE#/g,e)}function h(e,t){if(u[e])return u[e]();else return t}function N(e){return e>=0?Math.floor(e):Math.ceil(e)}},convertBitrixFormat:function(e){if(!r.isNotEmptyString(e))return"";return e.replace("YYYY","Y").replace("MMMM","F").replace("MM","m").replace("M","M").replace("DD","d").replace("G","g").replace(/GG/i,"G").replace("H","h").replace(/HH/i,"H").replace("MI","i").replace("SS","s").replace("TT","A").replace("T","a")},convertToUTC:function(e){if(!r.isDate(e))return null;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))},getNewDate:function(e){return new Date(this.getBrowserTimestamp(e))},getBrowserTimestamp:function(e){e=parseInt(e,10);var t=new Date(e*1e3).getTimezoneOffset()*60;return(parseInt(e,10)+parseInt(this._getMessage("SERVER_TZ_OFFSET"))+t)*1e3},getServerTimestamp:function(e){e=parseInt(e,10);var t=new Date(e).getTimezoneOffset()*60;return Math.round(e/1e3-(parseInt(this._getMessage("SERVER_TZ_OFFSET"),10)+parseInt(t,10)))},formatLastActivityDate:function(e,t,r){var _=this.isAmPmMode(true);var n=_===this.AM_PM_MODE.LOWER?"g:i a":_===this.AM_PM_MODE.UPPER?"g:i A":"H:i";var a=[["tomorrow","#01#"+n],["now","#02#"],["todayFuture","#03#"+n],["yesterday","#04#"+n],["-",this.convertBitrixFormat(this._getMessage("FORMAT_DATETIME")).replace(/:s/g,"")],["s60","sago"],["i60","iago"],["H5","Hago"],["H24","#03#"+n],["d31","dago"],["m12>1","mago"],["m12>0","dago"],["","#05#"]];var D=this.format(a,e,t,r);var i=null;if((i=/^#(\d+)#(.*)/.exec(D))!=null){switch(i[1]){case"01":D=this._getMessage("FD_LAST_SEEN_TOMORROW").replace("#TIME#",i[2]);break;case"02":D=this._getMessage("FD_LAST_SEEN_NOW");break;case"03":D=this._getMessage("FD_LAST_SEEN_TODAY").replace("#TIME#",i[2]);break;case"04":D=this._getMessage("FD_LAST_SEEN_YESTERDAY").replace("#TIME#",i[2]);break;case"05":D=this._getMessage("FD_LAST_SEEN_MORE_YEAR");break;default:D=i[2];break}}return D},isAmPmMode:function(e){if(e===true){return this._getMessage("AMPM_MODE")}return this._getMessage("AMPM_MODE")!==false},_getMessage:function(e){return t.message(e)},parse:function(e,t,_,n){if(r.isNotEmptyString(e)){if(!_)_=this._getMessage("FORMAT_DATE");if(!n)n=this._getMessage("FORMAT_DATETIME");var a="";for(o=1;o<=12;o++){a=a+"|"+this._getMessage("MON_"+o)}var D=new RegExp("([0-9]+|[a-z]+"+a+")","ig"),i=e.match(D),s=_.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),o,M,u=[],f=[],O={};if(!i){return null}if(i.length>s.length){s=n.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(o=0,M=i.length;o<M;o++){if(i[o].trim()!==""){u[u.length]=i[o]}}for(o=0,M=s.length;o<M;o++){if(s[o].trim()!==""){f[f.length]=s[o]}}var g=r.array_search("MMMM",f);if(g>0){u[g]=this.getMonthIndex(u[g]);f[g]="MM"}else{g=r.array_search("M",f);if(g>0){u[g]=this.getMonthIndex(u[g]);f[g]="MM"}}for(o=0,M=f.length;o<M;o++){var F=f[o].toUpperCase();O[F]=F==="T"||F==="TT"?u[o]:parseInt(u[o],10)}if(O["DD"]>0&&O["MM"]>0&&O["YYYY"]>0){var c=new Date;if(t){c.setUTCDate(1);c.setUTCFullYear(O["YYYY"]);c.setUTCMonth(O["MM"]-1);c.setUTCDate(O["DD"]);c.setUTCHours(0,0,0,0)}else{c.setDate(1);c.setFullYear(O["YYYY"]);c.setMonth(O["MM"]-1);c.setDate(O["DD"]);c.setHours(0,0,0,0)}if((!isNaN(O["HH"])||!isNaN(O["GG"])||!isNaN(O["H"])||!isNaN(O["G"]))&&!isNaN(O["MI"])){if(!isNaN(O["H"])||!isNaN(O["G"])){var T=(O["T"]||O["TT"]||"am").toUpperCase()==="PM",E=parseInt(O["H"]||O["G"]||0,10);if(T){O["HH"]=E+(E===12?0:12)}else{O["HH"]=E<12?E:0}}else{O["HH"]=parseInt(O["HH"]||O["GG"]||0,10)}if(isNaN(O["SS"]))O["SS"]=0;if(t){c.setUTCHours(O["HH"],O["MI"],O["SS"])}else{c.setHours(O["HH"],O["MI"],O["SS"])}}return c}}return null},getMonthIndex:function(e){var t,r=e.toUpperCase(),_=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],n=["january","february","march","april","may","june","july","august","september","october","november","december"];for(t=1;t<=12;t++){if(r===this._getMessage("MON_"+t).toUpperCase()||r===this._getMessage("MONTH_"+t).toUpperCase()||r===_[t-1].toUpperCase()||r===n[t-1].toUpperCase()){return t}}return e}};var r={isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return this.isString(e)?e.length>0:false},strPadLeft:function(e,t,r){var _=e.length,n=r.length;if(_>=t)return e;for(;_<t;_+=n)e=r+e;return e},array_search:function(e,t){for(var r=0;r<t.length;r++){if(t[r]==e)return r}return-1}}})(window);
//# sourceMappingURL=main.date.map.js