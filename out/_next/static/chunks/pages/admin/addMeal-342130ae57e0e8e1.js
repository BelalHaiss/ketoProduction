(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{3441:function(e,n,t){"use strict";t.d(n,{g:function(){return s}});var a=t(3789),l=t(2846),r=t(5031),u=t(7294);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var o=["className","rows"],c=["h","minH","height","minHeight"],s=(0,l.Gp)((function(e,n){var t=(0,l.mq)("Textarea",e),s=(0,l.Lr)(e),p=s.className,m=s.rows,v=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(s,o),d=(0,a.Yp)(v),f=m?(0,r.CE)(t,c):t;return u.createElement(l.m$.textarea,i({ref:n,rows:m},d,{className:(0,r.cx)("chakra-textarea",p),__css:f}))}));r.Ts&&(s.displayName="Textarea")},332:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/addMeal",function(){return t(5005)}])},5005:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var a=t(5893),l=t(8790),r=t(5054),u=t(7294),i=t(4051),o=t.n(i),c=t(8428),s=t(4298),p=t.n(s),m=t(331),v=t(7470);function d(e,n,t,a,l,r,u){try{var i=e[r](u),o=i.value}catch(c){return void t(c)}i.done?n(o):Promise.resolve(o).then(a,l)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(a,l){var r=e.apply(n,t);function u(e){d(r,a,l,u,i,"next",e)}function i(e){d(r,a,l,u,i,"throw",e)}u(void 0)}))}}function b(e){var n=e.updateImage,t=e.url,i=(0,m.oR)((function(e){return e.user})),s=(0,u.useState)(window.cloudinary),d=s[0],b=s[1],y=(0,u.useState)(null),x=y[0],h=y[1],g=(0,u.useState)(""),w=g[0],j=g[1],k=(0,u.useState)(""),C=k[0],S=k[1];function _(){return(_=f(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w?((0,v.Oj)(w,null===i||void 0===i?void 0:i._id),j(""),n(""),S("")):x.open();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.useEffect)((function(){t.puplicId&&t.url&&(S(t.url),j(t.puplicId))}),[t]),(0,u.useEffect)((function(){d&&function(e){var t=e.createUploadWidget({cloudName:"ketoar",uploadPreset:"keto-meal",multiple:!1,maxImageFileSize:9437184,cropping:!0,singleUploadAutoClose:!1},(function(e,t){"success"===t.event&&(j(t.info.public_id),n(t.info.public_id),S(t.info.secure_url))}));h(t)}(d)}),[d]),(0,a.jsxs)(l.kC,{w:"100%",children:[(0,a.jsx)(p(),{src:"https://upload-widget.cloudinary.com/global/all.js",type:"text/javascript",onLoad:function(){b(window.cloudinary)}}),d&&(0,a.jsxs)(l.kC,{w:"90%",justify:"space-around",mx:"auto",align:"center",children:[(0,a.jsx)(r.zx,{onClick:function(){return _.apply(this,arguments)},colorScheme:w?"red":"green",children:w?"\u062d\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629":"\u0627\u062e\u062a\u0631 \u0635\u0648\u0631\u0629"}),(0,a.jsx)(l.kC,{w:"150px",h:"150px",layerStyle:"flexCenter",className:"myThumbnail",children:(0,a.jsx)(c.Ee,{src:C||"https://via.placeholder.com/150x150.png",w:"150px",h:"150px",rounded:"3xl",alt:"thumbnail"})})]})]})}var y=t(3252),x=t(252),h=t(9727),g=t(8873),w=t(1163);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){k(e,n,t[n])}))}return e}function S(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _={submitActive:!1,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"},O=function(){return[{label:"\u0627\u0644\u0635\u0648\u0631\u0629",name:"image",type:"text",value:""},{label:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629",value:"",type:"text",name:"name"},{label:"\u0627\u0644\u0635\u0646\u0641",value:"",type:"select",name:"category",options:[{value:"chicken",label:"\u0627\u0644\u062f\u062c\u0627\u062c"},{value:"fish",label:"\u0627\u0644\u0627\u0633\u0645\u0627\u0643"},{value:"caridea",label:"\u0627\u0644\u0631\u0648\u0628\u064a\u0627\u0646"},{value:"cow",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u0628\u0642\u0627\u0631"},{value:"sheep",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u063a\u0646\u0627\u0645"},{value:"camel",label:"\u0644\u062d\u0645 \u0627\u0644\u062c\u0645\u0627\u0644"},{value:"other",label:"\u0627\u062e\u0631\u064a"}]},{label:"\u0645\u0648\u0639\u062f \u0627\u0644\u0648\u062c\u0628\u0629",name:"time",type:"select",value:"",options:[{value:"breakfast",label:"\u0641\u0637\u0648\u0631"},{value:"lunch",label:"\u063a\u062f\u0627\u0621"},{value:"dinner",label:"\u0639\u0634\u0627\u0621"},{value:"snack",label:"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}]},{label:"\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629",value:"",name:"duration",type:"number"},{label:"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u062d\u0631\u0627\u0631\u064a\u0629",value:"",name:"calories",type:"number"},{label:"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",value:"",name:"proteins",type:"number"},{label:"\u0627\u0644\u0643\u0627\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",value:"",name:"carbs",type:"number"},{label:"\u0627\u0644\u062f\u0647\u0648\u0646",value:"",name:"fats",type:"number"},{label:"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u062d\u0636\u064a\u0631",value:"",name:"steps",type:"textarea"},{label:"\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",value:[""],name:"components",type:"array"}]};var E=(0,y.Z)((function(){var e=function(){z("none"),I(_)},n=function(e,n){I(C({},E,{submitActive:!0})),z("flex"),j(y.map((function(t){return t.name===e&&("number"===t.type?t.value=+n:"array"===t.type?t.value=n.split(","):t.value=n),t})))},t=function(e){I(C({},E,{submitActive:!0})),z("flex"),j(y.map((function(n){return"image"===n.name&&(n.value=e),n})))},i=function(){return y.map((function(e){return"category"===e.name||"time"===e.name?e.value=p[e.name].value:"image"===e.name?(N({url:p.image.url,puplicId:p.image.public_id}),t(p.image.public_id),e.value=p.image.public_id):e.value=p[e.name],e}))},o=(0,w.useRouter)(),c=o.query,s=(0,m.oR)((function(e){return e.setMealView})),p=(0,m.oR)((function(e){return e.mealView})),d=(0,m.oR)((function(e){return e.user})),f=(0,u.useState)(O),y=f[0],j=f[1],k=(0,u.useState)(_),E=k[0],I=k[1],A=(0,u.useState)({url:"",puplicId:""}),P=A[0],N=A[1],T=(0,u.useState)("none"),R=T[0],z=T[1];return(0,u.useEffect)((function(){c.edit&&p&&p.addedBy===(null===d||void 0===d?void 0:d._id)?j(i()):j([{label:"\u0627\u0644\u0635\u0648\u0631\u0629",name:"image",type:"text",value:""},{label:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629",value:"",type:"text",name:"name"},{label:"\u0627\u0644\u0635\u0646\u0641",value:"",type:"select",name:"category",options:[{value:"chicken",label:"\u0627\u0644\u062f\u062c\u0627\u062c"},{value:"fish",label:"\u0627\u0644\u0627\u0633\u0645\u0627\u0643"},{value:"caridea",label:"\u0627\u0644\u0631\u0648\u0628\u064a\u0627\u0646"},{value:"cow",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u0628\u0642\u0627\u0631"},{value:"sheep",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u063a\u0646\u0627\u0645"},{value:"camel",label:"\u0644\u062d\u0645 \u0627\u0644\u062c\u0645\u0627\u0644"},{value:"other",label:"\u0627\u062e\u0631\u064a"}]},{label:"\u0645\u0648\u0639\u062f \u0627\u0644\u0648\u062c\u0628\u0629",name:"time",type:"select",value:"",options:[{value:"breakfast",label:"\u0641\u0637\u0648\u0631"},{value:"lunch",label:"\u063a\u062f\u0627\u0621"},{value:"dinner",label:"\u0639\u0634\u0627\u0621"},{value:"snack",label:"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}]},{label:"\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629",value:"",name:"duration",type:"number"},{label:"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u062d\u0631\u0627\u0631\u064a\u0629",value:"",name:"calories",type:"number"},{label:"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",value:"",name:"proteins",type:"number"},{label:"\u0627\u0644\u0643\u0627\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",value:"",name:"carbs",type:"number"},{label:"\u0627\u0644\u062f\u0647\u0648\u0646",value:"",name:"fats",type:"number"},{label:"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u062d\u0636\u064a\u0631",value:"",name:"steps",type:"textarea"},{label:"\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",value:[""],name:"components",type:"array"}])}),[c]),(0,a.jsxs)(l.kC,{position:"relative",layerStyle:"flexCenter",flexDir:"column",p:"3",children:[(0,a.jsx)(h.x,{path:"/admin/meals"}),(0,a.jsx)(l.xv,{fontSize:"3xl",fontWeight:"bolder",children:"\u0627\u0636\u0641 \u0648\u062c\u0628\u0629 \u062c\u062f\u064a\u062f\u0629"}),(0,a.jsx)(b,{url:P,updateImage:t}),(0,a.jsx)(l.kC,{layerStyle:"flexResponsive",gap:"4",w:"100%",wrap:"wrap",children:y.length&&y.map((function(e,t){return(0,a.jsx)(x.J,{type:e.type,value:e.value,name:e.name,width:"500px",label:e.label,onChange:n,options:e.options?e.options:null},t)}))}),(0,a.jsx)(g.Z,{onReset:function(){c.edit&&p?j(i()):j([{label:"\u0627\u0644\u0635\u0648\u0631\u0629",name:"image",type:"text",value:""},{label:"\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629",value:"",type:"text",name:"name"},{label:"\u0627\u0644\u0635\u0646\u0641",value:"",type:"select",name:"category",options:[{value:"chicken",label:"\u0627\u0644\u062f\u062c\u0627\u062c"},{value:"fish",label:"\u0627\u0644\u0627\u0633\u0645\u0627\u0643"},{value:"caridea",label:"\u0627\u0644\u0631\u0648\u0628\u064a\u0627\u0646"},{value:"cow",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u0628\u0642\u0627\u0631"},{value:"sheep",label:"\u0644\u062d\u0645 \u0627\u0644\u0627\u063a\u0646\u0627\u0645"},{value:"camel",label:"\u0644\u062d\u0645 \u0627\u0644\u062c\u0645\u0627\u0644"},{value:"other",label:"\u0627\u062e\u0631\u064a"}]},{label:"\u0645\u0648\u0639\u062f \u0627\u0644\u0648\u062c\u0628\u0629",name:"time",type:"select",value:"",options:[{value:"breakfast",label:"\u0641\u0637\u0648\u0631"},{value:"lunch",label:"\u063a\u062f\u0627\u0621"},{value:"dinner",label:"\u0639\u0634\u0627\u0621"},{value:"snack",label:"\u0648\u062c\u0628\u0629 \u062e\u0641\u064a\u0641\u0629"}]},{label:"\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629",value:"",name:"duration",type:"number"},{label:"\u0627\u0644\u0633\u0639\u0631\u0627\u062a \u0627\u0644\u062d\u0631\u0627\u0631\u064a\u0629",value:"",name:"calories",type:"number"},{label:"\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",value:"",name:"proteins",type:"number"},{label:"\u0627\u0644\u0643\u0627\u0631\u0628\u0648\u0647\u064a\u062f\u0631\u0627\u062a",value:"",name:"carbs",type:"number"},{label:"\u0627\u0644\u062f\u0647\u0648\u0646",value:"",name:"fats",type:"number"},{label:"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u062d\u0636\u064a\u0631",value:"",name:"steps",type:"textarea"},{label:"\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a",value:[""],name:"components",type:"array"}]),e()},onSubmit:function(){I(C({},E,{submitLoading:!0})),(0,v.ow)(S(y).concat([{name:"addedBy",value:null===d||void 0===d?void 0:d._id}]),s,o,c.edit?c.edit.toString():""),e()},submitButton:E,display:R}),c.edit&&p&&(0,a.jsx)(r.zx,{onClick:function(){(0,v.$v)(p._id,p.image.public_id,null===d||void 0===d?void 0:d._id,o),s(null)},my:"4",colorScheme:"red",w:"80%",mx:"auto",children:"\u062d\u0630\u0641 \u0627\u0644\u0648\u062c\u0628\u0629"})]})}),"meals")},3252:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(4051),l=t.n(a),r=t(5893),u=t(1163),i=t(7294),o=t(6107),c=t(4781);function s(e,n,t,a,l,r,u){try{var i=e[r](u),o=i.value}catch(c){return void t(c)}i.done?n(o):Promise.resolve(o).then(a,l)}function p(e,n){return function(){var t=(0,u.useRouter)(),a=(0,i.useState)(null),p=a[0],m=a[1],v=function(){var e,a=(e=l().mark((function e(){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o._)({url:"/admin/validate?path="+n});case 2:(a=e.sent)?m(a):t.push("/");case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,l){var r=e.apply(n,t);function u(e){s(r,a,l,u,i,"next",e)}function i(e){s(r,a,l,u,i,"throw",e)}u(void 0)}))});return function(){return a.apply(this,arguments)}}();return(0,i.useEffect)((function(){v()}),[]),p?(0,r.jsx)(e,{}):(0,r.jsx)(c.Z,{})}}},9727:function(e,n,t){"use strict";t.d(n,{x:function(){return i}});var a=t(5893),l=t(5054),r=t(1163),u=t(155);function i(e){var n=e.path,t=e.client,i=e.onClick,o=(0,r.useRouter)();return(0,a.jsx)(l.zx,{onClick:function(){return i?i():o.replace(n)},position:"absolute",dir:"ltr",size:{base:"sm",md:"md"},width:{base:"100px",md:"120px"},leftIcon:(0,a.jsx)(u.Eg1,{fontSize:"25px"}),top:{base:t?"120px":"-1",md:t?"100px":"30px"},left:{base:"12px",md:"15px"},colorScheme:"yellow",color:"yellow.800",children:"\u0631\u062c\u0648\u0639"})}},8873:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(5893),l=t(8790),r=t(5054);function u(e){var n=e.onReset,t=void 0===n?function(){}:n,u=e.onSubmit,i=void 0===u?function(){}:u,o=e.display,c=void 0===o?"none":o,s=e.submitButton,p=void 0===s?{submitActive:!1,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"}:s;return(0,a.jsxs)(l.kC,{display:c,my:"2",align:"center",w:"100%",justify:"space-around",children:[(0,a.jsx)(r.zx,{w:{base:"120px",md:"200px"},colorScheme:"yellow",onClick:t,children:"\u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a"}),(0,a.jsx)(r.zx,{isLoading:p.submitLoading,loadingText:p.loadingText,disabled:!p.submitActive,w:{base:"120px",md:"200px"},colorScheme:"green",onClick:i,children:"\u062d\u0641\u0638 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a"})]})}},252:function(e,n,t){"use strict";t.d(n,{J:function(){return c}});var a=t(5893),l=t(3789),r=t(4612),u=t(8790),i=t(1391),o=t(3441);function c(e){var n=e.type,t=e.value,c=e.name,s=e.label,p=e.onChange,m=e.width,v=e.options,d=e.readOnly,f=void 0!==d&&d;return(0,a.jsxs)(l.NI,{maxW:m||"500px",children:[(0,a.jsx)(l.lX,{htmlFor:c,children:s}),("text"===n||"number"===n||"array"===n)&&(0,a.jsx)(r.II,{color:"orange.500",readOnly:"image"===c||f,id:c,focusBorderColor:"orange.500",type:n,name:c,value:"object"===typeof t?t.join(","):t,onChange:function(e){return p(c,e.target.value)}}),"select"===n&&(0,a.jsx)(u.kC,{sx:{"div > div":{left:"10px",right:"unset"}},children:(0,a.jsx)(i.Ph,{id:c,value:t,onChange:function(e){return p(c,e.target.value)},name:c,placeholder:s,children:null===v||void 0===v?void 0:v.map((function(e,n){return(0,a.jsx)("option",{value:e.value,children:e.label},n)}))})}),"textarea"===n&&(0,a.jsx)(o.g,{color:"orange.500",id:c,focusBorderColor:"orange.500",name:c,value:t,onChange:function(e){return p(c,e.target.value)}})]})}},4781:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(5893),l=t(8790),r=t(9609);function u(e){var n=e.text;return(0,a.jsxs)(l.kC,{p:"3",flex:"1",justifyContent:"center",flexDir:"column",alignItems:"center",children:[(0,a.jsx)(r.$,{transform:"translate(-50%, -50%)",thickness:"7px",speed:"0.65s",w:"8rem",h:"8rem",emptyColor:"orange.200",color:"orange.700"}),n&&(0,a.jsx)(l.xv,{children:n})]})}},4298:function(e,n,t){e.exports=t(3573)}},function(e){e.O(0,[260,774,888,179],(function(){return n=332,e(e.s=n);var n}));var n=e.O();_N_E=n}]);