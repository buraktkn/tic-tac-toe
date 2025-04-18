import React, { useState } from 'react'

function Contact({contacts}) {

  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{ 
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    })
  })


  return (
    <div>
      <label>Filter Contacts</label><br/>
      <input value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
       <ul>
        {filtered.map((filteredContact)=> (
            <li>{filteredContact.fullname} - {filteredContact.phoneNumber}</li>
          ))}
       </ul>
    </div>
  )
}

export default Contact