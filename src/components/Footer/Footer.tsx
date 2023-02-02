import React from 'react'
import { ReactComponent as TgSvg } from '../../utils/imgs/telegram-black-icon.svg'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';

const Footer = () => {
    return (
        <div className='container-fluid m-0 footer row py-3  text-center'>
            <div className='col'>
                <a href='https://t.me/busel364' target='_blank'>
                    <Icon component={TgSvg} style={{ fontSize: '4rem', color: 'whitesmoke' }} title='Telegram' />
                </a>
            </div>
            <div className='col'>
                <a href='https://www.linkedin.com/in/vladislav-busel-1565a625b/' target='_blank'>
                    <LinkedinOutlined style={{ fontSize: '4rem', color: 'whitesmoke' }} title='LinkedIn' target='blank' />
                </a>
            </div>
            <div className='col'>
                <a href='https://github.com/busel364' target='_blank'>
                    <GithubOutlined style={{ fontSize: '4rem', color: 'whitesmoke' }} title='GitHub' />
                </a>
            </div>
        </div>
    )
}

export default Footer