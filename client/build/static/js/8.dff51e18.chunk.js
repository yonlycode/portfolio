(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{117:function(e,a,t){e.exports=t.p+"static/media/logo.628df208.png"},118:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(119),i=t(120),l=t(117),s=t.n(l);a.a=function(e){return r.a.createElement("section",{className:"home_banner_area"},r.a.createElement("div",{className:"container box_1620",style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("img",{style:{maxHeight:"150px"},src:s.a,alt:"website logo"}),r.a.createElement("h3",null,e.title),r.a.createElement(c.a,{tag:"nav",listTag:"div"},r.a.createElement(i.a,{tag:"a",href:"/"},"Home"),r.a.createElement(i.a,{tag:"a",href:"/"+e.currentUri},e.currentUri))))}},119:function(e,a,t){"use strict";var n=t(4),r=t(5),c=t(0),i=t.n(c),l=t(1),s=t.n(l),o=t(6),u=t.n(o),m=t(2),d={tag:m.h,listTag:m.h,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},g=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,l=e.children,s=e.tag,o=e.listTag,d=e["aria-label"],g=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.e)(u()(a),c),f=Object(m.e)(u()("breadcrumb",t),c);return i.a.createElement(s,Object(n.a)({},g,{className:b,"aria-label":d}),i.a.createElement(o,{className:f},l))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=g},120:function(e,a,t){"use strict";var n=t(4),r=t(5),c=t(0),i=t.n(c),l=t(1),s=t.n(l),o=t(6),u=t.n(o),m=t(2),d={tag:m.h,active:s.a.bool,className:s.a.string,cssModule:s.a.object},g=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,s=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(m.e)(u()(a,!!c&&"active","breadcrumb-item"),t);return i.a.createElement(l,Object(n.a)({},s,{className:o,"aria-current":c?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},a.a=g},150:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),c=t(16),i=t(15),l=t(17),s=t(0),o=t.n(s),u=t(118),m=t(39),d=t.n(m),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(i.a)(a).call(this,e))).getAdminInfo=function(){d()({method:"get",url:"/api/admin/"+window.localStorage.getItem("adminId"),headers:{Authorization:"Bearer "+window.localStorage.getItem("token")}}).catch(function(e){t.setState({errorMsg:e})}).then(function(e){void 0===e.data?t.setState({errorMsg:"there is a problem here"}):t.setState({admin:e.data})})},t.state={admin:{},errorMsg:null},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getAdminInfo()}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),a}(s.Component);t.d(a,"default",function(){return b});var b=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,{currentUri:"admin-setting",title:"Want to manage Account?"}),o.a.createElement(g,null))}}]),a}(s.Component)}}]);
//# sourceMappingURL=8.dff51e18.chunk.js.map