"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{7176:function(e,n,t){t.d(n,{Z:function(){return B}});var r=t(4051),i=t.n(r),o=t(5893),a=t(8790),u=t(3789),s=t(4612),c=t(5054),l=t(7294),f=t(331),d=t(8873),m=t(6107),p=t(7470);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}var b=/(?=^\S*$)(?=.{8,})/,g=[{label:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u0642\u062f\u064a\u0645\u0629",re:b,name:"password",errorMessage:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0623\u0643\u062b\u0631 \u0645\u0646 8 \u0623\u062d\u0631\u0641 \u0648\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u064a \u0645\u0633\u0627\u0641\u0629"},{label:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",re:b,name:"newPassword",errorMessage:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0623\u0643\u062b\u0631 \u0645\u0646 8 \u0623\u062d\u0631\u0641 \u0648\u0644\u0627 \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u064a \u0645\u0633\u0627\u0641\u0629"}],x={password:"",newPassword:""},y={submitActive:!0,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"};function j(e){var n=e.id,t=void 0===n?"":n,r=e.isAdminUpdate,i=void 0!==r&&r,c=function(){A("none"),I(y),w(x),C(x),Z(!1)},f=function(e){var n=e.target,t=n.name,r=n.value;Z(!0),w(v({},j,h({},t,r))),A("flex"),i&&(b.test(r)?C(v({},O,h({},t,"fine"))):C(v({},O,h({},t,""))));var o=g.find((function(e){return e.name===t}));o&&(o.re.test(r)?C(v({},O,h({},t,"fine"))):C(v({},O,h({},t,""))))},m=(0,l.useState)(x),j=m[0],w=m[1],S=(0,l.useState)(x),O=S[0],C=S[1],k=(0,l.useState)("none"),P=k[0],A=k[1],_=(0,l.useState)(y),B=_[0],I=_[1],D=(0,l.useState)(!1),E=D[0],Z=D[1];return(0,l.useEffect)((function(){return i&&O.password?I(v({},B,{submitActive:!0})):i&&!O.password?I(v({},B,{submitActive:!1})):void(O.password&&O.newPassword?I(v({},B,{submitActive:!0})):I(v({},B,{submitActive:!1})))}),[O]),(0,o.jsxs)(a.kC,{p:"2",flexDir:"column",gap:"3",layerStyle:"flexCenter",children:[(0,o.jsx)(a.xv,{mb:"4",fontSize:"xl",color:"orange.800",fontWeight:"bold",children:"\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"}),g.map((function(e,n){if(!i||1!==n)return(0,o.jsxs)(u.NI,{isInvalid:!!E&&!O[e.name],children:[(0,o.jsxs)(s.BZ,{children:[(0,o.jsx)(s.Ui,{w:"160px",color:"white",bg:"orange.500",children:i?"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631":e.label}),(0,o.jsx)(s.II,{onChange:f,type:"password",_placeholder:{color:"gray.300"},variant:"outline",errorBorderColor:"crimson",name:e.name,focusBorderColor:"orange.500",value:j[e.name]})]}),(0,o.jsxs)(u.J1,{children:[" ",e.errorMessage," "]})]},n)})),(0,o.jsx)(d.Z,{display:P,onReset:c,onSubmit:function(){(0,p.Cp)(j,t,i),c()},submitButton:B})]})}var w=t(830);function S(e){var n=e.isOpen,t=e.onClose,r=e.onSubmit,i=e.title,a=e.text,u=l.useRef(null);return(0,o.jsx)(w.aR,{isOpen:n,leastDestructiveRef:u,onClose:t,children:(0,o.jsx)(w.dh,{children:(0,o.jsxs)(w._T,{children:[(0,o.jsx)(w.fY,{fontSize:"lg",fontWeight:"bold",children:i}),(0,o.jsx)(w.iP,{children:a}),(0,o.jsxs)(w.xo,{children:[(0,o.jsx)(c.zx,{ref:u,onClick:t,children:"\u0627\u0644\u063a\u0627\u0621"}),(0,o.jsx)(c.zx,{colorScheme:"red",onClick:r,mr:3,children:"\u062a\u0627\u0643\u064a\u062f"})]})]})})})}function O(e,n,t,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,i)}function C(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){O(o,r,i,a,u,"next",e)}function u(e){O(o,r,i,a,u,"throw",e)}a(void 0)}))}}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){k(e,n,t[n])}))}return e}var A={submitActive:!0,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"},_=[{label:"\u0627\u0644\u0627\u0633\u0645",name:"name",type:"text",errorMessage:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u0631\u0643 \u0627\u0644\u0627\u0633\u0645 \u0641\u0627\u0631\u063a\u0627"},{label:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629",name:"lastName",type:"text",errorMessage:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u0631\u0643 \u0627\u0644\u0627\u0633\u0645 \u0641\u0627\u0631\u063a\u0627"},{label:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a ",name:"email",re:/^([a-zA-Z0-9_\-?\.?]+)@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/,errorMessage:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u063a\u064a\u0631 \u0635\u062d\u064a\u062d",type:"text"},{label:"\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",name:"phone",type:"number"}];var B=function(e){var n=e.user,t=e.isAdminUpdate,r=void 0!==t&&t,p=function(e,n){I(P({},B,k({},e,""===n?"":"fine")))},h=function(){Z(!1),T("none"),L(A)},v=function(e){var n=e.target,t=n.name,r=n.value;w(P({},y,k({},t,r))),Z(!0);var i=_.find((function(e){return e.name===t}));i&&(i.re?i.re.test(r)?p(t,"fine"):p(t,""):p(t,r?"fine":""))},b=(0,f.oR)((function(e){return e.setUser})),g=(0,f.oR)((function(e){return e.user})),x=(0,l.useState)(n.profile),y=x[0],w=x[1],O=(0,l.useState)(n.profile),B=O[0],I=O[1],D=(0,l.useState)(!1),E=D[0],Z=D[1],z=(0,l.useState)("none"),R=z[0],T=z[1],W=(0,l.useState)(A),U=W[0],L=W[1],M=(0,l.useState)(!1),N=M[0],F=M[1],J=function(){return F(!1)};function $(){return($=C(i().mark((function e(){var t,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L((function(e){return P({},e,{submitLoading:!0})})),y.password&&delete y.password,t={method:"patch",data:y,successToast:"\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0646\u062c\u0627\u062d",errorToast:"\u062a\u0645 \u0627\u062f\u062e\u0627\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u062e\u0627\u0637\u0626\u0629"},!r){e.next=6;break}return(0,m._)(P({url:"admin/account/"+n._id+"?path=admin"},t)),e.abrupt("return",h());case 6:return e.next=8,(0,m._)(P({url:"/users/account/"+n._id},t));case 8:(o=e.sent)&&b(o),h();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=C(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m._)({url:"/admin/user/".concat(n._id),method:"delete",successToast:"\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0634\u062e\u0635"});case 2:J();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){for(var e in B){if(""===B[e]||0===B[e]){L((function(e){return P({},e,{submitActive:!1})}));break}L((function(e){return P({},e,{submitActive:!0})})),T("flex")}}),[B]),(0,l.useEffect)((function(){w(n.profile),I(n.profile)}),[n]),(0,o.jsxs)(a.kC,{sx:{"div > div":{right:"unset",left:"10px"}},maxW:"700px",mx:"auto",gap:"3",flexDir:"column",children:[_.map((function(e,t){return n.role&&"phone"===e.name?null:(0,o.jsxs)(u.NI,{isInvalid:""===B[e.name],children:[(0,o.jsxs)(s.BZ,{children:[(0,o.jsx)(s.Ui,{w:{base:"120px",md:"160px"},bg:"orange.500",color:"white",children:e.label}),(0,o.jsx)(s.II,{onChange:v,type:e.type,_placeholder:{color:"gray.300"},variant:"outline",errorBorderColor:"crimson",name:e.name,focusBorderColor:"orange.500",value:y[e.name]})]}),(0,o.jsxs)(u.J1,{children:[" ",e.errorMessage," "]})]},t)})),(0,o.jsx)(d.Z,{onReset:function(){(null===g||void 0===g?void 0:g.role)?w(n.profile):w(null===g||void 0===g?void 0:g.profile),I(n.profile),T("none"),Z(!1),L(A)},onSubmit:function(){return $.apply(this,arguments)},display:R&&E?"flex":"none",submitButton:U}),(0,o.jsx)(j,{isAdminUpdate:r,id:n._id}),r&&(0,o.jsxs)(c.zx,{onClick:function(){return F(!0)},colorScheme:"red",children:[" ","\u062d\u0630\u0641 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"]}),r&&(0,o.jsx)(S,{onClose:J,onSubmit:function(){return X.apply(this,arguments)},title:"\u062d\u0630\u0641 ".concat(n.profile.name," \u0646\u0647\u0627\u0626\u064a\u0627"),isOpen:N,text:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0627\u0644\u0634\u062e\u0635"})]})}},2946:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(4051),i=t.n(r),o=t(5893),a=t(8790),u=t(3789),s=t(1391),c=t(4612),l=t(7294),f=t(331),d=t(8873),m=t(1018),p=t(6107);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n,t,r,i,o,a){try{var u=e[o](a),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,i)}function b(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){v(o,r,i,a,u,"next",e)}function u(e){v(o,r,i,a,u,"throw",e)}a(void 0)}))}}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}var y={submitActive:!0,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"},j=[{label:"  \u0644\u0627 \u064a\u0648\u062c\u062f \u0646\u0634\u0627\u0637",value:"sedentary"},{label:"  \u0646\u0634\u0627\u0637 \u062e\u0641\u064a\u0641 (\u0627 - 3 \u064a\u0648\u0645/ \u0627\u0633\u0628\u0648\u0639)",value:"light"},{label:"  \u0646\u0634\u0627\u0637 \u0645\u062a\u0648\u0633\u0637 (3 - 5 \u064a\u0648\u0645/ \u0627\u0633\u0628\u0648\u0639)",value:"moderate"},{label:"  \u0646\u0634\u064a\u0637 (6 - 7 \u064a\u0648\u0645/ \u0627\u0633\u0628\u0648\u0639)",value:"active"}],w=[{label:"\u0627\u0631\u064a\u062f \u0627\u0646\u0642\u0627\u0635 \u0648\u0632\u0646\u064a",value:"min"},{label:"\u0627\u0631\u064a\u062f \u0625\u0646\u0642\u0627\u0635 \u0627\u0643\u0628\u0631 \u0648\u0632\u0646 \u0645\u0645\u0643\u0646",value:"max"}];var S,O=(S=function(e){var n=e.user,t=e.isAdminUpdate,r=(e.shouldRender,function(e,n){A(x({},P,g({},e,""===n?"":"fine")))}),h=function(e){return e.desiredWeight===n.measurements.desiredWeight&&e.weight===n.measurements.weight?e:x({},e,{weightUpdateDate:new Date})},v=function(){F(!1),X("none"),G(y)},S=function(e){var n=e.target,t=n.name,i=n.value;I((function(e){return x({},e,g({},t,+i))})),F(!0);var o=m.Ol.find((function(e){return e.name===t}));o&&(+i>=o.min&&+i<=o.max?(r(t,"fine"),"weight"===t&&L("fine")):(r(t,""),"weight"===t&&L(""))),"desiredWeight"!==t&&"weight"!==t||O(t,+i)},O=function(e,n){"weight"!==e?"desiredWeight"===e&&(n<=B.weight&&n>=40?r(e,"fine"):r(e,"")):n>=B.desiredWeight&&B.desiredWeight>=40?r("desiredWeight","fine"):r("desiredWeight","")},C=(0,f.oR)((function(e){return e.setUser})),k=(0,l.useState)(n.measurements),P=k[0],A=k[1],_=(0,l.useState)(n.measurements),B=_[0],I=_[1],D=(0,l.useState)(n.physicalActivity),E=D[0],Z=D[1],z=(0,l.useState)(n.willing),R=z[0],T=z[1];(0,l.useEffect)((function(){I(n.measurements),A(n.measurements),Z(n.physicalActivity),T(n.willing)}),[n]);var W=(0,l.useState)(""),U=W[0],L=W[1],M=(0,l.useState)(!1),N=M[0],F=M[1],J=(0,l.useState)("none"),$=J[0],X=J[1],Y=(0,l.useState)(y),q=Y[0],G=Y[1];function H(){return(H=b(i().mark((function e(){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G((function(e){return x({},e,{submitLoading:!0})})),r={method:"patch",data:{measurements:h(B),physicalActivity:E,willing:R},successToast:"\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0646\u062c\u0627\u062d",errorToast:"\u062d\u062f\u062b \u062e\u0637\u0627 \u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627"},!t){e.next=6;break}return(0,p._)(x({url:"/admin//measure/"+n._id+"?path=admin"},r)),v(),e.abrupt("return");case 6:return e.next=8,(0,p._)(x({url:"/users/measure/"+n._id},r));case 8:(o=e.sent)&&C(o),v();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){for(var e in P){if(""===P[e]||0===P[e]){G((function(e){return x({},e,{submitActive:!1})}));break}G((function(e){return x({},e,{submitActive:!0})})),X("flex")}}),[P]),(0,l.useEffect)((function(){"fine"===U||P.weight?r("weight","fine"):r("weight","")}),[U]),(0,o.jsxs)(a.kC,{sx:{"div > div":{right:"unset",left:"10px"}},maxW:"700px",mx:"auto",gap:"3",flexDir:"column",children:[!t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.NI,{children:[(0,o.jsx)(u.lX,{fontSize:"xl",htmlFor:"activity",children:"\u0645\u062f\u0649 \u0646\u0634\u0627\u0637\u0643 \u0627\u0644\u0628\u062f\u0646\u064a \u0627\u0644\u064a\u0648\u0645\u064a"}),(0,o.jsx)(s.Ph,{id:"activity",bg:"orange.200",color:"gray.800",value:E,onChange:function(e){e.target.value&&(F(!0),Z(e.target.value))},children:j.map((function(e){var n=e.label,t=e.value;return(0,o.jsx)("option",{style:{backgroundColor:E===t?"DodgerBlue":""},value:t,children:n},t)}))})]}),(0,o.jsxs)(u.NI,{children:[(0,o.jsx)(u.lX,{fontSize:"xl",htmlFor:"activity",children:"\u0645\u062f\u0649 \u0625\u0633\u062a\u0639\u062f\u0627\u062f\u0643 \u0644\u0623\u0646\u0642\u0627\u0635 \u0627\u0644\u0648\u0632\u0646"}),(0,o.jsx)(s.Ph,{id:"activity",bg:"orange.200",color:"gray.800",value:R,onChange:function(e){e.target.value&&(F(!0),T(e.target.value))},children:w.map((function(e){var n=e.label,t=e.value;return(0,o.jsx)("option",{style:{backgroundColor:R===t?"DodgerBlue":""},value:t,children:n},t)}))})]})]}),m.Ol.map((function(e,n){return(0,o.jsxs)(u.NI,{isInvalid:""===P[e.name],children:[(0,o.jsxs)(c.BZ,{children:[(0,o.jsx)(c.Ui,{w:"160px",bg:"orange.500",color:"white",children:e.value}),(0,o.jsx)(c.II,{onChange:S,type:"number",_placeholder:{color:"gray.300"},variant:"outline",errorBorderColor:"crimson",name:e.name,focusBorderColor:"orange.500",value:0===B[e.name]?"":B[e.name],placeholder:e.label})]}),(0,o.jsxs)(u.J1,{children:[" ",e.errorMessage," "]})]},n)})),(0,o.jsx)(d.Z,{onReset:function(){A(n.measurements),I(n.measurements),Z(n.physicalActivity),L(""),X("none"),F(!1),G(y)},onSubmit:function(){return H.apply(this,arguments)},display:$&&N?"flex":"none",submitButton:q})]})},function(e){var n=(0,l.useState)(!1),t=n[0],r=n[1];return(0,l.useEffect)((function(){e.shouldRender?r(!0):r(!1)}),[e]),t?(0,o.jsx)(S,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},e)):(0,o.jsx)(o.Fragment,{children:" "})})},8873:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(5893),i=t(8790),o=t(5054);function a(e){var n=e.onReset,t=void 0===n?function(){}:n,a=e.onSubmit,u=void 0===a?function(){}:a,s=e.display,c=void 0===s?"none":s,l=e.submitButton,f=void 0===l?{submitActive:!1,submitLoading:!1,loadingText:"\u062c\u0627\u0631\u064a \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"}:l;return(0,r.jsxs)(i.kC,{display:c,my:"2",align:"center",w:"100%",justify:"space-around",children:[(0,r.jsx)(o.zx,{w:{base:"120px",md:"200px"},colorScheme:"yellow",onClick:t,children:"\u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a"}),(0,r.jsx)(o.zx,{isLoading:f.submitLoading,loadingText:f.loadingText,disabled:!f.submitActive,w:{base:"120px",md:"200px"},colorScheme:"green",onClick:u,children:"\u062d\u0641\u0638 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a"})]})}},4781:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(5893),i=t(8790),o=t(9609);function a(e){var n=e.text;return(0,r.jsxs)(i.kC,{p:"3",flex:"1",justifyContent:"center",flexDir:"column",alignItems:"center",children:[(0,r.jsx)(o.$,{transform:"translate(-50%, -50%)",thickness:"7px",speed:"0.65s",w:"8rem",h:"8rem",emptyColor:"orange.200",color:"orange.700"}),n&&(0,r.jsx)(i.xv,{children:n})]})}}}]);