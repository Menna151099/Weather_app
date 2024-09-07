document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "820e7f1967bdd054e982a109d3d5630c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          document.getElementById("cityName").textContent = data.name;
          document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
          document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
          document.getElementById("humidityValue").textContent = `${data.main.humidity}%`;
        } else {
          alert("City not found.");
        }
      })
      .catch(error => {
        console.error("Error", error);
      });
  });
  