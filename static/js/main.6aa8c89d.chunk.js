(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/site-logo.6f276766.png"},,,function(e,t,n){e.exports=n(39)},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),i=n(2),l=n(4),s=n(3),u=n(5),m=n(40),p=(n(24),n(15)),d=n.n(p),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("header",{className:"site-header"},c.a.createElement("input",{type:"checkbox",name:"main-nav-toggle",id:"main-nav-toggle"}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"site-branding"},c.a.createElement("p",{className:"site-title"},c.a.createElement(m.a,{to:"/"},c.a.createElement("img",{src:d.a,alt:"logo",className:"site-logo"}))),c.a.createElement("p",{className:"site-description"},"Code challenge")),c.a.createElement("label",{htmlFor:"main-nav-toggle",id:"toggle"},c.a.createElement("i",{className:"fas fa-bars"}),c.a.createElement("i",{className:"fas fa-times",id:"times-icon"})),c.a.createElement("nav",{className:"navigation main"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(m.a,{to:"/invoices"},"Invoices"))))))},n}return Object(u.a)(t,e),t}(a.Component),f=n(43),E=n(42),g=(n(27),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("main",null,c.a.createElement("section",{className:"home-container"},c.a.createElement("h2",null,"Innovation at its finest")),c.a.createElement("section",{className:"home-credentials"},c.a.createElement("article",{className:"text-wrapper"},c.a.createElement("p",{className:"home-credentials-text"},"this.application is designed & developed as a Code Challenge to demonstrate knowledge of trending technologies in the field of programming. The Code Challenge is provided by Brayn.io. Fun & Top challenge - provided by top company!"),c.a.createElement("a",{href:"https://brayn.io"},"Visit Brayn.io"))))},n}return Object(u.a)(t,e),t}(a.Component)),v=(n(28),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("tr",{className:"datarow",key:n.props._id},c.a.createElement("td",{"data-name":"Invoice Number"},n.props.receipt_id||"-"),c.a.createElement("td",{"data-name":"Invoice Date"},n.props.receipt_date||"-"),c.a.createElement("td",{"data-name":"Net Amount"},n.props.netto||"-"),c.a.createElement("td",{"data-name":"Gross Amount"},n.props.brutto||"-"),c.a.createElement("td",{"data-name":"Open Amount"},n.props.balance||"-"),c.a.createElement("td",{"data-name":"Debitor"},n.props.Debitor.name||"-"),c.a.createElement("td",{"data-name":"Actions"},c.a.createElement(m.a,{to:"/invoices/details/".concat(n.props._id)},"Details")))},n}return Object(u.a)(t,e),t}(a.Component)),b=n(16),O=n.n(b),w=(n(32),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handlePageClick=function(e){var t=e.selected+1;n.props.getPage(t)},n.render=function(){return c.a.createElement(O.a,{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:n.props.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:n.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})},n}return Object(u.a)(t,e),t}(a.Component)),y=n(7),j=n.n(y),N="https://baas.kinvey.com/",A="kid_HycXrod2V",C="597fa1723fd94c2c8fb5c430ee7f1e65";function k(e,t,n,a){return{method:e,url:N+t+"/"+A+"/"+n,headers:{Authorization:(c=a,"basic"===c?"Basic "+btoa(A+":"+C):"Kinvey "+localStorage.getItem("authtoken"))}};var c}var I={get:function(e){return j.a.ajax(k("GET","appdata","invoices"+e,"kinvey"))},post:function(e,t,n,a){var c=k("POST",e,t,n);return c.data=a,j.a.ajax(c)}},x={username:"admin",password:"admin"};var S={authenticate:function(){return I.post("user","login","basic",x)},saveSession:function(e){localStorage.setItem("username",e.username),localStorage.setItem("authtoken",e._kmd.authtoken),localStorage.setItem("userId",e._id)},isNotAuthenticated:function(){return!localStorage.getItem("authtoken")}};function D(e){var t=j()("#errorBox");t.empty(),t.append('<i class="fas fa-times-circle"></i> '),t.append(e),t.show(),j()("#main-nav-toggle").prop("checked",!1)}j()(function(){var e=0;j()(document).on({ajaxStart:function(){e||j()("#loadingBox").fadeIn(),e++,j()("#errorBox").fadeOut(),j()("#main-nav-toggle").prop("checked",!1)},ajaxStop:function(){return setTimeout(function(){--e||j()("#loadingBox").fadeOut()},500)}}),j()("#infoBox").click(function(e){return j()(e.target).fadeOut()}),j()("#errorBox").click(function(e){return j()(e.target).fadeOut()})});var B={showInfo:function(e){var t=j()("#infoBox");t.empty(),t.append('<i class="fas fa-check-circle"></i> '),t.append(e),t.show(),setTimeout(function(){return t.fadeOut()},3e3),j()("#main-nav-toggle").prop("checked",!1)},showError:D,handleError:function(e){switch(e){case 404:return D("Entity not found!");case 401:return D("Authentication error!");default:return console.log(e),D("An error occurred!")}}};var P={getAllAtPage:function(e){return I.get("?query={}&limit=20&skip=".concat(20*(Number(e)-1)))},getById:function(e){return I.get("/".concat(e))},getEntitiesCount:function(){return I.get("/_count")}},T=(n(33),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).getPage=function(e){n.getAll(e),window.scrollTo(0,0)},n.getAll=function(e){S.isNotAuthenticated()?S.authenticate().then(function(t){S.saveSession(t),P.getEntitiesCount().then(function(t){n.setState({pageCount:Math.ceil(t.count/20)}),P.getAllAtPage(e).then(function(e){n.setState({invoices:e}),B.showInfo("Loaded all invoices!")}).catch(function(e){B.showError("Error loading invoices!")})})}).catch(function(e){B.handleError(e.status)}):P.getEntitiesCount().then(function(t){n.setState({pageCount:Math.ceil(t.count/20)}),P.getAllAtPage(e).then(function(e){n.setState({invoices:e}),B.showInfo("Loaded all invoices!")}).catch(function(e){B.showError("Error loading invoices!")})})},n.componentDidMount=function(){n.getAll(1)},n.render=function(){return c.a.createElement("main",null,c.a.createElement("section",{className:"table-container"},c.a.createElement("h2",null,"All Invoices"),c.a.createElement("table",{className:"gridtable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Invoice Number"),c.a.createElement("th",null,"Invoice Date"),c.a.createElement("th",null,"Net Amount"),c.a.createElement("th",null,"Gross Amount"),c.a.createElement("th",null,"Open Amount"),c.a.createElement("th",null,"Debitor"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,n.state.invoices.map(function(e){return c.a.createElement(v,Object.assign({key:e._id},e))})))),c.a.createElement(w,{getPage:n.getPage,pageCount:n.state.pageCount}))},n.state={invoices:[],pageCount:0},n}return Object(u.a)(t,e),t}(a.Component)),_=(n(34),n(35),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("article",{className:"invoice-item-container"},c.a.createElement("section",null,"Item: ",n.props.index+1),c.a.createElement("section",null,"Description: ",n.props.description),c.a.createElement("section",null,"Amount: ",n.props.amount),c.a.createElement("section",null,"Price: ",n.props.price),c.a.createElement("section",null,"VAT Rate (%): ",n.props.vat_rate))},n}return Object(u.a)(t,e),t}(a.Component)),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){S.isNotAuthenticated()?S.authenticate().then(function(e){S.saveSession(e),P.getById(n.props.match.params.id).then(function(e){n.setState({invoice:e}),B.showInfo("Loaded invoice data!")}).catch(function(e){B.handleError(e.status),n.props.history.push("/")})}).catch(function(e){B.showError("Something went wrong!")}):P.getById(n.props.match.params.id).then(function(e){n.setState({invoice:e}),B.showInfo("Loaded invoice data!")}).catch(function(e){B.showError("Something went wrong!"),n.props.history.push("/")})},n.render=function(){return c.a.createElement("main",null,c.a.createElement("section",{className:"details-container"},c.a.createElement("h2",null,"Details for invoice"),c.a.createElement("article",null,c.a.createElement("section",null,"Invoice number"),c.a.createElement("section",null,n.state.invoice.receipt_id||"-")),c.a.createElement("article",null,c.a.createElement("section",null,"Invoice date"),c.a.createElement("section",null,n.state.invoice.receipt_date||"-")),c.a.createElement("article",null,c.a.createElement("section",null,"Debitor"),c.a.createElement("section",null,n.state.invoice.Debitor?n.state.invoice.Debitor.name:"-")),c.a.createElement("article",null,c.a.createElement("section",null,"Service period"),c.a.createElement("section",null,n.state.invoice.service_period||"-")),c.a.createElement("article",null,c.a.createElement("section",null,"Due date"),c.a.createElement("section",null,n.state.invoice.due_date||"-")),c.a.createElement("article",null,c.a.createElement("section",null,"Items"),c.a.createElement("section",null,n.state.invoice.items?n.state.invoice.items.map(function(e,t){return c.a.createElement(_,Object.assign({key:e.id,index:t},e))}):"No items.")),c.a.createElement("article",null,c.a.createElement("section",null,"Total NETTO"),c.a.createElement("section",null,n.state.invoice.netto||"0")),c.a.createElement("article",null,c.a.createElement("section",null,"Total BRUTTO"),c.a.createElement("section",null,n.state.invoice.brutto||"0")),c.a.createElement("article",null,c.a.createElement("section",null,"Open amount (balance)"),c.a.createElement("section",null,n.state.invoice.balance||"0"))))},n.state={invoice:{}},n}return Object(u.a)(t,e),t}(a.Component),M=function(){return c.a.createElement(f.a,null,c.a.createElement(E.a,{path:"/invoices/details/:id",component:L}),c.a.createElement(E.a,{path:"/invoices",component:T}),c.a.createElement(E.a,{path:"/",component:g}))},z=(n(37),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("footer",{className:"site-footer"},c.a.createElement("section",null,c.a.createElement("span",null,"Copyright \xa9 2019. All rights reserved | Design & developed by ",c.a.createElement("a",{href:"https://www.github.com/akaradzhov97",className:"dev-credits"},"aKaradzhov97"))))},n}return Object(u.a)(t,e),t}(a.Component)),G=(n(38),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(M,null),c.a.createElement(z,null))},n}return Object(u.a)(t,e),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(41);r.a.render(c.a.createElement(R.a,null,c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.6aa8c89d.chunk.js.map