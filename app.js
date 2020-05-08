window.addEventListener("load",()=>{

    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone');
    let iconElement=document.querySelector('.weather-icon');  
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
             //const proxy='https://cors-anywhere.herokuapp.com/';
            const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cc8b878dc9b9034b27707ca766a25e6c`;

            fetch(api)
                .then(response => {
                    return response.json();
                }) 
                .then(data =>{
                    console.log(data);

                    const {temp}=data.main;
                    const {description}=data.weather[0];
                    temperatureDegree.textContent=Math.floor(temp-273);
                    temperatureDescription.textContent=description;
                    locationTimezone.textContent=data.name+ ' ' +data.sys.country;
                    iconElement.innerHTML=`<img src="icons/${data.weather[0].icon}.png">`;


                });

                
            
        });
    }

    function setIcons(icon,iconId){

    }


});