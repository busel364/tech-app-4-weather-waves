import { Switch } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeMode } from '../../reducers/versionModeReucer';
import { ReactComponent as TgSvg } from '../../utils/imgs/telegram-black-icon.svg'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';

const Settings = () => {
    const mode = useAppSelector(state => state.mode);
    const dispatch = useAppDispatch();

    return (
        <div className='container settings' style={{ color: 'whitesmoke' }}>
            <h1 className='text-center' style={{ fontWeight: '100' }} >Tools</h1>
            <h2 style={{ fontWeight: '100' }} className='py-3'>Theme changer</h2>
            <h3 style={{ fontWeight: '100' }} className='px-3'>Light/Dark</h3>
            <Switch checked={mode} className='mx-3 mb-5' onClick={() => dispatch(changeMode())} />
            <p style={{ fontWeight: 100, fontSize: '1.7rem' }}>Do you have any question? Problem with website? Chat me somewhere </p>
            <div>
                <a href='https://t.me/busel364' target='_blank' rel="noreferrer">
                    <Icon component={TgSvg} style={{ fontSize: '9rem', color: `${mode ? 'whitesmoke' : 'black'} ` }} title='Telegram' />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/vladislav-busel-1565a625b/ ' target='_blank' rel="noreferrer">
                    <LinkedinOutlined style={{ fontSize: '9rem', color: `${mode ? 'whitesmoke' : 'black'} ` }} title='LinkedIn' target='blank' />
                </a>
            </div>
            <div>
                <a href='https://github.com/busel364' target='_blank' rel="noreferrer">
                    <GithubOutlined style={{ fontSize: '9rem', color: `${mode ? 'whitesmoke' : 'black'} ` }} title='GitHub' />
                </a>
            </div>
        </div>
    )
}

export default Settings