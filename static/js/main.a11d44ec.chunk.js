(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{39:function(e,t,a){e.exports=a(70)},44:function(e,t,a){},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),i=(a(44),a(9)),l=a.n(i),s=a(12),d=a(28),m=a(29),u=a(37),v=a(36),p=(a(46),a(30)),h=a.n(p),f=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://covid19.mathdro.id/api");case 3:return t=e.sent,a=t.data,r={confirmed:a.confirmed,recovered:a.recovered,deaths:a.deaths,lastUpdate:a.lastUpdate},e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=a(84),y=a(86),g=a(85),x=a(87),w=a(8),b=a.n(w),_=a(15),S=a.n(_),k=a(16),C=a.n(k),D=a(31),j=function(e){var t=e.covidData,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"50px",marginLeft:"0px",marginRight:"0px"}},n.a.createElement(E.a,{container:!0,justify:"center",spacing:3},n.a.createElement(E.a,{item:!0,component:y.a,xm:12,md:3,className:C()(b.a.card,b.a.infected)},n.a.createElement(g.a,null,n.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(x.a,{variant:"h5",style:{color:"red"}},n.a.createElement(S.a,{start:0,end:a.value,duration:2.5,saperator:","})),n.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(x.a,{varient:"body2"},"Number of Active Cases of Covid19"))),n.a.createElement(E.a,{item:!0,component:y.a,xm:12,md:3,className:C()(b.a.card,b.a.recovered)},n.a.createElement(g.a,null,n.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(x.a,{variant:"h5",style:{color:"green"}},n.a.createElement(S.a,{start:0,end:r.value,duration:2.5,saperator:","})," "),n.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(x.a,{varient:"body2"},"Number of Recoveries from Covid19"))),n.a.createElement(E.a,{item:!0,component:y.a,xm:12,md:3,className:C()(b.a.card,b.a.deaths)},n.a.createElement(g.a,null,n.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(x.a,{variant:"h5",style:{color:"red"}},n.a.createElement(S.a,{start:0,end:c.value,duration:2.5,saperator:","})),n.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(x.a,{varient:"body2"},"Number of Death Caused by Covid19"))))):n.a.createElement("div",null,n.a.createElement(D.a,{viewBox:"0 0 400 160",height:160,width:400,speed:.5,backgroundColor:"gray"},n.a.createElement("circle",{cx:"150",cy:"150",r:"8"}),n.a.createElement("circle",{cx:"194",cy:"150",r:"8"}),n.a.createElement("circle",{cx:"238",cy:"150",r:"8"})))},N=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={covid:{}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.setState({covid:t}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(j,{covidData:this.state.covid}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={card:"Cards_card__VdSn3",infected:"Cards_infected__3xn9j",recovered:"Cards_recovered__81i0G",deaths:"Cards_deaths__2Uvem"}}},[[39,1,2]]]);
//# sourceMappingURL=main.a11d44ec.chunk.js.map