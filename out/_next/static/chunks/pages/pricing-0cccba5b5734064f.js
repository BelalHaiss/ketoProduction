(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{2691:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return n(345)}])},345:function(e,t,n){"use strict";n.r(t),n.d(t,{TEXT_WITH_ICONS:function(){return D},default:function(){return R}});var i=n(5893),o=n(8790),r=n(894),l=n(8428),s=n(3412),a=n(7294),c=n(7516),x=n(8193),u=n(9583),d=n(5434),p=n(2585),f=n(331),h=n(7470),g=n(4781);let m=[{text:"صراحة نظام كيتوستايل فرق معاي وقدرت انحف بشهر اكثر من ٨ كيلو بفضل الله ثم بفضل المدرب احمد الراسي",person:"احمد عبدالرحمن - الرياض"},{text:"قدرت انحف على نظام الكيتو بطريقة مرا سريعه وسهله وللامانه ماحسيت بأي تعب او ارهاق زي مايقولو والمدربه ماقصرت معاي الصراحه",person:"نوف - جدة "},{text:"كنت خايف للامانه من موضوع الكيتو لكن مع كيتوستايل فرق الموضوع معاي بشكل كبير نزلت من ١٠٨ ل٩٩ كيلو بشهر ومستمر باذن الله ",person:"سعود الحربي - القصيم"},{text:"والله والله والله بدون اي مجامله نظام الكيتو بكيتوستايل كان نقطة فارقه بحياتي المدرب احمد كان بقمة الاخلاق معاي وقدرت انزل معاه اكثر من ٤ كيلو اللهم لك الحمد",person:"نواف الملحم - الدمام"},{text:"الله يسعد المدربه أمل كانت معاي خطوه بخطوه ومكملين معاها باذن الله",person:"ساره - ينبع"},{text:"انصح الكل يجرب كيتوستايل ماندمت على اي ريال دفعته",person:"جمانه - الرياض"}];var b=n(1649);let j=m.length;function w(){let[e,t]=(0,a.useState)(0),[n,l]=(0,a.useState)("");return(0,i.jsxs)(o.kC,{color:"orange.900",flexDir:"column",overflow:"hidden",align:"center",mt:"5",gap:"2",w:{base:"90%"},mx:"auto",children:[(0,i.jsxs)(o.kC,{w:"100%",fontSize:"40px",gap:"2",align:"center",justify:"center",children:[(0,i.jsx)(o.X6,{fontSize:"1em",children:"اراء عملاء"}),(0,i.jsxs)(o.X6,{fontSize:"1em",color:"red.500",fontWeight:"bold",className:"ketoHeading",children:[" ","كيتو"]}),(0,i.jsxs)(o.X6,{fontSize:"1em",color:"orange.300",fontWeight:"bold",className:"ketoHeading",children:[" ","ستايل"]})]}),(0,i.jsxs)(o.kC,{w:"100%",position:"relative",bg:"orange.100",h:{base:"280px",md:"150px"},align:"center",borderRadius:"xl",p:"5",children:[(0,i.jsx)(r.JO,{as:b.u1R,position:"absolute",left:"1",bottom:"40%",onClick:()=>(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;t(0===e?j-1:e-1),n("prev")})(e,t,l),w:"30px",h:"30px",cursor:"pointer",color:"orange.500"}),(0,i.jsxs)(o.kC,{className:"next"===n?"nextAnimation":"prev"===n?"prevAnimation":"",align:"center",w:"100%",h:{base:"280px",md:"150px"},children:[(0,i.jsx)(o.xv,{w:"90%",mx:"auto",fontWeight:"bold",fontSize:"20px",children:m[e].text}),(0,i.jsx)(o.xv,{position:"absolute",bottom:"2",left:"10",children:m[e].person})]},Math.random()),(0,i.jsx)(r.JO,{position:"absolute",right:"1",bottom:"40%",as:b.hjJ,onClick:()=>(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;t(e===j-1?0:e+1),n("next")})(e,t,l),w:"30px",h:"30px",cursor:"pointer",color:"orange.500"})]})]})}function k(){let e=(0,f.oR)(e=>e.user);return(0,i.jsxs)(o.kC,{w:"100%",gap:"3",flexDir:{base:"column",md:"row"},align:"center",px:"30px",children:[(0,i.jsx)(l.Ee,{src:"/home/pay.png",width:"300px",height:"300px",alt:"pic"}),(0,i.jsx)(o.xv,{fontWeight:"bold",fontSize:{base:"2xl",md:"5xl"},children:"".concat(e.profile.name,", لا يفوتك عرضنا , ولمدة محدودة")})]})}var v=n(5054),S=n(5832);let C="https://www.ketonestyle.com/redirect/?re=";function _(e){let{plan:t,token:n}=e,r=(0,f.oR)(e=>e.user),[l,s]=(0,a.useState)(!1);async function c(e){if(e.stopPropagation(),s(!0),!r){var n;null===(n=document.getElementById("register"))||void 0===n||n.click();return}if(t){let i=await (0,h.HW)({plan:t,userId:r._id,callBackUrl:function(e){switch(e){case"meal":return"".concat(C,"expectation");case"workout":return"".concat(C,"workout");case"nutritionist":return"".concat(C,"nutritionist")}}("meal"),clientName:null==r?void 0:r.profile.name,clientMobile:null==r?void 0:r.profile.phone,amount:t.price,orderNumber:Date.now(),clientEmail:null==r?void 0:r.profile.email});window.handleSnap("START_CHECKOUT",r,{price:t.price,currency:"SAR",item_category:"plans",item_ids:t.plans}),i&&window.open(i,"_self"),(0,S.Z)("برجاء الانتظار  سيتم تحويلك لصفحة الدفع","info")}s(!1)}return(0,i.jsxs)(o.kC,{p:"2",bg:"orange.50",boxShadow:"5xl",borderRadius:"lg",w:"100%",align:"center",flexDir:"column",gap:"4",children:[(0,i.jsxs)(o.xv,{fontSize:"xl",color:"red.500",children:["المجموع الكلي للإشتراك ",null==t?void 0:t.price]}),(0,i.jsx)(v.zx,{leftIcon:(0,i.jsx)(d.Yi7,{}),fontSize:"xl",w:"80%",mx:"auto",isLoading:l,onClick:c,colorScheme:"orange",children:"الدفع الان"}),(0,i.jsx)(v.zx,{w:"80%",mx:"auto",leftIcon:(0,i.jsx)(u.QON,{fontSize:"50px"}),isLoading:l,onClick:c,bg:"black",color:"white",dir:"ltr",_hover:{bg:"black"},_active:{bg:"black"}}),(0,i.jsx)(o.xv,{color:"gray.600",fontSize:"sm",children:"عند النقر سيتم تحويلك لصفحة الدفع لاكمال العملية"})]})}function z(e){let{title:t,plan:n,token:r}=e,[l,s]=(0,a.useState)(!1);function c(){s(!l)}return(0,i.jsxs)(o.kC,{w:{base:"350px",md:"600px"},borderRadius:"xl",flexDir:"column",p:"1",bg:l?"orange.500":"orange.100",color:l?"white":"orange.900",align:"center",position:"relative",onClick:c,transition:"all 0.3s ease-out",cursor:"pointer",children:[(0,i.jsxs)(o.kC,{w:"100%",align:"center",children:[(0,i.jsx)(o.kC,{w:{base:"50px",md:"60px"},"aria-checked":l,h:{base:"40px",md:"60px"},bg:"white",role:"radiogroup",_after:{content:'""',width:["27px","27px","45px"],height:["27px","27px","45px"],transition:"all 0.3s ease-out",borderRadius:"50%",background:"#F6AD55",position:"absolute",right:["10px","10px","12px"],top:["31px","31px","16px"],opacity:"".concat(l?"1":"0")},tabIndex:1,cursor:"pointer",onClick:c,ml:"2",borderRadius:"100%"}),(0,i.jsxs)(o.kC,{flexDir:"column",align:"center",gap:"2",children:[(0,i.jsx)(o.xv,{fontWeight:"bold",fontSize:{base:"md",md:"2xl"},children:t}),(0,i.jsx)(o.xv,{children:"الإشتراك يدفع لمره واحده ولا يتجدد تلقائًيا"})]}),(0,i.jsx)(o.iz,{orientation:"vertical"}),(0,i.jsxs)(o.kC,{mr:"auto",minH:"100%",border:"2px",borderLeft:"none",borderTop:"none",borderBottom:"none",p:"2",flexDir:"column",gap:"2",align:"center",justify:"space-between",children:[n.before&&(0,i.jsxs)(o.xv,{fontSize:"xs",textDecoration:"line-through",color:"gray.600",children:[n.before," ريال"]}),(0,i.jsxs)(o.xv,{w:"100%",whiteSpace:"nowrap",fontSize:{base:"sm",md:"lg"},fontWeight:"bold",children:[function(e){let t=e.plans.find(e=>"meal"===e.category);if(!t)throw Error("big problem");let n=+t.duration/30,i=Number(+e.price/+n).toFixed(0);return"".concat(i,"ريال/ للشهر")}(n)," "]})]})]}),l&&(0,i.jsxs)(o.kC,{gap:"3",w:"100%",flexDir:"column",children:[(0,i.jsx)("hr",{style:{border:"1px solid white",width:"100%"}}),(0,i.jsx)(D,{}),(0,i.jsx)(_,{token:r,plan:n})]})]})}let E=[{text:"ستحصل على مستشار التغذية الخاص فيك",image:"/home/nutritionist.png"},{text:"جدول تمارين متكامل حسب احتياجك",icon:d.VzS},{text:"العديد من وصفات الكيتو الجاهزة",icon:p.O04},{text:"قياس كامل لكتلة جسمك",icon:c.kGm},{text:"حساب معدل حرق الدهون لجسمك",icon:x.o$9},{text:"توقعات لتواريخ نزول وزنك",icon:u.dAP},{text:"وسائل دفع آمنة و الدفع لمرة واحده فقط",icon:x.X9m},{text:"ضمان نزول الوزن المطلوب",icon:u.Zlo}],y=[{_id:"mealOne",title:"اشتراك شهر واحد",feature:D(),plan:null},{_id:"mealThree",title:"اشتراك 3 شهور",feature:D(),plan:null},{_id:"mealSix",title:"اشتراك 6 اشهر",feature:D(),plan:null}];function D(){return(0,i.jsx)(o.kC,{px:"3",flexDir:"column",gap:"2",align:"center",children:E.map((e,t)=>(0,i.jsxs)(o.kC,{w:"100%",align:"center",gap:"2",children:[e.icon?(0,i.jsx)(r.JO,{w:"8",h:"8",as:e.icon}):(0,i.jsx)(l.Ee,{src:e.image,w:"8",h:"8",alt:"nutritionist"}),(0,i.jsx)(o.xv,{fontWeight:"medium",fontSize:"lg",children:e.text})]},t))})}var R=(0,s.Z)(function(e){let{vistor:t}=e,n=(0,f.oR)(e=>e.user),r=(0,f.oR)(e=>e.prices),l=(0,f.oR)(e=>e.setPrices),[s,c]=(0,a.useState)(null),[x,u]=(0,a.useState)(y),[d,p]=(0,a.useState)(!0),[m,b]=(0,a.useState)("");return(0,a.useEffect)(()=>{(0,h.xz)(l,p)},[]),(0,a.useEffect)(()=>{(null==r?void 0:r.length)&&(u(x.map(e=>{let t=r.find(t=>t._id===e._id);return{...e,plan:null!=t?t:null}})),p(!1))},[r]),(0,a.useEffect)(()=>{window.handleSnap("PAGE_VIEW")},[]),(0,i.jsxs)(o.kC,{color:"orange.800",w:"100%",pt:"3",pb:"10",flexDir:"column",align:"center",children:[!s&&n&&(0,i.jsx)(k,{}),(0,i.jsxs)(o.kC,{flexDir:{base:"column",md:"row"},align:"center",justify:"space-around",w:"100%",children:[d&&(0,i.jsx)(g.Z,{}),!s&&!d&&(0,i.jsxs)(o.kC,{mt:"3",w:{base:"370px",md:"600px"},flexDir:"column",align:"center",gap:"3",children:[(0,i.jsx)(o.xv,{fontSize:{base:"md",md:"lg"},children:"يعتبر نظام كيتوستايل المدروس من قبل المختصين، هو النظام الأفضل والأسرع والأضمن في النتائج بدون منازع عن بقية الأنظمة"}),x.map(e=>(0,i.jsx)(z,{title:e.title,plan:e.plan,token:m},e._id))]})]}),(0,i.jsx)(w,{})]})},"pricing")},3412:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(5893),o=n(1163),r=n(7294),l=n(4781),s=n(331),a=n(5110),c=n(5832);function x(e,t){let n=()=>{let n=(0,o.useRouter)(),[x,u]=(0,r.useState)(!0),[d,p]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),[g,m]=(0,r.useState)(""),b=(0,s.oR)(e=>e.user),j=(0,s.oR)(e=>e.prices);return(0,r.useEffect)(()=>{if(b&&(null==j?void 0:j.length)){if("pricing"===t)(0,a.b)(b,"meal").status?n.replace("/"):u(!1);else if("meal"===t){if((0,a.b)(b,"meal").status)p(!0),m((0,a.b)(b,"meal").end),u(!1);else{n.replace("/pricing"),(0,c.Z)("يجب عليك الاشتراك في باقات الكيتو","info");return}}else(0,a.b)(b,t).status?(p(!0),m((0,a.b)(b,t).end)):p(!1),u(!1)}(null==j?void 0:j.length)&&!b&&("pricing"===t?(h(!0),u(!1)):n.replace("/"))},[b,j]),x?(0,i.jsx)(l.Z,{}):(0,i.jsx)(e,{user:b,endDate:g,isSubscriped:d,vistor:f})};return n}},4781:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),o=n(8790),r=n(9609);function l(e){let{text:t}=e;return(0,i.jsxs)(o.kC,{p:"3",flex:"1",justifyContent:"center",flexDir:"column",alignItems:"center",children:[(0,i.jsx)(r.$,{transform:"translate(-50%, -50%)",thickness:"7px",speed:"0.65s",w:"8rem",h:"8rem",emptyColor:"orange.200",color:"orange.700"}),t&&(0,i.jsx)(o.xv,{children:t})]})}}},function(e){e.O(0,[445,617,866,874,774,888,179],function(){return e(e.s=2691)}),_N_E=e.O()}]);