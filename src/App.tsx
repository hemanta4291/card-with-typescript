import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { useAppDisptch,useAppSelector } from "./app/hooks";
import ButtonEvent from "./components/ButtonEvent";
import ChildrenNode from "./components/ChildrenNode";             
import Private from "./components/componentProps/Private";
import Profile from "./components/componentProps/Profile";
import { ThemeContentProvider } from "./components/context/themeContext";
import Extrat from "./components/Extrat";
import List from "./components/generic/LIst";
import Greet from "./components/Greet";
import GreetArr from "./components/GreetArr";
import GreetObject from "./components/GreetObject";
import InputEvent from "./components/InputEvent";
import SuccessErrorLoading from "./components/SuccessErrorLoading";
import UseReducerr from "./components/UseReducerr";
import ButtonWrapper from "./components/wrapper/ButtonWrapper";
import { fetchUsers, increment, incrementBySaga } from "./features/users/UserSlice";
import UserView from "./features/users/UserView";


function App() {
  const {user,loading} = useAppSelector(state => state.users)
  const dispatch = useAppDisptch()
  const [value,setValue] = useState("")

  useEffect(()=>{
    dispatch(fetchUsers())
    console.log(user)
  },[dispatch])

  const Object = {
    name:"hkr",
    age:25
  }

  const data = [
    {
      name:'hkr',
      type:'good'
    },
    {
      name:'hkr',
      type:'good'
    },
    {
      name:'hkr',
      type:'good'
    }
  ]


  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.value)
    setValue(event.target.value)
  }

 

  return (
    <ThemeContentProvider>
    <div className="container">
      {/* <Greet name={"45"}/>
      <GreetObject persion={Object}/> */}
      {/* <GreetArr data={data} /> */}
      {/* { <SuccessErrorLoading status="success" /> } */}

      <ChildrenNode type={true}>
        fdfsd
      </ChildrenNode>
      <ButtonEvent handleClick={(event,id)=>{
        alert(id)
      }}/>

      {/* <InputEvent value={value} handleChange={inputHander} /> */}

      <UseReducerr />

      <Private isLogin={true}  component={Profile}/>

      <List/>
      <ButtonWrapper/>

      <Extrat name={"45"}/>
      
    </div>

      {
        loading ? "loading........" : ""
      }
    <ul onClick={()=>dispatch(incrementBySaga())}>
      {user && 
         <ul>
         {user.map(user => (
           <li key={user.id}>{user.name}</li>
         ))}
       </ul>
      }
    </ul>

    <UserView/>
    </ThemeContentProvider>
  
  );
}

export default App;
