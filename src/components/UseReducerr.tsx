import React, { useReducer } from 'react'



type counterState ={
  count:number
} 

type CounterAction = UpdateAction | ResetAction

type UpdateAction = {
  type:'incriment' | 'deCriment',
  payload:number
}
type ResetAction = {
  type:'reset',
}

const initialState = {
  count:0
}


function reducer (state:counterState,action:CounterAction){
    switch(action.type){
      case 'incriment':{
        return {count:state.count + action.payload}
      }
      case 'deCriment':{
        return {count:state.count - action.payload}
      }
      case 'reset':{
        return initialState
      }
      default:
        return state
    }
}


const UseReducerr = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <div onClick={()=>dispatch({type:'incriment',payload:10})}>Incriment</div>
      <div onClick={()=>dispatch({type:'deCriment',payload:10})}>Incriment</div>
      <div onClick={()=>dispatch({type:'reset'})}>reset</div>
    </div>
  )
}

export default UseReducerr 