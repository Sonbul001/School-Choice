import React from 'react'

function SearchBar() {
  return (
    <div className='searchBar'>
<form className='form' role="search">
  
  <select className='select'  placeholder='Location'>
  <option value="" disabled selected hidden>Select Location</option>
    <option>Cairo</option>
    <option>Giza</option>
    <option>October</option>
    <option>Menia</option>
  </select>
  <input className='input' id="search" type="search" placeholder="School Name" autofocus required />
  <button type="submit">Go</button>    
</form>
    </div>
  )
}

export default SearchBar




