const cityname = document.querySelector("#city")
const btn = document.querySelector("#button")
const result = document.querySelector(".result")



btn.addEventListener("click", async ()=>{
    console.log("btn clicked")
    console.log(cityname.value)
    fetch(`http://api.weatherapi.com/v1/current.json?key=1a2d648d4d92465cadb123919241911&q=${cityname.value}`)
//    const data = await responce.json()
//     console.log(data)
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
      result.innerHTML = `
         <h2>${res.location.name}</h2>
          <p>${res.location.region}</p>
          <p>${res.current.condition.text}</p>
          <img src="${res.current.condition.icon}" alt="">
          <h2>${res.current.feelslike_c}</h2>
          <div>
              <div class="wind">
                <p>wind</p>
                <p>${res.current.wind_mph}mph</p>
            </div>
              <div class="pressure">
                <p>Presure</p>
                <p>${res.current.pressure_mb}mb</p>
            </div>
          </div>
           <p>${res.location.localtime}</p>
      `
    })

})