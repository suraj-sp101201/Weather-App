let weather = {
    "apiKey": "" // put your api key here,
    fetchTheWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayTheWeather(data));
    },
    displayTheWeather: function(data) {
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        const { feels_like } = data.main;
        //console.log(name)
        document.querySelector(".city").innerText = name + "'s Weather";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels").innerText = "Feels Like: " + feels_like + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";
    },
    search: function() {
        this.fetchTheWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function (){
    weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event){
    if(event.key == "Enter")
    {
    weather.search();
    }
});