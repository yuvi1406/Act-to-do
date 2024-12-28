import ToDoItem from "./todoitem"

function ToDoList(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    return (
        <>
            <div className="bg-purple-400 p-2 flex-grow rounded">
                <h1 className="text-2xl font-normal">Today's Activity</h1>

                {activityArr.length === 0 ? <p>Activities not fixed</p> : " "}
                {
                    activityArr.map(function (item,index) {
                        return (
                            <ToDoItem id={item.id} index={index + 1} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ToDoList