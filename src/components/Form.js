import React, { useEffect } from 'react'
import { useState } from 'react'

function Form({addContact, contacts}) {
    
    const initialValue={fullname:"", phoneNumber:""}
    const [form, setForm] = useState(initialValue)
 
    useEffect(()=>{
        setForm(initialValue)
    }, [contacts])
    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmit=()=>{
        if(form.fullname === '' || form.phoneNumber === ''){
            return false 
        }
        else
        addContact([...contacts, form]) 
    }

  return (
    <div>
        <div >
            <label>Name</label><br/>
            <input name="fullname" value={form.fullname} onChange={onChangeInput}></input>
            <br/><br/>
            <label>Phone Number</label><br/>
            <input name="phoneNumber"  value={form.phoneNumber} onChange={onChangeInput}></input>
            <br/>
            <button onClick={onSubmit} >Add</button>
        </div>
    </div>
  )
}

export default Form