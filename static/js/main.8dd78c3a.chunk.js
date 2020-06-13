(this["webpackJsonptable-users-data"]=this["webpackJsonptable-users-data"]||[]).push([[0],{310:function(e,t,a){e.exports=a(421)},316:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),s=(a(315),a(316),a(284)),i=a(99),o=a(259),m=a.n(o),u=a(150),d=a(32),f=a(501),b=function(e){var t=Object(n.useState)(e.data.value),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(l.length>0),f=Object(i.a)(d,2),b=f[0],E=f[1];return r.a.createElement(r.a.Fragment,null,m?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{value:l,onChange:function(e){c(e.target.value),E(l.length>0)}})),r.a.createElement("button",{className:"btn btn-success btn-sm m-1",onClick:function(t){e.handleData({id:e.data.id,key:e.data.key,value:l}),u(!1)},disabled:!b},"Save"),r.a.createElement("button",{className:"btn btn-secondary btn-sm m-1",onClick:function(t){c(e.data.value),u(!1)}},"Cancel")):r.a.createElement("div",null,r.a.createElement("div",null,l,r.a.createElement("button",{className:"btn btn-outline-primary btn-sm m-1",onClick:function(){return u(!0)}},"Edit"))))},E=function(e){var t=e.title;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("h1",{className:"display-5"},"Users")),r.a.createElement("div",{className:"row p-2"},r.a.createElement("button",{className:"btn btn-primary btn-sm ml-auto m-1",onClick:function(){e.addUsers()}},"Add Users"),r.a.createElement("button",{className:"btn btn-secondary btn-sm m-1",onClick:function(){return e.setUsers([])}},"Clear Table")),r.a.createElement("div",{className:"row-md"},r.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,r.a.createElement(b,{data:{id:t.id,key:"name",value:t.name},handleData:e.onSaveUser})),r.a.createElement("td",null,r.a.createElement(b,{data:{id:t.id,key:"username",value:t.username},handleData:e.onSaveUser})),r.a.createElement("td",null,r.a.createElement(b,{data:{id:t.id,key:"email",value:t.email},handleData:e.onSaveUser})),r.a.createElement("td",null,r.a.createElement("div",null,"street: ",t.address.street),r.a.createElement("div",null,"suite: ",t.address.suite),r.a.createElement("div",null,"city: ",t.address.city),r.a.createElement("div",null,"zipcode: ",t.address.zipcode),r.a.createElement("div",null,"geo:",r.a.createElement("div",null,"lat:",t.address.geo.lat),r.a.createElement("div",null,"lng:",t.address.geo.lng))),r.a.createElement("td",null,r.a.createElement(b,{data:{id:t.id,key:"phone",value:t.phone},handleData:e.onSaveUser})),r.a.createElement("td",null,r.a.createElement(b,{data:{id:t.id,key:"website",value:t.website},handleData:e.onSaveUser})),r.a.createElement("td",null,r.a.createElement("div",null,"name: ",t.company.name),r.a.createElement("div",null,"catch Phrase: ",t.company.catchPhrase),r.a.createElement("div",null,"bs: ",t.company.bs)))}))))))},v=a(261),h=a.n(v),j=a(270),O=a.n(j),g=a(280),p=a.n(g),w=a(271),y=a.n(w),N=a(278),k=a.n(N),U=a(179),R=a.n(U),S=a(178),C=a.n(S),P=a(272),x=a.n(P),D=a(273),A=a.n(D),W=a(275),z=a.n(W),F=a(276),T=a.n(F),B=a(277),I=a.n(B),J=a(281),M=a.n(J),L=a(274),V=a.n(L),$=a(279),q=a.n($),G=a(282),H=a.n(G),K={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(O.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(p.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(H.a,Object.assign({},e,{ref:t}))}))},Q=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("h1",{className:"display-5"},"Users")),r.a.createElement("div",{className:"row p-2"},r.a.createElement("button",{className:"btn btn-primary btn-sm ml-auto m-1",onClick:function(){e.addUsers()}},"Add Users"),r.a.createElement("button",{className:"btn btn-secondary btn-sm m-1",onClick:function(){return e.setUsers([])}},"Clear Table")),r.a.createElement("div",{className:"row-md"},r.a.createElement(h.a,{title:"Users",icons:K,columns:[{title:"#",field:"id"},{title:"Name",field:"name"},{title:"User Name",field:"username"},{title:"Email",field:"email"},{title:"Phone",field:"phone"},{title:"Website",field:"website"}],data:e.users})))};var X=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=["#","Name","User Name","Email","Address","Phone","Website","Company"],o=function(){m()({method:"get",url:"https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users"}).then((function(e){l(e.data)})).catch((function(e){console.log(e)}))},f=function(e){var t=Object(s.a)(a);t.forEach((function(t){t.id===e.id&&(t[e.key]=e.value)})),l(t)};return r.a.createElement(u.a,null,r.a.createElement("ul",{className:"list-group list-group-horizontal"},r.a.createElement("li",{className:"list-group-item flex-fill text-center"},r.a.createElement(u.b,{to:"/simple-table"},"Simple table")),r.a.createElement("li",{className:"list-group-item flex-fill text-center"},r.a.createElement(u.b,{to:"/material-table"},"Material UI table"))),r.a.createElement(d.a,{exact:!0,path:"/simple-table"},r.a.createElement(E,{title:c,users:a,setUsers:l,addUsers:o,onSaveUser:f})),r.a.createElement(d.a,{exact:!0,path:"/material-table"},r.a.createElement(Q,{title:c,users:a,setUsers:l,addUsers:o,onSaveUser:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[310,1,2]]]);
//# sourceMappingURL=main.8dd78c3a.chunk.js.map