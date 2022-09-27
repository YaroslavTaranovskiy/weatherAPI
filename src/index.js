// Отримуэмо доступ до блоку погоди
const weatherBlock = document.querySelector('#weather');

// Основна фун-ія підвантаження данних
async function loasWeather(e) {
    // додатковий блок при завантаженні інформації
    // weatherBlock.innerHTML = `
    //     < div class="weather__loading" >
    //         <img src="img/loding.gif" alt="Loading..." />
    //     </div>`;

    // беремо дані за посиланням
    const server = 'https://api.openweathermap.org/data/3.0/onecall?units=metric&q=Kyiv&appid=24112aefc80d945fc3814247cbd1d9f5';
    // будуємо фетч запит
    const responce = await fetch(server, {
        // підвантажуємо данні з посилання за допомогою методу ГЕТ
        method: 'GET',
    });

    // отримуємо в константі відповідь від нашаго серверу у форматі жесон(обєкт)
    const responceResult = await Response.json();

    // перевірка на наявність відповіді
    if (responce.ok) {
        // якщо відповідь є запускаємо фун-ію з результатом
        getWeather(responceResult);
    } else {
        // якщо помилка отримуємо повідомлення з помилкою
        weatherBlock.innerHTML = responceResult.message;
    }
}

// створюємо фун-ію getWeather
function getWeather(data) {
    // перевіряємо, які дані приводяться
    console.log(data);

    // дістаємо з джесона необхідну нам інформацію
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    // HTML шаблон
    const template = `
        <div class="weather__header">
          <div class="weather__main">
            <div class="weather__city">${location}</div>
            <div class="weather__status">${weatherStatus}</div>
          </div>
          <div class="weather__icon">
            <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
          </div>

        </div>
        <div class="weather__temp">${temp}</div>
        <div class="weather__feels-like">Feels-like: ${feelsLike}</div>`;
    
    // виводимо шаблон у віджит
    weatherBlock.innerHTML = template;
}

// перевірка
if (weatherBlock) {
    loasWeather();
}

