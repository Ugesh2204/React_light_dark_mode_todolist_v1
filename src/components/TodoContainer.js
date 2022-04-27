import React, { useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';


import Header from "./Header";
import InputTodo from './InputTodo';




function TodoContainer() {


    //   const [datatheme, setData] = useState('');
  
    //     const childToParent = (childdata) => {
    //     setData(childdata);
    //     }

        const [theme, setTheme] = useState('light')

        const handleClick = () => {
            setTheme(theme === 'light'?'dark':'light')
            console.log(theme);
        } 

        useEffect(() => {
            document.body.className = theme
            console.log(theme)
        })


     return(

        <div className={`globalcontainer ${theme}`}>  
            <div className="container">
                <Header theme = {theme} handleClick={handleClick}/>
                <InputTodo/>
            </div>
        </div>

     )
 
}


export default TodoContainer