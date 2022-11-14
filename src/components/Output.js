import React, { useState } from "react";

import "../styles.css";

const Output = ({ task, removeTask, addTask }) => {
	const [input, setInput] = useState("");

	const handleRemove = (item) => {
		removeTask(item);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleAdd = () => {
		let addedTask = {
			id: task.length + 1,
			task: input,
		};

		addTask(addedTask);
		setInput("");
	};

	const allTasks = task.map((item, index) => {
		return (
			<li
				onClick={() => {
					handleRemove(item);
				}}
				key={index}
			>
				{item.task}
			</li>
		);
	});

	return (
		<section className="container">
			<h2>Task Manager</h2>
			<input type="text" value={input} onChange={handleInput} />
			<button onClick={handleAdd}>Add Task</button>
			{task.length !== 0 && (
				<div className="tasksContainer">
					<ul>{allTasks}</ul>
				</div>
			)}
		</section>
	);
};

export default Output;
