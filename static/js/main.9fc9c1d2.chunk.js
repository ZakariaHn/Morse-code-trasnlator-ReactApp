(this["webpackJsonpmorse-code-translator"]=this["webpackJsonpmorse-code-translator"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(6),o=n.n(u),c=n(1),l=n(2),s=n(4),i=n(3),p=n(7),m=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={input:"",output:""},a}return Object(l.a)(n,[{key:"translate",value:function(t){var e="";t.split("").map((function(t){return e+=p[t]+" "})),this.setState({output:e})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return t.translate(e.target.value)}}),r.a.createElement("h4",null,"Morse Code: ",this.state.output))}}]),n}(a.Component),f=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(t){t.exports=JSON.parse('{"0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."," ":" ","\'":".----.","(":"-.--.-",")":"-.--.-",",":"--..--","-":"-....-","_":"..--.-",".":".-.-.-","/":"-..-.",":":"---...",";":"-.-.-.","?":"..--..","a":".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.","g":"--.","h":"....","i":"..","j":".---","k":"-.-","l":".-..","m":"--","n":"-.","o":"---","p":".--.","q":"--.-","r":".-.","s":"...","t":"-","u":"..-","v":"...-","w":".--","x":"-..-","y":"-.--","z":"--.."}')},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9fc9c1d2.chunk.js.map