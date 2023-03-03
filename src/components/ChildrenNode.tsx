
type GreetProps = {
    children: string,
    type?: boolean,
    count?:number
}

const ChildrenNode = (props: GreetProps) => {

    const {count= 25} = props

  return (
    <div>
        This is Children Node {props.children}
        <div>{props.type ? "ache" : 'nai'}</div>
        <div>{count}</div>
    </div>
  )
}

export default ChildrenNode;