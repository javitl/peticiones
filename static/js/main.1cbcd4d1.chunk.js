(this.webpackJsonppeticiones=this.webpackJsonppeticiones||[]).push([[0],{11:function(e,t){e.exports={firebase:{apiKey:"AIzaSyApiXC2K33TgoSPzsGpeXyJzxqiUoS7ZlQ",authDomain:"peticiones-database.firebaseapp.com",projectId:"peticiones-database",storageBucket:"peticiones-database.appspot.com",messagingSenderId:"533564397302",appId:"1:533564397302:web:33e87d5ef15b2235c3bed7",measurementId:"G-EZJE2TZ34P"}}},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),i=a.n(c),s=a(15),o=a.n(s),r=(a(30),a(8)),l=(a(31),a(13)),b=a.n(l),j=a(17),u=(a(33),a(21)),d=(a(47),a(48),a(11)),p=a.n(d),m=u.a.initializeApp({apiKey:p.a.firebase.apiKey,authDomain:p.a.firebase.authDomain,projectId:p.a.firebase.projectId,storageBucket:p.a.firebase.storageBucket,messagingSenderId:p.a.firebase.measurementId,appId:p.a.firebase.appId,measurementId:p.a.firebase.measurementId}),g=m.firestore(),f=m.storage(),h=a.p+"static/media/add-image.874e6fef.svg",O=a(23),x=(a(39),function(){return Object(n.jsx)("div",{className:"lds-heart",children:Object(n.jsx)("div",{})})}),v=a(12),N=(a(40),["https://i.pinimg.com/564x/ac/e0/1b/ace01bf624688cb3309544f09d8a3f1c.jpg","https://i.pinimg.com/564x/79/ac/09/79ac09357e9ae6b33621b698ef23bb8c.jpg","https://i.pinimg.com/564x/87/52/c1/8752c1e653eb99acc4801e6b0ecf3423.jpg","https://i.pinimg.com/564x/cb/28/ff/cb28ffbbdca24dbfa115d2334e7b1aa2.jpg","https://i.pinimg.com/564x/d2/db/28/d2db28c872c1f8548c05078a1f9d5575.jpg"]),C=function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),u=l[0],d=l[1],p=Object(c.useState)(null),m=Object(r.a)(p,2),C=m[0],y=m[1],k=Object(c.useState)(N[Math.floor(Math.random()*N.length)]),P=Object(r.a)(k,2),S=P[0],I=P[1],_=Object(c.useState)(0),w=Object(r.a)(_,2),A=w[0],B=w[1],F=Object(c.useState)(0),L=Object(r.a)(F,2),E=L[0],M=L[1],D=Object(c.useState)(!1),H=Object(r.a)(D,2),J=H[0],T=H[1],z=function(){var e=C.name+"-"+Date.now();f.ref("images/".concat(e)).put(C).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){f.ref("images").child(e).getDownloadURL().then((function(e){K(e)}))}))},K=function(){var t=Object(j.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.collection("peticiones").add({name:i,pray:u,image:a}).then((function(t){B(2),v.b.info("Petici\xf3n enviada correctamente \ud83d\ude4f\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){e.setPage(0)}),3e3)})).catch((function(e){v.b.error("No se pudo enviar la peticion \ud83d\ude1e",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),B(0)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){M(u.length)}),[u.length]),Object(n.jsxs)(n.Fragment,{children:[0===A&&Object(n.jsx)("div",{className:"formulario-container",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),B(1),""!==i&&""!==u&&E<=255&&J?C?z():K(S):(v.b.error("Por favor, llenar todos los campos \ud83d\udc4b\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("No andes hackeando pls"))},children:[Object(n.jsx)("input",{id:"imagen",className:"input-imagen",type:"file",onChange:function(e){e.target.files[0]&&("image/png"===e.target.files[0].type||"image/jpeg"===e.target.files[0].type?e.target.files[0].size<5242880?(I(URL.createObjectURL(e.target.files[0])),y(e.target.files[0])):(y(null),I(N[Math.floor(Math.random()*N.length)]),v.b.error("La Im\xe1gen es demasiado pesada \ud83d\udcf7",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(y(null),I(N[Math.floor(Math.random()*N.length)]),v.b.error("Lo sentimos, esto no es im\xe1gen \ud83d\ude13",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})))}}),S&&Object(n.jsxs)("label",{htmlFor:"imagen",className:"input-imagen__button",children:[Object(n.jsx)("div",{className:"input-imagen__button__overlay",children:Object(n.jsx)("img",{src:h})}),Object(n.jsx)("img",{className:"imagen-preview",src:"https://firebasestorage.googleapis.com/v0/b/peticiones-database.appspot.com/o/images%2Fwebsiteplanet-dummy-540X400.png?alt=media&token=093301bf-95fd-4a0e-a570-cc032b34a2cc"})]}),Object(n.jsx)("input",{className:"input-nombre",maxLength:"27",type:"text",name:"nombre",placeholder:"Nombre",onChange:function(e){return s(e.target.value)}}),Object(n.jsxs)("div",{className:"form-body",children:[Object(n.jsx)("textarea",{rows:8,type:"text",name:"nombre",placeholder:"Petici\xf3n",onChange:function(e){d(e.target.value)}}),E<=255?Object(n.jsxs)("span",{children:[E,"/255"]}):Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{style:{color:"red"},children:E}),"/255"]}),Object(n.jsx)("div",{className:"captcha-container",children:Object(n.jsx)(O.a,{sitekey:"6Lcrx5wUAAAAAFivqPGaNfKEJiTi-YSdFfOJPes6",onChange:function(e){T(null!==e)}})}),Object(n.jsx)("button",{className:"form-button",disabled:""===i||""===u||E>255||!J,children:"Enviar"})]})]})}),1===A&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"formulario-container",children:Object(n.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})})]}),2===A&&Object(n.jsx)("div",{className:"formulario-container",children:Object(n.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})}),Object(n.jsx)(v.a,{})]})},y=(a(41),a(42),function(e){return Object(n.jsx)("a",{href:"#",className:"header-link "+e.className,onClick:e.onClick,children:e.texto})}),k=function(e){return Object(n.jsxs)("header",{children:[Object(n.jsx)(y,{onClick:function(){return e.setPage(0)},texto:"Orar por otros",className:0===e.page?"active":""}),Object(n.jsx)(y,{onClick:function(){return e.setPage(1)},texto:"Hacer peticion",className:1===e.page?"active":""})]})},P=a(24),S=(a(43),a(19)),I=a.n(S),_=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],s=Object(c.useState)(!1),o=Object(r.a)(s,2),l=o[0],u=o[1],d=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t=g.collection("peticiones"),e.next=4,t.get();case 4:e.sent.forEach((function(e){i((function(t){return[].concat(Object(P.a)(t),[e.data()])}))})),u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(n.jsx)("div",{className:"grupo-tarjetas",children:l?Object(n.jsx)(x,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,767:3,1023:5,1439:7},children:Object(n.jsx)(I.a,{children:a.map((function(e,t){return Object(n.jsxs)("div",{className:"tarjeta-peticion",children:[Object(n.jsx)("img",{className:"tarjeta-peticion__imagen",src:e.image}),Object(n.jsx)("div",{className:"tarjeta-peticion__nombre",children:e.name}),Object(n.jsx)("div",{className:"tarjeta-peticion__body",children:Object(n.jsx)("div",{className:"tarjeta-peticion__peticion",children:e.pray})})]},t)}))})}),Object(n.jsx)("div",{})]})})},w=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(k,{setPage:i,page:a}),0===a&&Object(n.jsx)(_,{}),1===a&&Object(n.jsx)(C,{setPage:i})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),A()}},[[46,1,2]]]);
//# sourceMappingURL=main.1cbcd4d1.chunk.js.map