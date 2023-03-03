import React from 'react'
import { useContext } from 'react'
import { themeContext } from './context/themeContext'

type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLDivElement>,id:number) => void
}

const ButtonEvent = (props: ButtonProps) => {
  const theme = useContext(themeContext)
  return (
    <div onClick={(event)=>props.handleClick(event,1)} style={{background:theme.primary.main}} >ButtonEvent</div>
  )
}


export default ButtonEvent