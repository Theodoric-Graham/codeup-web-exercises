(function () {
    "use strict"

    mapboxgl.accessToken = MAPBOX_KEY
    // getting data from openweather
    const fetchWeather = (lat, lon, units, key) => {
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: key,
            lat: lat,
            lon: lon,
            units: units
        }).done(function (data) {
            // console.log('The entire response:', data);
            // console.log('Diving in - here is current information: ', data.current);
            // console.log('A step further - information for tomorrow: ', data.daily[1]);
            getForecastCarousel(data)
            getForecastCards(data)
        });
    }

    // Creates the markup for the carousel
    const getForecastCarousel = (data) => {
        //used to dynamically set days
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        //creating markup string
        let markup = '';
        // loop over data.daily
        data.daily.forEach((day, i) => {
            if (i < 5) {
                // getting day from dt
                const dt = day.dt
                // console.log(dt)
                //converting dt into a date object
                const date = new Date(dt * 1000);
                const currentDate = date.getDate()
                const currentMonth = month[date.getMonth()]
                const currentDay = weekday[date.getDay()];

                //getting day temp
                const currentTemp = day.temp.day
                const highTemp = day.temp.max
                const lowTemp = day.temp.min

                //getting weather icon
                const weatherIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                const weather = day.weather[0].main

                //creating dynamic html
                markup += `
        <div class=" carousel-item ${i == 0 ? 'active' : ''}" >
            <div class="card text-center d-block w-100 ">
              <div class="card-header">
                ${currentDay}, ${currentMonth} ${currentDate}
              </div>
              <div class="card-body">
                <img src="${weatherIcon}">
                <h2 class="card-weather">${weather}</h2>
                <h5 class="card-title">${currentTemp} &#8457;</h5>
                <p class="card-text">High: ${highTemp} &#8457;</p>
                <p class="card-text">Low: ${lowTemp} &#8457;</p>
                <p class="card-text">Humidity: ${day.humidity}</p>
                <p class="card-text">Wind: ${day.wind_speed} mph</p>
              </div>
              <div class="card-footer text-muted">
                <p class="tabs">tabs</p>
              </div>
            </div>
        </div>      
            `
            }
        })
        $('#carousel').html(markup)
    }

    // creates the markup for cards outside of carousel
    const getForecastCards = (data) => {
        console.log(data)
        //used to dynamically set days
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        //creating markup string
        let cardMarkup = '';
        // loop over data.daily
        data.daily.forEach((day, i) => {
            //limiting to 5 for 5 day forecast only, we are given 8, can make changes to easily add more or less days
            if (i < 5) {
                // console.log(day)
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
                const weatherIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
                const weather = day.weather[0].main
                const weatherDesc = day.weather[0].description

                //creating dynamic html
                cardMarkup += `
            <div class="card text-center d-block">
                <div class="card-header ">
                    ${currentDay}, ${currentMonth} ${currentDate}
                </div>
                <div class="card-body">
                    <img src="${weatherIcon}">
                    <h2 class="card-weather">${weather}</h2>
                    <h5 class="card-title">${currentTemp} &#8457;</h5>
                    <p class="card-text">High: ${highTemp} &#8457;</p>
                    <p class="card-text">Low: ${lowTemp} &#8457;</p>
                    <p class="card-text">Humidity: ${day.humidity}</p>
                    <p class="card-text">Wind: ${day.wind_speed} mph</p>
                </div>
              <div class="card-footer text-muted">
                <p class="tabs">tabs</p>
              </div>
            </div>
            `
            }

        })
        $('.cards-normal').html(cardMarkup)
    }

    //creating the map
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-118.2428, 34.0537], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });

    //adds zoom buttons on map
    map.addControl(new mapboxgl.NavigationControl());


    //stored globally to access them elsewhere
    let coords = []
    let marker;

    // function to take an address(our input), and create a new marker, then call reverse geo with our coords, and fetch weather
    const geocodeAddressMarker = (address, token) => {
        geocode(address, token).then((res) => {
            if (marker) {
                marker.remove()
            }
            console.log(res)
            marker = new mapboxgl.Marker()
                .setLngLat(res)
                .addTo(map);
            map.setCenter(res);
            map.setZoom(10);
            coords = [res[0], res[1]]
            console.log(coords)
            reverseGeoAddress(res[1], res[0], MAPBOX_KEY)
            fetchWeather(res[1], res[0], 'imperial', OPENWEATHER_KEY)
        })
    }

    //click event for input submit to capture the value, then pass it in to geocodeAddressMarker
    $('#input-btn').click(e => {
        e.preventDefault()
        //capturing input
        const inputAddress = $('#address-input').val()
        console.log(inputAddress)
        //run geocode function with input
        geocodeAddressMarker(inputAddress, MAPBOX_KEY)
        // clear input field
        $('#address-input').val('')
    })

    //Might be a better way to get city and state
    // takes lat and lng and gives us a physical address to extract city and state and create markup
    const reverseGeoAddress = (lat, lng, token) => {
        reverseGeocode({lng: lng, lat: lat}, token).then(function (results) {
            // logs the address
            console.log(results);
            //splits the string to get just the city and state
            const city = results.split(',')[1]
            const state = results.split(',')[2].replace(/[0-9]/g, '');
            // console.log(city, state, lat, lng);
            //create markup for location
            const locationHTML = `
            <h1>${city}, ${state}</h1>
            `
            //push markup to selected container
            $('.city-state').html(locationHTML)
        });
    }

    // Listening for click on map,
    map.on('click', (e) => {
        // pulling out the lat and lng from event click
        const lat = e.lngLat.lat
        const lng = e.lngLat.lng
        //updating global variable
        coords = [lng, lat]
        //if marker exists, then remove it
        if (marker) {
            marker.remove()
        }
        // create new marker based on coords
        marker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        // fetch the weather based on coords
        fetchWeather(lat, lng, 'imperial', OPENWEATHER_KEY)
        // reverse geo to get address for city and state
        reverseGeoAddress(lat, lng, MAPBOX_KEY)

    })

    // geolocation success function, get coords then fetch weather and render cards, and reverse geo for the address
    const successCallback = (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetchWeather(lat, lng, 'imperial', OPENWEATHER_KEY)
        reverseGeoAddress(lat, lng, MAPBOX_KEY)
        marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map);
        map.setCenter([lng, lat]);
        map.setZoom(10);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    //Geolocation API, getCurrentPosition takes a success and failure callback
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    // initial weather call
    fetchWeather(34.0537, -118.2428, 'imperial', OPENWEATHER_KEY)
    // intial address call based on coords
    reverseGeoAddress(34.0537, -118.2428, MAPBOX_KEY)


})()