(this.webpackJsonppeticiones=this.webpackJsonppeticiones||[]).push([[0],{12:function(e,t){e.exports={firebase:{apiKey:"AIzaSyApiXC2K33TgoSPzsGpeXyJzxqiUoS7ZlQ",authDomain:"peticiones-database.firebaseapp.com",projectId:"peticiones-database",storageBucket:"peticiones-database.appspot.com",messagingSenderId:"533564397302",appId:"1:533564397302:web:33e87d5ef15b2235c3bed7",measurementId:"G-EZJE2TZ34P"}}},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),i=n.n(c),s=n(15),r=n.n(s),o=(n(31),n(8)),l=(n(32),n(3)),g=n.n(l),u=n(17),b=(n(34),n(21)),j=(n(49),n(50),n(12)),d=n.n(j),p=b.a.initializeApp({apiKey:d.a.firebase.apiKey,authDomain:d.a.firebase.authDomain,projectId:d.a.firebase.projectId,storageBucket:d.a.firebase.storageBucket,messagingSenderId:d.a.firebase.measurementId,appId:d.a.firebase.appId,measurementId:d.a.firebase.measurementId}),m=p.firestore(),f=p.storage(),A=n.p+"static/media/add-image.874e6fef.svg",h=n(24),O=(n(40),function(){return Object(a.jsx)("div",{className:"lds-heart",children:Object(a.jsx)("div",{})})}),x=n(13),I=(n(41),["https://i.pinimg.com/564x/ac/e0/1b/ace01bf624688cb3309544f09d8a3f1c.jpg","https://i.pinimg.com/564x/79/ac/09/79ac09357e9ae6b33621b698ef23bb8c.jpg","https://i.pinimg.com/564x/87/52/c1/8752c1e653eb99acc4801e6b0ecf3423.jpg","https://i.pinimg.com/564x/cb/28/ff/cb28ffbbdca24dbfa115d2334e7b1aa2.jpg","https://i.pinimg.com/564x/d2/db/28/d2db28c872c1f8548c05078a1f9d5575.jpg"]),w=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),b=l[0],j=l[1],d=Object(c.useState)(null),p=Object(o.a)(d,2),w=p[0],B=p[1],C=Object(c.useState)(I[Math.floor(Math.random()*I.length)]),S=Object(o.a)(C,2),v=S[0],N=S[1],E=Object(c.useState)(0),k=Object(o.a)(E,2),J=k[0],D=k[1],M=Object(c.useState)(0),L=Object(o.a)(M,2),Y=L[0],Z=L[1],y=Object(c.useState)(!1),U=Object(o.a)(y,2),G=U[0],P=U[1],Q=function(){var e=w.name+"-"+Date.now();f.ref("images/".concat(e)).put(w).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){f.ref("images").child(e).getDownloadURL().then((function(e){q(e)}))}))},q=function(){var t=Object(u.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.collection("peticiones").add({name:i,pray:b,image:n}).then((function(t){D(2),x.b.info("Petici\xf3n enviada correctamente \ud83d\ude4f\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){e.setPage(0)}),3e3)})).catch((function(e){x.b.error("No se pudo enviar la peticion \ud83d\ude1e",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),D(0)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){Z(b.length)}),[b.length]),Object(a.jsxs)(a.Fragment,{children:[0===J&&Object(a.jsx)("div",{className:"formulario-container",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),D(1),""!==i&&""!==b&&Y<=255&&G?w?Q():q(v):(x.b.error("Por favor, llenar todos los campos \ud83d\udc4b\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),D(0),console.log("No andes hackeando pls"))},children:[Object(a.jsx)("input",{id:"imagen",className:"input-imagen",type:"file",accept:"image/*",onChange:function(e){e.target.files[0]&&("image/png"===e.target.files[0].type||"image/jpeg"===e.target.files[0].type?e.target.files[0].size<5242880?(N(URL.createObjectURL(e.target.files[0])),B(e.target.files[0])):(B(null),N(I[Math.floor(Math.random()*I.length)]),x.b.error("La Im\xe1gen es demasiado pesada \ud83d\udcf7",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(B(null),N(I[Math.floor(Math.random()*I.length)]),x.b.error("Lo sentimos, esto no es im\xe1gen \ud83d\ude13",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})))}}),v&&Object(a.jsxs)("label",{htmlFor:"imagen",className:"input-imagen__button",children:[Object(a.jsx)("div",{className:"input-imagen__button__overlay",children:Object(a.jsx)("img",{src:A})}),Object(a.jsx)("img",{className:"imagen-preview",src:v})]}),Object(a.jsx)("input",{className:"input-nombre",maxLength:"27",type:"text",name:"nombre",placeholder:"Nombre",onChange:function(e){return s(e.target.value)}}),Object(a.jsxs)("div",{className:"form-body",children:[Object(a.jsx)("textarea",{rows:8,type:"text",name:"nombre",placeholder:"Petici\xf3n",onChange:function(e){j(e.target.value)}}),Y<=255?Object(a.jsxs)("span",{children:[Y,"/255"]}):Object(a.jsxs)("span",{children:[Object(a.jsx)("span",{style:{color:"red"},children:Y}),"/255"]}),Object(a.jsx)("div",{className:"captcha-container",children:Object(a.jsx)(h.a,{sitekey:"6Lcrx5wUAAAAAFivqPGaNfKEJiTi-YSdFfOJPes6",onChange:function(e){P(null!==e)}})}),Object(a.jsx)("button",{className:"form-button",disabled:""===i||""===b||Y>255||!G,children:"Enviar"})]})]})}),1===J&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"formulario-container",children:Object(a.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})})]}),2===J&&Object(a.jsx)("div",{className:"formulario-container",children:Object(a.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})}),Object(a.jsx)(x.a,{})]})},B=(n(42),n(43),function(e){return Object(a.jsx)("a",{href:"#",className:"header-link "+e.className,onClick:e.onClick,children:e.texto})}),C=function(e){return Object(a.jsxs)("header",{children:[Object(a.jsx)(B,{onClick:function(){return e.setPage(0)},texto:"Orar por otros",className:0===e.page?"active":""}),Object(a.jsx)(B,{onClick:function(){return e.setPage(1)},texto:"Hacer peticion",className:1===e.page?"active":""})]})},S=n(25),v=(n(44),n(19)),N=n.n(v),E=n(23),k=(n(47),function(e){var t=Object(c.useState)(),n=Object(o.a)(t,2),i=n[0],s=n[1];return Object(a.jsx)("div",{className:"share-icon",onClick:function(){E.a(document.getElementById(e.id)).then((function(e){console.log("Si hice la imagen we"),console.log(e);var t=new File([e],"picture.jpg",{type:"image/jpeg"});s([t])})),navigator.share&&navigator.share({file:i,url:document.location.href+"#"+e.id}).then((function(){console.log("Successfully shared")})).catch((function(e){console.error("Something went wrong sharing the blog",e)}))},children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"test"})})}),J=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(o.a)(s,2),l=r[0],b=r[1],j=function(){var e=Object(u.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),t=m.collection("peticiones"),e.next=4,t.get();case 4:e.sent.forEach((function(e){i((function(t){return[].concat(Object(S.a)(t),[e.data()])}))})),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(a.jsx)("div",{className:"grupo-tarjetas",children:l?Object(a.jsx)(O,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,767:3,1023:5,1439:7},children:Object(a.jsx)(N.a,{children:n.map((function(e,t){return Object(a.jsxs)("div",{id:"peticion-"+t,className:"tarjeta-peticion",children:[Object(a.jsx)("img",{className:"tarjeta-peticion__imagen",src:e.image}),Object(a.jsx)("div",{className:"tarjeta-peticion__nombre",children:e.name}),Object(a.jsx)("div",{className:"tarjeta-peticion__body",children:Object(a.jsx)("div",{className:"tarjeta-peticion__peticion",children:e.pray})}),Object(a.jsx)(k,{id:"peticion-"+t,nombre:e.name,peticion:e.pray,imagen:e.image})]},t)}))})}),Object(a.jsx)("div",{})]})})},D=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(C,{setPage:i,page:n}),0===n&&Object(a.jsx)(J,{}),1===n&&Object(a.jsx)(w,{setPage:i})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),M()}},[[48,1,2]]]);
//# sourceMappingURL=main.6ab23e6b.chunk.js.map