(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{429:function(e,t,n){Promise.resolve().then(n.bind(n,2920)),Promise.resolve().then(n.bind(n,5822)),Promise.resolve().then(n.t.bind(n,3547,23))},2920:function(e,t,n){"use strict";n.d(t,{Giscus:function(){return a}});var i=n(5862),r=n(7058);function o({id:e,host:t,repo:o,repoId:a,category:s,categoryId:u,mapping:l,term:c,strict:d,reactionsEnabled:p,emitMetadata:m,inputPosition:g,theme:h,lang:f,loading:b}){let[y,w]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{y||(n.e(877).then(n.bind(n,3877)),w(!0))},[]),y?(0,i.jsx)("giscus-widget",{id:e,host:t,repo:o,repoid:a,category:s,categoryid:u,mapping:l,term:c,strict:d,reactionsenabled:p,emitmetadata:m,inputposition:g,theme:h,lang:f,loading:b}):null}function a(){return(0,i.jsx)(o,{repo:"zifeo/zifeo",repoId:"MDEwOlJlcG9zaXRvcnkzMjYwNjAwNDE=",category:"Comments",categoryId:"DIC_kwDOE29ICc4CWIkj",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"preferred_color_scheme",lang:"en",loading:"lazy"})}},5822:function(e,t,n){"use strict";n.d(t,{Newsletter:function(){return o}});var i=n(5862),r=n(7058);function o(){let[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(""),a=(0,r.useCallback)(async t=>{t.preventDefault();let{errors:n,data:i}=await fetch("https://api.zifeo.com/zifeo",{method:"POST",body:JSON.stringify({query:"\nmutation signUp($email: String!) {\n  newsletterSignUp(email: $email) {\n    id\n  }\n}\n",variables:{email:e}})}).then(e=>e.json());if(n){o("Something went wrong, try again later! \uD83E\uDD14");return}let{newsletterSignUp:r}=i;if(r&&r.id){o("Successfully signed up! Thank you! \uD83C\uDF89");return}o("Already signed up! Thank you! \uD83D\uDE4C")},[e]);return(0,i.jsxs)("div",{className:"flex items-center gap-2 flex-col",children:[(0,i.jsx)("p",{children:"Get an email for new updates, nothing more!"}),n?(0,i.jsx)("p",{children:n}):(0,i.jsxs)("form",{className:"border-zinc-500 border rounded-md overflow-hidden grid grid-cols-5",onSubmit:a,children:[(0,i.jsx)("input",{type:"email",required:!0,placeholder:"Your email",value:e,onChange:e=>t(e.target.value),className:"px-2 py-1 outline-none col-span-3"}),(0,i.jsx)("input",{type:"submit",value:"Subscribe",className:"px-2 py-1 cursor-pointer bg-zinc-500 text-white rounded-l-md hover:bg-zinc-700 transition duration-200 ease-in-out col-span-2"})]})]})}}},function(e){e.O(0,[547,158,660,744],function(){return e(e.s=429)}),_N_E=e.O()}]);