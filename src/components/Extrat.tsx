
import Greet  from "./Greet";


const Extrat = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        This is Greet Props {props.name}
    </div>
  )
}

export default Extrat;