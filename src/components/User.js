import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      <Card style={{ width: "18rem" }}>
        <img alt="Card" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            {user?.address?.street || "Loading..."}{" "}
          </ListGroupItem>
        </ListGroup>
        <CardBody>
          <Link to={`/users/${parseInt(id) - 1}`}>Prev User</Link>
          <br></br>
          <Link to={`/users/${parseInt(id) + 1}`}>Next User</Link>
        </CardBody>
      </Card>
    </div>
  );
}
