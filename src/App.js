import React, { useState } from "react";
import "./styles.css";
import Output from "./components/Output";

function App() {
	const tasks = [

	];

	const [task, setTask] = useState(tasks);

	//Removing a completed task
	const removeTask = (updatedTask) => {
		const newTasks = task.filter((task) => task.id !== updatedTask.id);
		setTask(newTasks);
	};

  //Adding a new task
  const addTask = (newTask) =>{
    setTask([...task, newTask])
  }

	return (
		<>
			<Output task={task} removeTask={removeTask} addTask={addTask}/>
		</>
	);
}

export default App;
