import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    ListGroupItem,
  } from "reactstrap";
import { Link } from 'react-router-dom';

export default function Post() {
   const {id} = useParams()
   const [post, setPost] = useState([]);
    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
    return (
        <div>
        <h1>Post Detail</h1>
        <Card style={{ width: "18rem" }}>
          <img alt="Card" src={`https://picsum.photos/id/${id}/300/200`} />
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>
              {post?.body || "Loading..."}
            </ListGroupItem>
          </ListGroup>
          <CardBody>
            <Link to={`/post/${parseInt(id) - 1}`}>Prev Post</Link>
            <br></br>
            <Link to={`/post/${parseInt(id) + 1}`}>Next Post</Link>
          </CardBody>
        </Card>
      </div>
    
  )
}
