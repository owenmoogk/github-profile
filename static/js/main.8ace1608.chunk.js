(this["webpackJsonpgithub-card"]=this["webpackJsonpgithub-card"]||[]).push([[0],{319:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(77),a=n.n(c),s=n(10),l=n(17),o=n(149),d=n(322),h=n(326),j=n(164),u=n(165),b=n(69),x=n(169),v=n(1);function m(e){return Object(v.jsx)("g",{transform:"translate(".concat(e.x,",").concat(e.y,")"),children:Object(v.jsx)("text",{x:0,y:15,textAnchor:"start",fill:"white",transform:"rotate(45)",style:{zIndex:100},children:e.payload.value})})}function p(e){var t,n=e.data,r=e.colors,i=e.emojis;return Object(v.jsx)("div",{children:n&&r&&i?(t=(n.description||"").replace(/:\w+:/g,(function(e){var t=e.substring(1,e.length-1),n=i[t];return n?"<span><img src='".concat(n,"' style='width: 1rem; height: 1rem; vertical-align: -0.2rem;'></span>"):e})),Object(v.jsxs)("div",{id:"mainCard",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",border:"1px solid #e1e4e8",borderRadius:"6px",background:"white",padding:"16px",fontSize:"14px",lineHeight:"1.5",color:"#24292e",width:"300px"},children:[Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(v.jsx)("svg",{style:{fill:"#586069",marginRight:"8px"},viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),Object(v.jsx)("span",{style:{fontWeight:"600",color:"#0366d6"},children:Object(v.jsxs)("a",{style:{textDecoration:"none",color:"inherit"},href:n.html_url,children:[e.includeUsername?e.username+"/":"",n.name]})})]}),Object(v.jsxs)("div",{style:{display:n.fork?"block":"none",fontSize:"12px",color:"#586069"},children:["Forked from",Object(v.jsx)("a",{style:{color:"inherit",textDecoration:"none"},href:n.fork?n.source.html_url:"",children:n.fork?n.source.full_name:""})]}),Object(v.jsx)("div",{style:{fontSize:"12px",marginBottom:"16px",marginTop:"8px",color:"#586069"},dangerouslySetInnerHTML:{__html:t}}),Object(v.jsxs)("div",{style:{fontSize:"12px",color:"#586069",display:"flex"},children:[Object(v.jsxs)("div",{style:{display:n.language?"":"none",marginRight:"16px"},children:[Object(v.jsx)("span",{style:{width:"12px",height:"12px",borderRadius:"100%",backgroundColor:n.language?r[n.language].color:"",display:"inline-block",top:"1px",position:"relative"}}),Object(v.jsxs)("span",{children:[" ",n.language]})]}),Object(v.jsxs)("div",{style:{display:e.includeZeros?"flex":0===n.stargazers_count?"none":"flex",alignItems:"center",marginRight:"16px"},children:[Object(v.jsx)("svg",{style:{fill:"#586069"},"aria-label":"stars",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})}),"\xa0 ",Object(v.jsx)("span",{children:n.stargazers_count})]}),Object(v.jsxs)("div",{style:{display:e.includeZeros?"flex":0===n.forks?"none":"flex",alignItems:"center"},children:[Object(v.jsx)("svg",{style:{fill:"#586069"},"aria-label":"fork",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})}),"\xa0 ",Object(v.jsx)("span",{children:n.forks})]})]})]})):null})}var g=n(168),O=n(147),f=n.n(O);function y(e){var t=Object(l.g)(),n=t.username,i=t.repo,c=Object(r.useState)(),a=Object(s.a)(c,2),O=a[0],y=a[1],w=Object(r.useState)(),z=Object(s.a)(w,2),k=z[0],C=z[1],S=Object(r.useState)(),H=Object(s.a)(S,2),M=H[0],V=H[1],L=Object(r.useState)(),I=Object(s.a)(L,2),R=I[0],_=I[1],B=Object(r.useState)("data"),N=Object(s.a)(B,2),A=N[0],E=N[1],F=Object(r.useState)(),D=Object(s.a)(F,2),G=D[0],T=D[1],U=Object(r.useState)(),P=Object(s.a)(U,2),q=P[0],W=P[1];function Z(){var e=new Date(Date.parse(O.created_at)).toLocaleString("default",{month:"long",day:"numeric",year:"numeric"});return Object(v.jsxs)("p",{className:"info",children:[Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"20",width:"16",className:"octicon octicon-repo-forked",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",O.forks]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"20",width:"16",className:"octicon octicon-star mr-1",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})})," ",O.stargazers_count]}),Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"20",width:"16",style:{fill:"currentcolor"},className:"octicon octicon-eye",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"})})," ",O.subscribers_count]}),Object(v.jsx)("br",{}),O.fork?Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"16",width:"16",className:"octicon octicon-repo-forked",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})}),"\xa0Forked from\xa0",Object(v.jsx)("a",{style:{textDecoration:"none"},href:O.fork?O.source.html_url:"",target:"_blank",rel:"noreferrer",children:O.fork?O.source.full_name:""}),Object(v.jsx)("br",{})]}):null,Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",height:"18",role:"img",viewBox:"0 0 14 16",width:"16",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"})})," \xa0Created ",e]}),O.has_pages?Object(v.jsxs)("span",{children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"16",width:"16",className:"octicon octicon-link",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"})})," \xa0",Object(v.jsx)("a",{href:"https://"+n+".github.io/"+i,target:"_blank",rel:"noreferrer",children:"Github Pages"})]}):null]})}function K(){return Object(v.jsxs)("div",{id:"components",children:[Object(v.jsxs)("div",{id:"cardComponent",children:[Object(v.jsx)("h2",{children:"Github Cards"}),Object(v.jsx)("div",{id:"cardContainer",children:Object(v.jsx)(p,{data:O,colors:e.colors,emojis:e.emojis,username:n,link:"external",includeUsername:q,includeZeros:G})}),Object(v.jsxs)("div",{id:"cardOptions",children:[Object(v.jsxs)("div",{id:"options",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"checkbox",id:"includeUsername",onChange:function(e){return W(e.target.checked)}}),Object(v.jsx)("label",{htmlFor:"includeUsername",children:"Include Username"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"checkbox",id:"includeZeros",onChange:function(e){return T(e.target.checked)}}),Object(v.jsx)("label",{htmlFor:"includeZeros",children:"Include Zeros"})]})]}),Object(v.jsxs)("div",{id:"downloadButtons",children:[Object(v.jsx)("abbr",{title:"Download PNG",children:Object(v.jsxs)("svg",{width:"3em",height:"3em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",onClick:function(){return function(){var e=document.getElementById("mainCard");Object(g.a)(e).then((function(e){f()(e,"my-node.png")})).catch((function(e){console.error("oops, something went wrong!",e)}))}()},children:[Object(v.jsx)("path",{d:"M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2z"}),Object(v.jsx)("path",{d:"M18 29.48l10.61-10.61a1 1 0 0 0-1.41-1.41L19 25.65V5a1 1 0 0 0-2 0v20.65l-8.19-8.19a1 1 0 1 0-1.41 1.41z"})]})}),Object(v.jsx)("abbr",{title:"Copy HTML to Clipboard",children:Object(v.jsxs)("svg",{width:"3em",height:"2.4em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 30 24",onClick:function(){return function(){var e=document.getElementById("cardContainer"),t=document.getElementById("cardHtml");t.style.display="block",t.value=e.innerHTML,t.select(),document.execCommand("copy"),t.style.display="none"}()},children:[Object(v.jsx)("path",{d:"M13 11.5l1.5 1.5l5-5l-5-5L13 4.5L16.5 8z"}),Object(v.jsx)("path",{d:"M7 4.5L5.5 3l-5 5l5 5L7 11.5L3.5 8z"}),Object(v.jsx)("path",{d:"M10.958 2.352l1.085.296l-3 11l-1.085-.296l3-11z"})]})}),Object(v.jsx)("input",{style:{display:"none"},id:"cardHtml",type:"text"})]})]})]}),Object(v.jsx)("div",{id:"cornerComponent",children:Object(v.jsx)("h2",{children:"Github Corners"})})]})}return Object(r.useEffect)((function(){e.makeGithubRequest("https://api.github.com/repos/"+n+"/"+i,y)}),[n,i]),Object(r.useEffect)((function(){O&&(e.makeGithubRequest(O.languages_url,C),e.makeGithubRequest(O.contributors_url+"?per_page=10",V))}),[O]),O&&e.colors&&e.emojis?O.id?k&&M?Object(v.jsxs)("div",{id:"repoPage",children:[Object(v.jsxs)("div",{id:"title",children:[Object(v.jsx)("h1",{children:O.name}),Object(v.jsxs)("h2",{children:[Object(v.jsxs)("a",{href:"https://github.com/"+O.owner.login,target:"_blank",rel:"noreferrer",children:["@",O.owner.login]}),"/",Object(v.jsx)("a",{href:"https://github.com/"+O.owner.login+"/"+O.name,target:"_blank",rel:"noreferrer",children:O.name})]}),Z()]}),Object(v.jsxs)("div",{id:"buttons",children:[Object(v.jsx)("button",{onClick:function(){return E("data")},className:"stateButton "+("data"===A?"active":""),children:"Repo Data"}),Object(v.jsx)("button",{onClick:function(){return E("components")},className:"stateButton"+("components"===A?" active":""),children:"Components"})]}),"data"===A?Object(v.jsxs)("div",{id:"dataPage",children:[Object(v.jsxs)("div",{className:"dataCard",id:"languageCard",children:[Object(v.jsx)("h2",{children:"Languages"}),0===Object.entries(k).length?null:Object(v.jsxs)("div",{id:"languageChart",children:[Object(v.jsx)("div",{id:"chartContainer",children:Object(v.jsx)(o.PieChart,{animate:!0,startAngle:-90,animationDuration:1e3,lineWidth:25,paddingAngle:Object.entries(k).length>1?3:0,radius:45,data:Object.entries(k).map((function(t,n){var r=Object(s.a)(t,2),i=r[0];return{title:i,value:r[1],color:e.colors[i]?e.colors[i].color:"grey"}})),segmentsStyle:{transition:".5s"},segmentsShift:Object.entries(k).length>1?function(e){return e===R?5:0}:null,onMouseOver:function(e,t){_(t)},onMouseOut:function(){_(null)}})}),Object(v.jsx)("div",{id:"chartLabels",children:Object.entries(k).map((function(t,n){var r=Object(s.a)(t,2),i=r[0];return r[1],Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{style:{width:"14px",height:"14px",borderRadius:"100%",backgroundColor:e.colors[i]?e.colors[i].color:"grey",display:"inline-block",top:"1px",position:"relative"}}),"\xa0",Object(v.jsx)("span",{className:"language",children:i})]},n)}))})]})]}),Object(v.jsxs)("div",{id:"contributors",className:"dataCard",children:[Object(v.jsx)("h2",{children:"Top Contributors"}),Object(v.jsx)("div",{id:"contributorList",children:M.map((function(e,t){return Object(v.jsxs)("a",{href:"/"+e.login,children:[Object(v.jsx)("img",{src:e.avatar_url,alt:""}),Object(v.jsxs)("span",{children:[" \xa0 ",e.login]})]},t)}))})]}),Object(v.jsxs)("div",{id:"contributorChart",className:"dataCard",children:[Object(v.jsx)("h2",{children:"Contributions"}),function(){var e=65*M.length;return e<400&&(e=400),Object(v.jsxs)(d.a,{width:e,height:350,data:M,margin:{right:20},children:[Object(v.jsx)(h.a,{stroke:"grey",strokeDasharray:"5 5"}),Object(v.jsx)(j.a,{stroke:"white",dataKey:"login",interval:0,tick:Object(v.jsx)(m,{}),overflow:"display",height:100}),Object(v.jsx)(u.a,{stroke:"white"}),Object(v.jsx)(b.a,{contentStyle:{backgroundColor:"white"},cursor:{fill:"white",stroke:"grey"}}),Object(v.jsx)(x.a,{dataKey:"contributions",fill:"#8884d8"})]})}()]})]}):null,"components"===A?K():null,Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}):null:e.notFoundError():null}var w=n(20);function z(e){var t,n=e.data,r=e.emojis,i=e.colors;return Object(v.jsx)("div",{children:function(){return t=(n.description||"").replace(/:\w+:/g,(function(e){var t=e.substring(1,e.length-1),n=r[t];return n?"<span><img src='".concat(n,"' style='width: 1rem; height: 1rem; vertical-align: -0.2rem;'></span>"):e})),Object(v.jsxs)("div",{className:"ghCard",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",border:"1px solid #e1e4e8",borderRadius:"6px",background:"white",padding:"16px",fontSize:"14px",lineHeight:"1.5",color:"#24292e",width:"300px",display:e.searchValue?(c=e.searchValue,c=c.toLowerCase(),n.name.toLowerCase().includes(c)||n.language&&n.language.toLowerCase().includes(c)||n.description&&n.description.toLowerCase().includes(c)?"inherit":"none"):e.display?e.display:"inherit"},children:[Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(v.jsx)("svg",{style:{fill:"#586069",marginRight:"8px"},viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),Object(v.jsx)("span",{style:{fontWeight:"600",color:"#0366d6"},children:Object(v.jsx)("a",{style:{textDecoration:"none",color:"inherit"},href:"external"===e.link?"https://github.com/"+e.user+"/"+n.name:"/"+e.user+"/"+n.name,target:"external"===e.link?"_blank":null,rel:"noreferrer",children:n.name})})]}),"external"===e.link?Object(v.jsxs)("div",{style:{display:n.fork?"block":"none",fontSize:"12px",color:"#586069"},children:["Forked from",Object(v.jsx)("a",{style:{color:"inherit",textDecoration:"none"},href:n.fork?n.source.html_url:"",children:n.fork?n.source.full_name:""})]}):null,Object(v.jsx)("div",{style:{fontSize:"12px",marginBottom:"16px",marginTop:"8px",color:"#586069"},dangerouslySetInnerHTML:{__html:t}}),Object(v.jsxs)("div",{style:{fontSize:"12px",color:"#586069",display:"flex"},children:[Object(v.jsxs)("div",{style:{display:n.language?"":"none",marginRight:"16px"},children:[Object(v.jsx)("span",{style:{width:"12px",height:"12px",borderRadius:"100%",backgroundColor:n.language?i[n.language]?i[n.language].color:"grey":"",display:"inline-block",top:"1px",position:"relative"}}),Object(v.jsxs)("span",{children:[" ",n.language]})]}),Object(v.jsxs)("div",{style:{display:0===n.stargazers_count?"none":"flex",alignItems:"center",marginRight:"16px"},children:[Object(v.jsx)("svg",{style:{fill:"#586069"},"aria-label":"stars",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})}),"\xa0 ",Object(v.jsx)("span",{children:n.stargazers_count})]}),Object(v.jsxs)("div",{style:{display:0===n.forks?"none":"flex",alignItems:"center"},children:[Object(v.jsx)("svg",{style:{fill:"#586069"},"aria-label":"fork",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})}),"\xa0 ",Object(v.jsx)("span",{children:n.forks})]})]})]});var c}()})}function k(e){var t=Object(l.g)().username,n=Object(r.useState)(),i=Object(s.a)(n,2),c=i[0],a=i[1],o=Object(r.useState)(),d=Object(s.a)(o,2),h=d[0],j=d[1],u=Object(r.useState)(),b=Object(s.a)(u,2),x=b[0],m=b[1];function p(){var t,n={},r=Object(w.a)(h);try{for(r.s();!(t=r.n()).done;){var i=t.value;n[i.language]?n[i.language]+=1:n[i.language]=1}}catch(b){r.e(b)}finally{r.f()}var c=Object.entries(n).map((function(e){var t=Object(s.a)(e,2);return[t[0],t[1]]}));c.sort((function(e,t){return t[1]-e[1]})),c=c.slice(0,7);var a,l=0,o=Object(w.a)(c);try{for(o.s();!(a=o.n()).done;){var d=Object(s.a)(a.value,2),j=d[0],u=d[1];"null"!==j&&(l+=u)}}catch(b){o.e(b)}finally{o.f()}return Object(v.jsx)("div",{id:"stackedBarChart",children:c.map((function(t,n){var r=Object(s.a)(t,2),i=r[0],c=r[1];return"null"!==i?Object(v.jsx)("span",{className:"barItem "+i,style:{minWidth:c/l*350,backgroundColor:e.colors[i]?e.colors[i].color:"grey"},children:Object(v.jsx)("span",{className:"languageTitle",children:i},n)},n):null}))})}return Object(r.useEffect)((function(){e.makeGithubRequest("https://api.github.com/users/"+t,a),e.makeGithubRequest("https://api.github.com/users/"+t+"/repos?per_page=1000",j)}),[t]),c&&h&&e.colors&&e.emojis?"User"===c.type?function(){var n,r,i=new Date(Date.parse(c.created_at)).toLocaleString("default",{month:"long",day:"numeric",year:"numeric"});return c.blog.includes("https://")||c.blog.includes("http://")?(n=c.blog,r=c.blog.replace("https://",""),r=c.blog.replace("http://","")):(n="http://"+c.blog,r=c.blog),Object(v.jsx)("div",{id:"userPage",children:Object(v.jsxs)("div",{id:"left",children:[Object(v.jsxs)("div",{id:"userData",children:[Object(v.jsx)("img",{src:c.avatar_url,alt:""}),Object(v.jsxs)("div",{id:"userText",children:[Object(v.jsx)("h1",{children:c.name}),Object(v.jsx)("h2",{children:Object(v.jsxs)("a",{href:"https://github.com/"+c.login,target:"blank",children:["@",c.login]})}),p(),Object(v.jsxs)("div",{id:"userStats",children:[Object(v.jsxs)("div",{className:"userStat",children:[Object(v.jsx)("span",{children:c.public_repos}),"Repositories"]}),Object(v.jsxs)("div",{className:"userStat",children:[Object(v.jsx)("span",{children:c.followers}),"Followers"]}),Object(v.jsxs)("div",{className:"userStat",children:[Object(v.jsx)("span",{children:c.following}),"Following"]})]}),Object(v.jsxs)("div",{className:"userInfos",children:[Object(v.jsxs)("p",{className:"userInfo",children:[Object(v.jsx)("svg",{"aria-hidden":"true",height:"18",role:"img",viewBox:"0 0 14 16",width:"16",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"})})," \xa0Joined ",i]}),c.location?Object(v.jsxs)("p",{className:"userInfo",children:[Object(v.jsx)("svg",{"aria-hidden":"true",className:"octicon",height:"16",role:"img",viewBox:"0 0 12 16",width:"12",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"})})," \xa0",c.location]}):null,c.company?Object(v.jsxs)("p",{className:"userInfo",children:[Object(v.jsx)("svg",{"aria-hidden":"true",className:"octicon",height:"16",role:"img",viewBox:"0 0 14 16",width:"14",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"})})," \xa0",c.company]}):null]}),Object(v.jsxs)("div",{className:"userInfos",children:[c.twitter_username?Object(v.jsxs)("p",{className:"userInfo",children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 273.5 222.3",height:"18",width:"16",className:"octicon",children:Object(v.jsx)("path",{d:"M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1",fill:"currentColor"})})," \xa0",Object(v.jsx)("a",{href:"https://twitter.com/"+c.twitter_username,target:"_blank",rel:"noreferrer",children:c.twitter_username})]}):null,c.blog?Object(v.jsxs)("p",{className:"userInfo",children:[Object(v.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",height:"16",width:"16",className:"octicon octicon-link",style:{fill:"currentcolor"},children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"})})," \xa0",Object(v.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:r})]}):null]})]})]}),Object(v.jsxs)("div",{id:"bottomSection",children:[Object(v.jsx)("div",{id:"search",children:Object(v.jsx)("input",{type:"text",placeholder:"Search repositories",onKeyUp:function(e){return m(e.target.value)}})}),Object(v.jsx)("div",{id:"githubCards",children:h.map((function(n,r){return r<8?Object(v.jsx)(z,{data:n,colors:e.colors,emojis:e.emojis,searchValue:x,user:t},r):Object(v.jsx)(z,{data:n,colors:e.colors,emojis:e.emojis,display:"none",searchValue:x,user:t},r)}))})]})]})})}():e.notFoundError():null}var C=n(166);n(319);function S(){var e=Object(l.h)(["/"]);return e&&e.isExact?null:Object(v.jsx)("a",{href:"/",id:"back",children:Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"50px",height:"50px",style:{fill:"white"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:Object(v.jsx)("path",{d:"M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"})})})}function H(e){var t=Object(r.useState)(),n=Object(s.a)(t,2),i=n[0],c=n[1];return Object(v.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=document.getElementById("apiKeyInput").value;if(c(""),""===n)return localStorage.setItem("token",""),void e.getRateLimit();fetch("https://api.github.com/rate_limit",{headers:{authorization:"token "+n}}).then((function(e){return e.json()})).then((function(t){t.rate?(localStorage.setItem("token","token "+n),e.getRateLimit()):c(t.message)}))}(t)},children:[Object(v.jsx)("input",{type:"text",placeholder:"ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",id:"apiKeyInput",defaultValue:localStorage.getItem("token")?localStorage.getItem("token").replace("token ",""):null}),Object(v.jsx)("p",{style:{marginTop:0},children:i}),Object(v.jsx)("input",{type:"submit"})]})}function M(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(),a=Object(s.a)(c,2),o=a[0],d=a[1],h=Object(r.useState)(),j=Object(s.a)(h,2),u=j[0],b=j[1],x=Object(r.useState)(),m=Object(s.a)(x,2),p=m[0],g=m[1],O=Object(r.useState)(),f=Object(s.a)(O,2),w=f[0],z=f[1],M=Object(r.useState)(),V=Object(s.a)(M,2),L=V[0],I=V[1];function R(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){return t(e)}))}function _(){var e={};localStorage.getItem("token")&&(e={headers:{authorization:localStorage.getItem("token")}}),fetch("https://api.github.com/rate_limit",e).then((function(e){return e.json()})).then((function(e){b(e.rate.remaining),g(e.rate.limit)}))}function B(e,t){var n={};localStorage.getItem("token")&&(n={headers:{authorization:localStorage.getItem("token")}}),fetch(e,n).then((function(e){return e.json()})).then((function(e){return t(e)})).then(_())}function N(){return z("Couldn't find that :("),Object(v.jsx)(l.a,{to:"/"})}return Object(r.useEffect)((function(){R("/colors.json",d),R("/emojis.json",i),_()}),[]),Object(v.jsxs)(C.a,{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{id:"rateLimit",children:[Object(v.jsx)("svg",{onClick:function(){return I(!0)},xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"30px",height:"30px",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:Object(v.jsxs)("g",{fill:"none",children:[Object(v.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"gray",strokeWidth:"2"}),Object(v.jsx)("path",{d:"M11.5 7h.5",stroke:"gray",strokeWidth:"2",strokeLinecap:"round"}),Object(v.jsx)("path",{d:"M10 11h2v5",stroke:"gray",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(v.jsx)("path",{d:"M10 16h4",stroke:"gray",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Object(v.jsxs)("p",{children:[Object(v.jsxs)("span",{children:[u,"/",p]}),Object(v.jsx)("br",{}),"Requests"]})]}),Object(v.jsx)("div",{id:"rateLimitModal",style:{display:L?"":"none"},onClick:function(e){return function(e){var t=document.getElementById("rateLimitModal");e.target===t&&I(!1)}(e)},children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsx)("span",{className:"close",onClick:function(){return I(!1)},children:"\xd7"}),Object(v.jsxs)("p",{style:{fontSize:"20px"},children:["This website was built using the Github API. The Github API is super powerful, but limits an IP address to 60 requests per hour. If you have a github account, you can get an API key ",Object(v.jsx)("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noreferrer",children:"here"})," to get many more requests, (typically 5000). If you would like to, enter it below. (this is a Frontend app using Local Storage, so no need to worry about security issues, it never leaves your computer)."]}),Object(v.jsx)(H,{getRateLimit:_})]})}),Object(v.jsx)(S,{})]}),Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{path:"/:username/:repo",children:Object(v.jsx)(y,{colors:o,emojis:n,makeGithubRequest:B,notFoundError:N})}),Object(v.jsx)(l.b,{path:"/:username",children:Object(v.jsx)(k,{colors:o,emojis:n,makeGithubRequest:B,notFoundError:N})}),Object(v.jsx)(l.b,{path:"/",children:Object(v.jsxs)("div",{id:"homepage",children:[Object(v.jsx)("h1",{children:"Github Profile"}),Object(v.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),z("");var t=document.getElementById("mainInput").value;if(t.includes("/")){var n=t.split("/");window.location.href="/"+n[0]+"/"+n[1]}else window.location.href="/"+t}(e)},children:[Object(v.jsx)("input",{type:"text",placeholder:"User or repository",id:"mainInput"}),Object(v.jsx)("input",{type:"submit",style:{display:"none"}})]}),Object(v.jsx)("h2",{id:"notFoundError",children:w})]})})]})]})}a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[320,1,2]]]);
//# sourceMappingURL=main.8ace1608.chunk.js.map