import React from 'react'

type GreetObjectProps = {
  data: {
    name:string,
    type:string
  }[]
}

const GreetArr = (props: GreetObjectProps) => {
  return (
    <div>
        This is Greet Props {props.data.map((v)=>(
          <div>{v.name} </div>
        ))}
    </div>
  )
}

export default GreetArr;