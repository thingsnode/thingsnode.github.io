(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{188:function(t,r,e){var content=e(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("7388ab72",content,!0,{sourceMap:!1})},204:function(t,r,e){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,menu:[{title:"Features",to:"features"},{title:"Pricing",to:"pricing"},{title:"Support",to:"support"}],carousel:[{alt:"",title:"",description:"",src:"/img/1.png"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"ThingsNode}"}}},o=e(70),l=e(97),c=e.n(l),v=e(294),d=e(299),f=e(285),h=e(287),_=e(300),m=e(295),w=e(205),x=e(296),V=e(297),y=e(43),C=e(298),F=e(202),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",[e("v-card",{},[e("v-app-bar",{attrs:{fixed:"",color:"black","max-height":"55","elevate-on-scroll":""}},[e("v-toolbar-title",[e("nuxt-link",{attrs:{to:"/"}},[e("v-img",{attrs:{src:"thingsnode-logo.png","max-width":"190"}})],1)],1),t._v(" "),e("v-spacer"),t._v(" "),t._l(t.menu,(function(r){return e("v-btn",{key:r,attrs:{text:"",to:r.to,color:"white"}},[t._v("\n      \n        "+t._s(r.title)+"\n      ")])})),t._v(" "),e("v-btn",{staticClass:"ma-1",attrs:{color:"primary"}},[t._v(" LOGIN")]),t._v(" "),e("v-btn",{staticClass:"ma-1",attrs:{color:"primary"}},[t._v(" SIGN UP FOR FREE ")])],2)],1),t._v(" "),e("v-main",[e("v-container",{staticClass:"mt-12",attrs:{fluid:""}},[e("nuxt")],1),t._v(" "),e("v-sheet",{staticClass:"pa-12",attrs:{color:"white",height:"220",tile:""}},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("div",{staticClass:"display-1 pa-4"},[t._v("\n          Start visualizing your data today\n        ")])]),t._v(" "),e("v-row",{staticClass:"pa-4",attrs:{justify:"center",align:"center"}},[e("v-btn",{staticClass:"error"},[t._v("Sign up for free now")])],1)],1)],1),t._v(" "),e("v-footer",{staticClass:"mt-12",attrs:{absolute:!t.fixed,app:"",align:"center"}},[e("span",[t._v("© ThingsNode.io "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);r.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VBtn:f.a,VCard:h.a,VContainer:_.a,VFooter:m.a,VImg:w.a,VMain:x.a,VRow:V.a,VSheet:y.a,VSpacer:C.a,VToolbarTitle:F.a})},209:function(t,r,e){e(210),t.exports=e(211)},235:function(t,r,e){"use strict";e(188)},236:function(t,r,e){(r=e(22)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},58:function(t,r,e){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(235),e(70)),l=e(97),c=e.n(l),v=e(294),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);r.a=component.exports;c()(component,{VApp:v.a})}},[[209,14,2,15]]]);