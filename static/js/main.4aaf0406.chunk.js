(this["webpackJsonpcrypto-js-demo"]=this["webpackJsonpcrypto-js-demo"]||[]).push([[0],{22:function(e,t,c){"use strict";(function(e){var s=c(13),n=c(5),r=c(0),j=c(23),a=c(11),i=c.n(a),b=c(2);t.a=function(){var t=Object(r.useState)(""),c=Object(n.a)(t,2),a=c[0],d=c[1],o=Object(r.useState)(""),p=Object(n.a)(o,2),O=p[0],l=p[1],u=Object(r.useState)(""),x=Object(n.a)(u,2),h=x[0],f=x[1],y=Object(r.useState)(""),g=Object(n.a)(y,2),m=g[0],S=g[1],v=Object(j.a)({defaultValues:{message:"",key:""}}),E=v.register,T=v.watch,A=T("messageToEncrypt"),D=T("messageToDecrypt"),k=T("messageToDecode"),F=T("key");return Object(r.useEffect)((function(){if(A){var t=i.a.AES.encrypt(A,F).toString();d(t);var c=e.from(t,"utf-8");f(c.toString("base64"))}if(D){var s=i.a.AES.decrypt(D,F);l(s.toString(i.a.enc.Utf8))}if(k){var n=e.from(k,"base64").toString("ascii"),r=i.a.AES.decrypt(n,F);S(r.toString(i.a.enc.Utf8))}}),[A,D,k,F]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Key: "}),Object(b.jsx)("input",Object(s.a)({type:"text"},E("key",{required:!0})))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Message to encrypt: "}),Object(b.jsx)("input",Object(s.a)({type:"text"},E("messageToEncrypt",{required:!0})))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Message to decrypt: "}),Object(b.jsx)("input",Object(s.a)({type:"text"},E("messageToDecrypt",{required:!0})))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Message to decode + decrypt: "}),Object(b.jsx)("input",Object(s.a)({type:"text"},E("messageToDecode",{required:!0})))]})]}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{children:[" Encrypt AES: ",a]})}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{children:[" Decrypt AES: ",O]})}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{children:[" Encrypt to Base64: ",h]})}),Object(b.jsx)("p",{children:Object(b.jsxs)("span",{children:[" Decrypt to text: ",m]})})]})}}).call(this,c(30).Buffer)},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(21),j=c.n(r),a=(c(28),c(29),c(22)),i=c(2);var b=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(a.a,{})})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),s(e),n(e),r(e),j(e)}))};j.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),d()}},[[61,1,2]]]);
//# sourceMappingURL=main.4aaf0406.chunk.js.map