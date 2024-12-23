import { useEffect, useState } from "react";
import image from "../photo/CanSheCode.jpg";
import MyTaskForLearn from "./MyTaskForLearn";
import MyListTasks from "./MyListTasks";
import uuid from "react-uuid";
import gsap from "gsap";
import ControlledCarousel from "../ControlledCarousel";
import { dataCarousel } from "../dataCarousel";


function Alla() {
useEffect(() => {
    const ctx = gsap.context (() => {
        gsap.from('h1',{opacity: 0, duration: 1, delay: 1});
        gsap.from('.mainPhoto',{x:-400, duration: 3, delay: 0.1});
        gsap.from('.contPar',{x:400, duration: 3, delay: 0.1});
        gsap.from('.trip', {y:-100, opacity: 0, repeat: -1, duration: 4, delay: 2})
    })
    return() => ctx.revert()
}, [])

   
    const [taskPlans, setTaskPlans] = useState(localStorage.taskPlans ? JSON.parse(localStorage.taskPlans):[]);
    const [selectedTasks, setSelectedTasks] = useState (false);
    useEffect(() => {
        localStorage.setItem("taskPlans", JSON.stringify(taskPlans))
    }, [taskPlans])


    const addTask = () => {
      const newTask = {
        title: "I need to learn ",
        id:uuid(),
        taskForLearning: ""
      }
      setTaskPlans([newTask, ...taskPlans])
    }
    const deleteTask = (taskId) => {
        setTaskPlans (taskPlans.filter(({id}) => id!==taskId))
    }

    const updateTask = (myUpdatedSmallTask) => {
        const updatedSmallTasks = taskPlans.map((taskPlan) => {
            if (taskPlan.id===myUpdatedSmallTask.id) {
                return myUpdatedSmallTask
            }
            return taskPlan
        })
        setTaskPlans(updatedSmallTasks)
    }

    const [showMore, setShowMore] = useState(false)

    const getActiveTask = () => {
        return taskPlans.find(({id}) => id ===selectedTasks)
    }

    return(
        <div>
        <div className="smallHeader" >
            <h1>CanSheCode</h1>
        </div>
        <div className="smallHeader">
            <img className="mainPhoto" src={image} alt="pic" width="250px" height="200px"/>
            <p className="contPar"> {showMore? "Many people today want to move into IT. If you are also thinking about this, but don’t know which direction to choose? Are you a humanitarian?  Are you a woman and think that IT is a male-dominated field? If you are tormented by these and other questions, go to Alla’s Instagram page! Alla helps you get into IT at any age! On her Instagram page you will learn news from the IT world, which specialties and programming languages ​​are most relevant at the moment." : "Many people today want to move into IT."}
            <br/><button className="mainButton" onClick={() => setShowMore(!showMore)}>{showMore ? "hide" : "show"}</button></p>
           
          </div>
          
       
            <div className="smallHeader spaceCont"> 
                <h2>Here is some information from Alla's page</h2>
            </div> 
            <div className="smallHeader"> 
                <ControlledCarousel 
                    slides = {dataCarousel['alla']}
                    classPar = {'infoAllaTwo'}
                    height = {'650px'}
                    width = {'800px'}/>
            </div> 
            <div className="smallHeader">
                <h3>What courses does Alla offer?</h3>
            </div>
            <div className="smallHeader spaceCont">
                <p className="text-container">With Alla, you can start learning from the very basics - 
            HTML/CSS, then, if you like it, continue and learn JavaScript, 
            React, Node. Next, Alla plans to launch a course on mobile development and Python. 
            And all the information is in an accessible form, 
            there is always feedback if it is completely unclear.
            The lessons are structured in such a way that you write code from the very beginning, 
            there is a lot of practice and there is no unnecessary information. And most importantly, 
            Alla is an excellent motivator. She talks about how she came to the IT field, 
            what the pitfalls are and what you need to pay attention to. This is very valuable information, 
            since Alla is a practicing developer! Just make your own individual plan</p>
        </div>
        <div className="advices">
            <div className="smallHeader">
                <MyTaskForLearn
                addTask={addTask} 
                taskPlans={taskPlans}
                deleteTask={deleteTask}
                selectedTasks={selectedTasks}
                setSelectedTasks={setSelectedTasks}
                />
            </div>
            <div className="smallHeader">
                <MyListTasks 
                selectedTasks={getActiveTask()}
                updateTask={updateTask}/>
            </div>
            </div>
            <div className="smallHeader">
                <h3 className="trip">Don't be afraid to explore the magical world of IT! 
                With Alla this trip will be amazing!</h3>
            </div>
        </div>
        
    )
   
}
export default Alla;