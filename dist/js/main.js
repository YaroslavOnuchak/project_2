/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,(function(t,e){"use strict";var n=[],i=Object.getPrototypeOf,r=n.slice,o=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},s=n.push,a=n.indexOf,l={},u=l.toString,c=l.hasOwnProperty,d=c.toString,p=d.call(Object),f={},h=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},g=function(t){return null!=t&&t===t.window},v=t.document,m={type:!0,src:!0,nonce:!0,noModule:!0};function y(t,e,n){var i,r,o=(n=n||v).createElement("script");if(o.text=t,e)for(i in m)(r=e[i]||e.getAttribute&&e.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function w(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?l[u.call(t)]||"object":typeof t}var b="3.5.1",x=function(t,e){return new x.fn.init(t,e)};function _(t){var e=!!t&&"length"in t&&t.length,n=w(t);return!h(t)&&!g(t)&&("array"===n||0===e||"number"==typeof e&&0<e&&e-1 in t)}x.fn=x.prototype={jquery:b,constructor:x,length:0,toArray:function(){return r.call(this)},get:function(t){return null==t?r.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=x.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return x.each(this,t)},map:function(t){return this.pushStack(x.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(x.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(x.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(0<=n&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},x.extend=x.fn.extend=function(){var t,e,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||h(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)i=t[e],"__proto__"!==e&&s!==i&&(u&&i&&(x.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[e],o=r&&!Array.isArray(n)?[]:r||x.isPlainObject(n)?n:{},r=!1,s[e]=x.extend(u,o,i)):void 0!==i&&(s[e]=i));return s},x.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==u.call(t)||(e=i(t))&&("function"!=typeof(n=c.call(e,"constructor")&&e.constructor)||d.call(n)!==p))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){y(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,i=0;if(_(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(_(Object(t))?x.merge(n,"string"==typeof t?[t]:t):s.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:a.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;i<n;i++)t[r++]=e[i];return t.length=r,t},grep:function(t,e,n){for(var i=[],r=0,o=t.length,s=!n;r<o;r++)!e(t[r],r)!==s&&i.push(t[r]);return i},map:function(t,e,n){var i,r,s=0,a=[];if(_(t))for(i=t.length;s<i;s++)null!=(r=e(t[s],s,n))&&a.push(r);else for(s in t)null!=(r=e(t[s],s,n))&&a.push(r);return o(a)},guid:1,support:f}),"function"==typeof Symbol&&(x.fn[Symbol.iterator]=n[Symbol.iterator]),x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){l["[object "+e+"]"]=e.toLowerCase()}));var T=function(t){var e,n,i,r,o,s,a,l,u,c,d,p,f,h,g,v,m,y,w,b="sizzle"+1*new Date,x=t.document,_=0,T=0,k=lt(),S=lt(),C=lt(),A=lt(),$=function(t,e){return t===e&&(d=!0),0},E={}.hasOwnProperty,D=[],O=D.pop,M=D.push,P=D.push,j=D.slice,L=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},N="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",z="\\["+H+"*("+q+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+H+"*\\]",R=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+z+")*)|.*)\\)|)",I=new RegExp(H+"+","g"),F=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),B=new RegExp("^"+H+"*,"+H+"*"),W=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),U=new RegExp(H+"|>"),X=new RegExp(R),Y=new RegExp("^"+q+"$"),V={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+N+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\([^\\r\\n\\f])","g"),nt=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},it=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,rt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},ot=function(){p()},st=bt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{P.apply(D=j.call(x.childNodes),x.childNodes),D[x.childNodes.length].nodeType}catch(e){P={apply:D.length?function(t,e){M.apply(t,j.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}function at(t,e,i,r){var o,a,u,c,d,h,m,y=e&&e.ownerDocument,x=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return i;if(!r&&(p(e),e=e||f,g)){if(11!==x&&(d=K.exec(t)))if(o=d[1]){if(9===x){if(!(u=e.getElementById(o)))return i;if(u.id===o)return i.push(u),i}else if(y&&(u=y.getElementById(o))&&w(e,u)&&u.id===o)return i.push(u),i}else{if(d[2])return P.apply(i,e.getElementsByTagName(t)),i;if((o=d[3])&&n.getElementsByClassName&&e.getElementsByClassName)return P.apply(i,e.getElementsByClassName(o)),i}if(n.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==x||"object"!==e.nodeName.toLowerCase())){if(m=t,y=e,1===x&&(U.test(t)||W.test(t))){for((y=tt.test(t)&&mt(e.parentNode)||e)===e&&n.scope||((c=e.getAttribute("id"))?c=c.replace(it,rt):e.setAttribute("id",c=b)),a=(h=s(t)).length;a--;)h[a]=(c?"#"+c:":scope")+" "+wt(h[a]);m=h.join(",")}try{return P.apply(i,y.querySelectorAll(m)),i}catch(e){A(t,!0)}finally{c===b&&e.removeAttribute("id")}}}return l(t.replace(F,"$1"),e,i,r)}function lt(){var t=[];return function e(n,r){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=r}}function ut(t){return t[b]=!0,t}function ct(t){var e=f.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function dt(t,e){for(var n=t.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=e}function pt(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ft(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ht(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function gt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function vt(t){return ut((function(e){return e=+e,ut((function(n,i){for(var r,o=t([],n.length,e),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))}))}))}function mt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in n=at.support={},o=at.isXML=function(t){var e=t.namespaceURI,n=(t.ownerDocument||t).documentElement;return!G.test(e||n&&n.nodeName||"HTML")},p=at.setDocument=function(t){var e,r,s=t?t.ownerDocument||t:x;return s!=f&&9===s.nodeType&&s.documentElement&&(h=(f=s).documentElement,g=!o(f),x!=f&&(r=f.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ot,!1):r.attachEvent&&r.attachEvent("onunload",ot)),n.scope=ct((function(t){return h.appendChild(t).appendChild(f.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),n.attributes=ct((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=ct((function(t){return t.appendChild(f.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=Z.test(f.getElementsByClassName),n.getById=ct((function(t){return h.appendChild(t).id=b,!f.getElementsByName||!f.getElementsByName(b).length})),n.getById?(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var n=e.getElementById(t);return n?[n]:[]}}):(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var n,i,r,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(r=e.getElementsByName(t),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],r=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&g)return e.getElementsByClassName(t)},m=[],v=[],(n.qsa=Z.test(f.querySelectorAll))&&(ct((function(t){var e;h.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+H+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||v.push("\\["+H+"*(?:value|"+N+")"),t.querySelectorAll("[id~="+b+"-]").length||v.push("~="),(e=f.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||v.push("\\["+H+"*name"+H+"*="+H+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||v.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]"),t.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")})),ct((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=f.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&v.push("name"+H+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),v.push(",.*:")}))),(n.matchesSelector=Z.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ct((function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),m.push("!=",R)})),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),e=Z.test(h.compareDocumentPosition),w=e||Z.test(h.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},$=e?function(t,e){if(t===e)return d=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===i?t==f||t.ownerDocument==x&&w(x,t)?-1:e==f||e.ownerDocument==x&&w(x,e)?1:c?L(c,t)-L(c,e):0:4&i?-1:1)}:function(t,e){if(t===e)return d=!0,0;var n,i=0,r=t.parentNode,o=e.parentNode,s=[t],a=[e];if(!r||!o)return t==f?-1:e==f?1:r?-1:o?1:c?L(c,t)-L(c,e):0;if(r===o)return pt(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?pt(s[i],a[i]):s[i]==x?-1:a[i]==x?1:0}),f},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if(p(t),n.matchesSelector&&g&&!A[e+" "]&&(!m||!m.test(e))&&(!v||!v.test(e)))try{var i=y.call(t,e);if(i||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){A(e,!0)}return 0<at(e,f,null,[t]).length},at.contains=function(t,e){return(t.ownerDocument||t)!=f&&p(t),w(t,e)},at.attr=function(t,e){(t.ownerDocument||t)!=f&&p(t);var r=i.attrHandle[e.toLowerCase()],o=r&&E.call(i.attrHandle,e.toLowerCase())?r(t,e,!g):void 0;return void 0!==o?o:n.attributes||!g?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},at.escape=function(t){return(t+"").replace(it,rt)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},at.uniqueSort=function(t){var e,i=[],r=0,o=0;if(d=!n.detectDuplicates,c=!n.sortStable&&t.slice(0),t.sort($),d){for(;e=t[o++];)e===t[o]&&(r=i.push(o));for(;r--;)t.splice(i[r],1)}return c=null,t},r=at.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=r(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=r(e);return n},(i=at.selectors={cacheLength:50,createPseudo:ut,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||at.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return V.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&X.test(n)&&(e=s(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=k[t+" "];return e||(e=new RegExp("(^|"+H+")"+t+"("+H+"|$)"))&&k(t,(function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(i){var r=at.attr(i,t);return null==r?"!="===e:!e||(r+="","="===e?r===n:"!="===e?r!==n:"^="===e?n&&0===r.indexOf(n):"*="===e?n&&-1<r.indexOf(n):"$="===e?n&&r.slice(-n.length)===n:"~="===e?-1<(" "+r.replace(I," ")+" ").indexOf(n):"|="===e&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,i,r){var o="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===r?function(t){return!!t.parentNode}:function(e,n,l){var u,c,d,p,f,h,g=o!==s?"nextSibling":"previousSibling",v=e.parentNode,m=a&&e.nodeName.toLowerCase(),y=!l&&!a,w=!1;if(v){if(o){for(;g;){for(p=e;p=p[g];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=g="only"===t&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(w=(f=(u=(c=(d=(p=v)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===_&&u[1])&&u[2],p=f&&v.childNodes[f];p=++f&&p&&p[g]||(w=f=0)||h.pop();)if(1===p.nodeType&&++w&&p===e){c[t]=[_,f,w];break}}else if(y&&(w=f=(u=(c=(d=(p=e)[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===_&&u[1]),!1===w)for(;(p=++f&&p&&p[g]||(w=f=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++w||(y&&((c=(d=p[b]||(p[b]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]=[_,w]),p!==e)););return(w-=r)===i||w%i==0&&0<=w/i}}},PSEUDO:function(t,e){var n,r=i.pseudos[t]||i.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);return r[b]?r(e):1<r.length?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?ut((function(t,n){for(var i,o=r(t,e),s=o.length;s--;)t[i=L(t,o[s])]=!(n[i]=o[s])})):function(t){return r(t,0,n)}):r}},pseudos:{not:ut((function(t){var e=[],n=[],i=a(t.replace(F,"$1"));return i[b]?ut((function(t,e,n,r){for(var o,s=i(t,null,r,[]),a=t.length;a--;)(o=s[a])&&(t[a]=!(e[a]=o))})):function(t,r,o){return e[0]=t,i(e,null,o,n),e[0]=null,!n.pop()}})),has:ut((function(t){return function(e){return 0<at(t,e).length}})),contains:ut((function(t){return t=t.replace(et,nt),function(e){return-1<(e.textContent||r(e)).indexOf(t)}})),lang:ut((function(t){return Y.test(t||"")||at.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===h},focus:function(t){return t===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:gt(!1),disabled:gt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},header:function(t){return J.test(t.nodeName)},input:function(t){return Q.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:vt((function(){return[0]})),last:vt((function(t,e){return[e-1]})),eq:vt((function(t,e,n){return[n<0?n+e:n]})),even:vt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:vt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:vt((function(t,e,n){for(var i=n<0?n+e:e<n?e:n;0<=--i;)t.push(i);return t})),gt:vt((function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=ft(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=ht(e);function yt(){}function wt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function bt(t,e,n){var i=e.dir,r=e.next,o=r||i,s=n&&"parentNode"===o,a=T++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||s)return t(e,n,r);return!1}:function(e,n,l){var u,c,d,p=[_,a];if(l){for(;e=e[i];)if((1===e.nodeType||s)&&t(e,n,l))return!0}else for(;e=e[i];)if(1===e.nodeType||s)if(c=(d=e[b]||(e[b]={}))[e.uniqueID]||(d[e.uniqueID]={}),r&&r===e.nodeName.toLowerCase())e=e[i]||e;else{if((u=c[o])&&u[0]===_&&u[1]===a)return p[2]=u[2];if((c[o]=p)[2]=t(e,n,l))return!0}return!1}}function xt(t){return 1<t.length?function(e,n,i){for(var r=t.length;r--;)if(!t[r](e,n,i))return!1;return!0}:t[0]}function _t(t,e,n,i,r){for(var o,s=[],a=0,l=t.length,u=null!=e;a<l;a++)(o=t[a])&&(n&&!n(o,i,r)||(s.push(o),u&&e.push(a)));return s}function Tt(t,e,n,i,r,o){return i&&!i[b]&&(i=Tt(i)),r&&!r[b]&&(r=Tt(r,o)),ut((function(o,s,a,l){var u,c,d,p=[],f=[],h=s.length,g=o||function(t,e,n){for(var i=0,r=e.length;i<r;i++)at(t,e[i],n);return n}(e||"*",a.nodeType?[a]:a,[]),v=!t||!o&&e?g:_t(g,p,t,a,l),m=n?r||(o?t:h||i)?[]:s:v;if(n&&n(v,m,a,l),i)for(u=_t(m,f),i(u,[],a,l),c=u.length;c--;)(d=u[c])&&(m[f[c]]=!(v[f[c]]=d));if(o){if(r||t){if(r){for(u=[],c=m.length;c--;)(d=m[c])&&u.push(v[c]=d);r(null,m=[],u,l)}for(c=m.length;c--;)(d=m[c])&&-1<(u=r?L(o,d):p[c])&&(o[u]=!(s[u]=d))}}else m=_t(m===s?m.splice(h,m.length):m),r?r(null,s,m,l):P.apply(s,m)}))}function kt(t){for(var e,n,r,o=t.length,s=i.relative[t[0].type],a=s||i.relative[" "],l=s?1:0,c=bt((function(t){return t===e}),a,!0),d=bt((function(t){return-1<L(e,t)}),a,!0),p=[function(t,n,i){var r=!s&&(i||n!==u)||((e=n).nodeType?c(t,n,i):d(t,n,i));return e=null,r}];l<o;l++)if(n=i.relative[t[l].type])p=[bt(xt(p),n)];else{if((n=i.filter[t[l].type].apply(null,t[l].matches))[b]){for(r=++l;r<o&&!i.relative[t[r].type];r++);return Tt(1<l&&xt(p),1<l&&wt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(F,"$1"),n,l<r&&kt(t.slice(l,r)),r<o&&kt(t=t.slice(r)),r<o&&wt(t))}p.push(n)}return xt(p)}return yt.prototype=i.filters=i.pseudos,i.setFilters=new yt,s=at.tokenize=function(t,e){var n,r,o,s,a,l,u,c=S[t+" "];if(c)return e?0:c.slice(0);for(a=t,l=[],u=i.preFilter;a;){for(s in n&&!(r=B.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),n=!1,(r=W.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),i.filter)!(r=V[s].exec(a))||u[s]&&!(r=u[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return e?a.length:a?at.error(t):S(t,l).slice(0)},a=at.compile=function(t,e){var n,r,o,a,l,c,d=[],h=[],v=C[t+" "];if(!v){for(e||(e=s(t)),n=e.length;n--;)(v=kt(e[n]))[b]?d.push(v):h.push(v);(v=C(t,(r=h,a=0<(o=d).length,l=0<r.length,c=function(t,e,n,s,c){var d,h,v,m=0,y="0",w=t&&[],b=[],x=u,T=t||l&&i.find.TAG("*",c),k=_+=null==x?1:Math.random()||.1,S=T.length;for(c&&(u=e==f||e||c);y!==S&&null!=(d=T[y]);y++){if(l&&d){for(h=0,e||d.ownerDocument==f||(p(d),n=!g);v=r[h++];)if(v(d,e||f,n)){s.push(d);break}c&&(_=k)}a&&((d=!v&&d)&&m--,t&&w.push(d))}if(m+=y,a&&y!==m){for(h=0;v=o[h++];)v(w,b,e,n);if(t){if(0<m)for(;y--;)w[y]||b[y]||(b[y]=O.call(s));b=_t(b)}P.apply(s,b),c&&!t&&0<b.length&&1<m+o.length&&at.uniqueSort(s)}return c&&(_=k,u=x),w},a?ut(c):c))).selector=t}return v},l=at.select=function(t,e,n,r){var o,l,u,c,d,p="function"==typeof t&&t,f=!r&&s(t=p.selector||t);if(n=n||[],1===f.length){if(2<(l=f[0]=f[0].slice(0)).length&&"ID"===(u=l[0]).type&&9===e.nodeType&&g&&i.relative[l[1].type]){if(!(e=(i.find.ID(u.matches[0].replace(et,nt),e)||[])[0]))return n;p&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(o=V.needsContext.test(t)?0:l.length;o--&&(u=l[o],!i.relative[c=u.type]);)if((d=i.find[c])&&(r=d(u.matches[0].replace(et,nt),tt.test(l[0].type)&&mt(e.parentNode)||e))){if(l.splice(o,1),!(t=r.length&&wt(l)))return P.apply(n,r),n;break}}return(p||a(t,f))(r,e,!g,n,!e||tt.test(t)&&mt(e.parentNode)||e),n},n.sortStable=b.split("").sort($).join("")===b,n.detectDuplicates=!!d,p(),n.sortDetached=ct((function(t){return 1&t.compareDocumentPosition(f.createElement("fieldset"))})),ct((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||dt("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&ct((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||dt("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),ct((function(t){return null==t.getAttribute("disabled")}))||dt(N,(function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null})),at}(t);x.find=T,x.expr=T.selectors,x.expr[":"]=x.expr.pseudos,x.uniqueSort=x.unique=T.uniqueSort,x.text=T.getText,x.isXMLDoc=T.isXML,x.contains=T.contains,x.escapeSelector=T.escape;var k=function(t,e,n){for(var i=[],r=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&x(t).is(n))break;i.push(t)}return i},S=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},C=x.expr.match.needsContext;function A(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var $=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function E(t,e,n){return h(e)?x.grep(t,(function(t,i){return!!e.call(t,i,t)!==n})):e.nodeType?x.grep(t,(function(t){return t===e!==n})):"string"!=typeof e?x.grep(t,(function(t){return-1<a.call(e,t)!==n})):x.filter(e,t,n)}x.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?x.find.matchesSelector(i,t)?[i]:[]:x.find.matches(t,x.grep(e,(function(t){return 1===t.nodeType})))},x.fn.extend({find:function(t){var e,n,i=this.length,r=this;if("string"!=typeof t)return this.pushStack(x(t).filter((function(){for(e=0;e<i;e++)if(x.contains(r[e],this))return!0})));for(n=this.pushStack([]),e=0;e<i;e++)x.find(t,r[e],n);return 1<i?x.uniqueSort(n):n},filter:function(t){return this.pushStack(E(this,t||[],!1))},not:function(t){return this.pushStack(E(this,t||[],!0))},is:function(t){return!!E(this,"string"==typeof t&&C.test(t)?x(t):t||[],!1).length}});var D,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(x.fn.init=function(t,e,n){var i,r;if(!t)return this;if(n=n||D,"string"==typeof t){if(!(i="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:O.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof x?e[0]:e,x.merge(this,x.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:v,!0)),$.test(i[1])&&x.isPlainObject(e))for(i in e)h(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return(r=v.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):h(t)?void 0!==n.ready?n.ready(t):t(x):x.makeArray(t,this)}).prototype=x.fn,D=x(v);var M=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function j(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}x.fn.extend({has:function(t){var e=x(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(x.contains(this,e[t]))return!0}))},closest:function(t,e){var n,i=0,r=this.length,o=[],s="string"!=typeof t&&x(t);if(!C.test(t))for(;i<r;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&x.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(1<o.length?x.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?a.call(x(t),this[0]):a.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(x.uniqueSort(x.merge(this.get(),x(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),x.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return k(t,"parentNode")},parentsUntil:function(t,e,n){return k(t,"parentNode",n)},next:function(t){return j(t,"nextSibling")},prev:function(t){return j(t,"previousSibling")},nextAll:function(t){return k(t,"nextSibling")},prevAll:function(t){return k(t,"previousSibling")},nextUntil:function(t,e,n){return k(t,"nextSibling",n)},prevUntil:function(t,e,n){return k(t,"previousSibling",n)},siblings:function(t){return S((t.parentNode||{}).firstChild,t)},children:function(t){return S(t.firstChild)},contents:function(t){return null!=t.contentDocument&&i(t.contentDocument)?t.contentDocument:(A(t,"template")&&(t=t.content||t),x.merge([],t.childNodes))}},(function(t,e){x.fn[t]=function(n,i){var r=x.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=x.filter(i,r)),1<this.length&&(P[t]||x.uniqueSort(r),M.test(t)&&r.reverse()),this.pushStack(r)}}));var L=/[^\x20\t\r\n\f]+/g;function N(t){return t}function H(t){throw t}function q(t,e,n,i){var r;try{t&&h(r=t.promise)?r.call(t).done(e).fail(n):t&&h(r=t.then)?r.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}x.Callbacks=function(t){var e,n;t="string"==typeof t?(e=t,n={},x.each(e.match(L)||[],(function(t,e){n[e]=!0})),n):x.extend({},t);var i,r,o,s,a=[],l=[],u=-1,c=function(){for(s=s||t.once,o=i=!0;l.length;u=-1)for(r=l.shift();++u<a.length;)!1===a[u].apply(r[0],r[1])&&t.stopOnFalse&&(u=a.length,r=!1);t.memory||(r=!1),i=!1,s&&(a=r?[]:"")},d={add:function(){return a&&(r&&!i&&(u=a.length-1,l.push(r)),function e(n){x.each(n,(function(n,i){h(i)?t.unique&&d.has(i)||a.push(i):i&&i.length&&"string"!==w(i)&&e(i)}))}(arguments),r&&!i&&c()),this},remove:function(){return x.each(arguments,(function(t,e){for(var n;-1<(n=x.inArray(e,a,n));)a.splice(n,1),n<=u&&u--})),this},has:function(t){return t?-1<x.inArray(t,a):0<a.length},empty:function(){return a&&(a=[]),this},disable:function(){return s=l=[],a=r="",this},disabled:function(){return!a},lock:function(){return s=l=[],r||i||(a=r=""),this},locked:function(){return!!s},fireWith:function(t,e){return s||(e=[t,(e=e||[]).slice?e.slice():e],l.push(e),i||c()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!o}};return d},x.extend({Deferred:function(e){var n=[["notify","progress",x.Callbacks("memory"),x.Callbacks("memory"),2],["resolve","done",x.Callbacks("once memory"),x.Callbacks("once memory"),0,"resolved"],["reject","fail",x.Callbacks("once memory"),x.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},pipe:function(){var t=arguments;return x.Deferred((function(e){x.each(n,(function(n,i){var r=h(t[i[4]])&&t[i[4]];o[i[1]]((function(){var t=r&&r.apply(this,arguments);t&&h(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[i[0]+"With"](this,r?[t]:arguments)}))})),t=null})).promise()},then:function(e,i,r){var o=0;function s(e,n,i,r){return function(){var a=this,l=arguments,u=function(){var t,u;if(!(e<o)){if((t=i.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");u=t&&("object"==typeof t||"function"==typeof t)&&t.then,h(u)?r?u.call(t,s(o,n,N,r),s(o,n,H,r)):(o++,u.call(t,s(o,n,N,r),s(o,n,H,r),s(o,n,N,n.notifyWith))):(i!==N&&(a=void 0,l=[t]),(r||n.resolveWith)(a,l))}},c=r?u:function(){try{u()}catch(t){x.Deferred.exceptionHook&&x.Deferred.exceptionHook(t,c.stackTrace),o<=e+1&&(i!==H&&(a=void 0,l=[t]),n.rejectWith(a,l))}};e?c():(x.Deferred.getStackHook&&(c.stackTrace=x.Deferred.getStackHook()),t.setTimeout(c))}}return x.Deferred((function(t){n[0][3].add(s(0,t,h(r)?r:N,t.notifyWith)),n[1][3].add(s(0,t,h(e)?e:N)),n[2][3].add(s(0,t,h(i)?i:H))})).promise()},promise:function(t){return null!=t?x.extend(t,r):r}},o={};return x.each(n,(function(t,e){var s=e[2],a=e[5];r[e[1]]=s.add,a&&s.add((function(){i=a}),n[3-t][2].disable,n[3-t][3].disable,n[0][2].lock,n[0][3].lock),s.add(e[3].fire),o[e[0]]=function(){return o[e[0]+"With"](this===o?void 0:this,arguments),this},o[e[0]+"With"]=s.fireWith})),r.promise(o),e&&e.call(o,o),o},when:function(t){var e=arguments.length,n=e,i=Array(n),o=r.call(arguments),s=x.Deferred(),a=function(t){return function(n){i[t]=this,o[t]=1<arguments.length?r.call(arguments):n,--e||s.resolveWith(i,o)}};if(e<=1&&(q(t,s.done(a(n)).resolve,s.reject,!e),"pending"===s.state()||h(o[n]&&o[n].then)))return s.then();for(;n--;)q(o[n],a(n),s.reject);return s.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;x.Deferred.exceptionHook=function(e,n){t.console&&t.console.warn&&e&&z.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},x.readyException=function(e){t.setTimeout((function(){throw e}))};var R=x.Deferred();function I(){v.removeEventListener("DOMContentLoaded",I),t.removeEventListener("load",I),x.ready()}x.fn.ready=function(t){return R.then(t).catch((function(t){x.readyException(t)})),this},x.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--x.readyWait:x.isReady)||(x.isReady=!0)!==t&&0<--x.readyWait||R.resolveWith(v,[x])}}),x.ready.then=R.then,"complete"===v.readyState||"loading"!==v.readyState&&!v.documentElement.doScroll?t.setTimeout(x.ready):(v.addEventListener("DOMContentLoaded",I),t.addEventListener("load",I));var F=function(t,e,n,i,r,o,s){var a=0,l=t.length,u=null==n;if("object"===w(n))for(a in r=!0,n)F(t,e,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,h(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(x(t),n)})),e))for(;a<l;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return r?t:u?e.call(t):l?e(t[0],n):o},B=/^-ms-/,W=/-([a-z])/g;function U(t,e){return e.toUpperCase()}function X(t){return t.replace(B,"ms-").replace(W,U)}var Y=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function V(){this.expando=x.expando+V.uid++}V.uid=1,V.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Y(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,r=this.cache(t);if("string"==typeof e)r[X(e)]=n;else for(i in e)r[X(i)]=e[i];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][X(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(e=Array.isArray(e)?e.map(X):(e=X(e))in i?[e]:e.match(L)||[]).length;for(;n--;)delete i[e[n]]}(void 0===e||x.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!x.isEmptyObject(e)}};var G=new V,Q=new V,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function K(t,e,n){var i,r;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:J.test(r)?JSON.parse(r):r)}catch(t){}Q.set(t,e,n)}else n=void 0;return n}x.extend({hasData:function(t){return Q.hasData(t)||G.hasData(t)},data:function(t,e,n){return Q.access(t,e,n)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,n){return G.access(t,e,n)},_removeData:function(t,e){G.remove(t,e)}}),x.fn.extend({data:function(t,e){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===t){if(this.length&&(r=Q.get(o),1===o.nodeType&&!G.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=X(i.slice(5)),K(o,i,r[i]));G.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof t?this.each((function(){Q.set(this,t)})):F(this,(function(e){var n;if(o&&void 0===e)return void 0!==(n=Q.get(o,t))||void 0!==(n=K(o,t))?n:void 0;this.each((function(){Q.set(this,t,e)}))}),null,e,1<arguments.length,null,!0)},removeData:function(t){return this.each((function(){Q.remove(this,t)}))}}),x.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=G.get(t,e),n&&(!i||Array.isArray(n)?i=G.access(t,e,x.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=x.queue(t,e),i=n.length,r=n.shift(),o=x._queueHooks(t,e);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===e&&n.unshift("inprogress"),delete o.stop,r.call(t,(function(){x.dequeue(t,e)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return G.get(t,n)||G.access(t,n,{empty:x.Callbacks("once memory").add((function(){G.remove(t,[e+"queue",n])}))})}}),x.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?x.queue(this[0],t):void 0===e?this:this.each((function(){var n=x.queue(this,t,e);x._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&x.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){x.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,r=x.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=G.get(o[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(e)}});var tt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,et=new RegExp("^(?:([+-])=|)("+tt+")([a-z%]*)$","i"),nt=["Top","Right","Bottom","Left"],it=v.documentElement,rt=function(t){return x.contains(t.ownerDocument,t)},ot={composed:!0};it.getRootNode&&(rt=function(t){return x.contains(t.ownerDocument,t)||t.getRootNode(ot)===t.ownerDocument});var st=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&rt(t)&&"none"===x.css(t,"display")};function at(t,e,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return x.css(t,e,"")},l=a(),u=n&&n[3]||(x.cssNumber[e]?"":"px"),c=t.nodeType&&(x.cssNumber[e]||"px"!==u&&+l)&&et.exec(x.css(t,e));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)x.style(t,e,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c*=2,x.style(t,e,c+u),n=n||[]}return n&&(c=+c||+l||0,r=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=r)),r}var lt={};function ut(t,e){for(var n,i,r,o,s,a,l,u=[],c=0,d=t.length;c<d;c++)(i=t[c]).style&&(n=i.style.display,e?("none"===n&&(u[c]=G.get(i,"display")||null,u[c]||(i.style.display="")),""===i.style.display&&st(i)&&(u[c]=(l=s=o=void 0,s=(r=i).ownerDocument,a=r.nodeName,(l=lt[a])||(o=s.body.appendChild(s.createElement(a)),l=x.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),lt[a]=l)))):"none"!==n&&(u[c]="none",G.set(i,"display",n)));for(c=0;c<d;c++)null!=u[c]&&(t[c].style.display=u[c]);return t}x.fn.extend({show:function(){return ut(this,!0)},hide:function(){return ut(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){st(this)?x(this).show():x(this).hide()}))}});var ct,dt,pt=/^(?:checkbox|radio)$/i,ft=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ht=/^$|^module$|\/(?:java|ecma)script/i;ct=v.createDocumentFragment().appendChild(v.createElement("div")),(dt=v.createElement("input")).setAttribute("type","radio"),dt.setAttribute("checked","checked"),dt.setAttribute("name","t"),ct.appendChild(dt),f.checkClone=ct.cloneNode(!0).cloneNode(!0).lastChild.checked,ct.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!ct.cloneNode(!0).lastChild.defaultValue,ct.innerHTML="<option></option>",f.option=!!ct.lastChild;var gt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function vt(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&A(t,e)?x.merge([t],n):n}function mt(t,e){for(var n=0,i=t.length;n<i;n++)G.set(t[n],"globalEval",!e||G.get(e[n],"globalEval"))}gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td,f.option||(gt.optgroup=gt.option=[1,"<select multiple='multiple'>","</select>"]);var yt=/<|&#?\w+;/;function wt(t,e,n,i,r){for(var o,s,a,l,u,c,d=e.createDocumentFragment(),p=[],f=0,h=t.length;f<h;f++)if((o=t[f])||0===o)if("object"===w(o))x.merge(p,o.nodeType?[o]:o);else if(yt.test(o)){for(s=s||d.appendChild(e.createElement("div")),a=(ft.exec(o)||["",""])[1].toLowerCase(),l=gt[a]||gt._default,s.innerHTML=l[1]+x.htmlPrefilter(o)+l[2],c=l[0];c--;)s=s.lastChild;x.merge(p,s.childNodes),(s=d.firstChild).textContent=""}else p.push(e.createTextNode(o));for(d.textContent="",f=0;o=p[f++];)if(i&&-1<x.inArray(o,i))r&&r.push(o);else if(u=rt(o),s=vt(d.appendChild(o),"script"),u&&mt(s),n)for(c=0;o=s[c++];)ht.test(o.type||"")&&n.push(o);return d}var bt=/^key/,xt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,_t=/^([^.]*)(?:\.(.+)|)/;function Tt(){return!0}function kt(){return!1}function St(t,e){return t===function(){try{return v.activeElement}catch(t){}}()==("focus"===e)}function Ct(t,e,n,i,r,o){var s,a;if("object"==typeof e){for(a in"string"!=typeof n&&(i=i||n,n=void 0),e)Ct(t,a,n,i,e[a],o);return t}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=kt;else if(!r)return t;return 1===o&&(s=r,(r=function(t){return x().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=x.guid++)),t.each((function(){x.event.add(this,e,r,i,n)}))}function At(t,e,n){n?(G.set(t,e,!1),x.event.add(t,e,{namespace:!1,handler:function(t){var i,o,s=G.get(this,e);if(1&t.isTrigger&&this[e]){if(s.length)(x.event.special[e]||{}).delegateType&&t.stopPropagation();else if(s=r.call(arguments),G.set(this,e,s),i=n(this,e),this[e](),s!==(o=G.get(this,e))||i?G.set(this,e,!1):o={},s!==o)return t.stopImmediatePropagation(),t.preventDefault(),o.value}else s.length&&(G.set(this,e,{value:x.event.trigger(x.extend(s[0],x.Event.prototype),s.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===G.get(t,e)&&x.event.add(t,e,Tt)}x.event={global:{},add:function(t,e,n,i,r){var o,s,a,l,u,c,d,p,f,h,g,v=G.get(t);if(Y(t))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&x.find.matchesSelector(it,r),n.guid||(n.guid=x.guid++),(l=v.events)||(l=v.events=Object.create(null)),(s=v.handle)||(s=v.handle=function(e){return void 0!==x&&x.event.triggered!==e.type?x.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(L)||[""]).length;u--;)f=g=(a=_t.exec(e[u])||[])[1],h=(a[2]||"").split(".").sort(),f&&(d=x.event.special[f]||{},f=(r?d.delegateType:d.bindType)||f,d=x.event.special[f]||{},c=x.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&x.expr.match.needsContext.test(r),namespace:h.join(".")},o),(p=l[f])||((p=l[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,i,h,s)||t.addEventListener&&t.addEventListener(f,s)),d.add&&(d.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,c):p.push(c),x.event.global[f]=!0)},remove:function(t,e,n,i,r){var o,s,a,l,u,c,d,p,f,h,g,v=G.hasData(t)&&G.get(t);if(v&&(l=v.events)){for(u=(e=(e||"").match(L)||[""]).length;u--;)if(f=g=(a=_t.exec(e[u])||[])[1],h=(a[2]||"").split(".").sort(),f){for(d=x.event.special[f]||{},p=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!r&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,d.remove&&d.remove.call(t,c));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(t,h,v.handle)||x.removeEvent(t,f,v.handle),delete l[f])}else for(f in l)x.event.remove(t,f+e[u],n,i,!0);x.isEmptyObject(l)&&G.remove(t,"handle events")}},dispatch:function(t){var e,n,i,r,o,s,a=new Array(arguments.length),l=x.event.fix(t),u=(G.get(this,"events")||Object.create(null))[l.type]||[],c=x.event.special[l.type]||{};for(a[0]=l,e=1;e<arguments.length;e++)a[e]=arguments[e];if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){for(s=x.event.handlers.call(this,l,u),e=0;(r=s[e++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(i=((x.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(t,e){var n,i,r,o,s,a=[],l=e.delegateCount,u=t.target;if(l&&u.nodeType&&!("click"===t.type&&1<=t.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[r=(i=e[n]).selector+" "]&&(s[r]=i.needsContext?-1<x(r,this).index(u):x.find(r,this,null,[u]).length),s[r]&&o.push(i);o.length&&a.push({elem:u,handlers:o})}return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(x.Event.prototype,t,{enumerable:!0,configurable:!0,get:h(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[x.expando]?t:new x.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return pt.test(e.type)&&e.click&&A(e,"input")&&At(e,"click",Tt),!1},trigger:function(t){var e=this||t;return pt.test(e.type)&&e.click&&A(e,"input")&&At(e,"click"),!0},_default:function(t){var e=t.target;return pt.test(e.type)&&e.click&&A(e,"input")&&G.get(e,"click")||A(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},x.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},x.Event=function(t,e){if(!(this instanceof x.Event))return new x.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Tt:kt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&x.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[x.expando]=!0},x.Event.prototype={constructor:x.Event,isDefaultPrevented:kt,isPropagationStopped:kt,isImmediatePropagationStopped:kt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Tt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Tt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Tt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},x.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&bt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&xt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},x.event.addProp),x.each({focus:"focusin",blur:"focusout"},(function(t,e){x.event.special[t]={setup:function(){return At(this,t,St),!1},trigger:function(){return At(this,t),!0},delegateType:e}})),x.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){x.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=t.relatedTarget,r=t.handleObj;return i&&(i===this||x.contains(this,i))||(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}})),x.fn.extend({on:function(t,e,n,i){return Ct(this,t,e,n,i)},one:function(t,e,n,i){return Ct(this,t,e,n,i,1)},off:function(t,e,n){var i,r;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,x(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(r in t)this.off(r,e,t[r]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=kt),this.each((function(){x.event.remove(this,t,n,e)}))}});var $t=/<script|<style|<link/i,Et=/checked\s*(?:[^=]|=\s*.checked.)/i,Dt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ot(t,e){return A(t,"table")&&A(11!==e.nodeType?e:e.firstChild,"tr")&&x(t).children("tbody")[0]||t}function Mt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Pt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function jt(t,e){var n,i,r,o,s,a;if(1===e.nodeType){if(G.hasData(t)&&(a=G.get(t).events))for(r in G.remove(e,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)x.event.add(e,r,a[r][n]);Q.hasData(t)&&(o=Q.access(t),s=x.extend({},o),Q.set(e,s))}}function Lt(t,e,n,i){e=o(e);var r,s,a,l,u,c,d=0,p=t.length,g=p-1,v=e[0],m=h(v);if(m||1<p&&"string"==typeof v&&!f.checkClone&&Et.test(v))return t.each((function(r){var o=t.eq(r);m&&(e[0]=v.call(this,r,o.html())),Lt(o,e,n,i)}));if(p&&(s=(r=wt(e,t[0].ownerDocument,!1,t,i)).firstChild,1===r.childNodes.length&&(r=s),s||i)){for(l=(a=x.map(vt(r,"script"),Mt)).length;d<p;d++)u=r,d!==g&&(u=x.clone(u,!0,!0),l&&x.merge(a,vt(u,"script"))),n.call(t[d],u,d);if(l)for(c=a[a.length-1].ownerDocument,x.map(a,Pt),d=0;d<l;d++)u=a[d],ht.test(u.type||"")&&!G.access(u,"globalEval")&&x.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?x._evalUrl&&!u.noModule&&x._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},c):y(u.textContent.replace(Dt,""),u,c))}return t}function Nt(t,e,n){for(var i,r=e?x.filter(e,t):t,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||x.cleanData(vt(i)),i.parentNode&&(n&&rt(i)&&mt(vt(i,"script")),i.parentNode.removeChild(i));return t}x.extend({htmlPrefilter:function(t){return t},clone:function(t,e,n){var i,r,o,s,a,l,u,c=t.cloneNode(!0),d=rt(t);if(!(f.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||x.isXMLDoc(t)))for(s=vt(c),i=0,r=(o=vt(t)).length;i<r;i++)a=o[i],"input"===(u=(l=s[i]).nodeName.toLowerCase())&&pt.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(e)if(n)for(o=o||vt(t),s=s||vt(c),i=0,r=o.length;i<r;i++)jt(o[i],s[i]);else jt(t,c);return 0<(s=vt(c,"script")).length&&mt(s,!d&&vt(t,"script")),c},cleanData:function(t){for(var e,n,i,r=x.event.special,o=0;void 0!==(n=t[o]);o++)if(Y(n)){if(e=n[G.expando]){if(e.events)for(i in e.events)r[i]?x.event.remove(n,i):x.removeEvent(n,i,e.handle);n[G.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),x.fn.extend({detach:function(t){return Nt(this,t,!0)},remove:function(t){return Nt(this,t)},text:function(t){return F(this,(function(t){return void 0===t?x.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Lt(this,arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ot(this,t).appendChild(t)}))},prepend:function(){return Lt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Ot(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Lt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Lt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(x.cleanData(vt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return x.clone(this,t,e)}))},html:function(t){return F(this,(function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!$t.test(t)&&!gt[(ft.exec(t)||["",""])[1].toLowerCase()]){t=x.htmlPrefilter(t);try{for(;n<i;n++)1===(e=this[n]||{}).nodeType&&(x.cleanData(vt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Lt(this,arguments,(function(e){var n=this.parentNode;x.inArray(this,t)<0&&(x.cleanData(vt(this)),n&&n.replaceChild(e,this))}),t)}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){x.fn[t]=function(t){for(var n,i=[],r=x(t),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),x(r[a])[e](n),s.apply(i,n.get());return this.pushStack(i)}}));var Ht=new RegExp("^("+tt+")(?!px)[a-z%]+$","i"),qt=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=t),n.getComputedStyle(e)},zt=function(t,e,n){var i,r,o={};for(r in e)o[r]=t.style[r],t.style[r]=e[r];for(r in i=n.call(t),e)t.style[r]=o[r];return i},Rt=new RegExp(nt.join("|"),"i");function It(t,e,n){var i,r,o,s,a=t.style;return(n=n||qt(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||rt(t)||(s=x.style(t,e)),!f.pixelBoxStyles()&&Ht.test(s)&&Rt.test(e)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function Ft(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function e(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",it.appendChild(u).appendChild(c);var e=t.getComputedStyle(c);i="1%"!==e.top,l=12===n(e.marginLeft),c.style.right="60%",s=36===n(e.right),r=36===n(e.width),c.style.position="absolute",o=12===n(c.offsetWidth/3),it.removeChild(u),c=null}}function n(t){return Math.round(parseFloat(t))}var i,r,o,s,a,l,u=v.createElement("div"),c=v.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===c.style.backgroundClip,x.extend(f,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,n,i,r;return null==a&&(e=v.createElement("table"),n=v.createElement("tr"),i=v.createElement("div"),e.style.cssText="position:absolute;left:-11111px",n.style.height="1px",i.style.height="9px",it.appendChild(e).appendChild(n).appendChild(i),r=t.getComputedStyle(n),a=3<parseInt(r.height),it.removeChild(e)),a}}))}();var Bt=["Webkit","Moz","ms"],Wt=v.createElement("div").style,Ut={};function Xt(t){return x.cssProps[t]||Ut[t]||(t in Wt?t:Ut[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),n=Bt.length;n--;)if((t=Bt[n]+e)in Wt)return t}(t)||t)}var Yt=/^(none|table(?!-c[ea]).+)/,Vt=/^--/,Gt={position:"absolute",visibility:"hidden",display:"block"},Qt={letterSpacing:"0",fontWeight:"400"};function Jt(t,e,n){var i=et.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function Zt(t,e,n,i,r,o){var s="width"===e?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=x.css(t,n+nt[s],!0,r)),i?("content"===n&&(l-=x.css(t,"padding"+nt[s],!0,r)),"margin"!==n&&(l-=x.css(t,"border"+nt[s]+"Width",!0,r))):(l+=x.css(t,"padding"+nt[s],!0,r),"padding"!==n?l+=x.css(t,"border"+nt[s]+"Width",!0,r):a+=x.css(t,"border"+nt[s]+"Width",!0,r));return!i&&0<=o&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-l-a-.5))||0),l}function Kt(t,e,n){var i=qt(t),r=(!f.boxSizingReliable()||n)&&"border-box"===x.css(t,"boxSizing",!1,i),o=r,s=It(t,e,i),a="offset"+e[0].toUpperCase()+e.slice(1);if(Ht.test(s)){if(!n)return s;s="auto"}return(!f.boxSizingReliable()&&r||!f.reliableTrDimensions()&&A(t,"tr")||"auto"===s||!parseFloat(s)&&"inline"===x.css(t,"display",!1,i))&&t.getClientRects().length&&(r="border-box"===x.css(t,"boxSizing",!1,i),(o=a in t)&&(s=t[a])),(s=parseFloat(s)||0)+Zt(t,e,n||(r?"border":"content"),o,i,s)+"px"}function te(t,e,n,i,r){return new te.prototype.init(t,e,n,i,r)}x.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=It(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,o,s,a=X(e),l=Vt.test(e),u=t.style;if(l||(e=Xt(a)),s=x.cssHooks[e]||x.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(t,!1,i))?r:u[e];"string"==(o=typeof n)&&(r=et.exec(n))&&r[1]&&(n=at(t,e,r),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(x.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==n||0!==e.indexOf("background")||(u[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l?u.setProperty(e,n):u[e]=n))}},css:function(t,e,n,i){var r,o,s,a=X(e);return Vt.test(e)||(e=Xt(a)),(s=x.cssHooks[e]||x.cssHooks[a])&&"get"in s&&(r=s.get(t,!0,n)),void 0===r&&(r=It(t,e,i)),"normal"===r&&e in Qt&&(r=Qt[e]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),x.each(["height","width"],(function(t,e){x.cssHooks[e]={get:function(t,n,i){if(n)return!Yt.test(x.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Kt(t,e,i):zt(t,Gt,(function(){return Kt(t,e,i)}))},set:function(t,n,i){var r,o=qt(t),s=!f.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===x.css(t,"boxSizing",!1,o),l=i?Zt(t,e,i,a,o):0;return a&&s&&(l-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-Zt(t,e,"border",!1,o)-.5)),l&&(r=et.exec(n))&&"px"!==(r[3]||"px")&&(t.style[e]=n,n=x.css(t,e)),Jt(0,n,l)}}})),x.cssHooks.marginLeft=Ft(f.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(It(t,"marginLeft"))||t.getBoundingClientRect().left-zt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),x.each({margin:"",padding:"",border:"Width"},(function(t,e){x.cssHooks[t+e]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[t+nt[i]+e]=o[i]||o[i-2]||o[0];return r}},"margin"!==t&&(x.cssHooks[t+e].set=Jt)})),x.fn.extend({css:function(t,e){return F(this,(function(t,e,n){var i,r,o={},s=0;if(Array.isArray(e)){for(i=qt(t),r=e.length;s<r;s++)o[e[s]]=x.css(t,e[s],!1,i);return o}return void 0!==n?x.style(t,e,n):x.css(t,e)}),t,e,1<arguments.length)}}),((x.Tween=te).prototype={constructor:te,init:function(t,e,n,i,r,o){this.elem=t,this.prop=n,this.easing=r||x.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var t=te.propHooks[this.prop];return t&&t.get?t.get(this):te.propHooks._default.get(this)},run:function(t){var e,n=te.propHooks[this.prop];return this.options.duration?this.pos=e=x.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):te.propHooks._default.set(this),this}}).init.prototype=te.prototype,(te.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=x.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){x.fx.step[t.prop]?x.fx.step[t.prop](t):1!==t.elem.nodeType||!x.cssHooks[t.prop]&&null==t.elem.style[Xt(t.prop)]?t.elem[t.prop]=t.now:x.style(t.elem,t.prop,t.now+t.unit)}}}).scrollTop=te.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},x.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},x.fx=te.prototype.init,x.fx.step={};var ee,ne,ie,re,oe=/^(?:toggle|show|hide)$/,se=/queueHooks$/;function ae(){ne&&(!1===v.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(ae):t.setTimeout(ae,x.fx.interval),x.fx.tick())}function le(){return t.setTimeout((function(){ee=void 0})),ee=Date.now()}function ue(t,e){var n,i=0,r={height:t};for(e=e?1:0;i<4;i+=2-e)r["margin"+(n=nt[i])]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r}function ce(t,e,n){for(var i,r=(de.tweeners[e]||[]).concat(de.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,e,t))return i}function de(t,e,n){var i,r,o=0,s=de.prefilters.length,a=x.Deferred().always((function(){delete l.elem})),l=function(){if(r)return!1;for(var e=ee||le(),n=Math.max(0,u.startTime+u.duration-e),i=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);return a.notifyWith(t,[u,i,n]),i<1&&s?n:(s||a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:x.extend({},e),opts:x.extend(!0,{specialEasing:{},easing:x.easing._default},n),originalProperties:e,originalOptions:n,startTime:ee||le(),duration:n.duration,tweens:[],createTween:function(e,n){var i=x.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),c=u.props;for(function(t,e){var n,i,r,o,s;for(n in t)if(r=e[i=X(n)],o=t[n],Array.isArray(o)&&(r=o[1],o=t[n]=o[0]),n!==i&&(t[i]=o,delete t[n]),(s=x.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete t[i],o)n in t||(t[n]=o[n],e[n]=r);else e[i]=r}(c,u.opts.specialEasing);o<s;o++)if(i=de.prefilters[o].call(u,t,c,u.opts))return h(i.stop)&&(x._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return x.map(c,ce,u),h(u.opts.start)&&u.opts.start.call(t,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),x.fx.timer(x.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u}x.Animation=x.extend(de,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return at(n.elem,t,et.exec(e),n),n}]},tweener:function(t,e){h(t)?(e=t,t=["*"]):t=t.match(L);for(var n,i=0,r=t.length;i<r;i++)n=t[i],de.tweeners[n]=de.tweeners[n]||[],de.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,r,o,s,a,l,u,c,d="width"in e||"height"in e,p=this,f={},h=t.style,g=t.nodeType&&st(t),v=G.get(t,"fxshow");for(i in n.queue||(null==(s=x._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,x.queue(t,"fx").length||s.empty.fire()}))}))),e)if(r=e[i],oe.test(r)){if(delete e[i],o=o||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!v||void 0===v[i])continue;g=!0}f[i]=v&&v[i]||x.style(t,i)}if((l=!x.isEmptyObject(e))||!x.isEmptyObject(f))for(i in d&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=v&&v.display)&&(u=G.get(t,"display")),"none"===(c=x.css(t,"display"))&&(u?c=u:(ut([t],!0),u=t.style.display||u,c=x.css(t,"display"),ut([t]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===x.css(t,"float")&&(l||(p.done((function(){h.display=u})),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),l=!1,f)l||(v?"hidden"in v&&(g=v.hidden):v=G.access(t,"fxshow",{display:u}),o&&(v.hidden=!g),g&&ut([t],!0),p.done((function(){for(i in g||ut([t]),G.remove(t,"fxshow"),f)x.style(t,i,f[i])}))),l=ce(g?v[i]:0,i,p),i in v||(v[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?de.prefilters.unshift(t):de.prefilters.push(t)}}),x.speed=function(t,e,n){var i=t&&"object"==typeof t?x.extend({},t):{complete:n||!n&&e||h(t)&&t,duration:t,easing:n&&e||e&&!h(e)&&e};return x.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in x.fx.speeds?i.duration=x.fx.speeds[i.duration]:i.duration=x.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){h(i.old)&&i.old.call(this),i.queue&&x.dequeue(this,i.queue)},i},x.fn.extend({fadeTo:function(t,e,n,i){return this.filter(st).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var r=x.isEmptyObject(t),o=x.speed(e,n,i),s=function(){var e=de(this,x.extend({},t),o);(r||G.get(this,"finish"))&&e.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,r=null!=t&&t+"queueHooks",o=x.timers,s=G.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&se.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=t&&o[r].queue!==t||(o[r].anim.stop(n),e=!1,o.splice(r,1));!e&&n||x.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=G.get(this),i=n[t+"queue"],r=n[t+"queueHooks"],o=x.timers,s=i?i.length:0;for(n.finish=!0,x.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<s;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish}))}}),x.each(["toggle","show","hide"],(function(t,e){var n=x.fn[e];x.fn[e]=function(t,i,r){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(ue(e,!0),t,i,r)}})),x.each({slideDown:ue("show"),slideUp:ue("hide"),slideToggle:ue("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){x.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}})),x.timers=[],x.fx.tick=function(){var t,e=0,n=x.timers;for(ee=Date.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||x.fx.stop(),ee=void 0},x.fx.timer=function(t){x.timers.push(t),x.fx.start()},x.fx.interval=13,x.fx.start=function(){ne||(ne=!0,ae())},x.fx.stop=function(){ne=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fn.delay=function(e,n){return e=x.fx&&x.fx.speeds[e]||e,n=n||"fx",this.queue(n,(function(n,i){var r=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(r)}}))},ie=v.createElement("input"),re=v.createElement("select").appendChild(v.createElement("option")),ie.type="checkbox",f.checkOn=""!==ie.value,f.optSelected=re.selected,(ie=v.createElement("input")).value="t",ie.type="radio",f.radioValue="t"===ie.value;var pe,fe=x.expr.attrHandle;x.fn.extend({attr:function(t,e){return F(this,x.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each((function(){x.removeAttr(this,t)}))}}),x.extend({attr:function(t,e,n){var i,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?x.prop(t,e,n):(1===o&&x.isXMLDoc(t)||(r=x.attrHooks[e.toLowerCase()]||(x.expr.match.bool.test(e)?pe:void 0)),void 0!==n?null===n?void x.removeAttr(t,e):r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:(t.setAttribute(e,n+""),n):r&&"get"in r&&null!==(i=r.get(t,e))?i:null==(i=x.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!f.radioValue&&"radio"===e&&A(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,r=e&&e.match(L);if(r&&1===t.nodeType)for(;n=r[i++];)t.removeAttribute(n)}}),pe={set:function(t,e,n){return!1===e?x.removeAttr(t,n):t.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=fe[e]||x.find.attr;fe[e]=function(t,e,i){var r,o,s=e.toLowerCase();return i||(o=fe[s],fe[s]=r,r=null!=n(t,e,i)?s:null,fe[s]=o),r}}));var he=/^(?:input|select|textarea|button)$/i,ge=/^(?:a|area)$/i;function ve(t){return(t.match(L)||[]).join(" ")}function me(t){return t.getAttribute&&t.getAttribute("class")||""}function ye(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(L)||[]}x.fn.extend({prop:function(t,e){return F(this,x.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each((function(){delete this[x.propFix[t]||t]}))}}),x.extend({prop:function(t,e,n){var i,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&x.isXMLDoc(t)||(e=x.propFix[e]||e,r=x.propHooks[e]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:t[e]=n:r&&"get"in r&&null!==(i=r.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=x.find.attr(t,"tabindex");return e?parseInt(e,10):he.test(t.nodeName)||ge.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(x.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){x.propFix[this.toLowerCase()]=this})),x.fn.extend({addClass:function(t){var e,n,i,r,o,s,a,l=0;if(h(t))return this.each((function(e){x(this).addClass(t.call(this,e,me(this)))}));if((e=ye(t)).length)for(;n=this[l++];)if(r=me(n),i=1===n.nodeType&&" "+ve(r)+" "){for(s=0;o=e[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(a=ve(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,r,o,s,a,l=0;if(h(t))return this.each((function(e){x(this).removeClass(t.call(this,e,me(this)))}));if(!arguments.length)return this.attr("class","");if((e=ye(t)).length)for(;n=this[l++];)if(r=me(n),i=1===n.nodeType&&" "+ve(r)+" "){for(s=0;o=e[s++];)for(;-1<i.indexOf(" "+o+" ");)i=i.replace(" "+o+" "," ");r!==(a=ve(i))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t,i="string"===n||Array.isArray(t);return"boolean"==typeof e&&i?e?this.addClass(t):this.removeClass(t):h(t)?this.each((function(n){x(this).toggleClass(t.call(this,n,me(this),e),e)})):this.each((function(){var e,r,o,s;if(i)for(r=0,o=x(this),s=ye(t);e=s[r++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==n||((e=me(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":G.get(this,"__className__")||""))}))},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+ve(me(n))+" ").indexOf(e))return!0;return!1}});var we=/\r/g;x.fn.extend({val:function(t){var e,n,i,r=this[0];return arguments.length?(i=h(t),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?t.call(this,n,x(this).val()):t)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=x.map(r,(function(t){return null==t?"":t+""}))),(e=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))}))):r?(e=x.valHooks[r.type]||x.valHooks[r.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(we,""):null==n?"":n:void 0}}),x.extend({valHooks:{option:{get:function(t){var e=x.find.attr(t,"value");return null!=e?e:ve(x.text(t))}},select:{get:function(t){var e,n,i,r=t.options,o=t.selectedIndex,s="select-one"===t.type,a=s?null:[],l=s?o+1:r.length;for(i=o<0?l:s?o:0;i<l;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(e=x(n).val(),s)return e;a.push(e)}return a},set:function(t,e){for(var n,i,r=t.options,o=x.makeArray(e),s=r.length;s--;)((i=r[s]).selected=-1<x.inArray(x.valHooks.option.get(i),o))&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),x.each(["radio","checkbox"],(function(){x.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<x.inArray(x(t).val(),e)}},f.checkOn||(x.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),f.focusin="onfocusin"in t;var be=/^(?:focusinfocus|focusoutblur)$/,xe=function(t){t.stopPropagation()};x.extend(x.event,{trigger:function(e,n,i,r){var o,s,a,l,u,d,p,f,m=[i||v],y=c.call(e,"type")?e.type:e,w=c.call(e,"namespace")?e.namespace.split("."):[];if(s=f=a=i=i||v,3!==i.nodeType&&8!==i.nodeType&&!be.test(y+x.event.triggered)&&(-1<y.indexOf(".")&&(y=(w=y.split(".")).shift(),w.sort()),u=y.indexOf(":")<0&&"on"+y,(e=e[x.expando]?e:new x.Event(y,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=w.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+w.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:x.makeArray(n,[e]),p=x.event.special[y]||{},r||!p.trigger||!1!==p.trigger.apply(i,n))){if(!r&&!p.noBubble&&!g(i)){for(l=p.delegateType||y,be.test(l+y)||(s=s.parentNode);s;s=s.parentNode)m.push(s),a=s;a===(i.ownerDocument||v)&&m.push(a.defaultView||a.parentWindow||t)}for(o=0;(s=m[o++])&&!e.isPropagationStopped();)f=s,e.type=1<o?l:p.bindType||y,(d=(G.get(s,"events")||Object.create(null))[e.type]&&G.get(s,"handle"))&&d.apply(s,n),(d=u&&s[u])&&d.apply&&Y(s)&&(e.result=d.apply(s,n),!1===e.result&&e.preventDefault());return e.type=y,r||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(m.pop(),n)||!Y(i)||u&&h(i[y])&&!g(i)&&((a=i[u])&&(i[u]=null),x.event.triggered=y,e.isPropagationStopped()&&f.addEventListener(y,xe),i[y](),e.isPropagationStopped()&&f.removeEventListener(y,xe),x.event.triggered=void 0,a&&(i[u]=a)),e.result}},simulate:function(t,e,n){var i=x.extend(new x.Event,n,{type:t,isSimulated:!0});x.event.trigger(i,null,e)}}),x.fn.extend({trigger:function(t,e){return this.each((function(){x.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return x.event.trigger(t,e,n,!0)}}),f.focusin||x.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){x.event.simulate(e,t.target,x.event.fix(t))};x.event.special[e]={setup:function(){var i=this.ownerDocument||this.document||this,r=G.access(i,e);r||i.addEventListener(t,n,!0),G.access(i,e,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=G.access(i,e)-1;r?G.access(i,e,r):(i.removeEventListener(t,n,!0),G.remove(i,e))}}}));var _e=t.location,Te={guid:Date.now()},ke=/\?/;x.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+e),n};var Se=/\[\]$/,Ce=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,$e=/^(?:input|select|textarea|keygen)/i;function Ee(t,e,n,i){var r;if(Array.isArray(e))x.each(e,(function(e,r){n||Se.test(t)?i(t,r):Ee(t+"["+("object"==typeof r&&null!=r?e:"")+"]",r,n,i)}));else if(n||"object"!==w(e))i(t,e);else for(r in e)Ee(t+"["+r+"]",e[r],n,i)}x.param=function(t,e){var n,i=[],r=function(t,e){var n=h(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!x.isPlainObject(t))x.each(t,(function(){r(this.name,this.value)}));else for(n in t)Ee(n,t[n],e,r);return i.join("&")},x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=x.prop(this,"elements");return t?x.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!x(this).is(":disabled")&&$e.test(this.nodeName)&&!Ae.test(t)&&(this.checked||!pt.test(t))})).map((function(t,e){var n=x(this).val();return null==n?null:Array.isArray(n)?x.map(n,(function(t){return{name:e.name,value:t.replace(Ce,"\r\n")}})):{name:e.name,value:n.replace(Ce,"\r\n")}})).get()}});var De=/%20/g,Oe=/#.*$/,Me=/([?&])_=[^&]*/,Pe=/^(.*?):[ \t]*([^\r\n]*)$/gm,je=/^(?:GET|HEAD)$/,Le=/^\/\//,Ne={},He={},qe="*/".concat("*"),ze=v.createElement("a");function Re(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,r=0,o=e.toLowerCase().match(L)||[];if(h(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function Ie(t,e,n,i){var r={},o=t===He;function s(a){var l;return r[a]=!0,x.each(t[a]||[],(function(t,a){var u=a(e,n,i);return"string"!=typeof u||o||r[u]?o?!(l=u):void 0:(e.dataTypes.unshift(u),s(u),!1)})),l}return s(e.dataTypes[0])||!r["*"]&&s("*")}function Fe(t,e){var n,i,r=x.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((r[n]?t:i||(i={}))[n]=e[n]);return i&&x.extend(!0,t,i),t}ze.href=_e.href,x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_e.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qe,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Fe(Fe(t,x.ajaxSettings),e):Fe(x.ajaxSettings,t)},ajaxPrefilter:Re(Ne),ajaxTransport:Re(He),ajax:function(e,n){"object"==typeof e&&(n=e,e=void 0),n=n||{};var i,r,o,s,a,l,u,c,d,p,f=x.ajaxSetup({},n),h=f.context||f,g=f.context&&(h.nodeType||h.jquery)?x(h):x.event,m=x.Deferred(),y=x.Callbacks("once memory"),w=f.statusCode||{},b={},_={},T="canceled",k={readyState:0,getResponseHeader:function(t){var e;if(u){if(!s)for(s={};e=Pe.exec(o);)s[e[1].toLowerCase()+" "]=(s[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=s[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return u?o:null},setRequestHeader:function(t,e){return null==u&&(t=_[t.toLowerCase()]=_[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){return null==u&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(u)k.always(t[k.status]);else for(e in t)w[e]=[w[e],t[e]];return this},abort:function(t){var e=t||T;return i&&i.abort(e),S(0,e),this}};if(m.promise(k),f.url=((e||f.url||_e.href)+"").replace(Le,_e.protocol+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(L)||[""],null==f.crossDomain){l=v.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=ze.protocol+"//"+ze.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=x.param(f.data,f.traditional)),Ie(Ne,f,n,k),u)return k;for(d in(c=x.event&&f.global)&&0==x.active++&&x.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!je.test(f.type),r=f.url.replace(Oe,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(De,"+")):(p=f.url.slice(r.length),f.data&&(f.processData||"string"==typeof f.data)&&(r+=(ke.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(r=r.replace(Me,"$1"),p=(ke.test(r)?"&":"?")+"_="+Te.guid+++p),f.url=r+p),f.ifModified&&(x.lastModified[r]&&k.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&k.setRequestHeader("If-None-Match",x.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&k.setRequestHeader("Content-Type",f.contentType),k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+qe+"; q=0.01":""):f.accepts["*"]),f.headers)k.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.beforeSend.call(h,k,f)||u))return k.abort();if(T="abort",y.add(f.complete),k.done(f.success),k.fail(f.error),i=Ie(He,f,n,k)){if(k.readyState=1,c&&g.trigger("ajaxSend",[k,f]),u)return k;f.async&&0<f.timeout&&(a=t.setTimeout((function(){k.abort("timeout")}),f.timeout));try{u=!1,i.send(b,S)}catch(e){if(u)throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,n,s,l){var d,p,v,b,_,T=n;u||(u=!0,a&&t.clearTimeout(a),i=void 0,o=l||"",k.readyState=0<e?4:0,d=200<=e&&e<300||304===e,s&&(b=function(t,e,n){for(var i,r,o,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||t.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(f,k,s)),!d&&-1<x.inArray("script",f.dataTypes)&&(f.converters["text script"]=function(){}),b=function(t,e,n,i){var r,o,s,a,l,u={},c=t.dataTypes.slice();if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(o=c.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=u[l+" "+o]||u["* "+o]))for(r in u)if((a=r.split(" "))[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[r]:!0!==u[r]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}(f,b,k,d),d?(f.ifModified&&((_=k.getResponseHeader("Last-Modified"))&&(x.lastModified[r]=_),(_=k.getResponseHeader("etag"))&&(x.etag[r]=_)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=b.state,p=b.data,d=!(v=b.error))):(v=T,!e&&T||(T="error",e<0&&(e=0))),k.status=e,k.statusText=(n||T)+"",d?m.resolveWith(h,[p,T,k]):m.rejectWith(h,[k,T,v]),k.statusCode(w),w=void 0,c&&g.trigger(d?"ajaxSuccess":"ajaxError",[k,f,d?p:v]),y.fireWith(h,[k,T]),c&&(g.trigger("ajaxComplete",[k,f]),--x.active||x.event.trigger("ajaxStop")))}return k},getJSON:function(t,e,n){return x.get(t,e,n,"json")},getScript:function(t,e){return x.get(t,void 0,e,"script")}}),x.each(["get","post"],(function(t,e){x[e]=function(t,n,i,r){return h(n)&&(r=r||i,i=n,n=void 0),x.ajax(x.extend({url:t,type:e,dataType:r,data:n,success:i},x.isPlainObject(t)&&t))}})),x.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),x._evalUrl=function(t,e,n){return x.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){x.globalEval(t,e,n)}})},x.fn.extend({wrapAll:function(t){var e;return this[0]&&(h(t)&&(t=t.call(this[0])),e=x(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return h(t)?this.each((function(e){x(this).wrapInner(t.call(this,e))})):this.each((function(){var e=x(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=h(t);return this.each((function(n){x(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){x(this).replaceWith(this.childNodes)})),this}}),x.expr.pseudos.hidden=function(t){return!x.expr.pseudos.visible(t)},x.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},x.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var Be={0:200,1223:204},We=x.ajaxSettings.xhr();f.cors=!!We&&"withCredentials"in We,f.ajax=We=!!We,x.ajaxTransport((function(e){var n,i;if(f.cors||We&&!e.crossDomain)return{send:function(r,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);n=function(t){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Be[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout((function(){n&&i()}))},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(r){if(n)throw r}},abort:function(){n&&n()}}})),x.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return x.globalEval(t),t}}}),x.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),x.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(i,r){e=x("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&r("error"===t.type?404:200,t.type)}),v.head.appendChild(e[0])},abort:function(){n&&n()}}}));var Ue,Xe=[],Ye=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Xe.pop()||x.expando+"_"+Te.guid++;return this[t]=!0,t}}),x.ajaxPrefilter("json jsonp",(function(e,n,i){var r,o,s,a=!1!==e.jsonp&&(Ye.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ye.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=h(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ye,"$1"+r):!1!==e.jsonp&&(e.url+=(ke.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||x.error(r+" was not called"),s[0]},e.dataTypes[0]="json",o=t[r],t[r]=function(){s=arguments},i.always((function(){void 0===o?x(t).removeProp(r):t[r]=o,e[r]&&(e.jsonpCallback=n.jsonpCallback,Xe.push(r)),s&&h(o)&&o(s[0]),s=o=void 0})),"script"})),f.createHTMLDocument=((Ue=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ue.childNodes.length),x.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(f.createHTMLDocument?((i=(e=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,e.head.appendChild(i)):e=v),o=!n&&[],(r=$.exec(t))?[e.createElement(r[1])]:(r=wt([t],e,o),o&&o.length&&x(o).remove(),x.merge([],r.childNodes)));var i,r,o},x.fn.load=function(t,e,n){var i,r,o,s=this,a=t.indexOf(" ");return-1<a&&(i=ve(t.slice(a)),t=t.slice(0,a)),h(e)?(n=e,e=void 0):e&&"object"==typeof e&&(r="POST"),0<s.length&&x.ajax({url:t,type:r||"GET",dataType:"html",data:e}).done((function(t){o=arguments,s.html(i?x("<div>").append(x.parseHTML(t)).find(i):t)})).always(n&&function(t,e){s.each((function(){n.apply(this,o||[t.responseText,e,t])}))}),this},x.expr.pseudos.animated=function(t){return x.grep(x.timers,(function(e){return t===e.elem})).length},x.offset={setOffset:function(t,e,n){var i,r,o,s,a,l,u=x.css(t,"position"),c=x(t),d={};"static"===u&&(t.style.position="relative"),a=c.offset(),o=x.css(t,"top"),l=x.css(t,"left"),("absolute"===u||"fixed"===u)&&-1<(o+l).indexOf("auto")?(s=(i=c.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),h(e)&&(e=e.call(t,n,x.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+r),"using"in e?e.using.call(t,d):("number"==typeof d.top&&(d.top+="px"),"number"==typeof d.left&&(d.left+="px"),c.css(d))}},x.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){x.offset.setOffset(this,t,e)}));var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,i=this[0],r={top:0,left:0};if("fixed"===x.css(i,"position"))e=i.getBoundingClientRect();else{for(e=this.offset(),n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===x.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&((r=x(t).offset()).top+=x.css(t,"borderTopWidth",!0),r.left+=x.css(t,"borderLeftWidth",!0))}return{top:e.top-r.top-x.css(i,"marginTop",!0),left:e.left-r.left-x.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent;t&&"static"===x.css(t,"position");)t=t.offsetParent;return t||it}))}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;x.fn[t]=function(i){return F(this,(function(t,i,r){var o;if(g(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===r)return o?o[e]:t[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):t[i]=r}),t,i,arguments.length)}})),x.each(["top","left"],(function(t,e){x.cssHooks[e]=Ft(f.pixelPosition,(function(t,n){if(n)return n=It(t,e),Ht.test(n)?x(t).position()[e]+"px":n}))})),x.each({Height:"height",Width:"width"},(function(t,e){x.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,i){x.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return F(this,(function(e,n,r){var o;return g(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===r?x.css(e,n,a):x.style(e,n,r,a)}),e,s?r:void 0,s)}}))})),x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){x.fn[e]=function(t){return this.on(e,t)}})),x.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){x.fn[e]=function(t,n){return 0<arguments.length?this.on(e,null,t,n):this.trigger(e)}}));var Ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;x.proxy=function(t,e){var n,i,o;if("string"==typeof e&&(n=t[e],e=t,t=n),h(t))return i=r.call(arguments,2),(o=function(){return t.apply(e||this,i.concat(r.call(arguments)))}).guid=t.guid=t.guid||x.guid++,o},x.holdReady=function(t){t?x.readyWait++:x.ready(!0)},x.isArray=Array.isArray,x.parseJSON=JSON.parse,x.nodeName=A,x.isFunction=h,x.isWindow=g,x.camelCase=X,x.type=w,x.now=Date.now,x.isNumeric=function(t){var e=x.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},x.trim=function(t){return null==t?"":(t+"").replace(Ve,"")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return x}));var Ge=t.jQuery,Qe=t.$;return x.noConflict=function(e){return t.$===x&&(t.$=Qe),e&&t.jQuery===x&&(t.jQuery=Ge),x},void 0===e&&(t.jQuery=t.$=x),x})),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){"use strict";var e,n=window.Slick||{};e=0,(n=function(n,i){var r,o=this;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(n),appendDots:t(n),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,n){return t('<button type="button" />').text(n+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.focussed=!1,o.interrupted=!1,o.hidden="hidden",o.paused=!0,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=t(n),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,r=t(n).data("slick")||{},o.options=t.extend({},o.defaults,i,r),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,void 0!==document.mozHidden?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=t.proxy(o.autoPlay,o),o.autoPlayClear=t.proxy(o.autoPlayClear,o),o.autoPlayIterator=t.proxy(o.autoPlayIterator,o),o.changeSlide=t.proxy(o.changeSlide,o),o.clickHandler=t.proxy(o.clickHandler,o),o.selectHandler=t.proxy(o.selectHandler,o),o.setPosition=t.proxy(o.setPosition,o),o.swipeHandler=t.proxy(o.swipeHandler,o),o.dragHandler=t.proxy(o.dragHandler,o),o.keyHandler=t.proxy(o.keyHandler,o),o.instanceUid=e++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},n.prototype.addSlide=n.prototype.slickAdd=function(e,n,i){var r=this;if("boolean"==typeof n)i=n,n=null;else if(n<0||n>=r.slideCount)return!1;r.unload(),"number"==typeof n?0===n&&0===r.$slides.length?t(e).appendTo(r.$slideTrack):i?t(e).insertBefore(r.$slides.eq(n)):t(e).insertAfter(r.$slides.eq(n)):!0===i?t(e).prependTo(r.$slideTrack):t(e).appendTo(r.$slideTrack),r.$slides=r.$slideTrack.children(this.options.slide),r.$slideTrack.children(this.options.slide).detach(),r.$slideTrack.append(r.$slides),r.$slides.each((function(e,n){t(n).attr("data-slick-index",e)})),r.$slidesCache=r.$slides,r.reinit()},n.prototype.animateHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:e},t.options.speed)}},n.prototype.animateSlide=function(e,n){var i={},r=this;r.animateHeight(),!0===r.options.rtl&&!1===r.options.vertical&&(e=-e),!1===r.transformsEnabled?!1===r.options.vertical?r.$slideTrack.animate({left:e},r.options.speed,r.options.easing,n):r.$slideTrack.animate({top:e},r.options.speed,r.options.easing,n):!1===r.cssTransitions?(!0===r.options.rtl&&(r.currentLeft=-r.currentLeft),t({animStart:r.currentLeft}).animate({animStart:e},{duration:r.options.speed,easing:r.options.easing,step:function(t){t=Math.ceil(t),!1===r.options.vertical?(i[r.animType]="translate("+t+"px, 0px)",r.$slideTrack.css(i)):(i[r.animType]="translate(0px,"+t+"px)",r.$slideTrack.css(i))},complete:function(){n&&n.call()}})):(r.applyTransition(),e=Math.ceil(e),!1===r.options.vertical?i[r.animType]="translate3d("+e+"px, 0px, 0px)":i[r.animType]="translate3d(0px,"+e+"px, 0px)",r.$slideTrack.css(i),n&&setTimeout((function(){r.disableTransition(),n.call()}),r.options.speed))},n.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=t(e).not(this.$slider)),e},n.prototype.asNavFor=function(e){var n=this.getNavTarget();null!==n&&"object"==typeof n&&n.each((function(){var n=t(this).slick("getSlick");n.unslicked||n.slideHandler(e,!0)}))},n.prototype.applyTransition=function(t){var e=this,n={};!1===e.options.fade?n[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:n[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},n.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},n.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},n.prototype.autoPlayIterator=function(){var t=this,e=t.currentSlide+t.options.slidesToScroll;t.paused||t.interrupted||t.focussed||(!1===t.options.infinite&&(1===t.direction&&t.currentSlide+1===t.slideCount-1?t.direction=0:0===t.direction&&(e=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1==0&&(t.direction=1))),t.slideHandler(e))},n.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=t(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=t(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},n.prototype.buildDots=function(){var e,n,i=this;if(!0===i.options.dots&&i.slideCount>i.options.slidesToShow){for(i.$slider.addClass("slick-dotted"),n=t("<ul />").addClass(i.options.dotsClass),e=0;e<=i.getDotCount();e+=1)n.append(t("<li />").append(i.options.customPaging.call(this,i,e)));i.$dots=n.appendTo(i.options.appendDots),i.$dots.find("li").first().addClass("slick-active")}},n.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each((function(e,n){t(n).attr("data-slick-index",e).data("originalStyling",t(n).attr("style")||"")})),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?t('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),t("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},n.prototype.buildRows=function(){var t,e,n,i,r,o,s,a=this;if(i=document.createDocumentFragment(),o=a.$slider.children(),a.options.rows>0){for(s=a.options.slidesPerRow*a.options.rows,r=Math.ceil(o.length/s),t=0;t<r;t++){var l=document.createElement("div");for(e=0;e<a.options.rows;e++){var u=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var c=t*s+(e*a.options.slidesPerRow+n);o.get(c)&&u.appendChild(o.get(c))}l.appendChild(u)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},n.prototype.checkResponsive=function(e,n){var i,r,o,s=this,a=!1,l=s.$slider.width(),u=window.innerWidth||t(window).width();if("window"===s.respondTo?o=u:"slider"===s.respondTo?o=l:"min"===s.respondTo&&(o=Math.min(u,l)),s.options.responsive&&s.options.responsive.length&&null!==s.options.responsive){for(i in r=null,s.breakpoints)s.breakpoints.hasOwnProperty(i)&&(!1===s.originalSettings.mobileFirst?o<s.breakpoints[i]&&(r=s.breakpoints[i]):o>s.breakpoints[i]&&(r=s.breakpoints[i]));null!==r?null!==s.activeBreakpoint?(r!==s.activeBreakpoint||n)&&(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[r]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=r):(s.activeBreakpoint=r,"unslick"===s.breakpointSettings[r]?s.unslick(r):(s.options=t.extend({},s.originalSettings,s.breakpointSettings[r]),!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e)),a=r):null!==s.activeBreakpoint&&(s.activeBreakpoint=null,s.options=s.originalSettings,!0===e&&(s.currentSlide=s.options.initialSlide),s.refresh(e),a=r),e||!1===a||s.$slider.trigger("breakpoint",[s,a])}},n.prototype.changeSlide=function(e,n){var i,r,o=this,s=t(e.currentTarget);switch(s.is("a")&&e.preventDefault(),s.is("li")||(s=s.closest("li")),i=o.slideCount%o.options.slidesToScroll!=0?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,e.data.message){case"previous":r=0===i?o.options.slidesToScroll:o.options.slidesToShow-i,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-r,!1,n);break;case"next":r=0===i?o.options.slidesToScroll:i,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+r,!1,n);break;case"index":var a=0===e.data.index?0:e.data.index||s.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(a),!1,n),s.children().trigger("focus");break;default:return}},n.prototype.checkNavigable=function(t){var e,n;if(n=0,t>(e=this.getNavigableIndexes())[e.length-1])t=e[e.length-1];else for(var i in e){if(t<e[i]){t=n;break}n=e[i]}return t},n.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(t("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",t.proxy(e.interrupt,e,!0)).off("mouseleave.slick",t.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),t(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().off("click.slick",e.selectHandler),t(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),t(window).off("resize.slick.slick-"+e.instanceUid,e.resize),t("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),t(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},n.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",t.proxy(e.interrupt,e,!1))},n.prototype.cleanUpRows=function(){var t,e=this;e.options.rows>0&&((t=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(t))},n.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},n.prototype.destroy=function(e){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),t(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function(){t(this).attr("style",t(this).data("originalStyling"))})),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,e||n.$slider.trigger("destroy",[n])},n.prototype.disableTransition=function(t){var e=this,n={};n[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(n):e.$slides.eq(t).css(n)},n.prototype.fadeSlide=function(t,e){var n=this;!1===n.cssTransitions?(n.$slides.eq(t).css({zIndex:n.options.zIndex}),n.$slides.eq(t).animate({opacity:1},n.options.speed,n.options.easing,e)):(n.applyTransition(t),n.$slides.eq(t).css({opacity:1,zIndex:n.options.zIndex}),e&&setTimeout((function(){n.disableTransition(t),e.call()}),n.options.speed))},n.prototype.fadeSlideOut=function(t){var e=this;!1===e.cssTransitions?e.$slides.eq(t).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(t),e.$slides.eq(t).css({opacity:0,zIndex:e.options.zIndex-2}))},n.prototype.filterSlides=n.prototype.slickFilter=function(t){var e=this;null!==t&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(t).appendTo(e.$slideTrack),e.reinit())},n.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",(function(n){n.stopImmediatePropagation();var i=t(this);setTimeout((function(){e.options.pauseOnFocus&&(e.focussed=i.is(":focus"),e.autoPlay())}),0)}))},n.prototype.getCurrent=n.prototype.slickCurrentSlide=function(){return this.currentSlide},n.prototype.getDotCount=function(){var t=this,e=0,n=0,i=0;if(!0===t.options.infinite)if(t.slideCount<=t.options.slidesToShow)++i;else for(;e<t.slideCount;)++i,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(!0===t.options.centerMode)i=t.slideCount;else if(t.options.asNavFor)for(;e<t.slideCount;)++i,e=n+t.options.slidesToScroll,n+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else i=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);return i-1},n.prototype.getLeft=function(t){var e,n,i,r,o=this,s=0;return o.slideOffset=0,n=o.$slides.first().outerHeight(!0),!0===o.options.infinite?(o.slideCount>o.options.slidesToShow&&(o.slideOffset=o.slideWidth*o.options.slidesToShow*-1,r=-1,!0===o.options.vertical&&!0===o.options.centerMode&&(2===o.options.slidesToShow?r=-1.5:1===o.options.slidesToShow&&(r=-2)),s=n*o.options.slidesToShow*r),o.slideCount%o.options.slidesToScroll!=0&&t+o.options.slidesToScroll>o.slideCount&&o.slideCount>o.options.slidesToShow&&(t>o.slideCount?(o.slideOffset=(o.options.slidesToShow-(t-o.slideCount))*o.slideWidth*-1,s=(o.options.slidesToShow-(t-o.slideCount))*n*-1):(o.slideOffset=o.slideCount%o.options.slidesToScroll*o.slideWidth*-1,s=o.slideCount%o.options.slidesToScroll*n*-1))):t+o.options.slidesToShow>o.slideCount&&(o.slideOffset=(t+o.options.slidesToShow-o.slideCount)*o.slideWidth,s=(t+o.options.slidesToShow-o.slideCount)*n),o.slideCount<=o.options.slidesToShow&&(o.slideOffset=0,s=0),!0===o.options.centerMode&&o.slideCount<=o.options.slidesToShow?o.slideOffset=o.slideWidth*Math.floor(o.options.slidesToShow)/2-o.slideWidth*o.slideCount/2:!0===o.options.centerMode&&!0===o.options.infinite?o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)-o.slideWidth:!0===o.options.centerMode&&(o.slideOffset=0,o.slideOffset+=o.slideWidth*Math.floor(o.options.slidesToShow/2)),e=!1===o.options.vertical?t*o.slideWidth*-1+o.slideOffset:t*n*-1+s,!0===o.options.variableWidth&&(i=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(t):o.$slideTrack.children(".slick-slide").eq(t+o.options.slidesToShow),e=!0===o.options.rtl?i[0]?-1*(o.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===o.options.centerMode&&(i=o.slideCount<=o.options.slidesToShow||!1===o.options.infinite?o.$slideTrack.children(".slick-slide").eq(t):o.$slideTrack.children(".slick-slide").eq(t+o.options.slidesToShow+1),e=!0===o.options.rtl?i[0]?-1*(o.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,e+=(o.$list.width()-i.outerWidth())/2)),e},n.prototype.getOption=n.prototype.slickGetOption=function(t){return this.options[t]},n.prototype.getNavigableIndexes=function(){var t,e=this,n=0,i=0,r=[];for(!1===e.options.infinite?t=e.slideCount:(n=-1*e.options.slidesToScroll,i=-1*e.options.slidesToScroll,t=2*e.slideCount);n<t;)r.push(n),n=i+e.options.slidesToScroll,i+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return r},n.prototype.getSlick=function(){return this},n.prototype.getSlideCount=function(){var e,n,i=this;return n=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0,!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each((function(r,o){if(o.offsetLeft-n+t(o).outerWidth()/2>-1*i.swipeLeft)return e=o,!1})),Math.abs(t(e).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},n.prototype.goTo=n.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},n.prototype.init=function(e){var n=this;t(n.$slider).hasClass("slick-initialized")||(t(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),e&&n.$slider.trigger("init",[n]),!0===n.options.accessibility&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},n.prototype.initADA=function(){var e=this,n=Math.ceil(e.slideCount/e.options.slidesToShow),i=e.getNavigableIndexes().filter((function(t){return t>=0&&t<e.slideCount}));e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(n){var r=i.indexOf(n);if(t(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+n,tabindex:-1}),-1!==r){var o="slick-slide-control"+e.instanceUid+r;t("#"+o).length&&t(this).attr({"aria-describedby":o})}})),e.$dots.attr("role","tablist").find("li").each((function(r){var o=i[r];t(this).attr({role:"presentation"}),t(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+r,"aria-controls":"slick-slide"+e.instanceUid+o,"aria-label":r+1+" of "+n,"aria-selected":null,tabindex:"-1"})})).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var r=e.currentSlide,o=r+e.options.slidesToShow;r<o;r++)e.options.focusOnChange?e.$slides.eq(r).attr({tabindex:"0"}):e.$slides.eq(r).removeAttr("tabindex");e.activateADA()},n.prototype.initArrowEvents=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),!0===t.options.accessibility&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},n.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&(t("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&e.slideCount>e.options.slidesToShow&&t("li",e.$dots).on("mouseenter.slick",t.proxy(e.interrupt,e,!0)).on("mouseleave.slick",t.proxy(e.interrupt,e,!1))},n.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",t.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",t.proxy(e.interrupt,e,!1)))},n.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),t(document).on(e.visibilityChange,t.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),t(window).on("orientationchange.slick.slick-"+e.instanceUid,t.proxy(e.orientationChange,e)),t(window).on("resize.slick.slick-"+e.instanceUid,t.proxy(e.resize,e)),t("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),t(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),t(e.setPosition)},n.prototype.initUI=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},n.prototype.keyHandler=function(t){var e=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},n.prototype.lazyLoad=function(){var e,n,i,r=this;function o(e){t("img[data-lazy]",e).each((function(){var e=t(this),n=t(this).attr("data-lazy"),i=t(this).attr("data-srcset"),o=t(this).attr("data-sizes")||r.$slider.attr("data-sizes"),s=document.createElement("img");s.onload=function(){e.animate({opacity:0},100,(function(){i&&(e.attr("srcset",i),o&&e.attr("sizes",o)),e.attr("src",n).animate({opacity:1},200,(function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")})),r.$slider.trigger("lazyLoaded",[r,e,n])}))},s.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,n])},s.src=n}))}if(!0===r.options.centerMode?!0===r.options.infinite?i=(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),i=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,i=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(n>0&&n--,i<=r.slideCount&&i++)),e=r.$slider.find(".slick-slide").slice(n,i),"anticipated"===r.options.lazyLoad)for(var s=n-1,a=i,l=r.$slider.find(".slick-slide"),u=0;u<r.options.slidesToScroll;u++)s<0&&(s=r.slideCount-1),e=(e=e.add(l.eq(s))).add(l.eq(a)),s--,a++;o(e),r.slideCount<=r.options.slidesToShow?o(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?o(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&o(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},n.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),"progressive"===t.options.lazyLoad&&t.progressiveLazyLoad()},n.prototype.next=n.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},n.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},n.prototype.pause=n.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},n.prototype.play=n.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},n.prototype.postSlide=function(e){var n=this;n.unslicked||(n.$slider.trigger("afterChange",[n,e]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),!0===n.options.accessibility&&(n.initADA(),n.options.focusOnChange&&t(n.$slides.get(n.currentSlide)).attr("tabindex",0).focus()))},n.prototype.prev=n.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},n.prototype.preventDefault=function(t){t.preventDefault()},n.prototype.progressiveLazyLoad=function(e){e=e||1;var n,i,r,o,s,a=this,l=t("img[data-lazy]",a.$slider);l.length?(n=l.first(),i=n.attr("data-lazy"),r=n.attr("data-srcset"),o=n.attr("data-sizes")||a.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){r&&(n.attr("srcset",r),o&&n.attr("sizes",o)),n.attr("src",i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,n,i]),a.progressiveLazyLoad()},s.onerror=function(){e<3?setTimeout((function(){a.progressiveLazyLoad(e+1)}),500):(n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,i]),a.progressiveLazyLoad())},s.src=i):a.$slider.trigger("allImagesLoaded",[a])},n.prototype.refresh=function(e){var n,i,r=this;i=r.slideCount-r.options.slidesToShow,!r.options.infinite&&r.currentSlide>i&&(r.currentSlide=i),r.slideCount<=r.options.slidesToShow&&(r.currentSlide=0),n=r.currentSlide,r.destroy(!0),t.extend(r,r.initials,{currentSlide:n}),r.init(),e||r.changeSlide({data:{message:"index",index:n}},!1)},n.prototype.registerBreakpoints=function(){var e,n,i,r=this,o=r.options.responsive||null;if("array"===t.type(o)&&o.length){for(e in r.respondTo=r.options.respondTo||"window",o)if(i=r.breakpoints.length-1,o.hasOwnProperty(e)){for(n=o[e].breakpoint;i>=0;)r.breakpoints[i]&&r.breakpoints[i]===n&&r.breakpoints.splice(i,1),i--;r.breakpoints.push(n),r.breakpointSettings[n]=o[e].settings}r.breakpoints.sort((function(t,e){return r.options.mobileFirst?t-e:e-t}))}},n.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&t(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},n.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout((function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}),50))},n.prototype.removeSlide=n.prototype.slickRemove=function(t,e,n){var i=this;if(t="boolean"==typeof t?!0===(e=t)?0:i.slideCount-1:!0===e?--t:t,i.slideCount<1||t<0||t>i.slideCount-1)return!1;i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(t).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},n.prototype.setCSS=function(t){var e,n,i=this,r={};!0===i.options.rtl&&(t=-t),e="left"==i.positionProp?Math.ceil(t)+"px":"0px",n="top"==i.positionProp?Math.ceil(t)+"px":"0px",r[i.positionProp]=t,!1===i.transformsEnabled?i.$slideTrack.css(r):(r={},!1===i.cssTransitions?(r[i.animType]="translate("+e+", "+n+")",i.$slideTrack.css(r)):(r[i.animType]="translate3d("+e+", "+n+", 0px)",i.$slideTrack.css(r)))},n.prototype.setDimensions=function(){var t=this;!1===t.options.vertical?!0===t.options.centerMode&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),!0===t.options.centerMode&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),!1===t.options.vertical&&!1===t.options.variableWidth?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):!0===t.options.variableWidth?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var e=t.$slides.first().outerWidth(!0)-t.$slides.first().width();!1===t.options.variableWidth&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-e)},n.prototype.setFade=function(){var e,n=this;n.$slides.each((function(i,r){e=n.slideWidth*i*-1,!0===n.options.rtl?t(r).css({position:"relative",right:e,top:0,zIndex:n.options.zIndex-2,opacity:0}):t(r).css({position:"relative",left:e,top:0,zIndex:n.options.zIndex-2,opacity:0})})),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},n.prototype.setHeight=function(){var t=this;if(1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical){var e=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",e)}},n.prototype.setOption=n.prototype.slickSetOption=function(){var e,n,i,r,o,s=this,a=!1;if("object"===t.type(arguments[0])?(i=arguments[0],a=arguments[1],o="multiple"):"string"===t.type(arguments[0])&&(i=arguments[0],r=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?o="responsive":void 0!==arguments[1]&&(o="single")),"single"===o)s.options[i]=r;else if("multiple"===o)t.each(i,(function(t,e){s.options[t]=e}));else if("responsive"===o)for(n in r)if("array"!==t.type(s.options.responsive))s.options.responsive=[r[n]];else{for(e=s.options.responsive.length-1;e>=0;)s.options.responsive[e].breakpoint===r[n].breakpoint&&s.options.responsive.splice(e,1),e--;s.options.responsive.push(r[n])}a&&(s.unload(),s.reinit())},n.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),!1===t.options.fade?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},n.prototype.setProps=function(){var t=this,e=document.body.style;t.positionProp=!0===t.options.vertical?"top":"left","top"===t.positionProp?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===t.options.useCSS&&(t.cssTransitions=!0),t.options.fade&&("number"==typeof t.options.zIndex?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),void 0!==e.OTransform&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.MozTransform&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(t.animType=!1)),void 0!==e.webkitTransform&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(t.animType=!1)),void 0!==e.msTransform&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",void 0===e.msTransform&&(t.animType=!1)),void 0!==e.transform&&!1!==t.animType&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&null!==t.animType&&!1!==t.animType},n.prototype.setSlideClasses=function(t){var e,n,i,r,o=this;if(n=o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),o.$slides.eq(t).addClass("slick-current"),!0===o.options.centerMode){var s=o.options.slidesToShow%2==0?1:0;e=Math.floor(o.options.slidesToShow/2),!0===o.options.infinite&&(t>=e&&t<=o.slideCount-1-e?o.$slides.slice(t-e+s,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(i=o.options.slidesToShow+t,n.slice(i-e+1+s,i+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?n.eq(n.length-1-o.options.slidesToShow).addClass("slick-center"):t===o.slideCount-1&&n.eq(o.options.slidesToShow).addClass("slick-center")),o.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=o.slideCount-o.options.slidesToShow?o.$slides.slice(t,t+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=o.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(r=o.slideCount%o.options.slidesToShow,i=!0===o.options.infinite?o.options.slidesToShow+t:t,o.options.slidesToShow==o.options.slidesToScroll&&o.slideCount-t<o.options.slidesToShow?n.slice(i-(o.options.slidesToShow-r),i+r).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+o.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==o.options.lazyLoad&&"anticipated"!==o.options.lazyLoad||o.lazyLoad()},n.prototype.setupInfinite=function(){var e,n,i,r=this;if(!0===r.options.fade&&(r.options.centerMode=!1),!0===r.options.infinite&&!1===r.options.fade&&(n=null,r.slideCount>r.options.slidesToShow)){for(i=!0===r.options.centerMode?r.options.slidesToShow+1:r.options.slidesToShow,e=r.slideCount;e>r.slideCount-i;e-=1)n=e-1,t(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n-r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");for(e=0;e<i+r.slideCount;e+=1)n=e,t(r.$slides[n]).clone(!0).attr("id","").attr("data-slick-index",n+r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");r.$slideTrack.find(".slick-cloned").find("[id]").each((function(){t(this).attr("id","")}))}},n.prototype.interrupt=function(t){t||this.autoPlay(),this.interrupted=t},n.prototype.selectHandler=function(e){var n=this,i=t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide"),r=parseInt(i.attr("data-slick-index"));r||(r=0),n.slideCount<=n.options.slidesToShow?n.slideHandler(r,!1,!0):n.slideHandler(r)},n.prototype.slideHandler=function(t,e,n){var i,r,o,s,a,l,u=this;if(e=e||!1,!(!0===u.animating&&!0===u.options.waitForAnimate||!0===u.options.fade&&u.currentSlide===t))if(!1===e&&u.asNavFor(t),i=t,a=u.getLeft(i),s=u.getLeft(u.currentSlide),u.currentLeft=null===u.swipeLeft?s:u.swipeLeft,!1===u.options.infinite&&!1===u.options.centerMode&&(t<0||t>u.getDotCount()*u.options.slidesToScroll))!1===u.options.fade&&(i=u.currentSlide,!0!==n&&u.slideCount>u.options.slidesToShow?u.animateSlide(s,(function(){u.postSlide(i)})):u.postSlide(i));else if(!1===u.options.infinite&&!0===u.options.centerMode&&(t<0||t>u.slideCount-u.options.slidesToScroll))!1===u.options.fade&&(i=u.currentSlide,!0!==n&&u.slideCount>u.options.slidesToShow?u.animateSlide(s,(function(){u.postSlide(i)})):u.postSlide(i));else{if(u.options.autoplay&&clearInterval(u.autoPlayTimer),r=i<0?u.slideCount%u.options.slidesToScroll!=0?u.slideCount-u.slideCount%u.options.slidesToScroll:u.slideCount+i:i>=u.slideCount?u.slideCount%u.options.slidesToScroll!=0?0:i-u.slideCount:i,u.animating=!0,u.$slider.trigger("beforeChange",[u,u.currentSlide,r]),o=u.currentSlide,u.currentSlide=r,u.setSlideClasses(u.currentSlide),u.options.asNavFor&&(l=(l=u.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(u.currentSlide),u.updateDots(),u.updateArrows(),!0===u.options.fade)return!0!==n?(u.fadeSlideOut(o),u.fadeSlide(r,(function(){u.postSlide(r)}))):u.postSlide(r),void u.animateHeight();!0!==n&&u.slideCount>u.options.slidesToShow?u.animateSlide(a,(function(){u.postSlide(r)})):u.postSlide(r)}},n.prototype.startLoad=function(){var t=this;!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),!0===t.options.dots&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},n.prototype.swipeDirection=function(){var t,e,n,i,r=this;return t=r.touchObject.startX-r.touchObject.curX,e=r.touchObject.startY-r.touchObject.curY,n=Math.atan2(e,t),(i=Math.round(180*n/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?!1===r.options.rtl?"left":"right":i>=135&&i<=225?!1===r.options.rtl?"right":"left":!0===r.options.verticalSwiping?i>=35&&i<=135?"down":"up":"vertical"},n.prototype.swipeEnd=function(t){var e,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1,!1;if(i.interrupted=!1,i.shouldClick=!(i.touchObject.swipeLength>10),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":e=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":e=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(e),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},n.prototype.swipeHandler=function(t){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==t.type.indexOf("mouse")))switch(e.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),t.data.action){case"start":e.swipeStart(t);break;case"move":e.swipeMove(t);break;case"end":e.swipeEnd(t)}},n.prototype.swipeMove=function(t){var e,n,i,r,o,s,a=this;return o=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!a.dragging||a.scrolling||o&&1!==o.length)&&(e=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==o?o[0].pageX:t.clientX,a.touchObject.curY=void 0!==o?o[0].pageY:t.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&s>4?(a.scrolling=!0,!1):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==t.originalEvent&&a.touchObject.swipeLength>4&&(a.swiping=!0,t.preventDefault()),r=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(r=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,a.touchObject.edgeHit=!1,!1===a.options.infinite&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=e+i*r:a.swipeLeft=e+i*(a.$list.height()/a.listWidth)*r,!0===a.options.verticalSwiping&&(a.swipeLeft=e+i*r),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},n.prototype.swipeStart=function(t){var e,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return n.touchObject={},!1;void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==e?e.pageX:t.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==e?e.pageY:t.clientY,n.dragging=!0},n.prototype.unfilterSlides=n.prototype.slickUnfilter=function(){var t=this;null!==t.$slidesCache&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},n.prototype.unload=function(){var e=this;t(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},n.prototype.unslick=function(t){var e=this;e.$slider.trigger("unslick",[e,t]),e.destroy()},n.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),!0===t.options.arrows&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===t.currentSlide?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(t.currentSlide>=t.slideCount-t.options.slidesToShow&&!1===t.options.centerMode||t.currentSlide>=t.slideCount-1&&!0===t.options.centerMode)&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},n.prototype.updateDots=function(){var t=this;null!==t.$dots&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},n.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},t.fn.slick=function(){var t,e,i=this,r=arguments[0],o=Array.prototype.slice.call(arguments,1),s=i.length;for(t=0;t<s;t++)if("object"==typeof r||void 0===r?i[t].slick=new n(i[t],r):e=i[t].slick[r].apply(i[t].slick,o),void 0!==e)return e;return i}})),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return"string"==typeof t}function r(t){return"function"==typeof t}function o(t){return"number"==typeof t}function s(t){return void 0===t}function a(t){return"object"==typeof t}function l(t){return!1!==t}function u(){return"undefined"!=typeof window}function c(t){return r(t)||i(t)}function d(t){return(yt=pe(t,ie))&&dn}function p(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function f(t,e){return!e&&console.warn(t)}function h(t,e){return t&&(ie[t]=e)&&yt&&(yt[t]=e)||ie}function g(){return 0}function v(t){var e,n,i=t[0];if(a(i)||r(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(n=ce.length;n--&&!ce[n].targetTest(i););e=ce[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new je(t[n],e)))||t.splice(n,1);return t}function m(t){return t._gsap||v(me(t))[0]._gsap}function y(t,e,n){return(n=t[e])&&r(n)?t[e]():s(n)&&t.getAttribute&&t.getAttribute(e)||n}function w(t,e){return(t=t.split(",")).forEach(e)||t}function b(t){return Math.round(1e5*t)/1e5||0}function x(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n}function _(t,e,n){var i,r=o(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s];if(r&&(a.duration=t[1]),a.parent=n,e){for(i=a;n&&!("immediateRender"in i);)i=n.vars.defaults||{},n=l(n.vars.inherit)&&n.parent;a.immediateRender=l(i.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return a}function T(){var t,e,n=oe.length,i=oe.slice(0);for(se={},t=oe.length=0;t<n;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function k(t,e,n,i){oe.length&&T(),t.render(e,n,i),oe.length&&T()}function S(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(ne).length<2?e:i(t)?t.trim():t}function C(t){return t}function A(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function $(t,e){for(var n in e)n in t||"duration"===n||"ease"===n||(t[n]=e[n])}function E(t,e){for(var n in e)t[n]=a(e[n])?E(t[n]||(t[n]={}),e[n]):e[n];return t}function D(t,e){var n,i={};for(n in t)n in e||(i[n]=t[n]);return i}function O(t){var e=t.parent||ht,n=t.keyframes?$:A;if(l(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t}function M(t,e,n,i){void 0===n&&(n="_first"),void 0===i&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null}function P(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function j(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t}function L(t){return t._repeat?fe(t._tTime,t=t.duration()+t._rDelay)*t:0}function N(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function H(t){return t._end=b(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ft)||0))}function q(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=b(t._dp._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),H(t),n._dirty||j(n,t)),t}function z(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=N(t.rawTime(),e),(!e._dur||ge(0,e.totalDuration(),n)-e._tTime>Ft)&&e.render(n,!0)),j(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)0<=n.rawTime()&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ft}}function R(t,e,n,i){return e.parent&&P(e),e._start=b(n+e._delay),e._end=b(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function(t,e,n,i,r){void 0===n&&(n="_first"),void 0===i&&(i="_last");var o,s=t[i];if(r)for(o=e[r];s&&s[r]>o;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||z(t,e),t}function I(t,e){return(ie.ScrollTrigger||p("scrollTrigger",e))&&ie.ScrollTrigger.create(e,t)}function F(t,e,n,i){return Ie(t,e),t._initted?!n&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&bt!==ke.frame?(oe.push(t),t._lazy=[e,i],1):void 0:1}function B(t,e,n,i){var r=t._repeat,o=b(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:b(o*(r+1)+t._rDelay*r):o,s&&!i?q(t,t._tTime=t._tDur*s):t.parent&&H(t),n||j(t.parent,t),t}function W(t){return t instanceof He?j(t):B(t,t._dur)}function U(t,e){var n,r,o=t.labels,s=t._recent||he,a=t.duration()>=It?s.endTime(!1):t._dur;return i(e)&&(isNaN(e)||e in o)?"<"===(n=e.charAt(0))||">"===n?("<"===n?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(n=e.indexOf("="))<0?(e in o||(o[e]=a),o[e]):(r=+(e.charAt(n-1)+e.substr(n+1)),1<n?U(t,e.substr(0,n-1))+r:a+r):null==e?a:+e}function X(t,e){return t||0===t?e(t):e}function Y(t){return(t=(t+"").substr((parseFloat(t)+"").length))&&isNaN(t)?t:""}function V(t,e){return t&&a(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&a(t[0]))&&!t.nodeType&&t!==gt}function G(t){return t.sort((function(){return.5-Math.random()}))}function Q(t){if(r(t))return t;var e=a(t)?t:{each:t},n=De(e.ease),o=e.from||0,s=parseFloat(e.base)||0,l={},u=0<o&&o<1,c=isNaN(o)||u,d=e.axis,p=o,f=o;return i(o)?p=f={center:.5,edges:.5,end:1}[o]||0:!u&&c&&(p=o[0],f=o[1]),function(t,i,r){var a,u,h,g,v,m,y,w,x,_=(r||e).length,T=l[_];if(!T){if(!(x="auto"===e.grid?0:(e.grid||[1,It])[1])){for(y=-It;y<(y=r[x++].getBoundingClientRect().left)&&x<_;);x--}for(T=l[_]=[],a=c?Math.min(x,_)*p-.5:o%x,u=c?_*f/x-.5:o/x|0,w=It,m=y=0;m<_;m++)h=m%x-a,g=u-(m/x|0),T[m]=v=d?Math.abs("y"===d?g:h):Xt(h*h+g*g),y<v&&(y=v),v<w&&(w=v);"random"===o&&G(T),T.max=y-w,T.min=w,T.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(_<x?_-1:d?"y"===d?_/x:x:Math.max(x,_/x))||0)*("edges"===o?-1:1),T.b=_<0?s-_:s,T.u=Y(e.amount||e.each)||0,n=n&&_<0?Ee(n):n}return _=(T[t]-T.min)/T.max||0,b(T.b+(n?n(_):_)*T.v)+T.u}}function J(t){var e=t<1?Math.pow(10,(t+"").length-2):1;return function(n){return Math.floor(Math.round(parseFloat(n)/t)*t*e)/e+(o(n)?0:Y(n))}}function Z(t,e){var n,i,s=Qt(t);return!s&&a(t)&&(n=s=t.radius||It,t.values?(t=me(t.values),(i=!o(t[0]))&&(n*=n)):t=J(t.increment)),X(e,s?r(t)?function(e){return i=t(e),Math.abs(i-e)<=n?i:e}:function(e){for(var r,s,a=parseFloat(i?e.x:e),l=parseFloat(i?e.y:0),u=It,c=0,d=t.length;d--;)(r=i?(r=t[d].x-a)*r+(s=t[d].y-l)*s:Math.abs(t[d]-a))<u&&(u=r,c=d);return c=!n||u<=n?t[c]:e,i||c===e||o(e)?c:c+Y(e)}:J(t))}function K(t,e,n,i){return X(Qt(t)?!e:!0===n?!!(n=0):!i,(function(){return Qt(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t+Math.random()*(e-t))/n)*n*i)/i}))}function tt(t,e,n){return X(n,(function(n){return t[~~e(n)]}))}function et(t){for(var e,n,i,r,o=0,s="";~(e=t.indexOf("random(",o));)i=t.indexOf(")",e),r="["===t.charAt(e+7),n=t.substr(e+7,i-e-7).match(r?ne:Jt),s+=t.substr(o,e-o)+K(r?n:+n[0],r?0:+n[1],+n[2]||1e-5),o=i+1;return s+t.substr(o,t.length-o)}function nt(t,e,n){var i,r,o,s=t.labels,a=It;for(i in s)(r=s[i]-e)<0==!!n&&r&&a>(r=Math.abs(r))&&(o=i,a=r);return o}function it(t){return P(t),t.progress()<1&&we(t,"onInterrupt"),t}function rt(t,e,n){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(n-e)*t*6:t<.5?n:3*t<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0}function ot(t,e,n){var i,r,s,a,l,u,c,d,p,f,h=t?o(t)?[t>>16,t>>8&be,t&be]:0:xe.black;if(!h){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xe[t])h=xe[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(r=t.charAt(2))+r+(s=t.charAt(3))+s),h=[(t=parseInt(t.substr(1),16))>>16,t>>8&be,t&be];else if("hsl"===t.substr(0,3))if(h=f=t.match(Jt),e){if(~t.indexOf("="))return h=t.match(Zt),n&&h.length<4&&(h[3]=1),h}else a=+h[0]%360/360,l=h[1]/100,i=2*(u=h[2]/100)-(r=u<=.5?u*(l+1):u+l-u*l),3<h.length&&(h[3]*=1),h[0]=rt(a+1/3,i,r),h[1]=rt(a,i,r),h[2]=rt(a-1/3,i,r);else h=t.match(Jt)||xe.transparent;h=h.map(Number)}return e&&!f&&(i=h[0]/be,r=h[1]/be,s=h[2]/be,u=((c=Math.max(i,r,s))+(d=Math.min(i,r,s)))/2,c===d?a=l=0:(p=c-d,l=.5<u?p/(2-c-d):p/(c+d),a=c===i?(r-s)/p+(r<s?6:0):c===r?(s-i)/p+2:(i-r)/p+4,a*=60),h[0]=~~(a+.5),h[1]=~~(100*l+.5),h[2]=~~(100*u+.5)),n&&h.length<4&&(h[3]=1),h}function st(t){var e=[],n=[],i=-1;return t.split(_e).forEach((function(t){var r=t.match(Kt)||[];e.push.apply(e,r),n.push(i+=r.length+1)})),e.c=n,e}function at(t,e,n){var i,r,o,s,a="",l=(t+a).match(_e),u=e?"hsla(":"rgba(",c=0;if(!l)return t;if(l=l.map((function(t){return(t=ot(t,e,1))&&u+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"})),n&&(o=st(t),(i=n.c).join(a)!==o.c.join(a)))for(s=(r=t.replace(_e,"1").split(Kt)).length-1;c<s;c++)a+=r[c]+(~i.indexOf(c)?l.shift()||u+"0,0,0,0)":(o.length?o:l.length?l:n).shift());if(!r)for(s=(r=t.split(_e)).length-1;c<s;c++)a+=r[c]+l[c];return a+r[s]}function lt(t){var e,n=t.join(" ");if(_e.lastIndex=0,_e.test(n))return e=Te.test(n),t[1]=at(t[1],e),t[0]=at(t[0],e,st(t[1])),!0}function ut(t,e){for(var n,i=t._first;i;)i instanceof He?ut(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?ut(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next}function ct(t,e,n,i){void 0===n&&(n=function(t){return 1-e(1-t)}),void 0===i&&(i=function(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var r,o={easeIn:e,easeOut:n,easeInOut:i};return w(t,(function(t){for(var e in Ce[t]=ie[t]=o,Ce[r=t.toLowerCase()]=n,o)Ce[r+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ce[t+"."+e]=o[e]})),o}function dt(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t(2*(e-.5))/2}}function pt(t,e,n){function i(t){return 1===t?1:r*Math.pow(2,-10*t)*Vt((t-s)*o)+1}var r=1<=e?e:1,o=(n||(t?.3:.45))/(e<1?e:1),s=o/Bt*(Math.asin(1/r)||0),a="out"===t?i:"in"===t?function(t){return 1-i(1-t)}:dt(i);return o=Bt/o,a.config=function(e,n){return pt(t,e,n)},a}function ft(t,e){function n(t){return t?--t*t*((e+1)*t+e)+1:0}void 0===e&&(e=1.70158);var i="out"===t?n:"in"===t?function(t){return 1-n(1-t)}:dt(n);return i.config=function(e){return ft(t,e)},i}var ht,gt,vt,mt,yt,wt,bt,xt,_t,Tt,kt,St,Ct,At,$t,Et,Dt,Ot,Mt,Pt,jt,Lt,Nt,Ht,qt,zt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rt={duration:.5,overwrite:!1,delay:0},It=1e8,Ft=1/It,Bt=2*Math.PI,Wt=Bt/4,Ut=0,Xt=Math.sqrt,Yt=Math.cos,Vt=Math.sin,Gt="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Qt=Array.isArray,Jt=/(?:-?\.?\d|\.)+/gi,Zt=/[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,Kt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,te=/[-+=.]*\d+(?:\.|e-|e)*\d*/gi,ee=/[+-]=-?[\.\d]+/,ne=/[#\-+.]*\b[a-z\d-=+%.]+/gi,ie={},re={},oe=[],se={},ae={},le={},ue=30,ce=[],de="",pe=function(t,e){for(var n in e)t[n]=e[n];return t},fe=function(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},he={_start:0,endTime:g},ge=function(t,e,n){return n<t?t:e<n?e:n},ve=[].slice,me=function(t,e){return!i(t)||e||!vt&&Se()?Qt(t)?function(t,e,n){return void 0===n&&(n=[]),t.forEach((function(t){return i(t)&&!e||V(t,1)?n.push.apply(n,me(t)):n.push(t)}))||n}(t,e):V(t)?ve.call(t,0):t?[t]:[]:ve.call(mt.querySelectorAll(t),0)},ye=function(t,e,n,i,r){var o=e-t,s=i-n;return X(r,(function(e){return n+((e-t)/o*s||0)}))},we=function(t,e,n){var i,r,o=t.vars,s=o[e];if(s)return i=o[e+"Params"],r=o.callbackScope||t,n&&oe.length&&T(),i?s.apply(r,i):s.call(r)},be=255,xe={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},_e=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xe)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Te=/hsl[a]?\(/,ke=(Et=Date.now,Dt=500,Ot=33,Mt=Et(),Pt=Mt,Lt=jt=1e3/240,Ct={time:0,frame:0,tick:function(){Oe(!0)},deltaRatio:function(t){return At/(1e3/(t||60))},wake:function(){wt&&(!vt&&u()&&(gt=vt=window,mt=gt.document||{},ie.gsap=dn,(gt.gsapVersions||(gt.gsapVersions=[])).push(dn.version),d(yt||gt.GreenSockGlobals||!gt.gsap&&gt||{}),St=gt.requestAnimationFrame),Tt&&Ct.sleep(),kt=St||function(t){return setTimeout(t,Lt-1e3*Ct.time+1|0)},_t=1,Oe(2))},sleep:function(){(St?gt.cancelAnimationFrame:clearTimeout)(Tt),_t=0,kt=g},lagSmoothing:function(t,e){Dt=t||1e8,Ot=Math.min(e,Dt,0)},fps:function(t){jt=1e3/(t||240),Lt=1e3*Ct.time+jt},add:function(t){Nt.indexOf(t)<0&&Nt.push(t),Se()},remove:function(t){var e;~(e=Nt.indexOf(t))&&Nt.splice(e,1)&&e<=$t&&$t--},_listeners:Nt=[]}),Se=function(){return!_t&&ke.wake()},Ce={},Ae=/^[\d.\-M][\d.\-,\s]/,$e=/["']/g,Ee=function(t){return function(e){return 1-t(1-e)}},De=function(t,e){return t&&(r(t)?t:Ce[t]||function(t){var e=(t+"").split("("),n=Ce[e[0]];return n&&1<e.length&&n.config?n.config.apply(null,~t.indexOf("{")?[function(t){for(var e,n,i,r={},o=t.substr(1,t.length-3).split(":"),s=o[0],a=1,l=o.length;a<l;a++)n=o[a],e=a!==l-1?n.lastIndexOf(","):n.length,i=n.substr(0,e),r[s]=isNaN(i)?i.replace($e,"").trim():+i,s=n.substr(e+1).trim();return r}(e[1])]:function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)}(t).split(",").map(S)):Ce._CE&&Ae.test(t)?Ce._CE("",t):n}(t))||e};function Oe(t){var e,n,i,r,o=Et()-Pt,s=!0===t;if(Dt<o&&(Mt+=o-Ot),(0<(e=(i=(Pt+=o)-Mt)-Lt)||s)&&(r=++Ct.frame,At=i-1e3*Ct.time,Ct.time=i/=1e3,Lt+=e+(jt<=e?4:jt-e),n=1),s||(Tt=kt(Oe)),n)for($t=0;$t<Nt.length;$t++)Nt[$t](i,At,r,t)}function Me(t){return t<qt?Ht*t*t:t<.7272727272727273?Ht*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Ht*(t-=2.25/2.75)*t+.9375:Ht*Math.pow(t-2.625/2.75,2)+.984375}w("Linear,Quad,Cubic,Quart,Quint,Strong",(function(t,e){var n=e<5?e+1:e;ct(t+",Power"+(n-1),e?function(t){return Math.pow(t,n)}:function(t){return t},(function(t){return 1-Math.pow(1-t,n)}),(function(t){return t<.5?Math.pow(2*t,n)/2:1-Math.pow(2*(1-t),n)/2}))})),Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn,ct("Elastic",pt("in"),pt("out"),pt()),Ht=7.5625,qt=1/2.75,ct("Bounce",(function(t){return 1-Me(1-t)}),Me),ct("Expo",(function(t){return t?Math.pow(2,10*(t-1)):0})),ct("Circ",(function(t){return-(Xt(1-t*t)-1)})),ct("Sine",(function(t){return 1===t?1:1-Yt(t*Wt)})),ct("Back",ft("in"),ft("out"),ft()),Ce.SteppedEase=Ce.steps=ie.SteppedEase={config:function(t,e){void 0===t&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0;return function(t){return((i*ge(0,.99999999,t)|0)+r)*n}}},Rt.ease=Ce["quad.out"],w("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",(function(t){return de+=t+","+t+"Params,"}));var Pe,je=function(t,e){this.id=Ut++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:y,this.set=e?e.getSetter:Je},Le=((Pe=Ne.prototype).delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Pe.duration=function(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Pe.totalDuration=function(t){return arguments.length?(this._dirty=0,B(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Pe.totalTime=function(t,e){if(Se(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(q(this,t);n.parent;)n.parent._time!==n._start+(0<=n._ts?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&R(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===Ft||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),k(this,t,e)),this},Pe.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+L(this))%this._dur||(t?this._dur:0),e):this._time},Pe.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Pe.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+L(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Pe.iteration=function(t,e){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,e):this._repeat?fe(this._tTime,n)+1:1},Pe.timeScale=function(t){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?N(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Ft?0:this._rts,function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(ge(-this._delay,this._tDur,e),!0))},Pe.paused=function(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Se(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=Ft)&&Math.abs(this._zTime)!==Ft))),this):this._ps},Pe.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||R(e,this,t-this._delay),this}return this._start},Pe.endTime=function(t){return this._start+(l(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Pe.rawTime=function(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?N(e.rawTime(t),this):this._tTime:this._tTime},Pe.globalTime=function(t){for(var e=this,n=arguments.length?t:e.rawTime();e;)n=e._start+n/(e._ts||1),e=e._dp;return n},Pe.repeat=function(t){return arguments.length?(this._repeat=t,W(this)):this._repeat},Pe.repeatDelay=function(t){return arguments.length?(this._rDelay=t,W(this)):this._rDelay},Pe.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Pe.seek=function(t,e){return this.totalTime(U(this,t),l(e))},Pe.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,l(e))},Pe.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Pe.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Pe.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Pe.resume=function(){return this.paused(!1)},Pe.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Ft:0)),this):this._rts<0},Pe.invalidate=function(){return this._initted=0,this._zTime=-Ft,this},Pe.isActive=function(){var t,e=this.parent||this._dp,n=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=n&&t<this.endTime(!0)-Ft))},Pe.eventCallback=function(t,e,n){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,n&&(i[t+"Params"]=n),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Pe.then=function(t){var e=this;return new Promise((function(n){function i(){var t=e.then;e.then=null,r(o)&&(o=o(e))&&(o.then||o===e)&&(e.then=t),n(o),e.then=t}var o=r(t)?t:C;e._initted&&1===e.totalProgress()&&0<=e._ts||!e._tTime&&e._ts<0?i():e._prom=i}))},Pe.kill=function(){it(this)},Ne);function Ne(t,e){var n=t.parent||ht;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,B(this,+t.duration,1,1),this.data=t.data,_t||ke.wake(),n&&R(n,this,e||0===e?e:n._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}A(Le.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var He=function(t){function s(e,i){var r;return void 0===e&&(e={}),(r=t.call(this,e,i)||this).labels={},r.smoothChildTiming=!!e.smoothChildTiming,r.autoRemoveChildren=!!e.autoRemoveChildren,r._sort=l(e.sortChildren),r.parent&&z(r.parent,n(r)),e.scrollTrigger&&I(n(r),e.scrollTrigger),r}e(s,t);var a=s.prototype;return a.to=function(t,e,n,i){return new Ue(t,_(arguments,0,this),U(this,o(e)?i:n)),this},a.from=function(t,e,n,i){return new Ue(t,_(arguments,1,this),U(this,o(e)?i:n)),this},a.fromTo=function(t,e,n,i,r){return new Ue(t,_(arguments,2,this),U(this,o(e)?r:i)),this},a.set=function(t,e,n){return e.duration=0,e.parent=this,O(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ue(t,e,U(this,n),1),this},a.call=function(t,e,n){return R(this,Ue.delayedCall(0,t,e),U(this,n))},a.staggerTo=function(t,e,n,i,r,o,s){return n.duration=e,n.stagger=n.stagger||i,n.onComplete=o,n.onCompleteParams=s,n.parent=this,new Ue(t,n,U(this,r)),this},a.staggerFrom=function(t,e,n,i,r,o,s){return n.runBackwards=1,O(n).immediateRender=l(n.immediateRender),this.staggerTo(t,e,n,i,r,o,s)},a.staggerFromTo=function(t,e,n,i,r,o,s,a){return i.startAt=n,O(i).immediateRender=l(i.immediateRender),this.staggerTo(t,e,i,r,o,s,a)},a.render=function(t,e,n){var i,r,o,s,a,l,u,c,d,p,f,h,g=this._time,v=this._dirty?this.totalDuration():this._tDur,m=this._dur,y=this!==ht&&v-Ft<t&&0<=t?v:t<Ft?0:t,w=this._zTime<0!=t<0&&(this._initted||!m);if(y!==this._tTime||n||w){if(g!==this._time&&m&&(y+=this._time-g,t+=this._time-g),i=y,d=this._start,l=!(c=this._ts),w&&(m||(g=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(f=this._yoyo,i=b(y%(a=m+this._rDelay)),y===v?(s=this._repeat,i=m):((s=~~(y/a))&&s===y/a&&(i=m,s--),m<i&&(i=m)),p=fe(this._tTime,a),!g&&this._tTime&&p!==s&&(p=s),f&&1&s&&(i=m-i,h=1),s!==p&&!this._lock)){var x=f&&1&p,_=x===(f&&1&s);if(s<p&&(x=!x),g=x?0:m,this._lock=1,this.render(g||(h?0:b(s*a)),e,!m)._lock=0,!e&&this.parent&&we(this,"onRepeat"),this.vars.repeatRefresh&&!h&&(this.invalidate()._lock=1),g!==this._time||l!=!this._ts)return this;if(m=this._dur,v=this._tDur,_&&(this._lock=2,g=x?m:-1e-4,this.render(g,!0),this.vars.repeatRefresh&&!h&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;ut(this,h)}if(this._hasPause&&!this._forcing&&this._lock<2&&(u=function(t,e,n){var i;if(e<n)for(i=t._first;i&&i._start<=n;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,b(g),b(i)))&&(y-=i-(i=u._start)),this._tTime=y,this._time=i,this._act=!c,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),g||!i||e||we(this,"onStart"),g<=i&&0<=t)for(r=this._first;r;){if(o=r._next,(r._act||i>=r._start)&&r._ts&&u!==r){if(r.parent!==this)return this.render(t,e,n);if(r.render(0<r._ts?(i-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(i-r._start)*r._ts,e,n),i!==this._time||!this._ts&&!l){u=0,o&&(y+=this._zTime=-Ft);break}}r=o}else{r=this._last;for(var T=t<0?t:i;r;){if(o=r._prev,(r._act||T<=r._end)&&r._ts&&u!==r){if(r.parent!==this)return this.render(t,e,n);if(r.render(0<r._ts?(T-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(T-r._start)*r._ts,e,n),i!==this._time||!this._ts&&!l){u=0,o&&(y+=this._zTime=T?-Ft:Ft);break}}r=o}}if(u&&!e&&(this.pause(),u.render(g<=i?0:-Ft)._zTime=g<=i?1:-1,this._ts))return this._start=d,H(this),this.render(t,e,n);this._onUpdate&&!e&&we(this,"onUpdate",!0),(y===v&&v>=this.totalDuration()||!y&&g)&&(d!==this._start&&Math.abs(c)===Math.abs(this._ts)||this._lock||(!t&&m||!(y===v&&0<this._ts||!y&&this._ts<0)||P(this,1),e||t<0&&!g||!y&&!g||(we(this,y===v?"onComplete":"onReverseComplete",!0),!this._prom||y<v&&0<this.timeScale()||this._prom())))}return this},a.add=function(t,e){var n=this;if(o(e)||(e=U(this,e)),!(t instanceof Le)){if(Qt(t))return t.forEach((function(t){return n.add(t,e)})),this;if(i(t))return this.addLabel(t,e);if(!r(t))return this;t=Ue.delayedCall(0,t)}return this!==t?R(this,t,e):this},a.getChildren=function(t,e,n,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===i&&(i=-It);for(var r=[],o=this._first;o;)o._start>=i&&(o instanceof Ue?e&&r.push(o):(n&&r.push(o),t&&r.push.apply(r,o.getChildren(!0,e,n)))),o=o._next;return r},a.getById=function(t){for(var e=this.getChildren(1,1,1),n=e.length;n--;)if(e[n].vars.id===t)return e[n]},a.remove=function(t){return i(t)?this.removeLabel(t):r(t)?this.killTweensOf(t):(M(this,t),t===this._recent&&(this._recent=this._last),j(this))},a.totalTime=function(e,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=b(ke.time-(0<this._ts?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,n),this._forcing=0,this):this._tTime},a.addLabel=function(t,e){return this.labels[t]=U(this,e),this},a.removeLabel=function(t){return delete this.labels[t],this},a.addPause=function(t,e,n){var i=Ue.delayedCall(0,e||g,n);return i.data="isPause",this._hasPause=1,R(this,i,U(this,t))},a.removePause=function(t){var e=this._first;for(t=U(this,t);e;)e._start===t&&"isPause"===e.data&&P(e),e=e._next},a.killTweensOf=function(t,e,n){for(var i=this.getTweensOf(t,n),r=i.length;r--;)ze!==i[r]&&i[r].kill(t,e);return this},a.getTweensOf=function(t,e){for(var n,i=[],r=me(t),s=this._first,a=o(e);s;)s instanceof Ue?x(s._targets,r)&&(a?(!ze||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&i.push(s):(n=s.getTweensOf(r,e)).length&&i.push.apply(i,n),s=s._next;return i},a.tweenTo=function(t,e){e=e||{};var n=this,i=U(n,t),r=e.startAt,o=e.onStart,s=e.onStartParams,a=Ue.to(n,A(e,{ease:"none",lazy:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(r&&"time"in r?r.time:n._time))/n.timeScale())||Ft,onStart:function(){n.pause();var t=e.duration||Math.abs((i-n._time)/n.timeScale());a._dur!==t&&B(a,t,0,1).render(a._time,!0,!0),o&&o.apply(a,s||[])}}));return a},a.tweenFromTo=function(t,e,n){return this.tweenTo(e,A({startAt:{time:U(this,t)}},n))},a.recent=function(){return this._recent},a.nextLabel=function(t){return void 0===t&&(t=this._time),nt(this,U(this,t))},a.previousLabel=function(t){return void 0===t&&(t=this._time),nt(this,U(this,t),1)},a.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+Ft)},a.shiftChildren=function(t,e,n){void 0===n&&(n=0);for(var i,r=this._first,o=this.labels;r;)r._start>=n&&(r._start+=t,r._end+=t),r=r._next;if(e)for(i in o)o[i]>=n&&(o[i]+=t);return j(this)},a.invalidate=function(){var e=this._first;for(this._lock=0;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},a.clear=function(t){void 0===t&&(t=!0);for(var e,n=this._first;n;)e=n._next,this.remove(n),n=e;return this._time=this._tTime=this._pTime=0,t&&(this.labels={}),j(this)},a.totalDuration=function(t){var e,n,i,r=0,o=this,s=o._last,a=It;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-t:t));if(o._dirty){for(i=o.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),a<(n=s._start)&&o._sort&&s._ts&&!o._lock?(o._lock=1,R(o,s,n-s._delay,1)._lock=0):a=n,n<0&&s._ts&&(r-=n,(!i&&!o._dp||i&&i.smoothChildTiming)&&(o._start+=n/o._ts,o._time-=n,o._tTime-=n),o.shiftChildren(-n,!1,-1/0),a=0),s._end>r&&s._ts&&(r=s._end),s=e;B(o,o===ht&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},s.updateRoot=function(t){if(ht._ts&&(k(ht,N(t,ht)),bt=ke.frame),ke.frame>=ue){ue+=zt.autoSleep||120;var e=ht._first;if((!e||!e._ts)&&zt.autoSleep&&ke._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||ke.sleep()}}},s}(Le);function qe(t,e,n,o,s,l){var u,c,d,p;if(ae[t]&&!1!==(u=new ae[t]).init(s,u.rawVars?e[t]:function(t,e,n,o,s){if(r(t)&&(t=Fe(t,s,e,n,o)),!a(t)||t.style&&t.nodeType||Qt(t)||Gt(t))return i(t)?Fe(t,s,e,n,o):t;var l,u={};for(l in t)u[l]=Fe(t[l],s,e,n,o);return u}(e[t],o,s,l,n),n,o,l)&&(n._pt=c=new sn(n._pt,s,t,0,1,u.render,u,0,u.priority),n!==xt))for(d=n._ptLookup[n._targets.indexOf(s)],p=u._props.length;p--;)d[u._props[p]]=c;return u}A(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var ze,Re=function(t,e,n,o,s,a,l,u,c){r(o)&&(o=o(s||0,t,a));var d,f=t[e],h="get"!==n?n:r(f)?c?t[e.indexOf("set")||!r(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,g=r(f)?c?Qe:Ge:Ve;if(i(o)&&(~o.indexOf("random(")&&(o=et(o)),"="===o.charAt(1)&&(o=parseFloat(h)+parseFloat(o.substr(2))*("-"===o.charAt(0)?-1:1)+(Y(h)||0))),h!==o)return isNaN(h*o)?(f||e in t||p(e,o),function(t,e,n,i,r,o,s){var a,l,u,c,d,p,f,h,g=new sn(this._pt,t,e,0,1,tn,null,r),v=0,m=0;for(g.b=n,g.e=i,n+="",(f=~(i+="").indexOf("random("))&&(i=et(i)),o&&(o(h=[n,i],t,e),n=h[0],i=h[1]),l=n.match(te)||[];a=te.exec(i);)c=a[0],d=i.substring(v,a.index),u?u=(u+1)%5:"rgba("===d.substr(-5)&&(u=1),c!==l[m++]&&(p=parseFloat(l[m-1])||0,g._pt={_next:g._pt,p:d||1===m?d:",",s:p,c:"="===c.charAt(1)?parseFloat(c.substr(2))*("-"===c.charAt(0)?-1:1):parseFloat(c)-p,m:u&&u<4?Math.round:0},v=te.lastIndex);return g.c=v<i.length?i.substring(v,i.length):"",g.fp=s,(ee.test(i)||f)&&(g.e=0),this._pt=g}.call(this,t,e,h,o,g,u||zt.stringFilter,c)):(d=new sn(this._pt,t,e,+h||0,o-(h||0),"boolean"==typeof f?Ke:Ze,0,g),c&&(d.fp=c),l&&d.modifier(l,this,t),this._pt=d)},Ie=function t(e,n){var i,r,o,s,a,u,c,d,p,f,h,g,y,w=e.vars,b=w.ease,x=w.startAt,_=w.immediateRender,k=w.lazy,S=w.onUpdate,C=w.onUpdateParams,$=w.callbackScope,E=w.runBackwards,O=w.yoyoEase,M=w.keyframes,j=w.autoRevert,L=e._dur,N=e._startAt,H=e._targets,q=e.parent,z=q&&"nested"===q.data?q.parent._targets:H,R="auto"===e._overwrite,I=e.timeline;if(!I||M&&b||(b="none"),e._ease=De(b,Rt.ease),e._yEase=O?Ee(De(!0===O?b:O,Rt.ease)):0,O&&e._yoyo&&!e._repeat&&(O=e._yEase,e._yEase=e._ease,e._ease=O),!I){if(g=(d=H[0]?m(H[0]).harness:0)&&w[d.prop],i=D(w,re),N&&N.render(-1,!0).kill(),x){if(P(e._startAt=Ue.set(H,A({data:"isStart",overwrite:!1,parent:q,immediateRender:!0,lazy:l(k),startAt:null,delay:0,onUpdate:S,onUpdateParams:C,callbackScope:$,stagger:0},x))),_)if(0<n)j||(e._startAt=0);else if(L&&!(n<0&&N))return void(n&&(e._zTime=n))}else if(E&&L)if(N)j||(e._startAt=0);else if(n&&(_=!1),o=A({overwrite:!1,data:"isFromStart",lazy:_&&l(k),immediateRender:_,stagger:0,parent:q},i),g&&(o[d.prop]=g),P(e._startAt=Ue.set(H,o)),_){if(!n)return}else t(e._startAt,Ft);for(e._pt=0,k=L&&l(k)||k&&!L,r=0;r<H.length;r++){if(c=(a=H[r])._gsap||v(H)[r]._gsap,e._ptLookup[r]=f={},se[c.id]&&oe.length&&T(),h=z===H?r:z.indexOf(a),d&&!1!==(p=new d).init(a,g||i,e,h,z)&&(e._pt=s=new sn(e._pt,a,p.name,0,1,p.render,p,0,p.priority),p._props.forEach((function(t){f[t]=s})),p.priority&&(u=1)),!d||g)for(o in i)ae[o]&&(p=qe(o,i,e,h,a,z))?p.priority&&(u=1):f[o]=s=Re.call(e,a,o,"get",i[o],h,z,0,w.stringFilter);e._op&&e._op[r]&&e.kill(a,e._op[r]),R&&e._pt&&(ze=e,ht.killTweensOf(a,f,e.globalTime(0)),y=!e.parent,ze=0),e._pt&&k&&(se[c.id]=1)}u&&on(e),e._onInit&&e._onInit(e)}e._from=!I&&!!w.runBackwards,e._onUpdate=S,e._initted=(!e._op||e._pt)&&!y},Fe=function(t,e,n,o,s){return r(t)?t.call(e,n,o,s):i(t)&&~t.indexOf("random(")?et(t):t},Be=de+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",We=(Be+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Ue=function(t){function r(e,i,r,s){var u;"number"==typeof i&&(r.duration=i,i=r,r=null);var d,p,h,m,y,w,x,_,T=(u=t.call(this,s?i:O(i),r)||this).vars,k=T.duration,S=T.delay,C=T.immediateRender,$=T.stagger,E=T.overwrite,D=T.keyframes,M=T.defaults,P=T.scrollTrigger,j=T.yoyoEase,L=u.parent,N=(Qt(e)||Gt(e)?o(e[0]):"length"in i)?[e]:me(e);if(u._targets=N.length?v(N):f("GSAP target "+e+" not found. https://greensock.com",!zt.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=E,D||$||c(k)||c(S)){if(i=u.vars,(d=u.timeline=new He({data:"nested",defaults:M||{}})).kill(),d.parent=n(u),D)A(d.vars.defaults,{ease:"none"}),D.forEach((function(t){return d.to(N,t,">")}));else{if(m=N.length,x=$?Q($):g,a($))for(y in $)~Be.indexOf(y)&&((_=_||{})[y]=$[y]);for(p=0;p<m;p++){for(y in h={},i)We.indexOf(y)<0&&(h[y]=i[y]);h.stagger=0,j&&(h.yoyoEase=j),_&&pe(h,_),w=N[p],h.duration=+Fe(k,n(u),p,w,N),h.delay=(+Fe(S,n(u),p,w,N)||0)-u._delay,!$&&1===m&&h.delay&&(u._delay=S=h.delay,u._start+=S,h.delay=0),d.to(w,h,x(p,w,N))}d.duration()?k=S=0:u.timeline=0}k||u.duration(k=d.duration())}else u.timeline=0;return!0===E&&(ze=n(u),ht.killTweensOf(N),ze=0),L&&z(L,n(u)),(C||!k&&!D&&u._start===b(L._time)&&l(C)&&function t(e){return!e||e._ts&&t(e.parent)}(n(u))&&"nested"!==L.data)&&(u._tTime=-Ft,u.render(Math.max(0,-S))),P&&I(n(u),P),u}e(r,t);var s=r.prototype;return s.render=function(t,e,n){var i,r,o,s,a,l,u,c,d,p=this._time,f=this._tDur,h=this._dur,g=f-Ft<t&&0<=t?f:t<Ft?0:t;if(h){if(g!==this._tTime||!t||n||this._startAt&&this._zTime<0!=t<0){if(i=g,c=this.timeline,this._repeat){if(i=b(g%(s=h+this._rDelay)),g===f?(o=this._repeat,i=h):((o=~~(g/s))&&o===g/s&&(i=h,o--),h<i&&(i=h)),(l=this._yoyo&&1&o)&&(d=this._yEase,i=h-i),a=fe(this._tTime,s),i===p&&!n&&this._initted)return this;o!==a&&(c&&this._yEase&&ut(c,l),!this.vars.repeatRefresh||l||this._lock||(this._lock=n=1,this.render(b(s*o),!0).invalidate()._lock=0))}if(!this._initted){if(F(this,t<0?t:i,n,e))return this._tTime=0,this;if(h!==this._dur)return this.render(t,e,n)}for(this._tTime=g,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=u=(d||this._ease)(i/h),this._from&&(this.ratio=u=1-u),!i||p||e||we(this,"onStart"),r=this._pt;r;)r.r(u,r.d),r=r._next;c&&c.render(t<0?t:!i&&l?-Ft:c._dur*u,e,n)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,n),we(this,"onUpdate")),this._repeat&&o!==a&&this.vars.onRepeat&&!e&&this.parent&&we(this,"onRepeat"),g!==this._tDur&&g||this._tTime!==g||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&h||!(g===this._tDur&&0<this._ts||!g&&this._ts<0)||P(this,1),e||t<0&&!p||!g&&!p||(we(this,g===f?"onComplete":"onReverseComplete",!0),!this._prom||g<f&&0<this.timeScale()||this._prom()))}}else!function(t,e,n,i){var r,o,s=t.ratio,a=e<0||!e&&s&&!t._start&&t._zTime>Ft&&!t._dp._lock||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data?0:1,l=t._rDelay,u=0;if(l&&t._repeat&&(u=ge(0,t._tDur,e),fe(u,l)!==(o=fe(t._tTime,l))&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||i||t._zTime===Ft||!e&&t._zTime){if(!t._initted&&F(t,e,i,n))return;for(o=t._zTime,t._zTime=e||(n?Ft:0),n=n||e&&!o,t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=u,n||we(t,"onStart"),r=t._pt;r;)r.r(a,r.d),r=r._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&we(t,"onUpdate"),u&&t._repeat&&!n&&t.parent&&we(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&P(t,1),n||(we(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,n);return this},s.targets=function(){return this._targets},s.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),t.prototype.invalidate.call(this)},s.kill=function(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return it(this);if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,ze&&!0!==ze.vars.overwrite)._first||it(this),this.parent&&n!==this.timeline.totalDuration()&&B(this,this._dur*this.timeline._tDur/n,0,1),this}var r,o,s,a,l,u,c,d=this._targets,p=t?me(t):d,f=this._ptLookup,h=this._pt;if((!e||"all"===e)&&function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0}(d,p))return"all"===e&&(this._pt=0),it(this);for(r=this._op=this._op||[],"all"!==e&&(i(e)&&(l={},w(e,(function(t){return l[t]=1})),e=l),e=function(t,e){var n,i,r,o,s=t[0]?m(t[0]).harness:0,a=s&&s.aliases;if(!a)return e;for(i in n=pe({},e),a)if(i in n)for(r=(o=a[i].split(",")).length;r--;)n[o[r]]=n[i];return n}(d,e)),c=d.length;c--;)if(~p.indexOf(d[c]))for(l in o=f[c],"all"===e?(r[c]=e,a=o,s={}):(s=r[c]=r[c]||{},a=e),a)(u=o&&o[l])&&("kill"in u.d&&!0!==u.d.kill(l)||M(this,u,"_pt"),delete o[l]),"all"!==s&&(s[l]=1);return this._initted&&!this._pt&&h&&it(this),this},r.to=function(t,e,n){return new r(t,e,n)},r.from=function(t,e){return new r(t,_(arguments,1))},r.delayedCall=function(t,e,n,i){return new r(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:i})},r.fromTo=function(t,e,n){return new r(t,_(arguments,2))},r.set=function(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new r(t,e)},r.killTweensOf=function(t,e,n){return ht.killTweensOf(t,e,n)},r}(Le);function Xe(t,e,n){return t.setAttribute(e,n)}function Ye(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)}A(Ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),w("staggerTo,staggerFrom,staggerFromTo",(function(t){Ue[t]=function(){var e=new He,n=ve.call(arguments,0);return n.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,n)}}));var Ve=function(t,e,n){return t[e]=n},Ge=function(t,e,n){return t[e](n)},Qe=function(t,e,n,i){return t[e](i.fp,n)},Je=function(t,e){return r(t[e])?Ge:s(t[e])&&t.setAttribute?Xe:Ve},Ze=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Ke=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},tn=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round(1e4*(n.s+n.c*t))/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},en=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},nn=function(t,e,n,i){for(var r,o=this._pt;o;)r=o._next,o.p===i&&o.modifier(t,e,n),o=r},rn=function(t){for(var e,n,i=this._pt;i;)n=i._next,i.p===t&&!i.op||i.op===t?M(this,i,"_pt"):i.dep||(e=1),i=n;return!e},on=function(t){for(var e,n,i,r,o=t._pt;o;){for(e=o._next,n=i;n&&n.pr>o.pr;)n=n._next;(o._prev=n?n._prev:r)?o._prev._next=o:i=o,(o._next=n)?n._prev=o:r=o,o=e}t._pt=i},sn=(an.prototype.modifier=function(t,e,n){this.mSet=this.mSet||this.set,this.set=Ye,this.m=t,this.mt=n,this.tween=e},an);function an(t,e,n,i,r,o,s,a,l){this.t=e,this.s=i,this.c=r,this.p=n,this.r=o||Ze,this.d=s||this,this.set=a||Ve,this.pr=l||0,(this._next=t)&&(t._prev=this)}w(de+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",(function(t){return re[t]=1})),ie.TweenMax=ie.TweenLite=Ue,ie.TimelineLite=ie.TimelineMax=He,ht=new He({sortChildren:!1,defaults:Rt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),zt.stringFilter=lt;var ln={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){return function(t){var e=(t=!t.name&&t.default||t).name,n=r(t),i=e&&!n&&t.init?function(){this._props=[]}:t,o={init:g,render:en,add:Re,kill:rn,modifier:nn,rawVars:0},s={targetTest:0,get:0,getSetter:Je,aliases:{},register:0};if(Se(),t!==i){if(ae[e])return;A(i,A(D(t,o),s)),pe(i.prototype,pe(o,D(t,s))),ae[i.prop=e]=i,t.targetTest&&(ce.push(i),re[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}h(e,i),t.register&&t.register(dn,i,sn)}(t)}))},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return ht.getTweensOf(t,e)},getProperty:function(t,e,n,r){i(t)&&(t=me(t)[0]);var o=m(t||{}).get,s=n?C:S;return"native"===n&&(n=""),t?e?s((ae[e]&&ae[e].get||o)(t,e,n,r)):function(e,n,i){return s((ae[e]&&ae[e].get||o)(t,e,n,i))}:t},quickSetter:function(t,e,n){if(1<(t=me(t)).length){var i=t.map((function(t){return dn.quickSetter(t,e,n)})),r=i.length;return function(t){for(var e=r;e--;)i[e](t)}}t=t[0]||{};var o=ae[e],s=m(t),a=s.harness&&(s.harness.aliases||{})[e]||e,l=o?function(e){var i=new o;xt._pt=0,i.init(t,n?e+n:e,xt,0,[t]),i.render(1,i),xt._pt&&en(1,xt)}:s.set(t,a);return o?l:function(e){return l(t,a,n?e+n:e,s,1)}},isTweening:function(t){return 0<ht.getTweensOf(t,!0).length},defaults:function(t){return t&&t.ease&&(t.ease=De(t.ease,Rt.ease)),E(Rt,t||{})},config:function(t){return E(zt,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach((function(t){return t&&!ae[t]&&!ie[t]&&f(e+" effect requires "+t+" plugin.")})),le[e]=function(t,e,i){return n(me(t),A(e||{},r),i)},o&&(He.prototype[e]=function(t,n,i){return this.add(le[e](t,a(n)?n:(i=n)&&{},this),i)})},registerEase:function(t,e){Ce[t]=De(e)},parseEase:function(t,e){return arguments.length?De(t,e):Ce},getById:function(t){return ht.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var n,i,r=new He(t);for(r.smoothChildTiming=l(t.smoothChildTiming),ht.remove(r),r._dp=0,r._time=r._tTime=ht._time,n=ht._first;n;)i=n._next,!e&&!n._dur&&n instanceof Ue&&n.vars.onComplete===n._targets[0]||R(r,n,n._start-n._delay),n=i;return R(ht,r,0),r},utils:{wrap:function t(e,n,i){var r=n-e;return Qt(e)?tt(e,t(0,e.length),n):X(i,(function(t){return(r+(t-e)%r)%r+e}))},wrapYoyo:function t(e,n,i){var r=n-e,o=2*r;return Qt(e)?tt(e,t(0,e.length-1),n):X(i,(function(t){return e+(r<(t=(o+(t-e)%o)%o||0)?o-t:t)}))},distribute:Q,random:K,snap:Z,normalize:function(t,e,n){return ye(t,e,0,1,n)},getUnit:Y,clamp:function(t,e,n){return X(n,(function(n){return ge(t,e,n)}))},splitColor:ot,toArray:me,mapRange:ye,pipe:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},unitize:function(t,e){return function(n){return t(parseFloat(n))+(e||Y(n))}},interpolate:function t(e,n,r,o){var s=isNaN(e+n)?0:function(t){return(1-t)*e+t*n};if(!s){var a,l,u,c,d,p=i(e),f={};if(!0===r&&(o=1)&&(r=null),p)e={p:e},n={p:n};else if(Qt(e)&&!Qt(n)){for(u=[],c=e.length,d=c-2,l=1;l<c;l++)u.push(t(e[l-1],e[l]));c--,s=function(t){t*=c;var e=Math.min(d,~~t);return u[e](t-e)},r=n}else o||(e=pe(Qt(e)?[]:{},e));if(!u){for(a in n)Re.call(f,e,a,"get",n[a]);s=function(t){return en(t,f)||(p?e.p:e)}}}return X(r,s)},shuffle:G},install:d,effects:le,ticker:ke,updateRoot:He.updateRoot,plugins:ae,globalTimeline:ht,core:{PropTween:sn,globals:h,Tween:Ue,Timeline:He,Animation:Le,getCache:m,_removeLinkedListItem:M}};function un(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n}function cn(t,e){return{name:t,rawVars:1,init:function(t,n,r){r._onInit=function(t){var r,o;if(i(n)&&(r={},w(n,(function(t){return r[t]=1})),n=r),e){for(o in r={},n)r[o]=e(n[o]);n=r}!function(t,e){var n,i,r,o=t._targets;for(n in e)for(i=o.length;i--;)(r=(r=t._ptLookup[i][n])&&r.d)&&(r._pt&&(r=un(r,n)),r&&r.modifier&&r.modifier(e[n],t,o[i],n))}(t,n)}}}}w("to,from,fromTo,delayedCall,set,killTweensOf",(function(t){return ln[t]=Ue[t]})),ke.add(He.updateRoot),xt=ln.to({},{duration:0});var dn=ln.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,s;for(o in e)(s=this.add(t,"setAttribute",(t.getAttribute(o)||0)+"",e[o],i,r,0,0,o))&&(s.op=o),this._props.push(o)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},cn("roundProps",J),cn("modifiers"),cn("snap",Z))||ln;function pn(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function fn(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function hn(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function gn(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)}function vn(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function mn(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function yn(t,e,n){return t.style[e]=n}function wn(t,e,n){return t.style.setProperty(e,n)}function bn(t,e,n){return t._gsap[e]=n}function xn(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n}function _n(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)}function Tn(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)}function kn(t,e){var n=Xn.createElementNS?Xn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xn.createElement(t);return n.style?n:Xn.createElement(t)}function Sn(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xi,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&Sn(t,$i(e)||e,1)||""}function Cn(){"undefined"!=typeof window&&window.document&&(Un=window,Xn=Un.document,Yn=Xn.documentElement,Gn=kn("div")||{style:{}},Qn=kn("div"),Si=$i(Si),Ci=Si+"Origin",Gn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zn=!!$i("perspective"),Vn=1)}function An(t){var e,n=kn("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,o=this.style.cssText;if(Yn.appendChild(n),n.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=An}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Yn.removeChild(n),this.style.cssText=o,e}function $n(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])}function En(t){var e;try{e=t.getBBox()}catch(n){e=An.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===An||(e=An.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+$n(t,["x","cx","x1"])||0,y:+$n(t,["y","cy","y1"])||0,width:0,height:0}}function Dn(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!En(t))}function On(t,e){if(e){var n=t.style;e in mi&&e!==Ci&&(e=Si),n.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),n.removeProperty(e.replace(xi,"-$1").toLowerCase())):n.removeAttribute(e)}}function Mn(t,e,n,i,r,o){var s=new sn(t._pt,e,n,0,1,o?mn:vn);return(t._pt=s).b=i,s.e=r,t._props.push(n),s}function Pn(t,e,n,i){var r,o,s,a,l=parseFloat(n)||0,u=(n+"").trim().substr((l+"").length)||"px",c=Gn.style,d=_i.test(e),p="svg"===t.tagName.toLowerCase(),f=(p?"client":"offset")+(d?"Width":"Height"),h="px"===i,g="%"===i;return i===u||!l||Ei[i]||Ei[u]?l:("px"===u||h||(l=Pn(t,e,n,"px")),a=t.getCTM&&Dn(t),g&&(mi[e]||~e.indexOf("adius"))?b(l/(a?t.getBBox()[d?"width":"height"]:t[f])*100):(c[d?"width":"height"]=100+(h?u:i),o=~e.indexOf("adius")||"em"===i&&t.appendChild&&!p?t:t.parentNode,a&&(o=(t.ownerSVGElement||{}).parentNode),o&&o!==Xn&&o.appendChild||(o=Xn.body),(s=o._gsap)&&g&&s.width&&d&&s.time===ke.time?b(l/s.width*100):(!g&&"%"!==u||(c.position=Sn(t,"position")),o===t&&(c.position="static"),o.appendChild(Gn),r=Gn[f],o.removeChild(Gn),c.position="absolute",d&&g&&((s=m(o)).time=ke.time,s.width=o[f]),b(h?r*l/100:r&&l?100/r*l:0))))}function jn(t,e,n,i){var r;return Vn||Cn(),e in ki&&"transform"!==e&&~(e=ki[e]).indexOf(",")&&(e=e.split(",")[0]),mi[e]&&"transform"!==e?(r=ji(t,i),r="transformOrigin"!==e?r[e]:Li(Sn(t,Ci))+" "+r.zOrigin+"px"):(r=t.style[e])&&"auto"!==r&&!i&&!~(r+"").indexOf("calc(")||(r=Oi[e]&&Oi[e](t,e,n)||Sn(t,e)||y(t,e)||("opacity"===e?1:0)),n&&!~(r+"").indexOf(" ")?Pn(t,e,r,n)+n:r}function Ln(t,e,n,i){if(!n||"none"===n){var r=$i(e,t,1),o=r&&Sn(t,r,1);o&&o!==n?(e=r,n=o):"borderColor"===e&&(n=Sn(t,"borderTopColor"))}var s,a,l,u,c,d,p,f,h,g,v,m,y=new sn(this._pt,t.style,e,0,1,tn),w=0,b=0;if(y.b=n,y.e=i,n+="","auto"==(i+="")&&(t.style[e]=i,i=Sn(t,e)||i,t.style[e]=n),lt(s=[n,i]),i=s[1],l=(n=s[0]).match(Kt)||[],(i.match(Kt)||[]).length){for(;a=Kt.exec(i);)p=a[0],h=i.substring(w,a.index),c?c=(c+1)%5:"rgba("!==h.substr(-5)&&"hsla("!==h.substr(-5)||(c=1),p!==(d=l[b++]||"")&&(u=parseFloat(d)||0,v=d.substr((u+"").length),(m="="===p.charAt(1)?+(p.charAt(0)+"1"):0)&&(p=p.substr(2)),f=parseFloat(p),g=p.substr((f+"").length),w=Kt.lastIndex-g.length,g||(g=g||zt.units[e]||v,w===i.length&&(i+=g,y.e+=g)),v!==g&&(u=Pn(t,e,d,g)||0),y._pt={_next:y._pt,p:h||1===b?h:",",s:u,c:m?m*f:f-u,m:c&&c<4?Math.round:0});y.c=w<i.length?i.substring(w,i.length):""}else y.r="display"===e&&"none"===i?mn:vn;return ee.test(i)&&(y.e=0),this._pt=y}function Nn(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==i&&"right"!==i||(t=n,n=i,i=t),e[0]=Di[n]||n,e[1]=Di[i]||i,e.join(" ")}function Hn(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,i,r,o=e.t,s=o.style,a=e.u,l=o._gsap;if("all"===a||!0===a)s.cssText="",i=1;else for(r=(a=a.split(",")).length;-1<--r;)n=a[r],mi[n]&&(i=1,n="transformOrigin"===n?Ci:Si),On(o,n);i&&(On(o,Si),l&&(l.svg&&o.removeAttribute("transform"),ji(o,1),l.uncache=1))}}function qn(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function zn(t){var e=Sn(t,Si);return qn(e)?Mi:e.substr(7).match(Zt).map(b)}function Rn(t,e){var n,i,r,o,s=t._gsap||m(t),a=t.style,l=zn(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(r=t.transform.baseVal.consolidate().matrix).a,r.b,r.c,r.d,r.e,r.f]).join(",")?Mi:l:(l!==Mi||t.offsetParent||t===Yn||s.svg||(r=a.display,a.display="block",(n=t.parentNode)&&t.offsetParent||(o=1,i=t.nextSibling,Yn.appendChild(t)),l=zn(t),r?a.display=r:On(t,"display"),o&&(i?n.insertBefore(t,i):n?n.appendChild(t):Yn.removeChild(t))),e&&6<l.length?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)}function In(t,e,n,i,r,o){var s,a,l,u=t._gsap,c=r||Rn(t,!0),d=u.xOrigin||0,p=u.yOrigin||0,f=u.xOffset||0,h=u.yOffset||0,g=c[0],v=c[1],m=c[2],y=c[3],w=c[4],b=c[5],x=e.split(" "),_=parseFloat(x[0])||0,T=parseFloat(x[1])||0;n?c!==Mi&&(a=g*y-v*m)&&(l=_*(-v/a)+T*(g/a)-(g*b-v*w)/a,_=_*(y/a)+T*(-m/a)+(m*b-y*w)/a,T=l):(_=(s=En(t)).x+(~x[0].indexOf("%")?_/100*s.width:_),T=s.y+(~(x[1]||x[0]).indexOf("%")?T/100*s.height:T)),i||!1!==i&&u.smooth?(w=_-d,b=T-p,u.xOffset=f+(w*g+b*m)-w,u.yOffset=h+(w*v+b*y)-b):u.xOffset=u.yOffset=0,u.xOrigin=_,u.yOrigin=T,u.smooth=!!i,u.origin=e,u.originIsAbsolute=!!n,t.style[Ci]="0px 0px",o&&(Mn(o,u,"xOrigin",d,_),Mn(o,u,"yOrigin",p,T),Mn(o,u,"xOffset",f,u.xOffset),Mn(o,u,"yOffset",h,u.yOffset)),t.setAttribute("data-svg-origin",_+" "+T)}function Fn(t,e,n){var i=Y(e);return b(parseFloat(e)+parseFloat(Pn(t,"x",n+"px",i)))+i}function Bn(t,e,n,r,o,s){var a,l,u=360,c=i(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?yi:1),p=s?d*s:d-r,f=r+p+"deg";return c&&("short"===(a=o.split("_")[1])&&(p%=u)!=p%180&&(p+=p<0?u:-u),"cw"===a&&p<0?p=(p+36e9)%u-~~(p/u)*u:"ccw"===a&&0<p&&(p=(p-36e9)%u-~~(p/u)*u)),t._pt=l=new sn(t._pt,e,n,r,p,fn),l.e=f,l.u="deg",t._props.push(n),l}function Wn(t,e,n){var i,r,o,s,a,l,u,c=Qn.style,d=n._gsap;for(r in c.cssText=getComputedStyle(n).cssText+";position:absolute;display:block;",c[Si]=e,Xn.body.appendChild(Qn),i=ji(Qn,1),mi)(o=d[r])!==(s=i[r])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(r)<0&&(a=Y(o)!==(u=Y(s))?Pn(n,r,o,u):parseFloat(o),l=parseFloat(s),t._pt=new sn(t._pt,d,r,a,l-a,pn),t._pt.u=u||0,t._props.push(r));Xn.body.removeChild(Qn)}Ue.version=He.version=dn.version="3.5.1",wt=1,u()&&Se();var Un,Xn,Yn,Vn,Gn,Qn,Jn,Zn,Kn=Ce.Power0,ti=Ce.Power1,ei=Ce.Power2,ni=Ce.Power3,ii=Ce.Power4,ri=Ce.Linear,oi=Ce.Quad,si=Ce.Cubic,ai=Ce.Quart,li=Ce.Quint,ui=Ce.Strong,ci=Ce.Elastic,di=Ce.Back,pi=Ce.SteppedEase,fi=Ce.Bounce,hi=Ce.Sine,gi=Ce.Expo,vi=Ce.Circ,mi={},yi=180/Math.PI,wi=Math.PI/180,bi=Math.atan2,xi=/([A-Z])/g,_i=/(?:left|right|width|margin|padding|x)/i,Ti=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Si="transform",Ci=Si+"Origin",Ai="O,Moz,ms,Ms,Webkit".split(","),$i=function(t,e,n){var i=(e||Gn).style,r=5;if(t in i&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(Ai[r]+t in i););return r<0?null:(3===r?"ms":0<=r?Ai[r]:"")+t},Ei={deg:1,rad:1,turn:1},Di={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Oi={clearProps:function(t,e,n,i,r){if("isFromStart"!==r.data){var o=t._pt=new sn(t._pt,e,n,0,0,Hn);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Mi=[1,0,0,1,0,0],Pi={},ji=function(t,e){var n=t._gsap||new je(t);if("x"in n&&!e&&!n.uncache)return n;var i,r,o,s,a,l,u,c,d,p,f,h,g,v,m,y,w,x,_,T,k,S,C,A,$,E,D,O,M,P,j,L,N=t.style,H=n.scaleX<0,q="deg",z=Sn(t,Ci)||"0";return i=r=o=l=u=c=d=p=f=0,s=a=1,n.svg=!(!t.getCTM||!Dn(t)),v=Rn(t,n.svg),n.svg&&(A=!n.uncache&&t.getAttribute("data-svg-origin"),In(t,A||z,!!A||n.originIsAbsolute,!1!==n.smooth,v)),h=n.xOrigin||0,g=n.yOrigin||0,v!==Mi&&(x=v[0],_=v[1],T=v[2],k=v[3],i=S=v[4],r=C=v[5],6===v.length?(s=Math.sqrt(x*x+_*_),a=Math.sqrt(k*k+T*T),l=x||_?bi(_,x)*yi:0,(d=T||k?bi(T,k)*yi+l:0)&&(a*=Math.cos(d*wi)),n.svg&&(i-=h-(h*x+g*T),r-=g-(h*_+g*k))):(L=v[6],P=v[7],D=v[8],O=v[9],M=v[10],j=v[11],i=v[12],r=v[13],o=v[14],u=(m=bi(L,M))*yi,m&&(A=S*(y=Math.cos(-m))+D*(w=Math.sin(-m)),$=C*y+O*w,E=L*y+M*w,D=S*-w+D*y,O=C*-w+O*y,M=L*-w+M*y,j=P*-w+j*y,S=A,C=$,L=E),c=(m=bi(-T,M))*yi,m&&(y=Math.cos(-m),j=k*(w=Math.sin(-m))+j*y,x=A=x*y-D*w,_=$=_*y-O*w,T=E=T*y-M*w),l=(m=bi(_,x))*yi,m&&(A=x*(y=Math.cos(m))+_*(w=Math.sin(m)),$=S*y+C*w,_=_*y-x*w,C=C*y-S*w,x=A,S=$),u&&359.9<Math.abs(u)+Math.abs(l)&&(u=l=0,c=180-c),s=b(Math.sqrt(x*x+_*_+T*T)),a=b(Math.sqrt(C*C+L*L)),m=bi(S,C),d=2e-4<Math.abs(m)?m*yi:0,f=j?1/(j<0?-j:j):0),n.svg&&(A=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qn(Sn(t,Si)),A&&t.setAttribute("transform",A))),90<Math.abs(d)&&Math.abs(d)<270&&(H?(s*=-1,d+=l<=0?180:-180,l+=l<=0?180:-180):(a*=-1,d+=d<=0?180:-180)),n.x=((n.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",n.y=((n.yPercent=r&&Math.round(t.offsetHeight/2)===Math.round(-r)?-50:0)?0:r)+"px",n.z=o+"px",n.scaleX=b(s),n.scaleY=b(a),n.rotation=b(l)+q,n.rotationX=b(u)+q,n.rotationY=b(c)+q,n.skewX=d+q,n.skewY=p+q,n.transformPerspective=f+"px",(n.zOrigin=parseFloat(z.split(" ")[2])||0)&&(N[Ci]=Li(z)),n.xOffset=n.yOffset=0,n.force3D=zt.force3D,n.renderTransform=n.svg?Ii:Zn?Ri:Ni,n.uncache=0,n},Li=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ni=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ri(t,e)},Hi="0deg",qi="0px",zi=") ",Ri=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,a=n.z,l=n.rotation,u=n.rotationY,c=n.rotationX,d=n.skewX,p=n.skewY,f=n.scaleX,h=n.scaleY,g=n.transformPerspective,v=n.force3D,m=n.target,y=n.zOrigin,w="",b="auto"===v&&t&&1!==t||!0===v;if(y&&(c!==Hi||u!==Hi)){var x,_=parseFloat(u)*wi,T=Math.sin(_),k=Math.cos(_);_=parseFloat(c)*wi,o=Fn(m,o,T*(x=Math.cos(_))*-y),s=Fn(m,s,-Math.sin(_)*-y),a=Fn(m,a,k*x*-y+y)}g!==qi&&(w+="perspective("+g+zi),(i||r)&&(w+="translate("+i+"%, "+r+"%) "),!b&&o===qi&&s===qi&&a===qi||(w+=a!==qi||b?"translate3d("+o+", "+s+", "+a+") ":"translate("+o+", "+s+zi),l!==Hi&&(w+="rotate("+l+zi),u!==Hi&&(w+="rotateY("+u+zi),c!==Hi&&(w+="rotateX("+c+zi),d===Hi&&p===Hi||(w+="skew("+d+", "+p+zi),1===f&&1===h||(w+="scale("+f+", "+h+zi),m.style[Si]=w||"translate(0, 0)"},Ii=function(t,e){var n,i,r,o,s,a=e||this,l=a.xPercent,u=a.yPercent,c=a.x,d=a.y,p=a.rotation,f=a.skewX,h=a.skewY,g=a.scaleX,v=a.scaleY,m=a.target,y=a.xOrigin,w=a.yOrigin,x=a.xOffset,_=a.yOffset,T=a.forceCSS,k=parseFloat(c),S=parseFloat(d);p=parseFloat(p),f=parseFloat(f),(h=parseFloat(h))&&(f+=h=parseFloat(h),p+=h),p||f?(p*=wi,f*=wi,n=Math.cos(p)*g,i=Math.sin(p)*g,r=Math.sin(p-f)*-v,o=Math.cos(p-f)*v,f&&(h*=wi,s=Math.tan(f-h),r*=s=Math.sqrt(1+s*s),o*=s,h&&(s=Math.tan(h),n*=s=Math.sqrt(1+s*s),i*=s)),n=b(n),i=b(i),r=b(r),o=b(o)):(n=g,o=v,i=r=0),(k&&!~(c+"").indexOf("px")||S&&!~(d+"").indexOf("px"))&&(k=Pn(m,"x",c,"px"),S=Pn(m,"y",d,"px")),(y||w||x||_)&&(k=b(k+y-(y*n+w*r)+x),S=b(S+w-(y*i+w*o)+_)),(l||u)&&(k=b(k+l/100*(s=m.getBBox()).width),S=b(S+u/100*s.height)),s="matrix("+n+","+i+","+r+","+o+","+k+","+S+")",m.setAttribute("transform",s),T&&(m.style[Si]=s)};w("padding,margin,Width,Radius",(function(t,e){var n="Right",i="Bottom",r="Left",o=(e<3?["Top",n,i,r]:["Top"+r,"Top"+n,i+n,i+r]).map((function(n){return e<2?t+n:"border"+n+t}));Oi[1<e?"border"+t:t]=function(t,e,n,i,r){var s,a;if(arguments.length<4)return s=o.map((function(e){return jn(t,e,n)})),5===(a=s.join(" ")).split(s[0]).length?s[0]:a;s=(i+"").split(" "),a={},o.forEach((function(t,e){return a[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,a,r)}}));var Fi,Bi,Wi={name:"css",register:Cn,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o,s,a,l,u,c,d,f,h,g,v,m,y,w,b,x=this._props,_=t.style;for(d in Vn||Cn(),e)if("autoRound"!==d&&(s=e[d],!ae[d]||!qe(d,e,n,i,t,r)))if(u=typeof s,c=Oi[d],"function"===u&&(u=typeof(s=s.call(n,i,t,r))),"string"===u&&~s.indexOf("random(")&&(s=et(s)),c)c(this,t,d,s,n)&&(b=1);else if("--"===d.substr(0,2))this.add(_,"setProperty",getComputedStyle(t).getPropertyValue(d)+"",s+"",i,r,0,0,d);else if("undefined"!==u){if(o=jn(t,d),l=parseFloat(o),(g="string"===u&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),a=parseFloat(s),d in ki&&("autoAlpha"===d&&(1===l&&"hidden"===jn(t,"visibility")&&a&&(l=0),Mn(this,_,"visibility",l?"inherit":"hidden",a?"inherit":"hidden",!a)),"scale"!==d&&"transform"!==d&&~(d=ki[d]).indexOf(",")&&(d=d.split(",")[0])),v=d in mi)if(m||((y=t._gsap).renderTransform||ji(t),w=!1!==e.smoothOrigin&&y.smooth,(m=this._pt=new sn(this._pt,_,Si,0,1,y.renderTransform,y,0,-1)).dep=1),"scale"===d)this._pt=new sn(this._pt,y,"scaleY",y.scaleY,g?g*a:a-y.scaleY),x.push("scaleY",d),d+="X";else{if("transformOrigin"===d){s=Nn(s),y.svg?In(t,s,0,w,0,this):((h=parseFloat(s.split(" ")[2])||0)!==y.zOrigin&&Mn(this,y,"zOrigin",y.zOrigin,h),Mn(this,_,d,Li(o),Li(s)));continue}if("svgOrigin"===d){In(t,s,1,w,0,this);continue}if(d in Pi){Bn(this,y,d,l,s,g);continue}if("smoothOrigin"===d){Mn(this,y,"smooth",y.smooth,s);continue}if("force3D"===d){y[d]=s;continue}if("transform"===d){Wn(this,s,t);continue}}else d in _||(d=$i(d)||d);if(v||(a||0===a)&&(l||0===l)&&!Ti.test(s)&&d in _)a=a||0,(f=(o+"").substr((l+"").length))!==(h=Y(s)||(d in zt.units?zt.units[d]:f))&&(l=Pn(t,d,o,h)),this._pt=new sn(this._pt,v?y:_,d,l,g?g*a:a-l,"px"!==h||!1===e.autoRound||v?pn:gn),this._pt.u=h||0,f!==h&&(this._pt.b=o,this._pt.r=hn);else if(d in _)Ln.call(this,t,d,o,s);else{if(!(d in t)){p(d,s);continue}this.add(t,d,t[d],s,i,r)}x.push(d)}b&&on(this)},get:jn,aliases:ki,getSetter:function(t,e,n){var i=ki[e];return i&&i.indexOf(",")<0&&(e=i),e in mi&&e!==Ci&&(t._gsap.x||jn(t,"x"))?n&&Jn===n?"scale"===e?xn:bn:(Jn=n||{})&&("scale"===e?_n:Tn):t.style&&!s(t.style[e])?yn:~e.indexOf("-")?wn:Je(t,e)},core:{_removeProperty:On,_getMatrix:Rn}};dn.utils.checkPrefix=$i,Bi=w("x,y,z,scale,scaleX,scaleY,xPercent,yPercent"+","+(Fi="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){mi[t]=1})),w(Fi,(function(t){zt.units[t]="deg",Pi[t]=1})),ki[Bi[13]]="x,y,z,scale,scaleX,scaleY,xPercent,yPercent,"+Fi,w("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");ki[e[1]]=Bi[e[0]]})),w("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){zt.units[t]="px"})),dn.registerPlugin(Wi);var Ui=dn.registerPlugin(Wi)||dn,Xi=Ui.core.Tween;t.Back=di,t.Bounce=fi,t.CSSPlugin=Wi,t.Circ=vi,t.Cubic=si,t.Elastic=ci,t.Expo=gi,t.Linear=ri,t.Power0=Kn,t.Power1=ti,t.Power2=ei,t.Power3=ni,t.Power4=ii,t.Quad=oi,t.Quart=ai,t.Quint=li,t.Sine=hi,t.SteppedEase=pi,t.Strong=ui,t.TimelineLite=He,t.TimelineMax=He,t.TweenLite=Ue,t.TweenMax=Xi,t.default=Ui,t.gsap=Ui,"undefined"==typeof window||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete t.default}));;
// // (function () {
//   function r(e, n, t) {
//     function o(i, f) {
//       if (!n[i]) {
//         if (!e[i]) {
//           var c = "function" == typeof require && require;
//           if (!f && c) return c(i, !0);
//           if (u) return u(i, !0);
//           var a = new Error("Cannot find module '" + i + "'");
//           throw ((a.code = "MODULE_NOT_FOUND"), a);
//         }
//         var p = (n[i] = { exports: {} });
//         e[i][0].call(
//           p.exports,
//           function (r) {
//             var n = e[i][1][r];
//             return o(n || r);
//           },
//           p,
//           p.exports,
//           r,
//           e,
//           n,
//           t
//         );
//       }
//       return n[i].exports;
//     }
//     for (
//       var u = "function" == typeof require && require, i = 0;
//       i < t.length;
//       i++
//     )
//       o(t[i]);
//     return o;
//   }
//   return r;
// })()(
//   {
//     1: [
//       function (require, module, exports) {
//         "use strict";

//         var _sketchJs = require("sketch-js");

//         var _sketchJs2 = _interopRequireDefault(_sketchJs);

//         var _alea = require("alea");

//         var _alea2 = _interopRequireDefault(_alea);

//         var _newArray = require("new-array");

//         var _newArray2 = _interopRequireDefault(_newArray);

//         var _lib = require("./lib");

//         var _lib2 = _interopRequireDefault(_lib);

//         function _interopRequireDefault(obj) {
//           return obj && obj.__esModule ? obj : { default: obj };
//         }

//         var container = document
//           .querySelector("main")
//           .appendChild(document.createElement("div"));
//         container.style.position = "absolute";

//         var ctx = _sketchJs2.default.create({
//           container: container,
//           autostart: false,
//           autoclear: false,
//           fullscreen: false,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//         container.style.position = `absolute`;
//         container.style.zIndex = -2;
//         container.style.top = 0;
//         var settings = {
//           colors: 2,
//           shapePoints: 5,
//           spread: 450,
//           colorSize: 150,
//           deformations: 2,
//           layers: 55,
//           randomSeed: 217,
//           sigma: 2,
//           blend: "lighten",
//           mask: false,
//           maskCircles: 300,
//           maskCircleSize: 50,
//         };

//         var rand = void 0;

//         ctx.setup = ctx.resize = function () {
//           rand = new _alea2.default(settings.randomSeed);
//           ctx.clearRect(0, 0, ctx.width, ctx.height);
//           var canvasCenter = [ctx.width / 2, ctx.height / 2];
//           if (settings.colorSize <= 600) {
//             settings.colorSize += 1;
//             // settings.spread = Math.round(Math.random() * (150 - 100) + 100);
//           }
//           var colors = (0, _newArray2.default)(settings.colors).map(
//             function () {
//               var color = [
//                 (rand() * 256) | 0,
//                 (rand() * 256) | 0,
//                 (rand() * 256) | 0,
//               ];

//               var rads = rand() * Math.PI * 2;
//               var dist = Math.pow(rand(), 0.5) * settings.spread;
//               var position = [
//                 Math.cos(rads) * dist + canvasCenter[0],
//                 Math.sin(rads) * dist + canvasCenter[1],
//               ];
//               return { color: color, position: position };
//             }
//           );
//           var params = Object.assign({}, settings, {
//             randomFn: rand,
//             context: ctx,
//             colors: colors,
//           });
//           var draw = (0, _lib2.default)(params);
//           requestAnimationFrame(ctx.resize);
//           draw();
//           if (settings.colorSize === 600) {
//             settings.colors = Math.round(Math.random() * (3 - 1) + 1);
//             settings.colorSize = 200;
//           }
//         };
//       },
//       { "./lib": 2, alea: 4, "new-array": 51, "sketch-js": 52 },
//     ],
//     2: [
//       function (require, module, exports) {
//         "use strict";

//         Object.defineProperty(exports, "__esModule", {
//           value: true,
//         });

//         var _slicedToArray = (function () {
//           function sliceIterator(arr, i) {
//             var _arr = [];
//             var _n = true;
//             var _d = false;
//             var _e = undefined;
//             try {
//               for (
//                 var _i = arr[Symbol.iterator](), _s;
//                 !(_n = (_s = _i.next()).done);
//                 _n = true
//               ) {
//                 _arr.push(_s.value);
//                 if (i && _arr.length === i) break;
//               }
//             } catch (err) {
//               _d = true;
//               _e = err;
//             } finally {
//               try {
//                 if (!_n && _i["return"]) _i["return"]();
//               } finally {
//                 if (_d) throw _e;
//               }
//             }
//             return _arr;
//           }
//           return function (arr, i) {
//             if (Array.isArray(arr)) {
//               return arr;
//             } else if (Symbol.iterator in Object(arr)) {
//               return sliceIterator(arr, i);
//             } else {
//               throw new TypeError(
//                 "Invalid attempt to destructure non-iterable instance"
//               );
//             }
//           };
//         })();

//         exports.default = watercolor;

//         var _newArray = require("new-array");

//         var _newArray2 = _interopRequireDefault(_newArray);

//         var _glVec = require("gl-vec2");

//         var _glVec2 = _interopRequireDefault(_glVec);

//         var _lerp = require("lerp");

//         var _lerp2 = _interopRequireDefault(_lerp);

//         var _normal = require("./normal");

//         var _normal2 = _interopRequireDefault(_normal);

//         function _interopRequireDefault(obj) {
//           return obj && obj.__esModule ? obj : { default: obj };
//         }

//         var defaultSettings = {
//           shapePoints: 5,
//           colorSize: 200,
//           deformations: 2,
//           layers: 55,
//           sigma: 2,
//           blend: "lighten",
//           mask: false,
//           maskCircles: 300,
//           maskCircleSize: 50,
//           random: Math.random,
//         };

//         function watercolor(settings) {
//           settings = Object.assign({}, defaultSettings, settings);
//           var _settings = settings,
//             context = _settings.context,
//             randomFn = _settings.randomFn;

//           context.globalCompositeOperation = settings.blend;

//           var shapes = settings.colors.map(function (_ref) {
//             var color = _ref.color,
//               position = _ref.position;

//             var points = (0, _newArray2.default)(settings.shapePoints).map(
//               function (_, i) {
//                 var rads = ((Math.PI * 2) / settings.shapePoints) * i;
//                 return [
//                   Math.cos(rads) * settings.colorSize + position[0],
//                   Math.sin(rads) * settings.colorSize + position[1],
//                 ];
//               }
//             );

//             var j = settings.deformations + 2;
//             while (j--) {
//               points = deformPolygon(points);
//             }

//             // fix this to turn any color representation into rgb
//             var rgb = color;

//             return { points: points, rgb: rgb };
//           });

//           return function draw() {
//             var q = shapes.length * settings.layers;
//             while (q--) {
//               var _shapes = shapes[q % shapes.length],
//                 points = _shapes.points,
//                 rgb = _shapes.rgb;

//               var detailedDeform = points.slice();
//               var k = settings.deformations;
//               while (k--) {
//                 detailedDeform = deformPolygon(detailedDeform);
//               }
//               var opacity = 1 / (settings.layers + 4);
//               var color = "rgba(" + rgb.join(", ") + ", " + opacity + ")";
//               drawPolygonWithMask(context, detailedDeform, color);
//             }
//           };

//           function deformPolygon(points) {
//             var newPoints = [];
//             for (var i = 0; i < points.length; i++) {
//               newPoints.push(points[i]);
//               var nextPoint = points[i + 1] || points[0];
//               newPoints.push(
//                 _glVec2.default.lerp([], points[i], nextPoint, randomFn())
//               );
//             }
//             newPoints = newPoints.map(function (pt, i) {
//               var lastPt = newPoints[i - 1] || newPoints[newPoints.length - 1];
//               var nextPt = newPoints[i + 1] || newPoints[0];
//               var distToClosestPt =
//                 (_glVec2.default.distance(pt, lastPt) +
//                   _glVec2.default.distance(pt, nextPt)) /
//                 2;
//               var r = (0, _normal2.default)(
//                 0,
//                 distToClosestPt / settings.sigma,
//                 randomFn
//               );
//               return [r() + pt[0], r() + pt[1]];
//             });
//             return newPoints;
//           }

//           function setMask(context, bounds) {
//             var _bounds$ = _slicedToArray(bounds[0], 2),
//               xMin = _bounds$[0],
//               yMin = _bounds$[1];

//             var _bounds$2 = _slicedToArray(bounds[1], 2),
//               xMax = _bounds$2[0],
//               yMax = _bounds$2[1];

//             context.beginPath();
//             var j = settings.maskCircles;
//             while (j--) {
//               var x = (0, _lerp2.default)(xMin, xMax, randomFn());
//               var y = (0, _lerp2.default)(yMin, yMax, randomFn());
//               var radius = randomFn() * settings.maskCircleSize;
//               context.arc(x, y, radius, 0, Math.PI * 2);
//             }
//             context.clip();
//           }

//           function drawPolygonWithMask(context, poly, color) {
//             var polygonBounds = getPolygonExtent(poly);
//             context.save();
//             if (settings.mask) {
//               setMask(context, polygonBounds);
//             }
//             drawPolygon(context, poly, color);
//             context.restore();
//           }
//         }

//         function getPolygonExtent(poly) {
//           var xMin = Infinity;
//           var xMax = -Infinity;
//           var yMin = Infinity;
//           var yMax = -Infinity;
//           var _iteratorNormalCompletion = true;
//           var _didIteratorError = false;
//           var _iteratorError = undefined;

//           try {
//             for (
//               var _iterator = poly[Symbol.iterator](), _step;
//               !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
//               _iteratorNormalCompletion = true
//             ) {
//               var point = _step.value;

//               xMin = point[0] < xMin ? point[0] : xMin;
//               xMax = point[0] > xMax ? point[0] : xMax;
//               yMin = point[1] < yMin ? point[1] : yMin;
//               yMax = point[1] > yMax ? point[1] : yMax;
//             }
//           } catch (err) {
//             _didIteratorError = true;
//             _iteratorError = err;
//           } finally {
//             try {
//               if (!_iteratorNormalCompletion && _iterator.return) {
//                 _iterator.return();
//               }
//             } finally {
//               if (_didIteratorError) {
//                 throw _iteratorError;
//               }
//             }
//           }

//           return [
//             [xMin, yMin],
//             [xMax, yMax],
//           ];
//         }

//         function drawPolygon(context, points, color) {
//           context.beginPath();
//           context.moveTo(points[0][0], points[0][1]);
//           points.slice(1).forEach(function (pt) {
//             return context.lineTo(pt[0], pt[1]);
//           });
//           context.lineTo(points[0][0], points[0][1]);
//           context.fillStyle = color;
//           context.fill();
//         }
//       },
//       { "./normal": 3, "gl-vec2": 22, lerp: 50, "new-array": 51 },
//     ],
//     3: [
//       function (require, module, exports) {
//         "use strict";

//         Object.defineProperty(exports, "__esModule", {
//           value: true,
//         });

//         exports.default = function (mu, sigma, rand) {
//           var x, r;
//           mu = mu == null ? 0 : +mu;
//           sigma = sigma == null ? 1 : +sigma;
//           rand = rand == null ? Math.random : rand;
//           return function () {
//             var y;

//             // If available, use the second previously-generated uniform random.
//             if (x != null) {
//               y = x;
//               x = null;
//               // eslint-disable-next-line
//             } else
//               do {
//                 // Otherwise, generate a new x and y.
//                 x = rand() * 2 - 1;
//                 y = rand() * 2 - 1;
//                 r = x * x + y * y;
//               } while (!r || r > 1);

//             return mu + sigma * y * Math.sqrt((-2 * Math.log(r)) / r);
//           };
//         };
//       },
//       {},
//     ],
//     4: [
//       function (require, module, exports) {
//         (function (root, factory) {
//           if (typeof exports === "object") {
//             module.exports = factory();
//           } else if (typeof define === "function" && define.amd) {
//             define(factory);
//           } else {
//             root.Alea = factory();
//           }
//         })(this, function () {
//           "use strict";

//           // From http://baagoe.com/en/RandomMusings/javascript/

//           // importState to sync generator states
//           Alea.importState = function (i) {
//             var random = new Alea();
//             random.importState(i);
//             return random;
//           };

//           return Alea;

//           function Alea() {
//             return (function (args) {
//               // Johannes Baagøe <baagoe@baagoe.com>, 2010
//               var s0 = 0;
//               var s1 = 0;
//               var s2 = 0;
//               var c = 1;

//               if (args.length == 0) {
//                 args = [+new Date()];
//               }
//               var mash = Mash();
//               s0 = mash(" ");
//               s1 = mash(" ");
//               s2 = mash(" ");

//               for (var i = 0; i < args.length; i++) {
//                 s0 -= mash(args[i]);
//                 if (s0 < 0) {
//                   s0 += 1;
//                 }
//                 s1 -= mash(args[i]);
//                 if (s1 < 0) {
//                   s1 += 1;
//                 }
//                 s2 -= mash(args[i]);
//                 if (s2 < 0) {
//                   s2 += 1;
//                 }
//               }
//               mash = null;

//               var random = function () {
//                 var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
//                 s0 = s1;
//                 s1 = s2;
//                 return (s2 = t - (c = t | 0));
//               };
//               random.uint32 = function () {
//                 return random() * 0x100000000; // 2^32
//               };
//               random.fract53 = function () {
//                 return (
//                   random() +
//                   ((random() * 0x200000) | 0) * 1.1102230246251565e-16
//                 ); // 2^-53
//               };
//               random.version = "Alea 0.9";
//               random.args = args;

//               // my own additions to sync state between two generators
//               random.exportState = function () {
//                 return [s0, s1, s2, c];
//               };
//               random.importState = function (i) {
//                 s0 = +i[0] || 0;
//                 s1 = +i[1] || 0;
//                 s2 = +i[2] || 0;
//                 c = +i[3] || 0;
//               };

//               return random;
//             })(Array.prototype.slice.call(arguments));
//           }

//           function Mash() {
//             var n = 0xefc8249d;

//             var mash = function (data) {
//               data = data.toString();
//               for (var i = 0; i < data.length; i++) {
//                 n += data.charCodeAt(i);
//                 var h = 0.02519603282416938 * n;
//                 n = h >>> 0;
//                 h -= n;
//                 h *= n;
//                 n = h >>> 0;
//                 h -= n;
//                 n += h * 0x100000000; // 2^32
//               }
//               return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
//             };

//             mash.version = "Mash 0.9";
//             return mash;
//           }
//         });
//       },
//       {},
//     ],
//     5: [
//       function (require, module, exports) {
//         module.exports = add;

//         /**
//          * Adds two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function add(out, a, b) {
//           out[0] = a[0] + b[0];
//           out[1] = a[1] + b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     6: [
//       function (require, module, exports) {
//         module.exports = ceil;

//         /**
//          * Math.ceil the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to ceil
//          * @returns {vec2} out
//          */
//         function ceil(out, a) {
//           out[0] = Math.ceil(a[0]);
//           out[1] = Math.ceil(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     7: [
//       function (require, module, exports) {
//         module.exports = clone;

//         /**
//          * Creates a new vec2 initialized with values from an existing vector
//          *
//          * @param {vec2} a vector to clone
//          * @returns {vec2} a new 2D vector
//          */
//         function clone(a) {
//           var out = new Float32Array(2);
//           out[0] = a[0];
//           out[1] = a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     8: [
//       function (require, module, exports) {
//         module.exports = copy;

//         /**
//          * Copy the values from one vec2 to another
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the source vector
//          * @returns {vec2} out
//          */
//         function copy(out, a) {
//           out[0] = a[0];
//           out[1] = a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     9: [
//       function (require, module, exports) {
//         module.exports = create;

//         /**
//          * Creates a new, empty vec2
//          *
//          * @returns {vec2} a new 2D vector
//          */
//         function create() {
//           var out = new Float32Array(2);
//           out[0] = 0;
//           out[1] = 0;
//           return out;
//         }
//       },
//       {},
//     ],
//     10: [
//       function (require, module, exports) {
//         module.exports = cross;

//         /**
//          * Computes the cross product of two vec2's
//          * Note that the cross product must by definition produce a 3D vector
//          *
//          * @param {vec3} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec3} out
//          */
//         function cross(out, a, b) {
//           var z = a[0] * b[1] - a[1] * b[0];
//           out[0] = out[1] = 0;
//           out[2] = z;
//           return out;
//         }
//       },
//       {},
//     ],
//     11: [
//       function (require, module, exports) {
//         module.exports = require("./distance");
//       },
//       { "./distance": 12 },
//     ],
//     12: [
//       function (require, module, exports) {
//         module.exports = distance;

//         /**
//          * Calculates the euclidian distance between two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} distance between a and b
//          */
//         function distance(a, b) {
//           var x = b[0] - a[0],
//             y = b[1] - a[1];
//           return Math.sqrt(x * x + y * y);
//         }
//       },
//       {},
//     ],
//     13: [
//       function (require, module, exports) {
//         module.exports = require("./divide");
//       },
//       { "./divide": 14 },
//     ],
//     14: [
//       function (require, module, exports) {
//         module.exports = divide;

//         /**
//          * Divides two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function divide(out, a, b) {
//           out[0] = a[0] / b[0];
//           out[1] = a[1] / b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     15: [
//       function (require, module, exports) {
//         module.exports = dot;

//         /**
//          * Calculates the dot product of two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} dot product of a and b
//          */
//         function dot(a, b) {
//           return a[0] * b[0] + a[1] * b[1];
//         }
//       },
//       {},
//     ],
//     16: [
//       function (require, module, exports) {
//         module.exports = 0.000001;
//       },
//       {},
//     ],
//     17: [
//       function (require, module, exports) {
//         module.exports = equals;

//         var EPSILON = require("./epsilon");

//         /**
//          * Returns whether or not the vectors have approximately the same elements in the same position.
//          *
//          * @param {vec2} a The first vector.
//          * @param {vec2} b The second vector.
//          * @returns {Boolean} True if the vectors are equal, false otherwise.
//          */
//         function equals(a, b) {
//           var a0 = a[0];
//           var a1 = a[1];
//           var b0 = b[0];
//           var b1 = b[1];
//           return (
//             Math.abs(a0 - b0) <=
//               EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
//             Math.abs(a1 - b1) <=
//               EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
//           );
//         }
//       },
//       { "./epsilon": 16 },
//     ],
//     18: [
//       function (require, module, exports) {
//         module.exports = exactEquals;

//         /**
//          * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
//          *
//          * @param {vec2} a The first vector.
//          * @param {vec2} b The second vector.
//          * @returns {Boolean} True if the vectors are equal, false otherwise.
//          */
//         function exactEquals(a, b) {
//           return a[0] === b[0] && a[1] === b[1];
//         }
//       },
//       {},
//     ],
//     19: [
//       function (require, module, exports) {
//         module.exports = floor;

//         /**
//          * Math.floor the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to floor
//          * @returns {vec2} out
//          */
//         function floor(out, a) {
//           out[0] = Math.floor(a[0]);
//           out[1] = Math.floor(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     20: [
//       function (require, module, exports) {
//         module.exports = forEach;

//         var vec = require("./create")();

//         /**
//          * Perform some operation over an array of vec2s.
//          *
//          * @param {Array} a the array of vectors to iterate over
//          * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
//          * @param {Number} offset Number of elements to skip at the beginning of the array
//          * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
//          * @param {Function} fn Function to call for each vector in the array
//          * @param {Object} [arg] additional argument to pass to fn
//          * @returns {Array} a
//          * @function
//          */
//         function forEach(a, stride, offset, count, fn, arg) {
//           var i, l;
//           if (!stride) {
//             stride = 2;
//           }

//           if (!offset) {
//             offset = 0;
//           }

//           if (count) {
//             l = Math.min(count * stride + offset, a.length);
//           } else {
//             l = a.length;
//           }

//           for (i = offset; i < l; i += stride) {
//             vec[0] = a[i];
//             vec[1] = a[i + 1];
//             fn(vec, vec, arg);
//             a[i] = vec[0];
//             a[i + 1] = vec[1];
//           }

//           return a;
//         }
//       },
//       { "./create": 9 },
//     ],
//     21: [
//       function (require, module, exports) {
//         module.exports = fromValues;

//         /**
//          * Creates a new vec2 initialized with the given values
//          *
//          * @param {Number} x X component
//          * @param {Number} y Y component
//          * @returns {vec2} a new 2D vector
//          */
//         function fromValues(x, y) {
//           var out = new Float32Array(2);
//           out[0] = x;
//           out[1] = y;
//           return out;
//         }
//       },
//       {},
//     ],
//     22: [
//       function (require, module, exports) {
//         module.exports = {
//           EPSILON: require("./epsilon"),
//           create: require("./create"),
//           clone: require("./clone"),
//           fromValues: require("./fromValues"),
//           copy: require("./copy"),
//           set: require("./set"),
//           equals: require("./equals"),
//           exactEquals: require("./exactEquals"),
//           add: require("./add"),
//           subtract: require("./subtract"),
//           sub: require("./sub"),
//           multiply: require("./multiply"),
//           mul: require("./mul"),
//           divide: require("./divide"),
//           div: require("./div"),
//           inverse: require("./inverse"),
//           min: require("./min"),
//           max: require("./max"),
//           rotate: require("./rotate"),
//           floor: require("./floor"),
//           ceil: require("./ceil"),
//           round: require("./round"),
//           scale: require("./scale"),
//           scaleAndAdd: require("./scaleAndAdd"),
//           distance: require("./distance"),
//           dist: require("./dist"),
//           squaredDistance: require("./squaredDistance"),
//           sqrDist: require("./sqrDist"),
//           length: require("./length"),
//           len: require("./len"),
//           squaredLength: require("./squaredLength"),
//           sqrLen: require("./sqrLen"),
//           negate: require("./negate"),
//           normalize: require("./normalize"),
//           dot: require("./dot"),
//           cross: require("./cross"),
//           lerp: require("./lerp"),
//           random: require("./random"),
//           transformMat2: require("./transformMat2"),
//           transformMat2d: require("./transformMat2d"),
//           transformMat3: require("./transformMat3"),
//           transformMat4: require("./transformMat4"),
//           forEach: require("./forEach"),
//           limit: require("./limit"),
//         };
//       },
//       {
//         "./add": 5,
//         "./ceil": 6,
//         "./clone": 7,
//         "./copy": 8,
//         "./create": 9,
//         "./cross": 10,
//         "./dist": 11,
//         "./distance": 12,
//         "./div": 13,
//         "./divide": 14,
//         "./dot": 15,
//         "./epsilon": 16,
//         "./equals": 17,
//         "./exactEquals": 18,
//         "./floor": 19,
//         "./forEach": 20,
//         "./fromValues": 21,
//         "./inverse": 23,
//         "./len": 24,
//         "./length": 25,
//         "./lerp": 26,
//         "./limit": 27,
//         "./max": 28,
//         "./min": 29,
//         "./mul": 30,
//         "./multiply": 31,
//         "./negate": 32,
//         "./normalize": 33,
//         "./random": 34,
//         "./rotate": 35,
//         "./round": 36,
//         "./scale": 37,
//         "./scaleAndAdd": 38,
//         "./set": 39,
//         "./sqrDist": 40,
//         "./sqrLen": 41,
//         "./squaredDistance": 42,
//         "./squaredLength": 43,
//         "./sub": 44,
//         "./subtract": 45,
//         "./transformMat2": 46,
//         "./transformMat2d": 47,
//         "./transformMat3": 48,
//         "./transformMat4": 49,
//       },
//     ],
//     23: [
//       function (require, module, exports) {
//         module.exports = inverse;

//         /**
//          * Returns the inverse of the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to invert
//          * @returns {vec2} out
//          */
//         function inverse(out, a) {
//           out[0] = 1.0 / a[0];
//           out[1] = 1.0 / a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     24: [
//       function (require, module, exports) {
//         module.exports = require("./length");
//       },
//       { "./length": 25 },
//     ],
//     25: [
//       function (require, module, exports) {
//         module.exports = length;

//         /**
//          * Calculates the length of a vec2
//          *
//          * @param {vec2} a vector to calculate length of
//          * @returns {Number} length of a
//          */
//         function length(a) {
//           var x = a[0],
//             y = a[1];
//           return Math.sqrt(x * x + y * y);
//         }
//       },
//       {},
//     ],
//     26: [
//       function (require, module, exports) {
//         module.exports = lerp;

//         /**
//          * Performs a linear interpolation between two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @param {Number} t interpolation amount between the two inputs
//          * @returns {vec2} out
//          */
//         function lerp(out, a, b, t) {
//           var ax = a[0],
//             ay = a[1];
//           out[0] = ax + t * (b[0] - ax);
//           out[1] = ay + t * (b[1] - ay);
//           return out;
//         }
//       },
//       {},
//     ],
//     27: [
//       function (require, module, exports) {
//         module.exports = limit;

//         /**
//          * Limit the magnitude of this vector to the value used for the `max`
//          * parameter.
//          *
//          * @param  {vec2} the vector to limit
//          * @param  {Number} max the maximum magnitude for the vector
//          * @returns {vec2} out
//          */
//         function limit(out, a, max) {
//           var mSq = a[0] * a[0] + a[1] * a[1];

//           if (mSq > max * max) {
//             var n = Math.sqrt(mSq);
//             out[0] = (a[0] / n) * max;
//             out[1] = (a[1] / n) * max;
//           } else {
//             out[0] = a[0];
//             out[1] = a[1];
//           }

//           return out;
//         }
//       },
//       {},
//     ],
//     28: [
//       function (require, module, exports) {
//         module.exports = max;

//         /**
//          * Returns the maximum of two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function max(out, a, b) {
//           out[0] = Math.max(a[0], b[0]);
//           out[1] = Math.max(a[1], b[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     29: [
//       function (require, module, exports) {
//         module.exports = min;

//         /**
//          * Returns the minimum of two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function min(out, a, b) {
//           out[0] = Math.min(a[0], b[0]);
//           out[1] = Math.min(a[1], b[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     30: [
//       function (require, module, exports) {
//         module.exports = require("./multiply");
//       },
//       { "./multiply": 31 },
//     ],
//     31: [
//       function (require, module, exports) {
//         module.exports = multiply;

//         /**
//          * Multiplies two vec2's
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function multiply(out, a, b) {
//           out[0] = a[0] * b[0];
//           out[1] = a[1] * b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     32: [
//       function (require, module, exports) {
//         module.exports = negate;

//         /**
//          * Negates the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to negate
//          * @returns {vec2} out
//          */
//         function negate(out, a) {
//           out[0] = -a[0];
//           out[1] = -a[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     33: [
//       function (require, module, exports) {
//         module.exports = normalize;

//         /**
//          * Normalize a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to normalize
//          * @returns {vec2} out
//          */
//         function normalize(out, a) {
//           var x = a[0],
//             y = a[1];
//           var len = x * x + y * y;
//           if (len > 0) {
//             //TODO: evaluate use of glm_invsqrt here?
//             len = 1 / Math.sqrt(len);
//             out[0] = a[0] * len;
//             out[1] = a[1] * len;
//           }
//           return out;
//         }
//       },
//       {},
//     ],
//     34: [
//       function (require, module, exports) {
//         module.exports = random;

//         /**
//          * Generates a random vector with the given scale
//          *
//          * @param {vec2} out the receiving vector
//          * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
//          * @returns {vec2} out
//          */
//         function random(out, scale) {
//           scale = scale || 1.0;
//           var r = Math.random() * 2.0 * Math.PI;
//           out[0] = Math.cos(r) * scale;
//           out[1] = Math.sin(r) * scale;
//           return out;
//         }
//       },
//       {},
//     ],
//     35: [
//       function (require, module, exports) {
//         module.exports = rotate;

//         /**
//          * Rotates a vec2 by an angle
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to rotate
//          * @param {Number} angle the angle of rotation (in radians)
//          * @returns {vec2} out
//          */
//         function rotate(out, a, angle) {
//           var c = Math.cos(angle),
//             s = Math.sin(angle);
//           var x = a[0],
//             y = a[1];

//           out[0] = x * c - y * s;
//           out[1] = x * s + y * c;

//           return out;
//         }
//       },
//       {},
//     ],
//     36: [
//       function (require, module, exports) {
//         module.exports = round;

//         /**
//          * Math.round the components of a vec2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a vector to round
//          * @returns {vec2} out
//          */
//         function round(out, a) {
//           out[0] = Math.round(a[0]);
//           out[1] = Math.round(a[1]);
//           return out;
//         }
//       },
//       {},
//     ],
//     37: [
//       function (require, module, exports) {
//         module.exports = scale;

//         /**
//          * Scales a vec2 by a scalar number
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to scale
//          * @param {Number} b amount to scale the vector by
//          * @returns {vec2} out
//          */
//         function scale(out, a, b) {
//           out[0] = a[0] * b;
//           out[1] = a[1] * b;
//           return out;
//         }
//       },
//       {},
//     ],
//     38: [
//       function (require, module, exports) {
//         module.exports = scaleAndAdd;

//         /**
//          * Adds two vec2's after scaling the second operand by a scalar value
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @param {Number} scale the amount to scale b by before adding
//          * @returns {vec2} out
//          */
//         function scaleAndAdd(out, a, b, scale) {
//           out[0] = a[0] + b[0] * scale;
//           out[1] = a[1] + b[1] * scale;
//           return out;
//         }
//       },
//       {},
//     ],
//     39: [
//       function (require, module, exports) {
//         module.exports = set;

//         /**
//          * Set the components of a vec2 to the given values
//          *
//          * @param {vec2} out the receiving vector
//          * @param {Number} x X component
//          * @param {Number} y Y component
//          * @returns {vec2} out
//          */
//         function set(out, x, y) {
//           out[0] = x;
//           out[1] = y;
//           return out;
//         }
//       },
//       {},
//     ],
//     40: [
//       function (require, module, exports) {
//         module.exports = require("./squaredDistance");
//       },
//       { "./squaredDistance": 42 },
//     ],
//     41: [
//       function (require, module, exports) {
//         module.exports = require("./squaredLength");
//       },
//       { "./squaredLength": 43 },
//     ],
//     42: [
//       function (require, module, exports) {
//         module.exports = squaredDistance;

//         /**
//          * Calculates the squared euclidian distance between two vec2's
//          *
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {Number} squared distance between a and b
//          */
//         function squaredDistance(a, b) {
//           var x = b[0] - a[0],
//             y = b[1] - a[1];
//           return x * x + y * y;
//         }
//       },
//       {},
//     ],
//     43: [
//       function (require, module, exports) {
//         module.exports = squaredLength;

//         /**
//          * Calculates the squared length of a vec2
//          *
//          * @param {vec2} a vector to calculate squared length of
//          * @returns {Number} squared length of a
//          */
//         function squaredLength(a) {
//           var x = a[0],
//             y = a[1];
//           return x * x + y * y;
//         }
//       },
//       {},
//     ],
//     44: [
//       function (require, module, exports) {
//         module.exports = require("./subtract");
//       },
//       { "./subtract": 45 },
//     ],
//     45: [
//       function (require, module, exports) {
//         module.exports = subtract;

//         /**
//          * Subtracts vector b from vector a
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the first operand
//          * @param {vec2} b the second operand
//          * @returns {vec2} out
//          */
//         function subtract(out, a, b) {
//           out[0] = a[0] - b[0];
//           out[1] = a[1] - b[1];
//           return out;
//         }
//       },
//       {},
//     ],
//     46: [
//       function (require, module, exports) {
//         module.exports = transformMat2;

//         /**
//          * Transforms the vec2 with a mat2
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat2} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat2(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[2] * y;
//           out[1] = m[1] * x + m[3] * y;
//           return out;
//         }
//       },
//       {},
//     ],
//     47: [
//       function (require, module, exports) {
//         module.exports = transformMat2d;

//         /**
//          * Transforms the vec2 with a mat2d
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat2d} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat2d(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[2] * y + m[4];
//           out[1] = m[1] * x + m[3] * y + m[5];
//           return out;
//         }
//       },
//       {},
//     ],
//     48: [
//       function (require, module, exports) {
//         module.exports = transformMat3;

//         /**
//          * Transforms the vec2 with a mat3
//          * 3rd vector component is implicitly '1'
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat3} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat3(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[3] * y + m[6];
//           out[1] = m[1] * x + m[4] * y + m[7];
//           return out;
//         }
//       },
//       {},
//     ],
//     49: [
//       function (require, module, exports) {
//         module.exports = transformMat4;

//         /**
//          * Transforms the vec2 with a mat4
//          * 3rd vector component is implicitly '0'
//          * 4th vector component is implicitly '1'
//          *
//          * @param {vec2} out the receiving vector
//          * @param {vec2} a the vector to transform
//          * @param {mat4} m matrix to transform with
//          * @returns {vec2} out
//          */
//         function transformMat4(out, a, m) {
//           var x = a[0],
//             y = a[1];
//           out[0] = m[0] * x + m[4] * y + m[12];
//           out[1] = m[1] * x + m[5] * y + m[13];
//           return out;
//         }
//       },
//       {},
//     ],
//     50: [
//       function (require, module, exports) {
//         function lerp(v0, v1, t) {
//           return v0 * (1 - t) + v1 * t;
//         }
//         module.exports = lerp;
//       },
//       {},
//     ],
//     51: [
//       function (require, module, exports) {
//         module.exports = newArray;

//         function newArray(n, value) {
//           n = n || 0;
//           var array = new Array(n);
//           for (var i = 0; i < n; i++) {
//             array[i] = value;
//           }
//           return array;
//         }
//       },
//       {},
//     ],
//     52: [
//       function (require, module, exports) {
//         /* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */

//         (function (root, factory) {
//           if (typeof exports === "object") {
//             // CommonJS like
//             module.exports = factory(root, root.document);
//           } else if (typeof define === "function" && define.amd) {
//             // AMD
//             define(function () {
//               return factory(root, root.document);
//             });
//           } else {
//             // Browser global
//             root.Sketch = factory(root, root.document);
//           }
//         })(typeof window !== "undefined" ? window : this, function (
//           window,
//           document
//         ) {
//           "use strict";

//           /*
//       ----------------------------------------------------------------------
    
//         Config
    
//       ----------------------------------------------------------------------
//       */

//           var MATH_PROPS = "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(
//             " "
//           );
//           var HAS_SKETCH = "__hasSketch";
//           var M = Math;

//           var CANVAS = "canvas";
//           var WEBGL = "webgl";
//           var DOM = "dom";

//           var doc = document;
//           var win = window;

//           var instances = [];

//           var defaults = {
//             fullscreen: true,
//             autostart: true,
//             autoclear: true,
//             autopause: true,
//             container: doc.body,
//             interval: 1,
//             globals: true,
//             retina: false,
//             type: CANVAS,
//           };

//           var keyMap = {
//             8: "BACKSPACE",
//             9: "TAB",
//             13: "ENTER",
//             16: "SHIFT",
//             27: "ESCAPE",
//             32: "SPACE",
//             37: "LEFT",
//             38: "UP",
//             39: "RIGHT",
//             40: "DOWN",
//           };

//           /*
//       ----------------------------------------------------------------------
    
//         Utilities
    
//       ----------------------------------------------------------------------
//       */

//           function isArray(object) {
//             return Object.prototype.toString.call(object) == "[object Array]";
//           }

//           function isFunction(object) {
//             return typeof object == "function";
//           }

//           function isNumber(object) {
//             return typeof object == "number";
//           }

//           function isString(object) {
//             return typeof object == "string";
//           }

//           function keyName(code) {
//             return keyMap[code] || String.fromCharCode(code);
//           }

//           function extend(target, source, overwrite) {
//             for (var key in source)
//               if (overwrite || !(key in target)) target[key] = source[key];

//             return target;
//           }

//           function proxy(method, context) {
//             return function () {
//               method.apply(context, arguments);
//             };
//           }

//           function clone(target) {
//             var object = {};

//             for (var key in target) {
//               if (key === "webkitMovementX" || key === "webkitMovementY")
//                 continue;

//               if (isFunction(target[key]))
//                 object[key] = proxy(target[key], target);
//               else object[key] = target[key];
//             }

//             return object;
//           }

//           /*
//       ----------------------------------------------------------------------
    
//         Constructor
    
//       ----------------------------------------------------------------------
//       */

//           function constructor(context) {
//             var request,
//               handler,
//               target,
//               parent,
//               bounds,
//               index,
//               suffix,
//               clock,
//               node,
//               copy,
//               type,
//               key,
//               val,
//               min,
//               max,
//               w,
//               h;

//             var counter = 0;
//             var touches = [];
//             var resized = false;
//             var setup = false;
//             var ratio = win.devicePixelRatio || 1;
//             var isDiv = context.type == DOM;
//             var is2D = context.type == CANVAS;

//             var mouse = {
//               x: 0.0,
//               y: 0.0,
//               ox: 0.0,
//               oy: 0.0,
//               dx: 0.0,
//               dy: 0.0,
//             };

//             var eventMap = [
//               context.eventTarget || context.element,

//               pointer,
//               "mousedown",
//               "touchstart",
//               pointer,
//               "mousemove",
//               "touchmove",
//               pointer,
//               "mouseup",
//               "touchend",
//               pointer,
//               "click",
//               pointer,
//               "mouseout",
//               pointer,
//               "mouseover",

//               doc,

//               keypress,
//               "keydown",
//               "keyup",

//               win,

//               active,
//               "focus",
//               "blur",
//               resize,
//               "resize",
//             ];

//             var keys = {};
//             for (key in keyMap) keys[keyMap[key]] = false;

//             function trigger(method) {
//               if (isFunction(method))
//                 method.apply(context, [].splice.call(arguments, 1));
//             }

//             function bind(on) {
//               for (index = 0; index < eventMap.length; index++) {
//                 node = eventMap[index];

//                 if (isString(node))
//                   target[(on ? "add" : "remove") + "EventListener"].call(
//                     target,
//                     node,
//                     handler,
//                     false
//                   );
//                 else if (isFunction(node)) handler = node;
//                 else target = node;
//               }
//             }

//             function update() {
//               cAF(request);
//               request = rAF(update);

//               if (!setup) {
//                 trigger(context.setup);
//                 setup = isFunction(context.setup);
//               }

//               if (!resized) {
//                 trigger(context.resize);
//                 resized = isFunction(context.resize);
//               }

//               if (context.running && !counter) {
//                 context.dt = (clock = +new Date()) - context.now;
//                 context.millis += context.dt;
//                 context.now = clock;

//                 trigger(context.update);

//                 // Pre draw

//                 if (is2D) {
//                   if (context.retina) {
//                     context.save();

//                     if (context.autoclear) {
//                       context.scale(ratio, ratio);
//                     }
//                   }

//                   if (context.autoclear) context.clear();
//                 }

//                 // Draw

//                 trigger(context.draw);

//                 // Post draw

//                 if (is2D && context.retina) context.restore();
//               }

//               counter = ++counter % context.interval;
//             }

//             function resize() {
//               target = isDiv ? context.style : context.canvas;
//               suffix = isDiv ? "px" : "";

//               w = context.width;
//               h = context.height;

//               if (context.fullscreen) {
//                 h = context.height = win.innerHeight;
//                 w = context.width = win.innerWidth;
//               }

//               if (context.retina && is2D && ratio) {
//                 target.style.height = h + "px";
//                 target.style.width = w + "px";

//                 w *= ratio;
//                 h *= ratio;
//               }

//               if (target.height !== h) target.height = h + suffix;

//               if (target.width !== w) target.width = w + suffix;

//               if (is2D && !context.autoclear && context.retina)
//                 context.scale(ratio, ratio);

//               if (setup) trigger(context.resize);
//             }

//             function align(touch, target) {
//               bounds = target.getBoundingClientRect();

//               touch.x =
//                 touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);
//               touch.y =
//                 touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);

//               return touch;
//             }

//             function augment(touch, target) {
//               align(touch, context.element);

//               target = target || {};

//               target.ox = target.x || touch.x;
//               target.oy = target.y || touch.y;

//               target.x = touch.x;
//               target.y = touch.y;

//               target.dx = target.x - target.ox;
//               target.dy = target.y - target.oy;

//               return target;
//             }

//             function process(event) {
//               event.preventDefault();

//               copy = clone(event);
//               copy.originalEvent = event;

//               if (copy.touches) {
//                 touches.length = copy.touches.length;

//                 for (index = 0; index < copy.touches.length; index++)
//                   touches[index] = augment(copy.touches[index], touches[index]);
//               } else {
//                 touches.length = 0;
//                 touches[0] = augment(copy, mouse);
//               }

//               extend(mouse, touches[0], true);

//               return copy;
//             }

//             function pointer(event) {
//               event = process(event);

//               min = (max = eventMap.indexOf((type = event.type))) - 1;

//               context.dragging = /down|start/.test(type)
//                 ? true
//                 : /up|end/.test(type)
//                 ? false
//                 : context.dragging;

//               while (min)
//                 isString(eventMap[min])
//                   ? trigger(context[eventMap[min--]], event)
//                   : isString(eventMap[max])
//                   ? trigger(context[eventMap[max++]], event)
//                   : (min = 0);
//             }

//             function keypress(event) {
//               key = event.keyCode;
//               val = event.type == "keyup";
//               keys[key] = keys[keyName(key)] = !val;

//               trigger(context[event.type], event);
//             }

//             function active(event) {
//               if (context.autopause) (event.type == "blur" ? stop : start)();

//               trigger(context[event.type], event);
//             }

//             // Public API

//             function start() {
//               context.now = +new Date();
//               context.running = true;
//             }

//             function stop() {
//               context.running = false;
//             }

//             function toggle() {
//               (context.running ? stop : start)();
//             }

//             function clear() {
//               if (is2D)
//                 context.clearRect(
//                   0,
//                   0,
//                   context.width * ratio,
//                   context.height * ratio
//                 );
//             }

//             function destroy() {
//               parent = context.element.parentNode;
//               index = instances.indexOf(context);

//               if (parent) parent.removeChild(context.element);
//               if (~index) instances.splice(index, 1);

//               bind(false);
//               stop();
//             }

//             extend(context, {
//               touches: touches,
//               mouse: mouse,
//               keys: keys,

//               dragging: false,
//               running: false,
//               millis: 0,
//               now: NaN,
//               dt: NaN,

//               destroy: destroy,
//               toggle: toggle,
//               clear: clear,
//               start: start,
//               stop: stop,
//             });

//             instances.push(context);

//             return (
//               context.autostart && start(),
//               bind(true),
//               resize(),
//               update(),
//               context
//             );
//           }

//           /*
//       ----------------------------------------------------------------------
    
//         Global API
    
//       ----------------------------------------------------------------------
//       */

//           var element,
//             context,
//             Sketch = {
//               CANVAS: CANVAS,
//               WEB_GL: WEBGL,
//               WEBGL: WEBGL,
//               DOM: DOM,

//               instances: instances,

//               install: function (context) {
//                 if (!context[HAS_SKETCH]) {
//                   for (var i = 0; i < MATH_PROPS.length; i++)
//                     context[MATH_PROPS[i]] = M[MATH_PROPS[i]];

//                   extend(context, {
//                     TWO_PI: M.PI * 2,
//                     HALF_PI: M.PI / 2,
//                     QUARTER_PI: M.PI / 4,

//                     random: function (min, max) {
//                       if (isArray(min)) return min[~~(M.random() * min.length)];

//                       if (!isNumber(max)) (max = min || 1), (min = 0);

//                       return min + M.random() * (max - min);
//                     },

//                     lerp: function (min, max, amount) {
//                       return min + amount * (max - min);
//                     },

//                     map: function (num, minA, maxA, minB, maxB) {
//                       return (
//                         ((num - minA) / (maxA - minA)) * (maxB - minB) + minB
//                       );
//                     },
//                   });

//                   context[HAS_SKETCH] = true;
//                 }
//               },

//               create: function (options) {
//                 options = extend(options || {}, defaults);

//                 if (options.globals) Sketch.install(self);

//                 element = options.element =
//                   options.element ||
//                   doc.createElement(options.type === DOM ? "div" : "canvas");

//                 context = options.context =
//                   options.context ||
//                   (function () {
//                     switch (options.type) {
//                       case CANVAS:
//                         return element.getContext("2d", options);

//                       case WEBGL:
//                         return (
//                           element.getContext("webgl", options) ||
//                           element.getContext("experimental-webgl", options)
//                         );

//                       case DOM:
//                         return (element.canvas = element);
//                     }
//                   })();

//                 (options.container || doc.body).appendChild(element);

//                 return Sketch.augment(context, options);
//               },

//               augment: function (context, options) {
//                 options = extend(options || {}, defaults);

//                 options.element = context.canvas || context;
//                 options.element.className += " sketch";

//                 extend(context, options, true);

//                 return constructor(context);
//               },
//             };

//           /*
//       ----------------------------------------------------------------------
    
//         Shims
    
//       ----------------------------------------------------------------------
//       */

//           var vendors = ["ms", "moz", "webkit", "o"];
//           var scope = self;
//           var then = 0;

//           var a = "AnimationFrame";
//           var b = "request" + a;
//           var c = "cancel" + a;

//           var rAF = scope[b];
//           var cAF = scope[c];

//           for (var i = 0; i < vendors.length && !rAF; i++) {
//             rAF = scope[vendors[i] + "Request" + a];
//             cAF = scope[vendors[i] + "Cancel" + a];
//           }

//           scope[b] = rAF =
//             rAF ||
//             function (callback) {
//               var now = +new Date();
//               var dt = M.max(0, 16 - (now - then));
//               var id = setTimeout(function () {
//                 callback(now + dt);
//               }, dt);

//               then = now + dt;
//               return id;
//             };

//           scope[c] = cAF =
//             cAF ||
//             function (id) {
//               clearTimeout(id);
//             };

//           /*
//       ----------------------------------------------------------------------
    
//         Output
    
//       ----------------------------------------------------------------------
//       */

//           return Sketch;
//         });
//       },
//       {},
//     ],
//   },
//   {},
//   [1]
// );
;
class DirectionAwareShadow {
  constructor({
    target = null,
    blur = 0,
    spread = 0,
    // color = "currentColor",
    // offset = 5,
    set = [{ offset: 5, color: "white" }],
    offsetElemPx = 5,
    offsetShadow = false,
    offsetElement = false,
  } = {}) {
    this.target = document.querySelectorAll(target);
    this.blur = blur;
    this.spread = spread;
    // this.color = color;
    // this.offset = offset;
    this.offsetElement = offsetElement;
    this.offsetShadow = offsetShadow;
    this.offsetElemPx = offsetElemPx;
    this.set = set;
  }

  move() {
    document.body.addEventListener("mousemove", (event) => {
      this.calc(event);
    });
  }

  calc(e) {
    const { pageY, clientY, pageX } = e;
    const { blur, spread, set, offsetElemPx } = this;
    // const { offset, color } = set;
    this.target.forEach((el) => {
      const targetCenterX = el.offsetWidth / 2 + el.offsetLeft;
      const targetCenterY = el.offsetHeight / 2 + el.offsetTop;
      let shadowX,
        shadowY,
        offSetElemY,
        offSetElemX,
        offsetPersentX,
        offsetPersentY,
        topScreen = pageY - clientY,
        // bott = topScreen + document.body.clientHeight,
        style = [];
      // console.log("object", bott +' '+document.body.clientHeight);
      let targetCenterClientY = targetCenterY - topScreen;
      set.forEach((sett) => {
        const { offset, color } = sett;
        if (pageX > targetCenterX) {
          offsetPersentX =
            ((pageX - targetCenterX) * 100) /
            (document.body.clientWidth - targetCenterX);
          shadowX = ((offsetPersentX * offset) / -100).toFixed(0);
          offSetElemX = ((offsetPersentX * offsetElemPx) / -100).toFixed(0);
        } else {
          offsetPersentX = (pageX * 100) / targetCenterX;
          shadowX = (((100 - offsetPersentX) * offset) / 100).toFixed(0);
          offSetElemX = (((100 - offsetPersentX) * offsetElemPx) / 100).toFixed(
            0
          );
        }

        if (clientY > targetCenterClientY) {
          offsetPersentY =
            ((clientY - targetCenterClientY) * 100) /
            (document.body.clientHeight - targetCenterClientY);
          shadowY = ((offsetPersentY * offset) / -100).toFixed(0);
          offSetElemY = ((offsetPersentY * offsetElemPx) / -100).toFixed(0);
        } else {
          offsetPersentY = (clientY * 100) / targetCenterClientY;
          shadowY = (((100 - offsetPersentY) * offset) / 100).toFixed(0);
          offSetElemY = (((100 - offsetPersentY) * offsetElemPx) / 100).toFixed(
            0
          );
        }
        style.push(`${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`);
      });
      if (this.offsetShadow) {
        el.style.boxShadow = `${style.join(",")}`;
        // el.style.filter = `drop-shadow(${style.join(",")})`;
        // filter: drop-shadow(0 0 0 rgba(128, 128, 128, 0.2));
      }
      if (this.offsetElement) {
        el.style.transform = `translate(${offSetElemX}px, ${offSetElemY}px)`;
      }
    });
  }

  init() {
    if (!this.target) {
      console.error("[direction-aware shadow] • you should add a target");
      return;
    }

    this.move();
  }
}

const red = new DirectionAwareShadow({
  target: [".li", ".elem-offset"],
  blur: 2,
  spread: 0,
  offsetElement: true,
  offsetShadow: false,
  set: [
    { offset: 5, color: "hsla(22, 70%, 70%, 0.7)" },
    { offset: 25, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
  offsetElemPx: 200,
});
const yellow = new DirectionAwareShadow({
  target: [".header_wrap", ".li"],
  set: [
    { offset: 15, color: "hsla(72, 100%, 50%, 0.9)" },
    { offset: 35, color: "hsla(222, 70%, 70%, 0.7)" },
  ],
  blur: 5,
  spread: 0,
  offsetElement: false,
  offsetShadow: true,
});

red.init();
yellow.init();

document.body.addEventListener("click", function (event) {
  console.log("client", event.clientY);
  console.log("page", event.pageY);
  console.log("page", event);
});
;
console.clear();

var twoPI = 2 * Math.PI;
var canvas = document
    .querySelector("#root")
    .appendChild(document.createElement("canvas")),
  ctx = canvas.getContext("2d");
canvas.classList.add("canvas-body-bg");

var width = (canvas.width = document.documentElement.clientWidth),
  height = (canvas.height = window.innerHeight);

window.addEventListener("resize", function () {
  width = canvas.width = document.documentElement.clientWidth;
  height = canvas.height = window.innerHeight;
});
// console.log("object", document.documentElement.clientWidth);
// console.log("object", window.innerWidth);
/* ///////////////////////////////////////// */

function randomWiggle(wiggle) {
  return Math.random() * wiggle * (Math.random() < 0.5 ? -1 : 1);
}

var color = -25;
function randomColor() {
  color = Math.floor((color % 360) + 25 + 15 * Math.random());
  return "hsl(" + color + ", 99%, 55%)";
}

/* //////////////////////////////////////// */

function WaterColor(options) {
  if (!(this instanceof WaterColor)) {
    return new WaterColor(options);
  }

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key];
    }
  }

  if (!this.fill) {
    this.fill = randomColor();
  }
  this.c = Math.floor(Math.random() * 2);
  this.render();
}

WaterColor.prototype = {
  sides: 6,
  x: 20,
  y: 20,
  ctx: false,
  speed: 0.3,
  maxPoints: 3000,
  maxRender: 5,
  scale: false,

  buildPoints() {
    var wiggle = this.size * 0.15,
      rotation = 0,
      x = -this.size,
      y = 0,
      horizontal = Math.random() > 0.5,
      start = [x, y];

    this.points = [start];

    for (; rotation < twoPI; rotation += this.speed) {
      x +=
        this.size * this.speed * Math.sin(rotation) * (horizontal ? 1 : 0.7) +
        randomWiggle(wiggle); // * Math.cos( (rotation/twoPI) * twoPI ) );

      y +=
        this.size * this.speed * Math.cos(rotation) * (horizontal ? 0.7 : 1) +
        randomWiggle(wiggle); // * Math.cos( (rotation/twoPI) * twoPI) );

      this.points.push([x, y]);
    }

    this.points.push(start);

    this.originalPoints = this.points;
    return this.points;
  },

  expandPoints() {
    if (!this.points) {
      return this.buildPoints();
    }

    if (this.points.length > this.maxPoints) {
      return false;
    }

    var wiggle = this.size * 0.05;

    var p = [],
      i = 0,
      len = this.points.length - 1,
      x,
      y,
      x2,
      y2;

    for (; i < len; i++) {
      y = this.points[i][1];
      x = this.points[i][0];
      y2 = this.points[i + 1][1];
      x2 = this.points[i + 1][0];
      p.push(
        [x, y],
        [
          (x2 + x) / 2 + randomWiggle(wiggle),
          (y2 + y) / 2 + randomWiggle(wiggle),
        ],
        [x2, y2]
      );
    }

    this.points = p;

    return true;
  },

  c: 0,

  render: function () {
    this.c++;
    if (this.c < this.maxRender * 3) {
      requestAnimationFrame(this.render.bind(this));
    }
    if (this.c % 3 == 0) {
      this.draw(this.c / 3);
    }
  },

  draw: function (c) {
    if (this.ctx) {
      while (this.expandPoints()) {}

      var ctx = this.ctx;

      var itr = c / this.maxRender;

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.globalCompositeOperation = "hard-light"; // 'xor';
      ctx.globalAlpha = 0.25 - itr * 0.1;

      ctx.translate(this.x, this.y);
      if (this.scale) {
        ctx.scale(1 + itr * 0.2, 1 + itr * 0.2);
      }

      ctx.beginPath();
      ctx.moveTo(this.points[0][0], this.points[0][1]); //this.x + this.size, this.y);

      for (var i = 0, len = this.points.length; i < len; i++) {
        ctx.lineTo(this.points[i][0], this.points[i][1]);
      }

      ctx.closePath();
      ctx.fillStyle = this.fill;
      ctx.fill();

      this.points = this.originalPoints;
    }

    return this;
  },
};

var color = 0;
function makeWatercolor(e) {
  //   ctx.save();
  //
  var x = width * Math.random(),
    y = height * Math.random();

  if (e) {
    // e = e.touches ? e.touches[0] : e;
    x = e.clientX || e.x;
    y = e.clientY || e.y;
  }

  ctx.globalAlpha = 0.02;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, width, height);

  new WaterColor({
    ctx: ctx,
    size: Math.min(width, height) * (0.2 + Math.random() * 0.1),
    x: x,
    y: y,
    scale: true,
  });
  count++;
}

// document.addEventListener("mousemove", makeWatercolor);
document.addEventListener("touchstart", makeWatercolor);
document.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// /* ////////////////////////////////////////////////////////////////////////// */
let count = 0;

setInterval(() => {
  makeWatercolor();
  if (count > 15) {
    ctx.clearRect(0, 0, width, height);
    fullPageDraw();
    count = 0;
  }
}, 2000);

var halfWidth = width / 2,
  halfHeight = height / 2;

function fullPageDraw() {
  for (var i = 0, len = 10; i < len; i++) {
    ctx.clearRect(0, 0, width, height);
    new WaterColor({
      ctx: ctx,
      size: width * (0.7 + Math.random() * 0.1),
      x: halfWidth + Math.cos((i / len) * twoPI) * halfWidth,
      y: halfHeight + Math.sin((i / len) * twoPI) * halfHeight,
    });
    window.requestAnimationFrame(makeWatercolor);
  }
}
;
// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
document.addEventListener("scroll", function (event) {
  let s = scrollY;
  let h = document.querySelector("body").offsetHeight;
  let p = (s / h) * 100;
  console.log("scroll", s + window.innerHeight);
  //   console.log("scroll", screenTop);
  console.log(
    "object",
    document.querySelector(".section_project").offsetHeight
  );
  console.log("bbbbb", document.querySelector("body").offsetHeight);
  let ppp = 0 + p;
  console.log("p", -ppp);
  document.querySelector(
    ".section_project"
  ).style.backgroundPositionY = `${ppp}%`;
});
;
$(function () {
  $(".slider").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    centerPadding: "50px",
    speed: 5000,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    // easing: "cubic-bezier(.37,-0.58,.84,1.04)",
  });
});
let getSel = (el) => document.querySelector(el);

getSel("#nav-burger-btn").addEventListener("click", function () {
  if (this.checked) {
    getSel(".list-contacts").style.left = `0`;
  } else {
    getSel(".list-contacts").style.left = `-110%`;
  }
});

const bigBall = document.querySelector(".cursor__ball--big");
const smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(bigBall, 0.4, {
    x: e.clientX - 15,
    y: e.clientY - 15,
  });
  TweenMax.to(smallBall, 0.1, {
    x: e.clientX - 5,
    y: e.clientY - 7,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to(bigBall, 0.3, {
    scale: 4,
  });
}
function onMouseHoverOut() {
  TweenMax.to(bigBall, 0.3, {
    scale: 1,
  });
}
