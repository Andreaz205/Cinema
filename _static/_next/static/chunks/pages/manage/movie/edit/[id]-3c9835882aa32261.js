(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{33226:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/movie/edit/[id]",function(){return n(47966)}])},36604:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var t=n(85893),i=n(77840),o=n.n(i),a=n(89583),u=[{title:"Statistics",link:(0,a.wk)()},{title:"Users",link:(0,a.A7)("users")},{title:"Movies",link:(0,a.A7)("movies")},{title:"Actors",link:(0,a.A7)("actors")},{title:"Genres",link:(0,a.A7)("genres")}],s=n(14924),l=n(11163),c=n(41664),d=n.n(c),f=n(94184),m=n.n(f),p=function(e){var r=e.item,n=r.link,i=r.title,a=(0,l.useRouter)().asPath;return(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:n,children:(0,t.jsx)("a",{className:m()((0,s.Z)({},o().active,a===n)),children:i})})})},h=function(){return(0,t.jsx)("nav",{className:o().nav,children:(0,t.jsx)("ul",{children:u.map((function(e){return(0,t.jsx)(p,{item:e},e.link)}))})})}},10073:function(e,r,n){"use strict";var t=n(26042),i=n(69396),o=n(99534),a=n(85893),u=n(94184),s=n.n(u),l=n(15262),c=n.n(l);r.Z=function(e){var r=e.children,n=e.className,u=(0,o.Z)(e,["children","className"]);return(0,a.jsx)("button",(0,i.Z)((0,t.Z)({className:s()(c().button,n)},u),{children:r}))}},73789:function(e,r,n){"use strict";var t=n(26042),i=n(99534),o=n(85893),a=n(67294),u=n(94184),s=n.n(u),l=n(15262),c=n.n(l),d=(0,a.forwardRef)((function(e,r){var n=e.placeholder,a=e.error,u=e.type,l=void 0===u?"text":u,d=e.style,f=(0,i.Z)(e,["placeholder","error","type","style"]);return(0,o.jsxs)("div",{className:s()(c().common,c().field),style:d,children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)("input",(0,t.Z)({type:l,ref:r},f))]}),a&&(0,o.jsx)("div",{className:c().error,children:a.message})]})}));d.displayName="Field",r.Z=d},344:function(e,r,n){"use strict";var t=n(26042),i=n(69396),o=n(85893),a=n(2439),u=n.n(a),s=n(73789);r.Z=function(e){var r=e.generate,n=e.register,a=e.error;return(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)(s.Z,(0,i.Z)((0,t.Z)({},n("slug",{required:"Slug is required!"})),{placeholder:"Slug",error:a})),(0,o.jsx)("div",{className:u().badge,onClick:r,children:"Generate"})]})}},10580:function(e,r,n){"use strict";n.d(r,{Z:function(){return _}});var t=n(85893),i=n(47568),o=n(70655),a=n(67294),u=n(88767),s=n(84714),l=function(e,r){return(0,i.Z)((function(){var n;return(0,o.__generator)(this,(function(t){return console.log("hi"),n={},[2,s.ZP.post("/files",e,(n.params={folder:r},n.headers={"Content-Type":"multipart/form-data"},n))]}))}))()},c=n(88116),d=n(94184),f=n.n(d),m=n(15262),p=n.n(m),h=n(4663),v=n(25675),g=n.n(v),_=function(e){var r=e.onChange,n=e.placeholder,s=e.error,d=e.folder,m=e.isNoImage,v=void 0!==m&&m,_=(e.style,e.value),x=function(e,r){var n=(0,a.useState)(!1),t=n[0],s=n[1],d=(0,u.useMutation)("upload file",(function(e){return l(e,r)}),{onSuccess:function(r){var n=r.data;e(n[0].url),console.log(n[0].url)},onError:function(e){(0,c._)(e,"Upload file")}}).mutateAsync,f=(0,a.useCallback)(function(){var e=(0,i.Z)((function(e){var r,n;return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return s(!0),(null===(r=e.target.files)||void 0===r?void 0:r.length)?((n=new FormData).append("image",r[0]),[4,d(n)]):[2];case 1:return t.sent(),setTimeout((function(){s(!1)}),1e3),[2]}}))}));return function(r){return e.apply(this,arguments)}}(),[d]);return(0,a.useMemo)((function(){return{uploadFile:f,isLoading:t}}),[f,t])}(r,d),j=x.isLoading,Z=x.uploadFile;return(0,t.jsx)("div",{className:f()(p().field,p().uploadField),children:(0,t.jsxs)("div",{className:p().uploadFlex,children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:n}),(0,t.jsx)("input",{type:"file",onChange:Z}),s&&(0,t.jsx)("div",{className:p().error,children:s.message})]}),!v&&(0,t.jsx)("div",{className:p().uploadImageContainer,children:j?(0,t.jsx)(h.Z,{count:1,className:"w-full h-full"}):_&&(0,t.jsx)(g(),{alt:"",src:_,layout:"fill",unoptimized:!0})})]})})}},62289:function(e,r,n){"use strict";var t=n(85893);r.Z=function(e){var r=e.title,n=e.className;return(0,t.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===n||void 0===n?void 0:n.includes("xl"))?"":"text-3xl"," ").concat(n),children:r})}},53908:function(e,r,n){"use strict";n.d(r,{V:function(){return u}});var t=n(47568),i=n(70655),o=n(18016),a=n(84714),u={getAll:function(e){return(0,t.Z)((function(){var r;return(0,i.__generator)(this,(function(n){return r={},[2,a.vV.get((0,o.q2)(""),(r.params=e?{searchTerm:e}:{},r))]}))}))()},getBySlug:function(e){return(0,t.Z)((function(){return(0,i.__generator)(this,(function(r){return[2,a.vV.get((0,o.q2)("/by-slug/".concat(e)))]}))}))()},deleteActor:function(e){return(0,t.Z)((function(){return(0,i.__generator)(this,(function(r){return[2,a.ZP.delete((0,o.q2)("/".concat(e)))]}))}))()},create:function(){return(0,t.Z)((function(){return(0,i.__generator)(this,(function(e){return[2,a.ZP.post((0,o.q2)("/"))]}))}))()},getById:function(e){return(0,t.Z)((function(){return(0,i.__generator)(this,(function(r){return[2,a.ZP.get((0,o.q2)("/".concat(e)))]}))}))()},update:function(e,r){return(0,t.Z)((function(){return(0,i.__generator)(this,(function(n){return[2,a.ZP.put((0,o.q2)("/".concat(e)),r)]}))}))()}}},45495:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(85893),i=n(9008),o=n.n(i),a=n(11163),u="Online cinema",s=function(e){return"".concat(e," | ").concat(u)},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return r&&(n=n.slice(0,r)+"..."),n},c=n(76983),d=function(e){var r=e.title,n=e.description,i=e.image,d=e.children,f=(0,a.useRouter)().asPath,m="".concat("http://localhost:3000").concat(f);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{itemProp:"headline",children:s(r)}),n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{itemProp:"description",name:"description",content:l(n,152)}),(0,t.jsx)("link",{rel:"canonical",href:m}),(0,t.jsx)("meta",{property:"og:locale",content:"en"}),(0,t.jsx)("meta",{property:"og:title",content:s(r)}),(0,t.jsx)("meta",{property:"og:url",content:m}),(0,t.jsx)("meta",{property:"og:image",content:i||c.Z}),(0,t.jsx)("meta",{property:"og:site_name",content:u}),(0,t.jsx)("meta",{property:"og:description",content:l(n,197)})]}):(0,t.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),d]})}},96228:function(e,r,n){"use strict";n.d(r,{R:function(){return t}});var t=function(e){return Object.keys(e)}},85219:function(e,r){"use strict";r.Z=function(e){var r=e.replace(/[\s]+/gi,"-");return r=function(e){for(var r="\u0410-\u0430-\u0411-\u0431-\u0412-\u0432-\u0490-\u0491-\u0413-\u0433-\u0414-\u0434-\u0415-\u0435-\u0401-\u0451-\u0404-\u0454-\u0416-\u0436-\u0417-\u0437-\u0418-\u0438-\u0406-\u0456-\u0407-\u0457-\u0419-\u0439-\u041a-\u043a-\u041b-\u043b-\u041c-\u043c-\u041d-\u043d-\u041e-\u043e-\u041f-\u043f-\u0420-\u0440-\u0421-\u0441-\u0422-\u0442-\u0423-\u0443-\u0424-\u0444-\u0425-\u0445-\u0426-\u0446-\u0427-\u0447-\u0428-\u0448-\u0429-\u0449-\u042a-\u044a-\u042b-\u044b-\u042c-\u044c-\u042d-\u044d-\u042e-\u044e-\u042f-\u044f".split("-"),n="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),t="",i=0,o=e.length;i<o;i++){var a=e.charAt(i),u=r.indexOf(a);t+=u>=0?n[u]:a}return t}(r),r=r.replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},47966:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return k}});var t=n(85893),i=n(26042),o=n(69396),a=n(87536),u=n(47568),s=n(70655),l=n(11163),c=n(88767),d=n(88116),f=n(96228),m=n(16938),p=n(89583),h=n(76962),v=n(45495),g=n(36604),_=n(62289),x=n(4663),j=n(73789),Z=n(344),y=n(85219),b=n(10073),F=n(46639),N=n.n(F),C=n(10580),q=n(10538),S=n(53908),w=n(5152),A=n.n(w)()((function(){return Promise.all([n.e(334),n.e(336)]).then(n.bind(n,33336))}),{loadableGenerated:{webpack:function(){return[33336]}},ssr:!1}),P=function(){var e,r,n,F=(0,a.cI)({mode:"onChange"}),w=F.handleSubmit,P=F.register,E=F.formState.errors,k=F.setValue,D=F.getValues,L=F.control,T=function(e){var r=(0,l.useRouter)(),n=r.push,t=r.query,i=String(t.id),o=(0,c.useQuery)(["movie",i],(function(){return h.u.getById(i)}),{onSuccess:function(r){var n=r.data;(0,f.R)(n).forEach((function(r){e(r,n[r])}))},onError:function(e){(0,d._)(e,"Get movie")},enabled:!!t.id}).isLoading,a=(0,c.useMutation)("update movie",(function(e){return h.u.update(i,e)}),{onError:function(e){(0,d._)(e,"Update movie")},onSuccess:function(){m.Rt.success("Update movie","update was successful"),n((0,p.A7)("movies"))}}).mutateAsync,v=function(){var e=(0,u.Z)((function(e){return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,a(e)];case 1:return r.sent(),[2]}}))}));return function(r){return e.apply(this,arguments)}}();return{onSubmit:v,isLoading:o}}(k),V=T.isLoading,I=T.onSubmit,Q=(0,c.useQuery)("List of genres",(function(){return q.c.getAll()}),{select:function(e){return e.data.map((function(e){return{label:e.name,value:e._id}}))},onError:function(e){return(0,d._)(e,"Actor list")}}),U=Q.isLoading,G=Q.data,M=(0,c.useQuery)("List of actor",(function(){return S.V.getAll()}),{select:function(e){return e.data.map((function(e){return{label:e.name,value:e._id}}))},onError:function(e){return(0,d._)(e,"Actor list")}}),R=M.isLoading,Y=M.data;return(0,t.jsxs)(v.Z,{title:"Edit movie",children:[(0,t.jsx)(g.Z,{}),(0,t.jsx)(_.Z,{title:"Edit movie"}),(0,t.jsx)("form",{className:N().form,onSubmit:w(I),children:V?(0,t.jsx)(x.Z,{count:3}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:N().fields,children:[(0,t.jsx)(j.Z,(0,o.Z)((0,i.Z)({},P("title",{required:"Title is required!"})),{placeholder:"Title",error:E.title})),(0,t.jsx)(Z.Z,{register:P,generate:function(){k("slug",(0,y.Z)(D("title")))},error:E.slug}),(0,t.jsx)(j.Z,(0,o.Z)((0,i.Z)({},P("parameters.country",{required:"Country is required!"})),{placeholder:"Country",error:null===(e=E.parameters)||void 0===e?void 0:e.country,style:{width:"31%"}})),(0,t.jsx)(j.Z,(0,o.Z)((0,i.Z)({},P("parameters.duration",{required:"Duration is required!"})),{placeholder:"Duration",error:null===(r=E.parameters)||void 0===r?void 0:r.duration,style:{width:"31%"}})),(0,t.jsx)(j.Z,(0,o.Z)((0,i.Z)({},P("parameters.year",{required:"Year is required!"})),{placeholder:"Year",error:null===(n=E.parameters)||void 0===n?void 0:n.year,style:{width:"31%"}})),(0,t.jsx)(a.Qr,{control:L,name:"genres",render:function(e){var r=e.field,n=e.fieldState.error;return(0,t.jsx)(A,{field:r,options:G||[],isLoading:U,isMulti:!0,placeholder:"Genres",error:n})},rules:{required:"Please select at least one genres!"}}),(0,t.jsx)(a.Qr,{control:L,name:"actors",render:function(e){var r=e.field,n=e.fieldState.error;return(0,t.jsx)(A,{field:r,options:Y||[],isLoading:R,isMulti:!0,placeholder:"Actors",error:n})},rules:{required:"Please select at least one actor!"}}),(0,t.jsx)(a.Qr,{control:L,name:"poster",defaultValue:"",render:function(e){var r=e.field,n=r.value,i=r.onChange,o=e.fieldState.error;return(0,t.jsx)(C.Z,{onChange:i,error:o,placeholder:"Poster",value:n,folder:"movies"})},rules:{required:"Poster is required!"}}),(0,t.jsx)(a.Qr,{control:L,name:"bigPoster",defaultValue:"",render:function(e){var r=e.field,n=r.value,i=r.onChange,o=e.fieldState.error;return(0,t.jsx)(C.Z,{onChange:i,error:o,placeholder:"Big poster",value:n,folder:"movies"})},rules:{required:"Big poster is required!"}}),(0,t.jsx)(a.Qr,{control:L,name:"videoUrl",defaultValue:"",render:function(e){var r=e.field,n=r.value,i=r.onChange,o=e.fieldState.error;return(0,t.jsx)(C.Z,{onChange:i,error:o,placeholder:"Video",value:n,folder:"movies",style:{marginTop:-25},isNoImage:!0})},rules:{required:"Video is required!"}})]}),(0,t.jsx)(b.Z,{children:"Update"})]})})]})},E=function(){return(0,t.jsx)(P,{})};E.isOnlyAdmin=!0;var k=E},77840:function(e){e.exports={nav:"AdminNavigation_nav__jmpMb",active:"AdminNavigation_active__DYQnj"}},2439:function(e){e.exports={badge:"SlugField_badge__pd3af"}},46639:function(e){e.exports={form:"admin-form_form__CY7pU",fields:"admin-form_fields__r6P1o"}},15262:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw"}}},function(e){e.O(0,[536,774,888,179],(function(){return r=33226,e(e.s=r);var r}));var r=e.O();_N_E=r}]);