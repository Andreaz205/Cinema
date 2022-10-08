(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{2304:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return t(8082)}])},59951:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(26042),o=t(85893),i=t(73789),s=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,a=function(e){var r=e.register,t=e.formState.errors,a=e.isPasswordRequired,c=void 0!==a&&a;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,(0,n.Z)({placeholder:"E-mail",error:t.email},r("email",{required:"Email is required",pattern:{value:s,message:"Please enter a valid email address"}}))),(0,o.jsx)(i.Z,(0,n.Z)({placeholder:"Password",type:"password",error:t.password},r("password",c?{required:"Password is required",minLength:{value:6,message:"Min length should be more 6 symbols"}}:{})))]})}},10073:function(e,r,t){"use strict";var n=t(26042),o=t(69396),i=t(99534),s=t(85893),a=t(94184),c=t.n(a),l=t(15262),u=t.n(l);r.Z=function(e){var r=e.children,t=e.className,a=(0,i.Z)(e,["children","className"]);return(0,s.jsx)("button",(0,o.Z)((0,n.Z)({className:c()(u().button,t)},a),{children:r}))}},73789:function(e,r,t){"use strict";var n=t(26042),o=t(99534),i=t(85893),s=t(67294),a=t(94184),c=t.n(a),l=t(15262),u=t.n(l),d=(0,s.forwardRef)((function(e,r){var t=e.placeholder,s=e.error,a=e.type,l=void 0===a?"text":a,d=e.style,m=(0,o.Z)(e,["placeholder","error","type","style"]);return(0,i.jsxs)("div",{className:c()(u().common,u().field),style:d,children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)("input",(0,n.Z)({type:l,ref:r},m))]}),s&&(0,i.jsx)("div",{className:u().error,children:s.message})]})}));d.displayName="Field",r.Z=d},62289:function(e,r,t){"use strict";var n=t(85893);r.Z=function(e){var r=e.title,t=e.className;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===t||void 0===t?void 0:t.includes("xl"))?"":"text-3xl"," ").concat(t),children:r})}},45495:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(85893),o=t(9008),i=t.n(o),s=t(11163),a="Online cinema",c=function(e){return"".concat(e," | ").concat(a)},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return r&&(t=t.slice(0,r)+"..."),t},u=t(76983),d=function(e){var r=e.title,t=e.description,o=e.image,d=e.children,m=(0,s.useRouter)().asPath,p="".concat("http://localhost:3000").concat(m);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{itemProp:"headline",children:c(r)}),t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{itemProp:"description",name:"description",content:l(t,152)}),(0,n.jsx)("link",{rel:"canonical",href:p}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:c(r)}),(0,n.jsx)("meta",{property:"og:url",content:p}),(0,n.jsx)("meta",{property:"og:image",content:o||u.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:a}),(0,n.jsx)("meta",{property:"og:description",content:l(t,197)})]}):(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),d]})}},8082:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(85893),o=t(67294),i=t(51163),s=t(11163),a=t(87536),c=t(96925),l=t.n(c),u=t(45495),d=t(62289),m=t(10073),p=t(59951),f=t(44318),_=function(){!function(){var e=(0,i.a)().user,r=(0,s.useRouter)(),t=r.query,n=r.push,a=t.redirect?String(t.redirect):"/";(0,o.useEffect)((function(){e&&n(a)}),[e,a,n])}();var e=(0,i.a)().isLoading,r=(0,o.useState)("login"),t=r[0],c=r[1],_=(0,a.cI)({mode:"onChange"}),h=_.register,x=_.handleSubmit,g=_.formState,j=_.reset,v=(0,f.o)(),F=v.login,Z=v.register;return(0,n.jsx)(u.Z,{title:"Auth",children:(0,n.jsx)("section",{className:l().wrapper,children:(0,n.jsxs)("form",{onSubmit:x((function(e){"login"===t?F(e):"register"===t&&Z(e),j()})),children:[(0,n.jsx)(d.Z,{title:"Auth",className:"mb-6"}),(0,n.jsx)(p.Z,{isPasswordRequired:!0,register:h,formState:g}),(0,n.jsxs)("div",{className:l().buttons,children:[(0,n.jsx)(m.Z,{type:"submit",onClick:function(){return c("login")},disabled:e,children:"Login"}),(0,n.jsx)(m.Z,{type:"submit",onClick:function(){return c("register")},disabled:e,children:"Register"})]})]})})})},h=function(){return(0,n.jsx)(_,{})}},96925:function(e){e.exports={wrapper:"Auth_wrapper__q3sYo",buttons:"Auth_buttons__PYWyy"}},15262:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw"}}},function(e){e.O(0,[536,774,888,179],(function(){return r=2304,e(e.s=r);var r}));var r=e.O();_N_E=r}]);