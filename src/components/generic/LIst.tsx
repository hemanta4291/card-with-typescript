import ListItem from "./ListItem";


const List= () => {
  return (
    <div>
        <ListItem data={[
            {
                name:'hkr',
                id:1,
            },
            {
                name:'hkr1',
                id:2,
            },{
                name:'hkr2',
                id:3,
            }
        ]} onClick={(item)=>console.log(item)} />
        {/* <ListItem data={[2,5,4,8,7,9,6]} onClick={()=>console.log()} /> */}
    </div>
  )
}

export default List;