import React, { useEffect, useState } from 'react'
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

const Header = () => {
    const mode = useAppSelector(state => state.mode);
    const [isOn, setIsOn] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 200) {
                setVisible(() => prevScrollPos > currentScrollPos);
                setPrevScrollPos(currentScrollPos);
            }
        });
    }, [prevScrollPos])


    return (
        <div className={`container-fluid ${visible ? ' header ' : ' header headerHidden '} ${mode ? 'headerDark' : 'headerLight'} row p-0 m-0`}>
            <div className='row m-0 p-0'>
                <div className='text-start col-9 col-md-5 col-lg-3 col-sm-6'>
                    <Link to={''} className={` row  ${mode ? 'headerLinkDark' : 'headerLinkLight'} col`} style={{ width: '230px' }}>
                        <img
                            style={{ width: '110px', height: '90px' }}
                            className='headerImg m-0 pb-2'
                            src={require('../../utils/imgs/pngwing.png')}
                            title='letsSurf'
                            alt='waveImg' />
                        <div className=' m-0 p-0 pt-3' style={{ width: '114px' }}>
                            <h3 className='m-0 '><i>Let's Surf</i></h3>
                            <p><i>Wawes checker</i></p>
                        </div>
                    </Link>
                </div>
                <div className='col text-end pt-4 '>
                    <Link to={'setting'} className='col-1' >
                        <SettingOutlined style={{ fontSize: '2.5em', color: `${mode ? 'whitesmoke' : 'black'}` }} spin={isOn} onMouseEnter={() => setIsOn(true)} onMouseLeave={() => setIsOn(false)} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header