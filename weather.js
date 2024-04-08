const apikey="881946e59782c25bdb85210ad617ed93";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn=document.querySelector(".searchbtn");
const inputvalue=document.querySelector(".search input");
const speeds=document.querySelector(".speed");
async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".speed").innerHTML=data.wind.speed+" Km/h";
    document.querySelector(".weather").style.display="block";
document.querySelector(".nn").style.display="inline";}
searchbtn.addEventListener("click",()=>{
    checkweather(inputvalue.value);
})
