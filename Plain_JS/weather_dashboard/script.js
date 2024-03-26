document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    weatherResult;
    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                weatherResult = document.getElementById('weatherResult');
                weatherResult.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].main}</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    `;
                throw new Error('Weather data not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}
function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    
    // Function to generate a random color
    function getRandomColor() {
        // Hue: any value between 0 and 360
        const hue = Math.floor(Math.random() * 360);
        // Saturation: 100% for full saturation
        const saturation = "100%";
        // Lightness: adjust this value if you want darker or lighter colors, 30% to 50% is a good range for vivid colors
        const lightness = "40%";
        
        return `hsl(${hue}, ${saturation}, ${lightness})`;
    }
    
    // Create elements
    const h2 = document.createElement('h2');
    const tempP = document.createElement('p');
    const weatherP = document.createElement('p');
    const windP = document.createElement('p');
    
    // Set contents
    h2.innerHTML = `Weather in ${data.name}`;
    tempP.innerHTML = `Temperature: ${data.main.temp}°C`;
    weatherP.innerHTML = `Weather: ${data.weather[0].main}`;
    windP.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    
    // Apply random colors
    h2.style.color = getRandomColor();
    tempP.style.color = getRandomColor();
    weatherP.style.color = getRandomColor();
    windP.style.color = getRandomColor();
    
    // Clear previous results and display new results
    weatherResult.innerHTML = '';
    weatherResult.appendChild(h2);
    weatherResult.appendChild(tempP);
    weatherResult.appendChild(weatherP);
    weatherResult.appendChild(windP);
}
