(function(e){function t(t){for(var r,o,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},a={index:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-06e8d4ce":"140a0ad8","chunk-741f5406":"a9e3f32f","chunk-18ead1d4":"e0f48dd6","chunk-37da99e1":"7206066d","chunk-39da4604":"eff881fd"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-06e8d4ce":1,"chunk-18ead1d4":1,"chunk-37da99e1":1,"chunk-39da4604":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-06e8d4ce":"ecaa5cb1","chunk-741f5406":"31d6cfe0","chunk-18ead1d4":"3982a780","chunk-37da99e1":"932319c6","chunk-39da4604":"03edf130"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/btswap/h5/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3aa7":function(e,t,n){e.exports=n.p+"img/slowmist.324c645a.png"},"4ffd":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAALzklEQVR42u1dB2xUyxV99N5M76GFEkRv9keA6FggmWKCAImOMN8Bmy4ZFJpCaKYpIEoSwHzwB76pNmDz6b27YEwMyNRQbJrpxTdzZt8uy7K7bHl735r4Skdar9/emT07b+bOLfMUxfukkEANAT+BfgJBAhsFkgReqkhS3wtSr/FTP1NIyZFvpKKAv8BsgWiB/whkCpCTyFQ/G63q8ld1/19KbYFggRiBJy6Q6SieqG0Eq23+0FJEvZ13q7c5MeOl2nY/tS8/jJQWCBW4qgOptnBV7VPp7ExsUYEQgVteRKwlbql9LJrdyO0jEO/FxFoiXu2z18sfBDZnI2ItsVn9Dl4pgQJ3szG5RtxVv4vXSEGBxT8AsZZYrH433TcJB9z5IlWqVKHRo0fT4MGDqWjRom4T07p1awoODqbOnTtrQfIBPTcrDQQS3PkCTZs2pZSUFNq+fTvFxsbS0aNHqXjx4i7rGzFiBN26dYs2bdpE8fHxtGTJEsqVK5e7JCeo35VVmgmkuTtC1q5dS/PmzTP9DaJXrVrlkq769evTvXv3qEWLFvLv8uXL040bN6hq1apajOQ09TuzkXtfi3lu7ty5FBERYfq7XLlydPPmTerdu7dTegoWLEhnzpyhKVOmmN5r1qwZXb9+nUqXLq3VnHyfg+T6WoxcIypWrCiJwfTQt29f+V6XLl3ozp07VLNmTYf1LF++nPbu3StfV69encLDw+XoDQoK0nrhS1M58NiClqj1ao2Fbfjw4ZSYmEjz58+X782cOZMOHz5M+fLl++7nMdpBZtmyZalevXryNaaZJk2aeMq6SPTEwgdzJdaTZlGFChUoNTWV+vfvL/8+e/YsDRo06LtTAxazXr16yR/j4sWLNHHiRA4TLlZrEy6cw/bs1KmTnINLlChBAwYMkKPY3vX+/v507tw506iPiYnhtJPDtSIX7r0sro5j0Vu0aBEVKFCAkpOT5Zzcp08fmj59Oq1YsUICrzE17N69m0JDQ+VcnpaWRnXr1uUkOEvlxi2pppXF4CiqVasmV3+YWatXryajvHnzhh4+fCiB15CPHz/K67DIYWHTYbd3X+XIZYnk7nSDBg3owYMHNGfOHPl62rRpcncGE65w4cISeO3r60uBgYGS4MzMTDpx4gQ1bNhQD5IjXSU3gHNqALBYPX/+nNLT06VVgUXse58ZP348Xbp0SU4R+Cx0MBOcpXLltLM8ibOj3bt3p/fv39Px48epdu3adPr0aerWrZvdz2AbfPLkSbnYVapUSX4WOqCLmeQkZ532IZwdrFGjBj158kSaZqVKlZLvYcvryDa3Q4cOVKRIEfkan4UO6IJOZpJDHCXXR8vdmiPYunUrvXz5kurUqeO2LuiALuhkJjhN5c67Rm/z5s2lRYDFTCud0AWBbm8bxQhnp3B2aunSpXLEwTLQSid0QSd0MxOc8r2UgL6cHcqbNy9du3ZNbhi01g2d0I02mEnua4/gPZydgQ377t07CgsL01w3dEI32mAmeI8tcmsKvOLsDBYkyLBhw2yO8Hbt2slNB/wMsHcvXLggR+eMGTOoVatWNiMW0AnRYuF0Eq9ULr+Rn7l3QbB3IQj1WP4P/mF4xyCvX7+Wr/fs2UPR0dHSgwZ7F3Ls2DGr9jJ0QtCGDru7n60RvJ+7I2XKlJHkzZo1y/Qe/LpbtmyR5GDEDhkyRDpzrPksxowZI2N6kJUrV1KxYsVM/4dO6EYbOhC835LcCgLp3B3JnTs3Xb58mQ4ePCj/rlWrFiUkJNCHDx8oJCSE8ufP75DDHq5KCIKmxjkXOqEbbehAcLrKqUn89co/wPyKxahjx45y1ccurH379k7rCQgIkF42bJ1btmwppxDo1jGvwt+c4Nl6dQQ+3BcvXsjb+enTp3LhcsefgR8rIyND2sHM/mFLzDYnOEbPLBrczllZWZp4woyL286dO/XODIoxkou6hlS9OtK2bVs55y5cuFAznUg8wV2BXAkdCU5VuZXZhK/06ATs3FOnTsk4nDsZPZaA6xLTRFRUlJ4EvzJmavrp1QlMCRDkpWmte/LkyVI3oiE6kuxnDGqyN44d2JEjR2T8DQFOrfXDNwyLBDa1jgTLoGiQHo03atRIjrAJEyZ4rI3FixfT27dvZQanTgSDWyVCT/vXMmqRO7dCfwlQ6G8jRO7aMOsIG6jQ4M4K1axovw1k90A8kELlKMAtf/VPnjx5ZFDTuIP7auHLo1DyOkVsywR+t4ODCqVHKRQ+RuzmCtleRK9evUpxcXF6VjPx16zBAfP582caN26cVYIvrlTo0wGF3kYr9C5Goff7vsZn8T+KU+iDeE2HFYoMUyhfXuttId8NYX2dfBLgVnnB3TDyz2yFdMwJ/hxrmCr8/qTQT2bo3lKhFcEKvVF/AIzmfu1sp1dBXNl+awBwyxueB7CpQA5DyZIl7RIM4oZ0ta1nTahCWXGG6/492fo1SGf99OmTdB7pQHCSLoscnOfw71qdNy0IHtHDtp6RPdT5WJD821+tXwMT8O7du7Ru3TrdFjlWMw3uQyT1bdu2zSGCh9shGKNWjmBB8oJRtq9DWtWhQ4d0M9NYNxrw3z5+/Nhmsp4lwSP9DaabEXkEypcSptogwyKIhe71XpGo8kf7eRf4UXXwDcuNhi9nDhoiFnBN2gp0mhOMBSx1g0jGXvEF5/+h0J3NYuSKBfB9jGGhmxRov01EO1Ag40ium8Y5a77szp7KlSubIhbfIxgjVJpkFvav8X8f9ysUv0akXlWw3ybyjbFt1qIOzxVnD6u7EttWrOrIinRkBN/+RaGENV+Q/E+F/vurYQSDYOBepEJdW9huc8GCBdK7Zh6z43RXsjrcEcBEOMe85MreHDymp6jFyP8FhQuIu6CMQoM6KXTtX6q9LPAg0vbWedmyZfTo0SNTkiC3w501ZAQvF2xg1Mg5ZEV0t7MjrGQY4XJHd0j4N4Zav279+vWyAtSRqiVPhYzYgp6IFN++fdumXeqMHSxH51jD3Axz7cA869fs27ePzp8/r2vQkzVsj+JDWw4YZwmeP1IlWMzJRxZZt7vhWNqxY4euYXvWxJONGzfavGUtCR5mZ4ooU1yhpLWGhQ4krw61PiUhPmdeE61H4glr6hSc7KgQQnaOPYJx20/oJxZGn68BsyzgJ4VOLTM4hGAPw+KAI0ixUtEPQd2d3qlTbMl/SOiD9OzZ076ZJmzdjCiDWWaOjN8MlgMA9yVG7+wh1tsaNWqUbIsxwmwz+Y8tfRW37bNnz6T5ZI3gxDUGqwDzKqnesm8QZ7gGP8DUP4u5Npf1tnBEAqLWjqRheTp9lTUBe9euXbJw2/KLw9ewJkSh3xcKq+Dv1hErEDVToRmDRWZQFfs/JLKFsFX2lgRsthKCgQMHylsXiSeeagMpsBDkvXlLCQFbEYyPj4/cvm7YsMFjbcAUxF3C6ORxqJSLrYwLYXVElp05fMNRIMPS02kBrpZxsY1iFAsi5RRF354ogoH/QcMjZTQrRGQtpUXUF5mVbdq00Twly1rU2ltKadmKwbHSY1d35coVTfy1yHDHmT/wPTDNvS4VgxuF5TiDrl27yhHnbmASW29MDZjXGas8XT7OAMJ2IMfUqVMlya76DJDFgx8IMnTo0GxzIIcxKJrFNR9DsOg5E31AnA87NsikSZOy1ZEyRgln6rSpkBu1cD169LB7NCKmBGQJYQ5HnA9nYDLu2DQ7FAni8WO9LOfkpKQkSTROlYI1YL6lRjIJEqxR8gXB4R1aWiEOQPNjvSAeOZjOFhA/Q0ELDtiwLLc1FrqgLg5uSOZQkEcOpjOKpkcrOprqCiJxJg9Ix9wMMwyZOhqcrOpVRysapZnCfNSX0X+Mc4Gx9YX4+fnpcYQX6wmsrCMZFUPwISP8ExkZqcfIZSPXKG4f0OwMGjdubDqMjrn+TZcDms0XvgNcX3bs2LEyBMRIrq5HjJubcDmH5DNIzmMeGATZhDkPKmGQnEftMEjOw6KYJOdxZ0yS88A+Rsl55CTzZiXnoamMYu2xvxHKt4/9jVCywWN//we+s848Z/yLkgAAAABJRU5ErkJggg=="},"56d7":function(e,t,n){"use strict";n.r(t);n("672e"),n("450d");var r=n("101e"),o=n.n(r),a=(n("be4f"),n("896a")),u=n.n(a),c=(n("5466"),n("ecdf")),s=n.n(c),i=(n("38a0"),n("ad41")),l=n.n(i),d=(n("10cb"),n("f3ad")),f=n.n(d),p=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Nav"),n("router-view")],1)},A=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav-container"},[r("header",[r("div",{staticClass:"left",on:{click:e.goEx}},[r("img",{attrs:{src:n("4ffd"),alt:""}}),r("span",{staticClass:"text"},[e._v("BTswap")])]),r("img",{staticClass:"slowmist",attrs:{src:n("3aa7")}}),r("div",{staticClass:"right"},[r("img",{attrs:{src:n("ec68")},on:{click:e.handleMenu}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.menuShow,expression:"menuShow"}],staticClass:"menu"},[r("a",{directives:[{name:"show",rawName:"v-show",value:"Home"==e.poolRouter,expression:"poolRouter == 'Home'"}],staticClass:"text",attrs:{href:"javascript:;"},on:{click:e.goHome}},[e._v(e._s(e.poolRouter))]),r("a",{directives:[{name:"show",rawName:"v-show",value:"Mining Pool"==e.poolRouter,expression:"poolRouter == 'Mining Pool'"}],staticClass:"text",attrs:{href:"javascript:;"},on:{click:e.goToPool}},[e._v(e._s(e.poolRouter))]),r("a",{staticClass:"text",attrs:{href:"javascript:;"},on:{click:e.goToSnapshot}},[e._v("Snap Shot")]),r("a",{staticClass:"text",attrs:{href:"/whitepaper.pdf",target:"_blank"}},[e._v("Whitepaper")]),r("a",{staticClass:"text",attrs:{href:"/guidelines.pdf",target:"_blank"}},[e._v("Guidelines")])])])])])},g=[],v=(n("c975"),{name:"Nav",data:function(){return{poolRouter:"Home",menuShow:!1}},mounted:function(){var e=this;this.$router.onReady((function(){e.$router.history.current.path.indexOf("home")<0?e.poolRouter="Home":e.poolRouter="Mining Pool"}))},methods:{handleMenu:function(){this.menuShow=!this.menuShow},goToPool:function(){this.poolRouter="Home",this.$router.push({path:"/pool"})},goHome:function(){this.poolRouter="Mining Pool",this.$router.push({path:"/home"})},goToSnapshot:function(){this.$router.push({path:"/snapshot"})},goEx:function(){window.location.href="https://ex.btswap.com/#/"}}}),w=v,b=(n("5c3b"),n("2877")),k=Object(b["a"])(w,m,g,!1,null,"25f4489c",null),y=k.exports,x={name:"App",components:{Nav:y}},T=x,O=(n("5c0b"),Object(b["a"])(T,h,A,!1,null,null,null)),D=O.exports,R=(n("d3b7"),n("8c4f"));p["default"].use(R["a"]);var E=[{path:"/",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-39da4604")]).then(n.bind(null,"cfbd7"))}},{path:"/pool",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-39da4604")]).then(n.bind(null,"cfbd7"))}},{path:"/home",component:function(){return n.e("chunk-06e8d4ce").then(n.bind(null,"5148"))}},{path:"/vote",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-18ead1d4")]).then(n.bind(null,"0822"))}},{path:"/snapshot",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-37da99e1")]).then(n.bind(null,"6e13"))}},{path:"*",component:function(){return Promise.all([n.e("chunk-741f5406"),n.e("chunk-39da4604")]).then(n.bind(null,"cfbd7"))}}],P=new R["a"]({mode:"hash",routes:E});n("b20f");p["default"].use(f.a),p["default"].use(l.a),p["default"].use(s.a),p["default"].use(u.a),p["default"].use(o.a),p["default"].config.productionTip=!1,new p["default"]({router:P,render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5c3b":function(e,t,n){"use strict";var r=n("d1c2"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b20f:function(e,t,n){},d1c2:function(e,t,n){},ec68:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA6BAMAAAAafvdhAAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBoCg+AAAADnRSTlMAQFJTXnC7ydbb6uvv/gbK+pIAAABTSURBVDjLY2Cd+w43uGHA4PcOH3jIUIdX/hnDObzyrxj2EZDPI2C+HAH3MfXi998oGAWUANZ5+NKXAo3zz2uGdaP5ZxSM2PRPqP54TXH6Z8af/gFqVJ5xVkK0yAAAAABJRU5ErkJggg=="}});