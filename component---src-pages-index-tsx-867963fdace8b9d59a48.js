(self.webpackChunkmirai=self.webpackChunkmirai||[]).push([[245],{1486:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ae}});var n,o,i,a,c=r(5540),u=r(6540),s=r(8007),l=r(5556),f=r.n(l),p=r(2098),d=r.n(p),h=r(115),m=r.n(h),y=r(8828),b=r.n(y),g="bodyAttributes",v="htmlAttributes",E="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),O="cssText",C="href",A="http-equiv",S="innerHTML",j="itemprop",x="name",k="property",P="rel",L="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",D="encodeSpecialCharacters",H="onChangeClientState",_="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,w.TITLE),r=X(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,M);return t||n||void 0},G=function(e){return X(e,H)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===P&&"canonical"===e[r].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==S&&c!==O&&c!==j||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:r.g.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,n),ue(w.HTML,o),ce(f,p);var d={baseTag:se(w.BASE,r),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(q),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(q):r.getAttribute(q)!==a.join(",")&&r.setAttribute(q,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+q+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(q,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[q]=!0,o=fe(r,n),[u.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+" "+q+'="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+" "+q+'="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[q]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===S||r===O){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===S||e===O)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+" "+q+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(g,r,n),htmlAttributes:pe(v,o,n),link:pe(w.LINK,i,n),meta:pe(w.META,a,n),noscript:pe(w.NOSCRIPT,c,n),script:pe(w.SCRIPT,u,n),style:pe(w.STYLE,s,n),title:pe(w.TITLE,{title:f,titleAttributes:p},n)}},he=d()((function(e){return{baseTag:J([C,I],e),bodyAttributes:$(g,e),defer:X(e,R),encode:X(e,D),htmlAttributes:$(v,e),linkTags:Q(w.LINK,[P,C],e),metaTags:Q(w.META,[x,T,A,k,j],e),noscriptTags:Q(w.NOSCRIPT,[S],e),onChangeClientState:G(e),scriptTags:Q(w.SCRIPT,[L,S],e),styleTags:Q(w.STYLE,[O],e),title:V(e),titleAttributes:$(E,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),me=(o=he,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return z({},o,((t={})[n.type]=a,t.titleAttributes=z({},i),t));case w.BODY:return z({},o,{bodyAttributes:z({},i)});case w.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((r={})[n.type]=z({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=z({},t);return Object.keys(e).forEach((function(t){var n;r=z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(K(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=z({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ye=r(1518),be=r(4285),ge=r(4705);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,ge.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const we=e=>{let{title:t,value:r,otherValue:n,max:o}=e;const i=r/o*100,a=n/o*100,c={height:"100%",width:i+a+"%",background:"linear-gradient(90deg, #14f1e6, #1f8ef5)",borderRadius:"5px",transition:"width 0.4s ease-in-out",position:"absolute"},s=Ee(Ee({},c),{},{width:a+"%",background:"linear-gradient(90deg, #f5a623, #f76b1c)"}),l={position:"absolute",right:5,top:"50%",transform:"translateY(-50%)",padding:"0 10px",color:"white",fontWeight:"bold",backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"5px"};return u.createElement("div",null,u.createElement("div",{style:{height:"30px",maxWidth:"60%",backgroundColor:"#eee",borderRadius:"5px",margin:"20px auto",position:"relative",overflow:"hidden"}},u.createElement("div",{style:c},u.createElement("span",{style:l},r+" w")),n&&u.createElement("div",{style:s},u.createElement("span",{style:l},n+" w"))))},Te=e=>{let{temperature:t,humidity:r}=e;const n={textAlign:"center"};return u.createElement("div",{style:{display:"flex",justifyContent:"space-around",padding:"10px",border:"1px solid #ddd",borderRadius:"5px",backgroundColor:"#f7f7f7",maxWidth:"30%",margin:"20px auto"}},u.createElement("div",{style:n},u.createElement("h3",{className:"text-colored"},"🌡"),u.createElement("p",{className:"text-colored"},t," °C")),u.createElement("div",{style:n},u.createElement("h3",{className:"text-colored"},"humidity"),u.createElement("p",{className:"text-colored"},r," %")))};var Oe=()=>{const{0:e,1:t}=(0,u.useState)(0),{0:r,1:n}=(0,u.useState)(0),{0:o,1:i}=(0,u.useState)(0),{0:a,1:c}=(0,u.useState)(0);return(0,u.useEffect)((()=>{const e=setInterval((()=>{(async()=>{try{const e=await fetch("https://bubbleioa.top/home_status/"),r=await e.json();t(r.pc_power),n(r.other_power),i(r.temperature),c(r["relative-humidity"])}catch(e){console.error("获取数据失败:",e)}})()}),5e3);return()=>clearInterval(e)}),[]),u.createElement("div",null,u.createElement(we,{title:"power",value:e,otherValue:r,max:450}),u.createElement(Te,{temperature:o,humidity:a}))};let Ce=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={header:"git",headerList:["git","blog","netdata","docker","code"],urlList:["https://git.bubbleioa.top","https://blog.bubbleioa.top","https://netdata.bubbleioa.top","https://docker.bubbleioa.top","https://code.bubbleioa.top"],curid:0,imgUrl:"",stateUrl:"https://bubbleioa.top/my_state/info",lastSteps:0,lastHeartRate:0},t}(0,c.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e,t;setTimeout((()=>this.deleteHeader(0)),2e3),this.setState({imgUrl:(0,ye.GP)("https://service-avb1tv8k-1303953543.hk.apigw.tencentcs.com/release/image?scale={0}&id=1",(e=9e-9,t=15e-8,Math.random()<.5?(1-Math.random())*(t-e)+e:Math.random()*(t-e)+e))})},r.deleteHeader=function(e){const t=setInterval((()=>{this.setState({header:this.state.header.substring(0,this.state.header.length-1)}),""===this.state.header&&(clearInterval(t),setTimeout((()=>this.loopHeader(e+1)),1e3))}),300)},r.loopHeader=function(e){if(e<this.state.headerList.length){this.setState({curid:e});let t=0;const r=setInterval((()=>{this.setState({header:this.state.header+this.state.headerList[e][t]}),t++,t===this.state.headerList[e].length&&(clearInterval(r),setTimeout((()=>this.deleteHeader(e)),3e3))}),200)}else this.loopHeader(0)},r.counterAnim=function(e,t,r,n){void 0===t&&(t=0),void 0===n&&(n=1e3);const o=document.querySelector(e);let i=0;const a=c=>{i||(i=c);const u=Math.min((c-i)/n,1);o.innerText=("#steps"==e?"🦶 ":"❤️ ")+Math.floor(u*(r-t)+t),u<1&&window.requestAnimationFrame(a)};window.requestAnimationFrame(a)},r.render=function(){return u.createElement("div",null,u.createElement("img",{src:this.state.imgUrl,className:"blended-picture"}),u.createElement("h1",null," ",u.createElement("a",{href:this.state.urlList[this.state.curid],className:"text-colored"},this.state.header,"//")," "),u.createElement(Oe,null))},t}(u.Component);var Ae=()=>{let e;return e="zh-CN"===new URLSearchParams("undefined"!=typeof window&&window.location.search).get("lang")?u.createElement("div",{className:"info"},"你每次访问这个网站，上面的图片都是独一无二的",u.createElement("br",null),"为什么是冒泡 ","<->"," 为什么是 ioa 😕😕 天知道",u.createElement("br",null)," 🎉🐟🎉 ~> 蒸汽平台 || 📚👧📚 ~> 班固米 || 🐴🔫🐴 ~> 坐牢模拟器 ",u.createElement("br",null),"🔑 公钥:  ",u.createElement("a",{href:"https://github.com/Bubbleioa.gpg"},"CA43 1898 305C BDC1 78EF  6C3C 1DA0 2D52 E707 8602"),u.createElement("br",null),"生活就是一团💩，但是 arch 仍然很👍！",u.createElement("br",null)," ",u.createElement(s.Link,{to:"/"},"English Version")):u.createElement("div",{className:"info"},"Every time you visit this site, the images above are unique.",u.createElement("br",null),"Why bubble ","<->"," why ioa 😕😕 GOD(s) know it",u.createElement("br",null),"🎉🐟🎉 ~> Steam || 📚👧📚 ~> Bangumi || 🐴🔫🐴 ~> Apex Legends ",u.createElement("br",null),"🔑 Public Key:",u.createElement("a",{href:"https://github.com/Bubbleioa.gpg"},"CA43 1898 305C BDC1 78EF  6C3C 1DA0 2D52 E707 8602")," ",u.createElement("br",null),"Life is 💩, but arch is still 👍! ",u.createElement("br",null),u.createElement(s.Link,{to:"/?lang=zh-CN"},"中文版")),u.createElement("main",null,u.createElement(me,null,u.createElement("meta",{charSet:"utf-8"}),u.createElement("meta",{property:"og:title",content:"ioa's mirai?"}),u.createElement("meta",{property:"og:type",content:"profile"}),u.createElement("meta",{property:"og:url",content:"https://bubbleioa.top/"}),u.createElement("meta",{property:"og:image",content:"https://p.sda1.dev/6/0301b2a7c1e18516ab1f6230025e0e52/image.png"}),u.createElement("title",null,"ioa 的空间")),u.createElement("div",{className:"header"},u.createElement(Ce,null),e,u.createElement(be.A,{swipe:!0,duration:1,direction:"up",to:"awesome-guys"},"Awesome guys⬇️"),u.createElement("br",null),u.createElement("a",{href:"https://beian.miit.gov.cn/"},"赣ICP备2020013731号-2")))}},115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,o=r(6540),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},1518:function(e,t,r){"use strict";t.GP=void 0;var n=r(6540);t.GP=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=[e];return t.forEach((function(e,t){o=function(e,t,r){var o=[];return e.forEach((function(e){if("string"==typeof e){var i=new RegExp("\\{".concat(r,"\\}"),"gi");if("string"==typeof t||"number"==typeof t)o.push(e.replace(i,"".concat(t)));else{var a=e.split(i);a.forEach((function(e,r){e&&function(e){var t=[],r=!1,o=!1;e.match(/^\s+/gi)&&(e=e.replace(/^\s+/gi,""),r=!0);e.match(/\s+$/gi)&&(e=e.replace(/\s+$/gi,""),o=!0);r&&t.push(n.createElement(n.Fragment,null," "));t.push(e),o&&t.push(n.createElement(n.Fragment,null," "));return t}(e).forEach((function(e){return o.push(e)})),r+1<a.length&&o.push(t)}))}}else o.push(e)})),o}(o,e,t)})),0===o.length?"":1===o.length&&"string"==typeof o[0]?o[0]:n.createElement(n.Fragment,null,o.map((function(e,t){return n.createElement(n.Fragment,{key:t},e)})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-867963fdace8b9d59a48.js.map