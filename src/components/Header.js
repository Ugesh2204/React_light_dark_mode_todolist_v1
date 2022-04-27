import React, { useState } from 'react';
import { ReactComponent as  LightIcon} from '../assets/icon-moon.svg'
import { ReactComponent as  DarkIcon}  from '../assets/icon-sun.svg'




const Header = ({theme, handleClick}) => {
    return(
        <header className='header'>
            <div className="header__inner">
                <h1>Todo</h1>
                <button className="switchbtn" onClick={()=>handleClick()}>
                        { theme === 'light' ?<DarkIcon/> : <LightIcon/>}
                </button>
            </div>
        </header>
    )
}


export default Header