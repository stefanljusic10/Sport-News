import React, { useState, useEffect } from 'react'
import { useModal, useScreenWidth } from '../zustand/store'

const GetScreenWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setScreenWidth = useScreenWidth(state => state.setScreenWidth)
    const closeAll = useModal(state => state.closeAll)

    useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth)
            setScreenWidth(windowWidth)
        }
        window.addEventListener('resize', resizeWindow);
        if(windowWidth > 1024) closeAll()
        return () => { window.removeEventListener('resize', resizeWindow); };
    }, [windowWidth])
    
  return null
}

export default GetScreenWidth