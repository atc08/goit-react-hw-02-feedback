(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(4),i=a.n(r),o=(a(17),a(18),a(5)),l=a(6),d=a(7),j=a(11),b=a(10),u=a(8),h=a.n(u),p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e,t){return Object(n.jsx)("button",{type:"button",className:h.a.FeedBtn,onClick:function(){return a(e)},children:e},t)}))},O=a(2),x=a.n(O),f=function(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,r=e.positivePercentage;return Object(n.jsxs)("div",{className:x.a.FeedbackStats,children:[Object(n.jsxs)("p",{className:x.a.stats,children:["Good: ",t]}),Object(n.jsxs)("p",{className:x.a.stats,children:["Neutral: ",a]}),Object(n.jsxs)("p",{className:x.a.stats,children:["Bad: ",s]}),Object(n.jsxs)("p",{className:x.a.stats,children:["Total: ",c]}),Object(n.jsxs)("p",{className:x.a.stats,children:["Positive feedback: ",r,"%"]})]})},v=a(9),m=a.n(v),g=function(e){var t=e.message;return Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("p",{className:m.a.NotificationMassege,children:t})})},k=function(e){var t=e.title,a=e.children;return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)("h2",{className:"title",children:t}),a]})},N=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.good,t=this.state.neutral,a=this.state.bad,s=e+t+a,c=Math.round(e/s*100);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(k,{title:"Please leave feedback",children:Object(n.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.leaveFeedback})}),Object(n.jsx)(k,{title:"Statistics",children:s>0?Object(n.jsx)(f,{good:e,neutral:t,bad:a,total:s,positivePercentage:c}):Object(n.jsx)(g,{message:"No feedback given"})})]})}}]),a}(s.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},2:function(e,t,a){},8:function(e,t,a){e.exports={FeedBtn:"FeedbackOptions_FeedBtn__1xYYx"}},9:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.11443779.chunk.js.map