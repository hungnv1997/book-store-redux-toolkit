(this["webpackJsonpcrud-books"]=this["webpackJsonpcrud-books"]||[]).push([[0],{25:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(13),s=a.n(i),r=(a(25),a(12)),o=a(5),l=a(4),d=a(3),j=a(10),b=Object(j.b)({name:"counter",initialState:[{id:1,name:"Book 1",description:"Note that the development build is not optimized",category:"Math"},{id:2,name:"Book 2",description:"Note that the development build is not optimized",category:"Chemistry"},{id:3,name:"Book 3",description:"Note that the development build is not optimized",category:"history"}],reducers:{getUsers:function(e,t){return e},addBook:function(e,t){var a=t.payload;e.push(a)},removeBook:function(e,t){return e.filter((function(e){if(e.id!==t.payload.id)return e}))},editBook:function(e,t){var a=t.payload;return e.map((function(e){return e.id===a.id?{id:a.id,name:a.name,description:a.description,category:a.category}:e}))}}}),u=b.actions,m=(u.getUsers,u.addBook),O=u.removeBook,h=u.editBook,x=b.reducer,v=Object(j.b)({name:"categories",initialState:[{id:1,name:"math"},{id:2,name:"history"}],reducers:{addCategory:function(e,t){console.log(t.payload),e.push(t.payload)},deleteCategory:function(e,t){return console.log("delete category payload",t.payload),e.filter((function(e){return e.id!==t.payload.id}))},editCategory:function(e,t){return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,name:t.payload.name}:e}))}}}),p=v.actions,f=p.addCategory,g=p.deleteCategory,N=p.editCategory,y=v.reducer,w=a(0);var _=function(e){var t=function(t){console.log("Set onedit"),e.setOnEdit(t)},a=Object(d.b)(),c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],r=i[1];return Object(w.jsx)("div",{className:"card mt-3 p-2",children:Object(w.jsxs)("div",{className:"form-floating ",children:[Object(w.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"Name",onChange:function(e){!function(e){console.log(e.target.value),r(e.target.value)}(e)}}),Object(w.jsx)("label",{for:"floatingInput",children:"Category"}),Object(w.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(w.jsx)("button",{button:!0,className:"btn btn-danger btn-sm",onClick:function(){t(!1)},children:"Back"}),Object(w.jsx)("button",{className:"btn btn-success btn-sm",onClick:function(){""!==s?(alert("Successful change!"),t(!1),a(N({id:e.id,name:s}))):alert("please insert the value")},children:"Apply"})]})]})})};var C=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(d.b)();return Object(w.jsxs)("div",{className:"col-md-3 m-2",children:[Object(w.jsx)("div",{className:"",children:Object(w.jsxs)("div",{className:"card p-2",children:[Object(w.jsxs)("div",{className:"card-header d-flex justify-content-between bg-white",children:[Object(w.jsx)("div",{className:"align-self-center p-2",children:"Category"}),Object(w.jsxs)("div",{class:"btn-group",children:[Object(w.jsx)("button",{type:"button",class:"btn btn-outline-secondary dropdown-toggle border-0 ","data-bs-toggle":"dropdown","aria-expanded":"false",style:{height:"35px "}}),Object(w.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end",children:[Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(){console.log("delete--------------\x3e"),s(g({id:e.category.id}))},children:"Delete"})}),Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(){i(!c)},children:"Edit"})})]})]})]}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("h5",{className:"card-text my-3",children:e.category.name.toUpperCase()})})]})}),c&&Object(w.jsx)(_,{id:e.category.id,setOnEdit:i},e.category.id)]})};var k=function(e){return Object(w.jsx)("option",{value:e.category.name.toUpperCase(),children:e.category.name.toUpperCase()})};var S=function(e){var t=Object(d.c)((function(e){return e.categories}));console.log("-------------------\x3e",t);var a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)(""),o=Object(l.a)(r,2),j=o[0],b=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),x=m[0],v=m[1],p=Object(n.useState)(""),f=Object(l.a)(p,2),g=f[0],N=f[1],y=e.book,_=y.id,C=Object(d.b)();return Object(w.jsxs)("div",{className:" col-md-3 m-2",children:[Object(w.jsxs)("div",{className:"card p-3",children:[Object(w.jsxs)("div",{className:"card-header bg-white mb-3 d-flex justify-content-between mb-3 align-item-center",children:[Object(w.jsx)("h5",{className:"align-self-center",children:y.name}),Object(w.jsxs)("div",{class:"btn-group",children:[Object(w.jsx)("button",{type:"button",class:"btn btn-outline-secondary dropdown-toggle border-0","data-bs-toggle":"dropdown","aria-expanded":"false",style:{height:"35px "}}),Object(w.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end",children:[Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(){return C(O({id:_}))},children:"Delete"})}),Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(){console.log("Click edit"),s(!i)},children:"Edit"})})]})]})]}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsxs)("h6",{className:"card-subtitle text-start",children:["Category: ",y.category]}),Object(w.jsx)("h6",{className:"card-text text-start mt-3 text-muted",children:y.description})]})]}),i?Object(w.jsx)("div",{className:"card mt-2",children:Object(w.jsxs)("div",{className:"edit-overlay m-2",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between my-2",children:[Object(w.jsxs)("h5",{children:["Edit: ",y.name," "]}),Object(w.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){s(!1),console.log("click editbook",i)},children:"X"})]}),Object(w.jsxs)("div",{className:"form-floating",children:[Object(w.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"Name",onChange:function(e){var t;b((t=e).target.value),console.log(t.target.value)}}),Object(w.jsx)("label",{for:"floatingInput",children:"Change name"})]}),Object(w.jsxs)("div",{className:"form-floating mt-3",children:[Object(w.jsx)("input",{type:"text",className:"form-control",id:"floatingInput",placeholder:"Name",onChange:function(e){var t;v((t=e).target.value),console.log(t.target.value)}}),Object(w.jsx)("label",{for:"floatingInput",children:"Change description"})]}),Object(w.jsxs)("select",{className:"form-select mt-3","aria-label":"Default select example",onChange:function(e){N(e.target.value)},children:[Object(w.jsx)("option",{selected:!0,children:"Choose category"}),t&&t.map((function(e){return Object(w.jsx)(k,{category:e},e.id)}))]}),Object(w.jsxs)("button",{className:"btn btn-success w-100 mt-3",onClick:function(){console.log("Handle submit"),""!==j&&""!==x?(C(h({id:_,name:j,description:x,category:g})),s(!1)):alert("Please insert the value")},children:[" ","Submit"]})]})}):""]})};var D=function(){var e=Object(d.c)((function(e){return e}));return Object(w.jsx)("div",{className:"container-fluid",children:Object(w.jsx)("div",{className:"row d-flex align-item-center justify-content-center",children:e.books.map((function(e){return Object(w.jsx)(S,{book:e},e.id)}))})})},B=a(36);var q=function(){var e=Object(d.c)((function(e){return e.categories})),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),O=u[0],h=u[1],x=Object(d.b)();return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row col-12 mb-5",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Add new book"}),Object(w.jsxs)("div",{className:"form-floating",children:[Object(w.jsx)("input",{type:"text",className:"form-control mt-3",id:"floatingInput",placeholder:"Name",onChange:function(e){var t;i((t=e).target.value),console.log(t.target.value)}}),Object(w.jsx)("label",{for:"floatingInput",children:"Name of Book"})]}),Object(w.jsxs)("div",{className:"form-floating",children:[Object(w.jsx)("input",{type:"text",className:"form-control mt-3",id:"floatingPassword",placeholder:"Description",onChange:function(e){var t;j((t=e).target.value),console.log(t.target.value)}}),Object(w.jsx)("label",{for:"floatingPassword",children:"Description"})]}),Object(w.jsxs)("select",{className:"form-select mt-3","aria-label":"Default select example",onChange:function(e){return function(e){console.log("select",e.target.value),h(e.target.value)}(e)},children:[Object(w.jsx)("option",{selected:!0}),e&&e.map((function(e){return Object(w.jsx)(k,{category:e},e.id)}))]}),Object(w.jsx)("button",{className:"w-100 btn btn-lg btn-primary mt-3",type:"submit",onClick:function(e){!function(e){e.preventDefault();var t=Object(B.a)();""!==c&&""!==o&&""!==O?(x(m({id:t,name:c,description:o,category:O})),alert("You added a new book!")):alert("Please insert value"),console.log("_____________________________________")}(e)},children:"Add new Book"})]})})})})};var E=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(q,{}),Object(w.jsx)(D,{})]})};var P=function(){var e=Object(d.c)((function(e){return e.categories}));return Object(w.jsx)("div",{className:"container-fluid",children:Object(w.jsx)("div",{className:"row d-flex justify-content-center align-item-center",children:e.map((function(e){return Object(w.jsx)(C,{category:e},e.id)}))})})};var I=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(d.b)();return Object(w.jsx)("div",{className:"row col-12",children:Object(w.jsxs)("form",{className:"p-0",children:[Object(w.jsxs)("div",{className:"form-floating mb-3 w-100 ",children:[Object(w.jsx)("input",{type:"text",className:"form-control mt-3",id:"floatingPassword",placeholder:"New Category",onChange:function(e){!function(e){console.log(e.target.value),c(e.target.value)}(e)}}),Object(w.jsx)("label",{for:"floatingPassword",children:"New Category"})]}),Object(w.jsx)("button",{onClick:function(e){e.preventDefault();var t=Object(B.a)();""!==a?(i(f({id:t,name:a})),alert("add category")):alert("please insert value")},className:"btn btn-primary w-100",children:"Add new Category"})]})})};var A=function(){return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(I,{}),Object(w.jsx)(P,{})]})};var M=function(){return Object(w.jsx)("div",{children:"404 Not Found"})};var R=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Home"}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(w.jsxs)("div",{className:"navbar-nav",children:[Object(w.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/categories",children:"Categories"}),Object(w.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/reviews",children:"Reviews"})]})})]})})})},T=(a(32),Object(j.b)({name:"review",initialState:[{id:1,name:"Nguyen Van A",review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",date:"10/5/2021"},{id:2,name:"Nguyen Van B",review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",date:"10/5/2019"},{id:3,name:"Nguyen Van C",review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laboriosam quae blanditiis, esse minima quas accusantium aliquid. Magnam vel corrupti, eveniet nam, temporibus culpa asperiores inventore aliquid, hic enim odio!",date:"10/5/207"}],reducers:{addReview:function(e,t){e.unshift(t.payload)},deleteReview:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},editReview:function(e,t){return e.map((function(e){return e.id==t.payload.id?{id:e.id,name:e.name,review:t.payload.review,date:e.date}:e}))}}})),F=T.actions,U=F.addReview,L=F.deleteReview,z=F.editReview,V=T.reducer;var H=function(){var e=Object(d.b)(),t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1];return Object(w.jsx)("div",{className:"container card",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("form",{className:"col-md-12",children:[Object(w.jsxs)("div",{className:"form-floating mb-3 w-100 ",children:[Object(w.jsx)("input",{type:"text",className:"form-control mt-3",id:"floatingPassword",placeholder:"New Category",onChange:function(e){!function(e){console.log(e.target.value),i(e.target.value)}(e)}}),Object(w.jsx)("label",{for:"floatingPassword",children:"Name"})]}),Object(w.jsxs)("div",{className:"form-floating",children:[Object(w.jsx)("textarea",{className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",onChange:function(e){!function(e){console.log(e.target.value),j(e.target.value)}(e)},style:{height:"100px"}}),Object(w.jsx)("label",{for:"floatingTextarea2",children:"Comments"})]}),Object(w.jsx)("button",{onClick:function(t){t.preventDefault();var a=Object(B.a)();if(""!==c&&""!==o){var n=function(){var e="",t=new Date;return e+(t.getDate()+"/")+(t.getMonth()+1)+"/"+t.getFullYear()}();e(U({id:a,name:c,review:o,date:n})),alert("Success")}else alert("Please insert value!")},className:"btn btn-primary my-3 float-end",children:"Comments"})]})})})};var J=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=function(t){e.setOnEdit(t)};return Object(w.jsx)("div",{className:"container review__edit card mt-3",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("form",{children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between my-3",children:[Object(w.jsx)("h5",{for:"exampleFormControlInput1",className:"form-label text-bold",children:"Edit review"}),Object(w.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(e){e.preventDefault(),s(!1)},style:{height:"30px"},children:"X"})]}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"",onChange:function(e){i(e.target.value),console.log(e.target.value)}}),Object(w.jsx)("button",{className:"btn btn-success w-100 mt-3",onClick:function(t){var a;t.preventDefault(),""!==c?(a=z({id:e.id,review:c}),e.dispatch(a),s(!1)):alert("Please insert value!")},children:"Edit"})]})})})})};var X=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1],s=e.review,r=Object(d.b)();return Object(w.jsxs)("div",{className:"row mt-3",children:[Object(w.jsxs)("div",{className:"card",children:[Object(w.jsxs)("div",{className:"card-header bg-white d-flex justify-content-between",children:[Object(w.jsxs)("div",{className:"review__name ",children:[Object(w.jsx)("h5",{className:"",children:s.name}),Object(w.jsx)("h6",{className:"text-muted text-start",children:s.date})]}),Object(w.jsxs)("div",{class:"btn-group",children:[Object(w.jsx)("button",{type:"button",class:"btn btn-outline-secondary dropdown-toggle border-0 ","data-bs-toggle":"dropdown","aria-expanded":"false",style:{height:"35px "}}),Object(w.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end",children:[Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(e){!function(e){e.preventDefault(),r(L({id:s.id}))}(e)},children:"Delete"})}),Object(w.jsx)("li",{children:Object(w.jsx)("button",{class:"dropdown-item",type:"button",onClick:function(e){!function(e){e.preventDefault(),i(!c)}(e)},children:"Edit"})})]})]})]}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("h6",{className:"card-text text-muted text-start",children:s.review})})]}),c&&Object(w.jsx)(J,{setOnEdit:i,dispatch:r,id:s.id})]})};var Y=function(){var e=Object(d.c)((function(e){return e.reviews}));return console.log("reviews",e),Object(w.jsx)("div",{className:"container",children:null!==e.length&&e.map((function(e){return console.log("AFTER PROPS __________________>",e),Object(w.jsx)(X,{review:e},e.id)}))})};var G=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(H,{}),Object(w.jsx)(Y,{})]})};var K=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(r.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(R,{}),Object(w.jsx)("hr",{}),Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/",children:Object(w.jsx)(E,{})}),Object(w.jsx)(o.a,{path:"/categories",children:Object(w.jsx)(A,{})}),Object(w.jsx)(o.a,{path:"/reviews",children:Object(w.jsx)(G,{})}),Object(w.jsx)(o.a,{path:"*",children:Object(w.jsx)(M,{})})]})]})})})},Q=(a(34),{books:x,categories:y,reviews:V}),W=Object(j.a)({reducer:Q});s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(d.a,{store:W,children:Object(w.jsx)(K,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9c44943f.chunk.js.map