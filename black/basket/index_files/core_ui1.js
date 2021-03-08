(function(){if(typeof BX.ui!="object")BX.ui={};BX.ui.autoComplete=function(e,t){this.parentConstruct(BX.ui.autoComplete,e);BX.merge(this,{opts:{source:"/somewhere.php",pageSize:20,paginatedRequest:true,autoSelectOnBlur:false,autoSelectOnTab:false,autoSelectOnlyIfOneVariant:false,selectOnEnter:true,selectByClick:true,chooseUsingArrows:true,scrollToVariantOnArrow:true,closePopupOnOuterClick:true,focusOnMouseSelect:true,autoSelectIfOneVariant:false,debounceTime:500,startSearchLen:2,knownItems:[],selectedItem:false,useCache:true,usePagingOnScroll:false,useCustomScrollPane:false,scrollThrottleTimeout:300,paneHConstraint:0,messages:{nothingFound:"Sorry, nothing found",error:"Error occured",clearSelection:"Clear selection"},arrowScrollAdditional:0,pageUpWardOffset:0,wrapTagName:"span",paneHConstraintType:"max-height",wrapSeparate:true,bindEvents:{init:function(){this.setInitialValue();this.vars.allowHideErrors=true}}},vars:{opened:false,eventLock:false,displayPageMutex:false,blockingCall:false,keyboardMutex:false,cache:{nodes:{},search:{},ceilings:{}},lastQuery:null,lastPage:0,displayedIndex:[],value:false,currentGlow:false,previousGlow:false,outSideClickScope:null,forceSelectSingeOnce:false,allowHideErrors:false},ctrls:{displayedItems:{}},sys:{code:"autocomplete"}});this.handleInitStack(t,BX.ui.autoComplete,e)};BX.extend(BX.ui.autoComplete,BX.ui.widget);BX.merge(BX.ui.autoComplete.prototype,{init:function(){var e=this,t=this.opts,n=this.vars,i=this.ctrls;var s=this.getControl("input",true);if(s==null)s=i.scope.querySelector('input[type="text"]');if(s==null)s=i.scope.querySelector("select");if(s==null)throw new Error("Input control still not found");i.inputs={origin:s==null?i.scope:s};n.loader=new BX.ui.loader({timeout:500});n.loader.bindEvent("toggle",BX.proxy(this.whenLoaderToggle,e));if(i.inputs.origin.nodeName=="SELECT"){throw new Error("Sorry, usage of <select> node as a source currently is not implemented")}if(typeof t.knownItems=="object")this.fillCache(t.knownItems,false);this.pushFuncStack("buildUpDOM",BX.ui.autoComplete);this.pushFuncStack("bindEvents",BX.ui.autoComplete)},buildUpDOM:function(){var e=this.opts,t=this.ctrls,n=this.vars,i=this.sys.code;t.container=BX.create("div",{props:{className:"bx-ui-"+i+"-container"},style:{margin:0,padding:0,border:"none",position:"relative"}});BX.insertAfter(t.container,t.inputs.origin);var s=BX.clone(t.inputs.origin);s.removeAttribute("name");BX.adjust(s,{props:{className:"bx-ui-"+i+"-fake"}});t.container.appendChild(s);t.inputs.fake=s;BX.hide(t.inputs.origin);if(BX.browser.IsIE8()){BX.bind(t.inputs.fake,"click",function(e){BX.eventCancelBubble(e)});BX.bind(t.container,"click",function(){t.inputs.fake.focus()})}t.clear=this.getControl("clear",true);if(!BX.type.isElementNode(t.clear)){t.clear=BX.create("div",{props:{className:"bx-ui-"+i+"-clear"},attrs:{title:e.messages.clearSelection},style:{position:"absolute",top:"0px",right:"0px"}});t.container.appendChild(t.clear)}BX.style(t.clear,"display","none");t.pane=this.getControl("pane",true);if(!BX.type.isElementNode(t.pane)){t.pane=BX.create("div",{props:{className:"bx-ui-"+i+"-pane"},style:{display:"none",position:"absolute"}});t.container.appendChild(t.pane)}if(e.usePagingOnScroll){BX.style(t.pane,"overflow-y","auto");BX.style(t.pane,"overflow-x","hidden");if(e.paneHConstraint>0&&e.paneHConstraintType!="")BX.style(t.pane,e.paneHConstraintType,e.paneHConstraint+"px")}t.vars=this.getControl("variants",true);if(!BX.type.isElementNode(t.vars)){t.vars=BX.create("div",{props:{className:"bx-ui-"+i+"-variants"}});t.pane.appendChild(t.vars)}t.nothingFound=this.getControl("nothing-found",true);t.errorMessage=this.getControl("error-message",true)},bindEvents:function(){var e=this,t=this.opts,n=this.vars,i=this.ctrls,s=this.sys.code;if(t.selectByClick){BX.bindDelegate(i.pane,"click",{className:"bx-ui-"+s+"-variant"},function(){var a=BX.data(this,"bx-"+s+"-item-value");if(typeof a!="undefined"&&typeof n.cache.nodes[a]!="undefined"){e.selectItem(a);if(t.focusOnMouseSelect)i.inputs.fake.focus()}})}BX.bindDebouncedChange(i.inputs.fake,function(n){if(n.length>=t.startSearchLen){e.displayPage({QUERY:n})}else e.hideDropdown()},function(){e.fireEvent("before-input-value-modify");e.deselectItem();e.fireEvent("after-input-value-modify")},t.debounceTime,i.inputs.fake);BX.addCustomEvent(document,"bx-ui-"+s+"-close-dropdown",function(){e.hideDropdown()});if(t.closePopupOnOuterClick){n.outSideClickScope=i.container;BX.bind(document,"click",function(t){t=t||window.event;if(!BX.isParentForNode(n.outSideClickScope,t.target||t.srcElement)){e.hideDropdown()}})}BX.bind(i.inputs.fake,"keydown",function(s){if(n.keyboardMutex){return}var a=s.keyCode||s.which;var r=n.displayedIndex.length;if(t.chooseUsingArrows){if((a==38||a==40)&&n.opened&&r>0){var o=a==38?-1:1;if(n.currentGlow==r-1&&e.getCanLoadMore()){return}n.previousGlow=n.currentGlow;n.currentGlow+=o;n.currentGlow=n.currentGlow%r;if(n.currentGlow<0)n.currentGlow=r+n.currentGlow;e.toggleGlow();var l=i.displayedItems[n.displayedIndex[n.currentGlow]];if(t.scrollToVariantOnArrow){var c=BX.pos(l,i.vars);var u=c.top+c.height;var d=c.top;var h=c.height;var f=i.pane.clientHeight;var p=i.pane.scrollTop;var g=t.arrowScrollAdditional;if(d+h>f+p){i.scrollController.scrollTo({dy:d+h-(f+p)+g})}else if(d<p){i.scrollController.scrollTo({dy:-(p-d+g)})}}BX.PreventDefault(s)}}if(a==13&&t.selectOnEnter){if(n.currentGlow!==false)e.selectItem(n.displayedIndex[n.currentGlow]);else if(n.opened&&r>0)e.selectItem(n.displayedIndex[0])}if(a==9&&n.opened&&t.autoSelectOnTab){if(t.autoSelectOnlyIfOneVariant&&r==1||!t.autoSelectOnlyIfOneVariant&&r>0)e.selectItem(n.displayedIndex[0]);else e.hideDropdown()}if(a==13)BX.PreventDefault(s)});if(t.autoSelectOnBlur){BX.bind(i.inputs.fake,"blur",function(){var i=n.displayedIndex.length;if(n.opened&&(t.autoSelectOnlyIfOneVariant&&i==1||!t.autoSelectOnlyIfOneVariant&&i>0))e.selectItem(n.displayedIndex[0])})}if(t.autoSelectOnBlur){BX.bind(i.inputs.fake,"blur",function(){var i=n.displayedIndex.length;if(n.opened&&(t.autoSelectOnlyIfOneVariant&&i==1||!t.autoSelectOnlyIfOneVariant&&i>0))e.selectItem(n.displayedIndex[0])})}BX.bind(i.inputs.fake,"click",function(){if(!n.opened&&n.value===false&&n.displayedIndex.length>0){e.showDropdown()}});BX.bind(i.clear,"click",function(){e.clearSelected()});if(t.usePagingOnScroll){if(t.useCustomScrollPane){i.scrollController=null;throw new Error("Sorry, custom scroll panel currently is not implemented")}else{i.scrollController=new BX.ui.scrollPaneNative({scope:i.pane,eventTimeout:t.scrollThrottleTimeout,controls:{container:i.pane}})}e.vars.addPage=BX.debounce(function(){if(!n.opened)return;e.blockingCall();e.displayNextPage()},10);i.scrollController.bindEvent("scroll-to-end",e.vars.addPage);i.scrollController.bindEvent("has-free-space",e.vars.addPage);this.bindEvent("after-page-display",function(){i.scrollController.informContentChanged();if(e.vars.lastPage==0)i.scrollController.dropScrollTop()})}BX.bind(i.inputs.origin,"change",function(){if(n.eventLock)return;if(this.value==""){if(n.value)e.clearSelected()}else{e.setValue(this.value)}})},addItems2Cache:function(){},clearCache:function(){},focus:function(){this.ctrls.inputs.fake.focus()},checkDisabled:function(){},disable:function(){},enable:function(){},setValue:function(e,t){var n=this.vars,i=this.opts,s=this.ctrls,a=this;this.hideError();if(e==null||e==false||typeof e=="undefined"||e.toString().length==0){this.resetVariables();BX.cleanNode(s.vars);if(BX.type.isElementNode(s.nothingFound))BX.hide(s.nothingFound);this.fireEvent("after-deselect-item");this.fireEvent("after-clear-selection");return}else if(e==n.value)return;if(t!==false)n.forceSelectSingeOnce=true;if(typeof n.cache.nodes[e]=="undefined"){this.resetNavVariables();a.downloadBundle({VALUE:e},function(t){a.fillCache(t,false);if(typeof n.cache.nodes[e]=="undefined"){a.showNothingFound()}else{if(i.autoSelectIfOneVariant||n.forceSelectSingeOnce)a.selectItem(e);else a.displayVariants([e])}},function(){n.forceSelectSingeOnce=false})}else{if(n.forceSelectSingeOnce)this.selectItem(e);else this.displayVariants([e]);n.forceSelectSingeOnce=false}},getValue:function(){return this.vars.value===false?"":this.vars.value},clearSelected:function(){this.setValue("")},getNodeByValue:function(e){return this.vars.cache.nodes[e]},setTabIndex:function(e){this.ctrls.inputs.fake.setAttribute("tabindex",e)},setTargetInputName:function(e){this.ctrls.inputs.origin.setAttribute("name",e)},cancelRequest:function(){this.vars.forceSelectSingeOnce=false},setTargetInputValue:function(e){this.vars.eventLock=true;this.ctrls.inputs.origin.value=this.getSelectorValue(e);BX.fireEvent(this.ctrls.inputs.origin,"change");this.vars.eventLock=false},setFakeInputValue:function(e){var t=this.ctrls;BX.data(t.inputs.fake,"bx-dc-previous-value",e);t.inputs.fake.value=e},setValueVariable:function(e){this.vars.value=e},fillCache:function(e,t){var n=this.vars,i=this.opts;if(!e.length)return;for(var s in e)if(e.hasOwnProperty(s))this.addItem2Cache(e[s]);if(typeof t=="number"&&t!=0){if(typeof n.cache.search[t]=="undefined")n.cache.search[t]=[];for(var s in e)if(e.hasOwnProperty(s))n.cache.search[t].push(e[s].VALUE)}},addItem2Cache:function(e){this.vars.cache.nodes[e.VALUE]=e},setInitialValue:function(){var e=false;if(this.opts.selectedItem!==false)e=this.opts.selectedItem;else if(this.ctrls.inputs.origin.value.length>0)e=this.ctrls.inputs.origin.value;if(e!==false)this.setValue(e)},getCachedPage:function(e,t){var n=this.opts,i=this.vars;var s=this.getCacheKeyForQuery(e);if(typeof i.cache.search[s]!="object"||!("length"in i.cache.search[s]))return false;var a=i.cache.search[s].slice(t*n.pageSize,(t+1)*n.pageSize);if(a.length==0)return false;return a},displayNextPage:function(){var e=this.vars;if(!this.opts.usePagingOnScroll||e.lastQuery==null)return;this.displayPage(e.lastQuery,e.lastPage+1)},displayPage:function(e,t){var n=this.opts,i=this.vars,s=this.ctrls,a=this;if(i.blockingCall&&i.displayPageMutex)return;e=this.refineQuery(e);var r=this.getCacheKeyForQuery(e);if(typeof t=="undefined")t=0;var o=this.manageCeiling(r);if(o>0&&o<=t)return;i.keyboardMutex=true;i.displayPageMutex=true;i.blockingCall=false;i.lastQuery=e;i.lastPage=t;if(n.useCache){var l=this.getCachedPage(e,t);if(l!==false){if((n.autoSelectIfOneVariant||i.forceSelectSingeOnce)&&l.length==1&&i.lastPage==0)a.selectItem(l[0]);else a.displayVariants(l,t);i.forceSelectSingeOnce=false;i.displayPageMutex=false;i.keyboardMutex=false}else{a.downloadBundle(e,function(s){a.fillCache(s,r);l=this.getCachedPage(e,t);if(l==false){if(t==0)a.showNothingFound();else{a.manageCeiling(r,t)}}else{if((n.autoSelectIfOneVariant||i.forceSelectSingeOnce)&&l.length==1&&i.lastPage==0)a.selectItem(l[0]);else a.displayVariants(l,t);if(!n.paginatedRequest)a.manageCeiling(r,Math.ceil(i.cache.search[r].length/n.pageSize))}},function(){i.forceSelectSingeOnce=false;i.blockingCall=false;i.displayPageMutex=false;i.keyboardMutex=false})}}else throw new Error("Sorry, useCache = false currently is not implemented")},manageCeiling:function(e,t){var n=this.vars;if(typeof t=="undefined"){if(typeof n.cache.ceilings[e]=="undefined")return-1;return n.cache.ceilings[e]}n.cache.ceilings[e]=t},getCanLoadMore:function(e){var t=this.vars;if(typeof e=="undefined")e=this.getCacheKeyForQuery(t.lastQuery);if(typeof t.cache.ceilings[e]=="undefined")return true;return t.lastPage<t.cache.ceilings[e]},resetVariables:function(){this.deselectItem();this.setFakeInputValue("");this.resetNavVariables()},resetNavVariables:function(){this.vars.lastQuery=null;this.vars.lastPage=0},setTargetValue:function(e){var t=this.opts,n=this.vars,i=this.vars.value!==false;n.value=e==""?false:e;this.setTargetInputValue(e);if(n.value)this.fireEvent("after-select-item",[n.value,true]);else if(i)this.fireEvent("after-deselect-item")},blockingCall:function(){this.vars.blockingCall=true},downloadBundle:function(e,t,n,i){var s=this.opts,a=this.vars,r=this.ctrls,o=this;a.loader.show();BX.ajax({url:o.opts.source,method:"post",dataType:"json",async:true,processData:true,emulateOnload:true,start:true,data:BX.merge(o.refineRequest(e),o.getNavParams()),onsuccess:function(i){a.loader.hide();if(i.result){i.data=o.refineResponce(i.data,e);if(typeof i.data=="undefined")i.data=[];t.apply(o,[i.data])}else o.showError(o.opts.messages.error,i.errors);n.call(o)},onfailure:function(e){a.loader.hide();o.showError(s.messages.error,false,e);n.call(o);if(BX.type.isFunction(i))i.call(o)}})},getNavParams:function(){return this.opts.paginatedRequest?{PAGE_SIZE:this.opts.pageSize,PAGE:this.vars.lastPage}:{}},getSelectorValue:function(e){return e},getCacheKeyForQuery:function(e){var t="";for(var n in e){if(e.hasOwnProperty(n)){t+=n.toString().toLowerCase()+":"+e[n].toString().toLowerCase()+"|"}}return BX.util.hashCode(t)},refineQuery:function(e){return e},refineRequest:function(e){return e},refineResponce:function(e,t){return e},deselectItem:function(){var e=this.vars,t=this.ctrls,n=this.opts;this.hideError();this.whenClearToggle.apply(this,[false]);e.currentGlow=false;e.previousGlow=false;e.displayedIndex=[];t.displayedItems={};this.setTargetValue("")},selectItem:function(e){var t=this.vars,n=this.ctrls,i=this.opts;t.value=e;n.inputs.origin.value=t.cache.nodes[e].VALUE;this.setFakeInputValue(this.whenItemSelect.apply(this,[e]));this.hideDropdown();this.whenClearToggle.apply(this,[true]);this.setTargetValue(e)},toggleGlow:function(){var e=this.opts,t=this.ctrls,n=this.vars;var i=t.displayedItems[n.displayedIndex[n.currentGlow]];if(n.previousGlow!==false)this.whenItemToggle(false,t.displayedItems[n.displayedIndex[n.previousGlow]],n.previousGlow);if(n.currentGlow!==false)this.whenItemToggle(true,i,n.currentGlow)},showDropdown:function(){if(this.vars.opened)return;var e=!this.vars.opened;this.vars.opened=true;if(this.vars.lastPage==0){this.whenItemToggle(false,this.ctrls.displayedItems[this.vars.displayedIndex[this.vars.currentGlow]],this.vars.currentGlow);this.vars.currentGlow=0;this.toggleGlow()}BX.show(this.ctrls.pane);var t=BX.height(this.ctrls.pane);BX.hide(this.ctrls.pane);var n=this.ctrls.inputs.fake;var i=BX.pos(n);var s=BX.scrollTop(window)+BX.height(window)-(Math.ceil(i.top)+i.height);this.whenDropdownToggle.apply(this,[true,s-t<-20,i.height,e])},hideDropdown:function(){this.vars.opened=false;this.whenDropdownToggle.apply(this,[false,false,0,true])},clearDisplayedVariants:function(){this.hideDropdown();this.vars.displayedIndex=[]},displayVariants:function(e,t){var n=this.ctrls,i=this.vars,s=this.opts,a=this.sys.code;this.hideNothingFound();if(typeof t=="undefined"||t==0){BX.cleanNode(n.vars);i.displayedIndex=[];n.displayedItems={}}var r=i.displayedIndex.length;for(var o in e){if(!e.hasOwnProperty(o))continue;if(!e[o])continue;var l=this.whenRenderVariant(e[o],r+parseInt(o))[0];BX.data(l,"bx-"+a+"-item-value",e[o]);n.vars.appendChild(l);this.fireEvent("after-item-append",[l]);i.displayedIndex.push(e[o]);n.displayedItems[e[o]]=l}this.showDropdown();this.fireEvent("after-page-display",[i.cache.nodes,t])},showNothingFound:function(){BX.cleanNode(this.ctrls.vars);if(BX.type.isElementNode(this.ctrls.nothingFound))this.whenNothingFoundToggle(true);else{this.ctrls.vars.appendChild(this.whenRenderNothingFound(this.opts.messages.nothingFound));this.showDropdown()}this.fireEvent("nothing-found")},hideNothingFound:function(){if(BX.type.isElementNode(this.ctrls.nothingFound))this.whenNothingFoundToggle(false)},hideError:function(){if(BX.type.isElementNode(this.ctrls.errorMessage)&&this.vars.allowHideErrors)BX.hide(this.ctrls.errorMessage)},showError:function(e,t,n){BX.cleanNode(this.ctrls.vars);this.ctrls.vars.appendChild(this.whenRenderError(e));this.showDropdown();BX.debug(arguments)},refineItemDataForTemplate:function(e){var t=this.vars.lastQuery.QUERY;if(BX.type.isNotEmptyString(t)){var n=[];if(this.opts.wrapSeparate)n=t.split(/\s+/);else n=[t];e["=display_wrapped"]=BX.util.wrapSubstring(e.DISPLAY,n,this.opts.wrapTagName,true)}else e["=display_wrapped"]=BX.util.htmlspecialchars(e.DISPLAY);return e},getCurrentItem:function(){return this.vars.cache.nodes[this.vars.value]},whenDisplayVariant:function(e){return this.vars.cache.nodes[e]["DISPLAY"]},whenItemSelect:function(e){return this.vars.cache.nodes[e]["DISPLAY"]},whenLoaderToggle:function(e){BX[e?"addClass":"removeClass"](this.ctrls.inputs.fake,"bx-ui-"+this.sys.code+"-loading")},whenDropdownToggle:function(e,t,n,i){if(e){if(i)this.whenDecidePaneOrient(t,n,i);BX.show(this.ctrls.pane)}else BX.hide(this.ctrls.pane);this.fireEvent("after-popup-toggled",[e])},whenDecidePaneOrient:function(e,t){var n=this.ctrls;if(e){var i=BX.style(n.pane,"top");if(i!="auto"){BX.data(n.pane,"pane-top",i)}BX.style(n.pane,"top","auto");BX.style(n.pane,"bottom",t+this.opts.pageUpWardOffset+"px")}else{var i=BX.data(n.pane,"pane-top");if(typeof i!="undefined")BX.style(n.pane,"top",i);BX.style(n.pane,"bottom","auto")}},whenItemToggle:function(e,t,n){BX[e?"addClass":"removeClass"](t,"bx-ui-"+this.sys.code+"-variant-active")},whenClearToggle:function(e){BX[e?"show":"hide"](this.ctrls.clear)},whenNothingFoundToggle:function(e){BX[e?"show":"hide"](this.ctrls.nothingFound)},whenRenderVariant:function(e,t){var n=BX.clone(this.vars.cache.nodes[e]);n=this.refineItemDataForTemplate(n);n.index=t;this.fireEvent("before-render-variant",[n]);if(typeof this.tmpls["dropdown-item"]=="string")return this.createNodesByTemplate("dropdown-item",n,true);return[BX.create("div",{props:{className:"bx-ui-"+this.sys.code+"-variant"},text:this.vars.cache.nodes[e]["DISPLAY"]})]},whenRenderError:function(e){if(typeof this.tmpls["error"]=="string")return this.createNodesByTemplate("error",{message:e},true)[0];return BX.create("div",{props:{className:"bx-ui-"+this.sys.code+"-error"},text:e})},whenRenderNothingFound:function(e){if(typeof this.tmpls["nothing-found"]=="string")return this.createNodesByTemplate("nothing-found",{message:e},true)[0];return this.whenRenderError(e)}})})();
//# sourceMappingURL=core_ui_autocomplete.map.js