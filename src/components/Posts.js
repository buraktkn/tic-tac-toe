import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Posts() {
  
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data => setPost(data.slice(0, 10)))
    },[])

    return (
    <div>
        <h1>Posts Titles</h1>
        {
            post.map(post => 
                <li key={post.id}><Link to={`/post/${post.id}`}>Post No: {post.id}</Link></li>
                )
        }
    </div>
  )
}
