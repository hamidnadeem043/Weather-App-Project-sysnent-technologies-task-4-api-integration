async function getWeather(){

    let city = document.getElementById("city").value;
    let loading = document.getElementById("loading");

    loading.innerText = "Loading...";

    try{

        let response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        let data = await response.json();

        document.getElementById("cityName").innerText = city;
        document.getElementById("temp").innerText =
            data.current_condition[0].temp_C + "°C";

        document.getElementById("condition").innerText =
            data.current_condition[0].weatherDesc[0].value;

        loading.innerText = "";

        let weather =
        data.current_condition[0].weatherDesc[0].value.toLowerCase();

        let icon = "☀️";

        if(weather.includes("cloud")) icon = "☁️";
        if(weather.includes("rain")) icon = "🌧️";
        if(weather.includes("storm")) icon = "⛈️";
        if(weather.includes("snow")) icon = "❄️";

        document.getElementById("icon").innerText = icon;

    }
    catch(error){
        loading.innerText = "City not found";
        console.log(error);
    }
}