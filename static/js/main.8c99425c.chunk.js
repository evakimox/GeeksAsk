(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){e.exports=n.p+"static/media/link.10d26fe4.png"},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(21),i=n.n(s),o=(n(30),n(2)),c=n(3),u=n(5),l=n(4),p=n(6),d=(n(19),n(12),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).clickOnAnswer=function(){var e=n.props.answerIndex;n.props.selectFunc(e)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="key_block";return this.props.isCorrectAns&&(e="correct_block"),r.a.createElement("div",{className:e,onClick:this.clickOnAnswer},this.props.answerText)}}]),t}(r.a.Component)),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).answerSelected=function(e){n.setState({correctAns:parseInt(e)});var t=JSON.parse(JSON.stringify(n.props));t.correct=parseInt(e),n.props.updateAnswers(n.props.questionIndex,t)},n.state={correctAns:-1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.keys,n=0;n<t.length;n++){var a=t[n];n===this.state.correctAns?e.push(r.a.createElement(d,{key:n,answerIndex:n,answerText:a,selectFunc:this.answerSelected,isCorrectAns:!0})):e.push(r.a.createElement(d,{key:n,answerIndex:n,answerText:a,selectFunc:this.answerSelected,isCorrectAns:!1}))}return r.a.createElement("div",{className:"question_block"},r.a.createElement("b",null,this.props.question),r.a.createElement("div",{style:{paddingTop:10}},e))}}]),t}(r.a.Component),m=n(14),k=n(10),v=n(22),y=n.n(v),f=[{question:"What is your favorite Linux brand?",keys:["Kali","CentOS","Ubuntu","RedHat","Fedora","Arch"]},{question:"What is your favorite Linux command?",keys:["pwd","cd","mkdir","rm","ls","kill","sudo","echo"]},{question:"What is your favorite data structure?",keys:["Hash table","Binary Search Tree","Heap(Priority Queue)","Stack","Linked List","Trie","Queue"]},{question:"What is your favorite database system?",keys:["MySQL","postgreSQL","SQLite","MongoDB","Cassandra","Microsoft Access"]},{question:"What is your favorite imperative programming language?",keys:["Java","JavaScript","C++","C","Python2","Python3","C#"]},{question:"What is your favorite non imperative programming language?",keys:["Haskell","Prolog","Lisp","Clojure","Erlang","R","Scheme","OCaml","Scala"]},{question:"What is your most admired scientist?",keys:["Ada Lovelace","Alan Turing","Edsger Dijkstra","Claude Shannon","Grace Hopper","James Gosling","Guido van Rossum","John von Neumann"]},{question:"What is your favorite text editor?",keys:["Sublime","Brackets","XCode","Visual Studio","Vim","Emacs","Eclipse","JetBrain Series"]},{question:"What is your favorite entertainment website?",keys:["Stack Overflow","Github","Reddit","MDN","nyu.edu"]}],b=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).jumpToAns=function(){n.props.updateQuestionnaire(n.state.savedQuestionnaire),n.setState({askPage:!1})},n.updateAnswers=function(e,t){var a=n.state.savedQuestionnaire;a[e]=t,n.setState({savedQuestionnaire:a})};for(var a=[],r=0;r<f.length;r++)a.push({});return n.state={askPage:!0,savedQuestionnaire:a},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=f,t=[],n=0;n<e.length;n++){var a="Question "+n+": "+e[n].question;t.push(r.a.createElement(h,{key:n,questionIndex:n,question:a,keys:e[n].keys,updateAnswers:this.updateAnswers}))}return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement("div",{className:"custom_button",onClick:this.jumpToAns},"Generate my link"),this.state.askPage?null:r.a.createElement(k.a,{to:"/GeeksAsk/ans",hellp:"itsme"}),r.a.createElement("div",{className:"link_ico"},r.a.createElement("img",{src:y.a,style:{height:"70px",width:"auto"}})))}}]),t}(r.a.Component),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).clickOnAnswer=function(){var e=n.props.answerIndex;n.props.selectFunc(e)?(console.log("this is answer key and I am correct"),n.setState({keyBlockClass:"correct_block"})):n.setState({keyBlockClass:"wrong_block"})},n.state={keyBlockClass:"key_block"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.keyBlockClass,onClick:this.clickOnAnswer},this.props.answerText)}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).answerSelected=function(e){var t=parseInt(e)-parseInt(n.props.correctAns);return t<=.5&&t>=-.5},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.keys,n=0;n<t.length;n++){var a=t[n];e.push(r.a.createElement(w,{key:n,answerIndex:n,answerText:a,selectFunc:this.answerSelected}))}return r.a.createElement("div",{className:"question_block"},r.a.createElement("b",null,this.props.question),r.a.createElement("div",{style:{paddingTop:10}},e))}}]),t}(r.a.Component);function g(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}var j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.content,t=[],n=0;n<e.length;n++)if(console.log(e[n]),!g(e[n])){var a=e[n].question;t.push(r.a.createElement(O,{key:n,questionIndex:n,question:a,keys:e[n].keys,correctAns:e[n].correct}))}return r.a.createElement("div",null,t)}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).updateQuestionnaire=function(e){n.setState({savedQuestionnaire:e})},n.asking=function(){return r.a.createElement("div",null,r.a.createElement(b,{updateQuestionnaire:n.updateQuestionnaire}))},n.answering=function(){return r.a.createElement("div",null,r.a.createElement(j,{content:n.state.savedQuestionnaire}))},n.state={savedQuestionnaire:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Geeks Ask"}},{key:"render",value:function(){return r.a.createElement("div",{name:"layout"},r.a.createElement("div",{className:"header_bar"},"Geeks ask"),r.a.createElement("div",{className:"content_area"},r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(k.b,{path:"/GeeksAsk/",exact:!0,component:this.asking}),r.a.createElement(k.b,{path:"/GeeksAsk/ask",exact:!0,component:this.asking}),r.a.createElement(k.b,{path:"/GeeksAsk/ans/:questionnaireId",exact:!0,component:this.answering}),r.a.createElement(k.b,{path:"/GeeksAsk/ans",exact:!0,component:this.answering})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.8c99425c.chunk.js.map