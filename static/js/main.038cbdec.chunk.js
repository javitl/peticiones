(this.webpackJsonppeticiones=this.webpackJsonppeticiones||[]).push([[0],{11:function(e,t){e.exports={firebase:{apiKey:"AIzaSyApiXC2K33TgoSPzsGpeXyJzxqiUoS7ZlQ",authDomain:"peticiones-database.firebaseapp.com",projectId:"peticiones-database",storageBucket:"peticiones-database.appspot.com",messagingSenderId:"533564397302",appId:"1:533564397302:web:33e87d5ef15b2235c3bed7",measurementId:"G-EZJE2TZ34P"}}},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),o=a.n(c),s=a(15),r=a.n(s),i=(a(30),a(5)),l=(a(31),a(51)),d=(a(32),function(){return Object(n.jsxs)("div",{className:"post-container",children:[Object(n.jsx)(l.a,{client:"ca-pub-2146397552881402",slot:"3107939481",style:{display:"block"},layout:"in-article",format:"fluid"}),Object(n.jsx)("h3",{children:'"Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que se\xe1is sanados. La oraci\xf3n eficaz del justo puede mucho."'}),Object(n.jsx)("h4",{children:"-Santiago 5:16"}),Object(n.jsx)("p",{children:'La idea principal se basa en la conocida "Caja de Peticiones", despu\xe9s de una semana de oraci\xf3n, donde se depositan las oraciones en una caja, al final se queman y se oran por ellas. As\xed que por mi cabeza entr\xf3 la idea de hacer una caja virtual, en la que CUALQUIERA pudiera depositar una petici\xf3n, pero al mismo tiempo, poder orar por las peticiones de los dem\xe1s; Formando as\xed un GRAN Bando de oraci\xf3n.'}),Object(n.jsxs)("p",{children:["Mi nombre es ",Object(n.jsx)("b",{children:"Javier Miz Ar\xe9valo"})," y este proyecto naci\xf3 como sucesor de otro igual desarrollado en tecnolog\xedas de las que no tenia el control que deseaba y termin\xf3 fracasando y en el olv\xeddo."]}),Object(n.jsx)("p",{children:'Un a\xf1o despu\xe9s de la "Primera versi\xf3n" de este proyecto obtuve nuevos conocimientos que me han permitido llevar esto a otra fase, trabajando de forma m\xe1s personalizada y teniendo m\xe1s control de todo el ambiente de desarrollo.'}),Object(n.jsx)("p",{children:"A pesar de todo esto, mantener este proyecto no es 100% gratuito por eso se muestra un peque\xf1o cuadro de publicidad, y si gustas aportar la m\xe1s m\xednima cantidad, ser\xe1 de gran ayuda."}),Object(n.jsx)("a",{href:"https://www.paypal.com/donate?hosted_button_id=DZ4DE7NKV83EG",target:"_blank",rel:"noreferrer",className:"boton-donar",children:"Apoyar al desarrollador"}),Object(n.jsx)("h3",{children:"Cont\xe1ctame"}),Object(n.jsxs)("div",{className:"social-media",children:[Object(n.jsx)("a",{href:"https://www.instagram.com/javiermiz_/",target:"_blank",rel:"noreferrer",children:"Instagram"}),Object(n.jsx)("a",{href:"https://www.facebook.com/javiermiza",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(n.jsx)("a",{href:"https://twitter.com/javiermiz_",target:"_blank",rel:"noreferrer",children:"Twitter"})]})]})}),j=a(13),u=a.n(j),b=a(17),m=(a(34),a(21)),p=(a(48),a(49),a(11)),f=a.n(p),g=m.a.initializeApp({apiKey:f.a.firebase.apiKey,authDomain:f.a.firebase.authDomain,projectId:f.a.firebase.projectId,storageBucket:f.a.firebase.storageBucket,messagingSenderId:f.a.firebase.measurementId,appId:f.a.firebase.appId,measurementId:f.a.firebase.measurementId}),h=g.firestore(),O=g.storage(),x=a.p+"static/media/add-image.874e6fef.svg",v=a(23),y=(a(40),function(){return Object(n.jsx)("div",{className:"lds-heart",children:Object(n.jsx)("div",{})})}),N=a(12),_=(a(41),["https://i.pinimg.com/564x/ac/e0/1b/ace01bf624688cb3309544f09d8a3f1c.jpg","https://i.pinimg.com/564x/79/ac/09/79ac09357e9ae6b33621b698ef23bb8c.jpg","https://i.pinimg.com/564x/87/52/c1/8752c1e653eb99acc4801e6b0ecf3423.jpg","https://i.pinimg.com/564x/cb/28/ff/cb28ffbbdca24dbfa115d2334e7b1aa2.jpg","https://i.pinimg.com/564x/d2/db/28/d2db28c872c1f8548c05078a1f9d5575.jpg"]),k=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),d=l[0],j=l[1],m=Object(c.useState)(null),p=Object(i.a)(m,2),f=p[0],g=p[1],k=Object(c.useState)(_[Math.floor(Math.random()*_.length)]),C=Object(i.a)(k,2),w=C[0],S=C[1],M=Object(c.useState)(0),P=Object(i.a)(M,2),A=P[0],F=P[1],I=Object(c.useState)(0),E=Object(i.a)(I,2),L=E[0],B=E[1],z=Object(c.useState)(!1),q=Object(i.a)(z,2),D=q[0],T=q[1],U=function(){var e=f.name+"-"+Date.now();O.ref("images/".concat(e)).put(f).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){O.ref("images").child(e).getDownloadURL().then((function(e){K(e)}))}))},J=function(t){"Escape"===t.key&&e.setMostrarForm(!1)},K=function(){var t=Object(b.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.collection("peticiones").add({name:o,pray:d,image:a,date:new Date}).then((function(t){F(2),N.b.info("Petici\xf3n enviada correctamente \ud83d\ude4f\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){e.setMostrarForm(!1)}),3e3)})).catch((function(e){N.b.error("No se pudo enviar la peticion \ud83d\ude1e",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),F(0)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){B(d.length)}),[d.length]),Object(c.useEffect)((function(){document.addEventListener("keydown",J)}),[]),Object(n.jsxs)(n.Fragment,{children:[0===A&&Object(n.jsxs)("div",{className:"formulario-container",children:[Object(n.jsx)("button",{className:"formulario-container__close",onClick:function(){return e.setMostrarForm(!1)},children:"X"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(1),""!==o&&""!==d&&L<=255&&D?f?U():K(w):(N.b.error("Por favor, llenar todos los campos \ud83d\udc4b\ud83c\udffb",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),console.log("No andes hackeando pls"))},children:[Object(n.jsx)("input",{id:"imagen",className:"input-imagen",type:"file",onChange:function(e){e.target.files[0]&&("image/png"===e.target.files[0].type||"image/jpeg"===e.target.files[0].type?e.target.files[0].size<5242880?(S(URL.createObjectURL(e.target.files[0])),g(e.target.files[0])):(g(null),S(_[Math.floor(Math.random()*_.length)]),N.b.error("La Im\xe1gen es demasiado pesada \ud83d\udcf7",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):(g(null),S(_[Math.floor(Math.random()*_.length)]),N.b.error("Lo sentimos, esto no es im\xe1gen \ud83d\ude13",{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})))}}),w&&Object(n.jsxs)("label",{htmlFor:"imagen",className:"input-imagen__button",children:[Object(n.jsx)("div",{className:"input-imagen__button__overlay",children:Object(n.jsx)("img",{src:x})}),Object(n.jsx)("img",{className:"imagen-preview",src:"https://firebasestorage.googleapis.com/v0/b/peticiones-database.appspot.com/o/images%2Fwebsiteplanet-dummy-540X400.png?alt=media&token=093301bf-95fd-4a0e-a570-cc032b34a2cc"})]}),Object(n.jsx)("input",{className:"input-nombre",maxLength:"27",type:"text",name:"nombre",placeholder:"Nombre",onChange:function(e){return s(e.target.value)}}),Object(n.jsxs)("div",{className:"form-body",children:[Object(n.jsx)("textarea",{rows:8,type:"text",name:"nombre",placeholder:"Petici\xf3n",onChange:function(e){j(e.target.value)}}),L<=255?Object(n.jsxs)("span",{children:[L,"/255"]}):Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{style:{color:"red"},children:L}),"/255"]}),Object(n.jsx)("div",{className:"captcha-container",children:Object(n.jsx)(v.a,{sitekey:"6Lcrx5wUAAAAAFivqPGaNfKEJiTi-YSdFfOJPes6",onChange:function(e){T(null!==e)}})}),Object(n.jsx)("button",{className:"form-button",disabled:""===o||""===d||L>255||!D,children:"Enviar"})]})]})]}),1===A&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{}),Object(n.jsx)("div",{className:"formulario-container",children:Object(n.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})})]}),2===A&&Object(n.jsx)("div",{className:"formulario-container",children:Object(n.jsx)("h2",{children:"Agregando tu petici\xf3n a la cajita \ud83d\udce6"})}),Object(n.jsx)(N.a,{})]})},C=(a(42),a(43),function(e){return Object(n.jsx)("a",{href:"#",className:"header-link "+e.className,onClick:e.onClick,children:e.texto})}),w=function(e){var t=Object(c.useState)(!0),a=Object(i.a)(t,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){setTimeout((function(){s(!1)}),2e3)}),[]),Object(n.jsxs)("header",{children:[Object(n.jsx)(C,{onClick:function(){return e.setPage(0)},texto:"Peticiones",className:0===e.page?"active":""}),Object(n.jsx)(C,{onClick:function(){return e.setPage(1)},texto:"Sobre este proyecto",className:1===e.page?"active":""}),Object(n.jsx)("button",{className:"boton-agregar",onClick:function(){return e.setMostrarForm(!0)},onMouseOver:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:"+"}),Object(n.jsx)("div",{className:"boton-agregar__tooltip "+(o?"show":""),children:"Agregar petici\xf3n"})]})},S=a(24),M=(a(44),a(19)),P=a.n(M),A=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),l=r[0],d=r[1],j=Object(c.useState)(!0),m=Object(i.a)(j,2),p=m[0],f=m[1],g=Object(c.useState)(""),O=Object(i.a)(g,2),x=O[0],v=O[1],N=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t=h.collection("peticiones"),e.next=4,t.orderBy("date","desc").get();case 4:e.sent.forEach((function(e){o((function(t){return[].concat(Object(S.a)(t),[e.data()])}))})),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N(),setTimeout((function(){f(!1)}),2e3)}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"grupo-tarjetas",children:l?Object(n.jsx)(y,{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(M.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,767:3,1023:5,1439:7},children:Object(n.jsx)(P.a,{children:a.map((function(e,t){return Object(n.jsxs)("div",{className:"tarjeta-peticion",children:[Object(n.jsx)("img",{className:"tarjeta-peticion__imagen",src:e.image}),Object(n.jsx)("div",{className:"tarjeta-peticion__nombre",children:e.name}),Object(n.jsx)("div",{className:"tarjeta-peticion__body",children:Object(n.jsx)("div",{className:"tarjeta-peticion__peticion",children:e.pray})})]},t)}))})})})}),Object(n.jsx)("button",{className:"boton-random",onClick:function(){v(a[Math.floor(Math.random()*a.length)])},onMouseOver:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:"?"}),Object(n.jsx)("div",{className:"boton-random__tooltip "+(p?"show":""),children:"Petici\xf3n aleatoria"}),""!==x&&Object(n.jsxs)("div",{className:"modal-peticion-aleatoria",children:[Object(n.jsx)("button",{className:"modal__cerrar",onClick:function(){return v("")},children:"x"}),Object(n.jsxs)("div",{className:"tarjeta-peticion",children:[Object(n.jsx)("img",{className:"tarjeta-peticion__imagen",src:x.image}),Object(n.jsx)("div",{className:"tarjeta-peticion__nombre",children:x.name}),Object(n.jsx)("div",{className:"tarjeta-peticion__body",children:Object(n.jsx)("div",{className:"tarjeta-peticion__peticion",children:x.pray})})]})]})]})},F=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),l=r[0],j=r[1];return Object(n.jsxs)("div",{className:l?"App modal-active":"App",children:[Object(n.jsx)(w,{setPage:o,page:a,setMostrarForm:j}),0===a&&Object(n.jsx)(A,{}),1===a&&Object(n.jsx)(d,{}),l&&Object(n.jsx)(k,{setMostrarForm:j})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),I()}},[[47,1,2]]]);
//# sourceMappingURL=main.038cbdec.chunk.js.map