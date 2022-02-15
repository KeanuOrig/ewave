

export default function ProductTable({productProp}){

	const {id, category, price, manufacturer, productionDate} = productProp;

  	return (


  		    <tr>
  		      <td>{id}</td>
  		      <td>{category}</td>
  		      <td>{price}</td>
  		      <td>{manufacturer}</td>
  		      <td>{productionDate}</td>
  		    </tr>
    )
}