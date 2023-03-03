
type ProfileProps = {
    name:string
}

const Profile = ({name}:ProfileProps) => {
  return (
    <div>
        Profile with Name : {name}
    </div>
  )
}

export default Profile;