(this["webpackJsonpca-3-frontend"]=this["webpackJsonpca-3-frontend"]||[]).push([[0],{157:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYxQTFRF////gICAqlVVqlVVv0BAs01NqkBAtDxLs0BNs0JMs0RNr0BItERLsz5MtUNKs0BNsENJtUBKsj9Is0JMsDxGtEJLskJJs0JJtEFLtUBKskFKs0BJtEFLs0BJtD9LtEBLs0BJtEBLsz9KskBLs0BKtD9Js0BKs0BJskBJs0FJs0BKtEFJs0BKs0FLtEBJskBJsj9Ls0BLs0FLs0BJskBKtEJLtEJMs0BJtEBKs0BKtENMs0BKs0BKtUNNs0BKtUNNskBKtUNNs0BKs0BKtERNsz9KtkRNs0BKtURNsz9Ks0BKtUJMs0BKs0JMtEJMtEJLsz9KtEJLuk1Wu09XuEhSuUlTvlNbwVlgtkZPt0dQwlpixmFos0BKtUNNsz9Ks0FLs0JLtEJMyWdts0BKtEBKzGtwzW1ys0BKtUNNtUROtkVOz3J20HN40XV60nd71n2A2H+D2YOG24eJ3YqM3ouN4I6Q4JCR45SV45WW5pma55ub6J2e6Z+f6qCg7KOj7KSk8a2s8q+u87Gv9LKw9bXx7gAAAGd0Uk5TAAIDBggKDBEUGx4gIiUmKCowNTY3OkJGR0hPUFJUVVhbXGFjZGlrbHR2eHp8goSIkpOdoKOmq66wtLu+wMfIycvL0NbX2dvj5unu7vLz8/f5+fn5+vr6+vv7+/v8/P39/f39/v7+/iJFE/0AAAD3SURBVChTY2CAAT5nc1kWBixAx90iwMdYnAlZjNNWT4CBV4CBXcU6zlMNSUI7MjjdRZMLrMbGAUnCLbe5Kic0xV6Vg4FBVwEhLphe3dzc3FSRFhFvpciGpEEpPbW8CSjV3FiWFBtoJsUMk2BRd0wPya4ESTU3FEcn+gojNHFruaQH5dWA5erS5eHiXNzc3BKGHulh+fXNzUX+rDBx5XQoSPFODy+MMoVr0Hfi5zfJrK0tSBcRM/JLl0RI2DEwGGQ1N5ekCzEwMIsyYJdABsgSjJbc2CVYkKwYrBKu0tKWGaWlOeka0nLIEjLJwABMAOIYIPbiAYsBAGH1WmpYAPtpAAAAAElFTkSuQmCC"},161:function(e,t,a){e.exports=a(285)},166:function(e,t,a){},194:function(e,t){},281:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(166),a(2)),s=a(11),i=a(12),u=a(13),m=a(14),d=a(15),p="https://kodebanditterne.dk/CA3-Backend-2.0",h="http://localhost:3000/orders";function f(e){return e.ok?e.json():Promise.reject({status:e.status,fullError:e.json()})}var E=new(function(){function e(){var t=this;Object(s.a)(this,e),this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=function(){localStorage.removeItem("jwtToken")},this.login=function(e,a){var n=t.makeOptions("POST",!0,{username:e,password:a});return fetch(p+"/api/login",n).then(f).then((function(e){t.setToken(e.token)}))},this.fetchData=function(){var e=t.makeOptions("GET",!0);return fetch(p+"/api/info/user",e).then(f)},this.sendOrder=function(e){var a=t.makeOptionsWithoutToken("POST",e);return fetch(h,a).then(f)},this.deleteOrder=function(e){var a=t.makeOptionsWithoutToken("DELETE");return fetch([h+"/"+e],a).then(f)}}return Object(i.a)(e,[{key:"makeOptions",value:function(e,t,a){var n={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(n.headers["x-access-token"]=this.getToken()),a&&(n.body=JSON.stringify(a)),n}},{key:"makeOptionsWithoutToken",value:function(e,t){var a={method:e,headers:{"Content-type":"application/json"}};return t&&(a.body=JSON.stringify(t)),a}}]),e}()),g=a(29),v=a.n(g),b=a(44),O=a(62),k=a(32),j=a(54),y=a(156),N=(a(248),a(268),function(e){var t=e.from,a=e.to,c=e.setDate,l=Object(n.useState)(null),o=Object(k.a)(l,2),s=o[0],i=o[1];return r.a.createElement(y.DateRangePicker,{startDatePlaceholderText:"Start date",endDatePlaceholderText:"End date",startDate:t,fromId:"your_unique_start_date_id",endDate:a,toId:"your_unique_end_date_id",onDatesChange:function(e){var t=e.startDate,a=e.endDate;return c(t,a)},focusedInput:s,onFocusChange:function(e){return i(e)},hideKeyboardShortcutsPanel:!0,isOutsideRange:function(){return!1},small:!0})});function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B={control:function(e){return w({},e,{borderRadius:0,widht:"50%",height:"40px",border:"1px solid #dbdbdb"})},indicatorSeparator:function(e){return w({},e,{display:"none"})},indicatorsContainer:function(e){return w({},e,{cursor:"pointer"})},placeholder:function(e){return w({},e,{letterSpacing:".4px",fontSize:"15px",color:"#0000007a",fontWeight:"200"})},container:function(e){return w({},e,{height:"40px"})}};function C(){var e={id:null,date:{from:null,to:null},pickupPoint:"",dropoffPoint:"",car:"",equipment:[],insurance:""},t=Object(n.useState)(),a=Object(k.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(),i=Object(k.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(),p=Object(k.a)(d,2),h=p[0],f=p[1],g=Object(n.useState)(),y=Object(k.a)(g,2),A=y[0],C=y[1],S=Object(n.useState)(e),K=Object(k.a)(S,2),x=K[0],J=K[1],P=Object(n.useState)({from:null,to:null}),D=Object(k.a)(P,2),M=D[0],I=D[1],L=function(e,t){"equipment"!==t.name?J(w({},x,Object(o.a)({},t.name,e.value))):null!==e&&J(w({},x,{equipment:Object(O.a)(e)}))};return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/locations");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],a.forEach((function(e){var t={label:e.address,value:e};n.push(t)})),l(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(b.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/cars");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],a.forEach((function(e){var t={label:e.make,value:e};n.push(t)})),m(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(b.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/equipment");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],a.forEach((function(e){var t={label:e.name,value:e};n.push(t)})),f(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(b.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/insurance");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],a.forEach((function(e){var t={label:e.name,value:e};n.push(t)})),C(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"mainTitle"},"Kodebanditternes car rental")),r.a.createElement("div",{className:"col-md-6 flexCenter"},r.a.createElement("div",{className:"wrapTitle"},r.a.createElement("h3",null,"Our site searches cheap car rental prices in over ",r.a.createElement("b",null,"5000 "),"locations worldwide."),r.a.createElement("h3",null,"Find your ideal car and book online today.")),r.a.createElement("img",{src:"/images/bg.png",alt:"cars"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E.sendOrder(x),J(e)},className:"orderForm"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"label"},r.a.createElement("img",{width:"15px",src:"/images/calendar.svg",alt:"calandar"}),"Choose the days that you want to rent a car"),r.a.createElement(N,{from:M.from,to:M.to,setDate:function(e,t){return I({from:e,to:t})}})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"label"},r.a.createElement("img",{width:"15px",src:"/images/magnifying-glass.svg",alt:"magnifying-glass"}),"Choose pick-up location"),r.a.createElement(j.a,{name:"pickupPoint",onChange:L,options:c,styles:B})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"label"},r.a.createElement("img",{width:"15px",src:"/images/magnifying-glass.svg",alt:"magnifying-glass"}),"Choose drop-off location"),r.a.createElement(j.a,{name:"dropoffPoint",onChange:L,options:c,styles:B})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"label"},"Choose Brand"),r.a.createElement(j.a,{name:"car",onChange:L,options:u,styles:B})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"label"},"Choose Equipment"),r.a.createElement(j.a,{name:"equipment",isMulti:!0,closeMenuOnSelect:!1,onChange:L,options:h,styles:B})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"label"},"Choose Insurance"),r.a.createElement(j.a,{name:"insurance",onChange:L,options:A,styles:B})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{className:"button",type:"submit",value:"Order"},"Order"))))))}var S=a(1),K=a(45),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=a.onMarkerClick.bind(Object(S.a)(a)),a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onMarkerClick",value:function(e,t,a){this.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})}},{key:"render",value:function(){return this.props.google?r.a.createElement("div",{style:{position:"relative",height:"calc(100vh - 20px)"}},r.a.createElement(K.Map,{style:{},google:this.props.google,initialCenter:{lat:55.642954,lng:12.545465},zoom:11},r.a.createElement(K.Marker,{title:"Copenhagen Central Station",name:"Central Station",position:{lat:55.672388,lng:12.563445}}),r.a.createElement(K.Marker,{title:"Copenhagen Airport",name:"Airport",position:{lat:55.629953,lng:12.637484}}),r.a.createElement(K.Marker,{title:"Copenhagen Commercial Neighborhood",name:"Business Area",position:{lat:55.614174,lng:12.472494}}),r.a.createElement(K.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},r.a.createElement("div",null,r.a.createElement("h1",null,this.state.selectedPlace.name))))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),J=Object(K.GoogleApiWrapper)({apiKey:"AIzaSyD3sF-lhvfrbKOQD8PG7Nd9SM4-D6txKx8",v:"3.30"})(x),P=a(46),D=a(40),M=(a(153),a(281),a(158)),I=a(72),L=a(157),F=a.n(L),T="http://localhost:3000/orders",U=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T);case 2:e.sent.json().then((function(e){return c(e)})).catch((function(e){alert("Error: "+e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to your page"),r.a.createElement("div",null,r.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Pickup Date"),r.a.createElement("th",null,"Pickup Point"),r.a.createElement("th",null,"Dropoff Date"),r.a.createElement("th",null,"Dropoff Point"),r.a.createElement("th",null,"Car"),r.a.createElement("th",null,"Equipment"),r.a.createElement("th",null,"Insurance"),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.date[0]),r.a.createElement("td",null,e.pickupPoint.Details),r.a.createElement("td",null,e.date[1]),r.a.createElement("td",null,e.dropoffPoint.Details),r.a.createElement("td",null,e.car.make),r.a.createElement("td",null,e.equipment.map((function(e,t){return r.a.createElement("div",{key:t},e.name)}))),r.a.createElement("td",null,e.insurance.name),r.a.createElement("td",null,r.a.createElement(I.a,{variant:"light",type:"Submit",onClick:function(){return t=e.id,void E.deleteOrder(t);var t}},r.a.createElement("img",{src:F.a,alt:"cancel icon"}))))}))))))},W=a(35),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).login=function(e){e.preventDefault(),a.props.login(a.state.username,a.state.password)},a.onChange=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.state={username:"",password:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.outerWidth/4,padding:"25px",margin:"auto"}},r.a.createElement(W.a,{onSubmit:this.login,onChange:this.onChange},r.a.createElement(W.a.Group,{controlId:"username"},r.a.createElement(W.a.Label,null,"User Name"),r.a.createElement(W.a.Control,{type:"text",placeholder:"Enter User Name",required:!0}),r.a.createElement(W.a.Text,{className:"text-muted"},"We'll never share your info with anyone else.")),r.a.createElement(W.a.Group,{controlId:"password"},r.a.createElement(W.a.Label,null,"Password"),r.a.createElement(W.a.Control,{type:"password",placeholder:"Password",required:!0})),r.a.createElement(I.a,{variant:"primary",type:"submit"},"Login")))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dataFromServer:"Fetching!!"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.fetchData().then((function(t){return e.setState({dataFromServer:t.msg})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,{logout:this.props.logout}),r.a.createElement(z,null))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logout=function(){E.logout(),a.setState({loggedIn:!1})},a.login=function(e,t){E.login(e,t).then((function(e){return a.setState({loggedIn:!0})})).catch((function(){alert("wrong password or username")}))},a.state={loggedIn:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loggedIn?r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(R,{logout:this.logout}))):r.a.createElement(G,{login:this.login}))}}]),t}(n.Component),V=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"header_list"},r.a.createElement("li",null,r.a.createElement(P.c,{exact:!0,className:"button",activeClassName:"active",to:"/"},"Order")),r.a.createElement("li",null,r.a.createElement(P.c,{className:"button",activeClassName:"active",to:"/carSelection"},"Orders")),r.a.createElement("li",null,r.a.createElement(P.c,{className:"button",activeClassName:"active",to:"/location"},"Location")),r.a.createElement("li",null,r.a.createElement(P.c,{className:"button",activeClassName:"active",to:"/myPage"},"My Page"))),r.a.createElement(P.b,{className:"logout",to:"/",onClick:e.logout},"Logout")))},z=function(){return r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/"},r.a.createElement(C,null)),r.a.createElement(D.a,{path:"/location"},r.a.createElement(J,null)),r.a.createElement(D.a,{path:"/myPage"},r.a.createElement(U,null)))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.3bcfd9c1.chunk.js.map