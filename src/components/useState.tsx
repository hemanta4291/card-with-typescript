import { useState } from "react"

type UserProps = {
  name:string,
  age:number
}

const GreetObject = () => {
    const [user,setUser] = useState< UserProps | null>(null)
    // const [user,setUser] = useState< UserProps>({} as UserProps) // if not user ? mark when use user?.name

    const loginUser = () => {
        setUser({
            name:'hkr',
            age:25
        })
    }

    const logOutUser = () => {
        setUser(null)
    }
  return (
    <div>
        This is Greet Props {}
    </div>
  )
}

export default GreetObject;