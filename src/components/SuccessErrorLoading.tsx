import React from 'react'

type GreetObjectProps = {
  status: 'loading' | 'success' | 'error'
}

const SuccessErrorLoading = (props: GreetObjectProps) => {
    let message

    if(props.status === 'loading'){
        message = "loading"
    }else if(props.status === 'success'){
        message = "success"
    }else{
        message = "error"
    }
  return (
    <div>
        This is Greet Props {message}
    </div>
  )
}

export default SuccessErrorLoading;