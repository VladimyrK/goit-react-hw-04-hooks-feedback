(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),a=n.n(i),o=(n(9),n(2)),s=(n(10),n(0)),u=function(e){var t=e.options,n=e.onClick;return Object(s.jsx)(s.Fragment,{children:t.map((function(e){var t=e.id,c=e.name;e.func;return Object(s.jsx)("button",{onClick:n,name:c,children:c},t)}))})};n(12);function j(e){var t=e.title,n=e.children;return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{children:t}),n]})}n(13);function d(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,i=e.positive;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:["Good: ",t]}),Object(s.jsxs)("p",{children:["Neutral: ",n]}),Object(s.jsxs)("p",{children:["Bad: ",c]}),Object(s.jsxs)("p",{children:["Total: ",r]}),Object(s.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})}n(14);var b=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),a=Object(o.a)(i,2),b=a[0],l=a[1],O=Object(c.useState)(0),h=Object(o.a)(O,2),f=h[0],x=h[1],p=Object(c.useState)(0),v=Object(o.a)(p,2),k=v[0],m=v[1],g=Object(c.useState)(0),S=Object(o.a)(g,2),w=S[0],y=S[1];return Object(c.useEffect)((function(){m(n+b+f),y(Math.round(n/k*100))}),[f,n,b,k]),Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{title:"Please leave feedback",children:Object(s.jsx)(u,{options:[{id:"1",name:"Good"},{id:"2",name:"Neutral"},{id:"3",name:"Bad"}],onClick:function(e){switch(e.target.name){case"Good":return r((function(e){return e+1}));case"Neutral":return l((function(e){return e+1}));case"Bad":return x((function(e){return e+1}));default:return}}})}),Object(s.jsx)(j,{title:"Statistics",children:n||b||f?Object(s.jsx)(d,{good:n,bad:f,neutral:b,total:k,positive:w}):Object(s.jsx)("p",{children:"Nothing here yet, but you could leave your feedback"})})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.f62548c5.chunk.js.map