import { AppDispatch } from "../app/store"
import { setCordinates, setSun, setWeather, setWeatherDiscription } from "../reducers/weatherDataReducer"
import { api_key_openweather, api_key_stormglass } from "../utils/consts"
// swellDirection,swellHeight,swellPeriod
// const params = 'time,airTemperature,pressure,cloudCover,gust,humidity,seaLevel,visibility,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection,windSpeed'
const params = 'airTemperature,waterTemperature,waveDirection,waveHeight,windDirection,windSpeed';

export const fetchCordinates = (city: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key_openweather}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(setCordinates({ country: data[0].country as string, lat: data[0].lat as number, lng: data[0].lon as number, name: data[0].name as string, state: data[0].state as string }))
                dispatch(fetchWeather(data[0].lat as number, data[0].lon as number));
                dispatch(fetchWeatherDiscription(city));
            })
            .catch(e => console.log(e.message))
    }

}

const fetchWeatherDiscription = (city: string) => {
    return (dispatch: AppDispatch) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key_openweather}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);
                dispatch(setWeatherDiscription({ description: data.weather[0].description, main: data.weather[0].main }));
                dispatch(setSun({ sunrise: data.sys.sunrise, sunset: data.sys.sunset }));
            })
            .catch(e => console.log(e.message))
    }
}

export const fetchWeather = (lat: number, lng: number) => {
    return (dispatch: AppDispatch) => {
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': api_key_stormglass
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(setWeather(data));
            })
            .catch(e => console.log(e.message))
    }
}