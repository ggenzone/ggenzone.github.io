import{S as L,i as M,s as O,k as d,q as k,a as y,l as _,m as v,r as A,h,c as H,n as b,p as Q,b as j,E as c,B as F,I as T,u as x}from"./index-6c33c1a3.js";import{p as U}from"./stores-99ec1d34.js";function G(n){let e,a=n[0].firstname+"",l;return{c(){e=d("span"),l=k(a),this.h()},l(r){e=_(r,"SPAN",{class:!0});var t=v(e);l=A(t,a),t.forEach(h),this.h()},h(){b(e,"class","font-black")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].firstname+"")&&x(l,a)},d(r){r&&h(e)}}}function J(n){let e,a=n[0].lastname+"",l;return{c(){e=d("span"),l=k(a),this.h()},l(r){e=_(r,"SPAN",{class:!0});var t=v(e);l=A(t,a),t.forEach(h),this.h()},h(){b(e,"class","font-extralight")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].lastname+"")&&x(l,a)},d(r){r&&h(e)}}}function K(n){let e,a=n[0].tagline+"",l;return{c(){e=d("h2"),l=k(a),this.h()},l(r){e=_(r,"H2",{class:!0});var t=v(e);l=A(t,a),t.forEach(h),this.h()},h(){b(e,"class","md:text-xl")},m(r,t){j(r,e,t),c(e,l)},p(r,t){t&1&&a!==(a=r[0].tagline+"")&&x(l,a)},d(r){r&&h(e)}}}function W(n){let e,a,l,r,t,E,N,P,R,g,V,S,I,p,m,$,w,o=n[0].firstname&&G(n),f=n[0].lastname&&J(n),u=n[0].tagline&&K(n);return{c(){e=d("div"),a=d("a"),l=k("About"),t=y(),E=d("a"),N=k("Resume"),R=y(),g=d("a"),V=k("Projects"),I=y(),p=d("div"),m=d("h1"),o&&o.c(),$=y(),f&&f.c(),w=y(),u&&u.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var i=v(e);a=_(i,"A",{class:!0,href:!0});var B=v(a);l=A(B,"About"),B.forEach(h),t=H(i),E=_(i,"A",{class:!0,href:!0});var C=v(E);N=A(C,"Resume"),C.forEach(h),R=H(i),g=_(i,"A",{class:!0,href:!0});var z=v(g);V=A(z,"Projects"),z.forEach(h),i.forEach(h),I=H(s),p=_(s,"DIV",{class:!0});var q=v(p);m=_(q,"H1",{class:!0,style:!0});var D=v(m);o&&o.l(D),$=H(D),f&&f.l(D),D.forEach(h),w=H(q),u&&u.l(q),q.forEach(h),this.h()},h(){b(a,"class",r=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/"?"border-b-blue-600":""}`),b(a,"href","/"),b(E,"class",P=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/resume/"?"border-b-blue-600":""}`),b(E,"href","/resume/"),b(g,"class",S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${n[1].url.pathname=="/projects/"?"border-b-blue-600":""}`),b(g,"href","/projects/"),b(e,"class","flex gap-10 print:hidden"),b(m,"class","text-3xl md:text-6xl"),Q(m,"font-variation-settings","'wdth' 125"),b(p,"class","flex flex-col gap-6 print:mt-10 print:gap-2")},m(s,i){j(s,e,i),c(e,a),c(a,l),c(e,t),c(e,E),c(E,N),c(e,R),c(e,g),c(g,V),j(s,I,i),j(s,p,i),c(p,m),o&&o.m(m,null),c(m,$),f&&f.m(m,null),c(p,w),u&&u.m(p,null)},p(s,[i]){i&2&&r!==(r=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/"?"border-b-blue-600":""}`)&&b(a,"class",r),i&2&&P!==(P=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/resume/"?"border-b-blue-600":""}`)&&b(E,"class",P),i&2&&S!==(S=`text-sm py-1 border-b-transparent border-b-2 hover:border-blue-600 ${s[1].url.pathname=="/projects/"?"border-b-blue-600":""}`)&&b(g,"class",S),s[0].firstname?o?o.p(s,i):(o=G(s),o.c(),o.m(m,$)):o&&(o.d(1),o=null),s[0].lastname?f?f.p(s,i):(f=J(s),f.c(),f.m(m,null)):f&&(f.d(1),f=null),s[0].tagline?u?u.p(s,i):(u=K(s),u.c(),u.m(p,null)):u&&(u.d(1),u=null)},i:F,o:F,d(s){s&&h(e),s&&h(I),s&&h(p),o&&o.d(),f&&f.d(),u&&u.d()}}}function X(n,e,a){let l;T(n,U,t=>a(1,l=t));let{resume:r}=e;return n.$$set=t=>{"resume"in t&&a(0,r=t.resume)},[r,l]}class ee extends L{constructor(e){super(),M(this,e,X,W,O,{resume:0})}}export{ee as H};