import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	reset,
	increaseByAmount,
} from "./counter/counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	const [increase, setIncrease] = useState(0);

    const handleInput = (e) =>{
        setIncrease(Number(e.target.value) || 0)
    }

    const addValue = (increase) =>{
        dispatch(increaseByAmount(increase))
    }

    const addNow = () =>{
        addValue(increase);
    }

	return (
		<section>
			<p> {count} </p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>clear</button>
            <input type="number"
             onChange={handleInput} 
             />
			<button onClick={addNow}>add</button>

		</section>
	);
};

export default Counter;
