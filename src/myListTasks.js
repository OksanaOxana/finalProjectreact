const MyListTasks = ({selectedTasks, updateTask}) => {
    const editMyTask = (inputPlan, value) => {
        updateTask({...selectedTasks,
            [inputPlan]: value})
        }
    if(!selectedTasks)return<h3>Plan your training</h3>
    
    return(
        <div>
            <div className="smallHeader">
            <h3>Write down your tasks in detail</h3>
            </div>
            <div className="smallHeader">
                <input
                type="text" 
                placeholder="I need to learn "
                onChange={(e) =>editMyTask("title", e.target.value)}
                id = "title"
                value = {selectedTasks.title}
                className="inputTask"
               
                />
            </div>
            <div className="smallHeader">
                <textarea 
                className = "inputTaskTwo"
                placeholder = "Describe the tasks"
                id = " MyTaskForLearn"
                value = {selectedTasks.taskForLearning}
                onChange = {(e) => editMyTask("taskForLearning", e.target.value)}
                />
            </div>
        </div>
    )
}
export default MyListTasks;