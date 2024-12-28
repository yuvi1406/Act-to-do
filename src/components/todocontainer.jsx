import ToDoList from "./todolist"
import AddToDo from "./addtodo"
import { useState } from "react"


function ToDoContainer() {
    const [activityArr,setactivityArr] = useState([
        {id :1,
         activity:"Wake up at 7"
        },
        {
            id :2,
            activity : "Go for walk"
        },
        {
            id : 3,
            activity : "Read a book for 15 mins"
        }
    ])
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <AddToDo activityArr={activityArr} setactivityArr={setactivityArr}/>
                <ToDoList  activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </>
    )
}
export default ToDoContainer