const MyTaskForLearn = ({taskPlans, addTask, deleteTask, selectedTasks, setSelectedTasks}) => {
    return(
        <div>
            <div className="smallHeader">
                <h3>My plan</h3>
            </div>
            
                {taskPlans.map(({id, title, taskForLearning}) => (
                <div className="createdPlan">  
                    <div className={`task ${id===selectedTasks ? "selected" : "default"}`} onClick = {() =>setSelectedTasks(id)}>  
                        <p className="task">{title}</p>
                        <p >{taskForLearning}</p>
                    </div>
                    <div className="smallHeader"> 
                        <button className="smallButton" onClick={() =>deleteTask(id)}>Delete</button>
                    </div>
                </div> 
                ))}
                <div className="smallHeader">
                    <button className=" btn cleanList" onClick={addTask}>Add</button>
                </div>
        </div>
    )
}
export default MyTaskForLearn;