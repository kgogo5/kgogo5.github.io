(this.webpackJsonpmasterclass=this.webpackJsonpmasterclass||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t.n(c),i=t(25),o=t.n(i),s=t(11),a=t(7),l=t(18),d=t(4),b=t(6),j="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(j,"/coins")).then((function(n){return n.json()}))}var h,p,x,m,g,O,f,v,y,k,C,_,q,w,S,L,D,N,P,U,F,I=t(0),Q=b.c.ul(h||(h=Object(a.a)(["\n  margin: 0;\n  padding: 0;\n"]))),z=b.c.li(p||(p=Object(a.a)(["\n  padding: 1em 2em;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(0, 0, 0, 0.2);\n  color: ",";\n  border-radius: 5px;\n  & span {\n    color: ",";\n  }\n  & + li {\n    margin-top: 1em;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return!0===n.isPositive?"rgb(67, 134, 249)":!1===n.isPositive?"rgb(247, 84, 103)":n.theme.textColor})),M=function(n){var e=n.coinId,t=Object(s.useQuery)(["price",e],(function(){return function(n){return fetch("".concat(j,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),c=t.isLoading,r=t.data,i=function(n){return n>=0};return Object(I.jsx)(I.Fragment,{children:c?"Loading...":Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(Q,{children:[Object(I.jsxs)(z,{children:[Object(I.jsx)("strong",{children:"Price"}),Object(I.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.quotes.USD.ath_price]})]}),Object(I.jsxs)(z,{isPositive:i(Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_15m)),children:[Object(I.jsx)("strong",{children:"15 Minute"}),Object(I.jsxs)("span",{children:[Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_15m),"%"]})]}),Object(I.jsxs)(z,{isPositive:i(Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h)),children:[Object(I.jsx)("strong",{children:"1 Hour"}),Object(I.jsxs)("span",{children:[Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h),"%"]})]}),Object(I.jsxs)(z,{isPositive:i(Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_12h)),children:[Object(I.jsx)("strong",{children:"12 Hour"}),Object(I.jsxs)("span",{children:[Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_12h),"%"]})]}),Object(I.jsxs)(z,{isPositive:i(Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h)),children:[Object(I.jsx)("strong",{children:"1 Day"}),Object(I.jsxs)("span",{children:[Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h),"%"]})]}),Object(I.jsxs)(z,{isPositive:i(Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_30d)),children:[Object(I.jsx)("strong",{children:"1 Month"}),Object(I.jsxs)("span",{children:[Number(null===r||void 0===r?void 0:r.quotes.USD.percent_change_30d),"%"]})]})]})})})},A=t(42),T=t.n(A),R=function(n){var e=n.coinId,t=Object(s.useQuery)(["chart",e],(function(){return function(n){var e=Math.ceil(Date.now()/1e3),t=e-1209600;return fetch("".concat(j,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data,i=null===r||void 0===r?void 0:r.map((function(n){return{x:String(n.time_close).slice(5,10),y:[n.open.toFixed(2),Number(n.high).toFixed(2),n.low.toFixed(2),Number(n.close).toFixed(2)]}}));return Object(I.jsx)(I.Fragment,{children:c?"Loading...":Object(I.jsx)(T.a,{type:"candlestick",series:[{name:"Price",data:i}],options:{theme:{mode:"dark"},chart:{type:"candlestick",width:500,height:300,toolbar:{show:!1},background:"rgba(0,0,0,.3)"},grid:{show:!1},yaxis:{tooltip:{enabled:!0}},xaxis:{axisBorder:{show:!1},type:"datetime"},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})},B=t(27),H=b.c.div(x||(x=Object(a.a)(["\n  padding: 0 20px;\n"]))),K=b.c.header(m||(m=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=b.c.h1(g||(g=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),J=b.c.div(O||(O=Object(a.a)(["\n  text-align: center;\n"]))),$=b.c.div(f||(f=Object(a.a)(["\n  margin-top: 2em;\n  padding: 1em 2em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n\n  & > div {\n    min-width: 12%;\n  }\n\n  & strong {\n    display: block;\n    text-transform: uppercase;\n    font-size: 10px;\n  }\n  & span {\n    margin-top: 1em;\n    display: block;\n  }\n"]))),E=b.c.p(v||(v=Object(a.a)(["\n  margin-top: 2em;\n  line-height: 1.6;\n"]))),X=b.c.div(y||(y=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 2em 0;\n  gap: 1em;\n"]))),G=b.c.div(k||(k=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  & a {\n    padding: 1em 0;\n    display: block;\n    border-radius: 10px;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: ",";\n    font-size: 12px;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),V=b.c.button(C||(C=Object(a.a)(["\n  position: absolute;\n  left: 1em;\n  top: 1em;\n  width: 30px;\n  height: 30px;\n  font-size: 24px;\n  background: none;\n  font-weight: bold;\n  border: 0;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),W=function(){var n=Object(d.g)(),e=Object(d.h)().coinId,t=Object(d.e)().state,c=Object(d.f)("/:coinId/price"),r=Object(d.f)("/:coinId/chart"),i=Object(s.useQuery)(["info",e],(function(){return function(n){return fetch("".concat(j,"/coins/").concat(n)).then((function(n){return n.json()}))}(e)})),o=i.isLoading,a=i.data,b=Object(s.useQuery)(["tickers",e],(function(){return function(n){return fetch("".concat(j,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),u=b.isLoading,h=b.data,p=o||u;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(H,{children:[Object(I.jsx)(V,{onClick:function(){return n("/")},children:"<"}),Object(I.jsx)(B.a,{children:Object(I.jsxs)("title",{children:["\ucf54\uc778"," ",(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===a||void 0===a?void 0:a.name]})}),Object(I.jsx)(K,{children:Object(I.jsx)(Y,{children:(null===t||void 0===t?void 0:t.name)?t.name:p?"Loading...":null===a||void 0===a?void 0:a.name})}),p?Object(I.jsx)(J,{children:"Loading..."}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)($,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"RANK:"}),Object(I.jsx)("span",{children:null===h||void 0===h?void 0:h.rank})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"SYMBOL:"}),Object(I.jsx)("span",{children:null===h||void 0===h?void 0:h.symbol})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"Price:"}),Object(I.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price})]})]}),Object(I.jsx)(E,{children:null===a||void 0===a?void 0:a.description}),Object(I.jsxs)($,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"TOTAL SUPLY:"}),Object(I.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"MAX SUPPLY:"}),Object(I.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(I.jsxs)(X,{children:[Object(I.jsx)(G,{isActive:null!==r,children:Object(I.jsx)(l.b,{to:"chart",children:"Chart"})}),Object(I.jsx)(G,{isActive:null!==c,children:Object(I.jsx)(l.b,{to:"price",children:"Price"})})]}),Object(I.jsxs)(d.c,{children:[Object(I.jsx)(d.a,{path:"chart",element:Object(I.jsx)(R,{coinId:e})}),Object(I.jsx)(d.a,{path:"price",element:Object(I.jsx)(M,{coinId:e})})]})]})]})})},Z=b.c.div(_||(_=Object(a.a)(["\n  padding: 0 20px;\n"]))),nn=b.c.header(q||(q=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),en=b.c.ul(w||(w=Object(a.a)(["\n  margin: 2em 0 0;\n  padding: 0;\n"]))),tn=b.c.li(S||(S=Object(a.a)(["\n  margin-bottom: 15px;\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n\n  a {\n    padding: 20px;\n    display: flex;\n    transition: color 0.2s ease-in;\n    align-items: center;\n    color: ",";\n  }\n\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),cn=b.c.h1(L||(L=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),rn=b.c.div(D||(D=Object(a.a)(["\n  text-align: center;\n"]))),on=b.c.img(N||(N=Object(a.a)(["\n  margin-right: 1em;\n  width: 35px;\n  height: 35px;\n"]))),sn=function(){var n=Object(s.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(I.jsxs)(Z,{children:[Object(I.jsx)(B.a,{children:Object(I.jsx)("title",{children:"\ucf54\uc778"})}),Object(I.jsx)(nn,{children:Object(I.jsx)(cn,{children:"\ucf54\uc778"})}),e?Object(I.jsx)(rn,{children:"Loading..."}):Object(I.jsx)(en,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(I.jsx)(tn,{children:Object(I.jsxs)(l.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(I.jsx)(on,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:""}),n.name," \u2192"]})},n.id)}))})]})},an=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(l.a,{children:Object(I.jsxs)(d.c,{children:[Object(I.jsx)(d.a,{path:"/",element:Object(I.jsx)(sn,{})}),Object(I.jsx)(d.a,{path:"/:coinId/*",element:Object(I.jsx)(W,{})})]})})})},ln=t(45),dn=Object(b.b)(P||(P=Object(a.a)(["\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Noto Sans KR', sans-serif;\n  background-color: ",";\n  color: ",";\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),bn=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(dn,{}),Object(I.jsx)(an,{}),Object(I.jsx)(ln.ReactQueryDevtools,{initialIsOpen:!0})]})},jn=t(17),un={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#8866ee"},hn={bgColor:"#f5f6fa",textColor:"#2f3640",accentColor:"#c71313"},pn=b.c.button(U||(U=Object(a.a)(["\n  position: absolute;\n  right: 2em;\n  top: 2em;\n  padding: 0.5em 1em;\n  background-color: ",";\n  color: ",";\n  border: 0;\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),xn=b.c.div(F||(F=Object(a.a)(["\n  position: relative;\n  margin: 2em auto 6em;\n  max-width: 620px;\n"]))),mn=function(n){var e=n.children,t=Object(c.useState)(!0),r=Object(jn.a)(t,2),i=r[0],o=r[1];return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(b.a,{theme:i?un:hn,children:Object(I.jsxs)(xn,{children:[Object(I.jsx)(pn,{onClick:function(){return o(!i)},children:i?"Light Theme":"Dark Theme"}),e]})})})},gn=new s.QueryClient;o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(s.QueryClientProvider,{client:gn,children:Object(I.jsx)(mn,{children:Object(I.jsx)(bn,{})})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.062b89d5.chunk.js.map