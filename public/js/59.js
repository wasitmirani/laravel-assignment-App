"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59],{4796:(t,s,e)=>{e.d(s,{Z:()=>i});var o=e(3645),a=e.n(o)()((function(t){return t[1]}));a.push([t.id,".vs-input{width:100%}.vs-select-content{max-width:100%;width:100%}",""]);const i=a},4059:(t,s,e)=>{e.r(s),e.d(s,{default:()=>l});const o={data:function(){return{blogs:{},authuser:{},blog:{},active_modal:!1,comment:{},errors:[]}},methods:{updateBlog:function(t){this.blog=t,this.active_modal=!0},onSubmit:function(){var t=this,s={id:this.blog.id,title:this.blog.title,description:this.blog.description};axios.put("/content/blog/"+this.blog.id,s).then((function(s){t.getBlogs(),t.resetForm(),t.$root.alertNotificationMessage(s.status,"blog has been updated successfully")})).catch((function(s){if(422==s.response.status)return t.errors=s.response.data.errors,t.$root.alertNotificationMessage(s.response.status,s.response.data.errors);t.$root.alertNotificationMessage(s.response.status,s.response.data)}))},resetForm:function(){this.blog={},this.active_modal=!1},getBlogs:function(){var t=this;axios.get("/content/all/blogs").then((function(s){t.blogs=s.data.blogs})).catch((function(s){if(422==s.response.status)return t.errors=s.response.data.errors,t.$root.alertNotificationMessage(s.response.status,s.response.data.errors);t.$root.alertNotificationMessage(s.response.status,s.response.data)}))}},mounted:function(){this.getBlogs(),this.authuser=user,console.log("Component mounted.")}};var a=e(3379),i=e.n(a),n=e(4796),r={insert:"head",singleton:!1};i()(n.Z,r);n.Z.locals;const l=(0,e(1900).Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row learning-block"},[e("div",{staticClass:"col-xl-9 xl-60"},[e("div",{staticClass:"row"},t._l(t.blogs.data,(function(s){return e("div",{key:s.id,staticClass:"col-xl-12 col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"blog-box blog-list row"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"col-xl-7 col-12"},[e("div",{staticClass:"blog-details"},[e("div",{staticClass:"blog-date"},[e("span",[t._v(t._s(t._f("timeformat")(s.created_at)))])]),t._v(" "),e("a",{attrs:{href:"#"}},[e("h6",[t._v(t._s(s.title)+" ")])]),t._v(" "),e("div",{staticClass:"blog-bottom-content"},[e("ul",{staticClass:"blog-social"},[e("li",[t._v("by: "+t._s(s.author.name)+" \n                               "),s.author_id==t.authuser.id?e("a",{attrs:{role:"button"},on:{click:function(e){return t.updateBlog(s)}}},[e("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),s.author_id!=t.authuser.id?e("a",{directives:[{name:"can",rawName:"v-can",value:"blog-edit",expression:"'blog-edit'"}],attrs:{role:"button"},on:{click:function(e){return t.updateBlog(s)}}},[e("i",{staticClass:"fas fa-edit"})]):t._e()])]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"mt-0"},[t._v(t._s(s.description))])])])])])])])})),0)])])]),t._v(" "),e("vs-dialog",{attrs:{blur:"",width:"50%"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"not-margin"},[t._v("\n              Update "),e("b",[t._v(t._s(t.blog.title))]),t._v(" blog\n           ")])]},proxy:!0}]),model:{value:t.active_modal,callback:function(s){t.active_modal=s},expression:"active_modal"}},[t._v(" "),e("div",{staticClass:"con-form"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("Blog Title:")]),t._v(" "),e("vs-input",{attrs:{color:this.$root.primary_color,placeholder:"Blog Title",required:""},model:{value:t.blog.title,callback:function(s){t.$set(t.blog,"title",s)},expression:"blog.title"}}),t._v(" "),this.errors.title?e("span",{staticClass:"mt-1 text-danger"},[t._v(t._s(this.errors.title[0]))]):t._e()],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("Description:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.blog.description,expression:"blog.description"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.blog.description},on:{input:function(s){s.target.composing||t.$set(t.blog,"description",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex"},[e("vs-button",{attrs:{color:"rgb(59,222,200)",gradient:"",type:"submit"},on:{click:t.onSubmit}},[t._v("\n                    Update\n                 ")])],1)])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-xl-5 col-12"},[s("img",{staticClass:"img-fluid sm-100-w",attrs:{src:"/assets/images/faq/1.jpg",alt:""}})])}],!1,null,null,null).exports},1900:(t,s,e)=>{function o(t,s,e,o,a,i,n,r){var l,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):a&&(l=r?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,s){return l.call(s),d(t,s)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}e.d(s,{Z:()=>o})}}]);