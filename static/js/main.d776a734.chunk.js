(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},7:function(e,t,a){e.exports=a(8)},8:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(3),l=a(4),c=a(0),u=a.n(c),i=a(6),o=a.n(i);a(13);function m(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},n}return Object(n.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext})}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e="Next player: "+(this.state.xIsNext?"X":"O");return u.a.createElement("div",null,u.a.createElement("div",{className:"status"},e),u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(u.a.Component),h=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(d,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),a}(u.a.Component);o.a.render(u.a.createElement(h,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.d776a734.chunk.js.map