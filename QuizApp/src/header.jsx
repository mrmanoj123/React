//import React from 'react'

//import { useState } from "react"
import { useContext } from "react"
import ThemeContext from "./ContextAPi/ThemeContext"
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const chnagetheme = () => {
        const themeupdate = theme === "light" ? "dark" : "light";
        setTheme(themeupdate)
    }

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                background: 'lightgray',
                color: 'black',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px'
            }}>
                <h1>Welcome To Quiz Application and curretTheme is : {theme}</h1>
                <button
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        background: 'lightgray',
                        color: 'black',
                        cursor: 'pointer'
                    }}
                    onClick={
                        chnagetheme
                    }>Chnage the Theme</button>
            </div>
        </>
    )
}

export default Header