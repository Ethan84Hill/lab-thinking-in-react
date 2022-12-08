import { useState } from 'react'
import jsonData from '../data.json';

function SearchBar(props) {

    const [searchStore,setSearchStore] = useState("")
    const [products, setProducts] = useState(jsonData);
    const [filterProducts, setFilterProducts] = useState(jsonData);
    
    return (
      <div>
          <label>Search: </label>
          <input type="text" name="search" value={searchStore} onChange={(event) => {
                const newList = products.filter(singleProduct => {
                return singleProduct.toLowerCase().includes(event.target.value.toLowerCase())
            })
                console.log(newList)
                setFilterProducts(newList)
            }}
          />
          
      </div>
    );
  }
  
  export default SearchBar;