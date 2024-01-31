import{_ as W,g as Z,i as q,f as R,c as J,h as z,m as K,T as Q}from"./theme.j0Ye5sIL.js";import"./index.DkoCfqcs.js";import{d as I,c as j,o as m,a as f,n as E,b as H,e as c,W as U,h as X,u as Y,k as tt,a0 as u,q as O,C as x,v as D,y as P,N,a1 as et,a2 as ot,_ as nt}from"./framework.x10tvMrD.js";const it=I({name:"IconShareAlt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:e}){const o=Z("icon"),s=j(()=>[o,`${o}-share-alt`,{[`${o}-spin`]:t.spin}]),r=j(()=>{const n={};return t.size&&(n.fontSize=q(t.size)?`${t.size}px`:t.size),t.rotate&&(n.transform=`rotate(${t.rotate}deg)`),n});return{cls:s,innerStyle:r,onClick:n=>{e("click",n)}}}}),st=["stroke-width","stroke-linecap","stroke-linejoin"],rt=c("path",{d:"M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847"},null,-1),at=[rt];function ct(t,e,o,s,r,a){return m(),f("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:E(t.cls),style:H(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:e[0]||(e[0]=(...n)=>t.onClick&&t.onClick(...n))},at,14,st)}var T=W(it,[["render",ct]]);const lt=Object.assign(T,{install:(t,e)=>{var o;const s=(o=e==null?void 0:e.iconPrefix)!=null?o:"";t.component(s+T.name,T)}}),ut=I({name:"IconTrophy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:t=>["butt","round","square"].includes(t)},strokeLinejoin:{type:String,default:"miter",validator:t=>["arcs","bevel","miter","miter-clip","round"].includes(t)},rotate:Number,spin:Boolean},emits:{click:t=>!0},setup(t,{emit:e}){const o=Z("icon"),s=j(()=>[o,`${o}-trophy`,{[`${o}-spin`]:t.spin}]),r=j(()=>{const n={};return t.size&&(n.fontSize=q(t.size)?`${t.size}px`:t.size),t.rotate&&(n.transform=`rotate(${t.rotate}deg)`),n});return{cls:s,innerStyle:r,onClick:n=>{e("click",n)}}}}),dt=["stroke-width","stroke-linecap","stroke-linejoin"],mt=c("path",{d:"M24 33c-6.075 0-11-4.925-11-11m11 11c6.075 0 11-4.925 11-11M24 33v8M13 22V7h22v15m-22 0V9H7v7a6 6 0 0 0 6 6Zm22 0V9h6v7a6 6 0 0 1-6 6ZM12 41h24"},null,-1),ht=[mt];function ft(t,e,o,s,r,a){return m(),f("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:E(t.cls),style:H(t.innerStyle),"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,onClick:e[0]||(e[0]=(...n)=>t.onClick&&t.onClick(...n))},ht,14,dt)}var V=W(ut,[["render",ft]]);const pt=Object.assign(V,{install:(t,e)=>{var o;const s=(o=e==null?void 0:e.iconPrefix)!=null?o:"";t.component(s+V.name,V)}});var F={exports:{}};(function(t,e){(function(o,s){t.exports=s()})(R,function(){return function(o,s,r){o=o||{};var a=s.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $(i,l,g,S){return a.fromToBase(i,l,g,S)}r.en.relativeTime=n,a.fromToBase=function(i,l,g,S,B){for(var b,p,v,k=g.$locale().relativeTime||n,w=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],M=w.length,h=0;h<M;h+=1){var d=w[h];d.d&&(b=S?r(i).diff(g,d.d,!0):g.diff(i,d.d,!0));var _=(o.rounding||Math.round)(Math.abs(b));if(v=b>0,_<=d.r||!d.r){_<=1&&h>0&&(d=w[h-1]);var C=k[d.l];B&&(_=B(""+_)),p=typeof C=="string"?C.replace("%d",_):C(_,l,d.l,v);break}}if(l)return p;var y=v?k.future:k.past;return typeof y=="function"?y(p):y.replace("%s",p)},a.to=function(i,l){return $(i,l,this,!0)},a.from=function(i,l){return $(i,l,this)};var L=function(i){return i.$u?r.utc():r()};a.toNow=function(i){return this.to(L(this),i)},a.fromNow=function(i){return this.from(L(this),i)}}})})(F);var _t=F.exports;const gt=J(_t),A=t=>(et("data-v-cfe2a0ab"),t=t(),ot(),t),vt={class:"meta-wrapper"},kt={class:"meta-item original"},wt={class:"meta-item"},yt=A(()=>c("span",{class:"meta-icon author"},[c("svg",{role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[c("title",null,"原创作者"),c("path",{d:"M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"})])],-1)),Ct={class:"meta-content"},$t=["href"],St=["title"],bt={class:"meta-item"},Mt={class:"meta-icon date"},zt={role:"img",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},xt={key:0},jt={key:1},Lt=A(()=>c("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1)),Bt=A(()=>c("path",{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"},null,-1)),Nt=["datetime","title"],Tt=I({__name:"ArticleMetadata",props:{article:Object,showCategory:{type:Boolean,default:!0}},setup(t){var p,v,k,w,M,h;const e=t;z.extend(gt),z.locale("zh-cn");const{theme:o,page:s}=U(),r=X({isOriginal:((p=e.article)==null?void 0:p.isOriginal)??!0,author:((v=e.article)==null?void 0:v.author)??o.value.articleMetadataConfig.author,authorLink:((k=e.article)==null?void 0:k.authorLink)??o.value.articleMetadataConfig.authorLink,showViewCount:((w=o.value.articleMetadataConfig)==null?void 0:w.showViewCount)??!1,viewCount:0,date:new Date(e.article.date),categories:((M=e.article)==null?void 0:M.categories)??[],tags:((h=e.article)==null?void 0:h.tags)??[],showCategory:e.showCategory}),{isOriginal:a,author:n,authorLink:$,showViewCount:L,viewCount:i,date:l,toDate:g,categories:S,tags:B,showCategory:b}=Y(r);return r.showViewCount&&tt(()=>{$api.getArticleViewCount(K(e.article.title+e.article.date),location.href,function(d){r.viewCount=d})}),(d,_)=>{const C=pt,y=Q,G=lt;return m(),f("div",vt,[c("div",kt,[u(a)?(m(),O(y,{key:0,color:"orangered",title:"原创文章"},{icon:x(()=>[D(C)]),default:x(()=>[P(" 原创 ")]),_:1})):(m(),O(y,{key:1,color:"arcoblue",title:"转载文章"},{icon:x(()=>[D(G)]),default:x(()=>[P(" 转载 ")]),_:1}))]),c("div",wt,[yt,c("span",Ct,[u(a)?(m(),f("a",{key:0,href:u($),title:"进入作者主页"},N(u(n)),9,$t)):(m(),f("span",{key:1,title:u(n)},N(u(n)),9,St))])]),c("div",bt,[c("span",Mt,[(m(),f("svg",zt,[u(a)?(m(),f("title",xt,"发布时间")):(m(),f("title",jt,"转载时间")),Lt,Bt]))]),c("time",{class:"meta-content",datetime:u(l).toISOString(),title:u(z)().to(u(z)(u(l)))},N(u(l).toLocaleString("zh",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})),9,Nt)])])}}}),Ot=nt(Tt,[["__scopeId","data-v-cfe2a0ab"]]);export{Ot as _};
