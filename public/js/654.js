(self.webpackChunk=self.webpackChunk||[]).push([[654,373],{7482:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".vs-avatar-content.btn-plane.vs-change-color-badge{margin-left:auto;position:relative;top:-30px}",""]);const i=o},287:function(t){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Avatar=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(10));e.Avatar=r.default,e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n.n(r),i=n(41),s=n(11)(o.a,i.a,!1,null,null,null);e.default=s.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:a,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(13)),o=function(t){for(var e=t.split(/[ -]/),n="",r=0;r<e.length;r++)n+=e[r].charAt(0);return n.length>3&&-1!==n.search(/[A-Z]/)&&(n=n.replace(/[a-z]+/g,"")),n.substr(0,3).toUpperCase()};e.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80},parser:{type:Function,default:o,validator:function(t){return"string"==typeof t("John",o)}}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},e={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},n={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},o=this.isImage?e:n;return(0,r.default)(t,o),t},userInitial:function(){return this.isImage?"":this.initials||this.parser(this.username,o)}},methods:{initial:o,onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var n=!1;"#"===t[0]&&(t=t.slice(1),n=!0);var r=parseInt(t,16),o=(r>>16)+e;o>255?o=255:o<0&&(o=0);var i=(r>>8&255)+e;i>255?i=255:i<0&&(i=0);var s=(255&r)+e;return s>255?s=255:s<0&&(s=0),(n?"#":"")+(s|i<<8|o<<16).toString(16)}}}},function(t,e,n){t.exports={default:n(14),__esModule:!0}},function(t,e,n){n(15),t.exports=n(4).Object.assign},function(t,e,n){var r=n(16);r(r.S+r.F,"Object",{assign:n(26)})},function(t,e,n){var r=n(0),o=n(4),i=n(17),s=n(19),a=function(t,e,n){var u,c,l,f=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,h=t&a.B,_=t&a.W,m=p?o:o[e]||(o[e]={}),g=m.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(c=!f&&b&&void 0!==b[u])&&u in m||(l=c?b[u]:n[u],m[u]=p&&"function"!=typeof b[u]?n[u]:h&&c?i(l,r):_&&b[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[u]=l,t&a.R&&g&&!g[u]&&s(g,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(20),o=n(25);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(21),o=n(22),i=n(24),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(2)&&!n(3)((function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(27),o=n(38),i=n(39),s=n(40),a=n(6),u=Object.assign;t.exports=!u||n(3)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r}))?function(t,e){for(var n=s(t),u=arguments.length,c=1,l=o.f,f=i.f;u>c;)for(var p,d=a(arguments[c++]),v=l?r(d).concat(l(d)):r(d),h=v.length,_=0;h>_;)f.call(d,p=v[_++])&&(n[p]=d[p]);return n}:u},function(t,e,n){var r=n(28),o=n(37);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(29),o=n(5),i=n(31)(!1),s=n(34)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,c=[];for(n in a)n!=s&&r(a,n)&&c.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(32),i=n(33);t.exports=function(t){return function(e,n,s){var a,u=r(e),c=o(u.length),l=i(s,c);if(t&&n!=n){for(;c>l;)if((a=u[l++])!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(8),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(35)("keys"),o=n(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?n("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},staticRenderFns:[]};e.a=r}])},5373:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(287);const o={components:{Avatar:n.n(r)()},props:["name","thumbnail"],name:"Avatar Component"};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.thumbnail?n("vs-avatar",{attrs:{badge:"","badge-color":"primary"}},[n("img",{attrs:{src:t.thumbnail,alt:""}})]):n("avatar",{attrs:{username:t.name}})}),[],!1,null,null,null).exports},6654:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});const r={props:["users","getUsers"],components:{Avatar:n(5373).default},data:function(){return{selected_items:[]}},methods:{alldeleteItems:function(){var t=this;Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){if(e.isConfirmed){var n=new FormData,r=JSON.stringify(t.selected_items);n.append("user_ids",r),axios.post("/management/remove-all/users",n).then((function(e){Swal.fire("Deleted!","Your file has been deleted.","success"),t.getUsers()})).catch((function(e){t.$root.alertNotificationMessage(e.response.status,e.response.data)}))}}))},selectAllItems:function(){this.selected_items.length>0?this.selected_items=[]:this.selected_items=this.users.data.map((function(t){return t.id}))},deleteItem:function(t){return this.$emit("deleteItem",t)},editItem:function(t){return this.$emit("editItem",t)}}};var o=n(3379),i=n.n(o),s=n(7482),a={insert:"head",singleton:!1};i()(s.Z,a);s.Z.locals;const u=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.selected_items.length>0?n("div",[n("strong",{staticClass:"ml-4"},[t._v("Selected Items ("+t._s(t.selected_items.length)+") ")]),t._v(" "),n("vs-button",{attrs:{icon:"",danger:"",active:!0},on:{click:t.alldeleteItems}},[t._v("\n                             Remove Items\n        ")])],1):t._e(),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordernone"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[n("vs-checkbox",{on:{click:t.selectAllItems}})],1),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("User Name")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Phone")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Create By")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Created")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Action")])])]),t._v(" "),n("tbody",[t.users.data.length<1?n("tr",[t._m(0)]):t._l(t.users.data,(function(e){return n("tr",{key:e.id},[n("td",[n("vs-checkbox",{attrs:{val:e.id},model:{value:t.selected_items,callback:function(e){t.selected_items=e},expression:"selected_items"}})],1),t._v(" "),n("td",{staticClass:"bd-t-none u-s-tb"},[n("Avatar",{attrs:{name:e.name,thumbnail:e.thumbnail}}),t._v(" "),n("router-link",{attrs:{to:{name:"update-user",params:{id:e.id}}}},[n("div",{staticClass:"align-middle image-sm-size"},[n("div",{staticClass:"d-inline-block"},[n("h6",[t._v(t._s(e.name)+" "),n("span",{staticClass:"text-muted"})])])])])],1),t._v(" "),n("td",[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("a",{attrs:{href:"mailto:"+e.email,target:"_blank"}},[t._v(" "+t._s(e.email)+"\n                                    "),n("vs-avatar",{staticClass:"btn-plane"},[n("i",{staticClass:" far fa-paper-plane"})])],1)])])]),t._v(" "),n("td",[t._v(t._s(e.user_name?e.user_name:"N/A"))]),t._v(" "),n("td",[t._v(t._s(e.phone?e.phone:"N/A"))]),t._v(" "),n("td",[t._v(t._s(e.user?e.user.name:"N/A"))]),t._v(" "),n("td",[t._v(t._s(t._f("timeformat")(e.created_at)))]),t._v(" "),n("td",[n("router-link",{attrs:{to:{name:"update-user",params:{id:e.id}}}},[n("i",{staticClass:"fa  fa-edit text-primary"})]),t._v(" |  "),n("a",{attrs:{role:"button"},on:{click:function(n){return t.deleteItem(e)}}},[n("i",{staticClass:"fa  fa-trash text-danger"})])],1)])}))],2)])]),t._v(" "),n("ul",{staticClass:"pagination pagination-primary mt-4"},[n("pagination",{attrs:{data:t.users,limit:5},on:{"pagination-change-page":t.getUsers}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"py-2",attrs:{colspan:"6"}},[n("h1",{staticClass:"text-center text-warning"},[t._v("Users are not found")])])}],!1,null,null,null).exports},1900:(t,e,n)=>{"use strict";function r(t,e,n,r,o,i,s,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,{Z:()=>r})}}]);