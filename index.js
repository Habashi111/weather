let inpWeather = document.getElementById("find-weather");

let collectData = [];

async function weather(city) {
  try {
    var res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=fec90de6ba8a4bd7a2f120450240812&q=${city}&days=3`
    );
    var data = await res.json();
    collectData = [data];
    console.log(collectData);
  } catch (msg) {
    console.log(`${msg}`);
  }
}

function getData() {
  let cartona = "";

  if (collectData.length > 0) {
    const data = collectData[0];
    cartona = `
    
 <div class="left col-sm-12">
            <header class="d-flex justify-content-between bg-secondary">
              <h4>${new Date().toLocaleDateString("ar-EG", {
                weekday: "long",
              })}</h4>
              <h4>${new Date().toLocaleDateString("ar-EG", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}</h4>

            </header>
            <div class="body bg-info text-center">
              <h4>${data.location.name}</h4>
              <h1 class="text-white degree">${data.current.temp_c}</h1>
              <img src="${data.current.condition.icon}" alt="" />
              <h5>${data.current.condition.text}</h5>


              <div class="const d-flex justify-content-between">
                <div>
                  <img src="css/img/img4.png" alt="" />
                  <h5>${data.current.humidity}</h5>
                </div>
                <div class="">
                  <img src="css/img/img5.png" alt="" />
                  <h5>${data.current.wind_kph}</h5>
                </div>
                <div class="">
                  <img src="css/img/img6.png" alt="" />
                  <h5>${data.current.wind_dir}</h5>
                </div>
              </div>
            </div>
          </div>

            <div class="col-sm-12">
            <header class="d-flex justify-content-center bg-secondary">
              <h4>${new Date(
                new Date().getTime() + 86400000
              ).toLocaleDateString("ar-Eg", { weekday: "long" })}</h4>
            </header>
            <div class="body bg-info text-center">
              <img src="${
                data.forecast.forecastday[1].day.condition.icon
              }" alt="" />
              <h1 class="text-white">${
                data.forecast.forecastday[1].day.maxtemp_c
              }</h1>
              <h4>${data.forecast.forecastday[1].day.mintemp_c}</h4>
              <h5>${data.forecast.forecastday[1].day.condition.text}</h5>
            </div>
          </div>



          <div class="col-sm-12">
            <header class="d-flex justify-content-center bg-secondary">
              <h4>${new Date(
                new Date().getTime() + 2 * 86400000
              ).toLocaleDateString("ar-Eg", { weekday: "long" })}</h4>
            </header>
            <div class="body bg-info text-center">
              <img src="${
                data.forecast.forecastday[2].day.condition.icon
              }" alt="" />
              <h1 class="text-white">${
                data.forecast.forecastday[2].day.maxtemp_c
              }</h1>
              <h4>${data.forecast.forecastday[2].day.mintemp_c}</h4>
              <h5>${data.forecast.forecastday[2].day.condition.text}</h5>
            </div>
          </div>

    
  `;
  }

  document.getElementById("sec2").innerHTML = cartona;
}
async function call() {
  let city = inpWeather.value.trim();
  await weather(city);
  getData();
}
