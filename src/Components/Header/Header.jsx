import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { H1, HeaderEl, ModeSwitcher, Title, Wrapper} from "./HeaderElement";
import { useState, useEffect} from "react";
import {Container} from "../Container";

export const Header = (props) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme])

    return(
       <HeaderEl>
           <Container>
               <Wrapper>
                   <Title>Currency converter</Title>
                   <span>USD: {props.usd}</span>
                   <span>EUR: {props.eur}</span>
                   <ModeSwitcher onClick={toggleTheme}>
                       {theme === 'light' ? (
                           <IoMoonOutline size="14px"/>
                       ):(
                           <IoMoon size="14px"/>
                       )

                       }
                       {' '}
                       <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                   </ModeSwitcher>
               </Wrapper>
           </Container>
        </HeaderEl>

    )
}