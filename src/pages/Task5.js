/*Task 5:
Display a list of products from the "products.json" file as a table. The data in this table should have
the ability to be filtered and sorted.
Displaying:
The "Options" button should be displayed. Below "Options" button the list of all products should be
displayed as a table, which will contain the following columns: "#" (row number in the table),
"Category", "Price", "Manufacturer" and "Production date". Above the table of products should also be
displayed: total quantity, total cost, average price of displayed products, the most expensive product
and it's price, as well as the cheapest product and it's price.
Filtering:
By clicking on the "Options" button, the side panel should open. Side panel should contain various
filtering settings and the control buttons such as "Apply" and "Reset". By clicking on the "Apply"
button, the filtering and sorting settings should be applied, the side panel should be closed and the
data in the table should change accordingly to the applied settings. By clicking on the "Reset" button,
all the previously selected settings should be reset and the panel should be closed.
● Filter by category:
A list of checkboxes with unique categories should be displayed in the side panel. This list 
could be extracted from the list of all products. There can be multiple selected categories.
Additionally, there should be an "All except" option. If it is active, the list of products should
be filtered by all categories except those that were selected.
● Filter by price:
Two input fields should be displayed in the side panel. One of them is responsible for the
lowest price, the other one is the highest price.
● Filter by manufacturer:
Same functionality as for category.
Sorting:
By clicking on the heading cell in the table, sorting should be performed. Sorting can be ascending
and descending.*/

import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {useRef, useState, useEffect} from 'react';
import {Table, Col, Form, Button} from "react-bootstrap";
import productData from "./../data/productData";
import ProductTable from './../components/ProductTable'

	export default function Task5(){

		const [priceMin, setPriceMin] = useState(0)
		const [priceMax, setPriceMax] = useState(Math.pow(10, 1000)) //infinity
		const [products, setProducts] = useState(productData)
		const [sort, setSort] = useState("ASC")

		const [shoes, setShoes] = useState(false)
		const [clothes, setClothes] = useState(false)
		const [perfume, setPerfume] = useState(false)
		const [nike, setNike] = useState(false)
		const [underArmour, setUnderArmour] = useState(false)
		const [adidas, setAdidas] = useState(false)

		//for side panel
		const primaryNav = useRef();
		const boxRef = useRef();

		const checkBox = useRef();

		const productsData = products.map( product => {	
			return (
				<tr key={product.id}>
				  <td>{product.id}</td>
				  <td>{product.category}</td>
				  <td>{product.price}</td>
				  <td>{product.manufacturer}</td>
				  <td>{product.productionDate}</td>
				</tr>
			)
		})

		function reset(){
			setPriceMin(0)
			setPriceMax(Math.pow(10, 1000))
			setProducts(productData)
			setSort("ASC")
			setShoes(false)
			setClothes(false)
			setPerfume(false)
			setNike(false)
			setUnderArmour(false)
			setAdidas(false)
			checkBox.current.removeAttribute("checked")
			
		}



		//toggle side panel
		function togglePanel(){

		  const visibility = primaryNav.current.getAttribute("data-visible")

		  if (visibility === "false"){
		    primaryNav.current.setAttribute("data-visible", true)
		  } else {
		    primaryNav.current.setAttribute("data-visible", false)
		  }

		}

		const sorting = (col) => {
			if (sort === "ASC"){
				const sorted = [...products].sort((a, b) => {
					if (a[col] > b[col]){
						return 1
					} else {
						return -1
					}
				});
				setProducts(sorted);
				setSort("DSC")
				
			} else if (sort === "DSC"){
				const sorted = [...products].sort((a, b) => {
					if (a[col] < b[col]){
						return 1
					} else {
						return -1
					}
				});
				setProducts(sorted);
				setSort("ASC")
			}
		}
		function updatePrice(e){
			e.preventDefault();
			const filtered = products.filter(data => data.price >= priceMin && data.price <= priceMax)
			setProducts(filtered)
		}

		function updateCategory(e){
			e.preventDefault();

			if (shoes == false && clothes && perfume){ //011
				const filtered = products.filter(data => data.category == "Shoes")
				setProducts(filtered)
			} else if (shoes == false && clothes == false && perfume){ //001
				const filtered = products.filter(data => data.category == "Shoes" || data.category == "Clothes")
				setProducts(filtered)
			} else if (shoes && clothes && perfume){ //111
				setProducts([])
			} else if (shoes == false && clothes && perfume == false){ //010
				const filtered = products.filter(data => data.category == "Shoes" || data.category == "Perfume")
				setProducts(filtered)
			} else if (shoes && clothes == false && perfume == false){ //100
				const filtered = products.filter(data => data.category == "Clothes" || data.category == "Perfume")
				setProducts(filtered)
			} else if (shoes && clothes && perfume == false){ //110
				const filtered = products.filter(data => data.category == "Perfume")
				setProducts(filtered)
			} else if (shoes && clothes && perfume == false){ //000
				setProducts(products)
			}
		}

		function updateManufacturer(e){
			e.preventDefault();
	
			if (nike == false && underArmour && adidas){ //011
				const filtered = products.filter(data => data.manufacturer == "Nike")
				setProducts(filtered)
			} else if (nike == false && underArmour == false && adidas){ //001
				const filtered = products.filter(data => data.manufacturer == "Nike" || data.manufacturer == "Under Armour")
				setProducts(filtered)
			} else if (nike && underArmour && adidas){ //111
				setProducts([])
			} else if (nike == false && underArmour && adidas == false){ //010
				const filtered = products.filter(data => data.manufacturer == "Nike" || data.manufacturer == "Adidas")
				setProducts(filtered)
			} else if (nike && underArmour == false && adidas == false){ //100
				const filtered = products.filter(data => data.manufacturer == "Under armour" || data.manufacturer == "Adidas")
				setProducts(filtered)
			} else if (nike && underArmour && adidas == false){ //110
				const filtered = products.filter(data => data.manufacturer == "Adidas")
				setProducts(filtered)
			} else if (nike && underArmour && adidas == false){ //000
				setProducts(products)
			}
		}

		//for active display cost
		const costActiveArr = products.map( product => {
			let total = 0;
			return total += product.price;
		})

		let totalCostActive = 0;
		for (let i = 0; i < costActiveArr.length; i++) {
		    totalCostActive += costActiveArr[i];
		}

		//for total cost
		const costArr = productData.map( product => {
			let total = 0;
			return total += product.price;
		})

		let totalCost = 0;
		for (let i = 0; i < costArr.length; i++) {
		    totalCost += costArr[i];
		}

		//for most expensive
		const mostExpId = [...productData].sort((a,b) => a.price - b.price).pop().id;
		const mostExpPrice = [...productData].sort((a,b) => a.price - b.price).pop().price;
		const mostCheapId = [...productData].sort((a,b) => a.price + b.price).pop().id;
		const mostCheapPrice = [...productData].sort((a,b) => a.price + b.price).pop().price;

	return (
		<>	
			<header>
			  <nav ref={boxRef}>
			    <ul ref={primaryNav} id="primary-navigation" className="primary-navigation d-flex" data-visible="false">
			      
				    <form  onSubmit={updateCategory}>
					    <li>
					      	<h2>CATEGORY</h2>
					    </li>
					    <li>
					    	<input type="checkbox" ref={checkBox} checked = {shoes} onChange={(e) => setShoes(e.target.checked)}/>
					      	<label className="mx-3">Shoes</label>
					      	 
					    </li>
					    <li>
					    	<input type="checkbox" checked = {clothes} onChange={(e) => setClothes(e.target.checked)}/>
					      	<label className="mx-3">Clothes</label>
					      	
					    </li>
					    <li>
					    	<input type="checkbox" checked = {perfume} onChange={(e) => setPerfume(e.target.checked)}/>
					      	<label className="mx-3 mb-3">Perfume</label>
					      	
					    </li>
					    <li>
					    	<button className="btn btn-success mb-5">APPLY All EXCEPT</button>
					    </li>
					</form>

					<form onSubmit={updateManufacturer}>
				        <li>
				        	<h2>MANUFACTURER</h2>
				        </li>
				        <li>
				        	<input type="checkbox" checked = {nike} onChange={(e) => setNike(e.target.checked)}/>
				        	<label className="mx-3">Nike</label>
				        	
				        </li>
				        <li>
				        	<input type="checkbox" checked = {underArmour} onChange={(e) => setUnderArmour(e.target.checked)}/> 
				        	<label className="mx-3">Under Armour</label>
				        	
				        </li>
				        <li>
				        	<input type="checkbox" checked = {adidas} onChange={(e) => setAdidas(e.target.checked)}/>
				        	<label className="mx-3 mb-3">Adidas</label>

				        </li>
				        <li>
				        	<button className="btn btn-success mb-5"> APPLY All EXCEPT</button>
				        </li>
				    </form>


				    <form onSubmit={updatePrice}>
					    <li>
					      	<h2>PRICE</h2>
					    </li>
					    <li>
					      	<label className="btn btn-secondary">Lowest Price:</label>
					      	<input type="number" onChange={(e) => setPriceMin(e.target.value)}/>
					    </li>
					    <li>
					      	<label className="btn btn-secondary">Highest Price:</label>
					      	<input type="number" onChange={(e) => setPriceMax(e.target.value)}/>
					    </li>
			            <li>
			    	      	<button type="submit" className="btn btn-primary mt-5 mx-5">APPLY PRICE</button>
			            </li>
			        </form>

			        <button onClick={reset} className="btn btn-warning mt-2 mx-5">RESET ALL</button>

				</ul>


			  </nav>
			</header>

			<Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>total quantity: {productData.length}</th>
			      <th>total cost: {totalCost}</th>
			      <th>average price of displayed: {totalCostActive}</th>
			      <th>most expensive product: (row # {mostExpId}) price: {mostExpPrice}</th>
			      <th>cheapest product: (row # {mostCheapId} price: {mostCheapPrice}</th>
			    </tr>
			  </thead>
			</Table>
			<Table striped bordered hover>
			  <thead>
			    <tr>
			      <th onClick={() =>sorting("id")}>#</th>
			      <th onClick={() =>sorting("category")}>Category</th>
			      <th onClick={() =>sorting("price")}>price</th>
			      <th onClick={() =>sorting("manufacturer")}>Manufacturer</th>
			      <th onClick={() =>sorting("productionDate")}>productionDate</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{productsData}
			  </tbody>
			</Table>
			<button onClick={togglePanel} className="btn btn-success m-5">OPTIONS</button>
		</>
	)
}