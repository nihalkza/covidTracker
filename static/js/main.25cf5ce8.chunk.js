(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3fodz",card:"Cards_card__1KHNp",infacted:"Cards_infacted__2_eY3",recovered:"Cards_recovered__1p5L3",deaths:"Cards_deaths__3sYfD",red:"Cards_red__2jzUD",blue:"Cards_blue__2sho_",green:"Cards_green__183h-"}},14:function(e,t,a){e.exports={container:"App_container__3yal-",logofont:"App_logofont__3ocCY",logospin:"App_logospin__1jMZ7",spin:"App_spin__21d7N",logo:"App_logo__3sbbQ",c1:"App_c1__3N9LN",c2:"App_c2__2MsmH",c3:"App_c3__2HlWC",c4:"App_c4__jvUD-"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=a(6),l=a.n(s),u=a(10),i=a(73),d=a(74),p=a(84),m=a(83),f=a(224),v=a(229),_=a(225),h=a(226),E=a(11),b=a.n(E),g=a(33),C=a.n(g),y=a(34),x=a.n(y),N=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?(console.log(a),r.a.createElement("div",{className:b.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(b.a.card,b.a.infacted)},r.a.createElement(_.a,null,r.a.createElement(h.a,{className:b.a.blue},r.a.createElement("strong",null,"Infacted")),r.a.createElement(h.a,{varient:"h5"},r.a.createElement(C.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{varient:"body2"},"Number of Active cases in COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(b.a.card,b.a.recovered)},r.a.createElement(_.a,null,r.a.createElement(h.a,{className:b.a.green},r.a.createElement("strong",null,"Recovered")),r.a.createElement(h.a,{varient:"h5"},r.a.createElement(C.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{varient:"body2"},"Last Update"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(b.a.card,b.a.deaths)},r.a.createElement(_.a,null,r.a.createElement(h.a,{className:b.a.red},r.a.createElement("strong",null,"Deaths")),r.a.createElement(h.a,{varient:"h5"},r.a.createElement(C.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString())))))):"Loading..."},j=a(32),w=a(35),O=a.n(w),D="https://covid19.mathdro.id/api",k=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,c,o,s,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,i={confirmed:c,recovered:o,deaths:s,lastUpdate:u},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log("Error in API Request");case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in API Request");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in API Request");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(46),U=a(80),R=a.n(U),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)(),d=Object(j.a)(i,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=p?r.a.createElement(I.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"blue",backgroundColor:"#111",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"red",fill:!0}]}}):null,v=a?r.a.createElement(I.a,{data:{labels:["Infacted","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["blue","green","red"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current Status of ".concat(s)}}}):null;return r.a.createElement("div",{className:R.a.container},s?v:f)},P=a(228),M=a(227),V=a(81),q=a.n(V),H=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(P.a,{className:q.a.formControl},r.a.createElement(M.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Y=a(14),z=a.n(Y),J=a(82),T=a.n(J),B=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:z.a.container},r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{className:z.a.logospin,src:T.a,alt:"COVID-19"}),r.a.createElement("p",{className:z.a.logofont},r.a.createElement("span",{className:z.a.c2},"Online "),r.a.createElement("span",{className:z.a.c1},"COVID-19 "),r.a.createElement("span",{className:z.a.c3},"Record "),r.a.createElement("span",{className:z.a.c4},"Tracker")),r.a.createElement("small",null,"Last Update: ",new Date(t.lastUpdate).toTimeString())),r.a.createElement(N,{data:t}),r.a.createElement(H,{handleCountryChange:this.handleCountryChange}),r.a.createElement(L,{data:t,country:a}))}}]),a}(n.Component);o.a.render(r.a.createElement(B,null),document.getElementById("root"))},80:function(e,t,a){e.exports={container:"Chart_container__2tbC5"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1h6NM"}},82:function(e,t,a){e.exports=a.p+"static/media/logo.662041f6.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.25cf5ce8.chunk.js.map