(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{169:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),o=a(10),s=a.n(o),c=(a(169),a(21)),l=a(333),d=a(147),u=Object(d.a)({typography:{fontFamily:'"OpenSans-regular"',color:"#3A8DFF",fontSize:12,h1:{}},palette:{primary:{main:"#DF1B1B"}}}),m=a(26),b=a(13),h=a(17),j=a(321),p=a(320),g=a(334),x=a(282),f=a(335),O=a(336),w=a(338),v=a(318),S=a(323),y=a(84),k=a.n(y),C=a(85),N=a(37),I=a(87),z=a(316),B=r.a.createContext({object:{user:null},setObject:function(){}}),P=a(36),T=a.n(P),W=a(53),H=a(63),D=a.n(H);var F=function(e,t){var a=Object(b.f)(),n=Object(i.useContext)(B),r=(n.object,n.setObject);return function(){var e=Object(W.a)(T.a.mark((function e(t,n){var i,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={method:"POST"},e.next=3,fetch("/auth/login?email=".concat(t,"&password=").concat(n),i).then((function(e){return e.json()}));case 3:o=e.sent,r({user:o}),localStorage.setItem("token",D.a.get("token")),a.push("/dashboard");case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},A=Object(z.a)((function(e){return{root:{minHeight:"100vh","& .MuiInput-underline:before":{borderBottom:"1.2px solid rgba(0, 0, 0, 0.2)"}},welcome:{fontSize:26,paddingBottom:20,fontWeight:500},heroText:{fontSize:26,textAlign:"center",color:"white",marginTop:30,maxWidth:300},overlay:{backgroundImage:"linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",backgroundSize:"cover",backgroundPosition:"center",flexDirection:"column",minHeight:"100vh",paddingBottom:145,display:"flex",alignItems:"center",justifyContent:"center"},buttonHeader:{display:"flex",alignItems:"flex-start",flexDirection:"column",bgcolor:"background.paper",minHeight:"100vh",paddingTop:23},accBtn:{borderRadius:5,filter:"drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",backgroundColor:"#ffffff",color:"#3a8dff",boxShadow:"none",marginRight:35,"@media (max-width: 320px)":{height:40,width:70,fontSize:10},"@media (min-width: 320px)":{height:54,whiteSpace:170}},noAccBtn:{fontSize:14,color:"#b0b0b0",fontWeight:400,textAlign:"center",marginRight:21,"@media (max-width: 320px)":{fontSize:10},"@media (max-width: 600px)":{whiteSpace:"wrap"},"@media (min-width: 600px)":{whiteSpace:"no-wrap"}},image:{backgroundImage:"linear-gradient(to right bottom, #3A8DFF, #86B9FF)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",opacity:.85},box:{padding:24,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column",maxWidth:900,margin:"auto"},form:{width:"100%",marginTop:e.spacing(1)},label:{fontSize:19,color:"rgb(0,0,0,0.4)",paddingLeft:"5px"},submit:{margin:e.spacing(3,2,2),padding:10,width:160,height:56,borderRadius:3,marginTop:49,fontSize:16,fontWeight:"bold",backgroundColor:"#3a8dff","@media (max-width: 320px)":{fontSize:10,width:"70%",height:"70%"}},inputs:{marginTop:".8rem",height:"2rem",padding:"5px"},link:{textDecoration:"none",display:"flex",flexWrap:"nowrap"},forgot:{paddingRight:10,color:"#3a8dff"}}}));function R(){var e=A(),t=r.a.useState(!0),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(i.useContext)(B),d=l.object,u=(l.setObject,Object(b.f)()),y=F();r.a.useEffect((function(){null!=d.user&&u.push("/dashboard")}),[]);var z=function(e,t){"clickaway"!==t&&s(!1)};return Object(n.jsxs)(v.a,{container:!0,component:"main",className:e.root,children:[Object(n.jsx)(p.a,{}),Object(n.jsx)(v.a,{item:!0,xs:!1,sm:4,md:5,className:e.image,children:Object(n.jsx)(f.a,{className:e.overlay,children:Object(n.jsxs)(O.a,{xsDown:!0,children:[Object(n.jsx)("img",{width:67,src:"/images/chatBubble.png"}),Object(n.jsx)(O.a,{smDown:!0,children:Object(n.jsx)("p",{className:e.heroText,children:"Converse with anyone with any language"})})]})})}),Object(n.jsxs)(v.a,{item:!0,xs:12,sm:8,md:7,elevation:6,component:x.a,square:!0,children:[Object(n.jsxs)(f.a,{className:e.buttonHeader,children:[Object(n.jsx)(f.a,{p:1,alignSelf:"flex-end",alignItems:"center",children:Object(n.jsxs)(m.b,{to:"/signup",className:e.link,children:[Object(n.jsx)(j.a,{className:e.noAccBtn,children:"Don't have an account?"}),Object(n.jsx)(j.a,{color:"background",className:e.accBtn,variant:"contained",children:"Create account"})]})}),Object(n.jsxs)(f.a,{width:"100%",maxWidth:450,p:3,alignSelf:"center",children:[Object(n.jsx)(v.a,{container:!0,children:Object(n.jsx)(v.a,{item:!0,xs:!0,children:Object(n.jsx)("p",{className:e.welcome,component:"h1",variant:"h5",children:"Welcome back!"})})}),Object(n.jsx)(C.a,{initialValues:{email:"",password:""},validationSchema:N.a().shape({email:N.b().required("Email is required").email("Email is not valid"),password:N.b().required("Password is required").max(100,"Password is too long").min(6,"Password too short")}),onSubmit:function(e,t){var a=e.email,n=e.password,i=t.setStatus,r=t.setSubmitting;i(),y(a,n).then((function(){}),(function(e){r(!1),i(e)}))},children:function(t){var a=t.handleSubmit,i=t.handleChange,r=t.values,o=t.touched,s=t.errors;return Object(n.jsxs)("form",{onSubmit:a,className:e.form,noValidate:!0,children:[Object(n.jsx)(g.a,{id:"email",label:Object(n.jsx)("p",{className:e.label,children:"E-mail address"}),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{input:e.inputs}},name:"email",autoComplete:"email",autoFocus:!0,helperText:o.email?s.email:"",error:o.email&&Boolean(s.email),value:r.email,onChange:i}),Object(n.jsx)(g.a,Object(h.a)({id:"password",label:Object(n.jsx)(I.a,{className:e.label,children:"Password"}),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{input:e.inputs},endAdornment:Object(n.jsx)(I.a,{className:e.forgot,children:"Forgot?"})},type:"password",autoComplete:"current-password",helperText:o.password?s.password:"",error:o.password&&Boolean(s.password),value:r.password,onChange:i},"type","password")),Object(n.jsx)(f.a,{textAlign:"center",children:Object(n.jsx)(j.a,{type:"submit",size:"large",variant:"contained",color:"primary",className:e.submit,children:"Login"})}),Object(n.jsx)("div",{style:{height:95}})]})}})]}),Object(n.jsx)(f.a,{p:1,alignSelf:"center"})]}),Object(n.jsx)(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:6e3,onClose:z,message:"Login failed",action:Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(S.a,{size:"small","aria-label":"close",color:"inherit",onClick:z,children:Object(n.jsx)(k.a,{fontSize:"small"})})})})]})]})}var L=function(){Object(b.f)();var e=Object(i.useContext)(B);e.object,e.setObject},E=Object(z.a)((function(e){return{root:{minHeight:"100vh","& .MuiInput-underline:before":{borderBottom:"1.2px solid rgba(0, 0, 0, 0.2)"}},welcome:{fontSize:26,paddingBottom:20,fontWeight:500},heroText:{fontSize:26,fontFamily:"'Open Sans'",textAlign:"center",color:"white",marginTop:30,maxWidth:300},overlay:{backgroundImage:"linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",backgroundSize:"cover",backgroundPosition:"center",flexDirection:"column",minHeight:"100vh",paddingBottom:145,display:"flex",alignItems:"center",justifyContent:"center"},buttonHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexDirection:"column",bgcolor:"background.paper",minHeight:"100vh",paddingTop:23,"@media (max-width: 320px)":{paddingTop:10}},accBtn:{width:170,borderRadius:5,filter:"drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",backgroundColor:"#ffffff",color:"#3a8dff",boxShadow:"none",marginRight:35,"@media (max-width: 320px)":{height:30,width:70,fontSize:10},"@media (min-width: 320px)":{height:54,whiteSpace:170}},noAccBtn:{fontSize:14,color:"#b0b0b0",fontWeight:400,textAlign:"center",marginRight:21,"@media (max-width: 320px)":{fontSize:10},"@media (max-width: 600px)":{whiteSpace:"wrap"},"@media (min-width: 600px)":{whiteSpace:"no-wrap"}},image:{backgroundImage:"linear-gradient(to right bottom, #3A8DFF, #86B9FF)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",opacity:.85},box:{padding:24,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column",maxWidth:900,margin:"auto"},form:{marginTop:e.spacing(1),"@media (max-width: 320px)":{width:"70%"},"@media (max-width: 600px)":{width:"90%"},"@media (min-width: 600px)":{width:"100%"}},label:{fontSize:19,color:"rgb(0,0,0,0.4)",paddingLeft:"5px"},submit:{margin:e.spacing(3,2,2),padding:10,width:160,height:56,borderRadius:3,marginTop:49,fontSize:16,backgroundColor:"#3a8dff",fontWeight:"bold","@media (max-width: 320px)":{fontSize:10,width:"50%",height:"50%"}},inputs:{marginTop:".8rem",height:"2rem",padding:"5px"},link:{textDecoration:"none",display:"flex",flexWrap:"nowrap"}}}));function q(){var e=E(),t=r.a.useState(!0),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(i.useContext)(B),d=l.object,u=(l.setObject,L()),y=function(e,t){"clickaway"!==t&&s(!1)},z=Object(b.f)();return r.a.useEffect((function(){null!=d.user&&z.push("/dashboard")}),[]),Object(n.jsxs)(v.a,{container:!0,component:"main",className:e.root,children:[Object(n.jsx)(p.a,{}),Object(n.jsx)(v.a,{item:!0,xs:!1,sm:4,md:5,className:e.image,children:Object(n.jsx)(f.a,{className:e.overlay,children:Object(n.jsxs)(O.a,{xsDown:!0,children:[Object(n.jsx)("img",{width:67,src:"/images/chatBubble.png"}),Object(n.jsx)(O.a,{smDown:!0,children:Object(n.jsx)(I.a,{className:e.heroText,children:"Converse with anyone with any language"})})]})})}),Object(n.jsxs)(v.a,{item:!0,xs:12,sm:8,md:7,elevation:6,component:x.a,square:!0,children:[Object(n.jsxs)(f.a,{className:e.buttonHeader,children:[Object(n.jsx)(f.a,{p:1,alignSelf:"flex-end",alignItems:"center",children:Object(n.jsxs)(m.b,{to:"/login",className:e.link,children:[Object(n.jsx)(j.a,{className:e.noAccBtn,children:"Already have an account?"}),Object(n.jsx)(j.a,{color:"background",className:e.accBtn,variant:"contained",children:"Login"})]})}),Object(n.jsxs)(f.a,{width:"100%",maxWidth:450,p:3,alignSelf:"center",children:[Object(n.jsx)(v.a,{container:!0,children:Object(n.jsx)(v.a,{item:!0,xs:!0,children:Object(n.jsx)(I.a,{className:e.welcome,component:"h1",variant:"h5",children:"Create an account"})})}),Object(n.jsx)(C.a,{initialValues:{email:"",password:""},validationSchema:N.a().shape({username:N.b().required("Username is required").max(40,"Username is too long"),email:N.b().required("Email is required").email("Email is not valid"),password:N.b().required("Password is required").max(100,"Password is too long").min(6,"Password too short")}),onSubmit:function(e,t){var a=e.username,n=e.email,i=e.password,r=t.setStatus,o=t.setSubmitting;r(),u(a,n,i).then((function(){}),(function(e){o(!1),r(e)}))},children:function(t){var a,i=t.handleSubmit,r=t.handleChange,o=t.values,s=t.touched,c=t.errors;return Object(n.jsxs)("form",{onSubmit:i,className:e.form,noValidate:!0,children:[Object(n.jsx)(g.a,(a={id:"username",label:Object(n.jsx)(I.a,{className:e.label,children:"Username"}),fullWidth:!0},Object(h.a)(a,"id","username"),Object(h.a)(a,"margin","normal"),Object(h.a)(a,"InputLabelProps",{shrink:!0}),Object(h.a)(a,"InputProps",{classes:{input:e.inputs}}),Object(h.a)(a,"name","username"),Object(h.a)(a,"autoComplete","username"),Object(h.a)(a,"autoFocus",!0),Object(h.a)(a,"helperText",s.username?c.username:""),Object(h.a)(a,"error",s.username&&Boolean(c.username)),Object(h.a)(a,"value",o.username),Object(h.a)(a,"onChange",r),a)),Object(n.jsx)(g.a,{id:"email",label:Object(n.jsx)(I.a,{className:e.label,children:"E-mail address"}),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{input:e.inputs}},name:"email",autoComplete:"email",helperText:s.email?c.email:"",error:s.email&&Boolean(c.email),value:o.email,onChange:r}),Object(n.jsx)(g.a,Object(h.a)({id:"password",label:Object(n.jsx)(I.a,{className:e.label,children:"Password"}),fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{classes:{input:e.inputs}},type:"password",autoComplete:"current-password",helperText:s.password?c.password:"",error:s.password&&Boolean(c.password),value:o.password,onChange:r},"type","password")),Object(n.jsx)(f.a,{textAlign:"center",children:Object(n.jsx)(j.a,{type:"submit",size:"large",variant:"contained",color:"primary",className:e.submit,children:"Create"})})]})}})]}),Object(n.jsx)(f.a,{p:1,alignSelf:"center"})]}),Object(n.jsx)(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:6e3,onClose:y,message:"Email already exists",action:Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)(S.a,{size:"small","aria-label":"close",color:"inherit",onClick:y,children:Object(n.jsx)(k.a,{fontSize:"small"})})})})]})]})}var U=function(){var e=Object(b.f)(),t=Object(i.useContext)(B),a=(t.object,t.setObject),n=function(){var t=Object(W.a)(T.a.mark((function t(){var n,i;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET"},t.next=3,fetch("/auth/me",n).then((function(e){return e.json()})).catch((function(t){a({user:null}),localStorage.removeItem("token"),e.push("/login")}));case 3:i=t.sent,a({user:i}),e.push("/dashboard");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(i.useEffect)((function(){localStorage.getItem("token")?n():e.push("/signup")}),[])},V=a(327),G=a(328),J=a(339),_=a(16),M=a(145),$=a.n(M),K=a(146),Q=a.n(K),X=a(326),Y=a(340),Z=a(324),ee=a(325),te=Object(z.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(Z.a[500]),backgroundColor:Z.a[500]},purple:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]}}}));function ae(e){var t=te();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(Y.a,{children:e.user.username})})}var ne=Object(z.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function ie(){var e=ne(),t=Object(i.useContext)(B),a=t.object;t.setObject;return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(X.a,{color:"secondary",variant:"dot",children:Object(n.jsx)(ae,{user:a.user})})})}var re=Object(z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function oe(){var e=re(),t=Object(i.useContext)(B),a=t.object;t.setObject;return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(V.a,{position:"static",children:Object(n.jsxs)(G.a,{children:[Object(n.jsx)(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)($.a,{})}),Object(n.jsx)(ie,{}),Object(n.jsx)(I.a,{className:e.title,variant:"h6",noWrap:!0,children:a.user.username}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(J.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var se=a(322),ce=a(329),le=a(332),de=a(331),ue=a(330),me=r.a.createContext({users:{list:null},setUsers:function(){},selectedUser:null,setSelectedUser:function(){return null}}),be=Object(z.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function he(){var e=be(),t=r.a.useState(1),a=Object(c.a)(t,2),o=a[0],s=a[1],l=Object(i.useContext)(me),d=l.users,u=(l.setUsers,d.list);return Object(n.jsx)(se.a,{component:"nav",className:e.root,children:u.map((function(t,a){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(ce.a,{alignItems:"flex-start",button:!0,selected:o===a,onClick:function(e){return function(e,t){s(t)}(0,a)},children:[Object(n.jsx)(ue.a,{children:Object(n.jsx)(Y.a,{alt:t.username,src:t.avatar})}),Object(n.jsx)(de.a,{primary:t.username,secondary:Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(I.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.msgHistory[t.msgHistory.length-1]}),t.msgHistory[-1]]})})]},t.id.toString()),Object(n.jsx)(le.a,{variant:"inset",component:"li"})]})}))})}function je(){var e=Object(b.f)(),t=Object(i.useContext)(B),a=t.object,r=t.setObject;return U(),null==a.user?Object(n.jsx)(b.a,{to:"/login"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(oe,{}),Object(n.jsx)(he,{}),Object(n.jsx)("button",{onClick:function(){r({user:null}),localStorage.removeItem("token"),e.push("/login")},children:"Logout"})]})}a(278);var pe=function(){var e=Object(i.useState)({user:null}),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(i.useState)({list:[{id:1,username:"Ali Connor",msgHistory:["Hi!","How's it going?","Down for brunch on Saturday?"],avatar:"some_url"},{id:2,username:"Joana Baez",msgHistory:["Hello there!","How are you?","Up for a hike on Sunday?"],avatar:"some_url_2"}]}),s=Object(c.a)(o,2),d=s[0],h=s[1],j=Object(i.useState)(!1),p=Object(c.a)(j,2);return p[0],p[1],Object(n.jsx)(B.Provider,{value:{object:a,setObject:r},children:Object(n.jsx)(me.Provider,{value:{users:d,setUsers:h},children:Object(n.jsx)(l.a,{theme:u,children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(b.b,{path:"/login",component:R}),Object(n.jsx)(b.b,{path:"/signup",component:q}),Object(n.jsx)(b.b,{path:"/dashboard",component:je}),Object(n.jsx)(b.b,{exact:!0,path:"/",children:Object(n.jsx)(b.a,{to:"/signup"})})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(n.jsx)(pe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[279,1,2]]]);
//# sourceMappingURL=main.3c3fe515.chunk.js.map