import { useState } from "react"

function AddToDo(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    console.log(activityArr)
    const [newActivity,setnewActivity] = useState(" ")
    function handleChange(event){
           setnewActivity(event.target.value)
    }
    function addActivity(){
           setactivityArr([...activityArr,{id :activityArr.length +1,activity : newActivity}])
           setnewActivity("")
    }
    return (
        
        <>
            <div className="flex flex-col">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={newActivity} onChange={handleChange} type="text" placeholder="To do List" className="bg-transparent border border-black p-1 mt-2" />
                    <button onClick={addActivity} className="bg-black text-white border border-black p-1">Add</button>
                </div>
            </div>
        </>
    )
}
export default AddToDo