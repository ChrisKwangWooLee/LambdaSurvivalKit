(this["webpackJsonpreact-chrome-extension"]=this["webpackJsonpreact-chrome-extension"]||[]).push([[0],{28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(33),a(9)),s=a(6),i=a(7);var m=function(){var e=new Date,t=e.getTimezoneOffset();e.setMinutes(e.getMinutes()+t),e.setMinutes(e.getMinutes()+-480);var a,n,c=e.toString().split(" "),o=c[0],l=c[0],s=Number(c[4].split(":")[0]),i=c[4].split(":")[1];s>=0&&s<12?(n="AM",a="".concat(s.toString(),":").concat(i," ")):(n="PM",a="".concat((s-=12).toString(),":").concat(i));var m=Number(c[4].split(":")[0]),u="Mon"===l||"Tue"===l||"Wed"===l||"Thur"===l||"Fri"===l,d=m>=8&&m<=17;function g(e,t){return e&&t?{color:"#6BCD5B"}:{color:"#A3A3A3"}}return r.a.createElement("div",{className:"lambda-clock"},r.a.createElement("p",{className:"lambda-dayOfWeek",style:g(u,d)},o),r.a.createElement("p",{className:"lambda-time",style:g(u,d)},a,r.a.createElement("span",{style:g(u,d)},n)))};function u(){var e=Object(l.a)(["\n        \n    "]);return u=function(){return e},e}var d=function(){var e=i.a.div(u());return r.a.createElement("header",null,r.a.createElement("div",{className:"header-title-container"},r.a.createElement("img",{src:"lambda_logo.png",alt:"Lambda FirstAid",className:"logo-icon"}),r.a.createElement("h1",null,r.a.createElement("span",{className:"lambda-word"},"Lambda")," Survival Kit ",r.a.createElement("span",{className:"version"},"(1.0.0)")),r.a.createElement(e,{className:"line"}),r.a.createElement(m,null)))},g=a(10),b=a(11);var v=function(e){var t=e.handleBookmarks;return r.a.createElement("nav",{className:"topNav-container"},r.a.createElement("div",{className:"topNav-Item HTML",onClick:function(e){return t(e)}},r.a.createElement(g.a,{icon:b.b,className:"HTML",style:{color:"#383651",fontSize:"30px",textAlign:"center"}}),r.a.createElement("h2",{className:"HTML"},"HTML")),r.a.createElement("div",{className:"topNav-line"}),r.a.createElement("div",{className:"topNav-Item CSS_Style",onClick:function(e){return t(e)}},r.a.createElement(g.a,{icon:b.a,className:"CSS_Style",style:{color:"#383651",fontSize:"30px",textAlign:"center"}}),r.a.createElement("h2",{className:"CSS_Style"},"CSS/UI")),r.a.createElement("div",{className:"topNav-line"}),r.a.createElement("div",{className:"topNav-Item javascript",onClick:function(e){return t(e)}},r.a.createElement(g.a,{icon:b.c,className:"javascript",style:{color:"#383651",fontSize:"30px",textAlign:"center"}}),r.a.createElement("h2",{className:"javascript"}," Javscript")),r.a.createElement("div",{className:"topNav-line"}),r.a.createElement("div",{className:"topNav-Item lambda",onClick:function(e){return t(e)}},r.a.createElement("img",{src:"lambda_logo.png",alt:"Lambda navigation",className:"lambda"}),r.a.createElement("h2",{className:"lambda"},"Lambda")))},p={results:[{id:"1",name:"Google Fonts",category:"HTML",subcategory:"Essentials",url:"https://fonts.google.com/"},{id:"2",name:"MDN HTML document",category:"HTML",subcategory:"Documentation",url:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{id:"3",name:"Eric Myer's Reset CSS",category:"CSS-Style",subcategory:"Essentials",url:"https://meyerweb.com/eric/tools/css/reset/"},{id:"4",name:"Font Awesome",category:"CSS-Style",subcategory:"Essentials",url:"https://fontawesome.com/icons?d=gallery"},{id:"5",name:"MDN CSS document",category:"CSS-Style",subcategory:"Documentation",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{id:"6",name:"MDN Javascript document",category:"JS",subcategory:"Documentation",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{id:"7",name:"React document",category:"JS",subcategory:"Documentation",url:"https://reactjs.org"},{id:"8",name:"Green Sock",category:"JS",subcategory:"Essentials",url:"https://greensock.com/"},{id:"9",name:"Training Kit",category:"Lambda",subcategory:"Daily",url:"https://learn.lambdaschool.com/"},{id:"10",name:"Module Submission Form",category:"Lambda",subcategory:"Daily",url:"https://auth.lambdaschool.com/sign-in/?redirect=https%3A%2F%2Fforms.lambdaschool.com%2Fmodule-retrospective&reason=auth_required"},{id:"11",name:"Lambda Calendar",category:"Lambda",subcategory:"Essentials",url:"https://calendar.google.com/calendar/r?cid=bGFtYmRhc2Nob29sLmNvbV9nMDJtNTRlZTFxcWR1b2Rhbjdta2lqa3M5Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"}]},y=a(51),f=a(49),S=a(50);var E=function(e){var t=e.bookmark;return r.a.createElement("div",{className:"bookmark"},r.a.createElement("a",{href:t.url,target:"_blank"},t.name))};var h=function(e){var t=e.subcategory,a=e.bookmarks,c=Object(n.useState)(!1),o=Object(s.a)(c,2),l=o[0],i=o[1],m=a.filter((function(e){return e.subcategory===t}));return r.a.createElement("div",null,r.a.createElement("button",{color:"primary",onClick:function(){return console.log(t,"clicked"),i(!l)},style:{marginBottom:"1rem"}},t),r.a.createElement(y.a,{isOpen:l},r.a.createElement(f.a,null,r.a.createElement(S.a,null,m.map((function(e){return r.a.createElement(E,{key:e.id,bookmark:e})}))))))};function N(){var e=Object(l.a)(["\n  \n  "]);return N=function(){return e},e}var k=function(){var e=Object(n.useState)(p.results),t=Object(s.a)(e,1)[0],a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),g=u[0],b=u[1];console.log("Imported Data",t);var y=i.a.div(N());return r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(v,{handleBookmarks:function(e){if(e.target.getAttribute("class").toLowerCase().includes("html")){console.log("HTML clicked");var a=t.filter((function(e){return"HTML"===e.category}));l(a);var n=a.map((function(e){return e.subcategory}));b(L(n))}else if(e.target.getAttribute("class").toLowerCase().includes("css")){console.log("CSS-Style clicked");var r=t.filter((function(e){return"CSS-Style"===e.category}));l(r);var c=r.map((function(e){return e.subcategory}));b(L(c))}else if(e.target.getAttribute("class").toLowerCase().includes("javascript")){console.log("JS clicked");var o=t.filter((function(e){return"JS"===e.category}));l(o);var s=o.map((function(e){return e.subcategory}));b(L(s))}else if(e.target.getAttribute("class").toLowerCase().includes("lambda")){console.log("Lambda clicked");var i=t.filter((function(e){return"Lambda"===e.category}));l(i);var m=i.map((function(e){return e.subcategory}));b(L(m))}}}),r.a.createElement(y,{className:"bookmark-container"},0!==g.length?g.map((function(e,t){return r.a.createElement(h,{key:t,subcategory:e,bookmarks:o})})):null,r.a.createElement("button",{onClick:function(){return b([])}},"close")))};function L(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.cc7b76e5.chunk.js.map