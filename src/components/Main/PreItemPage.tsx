import React from 'react'
import { useAppSelector } from '../../app/hooks';
import ItemPage from './ItemPage';
import Loader from './Loader';

const PreItemPage = () => {
    const data = useAppSelector(state => state.data);
    return (
        <div>
            {data.weather ? <ItemPage weather={data.weather}/> : <Loader />}
        </div>
    )
}

export default PreItemPage