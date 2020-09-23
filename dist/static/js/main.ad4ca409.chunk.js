(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{208:function(e,t,a){e.exports=a(399)},213:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a.n(c),l=(a(213),a(7)),o=a(3),s=a(24),u=a(5),m=a(42),d=a(9),p=Object(d.b)((function(e){return{authErr:e.auth,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_FAILED",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.authErr,c=e.auth,i=Object(n.useState)({email:"",password:""}),l=Object(m.a)(i,2),d=l[0],p=l[1],f=function(e){var t=e.target,a=t.id,n=t.value;p((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},a,n))}))};return c.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(d),console.log(a)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Log in")),r.a.createElement("div",{className:"center red-text"},a.authError?r.a.createElement("p",null,a.authError):null)))})),f=Object(d.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signup:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return l.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})})).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.auth,a=e.authError,c=e.signup,i=Object(n.useState)({email:"",password:"",lastName:"",firstName:""}),l=Object(m.a)(i,2),d=l[0],p=l[1],f=function(e){var t=e.target,a=t.id,n=t.value;p((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},a,n))}))};return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(d)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up")),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null)))})),E=a(41),h=a.n(E),b=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content," "),r.a.createElement("div",{className:"grey-text note-date"},h()(e.time.toDate()).fromNow()))}))))))},g=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorfirstName," ",t.authorlastName),r.a.createElement("p",{className:"grey-text"},h()(t.createdAt.toDate()).calendar()))},v=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(g,{project:e}))})))},N=a(23),j=a(17);var O=Object(j.d)(Object(d.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(N.firestoreConnect)([{collection:"projects",limit:3,orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))((function(e){var t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(v,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(b,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})})),w=Object(d.b)(null,(function(e){return{logOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"LOGOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.logOut,a=e.profile;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:t},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",className:"btn btn-floating pink lighten-1"},a.initials)))})),y=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/signup"},"SignUp")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/signin"},"LogIn")))},S=Object(d.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(w,{profile:a}):r.a.createElement(y,null);return r.a.createElement("nav",{className:"nav-wrapper grey draken-7"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo left"},"Plan"),n))})),C=Object(d.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(u.a)(Object(u.a)({},e),{},{authorfirstName:c.firstName,authorlastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",payload:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))((function(e){var t=e.createProject,a=e.auth,c=e.history,i=Object(n.useState)({title:"",content:""}),l=Object(m.a)(i,2),d=l[0],p=l[1],f=function(e){var t=e.target,a=t.id,n=t.value;p((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},a,n))}))};return a.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(d),c.push("/")},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("input",{type:"text",id:"content",className:"materialize-textarea",onChange:f})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})})),R=Object(j.d)(Object(d.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(N.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action gret lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorfirstName," ",t.authorlastName),r.a.createElement("div",null,h()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project....")):r.a.createElement(o.a,{to:"/signin"})}));var F=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:O}),r.a.createElement(o.b,{path:"/project/:id",component:R}),r.a.createElement(o.b,{path:"/signin",component:p}),r.a.createElement(o.b,{path:"/signup",component:f}),r.a.createElement(o.b,{path:"/create",component:C}))))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=a(207),x=a(55),A={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}],authError:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.authError,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(u.a)(Object(u.a)({},e),{},{authError:[]});case"LOGIN_FAILED":return console.log("login failed"),Object(u.a)(Object(u.a)({},e),{},{authError:"login unsuccessfull"});case"LOGOUT_SUCCESS":console.log("logged out");case"SIGNUP_SUCCESS":return console.log("signed up successfully"),Object(u.a)(Object(u.a)({},e),{},{authError:[]});case"SIGNUP_ERROR":return console.log("signedup error"),Object(u.a)(Object(u.a)({},e),{},{authError:t.err.message});default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.projects,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project crated",t.payload),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}},T=Object(j.c)({auth:U,project:L,firestore:x.firestoreReducer,firebase:N.firebaseReducer}),D=a(85),G=a.n(D);a(396),a(397);G.a.initializeApp({apiKey:"AIzaSyBFkB9Csdv6YRi-u4VhHqVP4X_VhDHFfb8",authDomain:"marioplan-bf30e.firebaseapp.com",databaseURL:"https://marioplan-bf30e.firebaseio.com",projectId:"marioplan-bf30e",storageBucket:"marioplan-bf30e.appspot.com",messagingSenderId:"714916729906",appId:"1:714916729906:web:b30d14e71437495ff0982b",measurementId:"G-JX1DYLZ1M1"}),G.a.firestore();var W=G.a,z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,B=Object(j.e)(T,z(Object(j.a)(_.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:x.getFirestore})),Object(x.reduxFirestore)(W),Object(N.reactReduxFirebase)(W,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0})));B.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(d.a,{store:B},r.a.createElement(F,null)),document.getElementById("root")),k()}))}},[[208,1,2]]]);
//# sourceMappingURL=main.ad4ca409.chunk.js.map