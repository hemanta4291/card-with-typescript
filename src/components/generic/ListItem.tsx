
type ListProps<T> = {
    data:T[],
    onClick : (value:T) => void
}

const ListItem = <T extends {id:number,name:string}>({data,onClick}:ListProps<T>) => {
  return (
    <div>
        {
            data.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                        {item.name}
                     </div>
                )
                })
        }
    </div>
  )
}

export default ListItem;