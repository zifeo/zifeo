(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{8949:function(e,n,r){Promise.resolve().then(r.bind(r,6433)),Promise.resolve().then(r.t.bind(r,2073,23))},6433:function(e,n,r){"use strict";r.r(n),r.d(n,{Newsletter:function(){return o}});var t=r(3353),i=r(9599);function o(){let[e,n]=(0,i.useState)(""),[r,o]=(0,i.useState)(""),s=(0,i.useCallback)(async n=>{n.preventDefault();let{errors:r,data:t}=await fetch("https://api.zifeo.com/zifeo",{method:"POST",body:JSON.stringify({query:"\nmutation signUp($email: String!) {\n  newsletterSignUp(email: $email) {\n    id\n  }\n}\n",variables:{email:e}})}).then(e=>e.json());if(r){o("Something went wrong, try again later! \uD83E\uDD14");return}let{newsletterSignUp:i}=t;if(i&&i.id){o("Successfully signed up! Thank you! \uD83C\uDF89");return}o("Already signed up! Thank you! \uD83D\uDE4C")},[e]);return(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-col",children:[(0,t.jsx)("p",{children:"Get an email for new updates, nothing more!"}),r?(0,t.jsx)("p",{children:r}):(0,t.jsxs)("form",{className:"border-zinc-500 border rounded-md overflow-hidden grid grid-cols-5",onSubmit:s,children:[(0,t.jsx)("input",{type:"email",required:!0,placeholder:"Your email",value:e,onChange:e=>n(e.target.value),className:"px-2 py-1 outline-none col-span-3"}),(0,t.jsx)("input",{type:"submit",value:"Subscribe",className:"px-2 py-1 cursor-pointer bg-zinc-500 text-white rounded-l-md hover:bg-zinc-700 transition duration-200 ease-in-out col-span-2"})]})]})}},901:function(e,n,r){"use strict";var t=r(9599),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:o,_owner:u.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},3353:function(e,n,r){"use strict";e.exports=r(901)}},function(e){e.O(0,[73,33,569,744],function(){return e(e.s=8949)}),_N_E=e.O()}]);