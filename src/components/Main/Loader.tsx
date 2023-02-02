import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
    return (
        <div className='loader text-center'>
            <LoadingOutlined style={{fontSize:'15vw', color:'whitesmoke', marginBottom:'40vh'}}/>
        </div>
    )
}

export default Loader