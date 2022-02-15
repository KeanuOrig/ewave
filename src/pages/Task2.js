/*Task 2:
Create a sum function that takes 3 parameters a, b and c. If the function was called with all three
arguments, it should return their sum. If only a (or a and b) was passed, the sum function should
return a function that rememebers the earlier passed arguments until all 3 arguments have been
passed.*/

import {useState} from 'react';

	export default function Task2(){

		const [a, setA] = useState("");
		const [b, setB] = useState("");
		const [c, setC] = useState("");	
		const [total, setTotal] = useState(0);

		function sum(){
			if (a !== "" && b !== "" && c !== "") {
				const newTotal = parseInt(a) + parseInt(b) + parseInt(c);
				setTotal(newTotal)
				return 
			} else if (a !== "" && b == "" && c == ""){
				//if only a was passed
				setTotal(parseInt(a))
			} else if (a !== "" && b !== "" && c == ""){
				//If (a and b) was passed
				setTotal(parseInt(a) + parseInt(b))
			}
		}


	return (
		<>
			<h1>SUM</h1>
			<div>
				<label className="m-3">A:</label>
				<input type="number" onChange={(e) => setA(e.target.value)}/>
			</div>
			<div>
				<label className="m-3">B:</label>
				<input type="number" onChange={(e) => setB(e.target.value)}/>
			</div>
			<div>
				<label className="m-3">C:</label>
				<input type="number" onChange={(e) => setC(e.target.value)} />
			</div>
			<div>
				<h2 className="m-3">Total: {total}</h2>
			</div>
			<button 
				className="btn btn-primary m-3" 
				type="submit"
				onClick ={() => sum()}
			>ADD</button>
		</>
	)
}