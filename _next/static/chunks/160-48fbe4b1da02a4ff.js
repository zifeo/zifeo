(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{992:function(e,t,r){"use strict";var n=r(9918),i=r(1234),o=r.n(i);let a=e=>{var t;let{filePath:r}=e,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",i=r.split(n).shift(),o=r.split(".").pop(),a=n.substring(0,n.lastIndexOf("."))||n;return{path:i,filename:a,extension:o||""}},l=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{filename:n,path:i,extension:o}=a({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(o.toUpperCase()))return e;let l=o;["JPG","JPEG","PNG","GIF"].includes(o.toUpperCase())&&(l="WEBP");let u=i,s=null==u?void 0:u.substr(-1);"/"!=s&&(u+="/");let c=e.includes("_next/static/media"),d="".concat(c?"":u).concat("optimized","/").concat(n,"-opt-").concat(t,".").concat(l.toUpperCase());return r||"/"===d.charAt(0)||(d="/"+d),d},u=e=>{let t,{src:r,width:n}=e,i=r.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim();return l(i,n,!0)},s=e=>{let{src:t,width:r}=e,n="object"==typeof t,i=n?t.src:t,o=n&&t.width||void 0;if(n&&o&&r>o){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let r=0;r<e.length;r++)Number(e[r])>=o&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return l(i,t)}return i.startsWith("http")?u({src:i,width:r}):l(i,r)},c=e=>{let{src:t}=e,r="object"==typeof t?t.src:t,n=r.startsWith("http");return n||"/"===r.charAt(0)||(r="/"+r),r},d=(0,n.forwardRef)((e,t)=>{let{src:r,priority:i=!1,loading:a,className:d,width:f,height:p,onLoadingComplete:m,unoptimized:g,placeholder:h="blur",blurDataURL:b,style:v,onError:y,...w}=e,[_,E]=(0,n.useState)(!1),P=(0,n.useMemo)(()=>{if(b)return b;let e="object"==typeof r?r.src:r;return!0===g?e:e.startsWith("http")?u({src:e,width:10}):l(e,10)},[b,r,g]),j="object"==typeof r?r.src.endsWith(".svg"):r.endsWith(".svg"),[x,C]=(0,n.useState)(!1),S="blur"===h&&!j&&P&&P.startsWith("/")&&!x?{backgroundSize:(null==v?void 0:v.objectFit)||"cover",backgroundPosition:(null==v?void 0:v.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(P,")"),filter:"url(#sharpBlur)"}:void 0,O=n.createElement(o(),{ref:t,...w,...f&&{width:f},...p&&{height:p},...a&&{loading:a},...d&&{className:d},...m&&{onLoadingComplete:m},...h&&{placeholder:S||x?"empty":h},...g&&{unoptimized:g},...i&&{priority:i},...j&&{unoptimized:!0},style:{...v,...S},loader:_||!0===g?c:e=>s({src:r,width:e.width}),blurDataURL:P,onError:e=>{E(!0),C(!0),y&&y(e)},onLoadingComplete:e=>{0===e.naturalWidth&&E(!0),C(!0),m&&m(e)},src:r});return S?n.createElement(n.Fragment,null,n.createElement("noscript",null,n.createElement(o(),{...w,...f&&{width:f},...p&&{height:p},...a&&{loading:a},...d&&{className:d},placeholder:"empty",...g&&{unoptimized:g},...i&&{priority:i},style:v,loader:_||!0===g?c:e=>s({src:r,width:e.width}),src:r})),O,n.createElement("svg",{style:{border:0,clip:"rect(0 0 0 0)",height:0,margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}},n.createElement("filter",{id:"sharpBlur"},n.createElement("feGaussianBlur",{stdDeviation:"20",colorInterpolationFilters:"sRGB"}),n.createElement("feColorMatrix",{type:"matrix",colorInterpolationFilters:"sRGB",values:"1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"}),n.createElement("feComposite",{in2:"SourceGraphic",operator:"in"})))):O});t.Z=d},223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(1400),i=r(7335),o=i._(r(9918)),a=n._(r(1224)),l=r(5218),u=r(5807),s=r(7965);r(5777);let c=n._(r(1274)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:l,imgStyle:u,blurStyle:s,isLazy:c,fetchPriority:d,fill:f,placeholder:p,loading:h,srcString:b,config:v,unoptimized:y,loader:w,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:P,setShowAltText:j,onLoad:x,onError:C,...S}=e;return h=c?"lazy":h,o.default.createElement("img",{...S,...g(d),loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...u,...s},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,b,p,_,E,P,y))},[b,p,_,E,P,C,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,p,_,E,P,y)},onError:e=>{j(!0),"blur"===p&&P(!0),C&&C(e)}})}),b=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:m,sizes:b,unoptimized:v=!1,priority:y=!1,loading:w,className:_,quality:E,width:P,height:j,fill:x,style:C,onLoad:S,onLoadingComplete:O,placeholder:k="empty",blurDataURL:M,fetchPriority:I,layout:A,objectFit:z,objectPosition:R,lazyBoundary:F,lazyRoot:G,...W}=e,N=(0,o.useContext)(s.ImageConfigContext),U=(0,o.useMemo)(()=>{let e=d||N||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[N]),B=W.loader||c.default;delete W.loader;let D="__next_img_default"in B;if(D){if("custom"===U.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!b&&(b=t)}let L="",T=p(P),J=p(j);if("object"==typeof(r=m)&&(f(r)||void 0!==r.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,L=e.src,!x){if(T||J){if(T&&!J){let t=T/e.width;J=Math.round(e.height*t)}else if(!T&&J){let t=J/e.height;T=Math.round(e.width*t)}}else T=e.width,J=e.height}}let V=!y&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:L)||m.startsWith("data:")||m.startsWith("blob:"))&&(v=!0,V=!1),U.unoptimized&&(v=!0),D&&m.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(v=!0),y&&(I="high");let[H,q]=(0,o.useState)(!1),[$,Y]=(0,o.useState)(!1),Z=p(E),K=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:R}:{},$?{}:{color:"transparent"},C),Q="blur"===k&&M&&!H?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:T,heightInt:J,blurWidth:n,blurHeight:i,blurDataURL:M,objectFit:K.objectFit})+'")'}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:o,width:u[c]})}}({config:U,src:m,unoptimized:v,width:T,quality:Z,sizes:b,loader:B}),ee=m,et=(0,o.useRef)(S);(0,o.useEffect)(()=>{et.current=S},[S]);let er=(0,o.useRef)(O);(0,o.useEffect)(()=>{er.current=O},[O]);let en={isLazy:V,imgAttributes:X,heightInt:J,widthInt:T,qualityInt:Z,className:_,imgStyle:K,blurStyle:Q,loading:w,config:U,fetchPriority:I,fill:x,unoptimized:v,placeholder:k,loader:B,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:q,setShowAltText:Y,...W};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...en,ref:t}),y?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src,imageSrcSet:X.srcSet,imageSizes:X.sizes,crossOrigin:W.crossOrigin,referrerPolicy:W.referrerPolicy,...g(I)})):null)}),v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},120:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(1400),i=n._(r(9918)),o=i.default.createContext({})},5008:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(1400),i=r(7335),o=i._(r(9918)),a=n._(r(6850)),l=r(120),u=r(7551),s=r(5008);function c(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(5777);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5218:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n||t,u=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7965:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(1400),i=n._(r(9918)),o=r(5807),a=i.default.createContext(o.imageConfigDefault)},5807:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1274:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},6850:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(7335),i=n._(r(9918)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5777:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1240:function(){},1234:function(e,t,r){e.exports=r(223)}}]);