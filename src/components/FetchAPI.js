import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FetchAPI() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(res=>res.json())
        .then(data=>{
            setUsers(data) 
            setIsLoading(false)
        })
    },[])

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res=> console.log(res.data))
    })
  return (
    <div>
        <h1>FetchAPI ile Users Listeleme</h1>
        <h2>Users</h2>
        {isLoading && <div>Loading...</div>}
        {
           users.map(user => <div key={user.id}>{user.name}</div>)
        }
    </div>
  )
}


