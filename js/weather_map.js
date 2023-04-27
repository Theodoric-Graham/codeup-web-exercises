(function () {
    "use strict"

    const fetchWeather = (lat, lon, units, key) => {
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: key,
            lat: lat,
            lon: lon,
            units: units
        }).done(function (data) {

            console.log('The entire response:', data);
            console.log('Diving in - here is current information: ', data.current);
            console.log('A step further - information for tomorrow: ', data.daily[1]);
            getForecast(data)

        });
    }

    const getForecast = (data) => {
        //used to dynamically set days
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        //creating markup string
        let markup = '';
        // loop over data.daily
        data.daily.forEach((day, i) => {
            // getting day from dt
            const dt = day.dt
            //converting dt into a date object
            const date = new Date(dt * 1000);
            const currentDate = date.getDate()
            const currentMonth = month[date.getMonth()]
            const currentDay = weekday[date.getDay()];

            //getting day temp
            const currentTemp = day.temp.day
            const highTemp = day.temp.max
            const lowTemp = day.temp.min
            const nightTemp = day.temp.night

            //getting weather icon
            console.log(day.weather[0])
            const weatherIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
            const weather = day.weather[0].main
            const weatherDesc = day.weather[0].description

            //creating dynamic html
            markup += `

        <div class="carousel-item ${i == 0 ? 'active' : ''}" >
        <div class="card text-center d-block w-100 ">
              <div class="card-header">
                ${currentDay} ${currentMonth} ${currentDate}
              </div>
              <div class="card-body">
              <img src="${weatherIcon}">
              <h2>${weather}</h2>
              <p>${weatherDesc}</p>
                <h5 class="card-title">${currentTemp}</h5>
                <p class="card-text">High: ${highTemp}</p>
                <p class="card-text">Low: ${lowTemp}</p>
                <p class="card-text">Night: ${nightTemp}</p>
              </div>
              <div class="card-footer text-muted">
              <p class="tabs">tabs</p>
                
              </div>
            </div>
        </div>
    
    
            
            `
        })
        $('#carousel').html(markup)

    }


    fetchWeather(29.423017, -98.48527, 'imperial', OPENWEATHER_KEY)


})()