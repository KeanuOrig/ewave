/*Task 1:
Create an array of colors (as strings). Create a createColorManager function that produces
colorManager. colorManager should only have methods (and no properties):
● get - return the currently selected color
● next - switch to the next color
● prev - switch to the previous color
● reset - switch to original color
The default color can be passed to the createColorManager function. Each colorManager should
have its own independent color*/

import {useState} from 'react';

	export default function Task1(){

		const colorArray = ["red", "green", "blue", "black", "magenta"];
		const [color, setColor] = useState(colorArray[0])
		const [getColor, setGetColor] = useState(colorArray[0])
		const [index, setIndex] = useState(0);

		const createColorManager = (action) => {

			if (action === "GET") {

				setGetColor(color)

			} else if (action === "NEXT") {

				if (index < 4){
					const newIndex = index + 1;
					setIndex(newIndex)
					setColor(colorArray[newIndex])

				} else {
					alert("end of array")
				}

			} else if (action === "PREV") {

				if (index > 0){
					const newIndex = index - 1;
					setIndex(newIndex)
					setColor(colorArray[newIndex])

				} else {
					alert("end of array")
				}

			} else if (action === "RESET") {
				setColor(colorArray[0])
				setGetColor(colorArray[0])
				setIndex(0)
				alert("RESET to RED")
			} else {
				return null
			}
		}

	return (
		<>
			<h1>COLOR MANAGER</h1>
			<div className="m-3">
				{
					colorArray.map((value) =>{
				  		return (<div key={value} style={{ color: value }}>{value}</div>)
				  	})	
				}
			</div>
			<div className="m-3">
				<button 
					className="btn btn-primary m-2" 
					type="submit"
					onClick ={() => createColorManager("GET")}
				>GET</button>
				<button 
					className="btn btn-primary m-2" 
					type="submit"
					onClick ={() => createColorManager("PREV")}
				>PREV</button>
				<button 
					className="btn btn-primary m-2" 
					type="submit"
					onClick ={() => createColorManager("NEXT")}
				>NEXT</button>
				<button 
					className="btn btn-primary m-2" 
					type="submit"
					onClick ={() => createColorManager("RESET")}
				>RESET</button>
			</div>
			<div>
				<h3 className="m-2" style={{ color: color }}>Choose Color: {color}</h3>
				<h3 className="m-2" style={{ color: getColor }}>Currently Selected Color: {getColor}</h3>
			</div>
		</>
	)
}