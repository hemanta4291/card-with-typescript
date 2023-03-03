import { ComponentType } from "react";

type ProfileProps = {
    name:string
}
type PrivateProps = {
    isLogin: boolean,
    component:ComponentType<ProfileProps>
}

const Private = ({isLogin,component:Component}:PrivateProps) => {
  return (
    <div>
        <Component name="lal agun" />
    </div>
  )
}

export default Private;