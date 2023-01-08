import React, { useEffect, useState } from 'react'

export const NavigationMenu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const navigationMenu = document.querySelector(".navigationImg")
        const header = document.querySelector("#header")
        const resizeWindow = () => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', resizeWindow);
        navigationMenu.addEventListener('click', () => {
            if(windowWidth < 1024)
                header.classList.toggle("headerFullsize")
        })
        if(windowWidth >= 1024) header.className = ""

        return () => { window.removeEventListener('resize', resizeWindow); };
    }, [windowWidth])
  
}