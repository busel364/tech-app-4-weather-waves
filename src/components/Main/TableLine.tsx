import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Hours } from '../../utils/types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

interface Props {
    arrValue: Hours[][]
}

const TableLine = ({ arrValue }: Props) => {

    const getDates = () => {
        const datesArr: string[] = [];
        for (let i = 0; i < arrValue!.length; i++) {
            const date = arrValue![i][0].time.split('T')[0].split('-');
            datesArr.push(`${date[2]}-${date[1]}`)
        }
        return datesArr;
    }

    const getWavesHeight = () => {
        const heightArr: number[] = [];
        for (let i = 0; i < arrValue!.length; i++) {
            heightArr.push(Math.trunc(arrValue![i].reduce((accum, currentValue) => accum + currentValue.waveHeight.sg!, 0) * 100 / 24))
        }
        return heightArr;
    }

    ChartJS.defaults.color = "whitesmoke";
    ChartJS.defaults.font.size = 16;
    ChartJS.defaults.scales.linear.beginAtZero = true;
    ChartJS.defaults.scales.linear.max = getWavesHeight().sort((a, b) => a < b ? 1 : -1)[0] + 20;

    return (
        <>
            <Line data={{
                labels: getDates(),
                datasets: [{
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4,
                    label: 'Waves height',
                    data: getWavesHeight(),
                    borderColor: 'whitesmoke',
                    backgroundColor: 'rgb(0,0,80)',
                    fill: true,
                    pointBackgroundColor: 'rgb(0,0,80)',

                }],
            }} options={{
                color: 'whitesmoke',
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Day'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'CM'
                        }
                    },

                }
            }}
            //  height={100} width={300}
              />
        </>
    )
}

export default TableLine