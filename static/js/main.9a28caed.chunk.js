(this.webpackJsonphobbies=this.webpackJsonphobbies||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),c=t.n(a),l=(t(13),t(3)),i=t(4),s=t(6),u=t(5),h=t(7);t(14);var d=function(e){return r.a.createElement("div",{className:"box",style:e.backgroundColor})},b=(t(15),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).colors=["red","orange","yellow","green","cyan","blue","purple","pink","brown"],t.state={boxes:t.buildBoxes()},t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"selectRandItem",value:function(e){return Math.floor(Math.random()*e)}},{key:"selectRandColor",value:function(){return this.colors[this.selectRandItem(this.colors.length)]}},{key:"buildBoxes",value:function(){for(var e=[],n=0;n<32;n++)e.push(r.a.createElement(d,{key:n,backgroundColor:{backgroundColor:this.selectRandColor()}}));return e}},{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){e.setState((function(n){var t=e.selectRandItem(n.boxes.length);return n.boxes[t]=r.a.createElement(d,{key:t,backgroundColor:{backgroundColor:e.selectRandColor()}}),n}))}),300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid"},this.state.boxes)}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9a28caed.chunk.js.map