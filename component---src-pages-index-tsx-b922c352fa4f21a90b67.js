(self.webpackChunkmirai=self.webpackChunkmirai||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",u),f}}},3312:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ve}});var n,o,i,a,u=r(1721),c=r(7294),s=r(5444),l=r(5697),f=r.n(l),p=r(4839),d=r.n(p),h=r(2993),y=r.n(h),m=r(6494),b=r.n(m),T="bodyAttributes",v="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),A="cssText",C="href",O="http-equiv",S="innerHTML",j="itemprop",k="name",L="property",P="rel",I="src",x="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",H="encodeSpecialCharacters",_="onChangeClientState",D="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],U="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=ee(e,w.TITLE),r=ee(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ee(e,M);return t||n||void 0},Z=function(e){return ee(e,_)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===P&&"canonical"===e[r].toLowerCase()||c===P&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==S&&u!==A&&u!==j||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=b()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},ee=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},te=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){te(e)}),0)}),re=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:r.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:r.g.cancelAnimationFrame||re,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ue=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,n),le(w.HTML,o),se(f,p);var d={baseTag:fe(w.BASE,r),linkTags:fe(w.LINK,i),metaTags:fe(w.META,a),noscriptTags:fe(w.NOSCRIPT,u),scriptTags:fe(w.SCRIPT,s),styleTags:fe(w.STYLE,l)},h={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),c(e,h,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(U),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(U):r.getAttribute(U)!==a.join(",")&&r.setAttribute(U,a.join(","))}},fe=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(U,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},he=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[U]=!0,o=de(r,n),[c.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=pe(r),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case T:case v:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[U]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===S||r===A){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===A)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ye=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:he(w.BASE,t,n),bodyAttributes:he(T,r,n),htmlAttributes:he(v,o,n),link:he(w.LINK,i,n),meta:he(w.META,a,n),noscript:he(w.NOSCRIPT,u,n),script:he(w.SCRIPT,c,n),style:he(w.STYLE,s,n),title:he(w.TITLE,{title:f,titleAttributes:p},n)}},me=d()((function(e){return{baseTag:Q([C,x],e),bodyAttributes:J(T,e),defer:ee(e,R),encode:ee(e,H),htmlAttributes:J(v,e),linkTags:X(w.LINK,[P,C],e),metaTags:X(w.META,[k,E,O,L,j],e),noscriptTags:X(w.NOSCRIPT,[S],e),onChangeClientState:Z(e),scriptTags:X(w.SCRIPT,[I,S],e),styleTags:X(w.STYLE,[A],e),title:G(e),titleAttributes:J(g,e)}}),(function(e){ae&&oe(ae),e.defer?ae=ne((function(){ue(e,(function(){ae=null}))})):(ue(e),ae=null)}),ye)((function(){return null})),be=(o=me,a=i=function(e){function t(){return F(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return K({},o,((t={})[n.type]=a,t.titleAttributes=K({},i),t));case w.BODY:return K({},o,{bodyAttributes:K({},i)});case w.HTML:return K({},o,{htmlAttributes:K({},i)})}return K({},o,((r={})[n.type]=K({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(V(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=K({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var Te=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={header:"Mirai",headerList:["Mirai","blog"],urlList:["https://git.bubbleioa.top","https://blog.bubbleioa.top","https://netdata.bubbleioa.top","https://docker.bubbleioa.top"],curid:0},t}(0,u.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;setTimeout((function(){return e.deleteHeader(0)}),2e3)},r.deleteHeader=function(e){var t=this,r=setInterval((function(){t.setState({header:t.state.header.substring(0,t.state.header.length-1)}),""===t.state.header&&(clearInterval(r),setTimeout((function(){return t.loopHeader(e+1)}),1e3))}),300)},r.loopHeader=function(e){var t=this;if(e<this.state.headerList.length){this.setState({curid:e});var r=0,n=setInterval((function(){t.setState({header:t.state.header+t.state.headerList[e][r]}),++r===t.state.headerList[e].length&&(clearInterval(n),setTimeout((function(){return t.deleteHeader(e)}),3e3))}),200)}else this.loopHeader(0)},r.render=function(){return c.createElement("h1",null," ",c.createElement("a",{href:this.state.urlList[this.state.curid],className:"text-colored"},this.state.header,".bubbleioa.top")," ")},t}(c.Component),ve=function(){var e=null;return e="zh-CN"===new URLSearchParams("undefined"!=typeof window&&window.location.search).get("lang")?c.createElement("div",{className:"info"}," 为什么是冒泡 ","<->"," 为什么是ioa 😕😕 天知道",c.createElement("br",null)," 🎉🐟🎉 ~> 蒸汽平台 || 📚👧📚 ~> 班固米 || 🐴🔫🐴 ~> 坐牢模拟器 ",c.createElement("br",null)," 🔑 公钥: 无 (只有当有人需要它，这里才会有) ",c.createElement("br",null)," ",c.createElement(s.rU,{to:"/"},"English Version")):c.createElement("div",{className:"info"}," Why bubble ","<->"," why ioa 😕😕 GOD(s) know it",c.createElement("br",null)," 🎉🐟🎉 ~> Steam || 📚👧📚 ~> Bangumi || 🐴🔫🐴 ~> Apex Legends ",c.createElement("br",null)," 🔑 Public Key: None (Once someone needs it, here will be a key.) ",c.createElement("br",null)," ",c.createElement(s.rU,{to:"/?lang=zh-CN"},"中文版")),c.createElement("main",null,c.createElement(be,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,"ioa's mirai?")),c.createElement("div",{className:"header"},c.createElement(Te,null),e))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b922c352fa4f21a90b67.js.map