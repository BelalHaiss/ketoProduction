(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{3441:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var a=n(3789),l=n(2846),i=n(5031),r=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=["className","rows"],s=["h","minH","height","minHeight"],c=(0,l.Gp)(function(e,t){var n=(0,l.mq)("Textarea",e),c=(0,l.Lr)(e),d=c.className,p=c.rows,m=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(c,o),x=(0,a.Yp)(m),f=p?(0,i.CE)(n,s):n;return r.createElement(l.m$.textarea,u({ref:t,rows:p},x,{className:(0,i.cx)("chakra-textarea",d),__css:f}))});i.Ts&&(c.displayName="Textarea")},332:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/addMeal",function(){return n(5005)}])},5005:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(5893),l=n(8790),i=n(5054),r=n(7294),u=n(8428),o=n(4298),s=n.n(o),c=n(331),d=n(7470);function p(e){let{updateImage:t,url:n}=e,o=(0,c.oR)(e=>e.user),[p,m]=(0,r.useState)(window.cloudinary),[x,f]=(0,r.useState)(null),[v,b]=(0,r.useState)(""),[h,g]=(0,r.useState)("");async function y(){v?((0,d.Oj)(v,null==o?void 0:o._id),b(""),t(""),g("")):x.open()}return(0,r.useEffect)(()=>{n.puplicId&&n.url&&(g(n.url),b(n.puplicId))},[n]),(0,r.useEffect)(()=>{p&&function(e){let n=e.createUploadWidget({cloudName:"ketoar",uploadPreset:"keto-meal",multiple:!1,maxImageFileSize:9437184,cropping:!0,singleUploadAutoClose:!1},(e,n)=>{"success"===n.event&&(b(n.info.public_id),t(n.info.public_id),g(n.info.secure_url))});f(n)}(p)},[p]),(0,a.jsxs)(l.kC,{w:"100%",children:[(0,a.jsx)(s(),{src:"https://upload-widget.cloudinary.com/global/all.js",type:"text/javascript",onLoad(){m(window.cloudinary)}}),p&&(0,a.jsxs)(l.kC,{w:"90%",justify:"space-around",mx:"auto",align:"center",children:[(0,a.jsx)(i.zx,{onClick:y,colorScheme:v?"red":"green",children:v?"حذف الصورة":"اختر صورة"}),(0,a.jsx)(l.kC,{w:"150px",h:"150px",layerStyle:"flexCenter",className:"myThumbnail",children:(0,a.jsx)(u.Ee,{src:h||"https://via.placeholder.com/150x150.png",w:"150px",h:"150px",rounded:"3xl",alt:"thumbnail"})})]})]})}var m=n(3252),x=n(252),f=n(9727),v=n(8873),b=n(1163);let h={submitActive:!1,submitLoading:!1,loadingText:"جاري تحديث البيانات"},g=()=>[{label:"الصورة",name:"image",type:"text",value:""},{label:"اسم الوجبة",value:"",type:"text",name:"name"},{label:"الصنف",value:"",type:"select",name:"category",options:[{value:"chicken",label:"الدجاج"},{value:"fish",label:"الاسماك"},{value:"caridea",label:"الروبيان"},{value:"cow",label:"لحم الابقار"},{value:"sheep",label:"لحم الاغنام"},{value:"camel",label:"لحم الجمال"},{value:"other",label:"اخري"}]},{label:"موعد الوجبة",name:"time",type:"select",value:"",options:[{value:"breakfast",label:"فطور"},{value:"lunch",label:"غداء"},{value:"dinner",label:"عشاء"},{value:"snack",label:"وجبة خفيفة"}]},{label:"المدة الزمنية",value:"",name:"duration",type:"number"},{label:"السعرات الحرارية",value:"",name:"calories",type:"number"},{label:"البروتين",value:"",name:"proteins",type:"number"},{label:"الكاربوهيدرات",value:"",name:"carbs",type:"number"},{label:"الدهون",value:"",name:"fats",type:"number"},{label:"طريقة التحضير",value:"",name:"steps",type:"textarea"},{label:"المكونات",value:[""],name:"components",type:"array"}];var y=(0,m.Z)(function(){let e=(0,b.useRouter)(),t=e.query,n=(0,c.oR)(e=>e.setMealView),u=(0,c.oR)(e=>e.mealView),o=(0,c.oR)(e=>e.user),[s,m]=(0,r.useState)(g),[y,j]=(0,r.useState)(h),[w,C]=(0,r.useState)({url:"",puplicId:""}),[_,k]=(0,r.useState)("none");function S(){k("none"),j(h)}function E(e,t){j({...y,submitActive:!0}),k("flex"),m(s.map(n=>(n.name===e&&("number"===n.type?n.value=+t:"array"===n.type?n.value=t.split(","):n.value=t),n)))}function N(e){j({...y,submitActive:!0}),k("flex"),m(s.map(t=>("image"===t.name&&(t.value=e),t)))}function I(){return s.map(e=>("category"===e.name||"time"===e.name?e.value=u[e.name].value:"image"===e.name?(C({url:u.image.url,puplicId:u.image.public_id}),N(u.image.public_id),e.value=u.image.public_id):e.value=u[e.name],e))}return(0,r.useEffect)(()=>{t.edit&&u&&u.addedBy===(null==o?void 0:o._id)?m(I()):m(g())},[t]),(0,a.jsxs)(l.kC,{position:"relative",layerStyle:"flexCenter",flexDir:"column",p:"3",children:[(0,a.jsx)(f.x,{path:"/admin/meals"}),(0,a.jsx)(l.xv,{fontSize:"3xl",fontWeight:"bolder",children:"اضف وجبة جديدة"}),(0,a.jsx)(p,{url:w,updateImage:N}),(0,a.jsx)(l.kC,{layerStyle:"flexResponsive",gap:"4",w:"100%",wrap:"wrap",children:s.length&&s.map((e,t)=>(0,a.jsx)(x.J,{type:e.type,value:e.value,name:e.name,width:"500px",label:e.label,onChange:E,options:e.options?e.options:null},t))}),(0,a.jsx)(v.Z,{onReset:function(){t.edit&&u?m(I()):m(g()),S()},onSubmit:function(){j({...y,submitLoading:!0}),(0,d.ow)([...s,{name:"addedBy",value:null==o?void 0:o._id}],n,e,t.edit?t.edit.toString():""),S()},submitButton:y,display:_}),t.edit&&u&&(0,a.jsx)(i.zx,{onClick(){(0,d.$v)(u._id,u.image.public_id,null==o?void 0:o._id,e),n(null)},my:"4",colorScheme:"red",w:"80%",mx:"auto",children:"حذف الوجبة"})]})},"meals")},3252:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(5893),l=n(1163),i=n(7294),r=n(6107),u=n(4781);function o(e,t){let n=()=>{let n=(0,l.useRouter)(),[o,s]=(0,i.useState)(null),c=async()=>{let e=await (0,r._)({url:"/admin/validate?path="+t});e?s(e):n.push("/")};return(0,i.useEffect)(()=>{c()},[]),o?(0,a.jsx)(e,{}):(0,a.jsx)(u.Z,{})};return n}},9727:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var a=n(5893),l=n(5054),i=n(1163),r=n(155);function u(e){let{path:t,client:n,onClick:u}=e,o=(0,i.useRouter)();return(0,a.jsx)(l.zx,{onClick:()=>u?u():o.replace(t),position:"absolute",dir:"ltr",size:{base:"sm",md:"md"},width:{base:"100px",md:"120px"},leftIcon:(0,a.jsx)(r.Eg1,{fontSize:"25px"}),top:{base:n?"120px":"-1",md:n?"100px":"30px"},left:{base:"12px",md:"15px"},colorScheme:"yellow",color:"yellow.800",children:"رجوع"})}},8873:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5893),l=n(8790),i=n(5054);function r(e){let{onReset:t=()=>{},onSubmit:n=()=>{},display:r="none",submitButton:u={submitActive:!1,submitLoading:!1,loadingText:"جاري تحديث البيانات"}}=e;return(0,a.jsxs)(l.kC,{display:r,my:"2",align:"center",w:"100%",justify:"space-around",children:[(0,a.jsx)(i.zx,{w:{base:"120px",md:"200px"},colorScheme:"yellow",onClick:t,children:"الغاء التعديلات"}),(0,a.jsx)(i.zx,{isLoading:u.submitLoading,loadingText:u.loadingText,disabled:!u.submitActive,w:{base:"120px",md:"200px"},colorScheme:"green",onClick:n,children:"حفظ التعديلات"})]})}},252:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var a=n(5893),l=n(3789),i=n(4612),r=n(8790),u=n(1391),o=n(3441);function s(e){let{type:t,value:n,name:s,label:c,onChange:d,width:p,options:m,readOnly:x=!1}=e;return(0,a.jsxs)(l.NI,{maxW:p||"500px",children:[(0,a.jsx)(l.lX,{htmlFor:s,children:c}),("text"===t||"number"===t||"array"===t)&&(0,a.jsx)(i.II,{color:"orange.500",readOnly:"image"===s||x,id:s,focusBorderColor:"orange.500",type:t,name:s,value:"object"==typeof n?n.join(","):n,onChange:e=>d(s,e.target.value)}),"select"===t&&(0,a.jsx)(r.kC,{sx:{"div > div":{left:"10px",right:"unset"}},children:(0,a.jsx)(u.Ph,{id:s,value:n,onChange:e=>d(s,e.target.value),name:s,placeholder:c,children:null==m?void 0:m.map((e,t)=>(0,a.jsx)("option",{value:e.value,children:e.label},t))})}),"textarea"===t&&(0,a.jsx)(o.g,{color:"orange.500",id:s,focusBorderColor:"orange.500",name:s,value:n,onChange:e=>d(s,e.target.value)})]})}},4781:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5893),l=n(8790),i=n(9609);function r(e){let{text:t}=e;return(0,a.jsxs)(l.kC,{p:"3",flex:"1",justifyContent:"center",flexDir:"column",alignItems:"center",children:[(0,a.jsx)(i.$,{transform:"translate(-50%, -50%)",thickness:"7px",speed:"0.65s",w:"8rem",h:"8rem",emptyColor:"orange.200",color:"orange.700"}),t&&(0,a.jsx)(l.xv,{children:t})]})}},4298:function(e,t,n){e.exports=n(3573)}},function(e){e.O(0,[260,774,888,179],function(){return e(e.s=332)}),_N_E=e.O()}]);