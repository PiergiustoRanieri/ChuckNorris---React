import React, { useEffect } from 'react'
import '../styles/Dropdown.css'
const Dropdown = ({selection, clbk, handler}) => {

  useEffect(clbk, [])

  function getCategory(e){
    handler(e.target.value)
  }

  return (
    <div className='DropDown'>
      <select name="category" id="dropdown" onChange={(e) => getCategory(e)}>
        <option value="" defaultValue hidden>Categorie</option>
        {selection.map((selection) => 
        <option value={selection.value} key={selection.id}>{selection.value}</option>
        )}
      </select>
    </div>
  )
}

export default Dropdown