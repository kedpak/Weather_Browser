const API_KEY='41c7cd153fb53760302304aae9e549fd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
