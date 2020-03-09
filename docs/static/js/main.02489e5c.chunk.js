(this["webpackJsonpcomposers-quiz"]=this["webpackJsonpcomposers-quiz"]||[]).push([[0],{20:function(e,a,t){e.exports=t(34)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(17),i=t.n(r),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(25),t(26);var m=t(8),l=t(6),u=[{name:"Johannes Sebastian Bach",imageUrl:"images/composers/jbach.jpg",imageSource:"Wikimedia Commons",works:["Goldberg Variations","Suites for cello solo","St Matthew Passion","The Well-Tempered Clavier"]},{name:"Giuseppe Verdi",imageUrl:"images/composers/gverdi.jpg",imageSource:"Wikimedia Commons",works:["La traviata","Aida","Otello","La forza del destino"]},{name:"Johannes Brahms",imageUrl:"images/composers/jbrahms.jpg",imageSource:"Wikimedia Commons",works:["Double Concerto in A minor","Clarinet Sonata No. 2 in E\u266d major",'Piano Quartet No. 3 in C minor ("Werther Quartet")',"Hungarian Dances"]},{name:"Wolfgang Amadeus Mozart",imageUrl:"images/composers/wamozart.jpg",imageSource:"Wikimedia Commons",works:["Sinfonia Concertante for Violin, Viola and Orchestra in E\u266d major","Le nozze di Figaro","Requiem Mass in D minor","Die Zauberfl\xf6te"]},{name:"Ludwig Van Beethoven",imageUrl:"images/composers/lvbeethoven.jpg",imageSource:"Wikimedia Commons",works:["Kreutzer Violin Sonata","Fidelio","Pastoral Symphony","Grosse Fugue Op.133"]},{name:"Dimitri Shostakovich",imageUrl:"images/composers/dshostakovich.jpg",imageSource:"Wikimedia Commons",works:["Symphony No. 7 in C major, Leningrad","Viola Sonata Op. 147","String Quartet Node.8 in C minor op. 110: IV Largo","Jazz Suite No.2: VI: Watz No.2"]},{name:"Pyotr Ilyich Tchaikovsky",imageUrl:"images/composers/ptchaikovsky.jpg",imageSource:"Wikimedia Commons",works:["The Nutcracker ballet","Symphony No.6 'Path\xe9tique'","Variations on a Rococo Theme","Romeo and Juliet"]},{name:"Franz Schubert",imageUrl:"images/composers/fschubert.jpg",imageSource:"Wikimedia Commons",works:['Sonata "Arpeggione"',"Winterreise Lieder","Piano Trio in E-Flat Major, D.929: II.Andante con moto","Die Sch\xf6ne M\xfcllerin"]}],d=t(5);t(27);var p=function(){return n.a.createElement("div",{className:"hero jumbotron jumbotron-fluid col-10 offset-1"},n.a.createElement("div",{className:"hero__wrapper"},n.a.createElement("img",{className:"hero__logo",alt:"conductor logo",src:"./images/conductor.png"}),n.a.createElement("h1",{className:"hero__title"},"Composers Quiz"),n.a.createElement("p",null,"Select the work written by the composer shown")),n.a.createElement("button",{className:"hero__addBtn btn col-1.5 offset-10"}," ",n.a.createElement(m.b,{to:"/add"},"Add a composer")))};var f=function(e){var a=e.title,t=e.onClick;return n.a.createElement("div",{className:"work__answer",onClick:function(){t(a)}},n.a.createElement("h5",null,a))};var g=function(e){var a=e.composer,t=e.works,o=e.highlight,r=e.onAnswerSelected;return n.a.createElement("div",{className:"row turn__wrapper col-9 offset-1",style:{backgroundColor:function(e){return{none:"",correct:"#A3CB38",wrong:"#EA2027"}[e]}(o)}},n.a.createElement("div",{className:"col-4 offset-1"},n.a.createElement("img",{src:a.imageUrl,className:"turn__composerImage",alt:"Composer"})),n.a.createElement("div",{className:"col-6"},t.map((function(e){return n.a.createElement(f,{title:e,key:e,onClick:r})}))))};var h=function(e){var a=e.show,t=e.onContinue;return n.a.createElement("div",{className:"continue"},a?n.a.createElement("button",{className:"continue__btn btn btn-primary  col-2 offset-8",onClick:t},"Continue"):null)};var v=function(e){var a=e.highlight,t=e.onContinue;return n.a.createElement("div",{id:"footer",className:"footer col-10 offset-1 row"},n.a.createElement(h,{show:"correct"===a,onContinue:t}),n.a.createElement("small",{className:"text-muted footer__credit"},"All images are from"," ",n.a.createElement("a",{href:"http://commons.wikimedia.org/wiki/Main_Page"},"Wikimedia Commons")," ","and are in the public domain"))};var w=function(e){var a=e.composer,t=e.works,o=e.highlight,r=e.onAnswerSelected,i=e.onContinue;return n.a.createElement("div",{className:"container-fluid quiz-wrapper"},n.a.createElement(p,null),n.a.createElement(g,{composer:a,works:t,highlight:o,onAnswerSelected:r}),n.a.createElement(v,{highlight:o,onContinue:i}))},b=t(13);var k=function(e){var a=e.composers,t=k(a),r=Object(o.useState)(""),i=Object(d.a)(r,2),c=i[0],s=i[1],m=Object(o.useState)(t.composer),l=Object(d.a)(m,2),u=l[0],p=l[1],f=Object(o.useState)(t.works),g=Object(d.a)(f,2),h=g[0],v=g[1];function k(e){var a=e.reduce((function(e,a){return e.concat(a.works)}),[]),t=Object(b.shuffle)(a).slice(0,4),o=Object(b.sample)(t);return{works:t,composer:e.find((function(e){return e.works.some((function(e){return e===o}))}))}}return n.a.createElement(w,{composer:u,works:h,highlight:c,onAnswerSelected:function(e){var a=u.works.some((function(a){return a===e}));s(a?"correct":"wrong")},onContinue:function(){var e=k(a);s(""),p(e.composer),v(e.works)}})},E=(t(33),function(e){var a=e.onAddComposer,t=Object(o.useState)(""),r=Object(d.a)(t,2),i=r[0],c=r[1],s=Object(o.useState)(""),m=Object(d.a)(s,2),l=m[0],u=m[1],p=Object(o.useState)([]),f=Object(d.a)(p,2),g=f[0],h=f[1],v=Object(o.useState)(""),w=Object(d.a)(v,2),b=w[0],k=w[1],E=Object(o.useState)(!0),C=Object(d.a)(E,2),S=C[0],_=C[1],N=Object(o.createRef)();return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({name:i,imageUrl:l,works:g})}},n.a.createElement("div",{className:"addComposer__form"},n.a.createElement("div",null,n.a.createElement("div",{className:"addComposer__form--input"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",name:"name",value:i,onChange:function(e){return c(e.target.value)},required:!0})),n.a.createElement("div",{className:"addComposer__form--input"},n.a.createElement("div",{className:"addComposer__form--worksLabel"},n.a.createElement("label",{htmlFor:"workInput"},"Works"),n.a.createElement("input",{type:"button",value:"+",onClick:function(e){h(g.concat([b])),k("")}})),g.map((function(e){return n.a.createElement("p",{key:e},e)}))," ",n.a.createElement("input",{type:"text",name:"workInput",value:b,onChange:function(e){return k(e.target.value)}}))),n.a.createElement("div",{className:"addComposer__form--input"},n.a.createElement("label",{htmlFor:"btnAddImage"},"Image"),n.a.createElement("div",{className:"addComposer__form--photoWrapper"},n.a.createElement("button",{className:"addComposer__form--photoBtn",type:"button",onClick:function(){N.current.click()}}," ",n.a.createElement("img",{src:"/images/camera.svg",className:"icon",alt:"Subir imagen"})),n.a.createElement("input",{className:"addComposer__form--input-file",id:"bntFileAddImage",type:"file",name:"imageUrl",ref:N,onChange:function(e){var a=e.target.files;if(a.length>0){var t=new FileReader;t.readAsDataURL(a[0]),t.onload=function(e){u(e.target.result),_(!1)}}},required:!0}),n.a.createElement("div",{className:"addComposer__form--image-preview",style:S?{}:{backgroundImage:"url(".concat(l,")")}})))),n.a.createElement("input",{className:"addComposer__form--btn",type:"submit",value:"Add"}))});var C=function(e){e.match;var a=e.onAddComposer;return n.a.createElement("div",{className:"addComposer container-fluid "},n.a.createElement("div",{className:"addComposer__wrapper"},n.a.createElement("h1",{className:"ddComposer__title"},"Add composer"),n.a.createElement(E,{onAddComposer:a})))},S=Object(l.e)((function(e){var a=e.history,t=e.addComposer;return n.a.createElement(C,{onAddComposer:function(e){t(e),a.push("/")}})}));var _=function(){var e=function(e){u.push(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(k,{composers:u})}}),n.a.createElement(l.a,{path:"/add",render:function(a){return n.a.createElement(S,{addComposer:e})}}))};i.a.render(n.a.createElement(m.a,null,n.a.createElement(_,null)," "),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");c?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(a,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.02489e5c.chunk.js.map