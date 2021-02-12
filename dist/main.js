(()=>{"use strict";var e,t,n,i={426:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,".hidden {\n  display: none !important; \n}\n\n.error {\n  text-align: center;\n  font-size: 35px;\n  background: rgb(255,255,255);\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(186,25,25,1) 73%);\n}\n\n.mainForm {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  margin-bottom: 25px;\n}\n\n.cityInputLabel {\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n.cityInput {\n  margin-top: 15px;\n  width: 33%;\n  align-self: center;\n  font-size: 20px;\n  text-align: center;\n}\n\n.button {\n  color: white;\n  background: rgb(70,107,63);\n  background: linear-gradient(20deg, rgba(70,107,63,1) 0%, rgba(25,64,186,1) 73%);\n  margin-top: 15px;\n  width: 33%;\n  align-self: center;\n  padding: 5px;\n  font-size: 25px;\n  border-radius: 10px;\n}\n\n.dataContainer {\n  display: flex;  \n  flex-direction: column;\n  text-align: center;\n}\n\n.dataConSpan{\n  font-size: 25px;\n  margin-bottom: 25px;\n}\n\n.secondaryData{\n  margin-top: 25px;\n}\n\n.secondarySpan {\n  font-size: 25px;\n  padding-bottom: 25px;\n}\n\n.humidity {\n  margin-top: 25px;\n}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(r[d]=!0)}for(var o=0;o<e.length;o++){var s=[].concat(e[o]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function d(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var m=d(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(a[m].references++,a[m].updater(p)):a.push({identifier:u,updater:f(p,t),references:1}),i.push(u)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var d=r(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function m(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(a,d[t]):e.appendChild(a)}}function p(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l=null,h=0;function f(e,t){var n,i,r;if(t.singleton){var a=h++;n=l||(l=s(t)),i=m.bind(null,n,a,!1),r=m.bind(null,n,a,!0)}else n=s(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=d(n[i]);a[r].references--}for(var s=o(e,t),c=0;c<n.length;c++){var u=d(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=s}}}}},r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={id:e,exports:{}};return i[e](t,t.exports,a),t.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=a(379),t=a.n(e),n=a(426),t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,(e=>{const t=document.getElementById("main"),n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("input"),a=document.createElement("label"),d=document.createElement("button"),o=document.createElement("div"),s=document.createElement("span"),c=document.createElement("div"),u=document.createElement("span"),m=document.createElement("div"),p=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div"),f=document.createElement("span"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div"),v=document.createElement("div");i.setAttribute("id","error"),i.setAttribute("class","error hidden"),i.innerHTML="I couldn't find that city, try again and check your spelling.",o.setAttribute("class","dataContainer"),o.setAttribute("id","dataContainer"),s.setAttribute("class","dataConSpan"),s.setAttribute("id","dataConSpan"),c.setAttribute("class","temperatureContainer"),c.setAttribute("id","temperatureContainer"),u.setAttribute("class","tempConSpan"),u.setAttribute("id","tempConSpan"),m.setAttribute("class","currTemp"),m.setAttribute("id","currTemp"),p.setAttribute("class","minTemp"),p.setAttribute("id","minTemp"),l.setAttribute("class","maxTemp"),l.setAttribute("id","maxTemp"),h.setAttribute("class","secondaryData"),h.setAttribute("id","secondaryData"),f.setAttribute("class","secondarySpan"),f.setAttribute("id","secondarySpan"),b.setAttribute("class","humidity"),b.setAttribute("id","humidity"),g.setAttribute("class","pressure"),g.setAttribute("id","pressure"),y.setAttribute("class","windSpeed"),y.setAttribute("id","windSpeed"),v.setAttribute("class","description"),v.setAttribute("id","description"),n.setAttribute("id","mainForm"),n.setAttribute("class","mainForm"),r.setAttribute("id","cityInput"),r.setAttribute("class","cityInput"),a.setAttribute("id","cityInputLabel"),a.setAttribute("class","cityInputLabel"),a.innerHTML="How's the climate here???",d.setAttribute("class","button"),d.addEventListener("click",(()=>{const e=document.getElementById("cityInput").value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=2e0d735d7064a37cb51d4a9a46c2042e`,{mode:"cors"}).then((e=>e.json())).then((e=>{const t={name:e.name,temperature:e.main.temp,minTemp:e.main.temp_min,maxTemp:e.main.temp_max,humidity:e.main.humidity,description:e.weather[0].description,pressure:e.main.pressure,windSpeed:e.wind.speed};return(e=>{const t=document.getElementById("dataContainer"),n=document.getElementById("error"),i=document.getElementById("dataConSpan"),r=document.getElementById("currTemp"),a=document.getElementById("minTemp"),d=document.getElementById("maxTemp"),o=document.getElementById("secondarySpan"),s=document.getElementById("humidity"),c=document.getElementById("pressure"),u=document.getElementById("windSpeed"),m=document.getElementById("description");t.classList.remove("hidden"),n.classList.add("hidden"),i.innerHTML=`Weather report about ${e.name}:`,r.innerHTML=`Currently the temperature is ${(e.temperature-273).toFixed(2)} degrees Celsius or ${(1.8*(e.temperature-273)+32).toFixed(2)} Farenheit`,a.innerHTML=`Minimum temperature of: ${(e.minTemp-273).toFixed(2)} / ${(1.8*(e.minTemp-273)+32).toFixed(2)}`,d.innerHTML=`Maximum temperature of: ${(e.maxTemp-273).toFixed(2)} / ${(1.8*(e.maxTemp-273)+32).toFixed(2)}`,o.innerHTML="Data about the wind and humidity in the zone:",s.innerHTML=`${e.humidity}% humidity`,c.innerHTML=`${e.pressure} hPa`,u.innerHTML=`${(3.6*e.windSpeed).toFixed(2)} Km/h / ${(1.944*e.windSpeed).toFixed(2)} Knots`,m.innerHTML=e.description})(t),t})).catch((()=>(document.getElementById("error").classList.remove("hidden"),document.getElementById("dataContainer").classList.add("hidden"),"error")))})),d.innerHTML="Query",c.appendChild(u),c.appendChild(m),c.appendChild(l),c.appendChild(p),h.appendChild(f),h.appendChild(b),h.appendChild(g),h.appendChild(y),o.appendChild(s),o.appendChild(c),o.appendChild(h),o.appendChild(v),n.appendChild(a),n.appendChild(r),n.appendChild(d),t.appendChild(n),t.appendChild(i),t.appendChild(o)})()})();