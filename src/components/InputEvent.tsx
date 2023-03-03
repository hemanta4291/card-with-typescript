import React from 'react'

type InputProps = {
    value: string,
    handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputEvent = (props: InputProps) => {
  return (
    <input style={{border:'1px solid #f00'}} type='text' value={props.value} onChange={(event)=>props.handleChange(event)}/>
  )
}


export default InputEvent