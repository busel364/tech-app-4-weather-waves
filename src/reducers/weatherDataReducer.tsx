import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cordinates, Sun, Weather, WeatherDiscription } from "../utils/types"
const defState = {
    cordinates: {
        name: null,
        lat: null,
        lng: null,
        country: null,
        state: null
    } as Cordinates,
    weather: null as null | Weather,
    weatherDiscription: {
        main: null,
        description: null
    } as WeatherDiscription,
    sun: {
        sunrise: null,
        sunset: null
    } as Sun
}

const weatherDataSlice = createSlice({
    initialState: defState,
    name: 'weatherData',
    reducers: {
        setCordinates(state, action: PayloadAction<Cordinates>) {
            state.cordinates = action.payload;
            localStorage.setItem('1', JSON.stringify(state));
        },
        setWeather(state, action: PayloadAction<Weather>) {
            state.weather = action.payload;
            localStorage.setItem('1', JSON.stringify(state));
        },
        setSun(state, action: PayloadAction<Sun>) {
            state.sun = action.payload;
            localStorage.setItem('1', JSON.stringify(state));
        },
        setWeatherDiscription(state, action: PayloadAction<WeatherDiscription>) {
            state.weatherDiscription = action.payload;
            localStorage.setItem('1', JSON.stringify(state));
        },
        setState(state, action: PayloadAction<any>) {
            state = action.payload;
        }
    }
})

export const { setCordinates, setWeather, setSun, setWeatherDiscription, setState } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;