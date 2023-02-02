export interface Cordinates {
    name: string | null,
    lat: number | null,
    lng: number | null,
    country: string | null,
    state: string | null
}

export interface Weather {
    hours: Hours[],
    meta: any
}
export interface Hours {
    airTemperature: { dwd: null | number, noaa: null | number, sg: null | number },
    time: string,
    waterTemperature: { meto: null | number, noaa: null | number, sg: null | number }
    waveDirection: { icon: null | number, noaa: null | number, sg: null | number },
    waveHeight: { dwd: null | number, icon: null | number, noaa: null | number, sg: null | number },
    windDirection: { icon: null | number, noaa: null | number, sg: null | number },
    windSpeed: { icon: null | number, noaa: null | number, sg: null | number },
}

export interface WeatherDiscription {
    main: null | string,
    description: null | string
}

export interface Sun {
    sunrise: null | number,
    sunset: null | number
}