(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(3),i=n.n(a),r=(n(13),n(4)),s=n(5),d=n(6),u=n(8),l=n(7),b=(n(14),n(0)),j=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=e.id,c=e.name;return Object(b.jsx)("button",{onClick:function(){return n(c)},name:c,children:c},t)}))})};n(16);function h(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),n]})}n(17);function f(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,a=e.positive;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Good: ",t]}),Object(b.jsxs)("p",{children:["Neutral: ",n]}),Object(b.jsxs)("p",{children:["Bad: ",c]}),Object(b.jsxs)("p",{children:["Total: ",o]}),Object(b.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})}n(18);var v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0,total:0,positive:0},e.BUTTONS_NAMES=[{id:"1",name:"Good"},{id:"2",name:"Neutral"},{id:"3",name:"Bad"}],e.countTotalFeedback=function(){e.setState((function(e){return{total:e.good+e.neutral+e.bad}}))},e.countPositiveFeedbackPercentage=function(){e.setState((function(e){return{positive:Math.round(e.good/e.total*100)}}))},e.onLeaveFeedback=function(t){t=t.toLowerCase(),e.setState((function(e){return Object(r.a)({},t,e[t]+1)})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,o=e.total,a=e.positive;return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)(j,{options:this.BUTTONS_NAMES,onLeaveFeedback:this.onLeaveFeedback})}),Object(b.jsx)(h,{title:"Statistics",children:t||n||c?Object(b.jsx)(f,{good:t,bad:c,neutral:n,total:o,positive:a}):Object(b.jsx)("p",{children:"Nothing here yet, but you could leave your feedback"})})]})}}]),n}(c.Component),O=v;i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.f5f37836.chunk.js.map