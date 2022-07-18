// let request = new XMLHttpRequest
let current = []
let images = []
let inpSearch = document.getElementById("inp-search")
// request.open("GET", "http://api.weatherapi.com/v1/forecast.json?key=a04493c4f4114db4a51195955221206&days=7&q=Cairo")
// request.send()
// request.addEventListener("readystatechange", function () {
//   if (request.readyState == 4 && request.status == 200) {
//     current = JSON.parse(request.response);
//     display(current)
//    /*  console.log(current) */
//   }
// })
async function getData() {
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a04493c4f4114db4a51195955221206&days=7&q=Cairo`)
  let data = (await response.json());
  console.log(data);
  display(data)
}
(async function () {
  await getData()
})()

function display(x) {
  let temp = ''
  let days = x.forecast.forecastday
  let name = x.location
  let temprature = x.current
  let condition = x.current.condition
  const DayDate1 = new Date(`${days[0].date}`);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let DayMonth = month[d.getMonth()];
  console.log(DayDate1.getDate())
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const dday1 = new Date(`${days[0].date}`);
  let day1 = dday1.getDay()
  console.log(name.localtime);
  const dday2 = new Date(`${days[1].date}`);
  let day2 = dday2.getDay()
  const dday3 = new Date(`${days[2].date}`);
  let day3 = dday3.getDay()
  console.log(days[0].astro.sunrise);
  temp = `
  <div class="col-md-4 aside">
            
            <div class="image">
              <img src="${condition.icon}" class="img-fluid" alt="" />
            </div>
            <h1>${temprature.temp_c}°C</h1>
            <div class="data">
              <div class="header d-flex">
                <span>${name.name}</span>
                <span class="ms-auto"
                  >${weekday[day1]},${DayMonth} ${DayDate1.getDate()}</span
                >
              </div>
              <ul>
                <li><h5>${condition.text}</h5></li>
                <li><h5>${name.localtime}</h5></li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            

            <div class="nextDays">
              <div class="row">
                <div class="col-md-6">
                  <div class="box text-center py-4">
                    <p class="bold">${weekday[day2]}</p>
                    <img
                      src="${days[1].day.condition.icon}"
                      class="img-fluid py-4"
                      alt=""
                    />
                    <p>${days[1].day.maxtemp_c}°C</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="box text-center py-4">
                    <p class="bold">${weekday[day3]}</p>
                    <img
                      src="${days[2].day.condition.icon}"
                      class="img-fluid py-4"
                      alt=""
                    />
                    <p>${days[2].day.maxtemp_c}°C</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="highlights">
              <div class="row">
                <h2>Today's Highlights</h2>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">UV</p>
                    <div class="image text-center py-4">
                      <img src="./img/uv.png" class="img-fluid w-25" alt="" />
                    </div>

                    <p class="text-center m-0">${temprature.uv}</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">Wind Status</p>
                    <div class="image text-center py-4">
                      <img
                        src="./img/icon-wind.png"
                        class="img-fluid w-25"
                        alt=""
                      />
                    </div>

                    <p class="text-center m-0">${temprature.wind_kph} km/h</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">Sunrise & Sunset</p>

                    <p class="text-center m-0">
                      <img src="./img/sun.webp" class="img-fluid w-25" alt="" />
                      ${days[0].astro.sunrise}
                    </p>
                    <p class="text-center m-0">
                      <img
                        src="./img/moon.webp"
                        class="img-fluid w-25"
                        alt=""
                      />
                      ${days[0].astro.sunset}
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">Humidity</p>
                    <div class="image text-center py-4">
                      <img
                        src="./img/icon-umberella.png"
                        class="img-fluid w-25"
                        alt=""
                      />
                    </div>

                    <p class="text-center m-0">${temprature.humidity}</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">Visibility</p>
                    <div class="image text-center py-4">
                      <img
                        src="./img/low-visibility.png"
                        class="img-fluid w-25"
                        alt=""
                      />
                    </div>

                    <p class="text-center m-0">${temprature.vis_km}</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box p-2">
                    <p class="m-0 bold">Wind Direction</p>
                    <div class="image text-center py-4">
                      <img
                        src="./img/icon-compass.png"
                        class="img-fluid w-25"
                        alt=""
                      />
                    </div>

                    <p class="text-center m-0">${temprature.wind_dir}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 `

  document.getElementById("box").innerHTML = temp

}
function search() {
  let searchVlaue = inpSearch.value
  console.log(inpSearch);
async function getData() {
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a04493c4f4114db4a51195955221206&days=7&q=${searchVlaue}`)
  let data = (await response.json());
  console.log(data);
  display(data)
}
(async function () {
  await getData()
})()
  //request.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=a04493c4f4114db4a51195955221206&days=7&q=${searchVlaue}`)
  //request.send()
}



