
type ProfileProps = {
    name:string
}

const Login = ({name}:ProfileProps) => {
  return (
    <div>
        Profile with Name : {name}
    </div>
  )
}

export default Login;