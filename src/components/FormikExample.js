import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

export default function FormikExample() {
  const [info, setInfo] = useState([]);
  console.log(info);

  return (
    <div>
      <h1>Formik Example</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", language:[]}}
        onSubmit={(values) => {
          setInfo((prev) => [...prev, values]);
        }} 
        
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName"  />
          <hr />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName"  />
          <hr />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
          />
          <hr />
          <label htmlFor="language">Languages</label><br/>
          <label>
            <Field type="checkbox" name="language" value="Turkish" />
            Turkish
          </label>
          <br/>
          <label>
            <Field type="checkbox" name="language" value="English" />
            English
          </label>

          <br />
          <hr />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {info.map((user) => (
        <ul>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.language}</li>
        </ul>
      ))}
    </div>
  );
}
