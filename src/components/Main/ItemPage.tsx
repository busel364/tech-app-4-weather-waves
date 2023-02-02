import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { putDaysIntoArr } from '../../utils/consts';
import { Cordinates, Hours, Weather } from '../../utils/types';
import ItemTable from './ItemTable';
import Loader from './Loader';
import TableLine from './TableLine';

interface Props {
    weather: Weather;
}

const ItemPage = ({ weather }: Props) => {

    const { sun, weatherDiscription, cordinates } = useAppSelector(state => state.data);

    const [arrValue, setArrValue] = useState<Hours[][]>();
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        setArrValue(putDaysIntoArr(weather.hours));
    }, [weather])

    const getTepmerature = () => {
        if (arrValue) {
            const i = arrValue![0].findIndex(item => {
                let h = new Date(Date.now()).getHours().toString();
                h = h.length > 1 ? h : `0${h}`;
                return h === item.time.split('T')[1].split(':')[0].toString()
            });
            return {
                water: (i >= 0 && i < arrValue![0].length ? (arrValue![0][i].waterTemperature.sg! + arrValue![0][i + 1].waterTemperature.sg!) / 2 : arrValue![0][i].waterTemperature.sg!),
                air: (i >= 0 && i < arrValue![0].length ? (arrValue![0][i].airTemperature!.sg! + arrValue![0][i + 1].airTemperature.sg!) / 2 : arrValue![0][i].airTemperature.sg!),
            };
        }
        return {
            water: 0,
            air: 0
        };
    }

    const getSunTime = () => {
        const sunriseHour = new Date(sun.sunrise! * 1000).getHours().toString().length > 1 ? new Date(sun.sunrise! * 1000).getHours() : `0${new Date(sun.sunrise! * 1000).getHours()}`;
        const sunriseMinutes = new Date(sun.sunrise! * 1000).getMinutes().toString().length > 1 ? new Date(sun.sunrise! * 1000).getMinutes() : `0${new Date(sun.sunrise! * 1000).getMinutes()}`
        const sunsetHour = new Date(sun.sunset! * 1000).getHours().toString().length > 1 ? new Date(sun.sunset! * 1000).getHours() : `0${new Date(sun.sunset! * 1000).getHours()}`;
        const sunsetMinutes = new Date(sun.sunset! * 1000).getMinutes().toString().length > 1 ? new Date(sun.sunset! * 1000).getMinutes() : `0${new Date(sun.sunset! * 1000).getMinutes()}`
        return {
            sunrise: `${sunriseHour}:${sunriseMinutes}`,
            sunset: `${sunsetHour}:${sunsetMinutes}`
        }
    }

    // airTemperature: {dwd: 13.21 noaa:11.59 sg:13.21},
    // time:"2023-01-11T00:00:00+00:00",
    // waterTemperature:{meto: 19.84 noaa:8.42 sg:19.84}
    // waweDirection:{ icon: 310.82 noaa:342.55 sg:310.82},
    // waveHeight{dwd: 0.27 icon:0.27 noaa:0.27 sg:0.27},
    // windDirection{icon: 121.87 noaa:123.48 sg:121.87},
    // windSpeed{icon: 3.33 noaa:2.25 sg:3.33}


    return (arrValue ?
        <div className='container itemPage pb-3' style={{ color: 'whitesmoke' }}>
            <div className='divItemPage'>
                <h1 className='text-center' style={{ fontWeight: '100', fontSize:'3.5rem' }}>{cordinates.name}</h1>
                <h2 style={{ fontWeight: '500' }}>Today is: <i style={{ fontWeight: '100' }}>{new Date(arrValue![0][0].time.split('T')[0]).toDateString()}</i></h2>
                <h2 style={{ fontWeight: '100' }}>{weatherDiscription.main} - {weatherDiscription.description}</h2>
                <div className=''>
                    <h3 style={{ fontWeight: '200' }}>Air: <i style={{ fontWeight: '100' }}>{Math.trunc(getTepmerature().air)}°C</i></h3>
                    <h3 style={{ fontWeight: '200' }}>Water: <i style={{ fontWeight: '100' }}>{Math.trunc(getTepmerature().water)}°C</i></h3>
                </div>
                <h2 style={{ fontWeight: '500' }}>Sunrise: <i style={{ fontWeight: '100' }}>{getSunTime().sunrise}</i> - Sunset: <i style={{ fontWeight: '100' }}>{getSunTime().sunset}</i></h2>
            </div>
            <TableLine arrValue={arrValue} />
            <ItemTable item={arrValue![0]} />
            {isClicked ? <div>
                {arrValue!.filter((item, index) => index !== 0).map(item => <ItemTable item={item} key={item[0].time} />)}
            </div> : null}
            <button className='btnItemPage mb-4' onClick={() => setIsClicked(prev => !prev)}>{isClicked ? 'Less' : 'More'} Info</button>
        </div> : <Loader />
    )
}

export default ItemPage