(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&%20size=%20180*180"),width:"186",height:"186",alt:"monster"}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},j=function(e){return console.log(e),Object(l.jsx)("div",{className:"cardlist",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},f=(n(16),function(e){var t=e.placeholder,n=e.changeHandler;return Object(l.jsx)("input",{type:"search",placeholder:t,onChange:n,className:"search"})}),m=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchfield,s=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(f,{placeholder:"Search Monsters",changeHandler:function(t){return e.setState({searchfield:t.target.value})}}),Object(l.jsx)(j,{monsters:s})]})}}]),n}(c.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.98e8b881.chunk.js.map