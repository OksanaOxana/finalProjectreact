const MyListTasks = ({selectedTasks, updateTask}) => {
    const editMyTask = (inputPlan, value) => {
        updateTask({...selectedTasks,
            [inputPlan]: value})
        }
    if(!selectedTasks)return<h3>Plan your training</h3>
    
    return(
        <div>
            <div className="smallHeader">
                <input
                type="text" 
                placeholder="Today I'll learn"
                onChange={(e) =>editMyTask("title", e.target.value)}
                id = "title"
                value = {selectedTasks.title}
                className="inputPlan"
               
                />
            </div>
            <div className="smallHeader">
                <textarea 
                className = "inputPlan"
                placeholder = "Describe the tasks"
                id = "taskForLearning"
                value = {selectedTasks.taskForLearning}
                onChange = {(e) => editMyTask("taskForLearning", e.target.value)}
                />
            </div>
        </div>
    )
}
export default MyListTasks;