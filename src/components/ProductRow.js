import { useState } from 'react'
import jsonData from '../data.json';

function ProductRow() {
    const [products, setProducts] = useState(jsonData);

    return (
    <div>

    <table>
        <tr>
          <th>name</th>
          <th>price</th>
        </tr>
      {products.map(element => {
        return (
        <tr>
          {element.inStock ? <td>{element.name}</td> : <td style={{ color: 'red' }} >{element.name}</td> }
          <td>{element.price}</td>
        </tr>
        )

      })}
    </table>
      
  </div>
  );
}

export default ProductRow;