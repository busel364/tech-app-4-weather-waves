import React from 'react'
import { Hours } from '../../utils/types'
import { ArrowUpOutlined } from '@ant-design/icons'

interface Props {
    item: Hours[]
}

const ItemTable = ({ item }: Props) => {
    return (
        <div className='mb-5 divTable'>
            <h2>{new Date(item[0].time).toLocaleDateString() === new Date(Date.now()).toLocaleDateString() ? 'Today: ' : new Date(item[0].time).toLocaleDateString()}</h2>
            <div className='container'>
                <table className='text-center table' style={{ fontSize: '1.2rem', color: 'whitesmoke' }}>
                    <thead>
                        <tr>
                            <td>Time</td>
                            <td>Air °C</td>
                            <td>Water °C</td>
                            <td>Wave Height</td>
                            <td>Wave Direction</td>
                            <td>Wind</td>
                        </tr>
                    </thead>
                    <tbody>
                        {item.filter(item => new Date(item.time).getHours() % 3 === 0).map(item => <tr key={item.time}>
                            {/* <td>{item.time.split('T')[1].split('+')[0]}</td> */}
                            <td>{item.time.split('T')[1].split('+')[0].split(':')[0]}:00</td>
                            <td>{Math.trunc(item.airTemperature.sg!)}°</td>
                            <td>{Math.trunc(item.waterTemperature.sg!)}°</td>
                            <td style={{ backgroundColor: `${item.waveHeight.sg! < 0.8 ? 'rgb(28, 28, 254)' : item.waveHeight.sg! < 1.2 ? 'rgb(0, 0, 160)' : 'rgb(0,0,80)'}` }}>
                                {Math.trunc(item.waveHeight.sg! * 100) - 20}-{Math.trunc(item.waveHeight.sg! * 100) + 20}<br></br> cm</td>
                            <td><ArrowUpOutlined rotate={item.waveDirection.sg!<180?item.waveDirection.sg!:item.waveDirection.sg!>270?item.waveDirection.sg!+90:item.waveDirection.sg!/2} /></td>
                            <td style={{ backgroundColor: `${item.windSpeed.sg! < 12 ? 'green' : item.windSpeed.sg! < 17 ? 'orange' : 'red'}`, width: '40px', fontSize: '1.2rem' }}>
                                <ArrowUpOutlined rotate={item.windDirection.sg ? item.windDirection.sg : 0} />
                                <br></br>
                                {Math.trunc(item.windSpeed.sg!)}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemTable