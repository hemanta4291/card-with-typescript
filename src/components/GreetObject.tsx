import React from 'react'

type GreetObjectProps = {
  persion: {
    name:string,
    age:number
  }
}

const GreetObject = (props: GreetObjectProps) => {
  return (
    <div>
        This is Greet Props {props.persion.age}
    </div>
  )
}

export default GreetObject;