"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410],{6409:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(885),r=n(501),u=n(6871),c=n(184);function a(t){var e=t.title,n=t.id,a=(0,r.lr)(),o=(0,i.Z)(a,2),s=o[0];o[1];return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/goit-react-hw-05-movies/movies/".concat(n),state:{location:(0,u.TH)().pathname,search:s.get("query")},children:e})})}function o(t){var e=t.movies;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,c.jsx)(a,{title:n,id:e},e)}))})})}},5918:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var i=n(2982),r=n(885),u=n(2791),c=n(501),a=n(6871),o=n(6409),s=n(6559),f="MoviesPage_form__OqnPx",l=n(184);function h(){var t=(0,u.useState)(""),e=(0,r.Z)(t,2),n=e[0],h=e[1],v=(0,u.useState)([]),d=(0,r.Z)(v,2),m=d[0],x=d[1],_=(0,c.lr)(),g=(0,r.Z)(_,2),j=g[0],p=g[1],Z=(0,a.TH)().state||j.get("query");function y(t){if(t){p("query=".concat(t)),x([]);try{s.Z.fetchMoviesWithQuery(t).then((function(t){t.data.results.map((function(t){var e=t.id,n=t.title;return x((function(t){return[].concat((0,i.Z)(t),[{id:e,title:n}])}))}))}))}catch(e){}}}(0,u.useEffect)((function(){Z&&j.set("query",Z),Z&&y(Z)}),[]),(0,u.useEffect)((function(){x([])}),[Z]);return(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault()},children:[(0,l.jsx)("input",{onChange:function(t){h(t.target.value)},value:n}),(0,l.jsx)("button",{onClick:function(){return y(n)},children:"Search"})]}),0!==m.length&&(0,l.jsx)(o.Z,{movies:m})]})}}}]);
//# sourceMappingURL=MoviesPage.c24fdef9.chunk.js.map