import getToken from "./module/unsplash.js";
import geoApi from "./module/geolocation.js";
import weatherApi from "./module/openweather.js";

import {api} from "./module/unsplash.js";
// (async () => {
//   const response = await api();
//   console.dir(response);
// })();

(async () => {

  const results = await Promise.allSettled([geoApi(), getToken()]);
  const [{value:coords}, {value:token}] = results;
  const {
    main:{temp},
    weather:[{main: info}]
  } = await weatherApi(coords);

  const weather = document.querySelector('#weather');
  const body = document.querySelector('body');
  const locationName = document.querySelector('#locationName');
  weather.textContent = `${info}@${temp}℃`
  body.style.backgroundImage = `url(${token.bg})`
  locationName.textContent = token.location;
})();