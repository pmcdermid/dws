var handlebars=function(){var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,hashSegments:29,hashSegment:30,ID:31,EQUALS:32,pathSegments:33,SEP:34,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",
14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",31:"ID",32:"EQUALS",34:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[26,1],[29,2],[29,1],[30,3],[30,3],[21,1],[33,3],[33,1]],performAction:function(a,b,e,c,h,d){a=d.length-1;switch(h){case 1:return d[a-
1];case 2:this.$=new c.ProgramNode(d[a-2],d[a]);break;case 3:this.$=new c.ProgramNode(d[a]);break;case 4:this.$=new c.ProgramNode([]);break;case 5:this.$=[d[a]];break;case 6:d[a-1].push(d[a]);this.$=d[a-1];break;case 7:this.$=new c.InverseNode(d[a-2],d[a-1],d[a]);break;case 8:this.$=new c.BlockNode(d[a-2],d[a-1],d[a]);break;case 9:this.$=d[a];break;case 10:this.$=d[a];break;case 11:this.$=new c.ContentNode(d[a]);break;case 12:this.$=new c.CommentNode(d[a]);break;case 13:this.$=new c.MustacheNode(d[a-
1][0],d[a-1][1]);break;case 14:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1]);break;case 15:this.$=d[a-1];break;case 16:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1]);break;case 17:this.$=new c.MustacheNode(d[a-1][0],d[a-1][1],!0);break;case 18:this.$=new c.PartialNode(d[a-1]);break;case 19:this.$=new c.PartialNode(d[a-2],d[a-1]);break;case 21:this.$=[[d[a-2]].concat(d[a-1]),d[a]];break;case 22:this.$=[[d[a-1]].concat(d[a]),null];break;case 23:this.$=[[d[a-1]],d[a]];break;case 24:this.$=[[d[a]],null];
break;case 25:d[a-1].push(d[a]);this.$=d[a-1];break;case 26:this.$=[d[a]];break;case 27:this.$=d[a];break;case 28:this.$=new c.StringNode(d[a]);break;case 29:this.$=new c.HashNode(d[a]);break;case 30:d[a-1].push(d[a]);this.$=d[a-1];break;case 31:this.$=[d[a]];break;case 32:this.$=[d[a-2],d[a]];break;case 33:this.$=[d[a-2],new c.StringNode(d[a])];break;case 34:this.$=new c.IdNode(d[a]);break;case 35:d[a-2].push(d[a]);this.$=d[a-2];break;case 36:this.$=[d[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,
12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],
23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,31:[1,25],33:24},{17:26,21:23,31:[1,25],33:24},{17:27,21:23,31:[1,25],33:24},{17:28,21:23,31:[1,25],33:24},{21:29,
31:[1,25],33:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,31:[1,25],33:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,34],28:[2,34],31:[2,34],34:[1,44]},{18:[2,36],28:[2,36],31:[2,36],34:[2,36]},{18:[1,45]},{18:[1,46]},{18:[1,47]},{18:[1,48],
21:49,31:[1,25],33:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:50,31:[1,25],33:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:51,27:52,
28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,23]},{18:[2,26],28:[2,26],31:[2,26]},{18:[2,29],30:53,31:[1,54]},{18:[2,27],28:[2,27],31:[2,27]},{18:[2,28],28:[2,28],31:[2,28]},{18:[2,31],31:[2,31]},{18:[2,36],28:[2,36],31:[2,36],32:[1,55],34:[2,36]},{31:[1,56]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],
23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,57]},{18:[1,58]},{18:[2,21]},{18:[2,25],28:[2,25],31:[2,25]},{18:[2,30],31:[2,30]},{32:[1,55]},{21:59,28:[1,60],31:[1,25],33:24},{18:[2,35],28:[2,35],31:[2,35],34:[2,35]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,32],31:[2,32]},{18:[2,
33],31:[2,33]}],defaultActions:{16:[2,1],37:[2,23],51:[2,21]},parseError:function(a){throw Error(a);},parse:function(a){function b(){var c;c=e.lexer.lex()||1;typeof c!=="number"&&(c=e.symbols_[c]||c);return c}var e=this,c=[0],h=[null],d=[],q=this.table,m="",r=0,n=0,k=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};a=this.lexer.yylloc;d.push(a);if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;
for(var i,o,j,l,s={},t,p;;){j=c[c.length-1];this.defaultActions[j]?l=this.defaultActions[j]:(i==null&&(i=b()),l=q[j]&&q[j][i]);if(typeof l==="undefined"||!l.length||!l[0]){if(!k){o=[];for(t in q[j])this.terminals_[t]&&t>2&&o.push("'"+this.terminals_[t]+"'");var u="",u=this.lexer.showPosition?"Parse error on line "+(r+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+o.join(", "):"Parse error on line "+(r+1)+": Unexpected "+(i==1?"end of input":"'"+(this.terminals_[i]||i)+"'");this.parseError(u,{text:this.lexer.match,
token:this.terminals_[i]||i,line:this.lexer.yylineno,loc:a,expected:o})}if(k==3){if(i==1)throw Error(u||"Parsing halted.");n=this.lexer.yyleng;m=this.lexer.yytext;r=this.lexer.yylineno;a=this.lexer.yylloc;i=b()}for(;;){if((2).toString()in q[j])break;if(j==0)throw Error(u||"Parsing halted.");c.length-=2;h.length-=1;d.length-=1;j=c[c.length-1]}o=i;i=2;j=c[c.length-1];l=q[j]&&q[j][2];k=3}if(l[0]instanceof Array&&l.length>1)throw Error("Parse Error: multiple actions possible at state: "+j+", token: "+
i);switch(l[0]){case 1:c.push(i);h.push(this.lexer.yytext);d.push(this.lexer.yylloc);c.push(l[1]);i=null;o?(i=o,o=null):(n=this.lexer.yyleng,m=this.lexer.yytext,r=this.lexer.yylineno,a=this.lexer.yylloc,k>0&&k--);break;case 2:p=this.productions_[l[1]][1];s.$=h[h.length-p];s._$={first_line:d[d.length-(p||1)].first_line,last_line:d[d.length-1].last_line,first_column:d[d.length-(p||1)].first_column,last_column:d[d.length-1].last_column};j=this.performAction.call(s,m,n,r,this.yy,l[1],h,d);if(typeof j!==
"undefined")return j;p&&(c=c.slice(0,p*-2),h=h.slice(0,-1*p),d=d.slice(0,-1*p));c.push(this.productions_[l[1]][0]);h.push(s.$);d.push(s._$);l=q[c[c.length-2]][c[c.length-1]];c.push(l);break;case 3:return!0}}return!0}},e=function(){return{EOF:1,parseError:function(a,b){if(this.yy.parseError)this.yy.parseError(a,b);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.match+=a;this.matched+=a;a.match(/\n/)&&this.yylineno++;this._input=this._input.slice(1);return a},unput:function(a){this._input=a+this._input;return this},more:function(){this._more=!0;return this},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},
upcomingInput:function(){var a=this.match;a.length<20&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var a,b;if(!this._more)this.match=this.yytext="";for(var e=this._currentRules(),c=0;c<e.length;c++)if(a=this._input.match(this.rules[e[c]]))if((b=a[0].match(/\n.*/g))&&
(this.yylineno+=b.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:b?b[b.length-1].length-1:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],a=this.performAction.call(this,this.yy,this,e[c],this.conditionStack[this.conditionStack.length-1]))return a;else return;if(this._input===
"")return this.EOF;else this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a!=="undefined"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},performAction:function(a,b,e){switch(e){case 0:this.begin("mu");
if(b.yytext)return 14;break;case 1:return 14;case 2:return 24;case 3:return 16;case 4:return 20;case 5:return 19;case 6:return 19;case 7:return 23;case 8:return 23;case 9:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.begin("INITIAL"),15;case 10:return 22;case 11:return 32;case 12:return 31;case 13:return 31;case 14:return 34;case 16:return this.begin("INITIAL"),18;case 17:return this.begin("INITIAL"),18;case 18:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),28;case 19:return 31;
case 20:return"INVALID";case 21:return 5}},rules:[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^[a-zA-Z0-9_-]+(?=[=} /.])/,/^./,/^$/],conditions:{mu:{rules:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],inclusive:!1},INITIAL:{rules:[0,1,21],inclusive:!0}}}}();b.lexer=e;return b}();
if(typeof require!=="undefined"&&typeof exports!=="undefined")exports.parser=handlebars,exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)},exports.main=function(b){if(!b[1])throw Error("Usage: "+b[0]+" FILE");b=typeof process!=="undefined"?require("fs").readFileSync(require("path").join(process.cwd(),b[1]),"utf8"):require("file").path(require("file").cwd()).join(b[1]).read({charset:"utf-8"});return exports.parser.parse(b)},typeof module!=="undefined"&&require.main===module&&
exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args);var Handlebars={VERSION:"1.0.beta.1"};Handlebars.Parser=handlebars;Handlebars.parse=function(b){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(b)};Handlebars.print=function(b){return(new Handlebars.PrintVisitor).accept(b)};Handlebars.helpers={};Handlebars.partials={};Handlebars.registerHelper=function(b,e,a){if(a)e.not=a;this.helpers[b]=e};
Handlebars.registerPartial=function(b,e){this.partials[b]=e};Handlebars.registerHelper("helperMissing",function(b){if(arguments.length!==2)throw Error("Could not find property '"+b+"'");});
Handlebars.registerHelper("blockHelperMissing",function(b,e,a){var a=a||function(){},f="",g=Object.prototype.toString.call(b);g==="[object Function]"&&(b=b());if(b===!0)return e(this);else if(b===!1||b==null)return a(this);else if(g==="[object Array]"){if(b.length>0){a=0;for(g=b.length;a<g;a++)f+=e(b[a])}else f=a(this);return f}else return e(b)},function(b,e){return e(b)});
Handlebars.registerHelper("each",function(b,e,a){var f="";if(b&&b.length>0)for(var a=0,g=b.length;a<g;a++)f+=e(b[a]);else f=a(this);return f});Handlebars.registerHelper("if",function(b,e,a){return!b||b==[]?a(this):e(this)});Handlebars.registerHelper("unless",function(b,e,a){return Handlebars.helpers["if"].call(this,b,a,e)});Handlebars.registerHelper("with",function(b,e){return e(b)});Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(){}};
Handlebars.log=function(b,e){Handlebars.logger.log(b,e)};
(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(b,a){this.type="program";this.statements=b;if(a)this.inverse=new Handlebars.AST.ProgramNode(a)};Handlebars.AST.MustacheNode=function(b,a,f){this.type="mustache";this.id=b[0];this.params=b.slice(1);this.hash=a;this.escaped=!f};Handlebars.AST.PartialNode=function(b,a){this.type="partial";this.id=b;this.context=a};var b=function(b,a){if(b.original!==a.original)throw new Handlebars.Exception(b.original+" doesn't match "+a.original);};Handlebars.AST.BlockNode=
function(e,a,f){b(e.id,f);this.type="block";this.mustache=e;this.program=a};Handlebars.AST.InverseNode=function(e,a,f){b(e.id,f);this.type="inverse";this.mustache=e;this.program=a};Handlebars.AST.ContentNode=function(b){this.type="content";this.string=b};Handlebars.AST.HashNode=function(b){this.type="hash";this.pairs=b};Handlebars.AST.IdNode=function(b){this.type="ID";this.original=b.join(".");for(var a=[],f=0,g=0,c=b.length;g<c;g++){var h=b[g];h===".."?f++:h==="."||h==="this"||a.push(h)}this.parts=
a;this.string=a.join(".");this.depth=f;this.isSimple=a.length===1&&f===0};Handlebars.AST.StringNode=function(b){this.type="STRING";this.string=b};Handlebars.AST.CommentNode=function(b){this.type="comment";this.comment=b}})();Handlebars.Visitor=function(){};Handlebars.Visitor.prototype={accept:function(b){return this[b.type](b)}};Handlebars.Exception=function(b){this.message=b};Handlebars.SafeString=function(b){this.string=b};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};
(function(){var b={"<":"&lt;",">":"&gt;"},e=/&(?!\w+;)|[<>]/g,a=/[&<>]/,f=function(a){return b[a]||"&amp;"};Handlebars.Utils={escapeExpression:function(b){if(b instanceof Handlebars.SafeString)return b.toString();else if(b==null||b===!1)return"";if(!a.test(b))return b;return b.replace(e,f)},isEmpty:function(a){return typeof a==="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}})();Handlebars.Compiler=function(){};
Handlebars.JavaScriptCompiler=function(){};
(function(b,e){b.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,invokeInverse:14,assignToHash:15,pushStringParam:16};b.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:1,lookup:1,invokeMustache:2,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:2,invokePartial:1,push:1,invokeInverse:1,assignToHash:1,pushStringParam:1};
b.DISASSEMBLE_MAP={};for(var a in b.OPCODE_MAP)b.DISASSEMBLE_MAP[b.OPCODE_MAP[a]]=a;b.multiParamSize=function(c){return b.MULTI_PARAM_OPCODES[b.DISASSEMBLE_MAP[c]]};b.prototype={compiler:b,disassemble:function(){for(var c=this.opcodes,a,d=[],e,m=0,f=c.length;m<f;m++)if(a=c[m],a==="DECLARE")e=c[++m],a=c[++m],d.push("DECLARE "+e+" = "+a);else{e=b.DISASSEMBLE_MAP[a];for(var g=b.multiParamSize(a),k=[],i=0;i<g;i++)a=c[++m],typeof a==="string"&&(a='"'+a.replace("\n","\\n")+'"'),k.push(a);e=e+" "+k.join(" ");
d.push(e)}return d.join("\n")},guid:0,compile:function(c,a){this.children=[];this.depths={list:[]};this.options=a||{};return this.program(c)},accept:function(c){return this[c.type](c)},program:function(c){var c=c.statements,a;this.opcodes=[];for(var d=0,b=c.length;d<b;d++)a=c[d],this[a.type](a);this.depths.list=this.depths.list.sort(function(c,a){return c-a});return this},compileProgram:function(c){var c=(new this.compiler).compile(c,this.options),a=this.guid++;this.usePartial=this.usePartial||c.usePartial;
this.children[a]=c;for(var d=0,b=c.depths.list.length;d<b;d++)depth=c.depths.list[d],depth<2||this.addDepth(depth-1);return a},block:function(c){var a=this.setupStackForMustache(c.mustache),d=this.compileProgram(c.program);c.program.inverse&&(c=this.compileProgram(c.program.inverse),this.declare("inverse",c));this.opcode("invokeProgram",d,a.length);this.declare("inverse",null);this.opcode("append")},inverse:function(c){this.ID(c.mustache.id);this.opcode("invokeInverse",this.compileProgram(c.program));
this.opcode("append")},hash:function(c){var c=c.pairs,a,d;this.opcode("push","{}");for(var b=0,e=c.length;b<e;b++)a=c[b],d=a[1],this.accept(d),this.opcode("assignToHash",a[0])},partial:function(c){var a=c.id;this.usePartial=!0;c.context?this.ID(c.context):this.opcode("push","context");this.opcode("invokePartial",a.original);this.opcode("append")},content:function(c){this.opcode("appendContent",c.string)},mustache:function(c){this.opcode("invokeMustache",this.setupStackForMustache(c).length,c.id.original);
c.escaped?this.opcode("appendEscaped"):this.opcode("append")},ID:function(c){this.addDepth(c.depth);this.opcode("getContext",c.depth);this.opcode("lookupWithHelpers",c.parts[0]||null);for(var a=1,b=c.parts.length;a<b;a++)this.opcode("lookup",c.parts[a])},STRING:function(c){this.opcode("pushString",c.string)},comment:function(){},pushParams:function(c){for(var a=c.length,b;a--;)if(b=c[a],this.options.stringParams)b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",
b.string);else this[b.type](b)},opcode:function(c,a,d){this.opcodes.push(b.OPCODE_MAP[c]);a!==void 0&&this.opcodes.push(a);d!==void 0&&this.opcodes.push(d)},declare:function(c,a){this.opcodes.push("DECLARE");this.opcodes.push(c);this.opcodes.push(a)},addDepth:function(c){c!==0&&!this.depths[c]&&(this.depths[c]=!0,this.depths.list.push(c))},setupStackForMustache:function(c){var a=c.params;this.pushParams(a);c.hash?this.hash(c.hash):this.opcode("push","{}");this.ID(c.id);return a}};e.prototype={nameLookup:function(c,
a){return e.RESERVED_WORDS[a]||a.indexOf("-")!==-1?c+"['"+a+"']":c+"."+a},appendToBuffer:function(a){return"buffer = buffer + "+a+";"},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b){this.environment=a;this.options=b||{};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.compileChildren(a,b);Handlebars.log(Handlebars.logger.DEBUG,a.disassemble()+"\n\n");var d=a.opcodes;this.i=0;for(g=d.length;this.i<g;this.i++)d=this.nextOpcode(0),d[0]===
"DECLARE"?(this.i+=2,this[d[1]]=d[2]):(this.i+=d[1].length,this[d[0]].apply(this,d[1]));return this.createFunction()},nextOpcode:function(a){var h=this.environment.opcodes,d=h[this.i+a],e,m;if(d==="DECLARE")return e=h[this.i+1],a=h[this.i+2],["DECLARE",e,a];else{e=b.DISASSEMBLE_MAP[d];d=b.multiParamSize(d);m=[];for(var f=0;f<d;f++)m.push(h[this.i+f+1+a]);return[e,m]}},eat:function(a){this.i+=a.length},preamble:function(){var a=[];a.push("var buffer = "+this.initializeBuffer()+", currentContext = context");
var b="helpers = helpers || Handlebars.helpers;";this.environment.usePartial&&(b+=" partials = partials || Handlebars.partials;");a.push(b);this.lastContext=0;this.source=a},createFunction:function(){var a={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,c,b,d){var e=this.programs[a];return d?Handlebars.VM.program(this.children[a],c,b,d):(e||(e=this.programs[a]=Handlebars.VM.program(this.children[a],c,b)),e)},programWithDepth:Handlebars.VM.programWithDepth,
noop:Handlebars.VM.noop},b=this.stackVars.concat(this.registers.list);b.length>0&&(this.source[0]=this.source[0]+", "+b.join(", "));this.source[0]+=";";this.source.push("return buffer;");b=["Handlebars","context","helpers","partials"];this.options.data&&b.push("data");for(var d=0,e=this.environment.depths.list.length;d<e;d++)b.push("depth"+this.environment.depths.list[d]);b.length===4&&!this.environment.usePartial&&b.pop();b.push(this.source.join("\n"));b=Function.apply(this,b);b.displayName="Handlebars.js";
Handlebars.log(Handlebars.logger.DEBUG,b.toString()+"\n\n");a.render=b;a.children=this.environment.children;return function(b,d){try{var d=d||{},e=[Handlebars,b,d.helpers,d.partials,d.data],h=Array.prototype.slice.call(arguments,2),e=e.concat(h);return a.render.apply(a,e)}catch(f){throw f;}}},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }")},appendEscaped:function(){var a=
this.nextOpcode(1),b="";a[0]==="appendContent"&&(b=" + "+this.quotedString(a[1][0]),this.eat(a));this.source.push(this.appendToBuffer("this.escapeExpression("+this.popStack()+")"+b))},getContext:function(a){if(this.lastContext!==a)this.lastContext=a,a===0?this.source.push("currentContext = context;"):this.source.push("currentContext = depth"+a+";")},lookupWithHelpers:function(a){if(a){var b=this.nextStack();this.source.push("if('"+a+"' in helpers) { "+b+" = "+this.nameLookup("helpers",a,"helper")+
"; } else { "+b+" = "+this.nameLookup("currentContext",a,"context")+"; }")}else this.pushStack("currentContext")},lookup:function(a){var b=this.topStack();this.source.push(b+" = "+this.nameLookup(b,a,"context")+";")},pushStringParam:function(a){this.pushStack("currentContext");this.pushString(a)},pushString:function(a){this.pushStack(this.quotedString(a))},push:function(a){this.pushStack(a)},invokeMustache:function(a,b){this.populateParams(a,this.quotedString(b),"{}",null,function(a,b,c){this.source.push("else if("+
c+"=== undefined) { "+a+" = helpers.helperMissing.call("+b+"); }");this.source.push("else { "+a+" = "+c+"; }")})},invokeProgram:function(a,b){var d=this.programExpression(this.inverse),e=this.programExpression(a);this.populateParams(b,null,e,d,function(a,b){this.source.push("else { "+a+" = helpers.blockHelperMissing.call("+b+"); }")})},populateParams:function(a,b,d,e,f){var g=this.popStack(),n=[],k=this.popStack();this.register("tmp1",d);this.source.push("tmp1.hash = "+k+";");this.options.stringParams&&
this.source.push("tmp1.contexts = [];");for(k=0;k<a;k++)d=this.popStack(),n.push(d),this.options.stringParams&&this.source.push("tmp1.contexts.push("+this.popStack()+");");e&&(this.source.push("tmp1.fn = tmp1;"),this.source.push("tmp1.inverse = "+e+";"));this.options.data&&this.source.push("tmp1.data = data;");n.push("tmp1");e&&n.push(e);this.populateCall(n,g,b||g,f)},populateCall:function(a,b,d,e){var f=["context"].concat(a).join(", "),a=["context"].concat(d).concat(a).join(", ");nextStack=this.nextStack();
this.source.push("if(typeof "+b+" === 'function') { "+nextStack+" = "+b+".call("+f+"); }");e.call(this,nextStack,a,b)},invokeInverse:function(a){a=this.programExpression(a);this.pushStack("helpers.blockHelperMissing.call("+["context",this.topStack(),"this.noop",a].join(", ")+")")},invokePartial:function(a){this.pushStack("this.invokePartial("+this.nameLookup("partials",a,"partial")+", '"+a+"', "+this.popStack()+", helpers, partials);")},assignToHash:function(a){var b=this.popStack();this.source.push(this.topStack()+
"['"+a+"'] = "+b+";")},compiler:e,compileChildren:function(a,b){for(var d=a.children,e,f,g=[],n=0,k=d.length;n<k;n++)e=d[n],f=new this.compiler,g[n]=f.compile(e,b);a.rawChildren=d;a.children=g},programExpression:function(a){if(a==null)return"this.noop";var b=[a,"helpers","partials"],d=this.environment.rawChildren[a].depths.list;this.options.data&&b.push("data");for(var e=0,f=d.length;e<f;e++)depth=d[e],depth===1?b.push("context"):b.push("depth"+(depth-1));this.environment.usePartial||(b[3]?b[2]="null":
b.pop());return d.length===0?"this.program("+b.join(", ")+")":(b[0]="this.children["+a+"]","this.programWithDepth("+b.join(", ")+")")},register:function(a,b){this.useRegister(a);this.source.push(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStack:function(a){this.source.push(this.nextStack()+" = "+a+";");return"stack"+this.stackSlot},nextStack:function(){this.stackSlot++;this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+
this.stackSlot);return"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};a="break case catch continue default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with null true false".split(" ");compilerWords=e.RESERVED_WORDS={};for(var f=0,g=
a.length;f<g;f++)compilerWords[a[f]]=!0})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);
Handlebars.VM={programWithDepth:function(b,e,a,f){var g=Array.prototype.slice.call(arguments,4);return function(c,h){h=h||{};h={helpers:h.helpers||e,partials:h.partials||a,data:h.data||f};return b.apply(this,[c,h].concat(g))}},program:function(b,e,a,f){return function(g,c){c=c||{};return b(g,{helpers:c.helpers||e,partials:c.partials||a,data:c.data||f})}},noop:function(){return""},compile:function(b,e){var a=Handlebars.parse(b),a=(new Handlebars.Compiler).compile(a,e);return(new Handlebars.JavaScriptCompiler).compile(a,
e)},invokePartial:function(b,e,a,f,g){if(b===void 0)throw new Handlebars.Exception("The partial "+e+" could not be found");else return b instanceof Function?b(a,{helpers:f,partials:g}):(g[e]=Handlebars.VM.compile(b),g[e](a,{helpers:f,partials:g}))}};Handlebars.compile=Handlebars.VM.compile;

;/*global setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root = this,
        previous_async = root.async;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = async;
    }
    else {
        root.async = async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    //// cross-browser compatiblity functions ////

    var _forEach = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _forEach(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _forEach(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        async.nextTick = function (fn) {
            setTimeout(fn, 0);
        };
    }
    else {
        async.nextTick = process.nextTick;
    }

    async.forEach = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _forEach(arr, function (x) {
            iterator(x, function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed === arr.length) {
                        callback();
                    }
                }
            });
        });
    };

    async.forEachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed === arr.length) {
                        callback();
                    }
                    else {
                        iterate();
                    }
                }
            });
        };
        iterate();
    };
    
    async.forEachLimit = function (arr, limit, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length || limit <= 0) {
            return callback(); 
        }
        var completed = 0;
        var started = 0;
        var running = 0;
        
        (function replenish () {
          if (completed === arr.length) {
              return callback();
          }
          
          while (running < limit && started < arr.length) {
            iterator(arr[started], function (err) {
              if (err) {
                  callback(err);
                  callback = function () {};
              }
              else {
                  completed += 1;
                  running -= 1;
                  if (completed === arr.length) {
                      callback();
                  }
                  else {
                      replenish();
                  }
              }
            });
            started += 1;
            running += 1;
          }
        })();
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.forEach].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.forEachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (err, v) {
                results[x.index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);


    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.forEachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.forEach(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.forEach(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        if (!keys.length) {
            return callback(null);
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            _forEach(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (_keys(results).length === keys.length) {
                callback(null, results);
                callback = function () {};
            }
        });

        _forEach(keys, function (k) {
            var task = (tasks[k] instanceof Function) ? [tasks[k]]: tasks[k];
            var taskCallback = function (err) {
                if (err) {
                    callback(err);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    taskComplete();
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.nextTick(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    async.parallel = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.forEach(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.forEachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.whilst(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                async.until(test, iterator, callback);
            });
        }
        else {
            callback();
        }
    };

    async.queue = function (worker, concurrency) {
        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                if(data.constructor !== Array) {
                    data = [data];
                }
                _forEach(data, function(task) {
                    q.tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    if (q.saturated && q.tasks.length == concurrency) {
                        q.saturated();
                    }
                    async.nextTick(q.process);
                });
            },
            process: function () {
                if (workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if(q.empty && q.tasks.length == 0) q.empty();
                    workers += 1;
                    worker(task.data, function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if(q.drain && q.tasks.length + workers == 0) q.drain();
                        q.process();
                    });
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            }
        };
        return q;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _forEach(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                callback.apply(null, memo[key]);
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      }
    };

}());


;//     Underscore.js 1.3.3
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.3.3';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    if (obj.length === +obj.length) results.length = obj.length;
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = _.toArray(obj).reverse();
    if (context && !initial) iterator = _.bind(iterator, context);
    return initial ? _.reduce(reversed, iterator, memo, context) : _.reduce(reversed, iterator);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (_.isFunction(method) ? method || value : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.max.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.min.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var shuffled = [], rand;
    each(obj, function(value, index, list) {
      rand = Math.floor(Math.random() * (index + 1));
      shuffled[index] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, val, context) {
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      if (a === void 0) return 1;
      if (b === void 0) return -1;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, val) {
    var result = {};
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    each(obj, function(value, index) {
      var key = iterator(value, index);
      (result[key] || (result[key] = [])).push(value);
    });
    return result;
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = _.identity);
    var value = iterator(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj)                                     return [];
    if (_.isArray(obj))                           return slice.call(obj);
    if (_.isArguments(obj))                       return slice.call(obj);
    if (obj.toArray && _.isFunction(obj.toArray)) return obj.toArray();
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.isArray(obj) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, (index == null) || guard ? 1 : index);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return (function flatten(input, output) {
      each(input, function(value) {
        if (_.isArray(value)) {
          shallow ? push.apply(output, value) : flatten(value, output);
        } else {
          output.push(value);
        }
      });
      return output;
    })(array, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator) {
    var initial = iterator ? _.map(array, iterator) : array;
    var results = [];
    // The `isSorted` flag is irrelevant if the array only contains two elements.
    if (array.length < 3) isSorted = true;
    _.reduce(initial, function(memo, value, index) {
      if (isSorted ? _.last(memo) !== value || !memo.length : !_.include(memo, value)) {
        memo.push(value);
        results.push(array[index]);
      }
      return memo;
    }, []);
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays. (Aliased as "intersect" for back-compat.)
  _.intersection = _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = _.flatten(slice.call(arguments, 1), true);
    return _.filter(array, function(value){ return !_.include(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (i = 0, l = array.length; i < l; i++) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        throttling = true;
        result = func.apply(context, args);
      }
      whenDone();
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      return memo = func.apply(this, arguments);
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func].concat(slice.call(arguments, 0));
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) { return func.apply(this, arguments); }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var result = {};
    each(_.flatten(slice.call(arguments, 1)), function(key) {
      if (key in obj) result[key] = obj[key];
    });
    return result;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  function eq(a, b, stack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // Invoke a custom `isEqual` method if one is provided.
    if (a.isEqual && _.isFunction(a.isEqual)) return a.isEqual(b);
    if (b.isEqual && _.isFunction(b.isEqual)) return b.isEqual(a);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = stack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (stack[length] == a) return true;
    }
    // Add the first object to the stack of traversed objects.
    stack.push(a);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          // Ensure commutative equality for sparse arrays.
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent.
      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], stack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    stack.pop();
    return result;
  }

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given variable an arguments object?
  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  _.isArguments = function(obj) {
    return toString.call(obj) == '[object Arguments]';
  };
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Is a given value a function?
  _.isFunction = function(obj) {
    return toString.call(obj) == '[object Function]';
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
  };

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return _.isNumber(obj) && isFinite(obj);
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    // `NaN` is the only value for which `===` is not reflexive.
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Does an object have the given "own" property?
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Escape a string for HTML interpolation.
  _.escape = function(string) {
    return (''+string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g,'&#x2F;');
  };

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /.^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    '\\': '\\',
    "'": "'",
    'r': '\r',
    'n': '\n',
    't': '\t',
    'u2028': '\u2028',
    'u2029': '\u2029'
  };

  for (var p in escapes) escapes[escapes[p]] = p;
  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  var unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;

  // Within an interpolation, evaluation, or escaping, remove HTML escaping
  // that had been previously added.
  var unescape = function(code) {
    return code.replace(unescaper, function(match, escape) {
      return escapes[escape];
    });
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults(settings || {}, _.templateSettings);

    // Compile the template source, taking care to escape characters that
    // cannot be included in a string literal and then unescape them in code
    // blocks.
    var source = "__p+='" + text
      .replace(escaper, function(match) {
        return '\\' + escapes[match];
      })
      .replace(settings.escape || noMatch, function(match, code) {
        return "'+\n((__t=(" + unescape(code) + "))==null?'':_.escape(__t))+\n'";
      })
      .replace(settings.interpolate || noMatch, function(match, code) {
        return "'+\n((__t=(" + unescape(code) + "))==null?'':__t)+\n'";
      })
      .replace(settings.evaluate || noMatch, function(match, code) {
        return "';\n" + unescape(code) + "\n;__p+='";
      }) + "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'')};\n" +
      source + "return __p;\n";

    var render = new Function(settings.variable || 'obj', '_', source);
    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result(obj, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

}).call(this);


;
/**
 * Module exports.
 */

/**
 * Check if `obj` is an array.
 */

function isArray(obj) {
  return '[object Array]' == {}.toString.call(obj);
}

/**
 * Event emitter constructor.
 *
 * @api public.
 */

function EventEmitter(){};

/**
 * Adds a listener.
 *
 * @api public
 */

EventEmitter.prototype.on = function (name, fn) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = fn;
  } else if (isArray(this.$events[name])) {
    this.$events[name].push(fn);
  } else {
    this.$events[name] = [this.$events[name], fn];
  }

  return this;
};

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

/**
 * Adds a volatile listener.
 *
 * @api public
 */

EventEmitter.prototype.once = function (name, fn) {
  var self = this;

  function on () {
    self.removeListener(name, on);
    fn.apply(this, arguments);
  };

  on.listener = fn;
  this.on(name, on);

  return this;
};

/**
 * Removes a listener.
 *
 * @api public
 */

EventEmitter.prototype.removeListener = function (name, fn) {
  if (this.$events && this.$events[name]) {
    var list = this.$events[name];

    if (isArray(list)) {
      var pos = -1;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
          pos = i;
          break;
        }
      }

      if (pos < 0) {
        return this;
      }

      list.splice(pos, 1);

      if (!list.length) {
        delete this.$events[name];
      }
    } else if (list === fn || (list.listener && list.listener === fn)) {
      delete this.$events[name];
    }
  }

  return this;
};

/**
 * Removes all listeners for an event.
 *
 * @api public
 */

EventEmitter.prototype.removeAllListeners = function (name) {
  if (name === undefined) {
    this.$events = {};
    return this;
  }

  if (this.$events && this.$events[name]) {
    this.$events[name] = null;
  }

  return this;
};

/**
 * Gets all listeners for a certain event.
 *
 * @api publci
 */

EventEmitter.prototype.listeners = function (name) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = [];
  }

  if (!isArray(this.$events[name])) {
    this.$events[name] = [this.$events[name]];
  }

  return this.$events[name];
};

/**
 * Emits an event.
 *
 * @api public
 */

EventEmitter.prototype.emit = function (name) {
  if (!this.$events) {
    return false;
  }

  var handler = this.$events[name];

  if (!handler) {
    return false;
  }

  var args = [].slice.call(arguments, 1);

  if ('function' == typeof handler) {
    handler.apply(this, args);
  } else if (isArray(handler)) {
    var listeners = handler.slice();

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
  } else {
    return false;
  }

  return true;
};
/*!
 * superagent
 * Copyright (c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

var superagent = function(exports){
  
  /**
   * Expose the request function.
   */
  
  exports = request;

  /**
   * Library version.
   */

  exports.version = '0.3.0';

  /**
   * Noop.
   */

  var noop = function(){};

  /**
   * Determine XHR.
   */

  function getXHR() {
    if (window.XMLHttpRequest
      && ('file:' != window.location.protocol || !window.ActiveXObject)) {
      return new XMLHttpRequest;
    } else {
      try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
      try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
    }
    return false;
  }

  /**
   * Removes leading and trailing whitespace, added to support IE.
   *
   * @param {String} s
   * @return {String}
   * @api private
   */

  var trim = ''.trim
    ? function(s) { return s.trim(); }
    : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

 /**
  * Check if `obj` is a function.
  *
  * @param {Mixed} obj
  * @return {Boolean}
  * @api private
  */
  
  function isFunction(obj) {
    return 'function' == typeof obj;
  }

  /**
   * Check if `obj` is an object.
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api private
   */

  function isObject(obj) {
    return null != obj && 'object' == typeof obj;
  }

  /**
   * Serialize the given `obj`.
   *
   * @param {Object} obj
   * @return {String}
   * @api private
   */

  function serialize(obj) {
    if (!isObject(obj)) return obj;
    var pairs = [];
    for (var key in obj) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
  }

  /**
   * Expose serialization method.
   */

   exports.serializeObject = serialize;

   /**
    * Parse the given x-www-form-urlencoded `str`.
    *
    * @param {String} str
    * @return {Object}
    * @api private
    */

  function parseString(str) {
    var obj = {}
      , pairs = str.split('&')
      , parts
      , pair;

    for (var i = 0, len = pairs.length; i < len; ++i) {
      pair = pairs[i];
      parts = pair.split('=');
      obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }

    return obj;
  }

  /**
   * Expose parser.
   */

  exports.parseString = parseString;

  /**
   * Default MIME type map.
   * 
   *     superagent.types.xml = 'application/xml';
   * 
   */

  exports.types = {
      html: 'text/html'
    , json: 'application/json'
    , urlencoded: 'application/x-www-form-urlencoded'
    , 'form-data': 'application/x-www-form-urlencoded'
  };

  /**
   * Default serialization map.
   * 
   *     superagent.serialize['application/xml'] = function(obj){
   *       return 'generated xml here';
   *     };
   * 
   */

   exports.serialize = {
       'application/x-www-form-urlencoded': serialize
     , 'application/json': JSON.stringify
   };

   /**
    * Default parsers.
    * 
    *     superagent.parse['application/xml'] = function(str){
    *       return { object parsed from str };
    *     };
    * 
    */

  exports.parse = {
      'application/x-www-form-urlencoded': parseString
    , 'application/json': JSON.parse
  };

  /**
   * Parse the given header `str` into
   * an object containing the mapped fields.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */

  function parseHeader(str) {
    var lines = str.split(/\r?\n/)
      , fields = {}
      , index
      , line
      , field
      , val;

    lines.pop(); // trailing CRLF

    for (var i = 0, len = lines.length; i < len; ++i) {
      line = lines[i];
      index = line.indexOf(':');
      field = line.slice(0, index).toLowerCase();
      val = trim(line.slice(index + 1));
      fields[field] = val;
    }

    return fields;
  }

  /**
   * Return the mime type for the given `str`.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function type(str){
    return str.split(/ *; */).shift();
  };

  /**
   * Return header field parameters.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */

  function params(str){
    return str.split(/ *; */).reduce(function(obj, str){
      var parts = str.split(/ *= */)
        , key = parts.shift()
        , val = parts.shift();

      if (key && val) obj[key] = val;
      return obj;
    }, {});
  };

  /**
   * Initialize a new `Response` with the given `xhr`.
   *
   *  - set flags (.ok, .error, etc)
   *  - parse header
   *
   * Examples:
   *
   *  Aliasing `superagent` as `request` is nice:
   *
   *      request = superagent;
   *
   *  We can use the promise-like API, or pass callbacks:
   *
   *      request.get('/').end(function(res){});
   *      request.get('/', function(res){});
   *
   *  Sending data can be chained:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' })
   *        .end(function(res){});
   *
   *  Or passed to `.send()`:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' }, function(res){});
   *
   *  Or passed to `.post()`:
   *
   *      request
   *        .post('/user', { name: 'tj' })
   *        .end(function(res){});
   *
   * Or further reduced to a single call for simple cases:
   *
   *      request
   *        .post('/user', { name: 'tj' }, function(res){});
   *
   * @param {XMLHTTPRequest} xhr
   * @param {Object} options
   * @api private
   */

  function Response(xhr, options) {
    options = options || {};
    this.xhr = xhr;
    this.text = xhr.responseText;
    this.setStatusProperties(xhr.status);
    this.header = parseHeader(xhr.getAllResponseHeaders());
    this.setHeaderProperties(this.header);
    this.body = this.parseBody(this.text);
  }

  /**
   * Set header related properties:
   *
   *   - `.type` the content type without params
   *
   * A response of "Content-Type: text/plain; charset=utf-8"
   * will provide you with a `.type` of "text/plain".
   *
   * @param {Object} header
   * @api private
   */

  Response.prototype.setHeaderProperties = function(header){
    // content-type
    var ct = this.header['content-type'] || '';
    this.type = type(ct);

    // params
    var obj = params(ct);
    for (var key in obj) this[key] = obj[key];
  };

  /**
   * Parse the given body `str`.
   *
   * Used for auto-parsing of bodies. Parsers
   * are defined on the `superagent.parse` object.
   *
   * @param {String} str
   * @return {Mixed}
   * @api private
   */

  Response.prototype.parseBody = function(str){
    var parse = exports.parse[this.type];
    return parse
      ? parse(str)
      : null;
  };

  /**
   * Set flags such as `.ok` based on `status`.
   *
   * For example a 2xx response will give you a `.ok` of __true__
   * whereas 5xx will be __false__ and `.error` will be __true__. The
   * `.clientError` and `.serverError` are also available to be more
   * specific, and `.statusType` is the class of error ranging from 1..5
   * sometimes useful for mapping respond colors etc.
   *
   * "sugar" properties are also defined for common cases. Currently providing:
   *
   *   - .noContent
   *   - .badRequest
   *   - .unauthorized
   *   - .notAcceptable
   *   - .notFound
   *
   * @param {Number} status
   * @api private
   */

  Response.prototype.setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = 4 == type || 5 == type;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status || 1223 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.notFound = 404 == status;
  };

  /**
   * Expose `Response`.
   */

  exports.Response = Response;

  /**
   * Initialize a new `Request` with the given `method` and `url`.
   *
   * @param {String} method
   * @param {String} url
   * @api public
   */
  
  function Request(method, url) {
    var self = this;
    EventEmitter.call(this);
    this.method = method;
    this.url = url;
    this.header = {};
    this.set('X-Requested-With', 'XMLHttpRequest');
    this.on('end', function(){
      self.callback(new Response(self.xhr));
    });
  }

  /**
   * Inherit from `EventEmitter.prototype`.
   */

  Request.prototype = new EventEmitter;
  Request.prototype.constructor = Request;

  /**
   * Set header `field` to `val`, or multiple fields with one object.
   *
   * Examples:
   *
   *      req.get('/')
   *        .set('Accept', 'application/json')
   *        .set('X-API-Key', 'foobar')
   *        .end(callback);
   *
   *      req.get('/')
   *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
   *        .end(callback);
   *
   * @param {String|Object} field
   * @param {String} val
   * @return {Request} for chaining
   * @api public
   */

  Request.prototype.set = function(field, val){
    if (isObject(field)) {
      for (var key in field) {
        this.set(key, field[key]);
      }
      return this;
    }
    this.header[field.toLowerCase()] = val;
    return this;
  };

  /**
   * Set Content-Type to `type`, mapping values from `exports.types`.
   *
   * Examples:
   *
   *      superagent.types.xml = 'application/xml';
   *
   *      request.post('/')
   *        .type('xml')
   *        .send(xmlstring)
   *        .end(callback);
   *      
   *      request.post('/')
   *        .type('application/xml')
   *        .send(xmlstring)
   *        .end(callback);
   *
   * @param {String} type
   * @return {Request} for chaining
   * @api public
   */

  Request.prototype.type = function(type){
    this.set('Content-Type', exports.types[type] || type);
    return this;
  };

  /**
   * Add `obj` to the query-string, later formatted
   * in `.end()`.
   *
   * @param {Object} obj
   * @return {Request} for chaining
   * @api public
   */

  Request.prototype.query = function(obj){
    this._query = this._query || {};
    for (var key in obj) {
      this._query[key] = obj[key];
    }
    return this;
  };

  /**
   * Send `data`, defaulting the `.type()` to "json" when
   * an object is given.
   *
   * Examples:
   *
   *       // querystring
   *       request.get('/search')
   *         .send({ search: 'query' })
   *         .end(callback)
   *
   *       // multiple data "writes"
   *       request.get('/search')
   *         .send({ search: 'query' })
   *         .send({ range: '1..5' })
   *         .send({ order: 'desc' })
   *         .end(callback)
   *
   *       // manual json
   *       request.post('/user')
   *         .type('json')
   *         .send('{"name":"tj"})
   *         .end(callback)
   *       
   *       // auto json
   *       request.post('/user')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *       
   *       // manual x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send('name=tj')
   *         .end(callback)
   *       
   *       // auto x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *
   * @param {String|Object} data
   * @return {Request} for chaining
   * @api public
   */

  Request.prototype.send = function(data){
    if ('GET' == this.method) return this.query(data);
    var obj = isObject(data);

    // merge
    if (obj && isObject(this._data)) {
      for (var key in data) {
        this._data[key] = data[key];
      }
    } else {
      this._data = data;
    }

    if (!obj) return this;
    if (this.header['content-type']) return this;
    this.type('json');
    return this;
  };

  /**
   * Initiate request, invoking callback `fn(res)`
   * with an instanceof `Response`.
   *
   * @param {Function} fn
   * @return {Request} for chaining
   * @api public
   */

  Request.prototype.end = function(fn){
    var self = this
      , xhr = this.xhr = getXHR()
      , query = this._query
      , data = this._data;

    // store callback
    this.callback = fn || noop;

    // state change
    xhr.onreadystatechange = function(){
      if (4 == xhr.readyState) self.emit('end');
    };

    // querystring
    if (query) {
      query = exports.serializeObject(query);
      this.url += ~this.url.indexOf('?')
        ? '&' + query
        : '?' + query;
    }

    // initiate request
    xhr.open(this.method, this.url, true);

    // body
    if ('GET' != this.method && 'HEAD' != this.method) {
      // serialize stuff
      var serialize = exports.serialize[this.header['content-type']];
      if (serialize) data = serialize(data);
    }

    // set header fields
    for (var field in this.header) {
      xhr.setRequestHeader(field, this.header[field]);
    }

    // send stuff
    xhr.send(data);
    return this;
  };
  
  /**
   * Expose `Request`.
   */
  
  exports.Request = Request;

  /**
   * Issue a request:
   *
   * Examples:
   *
   *    request('GET', '/users').end(callback)
   *    request('/users').end(callback)
   *    request('/users', callback)
   *
   * @param {String} method
   * @param {String|Function} url or callback
   * @return {Request}
   * @api public
   */

  function request(method, url) {
    // callback
    if ('function' == typeof url) {
      return new Request('GET', method).end(url);
    }

    // url first
    if (1 == arguments.length) {
      return new Request('GET', method);
    }

    return new Request(method, url);
  }

  /**
   * GET `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */

  request.get = function(url, data, fn){
    var req = request('GET', url);
    if (isFunction(data)) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };

  /**
   * GET `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */

  request.head = function(url, data, fn){
    var req = request('HEAD', url);
    if (isFunction(data)) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };

  /**
   * DELETE `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Function} fn
   * @return {Request}
   * @api public
   */

  request.del = function(url, fn){
    var req = request('DELETE', url);
    if (fn) req.end(fn);
    return req;
  };

  /**
   * POST `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */

  request.post = function(url, data, fn){
    var req = request('POST', url);
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };

  /**
   * PUT `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} data
   * @param {Function} fn
   * @return {Request}
   * @api public
   */

  request.put = function(url, data, fn){
    var req = request('PUT', url);
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };

  return exports;
  
}({});


;
(function (glob) {
  
  var isBrowser = typeof window != 'undefined',
      callbackCounter = new Date().getTime(),
      reStatusOK = /^(?:2|3)\d*$/,
      head;
      
  // TODO: make this work
  function noCORS(url) {
      // typeof XMLHttpRequest != 'undefined' && !('withCredentials' in new XMLHttpRequest()),
      
      return true;
  }
  
  function jsonp(url, data, opts, callback) {
      // create the url args
      var args = [], script, done = false;
      
      // iterate through the data and create key value pairs
      for (var key in data) {
          args[args.length] = escape(key) + '=' + escape(data[key]);
      }
      
      // apply either a ? or & to the url depending on whether we already have query params
      url += (url.indexOf('?') >= 0 ? '&' : '?') + opts.cbParam + '=' + opts.fnname + '&';
      
      // if the callback function does not exist, then create it
      if (! window[fnName]) {
          // create the callback function
          window[fnName] = function(data) {
              // trigger the callback
              callback(null, data);
  
              // delete this function
              window[fnName] = undefined;
          };
      }
      
      // create the loader script
      script = document.createElement('script');
      
      // initialise the script
      script.src = url + args.join('&');
      script.async = true;
      
      // handle the script loading
      script.onload = script.onreadystatechange = function() {
          if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
              done = true;
              script.onload = script.onreadystatechange = null;
              if (script && script.parentNode) {
                  script.parentNode.removeChild(script);
              }
          }
      };
      
      // if we don't have a reference to the head section, then do that now
      if (! head) {
          head = document.getElementsByTagName('head')[0];
      }
      
      // add the script tag
      head.appendChild(script);
  }
  
  function makeRequest(url, data, opts, callback) {
      // if we have the force callback param, clone the data and add a callback
      if (opts.forceCallback) {
          var clonedData = {};
          
          for (var key in data) {
              clonedData[key] = data[key];
          }
          
          data = clonedData;
          data[opts.cbParam] = 'fakecb';
      }
      
      superagent
          .get(url)
          .send(data)
          .end(function(res) {
              var err;
              
              // if the status code is not ok, then update the err
              if (! reStatusOK.test(res.status)) {
                  err = new Error('Not OK (status = ' + res.status + ')');
              }
              
              // if we are in force callback mode, then extract the actual data
              if ((!err) && opts.forceCallback) {
                  var text = res.text.slice(res.text.indexOf('(') + 1, res.text.lastIndexOf(')'));
  
                  // attempt to parse the response body
                  try {
                      res.body = JSON.parse(text);
                  }
                  catch (e) {
                      err = new Error('Unable to parse data using forced callback');
                  }
              }
              
              callback(err, res.body);
          });
  }
  
  /**
  # jsonget
  This is the main function of the jsonget helper and behind the scenes will
  invoke either a JSONP style request or a standard XHR (or server-side) request
  if acceptable.
  
  ## Valid Options
  
  - fnname:         The JSONP callback function name (default = json%counter%)
  - cbParam:        The JSONP callback parameter passed to the JSONP compatible endpoint (default = callback)
  - forceCallback:  Some (broken) webservices will only respond if a callback parameter is supplied.  Use this option if working with
                    one of those services and you are doing server side integration in addition to browser.
  
  */
  function jsonget(url, data, opts, callback) {
      // remap args if required
      if (typeof opts == 'function') {
          callback = opts;
          opts = {};
      }
      
      // ensure we have options
      opts = opts || {};
      opts.fnname = opts.fnname || 'json' + (callbackCounter++);
      opts.cbParam = opts.cbParam || 'callback';
      
      // if jsonp is required, then used the script loader
      if (isBrowser && noCORS(url)) {
          jsonp(url, data, opts, callback);
      }
      // otherwise, use superagent
      else {
          makeRequest(url, data, opts, callback);
      }
  }
  
  glob.jsonget = jsonget;
  
})(this);

;
(function (glob) {
  
  var _templates = {
    'Address': '<xls:Address countryCode="{{ country }}" language="{{ lang }}">{{#if street}}<xls:StreetAddress>{{#if number}}<xls:Building number="{{ number }}"/>{{/if}}<xls:Street>{{ street }}</xls:Street></xls:StreetAddress>{{#each regions}}<xls:Place>{{ this }}</xls:Place>{{/each}}{{else}}<xls:freeFormAddress>{{ text }}</xls:freeFormAddress>{{/if}}</xls:Address>',
    'DetermineRouteRequest': '<xls:DetermineRouteRequest provideRouteHandle="{{ provideRouteHandle }}" distanceUnit="{{ distanceUnit }}" routeQueryType="{{ routeQueryType }}"><xls:RoutePlan><xls:RoutePreference>{{ routePreference }}</xls:RoutePreference><xls:WayPointList>{{{ waypoints }}}</xls:WayPointList></xls:RoutePlan>{{#if instructions}}<xls:RouteInstructionsRequest rules="{{ rulesFile }}" providePoint="true" />{{/if}}{{#if geometry}}<xls:RouteGeometryRequest />{{/if}}</xls:DetermineRouteRequest>',
    'GeocodeRequest': '<xls:GeocodeRequest>{{#each address}}{{{ this }}}{{/each}}</xls:GeocodeRequest>',
    'Request': '<xls:XLS version="1" xls:lang="en" xmlns:xls="http://www.opengis.net/xls" rel="{{ ddsVersion }}" xmlns:gml="http://www.opengis.net/gml"><xls:RequestHeader clientName="{{ user }}" clientPassword="{{ apikey }}" sessionID="{{ sessionId }}" configuration="{{ mapConfig }}" /><xls:Request maximumResponses="{{ maxResponses }}" version="{{ version }}" requestID="{{ requestId }}" methodName="{{ requestName }}">{{{ requestBody }}}</xls:Request></xls:XLS>',
    'RUOKRequest': '<xls:RUOKRequest />'
  };
  
  
  // get the handlebars library
  var hbs = typeof Handlebars != 'undefined' ? Handlebars : handlebars,
      _ = typeof window != 'undefined' ? window._ : underscore,
      sessionId = new Date().getTime(),
      ddsCurrentVersion = '4.5.2',
      nextRequestId = 1,
      handshakeResponse,
      reTrailingSlash = /\/$/,
      reCoreRequestName = /^(.*)Request$/i,
      
      // initialise default option values
      defaultOpts = {
          // initialise the default map configuration
          mapConfig: 'global-decarta',
          
          // set the max responses to the devzone default of 25
          maxResponses: 25,
          version: '1.0',
          
          // create a new default session id
          sessionId: new Date().getTime(),
          
          // initialise the default dds version
          ddsVersion: '4.5.2',
          
          // initialise the default endpoint
          endpoint: 'http://ws.decarta.com/openls',
          
          // routing defaults
          rulesFile: 'maneuver-rules'
      };
      
  // compile the resources
  for (var key in _templates) {
      _templates[key] = hbs.compile(_templates[key]);
  }
  
  function addressToXML(address, opts) {
      var results = [],
          parser = _templates.Address;
          
      // ensure we have opts
      opts = opts || {};
      
      // default the opts
      opts.country = opts.country || 'US';
      opts.lang = opts.lang || 'EN';
      
      // if the address is not an array, then make it one
      if (! Array.isArray(address)) {
          address = [address];
      }
      
      for (var ii = 0, count = address.length; ii < count; ii++) {
          var data;
          
          // if the specified address is a string, then convert into a tmp object
          if (typeof address[ii] == 'string' || (address[ii] instanceof String)) {
              data = _.extend({}, opts, {
                  text: address[ii]
              });
          }
          else {
              data = _.extend({}, opts, address[ii]);
          }
          
          results[ii] = parser(data);
      }
  
      return results;
  }
  
  function configure(opts) {
      _.extend(defaultOpts, opts);
  }
  
  function extractCoreResponse(requestType, response) {
      var responseType = requestType.replace(reCoreRequestName, '$1Response'),
          nodes = ['response', 'XLS', 'Response', responseType],
          errNodes = ['response', 'XLS', 'ResponseHeader', 'ErrorList'],
          realResponse = response, errResponse = response;
          
      // console.log(nodes);
      // console.log(require('util').inspect(realResponse, false, Infinity, true));
  
      while (realResponse && nodes.length) {
          realResponse = realResponse[nodes.shift()];
      }
      
      // if we don't have a real response, look for an error
      if (! realResponse) {
          while (errResponse && errNodes.length) {
              errResponse = errResponse[errNodes.shift()];
          }
      }
      
      // console.log(require('util').inspect(response, false, Infinity, true));
      return realResponse || new Error(errResponse.Error.message);
  }
  
  function makeRequest(requestType, opts, callback) {
      var args, data, xml, targetUrl, jsonOpts;
      
      // if we don't have a template for the specified request type, then throw an error
      if (typeof _templates[requestType] != 'function') {
          throw new Error('Cannot find a template for a "' + requestType + '" request.');
      }
      
      // clone the options into request data
      data = _.clone(opts);
      
      // initialise the request id
      data.requestId = data.requestId || nextRequestId++;
      
      // generate the inner content
      data.requestName = requestType;
      data.requestBody = _templates[requestType](data);
  
      // create the xml request content
      xml = _templates.Request(data);
      
      // create the request args
      args = {
          reqID: data.requestId,
          chunkNo: 1, 
          numChunks: 1,
          data: xml,
          responseFormat: 'JSON'
      };
      
      // specify jsonget opts
      // the decarta API insists (incorrectly) on a callback so we have to give it one
      jsonOpts = {
          forceCallback: true
      };
      
      // make the request
      jsonget(
          opts.endpoint.replace(reTrailingSlash, '') + '/JSON', 
          args, 
          jsonOpts, 
          function(err, results) {
              var coreResponse;
              
              // extract the core response
              if (! err) {
                  coreResponse = extractCoreResponse(requestType, results);
  
                  // if we only extracted an error, then map the core response 
                  // to the error param and the core response back to the complete
                  // results
                  if (coreResponse instanceof Error) {
                      err = coreResponse;
                      coreResponse = results;
                  }
              }
              
              callback(err, coreResponse);
          }
      );
  }
  
  function handshake(opts, callback) {
      // if we have an existing handshake response, then trigger the callback
      if (handshakeResponse) return callback(null, handshakeResponse);
  
      // make the ruokrequest
      makeRequest('RUOKRequest', opts, function(err, response) {
          // cache the handshake response
          if (! err) {
              handshakeResponse = response;
          }
          
          callback(err, response);
      });
  }
  
  function template(name) {
      return _templates[name];
  }
  
  /**
  # dws
  This is a JS frontend for the decarta routing engine via their WebServices
  frontend.
  
  ## Configurable Options
  
  - mapConfig:            The server map configuration to use (default = global-decarta)
  - user:                 The username to use for authenticating with the decarta services
  - apikey:               The api key for authenticating with the decarta services
  
  - maxResponses:         (default = 25)
  - version:              (default = 1.0)
  - requestId:            The request id (automatically incrementing)
  - sessionId:            The session id (default = generated)
  
  - ddsVersion:           Set to the version of the DDS you are using (default = 4.5.2)
  - endpoint:             The DDS Webservices endpoint (default: http://ws.decarta.com/openls)
  */
  function dws(requestType, opts, callback) {
      // remap args if required
      if (typeof opts == 'function') {
          callback = opts;
          opts = {};
      }
      
      // initialise a default callback if none provided
      // TODO: consider returning a promise instead
      callback = callback || function() {};
      
      // ensure we have been passed options
      // and fill in defaults where required
      opts = _.defaults(opts || {}, defaultOpts);
      
      // check handshake done
      handshake(opts, function(err, data) {
          // if we received an error, then fire the callback and return
          if (err) {
              callback(err);
              return;
          }
          
          // TODO: apply the handshake option tweaks
          makeRequest(requestType, opts, callback);
      });
  }
  
  // expose the create request and handshake functions
  dws.addressToXML = addressToXML;
  dws.configure = configure;
  dws.makeRequest = makeRequest;
  dws.handshake = handshake;
  dws.template = template;
  
  // include the other operations
  /**
  # dws.geocode(address, opts, callback)
  
  ## Configurable Options
  
  - provideRouteHandle:   Whether or not a route handle should be returned (default = false)
  - distanceUnit:         Distance units (default = KM)
  - routeQueryType:       The type of decarta routing request to make, RMAN, RTXT, etc (default = RMAN)
  
  - routePreference:      What type of routing algorithm to use, fastest, shortest, etc (default = fastest)
  
  */
  dws.geocode = function(address, opts, callback) {
      var waypoints = '';
  
      // remap args if required
      if (typeof opts == 'function') {
          callback = opts;
          opts = {};
      }
      
      // ensure we have options
      opts = opts || {};
      
      // default the country and language
      opts.country = opts.country || 'US';
      opts.lang = opts.lang || 'EN';
      
      // create the address xml
      opts.address = dws.addressToXML(address);
      console.log(opts);
  
      // run the request
      dws('DetermineRouteRequest', opts, callback);
  };
  /**
  # dws.route(points, opts, callback)
  
  ## Configurable Options
  
  - provideRouteHandle:   Whether or not a route handle should be returned (default = false)
  - distanceUnit:         Distance units (default = KM)
  - routeQueryType:       The type of decarta routing request to make, RMAN, RTXT, etc (default = RMAN)
  
  - routePreference:      What type of routing algorithm to use, fastest, shortest, etc (default = fastest)
  
  */
  dws.route = function(points, opts, callback) {
      var waypoints = '';
  
      // remap args if required
      if (typeof opts == 'function') {
          callback = opts;
          opts = {};
      }
      
      // ensure we have options
      opts = opts || {};
  
      // initialise DetermineRouteRequest tag attributes
      opts.provideRouteHandle = (typeof opts.provideRouteHandle != 'undefined' && opts.provideRouteHandle).toString();
      opts.distanceUnit = opts.distanceUnit || 'KM';
      opts.routeQueryType = opts.routeQueryType || 'RMAN';
  
      // initialise the route preference option
      opts.routePreference = opts.routePreference || 'fastest';
      
      // initialise instructions and route geometry to return true
      opts.geometry = typeof opts.geometry == 'undefined' || opts.geometry;
      
      // initialise instruction defaults
      opts.instructions = typeof opts.instructions == 'undefined' || opts.instructions;
      
      // create the waypoint tags manually
      // only need to do this because of the StartPoint, EndPoint, ViaPoint tag names :/
      for (var ii = 0, count = points.length; ii < count; ii++) {
          // determine the appropriate tag to use for the waypoint
          // as to why this is required, who knows....
          var tagName = (ii === 0 ? "StartPoint" : (ii === count-1 ? "EndPoint" : "ViaPoint"));
          
          waypoints += '<xls:' + tagName + '><xls:Position><gml:Point><gml:pos>' + 
              points[ii].lat + ' ' + points[ii].lon + 
              '</gml:pos></gml:Point></xls:Position></xls:' + tagName + '>';
      }
      
      // add the the waypoints to the options
      opts.waypoints = waypoints;
      
      // run the request
      dws('DetermineRouteRequest', opts, callback);
  };
  
  glob.dws = dws;
  
})(this);
