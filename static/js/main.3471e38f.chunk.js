(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=(n(16),n(6)),u=n(7),l=n(9),s=n(8),m=n(10),p=(n(2),n(3)),h=n.n(p),g=function(e){var t=e.onRouteChange;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",{className:"App-title"},"Welcome to React")),o.a.createElement("button",{className:"disabled"},"Page1"),o.a.createElement("button",{onClick:function(){return t("page2")}},"Page2"),o.a.createElement("button",{onClick:function(){return t("page3")}},"Page3"))},d=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).onRouteChange=function(t){"page1"===t?e.setState({route:t}):"page2"===t?n.e(1).then(n.bind(null,20)).then(function(n){console.log(n),e.setState({route:t,component:n.default})}):"page3"===t&&n.e(2).then(n.bind(null,21)).then(function(n){e.setState({route:t,component:n.default})})},e.state={route:"page1",component:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"page1"===this.state.route?o.a.createElement(g,{onRouteChange:this.onRouteChange}):o.a.createElement(this.state.component,{onRouteChange:this.onRouteChange})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t,n){},3:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,4,3]]]);
//# sourceMappingURL=main.3471e38f.chunk.js.map