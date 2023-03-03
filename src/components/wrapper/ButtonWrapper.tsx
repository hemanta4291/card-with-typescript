import Button from "./Button";


const ButtonWrapper = () => {
  return (
    <>
        <Button variant="secondary" onClick={(type)=>alert(type)}>
        secondary
        </Button>
    </>
  )
}

export default ButtonWrapper;