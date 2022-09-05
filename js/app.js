/* Do not show API KEY on your JS file */ 

const API_KEY = `c4847f9e918b716e86ff824bbcfd2215`;
const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const displayTemperature = data =>{
 /*    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp; */
    setInnerTextById ('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);  
}
const setInnerTextById =(id, text) =>{
    const temperature =document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    city = searchField.value;
    searchField.value = '';
    // set city 
    document.getElementById('city').innerText = city;
    loadTemperature(city);
});

loadTemperature('dhaka'); 
