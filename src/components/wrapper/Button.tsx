
// type ButtonProps = {
//    variant: 'primary' | 'secondary'
// } & React.ComponentProps<'button'>


type ButtonProps = {
  variant: 'primary' | 'secondary',
  children:string,
  onClick:(value:number)=>void
} & Omit<React.ComponentProps<'button'>,'children'>

const Button = ({variant,onClick,children,...rest}:ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} onClick={()=>onClick(80)} {...rest}>
        {children}
    </button>
  )
}

export default Button;