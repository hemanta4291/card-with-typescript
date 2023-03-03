import React from 'react'

type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        This is Greet Props {props.name}
    </div>
  )
}

export default Greet;