(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(8),i=n.n(c),o=(n(32),n(7)),r=n(68),d=n(23),b=n.n(d),l=n(1),j=function(e){var t=e.pokeID,n=Object(a.useState)(!0),s=Object(o.a)(n,2),c=s[0],i=s[1],d=Object(a.useState)(),j=Object(o.a)(d,2),m=j[0],p=j[1],u=Object(a.useState)(),h=Object(o.a)(u,2),O=h[0],y=h[1],x=Object(a.useState)(),g=Object(o.a)(x,2),k=g[0],f=g[1];return Object(a.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon/"+t).then((function(e){p(e.data),y(e.data.types),f(e.data.stats),i(!1)}))}),[]),c?Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:Object(l.jsx)("span",{className:"App",children:"Loading..."},"span-loading-")})}):Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[" ",Object(l.jsxs)("span",{style:{fontSize:18},children:[Object(l.jsx)("b",{children:m.name}),"[",m.id,"]"]},"span-"+m.name),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:["Height:",Math.round(.33*m.height*100)/100," ' "]},"lblHeight"+m.name),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:["Weight:",Math.round(.22*m.weight*100)/100," lb "]},"lblWeight"+m.name),Object(l.jsx)("br",{}),O.map((function(e){return Object(l.jsxs)("span",{children:["water"===e.type.name&&Object(l.jsxs)("button",{style:{background:"blue",color:"white"},children:[" ",e.type.name]}),"ground"===e.type.name&&Object(l.jsxs)("button",{style:{background:"brown",color:"white"},children:[" ",e.type.name]}),"dragon"===e.type.name&&Object(l.jsxs)("button",{style:{background:"darkblue",color:"white"},children:[" ",e.type.name]}),"ice"===e.type.name&&Object(l.jsxs)("button",{style:{background:"aqua",color:"black"},children:[" ",e.type.name]}),"grass"===e.type.name&&Object(l.jsxs)("button",{style:{background:"green",color:"white"},children:[" ",e.type.name]}),"poison"===e.type.name&&Object(l.jsxs)("button",{style:{background:"purple",color:"white"},children:[" ",e.type.name]}),"fire"===e.type.name&&Object(l.jsxs)("button",{style:{background:"red",color:"white"},children:[" ",e.type.name]}),"fighting"===e.type.name&&Object(l.jsxs)("button",{style:{background:"#8a1f17",color:"white"},children:[" ",e.type.name]}),"psychic"===e.type.name&&Object(l.jsxs)("button",{style:{background:"#f366b9",color:"black"},children:[" ",e.type.name]}),"normal"===e.type.name&&Object(l.jsxs)("button",{style:{background:"#79858a",color:"white"},children:[" ",e.type.name]}),"steel"===e.type.name&&Object(l.jsxs)("button",{style:{background:"#57a2c2",color:"white"},children:[" ",e.type.name]}),"rock"===e.type.name&&Object(l.jsxs)("button",{style:{background:"#335234",color:"white"},children:[" ",e.type.name]}),"dark"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]}),"flying"===e.type.name&&Object(l.jsxs)("button",{style:{background:"blue",color:"white"},children:[" ",e.type.name]}),"bug"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]}),"ghost"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]}),"electric"===e.type.name&&Object(l.jsxs)("button",{style:{background:"yellow",color:"black"},children:[" ",e.type.name]}),"fairy"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]}),"shadow"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]}),"unknown"===e.type.name&&Object(l.jsxs)("button",{style:{background:"black",color:"white"},children:[" ",e.type.name]})]},"span2-"+m.name+"-"+e.type.name)}))]},m.name),Object(l.jsx)("td",{children:Object(l.jsx)("img",{alt:m.name,src:m.sprites.front_default})}),Object(l.jsxs)("td",{children:[k.map((function(e){return Object(l.jsxs)("span",{children:["hp"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"success",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)})),k.map((function(e){return Object(l.jsxs)("span",{children:["attack"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"danger",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)})),k.map((function(e){return Object(l.jsxs)("span",{children:["defense"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"warning",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)})),k.map((function(e){return Object(l.jsxs)("span",{children:["special-attack"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"info",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)})),k.map((function(e){return Object(l.jsxs)("span",{children:["special-defense"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"success",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)})),k.map((function(e){return Object(l.jsxs)("span",{children:["speed"===e.stat.name&&Object(l.jsx)(r.a,{striped:!0,variant:"danger",now:e.base_stat,min:"0",max:"255",label:e.stat.name+" "+e.base_stat})," "]},"span3-"+m.name+"-"+e.stat.name)}))]})]},t)},m=n(61),p=n(66),u=n(62),h=n(63),O=n(64),y=n(67),x=n(69),g=n(65),k=n(14);n(52);var f=function(){var e=Object(a.useState)([{id:1},{id:2},{id:55},{id:255},{id:256},{id:257},{id:65},{id:64},{id:634},{id:635},{id:306},{id:305},{id:199},{id:289},{id:365},{id:445},{id:452},{id:534},{id:533},{id:565},{id:862},{id:31},{id:34},{id:288},{id:115},{id:398},{id:461},{id:243}]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),d=r[0],b=r[1],f=s.a.useState(!0),w=Object(o.a)(f,2),v=(w[0],w[1]);Object(a.useEffect)((function(){var e=localStorage.getItem("mypokemons");e?(e=JSON.parse(localStorage.getItem("mypokemons")),c(e)):localStorage.setItem("mypokemons",JSON.stringify(n))}),[]);var S=n.map((function(e){var t=e.id;return Object(l.jsx)(j,{pokeID:t})})),I=function(e){return Object(k.b)(e)};return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(k.a,{}),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m.a,{fluid:!0,children:Object(l.jsx)(p.a,{fixed:"top",children:Object(l.jsx)(u.a,{children:Object(l.jsx)(h.a,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(y.a,{id:"idAddPokemonText",value:d,onChange:function(e){b(e.target.value)},placeholder:"Add Pokemon"},"kAddPokemonText"),Object(l.jsx)(x.a,{variant:"primary",onClick:function(){if(0===d||""===d||isNaN(d))I("Cannot add Pokemon to the list.");else{if(parseInt(d)>898)return console.log("Invalid pokemon id"),void I("Cannot add Pokemon to the list.");var e=JSON.parse(localStorage.getItem("mypokemons"));void 0===e.find((function(e){return e.id===parseInt(d)}))?(e.push({id:parseInt(d)}),c(e),localStorage.setItem("mypokemons",JSON.stringify(e)),b(""),v(!0),I("Pokemon was added.")):(v(!0),I("Pokemon is in the list."))}},children:"Add"},"kAddPokemonButton")]})})})})}),Object(l.jsx)(g.a,{striped:!0,bordered:!0,responsive:!0,children:Object(l.jsx)("tbody",{children:S})})]},"divMain")]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};n(58);i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),w()}},[[59,1,2]]]);
//# sourceMappingURL=main.819a8bed.chunk.js.map