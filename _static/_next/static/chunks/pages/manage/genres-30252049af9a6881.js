(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{12695:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/genres",function(){return t(28241)}])},36604:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(85893),i=t(77840),s=t.n(i),c=t(89583),o=[{title:"Statistics",link:(0,c.wk)()},{title:"Users",link:(0,c.A7)("users")},{title:"Movies",link:(0,c.A7)("movies")},{title:"Actors",link:(0,c.A7)("actors")},{title:"Genres",link:(0,c.A7)("genres")}],a=t(14924),u=t(11163),l=t(41664),d=t.n(l),m=t(94184),f=t.n(m),_=function(e){var n=e.item,t=n.link,i=n.title,c=(0,u.useRouter)().asPath;return(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:t,children:(0,r.jsx)("a",{className:f()((0,a.Z)({},s().active,c===t)),children:i})})})},h=function(){return(0,r.jsx)("nav",{className:s().nav,children:(0,r.jsx)("ul",{children:o.map((function(e){return(0,r.jsx)(_,{item:e},e.link)}))})})}},3188:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(58431),s=t.n(i),c=t(43631),o=t(10073),a=function(e){var n=e.onClick;return(0,r.jsx)(o.Z,{onClick:n,children:"Create new"})},u=function(e){var n=e.onClick,t=e.handleSearch,i=e.searchTerm;return(0,r.jsxs)("div",{className:s().header,children:[(0,r.jsx)(c.Z,{searchTerm:i,handleSearch:t}),n&&(0,r.jsx)(a,{onClick:n})]})}},8814:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(85893),i=t(94184),s=t.n(i),c=t(44131),o=t.n(c),a=function(e){var n=e.headerItems;return(0,r.jsxs)("div",{className:s()(o().item,o().itemHeader),children:[n.map((function(e){return(0,r.jsx)("div",{children:e},e)})),(0,r.jsx)("div",{children:"Actions"})]})},u=t(4663),l=t(11163),d=t(68400),m=t.n(d),f=t(37416),_=function(e){var n=e.editUrl,t=e.removeHandler,i=(0,l.useRouter)().push;return(0,r.jsxs)("div",{className:m().actions,children:[(0,r.jsx)("button",{onClick:function(){return i(n)},children:(0,r.jsx)(f.Z,{name:"MdEdit"})}),(0,r.jsx)("button",{onClick:t,children:(0,r.jsx)(f.Z,{name:"MdClose"})})]})},h=function(e){var n=e.removeHandler,t=e.tableItem;return(0,r.jsxs)("div",{className:s()(o().item),children:[t.items.map((function(e){return(0,r.jsx)("div",{children:e},e)})),(0,r.jsx)(_,{editUrl:t.editUrl,removeHandler:n})]})},x=function(e){var n=e.headerItems,t=e.isLoading,i=e.tableItems,s=e.removeHandler;return(0,r.jsxs)("div",{children:[(0,r.jsx)(a,{headerItems:n}),t?(0,r.jsx)(u.Z,{count:1,height:48,className:"mt-4"}):i.length?i.map((function(e){return(0,r.jsx)(h,{tableItem:e,removeHandler:function(){return s(e._id)}},e._id)})):(0,r.jsx)("div",{className:o().notFound,children:"Elements not found"})]})}},10073:function(e,n,t){"use strict";var r=t(26042),i=t(69396),s=t(99534),c=t(85893),o=t(94184),a=t.n(o),u=t(15262),l=t.n(u);n.Z=function(e){var n=e.children,t=e.className,o=(0,s.Z)(e,["children","className"]);return(0,c.jsx)("button",(0,i.Z)((0,r.Z)({className:a()(l().button,t)},o),{children:n}))}},62289:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.title,t=e.className;return(0,r.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null===t||void 0===t?void 0:t.includes("xl"))?"":"text-3xl"," ").concat(t),children:n})}},45495:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(85893),i=t(9008),s=t.n(i),c=t(11163),o="Online cinema",a=function(e){return"".concat(e," | ").concat(o)},u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return n&&(t=t.slice(0,n)+"..."),t},l=t(76983),d=function(e){var n=e.title,t=e.description,i=e.image,d=e.children,m=(0,c.useRouter)().asPath,f="".concat("http://localhost:3000").concat(m);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{itemProp:"headline",children:a(n)}),t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{itemProp:"description",name:"description",content:u(t,152)}),(0,r.jsx)("link",{rel:"canonical",href:f}),(0,r.jsx)("meta",{property:"og:locale",content:"en"}),(0,r.jsx)("meta",{property:"og:title",content:a(n)}),(0,r.jsx)("meta",{property:"og:url",content:f}),(0,r.jsx)("meta",{property:"og:image",content:i||l.Z}),(0,r.jsx)("meta",{property:"og:site_name",content:o}),(0,r.jsx)("meta",{property:"og:description",content:u(t,197)})]}):(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),d]})}},28241:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(85893),i=t(45495),s=t(36604),c=t(62289),o=t(3188),a=t(8814),u=t(26042),l=t(69396),d=t(67294),m=t(43489),f=t(88767),_=t(10538),h=t(89583),x=t(88116),p=t(16938),v=t(11163),j=function(){var e=function(){var e=(0,d.useState)(""),n=e[0],t=e[1],r=(0,m.N)(n,500),i=(0,f.useQuery)(["genres list",r],(function(){return _.c.getAll(r)}),{select:function(e){return e.data.map((function(e){return{_id:e._id,editUrl:(0,h.A7)("genre/edit/".concat(e._id)),items:[e.name,e.slug]}}))},onError:function(e){return(0,x._)(e,"Genre list")}}),s=function(e){t(e.target.value)},c=(0,f.useMutation)("delete genres",(function(e){return _.c.delete(e)}),{onError:function(e){(0,x._)(e,"Delete genres")},onSuccess:function(){p.Rt.success("Delete genres","delete was successful"),i.refetch()}}).mutateAsync,o=(0,v.useRouter)().push,a=(0,f.useMutation)("create genres",(function(){return _.c.create()}),{onError:function(e){(0,x._)(e,"Create genres")},onSuccess:function(e){var n=e.data;p.Rt.success("Create genres","Create was successful"),o((0,h.A7)("genre/edit/".concat(n)))}}).mutateAsync;return(0,d.useMemo)((function(){return(0,l.Z)((0,u.Z)({handleSearch:s},i),{searchTerm:n,deleteAsync:c,createAsync:a})}),[i,n,c,a])}(),n=e.handleSearch,t=e.isLoading,j=e.searchTerm,g=e.data,A=e.deleteAsync,F=e.createAsync;return(0,r.jsxs)(i.Z,{title:"Genres",children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(c.Z,{title:"Genres"}),(0,r.jsx)(o.Z,{handleSearch:n,searchTerm:j,onClick:F}),(0,r.jsx)(a.Z,{isLoading:t,removeHandler:A,headerItems:["Name","Slug"],tableItems:g||[]})]})},g=function(){return(0,r.jsx)(j,{})};g.isOnlyAdmin=!0;var A=g},77840:function(e){e.exports={nav:"AdminNavigation_nav__jmpMb",active:"AdminNavigation_active__DYQnj"}},58431:function(e){e.exports={header:"AdminHeader_header__nQp9V"}},68400:function(e){e.exports={actions:"AdminActions_actions__luRzF","first-child":"AdminActions_first-child__7wfH1"}},44131:function(e){e.exports={item:"AdminTable_item__2GK1y",itemHeader:"AdminTable_itemHeader__pYYir",notFound:"AdminTable_notFound__UWbaX"}},15262:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw"}}},function(e){e.O(0,[774,888,179],(function(){return n=12695,e(e.s=n);var n}));var n=e.O();_N_E=n}]);