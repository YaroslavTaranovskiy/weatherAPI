const e=document.querySelector("#weather");e&&async function(a){const n=await fetch("https://api.openweathermap.org/data/3.0/onecall?units=metric&q=Kyiv&appid=24112aefc80d945fc3814247cbd1d9f5",{method:"GET"}),t=await Response.json();n.ok?function(a){console.log(a);const n=a.name,t=Math.round(a.main.temp),i=Math.round(a.main.feels_like),s=a.weather[0].main,c=a.weather[0].icon,d=`\n        <div class="weather__header">\n          <div class="weather__main">\n            <div class="weather__city">${n}</div>\n            <div class="weather__status">${s}</div>\n          </div>\n          <div class="weather__icon">\n            <img src="http://openweathermap.org/img/w/${c}.png" alt="${s}">\n          </div>\n\n        </div>\n        <div class="weather__temp">${t}</div>\n        <div class="weather__feels-like">Feels-like: ${i}</div>`;e.innerHTML=d}(t):e.innerHTML=t.message}();
//# sourceMappingURL=index.fffa2dc5.js.map