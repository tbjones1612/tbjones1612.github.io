window.addEventListener('load', () => {
    let lat;
    let lon;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const apiKey = `6833a99b4b39517832c94095b58b1686`
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

            fetch(apiUrl)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { name: city,
                        main: { temp },
                        weather: [{ description }] } = data;

                    temperatureDegree.textContent = `${(((temp - 273.15) * 1.8) + 32).toFixed(1)}`;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = city;
                });
        });

    } else {
        h1.textContent = "Not work. Where location."
    }
});