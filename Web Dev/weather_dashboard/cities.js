const famousCapitals = [
    "Tokyo", // Japan
    "Paris", // France
    "London", // United Kingdom
    "Washington, D.C.", // United States
    "Berlin", // Germany
    "Moscow", // Russia
    "Beijing", // China
    "New Delhi", // India
    "Brasília", // Brazil
    "Canberra", // Australia
    "Ottawa", // Canada
    "Cairo", // Egypt
    "Mexico City", // Mexico
    "Rome", // Italy
    "Madrid", // Spain
    "Buenos Aires", // Argentina
    "Seoul", // South Korea
    "Bangkok", // Thailand
    "Nairobi", // Kenya
    "Riyadh" // Saudi Arabia
];

function populateCapitals() {
    const capitalsList = document.getElementById('capitalsList');
    famousCapitals.forEach((capital) => {
        const option = document.createElement('option');
        option.value = capital;
        capitalsList.appendChild(option);
    });
}

// Call the function to populate the datalist when the script loads
populateCapitals();