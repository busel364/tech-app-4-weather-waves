import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks';
import { fetchCordinates } from '../../asyncActions/fetchWeather';
import { setState } from '../../reducers/weatherDataReducer';

const MainPage = () => {

    const dispatch = useAppDispatch();
    const [city, setCity] = useState('');
    const [random, setRandom] = useState(Math.random());


    return (
        <div className='mainPage container col-12'>
            <div className='mt-5 pt-5 px-4 text center row'>
                <div className='col-lg-6 col-12 m-0 p-0'>
                    <img
                        className='mainPageImg col-12'
                        src={`${random < 0.34 ? 'https://media.timeout.com/images/105493697/image.jpg' :
                            random < 0.66 ? 'https://dl16txa2az7pk.cloudfront.net/cms/fileadmin/_processed_/3/3/csm_hati-hati-article-header_b5b0bc1ae3.jpg' :
                                'https://img.theculturetrip.com/wp-content/uploads/2017/06/shonan-japan-philip-cotsford.jpg'}`}
                        alt='mainImg' />
                </div>
                <div className='col-sm-12 col-lg-6 pb-5 mainPageRightSide text-center'>
                    <div className='divMainPageRightSide'>
                        <h1 className='mb-5 pb-4' style={{ color: 'whitesmoke', fontWeight: '100' }}>Check weather and waves</h1>
                        <label >
                            <input className='col-6 col-sm-12' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} type={'text'} />
                        </label>
                        <div className='pt-5'>
                            <Link className='linkMainPage' to={`${city.toLowerCase().split(' ').join('')}`}
                                // onClick={() => dispatch(setState(localStorage.getItem('1')))}
                            onClick={() => { if (city) { dispatch(fetchCordinates(city)) } }}
                            >Get Info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage