(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{303:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return j}));var n=r(16),i=r(307);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const s={N05:"#F4F5F7",N10:"#EBECF0",N15:"#DFE1E5",N20:"#C1C7D0",N30:"#A5ADBA",N40:"#97A0AF",N50:"#7A869A",N60:"#6C798F",N70:"#42526E",N80:"#253858",N90:"#172B4D",N100:"#091E42"},c=Array.from(new Array(19),(e,t)=>5*(t+1)),l=c.slice(0,16).reverse();function b(e){const t={};return c.forEach(r=>t["L"+r]=Object(i.c)(e,r)),t.base=e,l.forEach(r=>t["D"+r]=Object(i.b)(e,r)),c.forEach(r=>t["A"+r]=Object(i.a)(e,r/100)),t}const u=b("#2684FF"),d=b("#34c240");var p=a(a(a({R:b("#d64242"),G:d,B:u,Y:b("#fa9f47")},s),{},{page:"#FAFBFC",text:s.N90},{create:"#34c240",danger:"#d64242",info:"#0090e0",primary:"#2684FF",warning:"#fa9f47"}),{},{green:"#34c240",red:"#d64242",blue:"#2684FF",yellow:"#fa9f47"});const f=e=>`rgba(9, 30, 66, ${e})`,g=(f(.12),f(.12),f(.12),f(.08),f(.24),f(.08),'\n  -apple-system,\n  BlinkMacSystemFont,\n  "Segoe UI",\n  Roboto,\n  Helvetica,\n  Arial,\n  sans-serif,\n  "Apple Color Emoji",\n  "Segoe UI Emoji",\n  "Segoe UI Symbol"\n'),m=g.replace("BlinkMacSystemFont,",""),h=6,j=8;p.page,p.text,p.primary},307:function(e,t,r){"use strict";function n(e){if(e.length>7)return function(e){const t=e.substring(4,e.length-1).replace(/ /g,"").split(",");return{r:parseInt(t[0],10),g:parseInt(t[1],10),b:parseInt(t[2],10)}}(e);return function(e){return{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16)}}(function(e){const t=e.replace("#","");if(3===t.length)return t[0]+t[0]+t[1]+t[1]+t[2]+t[2];if(6!==t.length)throw new Error('Invalid color value provided: "'.concat(e,'"'));return t}(e))}function i({r:e,g:t,b:r,a:n}){return n?"rgba(".concat([e,t,r,n].join(","),")"):"rgb(".concat([e,t,r].join(","),")")}function o(e,t=1){const{r:r,g:o,b:a}=n(e);return i({r:r,g:o,b:a,a:t})}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c}));const a=(e,t,r)=>Math.round((t-e)*r)+e;function s(e,t){const r=t/100,{r:o,g:s,b:c}=n(e),l=r<0?0:255,b=Math.abs(r);return i({r:a(o,l,b),g:a(s,l,b),b:a(c,l,b)})}const c=s;function l(e,t){return s(e,-1*t)}},308:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return o}))},445:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(16);var n=r(5),i=r(8),o=r(1),a=r(23).a.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){a[e]=a(e)}));var s=a,c=r(303);s.span({color:c.b.N60}),s.h1({fontSize:28,fontWeight:300,margin:"24px 0"}),s.h1({fontSize:"2.4rem",fontWeight:900,marginBottom:"0.5em",marginTop:"1.0rem"}),s.kbd({backgroundColor:c.b.N05,border:"1px solid "+c.b.N20,borderRadius:3,boxShadow:"0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset",display:"inline-block",fontFamily:"Monaco, monospace",fontSize:"0.85em",fontWeight:"bold",lineHeight:"inherit",padding:"1px 5px",position:"relative",top:"-1px",verticalAlign:"middle",whiteSpace:"nowrap"});const l=e=>{let{tag:t="span"}=e,r=Object(i.a)(e,["tag"]);return Object(o.jsx)(t,Object(n.a)({css:{border:0,clip:"rect(1px, 1px, 1px, 1px)",height:1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:1}},r))}},449:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(5),i=r(308),o=r(8),a=r(1),s=r(14),c=r(111),l=r(12),b=(r(309),r(0));const u=Object(b.forwardRef)(({data:e,loading:t,value:r,refList:u,canRead:d,isMulti:p,search:f,autoFocus:g,serverErrors:m,onChange:h,htmlID:j,setSearch:O,selectProps:y,fetchMore:v,isDisabled:x},w)=>{const k=e&&e[u.gqlNames.listQueryName]?e[u.gqlNames.listQueryName].map(e=>({value:e,label:e._label_})):[],D=m&&m.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);let P=null;const S=e=>"string"==typeof e?k.find(t=>t.value.id===e)||{label:e,value:e}:{label:e._label_,value:e};null!==r&&d&&(p?P=(Array.isArray(r)?r:[]).map(S):r&&(P=S(r)));const N=e&&e[u.gqlNames.listQueryMetaName]?e[u.gqlNames.listQueryMetaName].count:0,C=Object(b.useMemo)(()=>({MenuList:e=>{let{children:t}=e,r=Object(o.a)(e,["children"]);const n=Object(b.useRef)(null),c=s.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              ${u.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                _label_
                id
              }
            }
          `;return function(e,t){Object(b.useEffect)(()=>{let r=new IntersectionObserver(e,{}),n=t.current;if(null!==n)return r.observe(n),()=>r.unobserve(n)})}(([{isIntersecting:e}])=>{!r.isLoading&&e&&r.options.length<N&&v({query:c,variables:{search:f,first:50,skip:r.options.length},updateQuery:(e,{fetchMoreResult:t})=>t?Object(i.a)(Object(i.a)({},e),{},{[u.gqlNames.listQueryName]:[...e[u.gqlNames.listQueryName],...t[u.gqlNames.listQueryName]]}):e})},n),Object(a.jsx)(l.f.MenuList,r,t,Object(a.jsx)("div",{css:{textAlign:"center"},ref:n},r.options.length<N&&Object(a.jsx)("span",{css:{padding:8}},"Loading...")))}}),[N,u.gqlNames.listQueryName]);return Object(a.jsx)(c.a,Object(n.a)({onInputChange:e=>O(e),isLoading:t,autoFocus:g,isMulti:p,components:C,getOptionValue:e=>e.value.id,value:P,placeholder:d?void 0:D&&D.message,options:k,onChange:h,id:"react-select-"+j,isClearable:!0,instanceId:j,inputId:j,innerRef:w,menuPortalTarget:document.body,isDisabled:x},y))}),d=({innerRef:e,autoFocus:t,field:r,errors:n,renderContext:i,htmlID:o,onChange:c,isMulti:l,value:d,isDisabled:p})=>{const[f,g]=Object(b.useState)(""),m=r.getRefList(),h=s.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      ${m.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        _label_
        id
      }

      ${m.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `,j=!n||n.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),O="dialog"===i?{menuShouldBlockScroll:!0}:null,{data:y,error:v,loading:x,fetchMore:w}=Object(s.useQuery)(h,{fetchPolicy:"network-only",variables:{search:f,first:10,skip:0}});return v?(console.log("ERROR!!!",v),"Error"):Object(a.jsx)(u,{data:y,loading:x,value:d,refList:m,canRead:j,isMulti:l,search:f,autoFocus:t,serverErrors:n,onChange:c,htmlID:o,setSearch:g,selectProps:O,fetchMore:w,ref:e,isDisabled:p})}},452:function(e,t,r){"use strict";r.d(t,"a",(function(){return M})),r.d(t,"b",(function(){return L}));var n=r(5),i=r(8),o=r(0),a=r(1),s=r(23),c=s.a.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){c[e]=c(e)}));var l=c,b=r(16),u=s.a.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){u[e]=u(e)}));var d=u,p=r(303);r(445);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const m=a.keyframes`0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; }`,h={default:p.b.N20,dark:p.b.text,primary:p.b.primary,inverted:"white"},j=(d.div(({size:e})=>({alignSelf:"center",fontSize:e,lineHeight:1,textAlign:"center",verticalAlign:"middle",display:"inline-flex"})),d.span(({appearance:e,delay:t=0,isOffset:r})=>({animation:`${m} 1s infinite ${t}ms`,animationTimingFunction:"ease-in-out",backgroundColor:h[e],borderRadius:"1em",display:"inline-block",height:"1em",marginLeft:r?"1em":null,verticalAlign:"top",width:"1em"})),a.keyframes`to { transform: rotate(1turn); }`),O=({size:e})=>({borderRadius:"50%",borderStyle:"solid",borderWidth:e/8,boxSizing:"border-box",height:e,width:e});d.div(({size:e})=>({height:e,width:e,position:"relative"})),d.div(({color:e,size:t})=>g(g({},O({size:t})),{},{borderColor:e,opacity:.2,position:"relative"})),d.div(({color:e,size:t})=>g(g({},O({size:t})),{},{animation:j+" 1s linear infinite",borderColor:e+" transparent transparent",left:0,position:"absolute",top:0}));var y=r(28),v=r(87);const x={appearance:"none",background:"none",border:"1px solid transparent",borderRadius:p.a,boxSizing:"border-box",fontFamily:"inherit",fontSize:"1.0rem",margin:0,minWidth:1,padding:`${p.c}px ${1.5*p.c}px`,transition:"box-shadow 100ms linear",verticalAlign:"middle",whiteSpace:"nowrap"};var w=r(307);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P={default:{bg:"#fff",border:p.b.N20,focusRing:p.b.primary,text:p.b.text},primary:{bg:p.b.primary,border:p.b.primary,focusRing:null,text:"#fff"},create:{bg:p.b.create,border:p.b.create,focusRing:null,text:"#fff"},danger:{bg:p.b.danger,border:p.b.danger,focusRing:null,text:"#fff"},warning:{bg:p.b.warning,border:p.b.warning,focusRing:null,text:"#fff"}},S={default:{border:p.b.N20,text:p.b.N60},primary:{border:p.b.B.L50,text:p.b.primary},create:{border:p.b.G.L50,text:p.b.create},danger:{border:p.b.R.L50,text:p.b.danger},warning:{border:p.b.Y.L30,text:p.b.warning}},N={default:{text:p.b.N40,textHover:p.b.text},primary:{text:p.b.N40,textHover:p.b.primary},create:{text:null,textHover:null},warning:{text:p.b.N40,textHover:p.b.danger},danger:{text:p.b.danger,textHover:p.b.danger}},C={default:{text:p.b.text},primary:{text:p.b.primary},create:{text:null},warning:{text:p.b.danger},danger:{text:p.b.danger}};function E({appearance:e,isDisabled:t}){const{border:r,text:n}=S[e];return{border:"1px solid",borderColor:r,color:n,fontWeight:"normal",opacity:t?.5:null,":hover, :focus":{backgroundColor:Object(w.a)(r,.1),borderColor:Object(w.b)(r,10)},":active":{color:Object(w.b)(n,10),borderColor:Object(w.b)(r,20),backgroundColor:Object(w.a)(r,.2)}}}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const A={comfortable:`${p.c}px ${1.5*p.c}px`,cozy:"2px 6px",cramped:"1px 2px"};function $({appearance:e="default",isActive:t,isBlock:r,isHover:n,isFocus:i,isDisabled:o,isSelected:a,variant:s="bold",spacing:c="comfortable"}){let l;const b={appearance:e,isDisabled:o,isActive:t,isHover:n,isFocus:i,isSelected:a};return"subtle"===s?l=function({appearance:e}){const{text:t,textHover:r}=N[e];return{color:t,fontWeight:null,":hover, :focus":{color:r,textDecoration:"underline"}}}(b):"nuance"===s?l=function({appearance:e,isDisabled:t}){const{text:r}=C[e];return{color:r,fontWeight:"normal",":hover, :focus":E({appearance:e,isDisabled:t})}}(b):"bold"===s?l=function({appearance:e,isDisabled:t,isActive:r,isHover:n,isFocus:i,isSelected:o}){const{bg:a,border:s,focusRing:c,text:l}=P[e],b="default"===e?p.b.N10:Object(w.b)(a,12),u=n||i?{borderColor:s,background:a}:null,d=n?D(D({},u),{},{boxShadow:"0 1px 2px rgba(0, 0, 0, 0.12)"}):null,f=i&&!t?D(D({},u),{},{borderColor:c,boxShadow:"0 0 0 3px "+Object(w.a)(c||a,.2)}):null,g=r||o?{background:b,borderColor:s}:null;return D(D(D({backgroundColor:a,backgroundRepeat:"repeat-x",borderColor:s,color:l,fontWeight:"bold"},d),f),g)}(b):"ghost"===s&&(l=E(b)),R(R({},x),{},{cursor:o?"default":"pointer",display:r?"block":"inline-block",opacity:o?.66:null,outline:0,padding:A[c],pointerEvents:o?"none":null,textAlign:"center",touchAction:"manipulation",userSelect:"none",width:r?"100%":null,":hover":{textDecoration:"none"}},l)}function q(e,t){const{isDisabled:r,isActive:o,isFocus:s,isHover:c,isSelected:l,focusOrigin:b}=e,u=Object(i.a)(e,["isDisabled","isActive","isFocus","isHover","isSelected","focusOrigin"]),d=$(e);return u.to?Object(a.jsx)(y.b,Object(n.a)({ref:t,css:d},u)):u.href?Object(a.jsx)("a",Object(n.a)({css:d},u,{ref:t})):Object(a.jsx)("button",Object(n.a)({type:"button",disabled:r,css:d,ref:t},u))}const I=Object(o.forwardRef)(q),M=Object(v.withPseudoState)(I);l.div({position:"relative"}),l.div({left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"});const L=Object(o.forwardRef)((e,t)=>{let{children:r,icon:o,iconSize:s=16}=e,c=Object(i.a)(e,["children","icon","iconSize"]);return Object(a.jsx)(M,Object(n.a)({ref:t},c),Object(a.jsx)("span",{css:{display:"flex",alignItems:"center"}},Object(a.jsx)(o,{size:s,css:r?{marginRight:"0.5em"}:null}),r))})},472:function(e,t,r){"use strict";r.r(t);var n=r(308),i=r(1),o=r(0),a=r(14),s=r(82),c=r(10),l=r(303),b=r(452),u=r(65),d=r(449),p=r(169);r(150),r(149),r(111),r(309);function f({listKey:e,value:t,onAddUser:r,many:n,isDisabled:o}){const s="authenticated"+e,{data:d}=Object(a.useQuery)(a.gql`
    query User {
      ${s} {
        _label_
        id
      }
    }
  `);if(d&&d[s]){const e=d[s].id;if(null!==t&&(n?t.some(t=>t.id===e):t.id===e))return null;const a=`${n?"Add":"Set as"} ${d[s]._label_}`;return Object(i.jsx)(u.a,{placement:"top",content:a},e=>Object(i.jsx)(b.b,{css:{marginLeft:l.c},variant:"ghost",ref:e,onClick:()=>{r(d[s])},icon:c.n,"aria-label":a,isDisabled:o}))}return null}function g({field:e,value:t}){const{many:r}=e.config,{fullPath:n}=e.getRefList();let o,a=!1,s=n;return r?(o="View List of Related Items",t.length||(a=!0),s=`${s}?!id_in="${t.slice(0,100).map(({id:e})=>e).join(",")}"`):(o="View Item Details",t?s=`${s}/${t.id}`:a=!0),Object(i.jsx)(u.a,{placement:"top",content:o},e=>Object(i.jsx)(b.b,{ref:e,icon:c.k,"aria-label":o,variant:"ghost",css:{marginLeft:l.c},target:"_blank",to:s,isDisabled:a}))}function m({field:e,item:t,onCreate:r,isDisabled:a}){const{list:s,openCreateItemModal:d}=Object(p.f)();let f,g=e.getRefList(),m="Create and add "+g.singular;return t&&t.id&&(f=g.fields.filter(t=>"Relationship"===t.type&&t.config.ref===s.key&&t.config.refFieldPath===e.path).reduce((e,r)=>{const i={_label_:t._label_||"<link to parent>",id:t.id};return Object(n.a)(Object(n.a)({},e),{},{[r.path]:r.config.many?[i]:i})},{})),Object(i.jsx)(o.Fragment,null,Object(i.jsx)(u.a,{placement:"top",content:m},e=>Object(i.jsx)(b.b,{ref:e,onClick:d,icon:c.o,"aria-label":m,variant:"ghost",css:{marginLeft:l.c},isDisabled:a})),Object(i.jsx)(p.b,{prefillData:f,onCreate:({data:e})=>{r(e[g.gqlNames.createMutationName])}}))}t.default=({autoFocus:e,field:t,value:r=[],renderContext:n,errors:o,onChange:a,item:c,list:l,isDisabled:b})=>{const{many:u,ref:h}=t.config,{authStrategy:j}=Object(p.e)(),O="ks-input-"+t.path,y=t.getRefList();return Object(i.jsx)(s.a,null,Object(i.jsx)(s.d,{htmlFor:O,field:t,errors:o}),Object(i.jsx)(s.b,{text:t.adminDoc}),Object(i.jsx)(s.c,null,Object(i.jsx)("div",{css:{flex:1}},Object(i.jsx)(d.a,{autoFocus:e,isMulti:u,field:t,value:r,errors:o,renderContext:n,htmlID:O,onChange:e=>{const{many:r}=t.config;a(r?e?e.map(e=>e.value):[]:e?e.value:null)},isDisabled:b})),Object(i.jsx)(p.c,{list:y},Object(i.jsx)(m,{onCreate:e=>{a(u?r.concat(e):e)},field:t,item:c,list:l,isDisabled:b})),j&&h===j.listKey&&Object(i.jsx)(f,{many:u,onAddUser:e=>{a(u?r.concat(e):e)},value:r,listKey:j.listKey,isDisabled:b}),Object(i.jsx)(g,{field:t,value:r})))}}}]);