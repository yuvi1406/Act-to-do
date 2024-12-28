function ToDoItem(props){
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(deleteid){
        const tempArr = activityArr.filter(function(item){
           if(deleteid === item.id ){
            return false
           }
           else{
            return  true
           }
        })
        setactivityArr(tempArr)
    }
    return (
        <>
        <div className="flex justify-between">
           <p>{props.index}.{props.activity}.</p>
           <button className="text-red-500" onClick={()=> handleDelete(props.id)}>Delete</button>
        </div>
        </>
    )
}
export default ToDoItem