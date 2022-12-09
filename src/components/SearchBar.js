import { useState } from 'react'
import jsonData from '../data.json';

function SearchBar(props) {

    const [search, setSearch] = useState('')

    const [isChecked, setIsChecked] = useState(false)
    
    const searchChange = (event) => {
    setSearch(event.target.value)
    props.findProduct(event.target.value)
    }
    
    return (
      <div>
          <label>Search: </label>
          <input onChange = {searchChange} type="text" value={search}/>

          <input type="checkbox" value={isChecked} onChange={(e) => {
                    setIsChecked(!isChecked)
                    props.itemsStock(!isChecked) }}/>
            <p>Click the check box above to see only the items in stock!</p>   
          
      </div>
    );
  }
  
  export default SearchBar;