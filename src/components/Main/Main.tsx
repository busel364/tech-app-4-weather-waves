import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import ItemPage from './ItemPage'
import MainPage from './MainPage'
import PreItemPage from './PreItemPage'
import Settings from './Settings'

const Main = () => {

    const mode = useAppSelector(state => state.mode);
    const city = useAppSelector(state => state.data.cordinates.name)
    const cityLink = city ? city.toLowerCase().split(' ').join('') : null;


    return (
        <div className='preMain'>
            <div className={`main ${mode?'mainDark':'mainLight'}`}>
            </div>
            <Routes>
                <Route
                    path='/*'
                    element={<MainPage />} />
                <Route
                    path={`${cityLink}`}
                    element={<PreItemPage />} />
                <Route
                    path='setting'
                    element={<Settings />} />
            </Routes>
        </div>
    )
}

export default Main