(this["webpackJsonpmini-project"]=this["webpackJsonpmini-project"]||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},107:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"auth",(function(){return v})),n.d(a,"google",(function(){return N}));var c=n(2),i=n(0),r=n.n(i),s=n(12),o=n.n(s),l=(n(95),n(7)),u=n(168),j=n(170),d=n(171),b=n(187),m=n(173),p=n(169),h=n(27),O=n(77),f=n.n(O),x=n(24),g=n(42);n(96),n(98);g.apps.length||g.initializeApp({apiKey:"AIzaSyC5POoFt8b96cmTFhB_Uo910YZNJcU7hMI",authDomain:"mini-project-a8159.firebaseapp.com",databaseURL:"https://mini-project-a8159.firebaseio.com",projectId:"mini-project-a8159",storageBucket:"mini-project-a8159.appspot.com",messagingSenderId:"647495386470",appId:"1:647495386470:web:b2203758013b77ce97f4a7"});var v=g.auth(),N=new g.auth.GoogleAuthProvider,w=n(165),y=(n(100),function(){return Object(c.jsx)("div",{className:"loading-center",children:Object(c.jsx)(w.a,{})})}),k=r.a.createContext(!1),S=function(e){var t=e.children,n=Object(i.useState)(!1),r=Object(l.a)(n,2),s=r[0],o=r[1],u=Object(i.useState)(!1),j=Object(l.a)(u,2),d=j[0],b=j[1];Object(i.useEffect)((function(){m()}));var m=function(){a.auth.onAuthStateChanged((function(e){o(!!e),b(!0)}))};return d?Object(c.jsx)(k.Provider,{value:s,children:t}):Object(c.jsx)(y,{})},C=(n(104),function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],s=t[1],o=r.a.useState(null),O=Object(l.a)(o,2),g=O[0],v=O[1],N=Boolean(g),w=Object(i.useContext)(k);Object(i.useEffect)((function(){y()}));var y=function(){if(w){var e=a.auth.currentUser;e&&s(e)}else s(void 0)},S=function(){v(null)};return Object(c.jsx)("div",{className:"base",children:Object(c.jsx)(u.a,{position:"static",children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(h.a,{variant:"h6",className:"title",children:Object(c.jsx)(x.b,{to:"/",className:"link",children:"Home"})}),!n&&Object(c.jsx)(x.b,{to:"/signin",className:"link",children:Object(c.jsx)(j.a,{variant:"contained",color:"secondary",children:"signIn"})}),n&&Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(e){v(e.currentTarget)},children:Object(c.jsx)(f.a,{})}),Object(c.jsxs)(b.a,{id:"menu-appbar",anchorEl:g,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:N,onClose:S,children:[Object(c.jsx)(x.b,{to:"/profile",className:"link-menu",children:Object(c.jsx)(m.a,{onClick:S,children:"Profile"})}),Object(c.jsx)(x.b,{to:"/",onClick:function(){a.auth.signOut().then((function(){}))},className:"link-menu",children:Object(c.jsx)(m.a,{onClick:S,children:"Sign out"})})]})]})]})})})}),I=n(14),A=n(172),P=n(188),U=n(189),E=n(180),F=n(178),z=n(179),q=n(177),W=n(176),B=n(130),T=n(174),D=n(175),L=(n(107),function(e){var t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=e.user,o=function(){i(!1)};return Object(c.jsxs)("div",{children:[Object(c.jsxs)(B.a,{alignItems:"flex-start",onClick:function(){i(!0)},children:[Object(c.jsx)(T.a,{children:s.image?Object(c.jsx)(P.a,{alt:s.name,src:s.image}):Object(c.jsx)(P.a,{children:s.name[0]})}),Object(c.jsx)(D.a,{primary:s.name,secondary:Object(c.jsx)(r.a.Fragment,{children:s.description.length>200?s.description.substr(0,200)+"...":s.description})})]}),Object(c.jsx)(W.a,{variant:"inset",component:"li"}),Object(c.jsxs)(U.a,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(c.jsxs)(q.a,{id:"alert-dialog-title",children:[s.name," - ",s.email]}),Object(c.jsx)(F.a,{children:Object(c.jsxs)(z.a,{id:"alert-dialog-description",children:[s.image?Object(c.jsx)("img",{src:s.image,alt:s.name,className:"image-dialog"}):Object(c.jsx)("b",{}),s.description]})}),Object(c.jsx)(E.a,{children:Object(c.jsx)(j.a,{onClick:o,color:"primary",autoFocus:!0,children:"Close"})})]})]})}),R=n(78),V=n.n(R).a.create({baseURL:"/api",timeout:3e4,headers:{"Content-Type":"application/json"}}),J=function(){return V.get("/users")},G=function(e){return V.post("/users",e)},M=(n(124),function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(i.useEffect)((function(){r()}));var r=function(){null==n&&J().then((function(e){a(e.data)}))},s=null===n||void 0===n?void 0:n.map((function(e){return Object(c.jsx)(L,{user:e},e.uid)}));return Object(c.jsx)("div",{children:Object(c.jsx)(A.a,{className:"list",children:s})})}),H=n(9),K=n.n(H),Y=n(18),Z=n(181),$=n(34),_=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},Q=(n(126),function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object($.a)({mode:"onChange"}),o=s.register,u=s.handleSubmit,d=s.formState,b=s.errors,m=s.reset,p=Object(I.f)(),h=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t.image[0]);case 2:t.image=e.sent,m(),a.auth.createUserWithEmailAndPassword(t.email,t.password).then((function(e){t.uid=e.user.uid,G(t).then((function(e){p.push("/")})).catch((function(e){r(e.message)}))})).catch((function(e){r(e.message)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)(Z.a,{maxWidth:"sm",className:"container-signup",children:[n&&Object(c.jsx)("p",{className:"error",children:n}),Object(c.jsxs)("form",{onSubmit:u(h),children:[Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",id:"name",placeholder:"Alejandro Alvarez",name:"name",ref:o({required:!0}),className:b.name&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",placeholder:"alejandro.alvarez@ceiba.com.co",name:"email",ref:o({required:!0}),className:b.email&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",placeholder:"password",name:"password",ref:o({required:!0}),className:b.password&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("textarea",{typeof:"text",id:"description",placeholder:"I am physical engineer",name:"description",ref:o({required:!0}),className:b.description&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Picture"}),Object(c.jsx)("input",{accept:"image/*",id:"image",name:"image",ref:o({required:!0}),type:"file"}),Object(c.jsx)("label",{htmlFor:"image",children:Object(c.jsx)(j.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})}),Object(c.jsx)(j.a,{type:"submit",variant:"contained",disabled:!d.isValid,className:"button",children:"SignUp"})]})]})]})})}),X=(n(127),function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(i.useContext)(k),o=Object(I.f)();Object(i.useEffect)((function(){u()}));var u=function(){s&&o.push("/profile")},d=Object($.a)({mode:"onChange"}),b=d.register,m=d.handleSubmit,p=d.formState,h=d.errors,O=d.reset;return Object(c.jsx)("div",{children:Object(c.jsxs)(Z.a,{maxWidth:"sm",className:"container",children:[n&&Object(c.jsx)("p",{className:"error",children:n}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",placeholder:"alejandro.alvarez@ceiba.com.co",name:"email",ref:b({required:!0}),className:h.email&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",placeholder:"password",name:"password",ref:b({required:!0}),className:h.password&&"invalid"})]})]}),Object(c.jsxs)("div",{className:"container-button",children:[Object(c.jsx)(j.a,{onClick:m((function(e){O(),a.auth.signInWithEmailAndPassword(e.email,e.password).then((function(e){})).catch((function(e){r(e.message)}))})),variant:"contained",disabled:!p.isValid,className:"button",children:"SignIn"}),Object(c.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){a.auth.signInWithPopup(a.google).then((function(e){})).catch((function(e){r(e.message)}))},className:"button",children:"Signin With Google"}),Object(c.jsx)("p",{children:"Or"}),Object(c.jsx)(j.a,{variant:"contained",color:"secondary",onClick:function(){o.push("/signup")},children:"SignUp now!"})]})]})})}),ee=n(182),te=n(185),ne=n(183),ae=n(184),ce=n(79),ie=n.n(ce),re={uid:"",name:"",email:"",description:"",image:"",createdAt:""},se=function(){var e=Object(Y.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=a.auth.currentUser)||void 0===t?void 0:t.getIdToken();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe={get:function(){var e=Object(Y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=V,e.next=3,se();case 3:return e.t1=e.sent,e.t2={Authorization:e.t1},e.t3={headers:e.t2},e.abrupt("return",e.t0.get.call(e.t0,"/profile",e.t3));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=V,e.t1=t,e.next=4,se();case 4:return e.t2=e.sent,e.t3={Authorization:e.t2},e.t4={headers:e.t3},e.abrupt("return",e.t0.put.call(e.t0,"/profile",e.t1,e.t4));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=(n(128),function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(null),s=Object(l.a)(r,2),o=s[0],u=s[1],b=Object(i.useState)(re),m=Object(l.a)(b,2),p=m[0],O=m[1],f=Object(i.useState)(!1),x=Object(l.a)(f,2),g=x[0],v=x[1],N=Object(i.useContext)(k),w=Object(I.f)();Object(i.useEffect)((function(){y(),S()}));var y=function(){N||w.push("/")},S=function(){g||oe.get().then((function(e){O(e.data)})).catch((function(e){u(e.message)})),v(!0)},C=Object($.a)({mode:"onSubmit"}),A=C.register,U=C.handleSubmit,E=C.errors,F=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.image[0]){e.next=7;break}return e.next=3,_(t.image[0]);case 3:t.image=e.sent,p.image=t.image,e.next=8;break;case 7:t.image=null;case 8:oe.update(t).then((function(e){z(),p.name=t.name,p.description=t.description,O(p)})).catch((function(e){u(e.message)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){a(!n)};return n?Object(c.jsxs)(Z.a,{maxWidth:"sm",className:"container-profile",children:[o&&Object(c.jsx)("p",{className:"error",children:o}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("input",{type:"text",id:"name",placeholder:"Alejandro Alvarez",defaultValue:p.name,name:"name",ref:A({required:!0}),className:E.name&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("textarea",{typeof:"text",id:"description",placeholder:"I am physical engineer",name:"description",defaultValue:p.description,ref:A({required:!0}),className:E.description&&"invalid"})]}),Object(c.jsxs)("div",{className:"container-input",children:[Object(c.jsx)("label",{children:"Picture"}),Object(c.jsx)("input",{accept:"image/*",id:"image",name:"image",ref:A(),type:"file"}),Object(c.jsx)("label",{htmlFor:"image",children:Object(c.jsx)(j.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})})]})]}),Object(c.jsxs)("div",{className:"container-button-profile",children:[Object(c.jsx)(j.a,{onClick:z,variant:"contained",color:"secondary",className:"button",children:"Cancel"}),Object(c.jsx)(j.a,{onClick:U(F),variant:"contained",className:"button",children:"Save"})]})]}):Object(c.jsx)("div",{className:"container-card-wrapper",children:Object(c.jsxs)(ee.a,{className:"container-card",children:[Object(c.jsx)(ne.a,{avatar:Object(c.jsx)(P.a,{"aria-label":p.name,children:p.name[0]}),action:Object(c.jsx)(d.a,{"aria-label":"settings",onClick:z,children:Object(c.jsx)(ie.a,{})}),title:p.name,subheader:p.email}),p.image&&Object(c.jsx)(ae.a,{className:"image",image:p.image,title:p.name}),Object(c.jsx)(te.a,{children:Object(c.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:p.description})})]})})});var ue=function(){return Object(c.jsx)(S,{children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(C,{}),Object(c.jsxs)(I.c,{children:[Object(c.jsx)(I.a,{path:"/",exact:!0,component:M}),Object(c.jsx)(I.a,{path:"/signin",component:X}),Object(c.jsx)(I.a,{path:"/signup",component:Q}),Object(c.jsx)(I.a,{path:"/profile",component:le})]})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(ue,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),je()},95:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.242e757b.chunk.js.map