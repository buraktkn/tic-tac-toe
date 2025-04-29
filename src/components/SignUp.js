import { Field, Formik, Form, ErrorMessage } from 'formik'
import React from 'react'
import validations from './validations'

export default function SignUp() {
  return (
    <div>
        <h1>SignUp</h1>
        <Formik 
        initialValues={{ email: "", password: "", passwordConfirm: "" }}
        onSubmit={(values)=>{
            alert(JSON.stringify(values))
        }} validationSchema={validations}
        >
        <Form>
            <label htmlFor='email'>Email</label>
            <Field id="email" name="email"></Field>
            <ErrorMessage name="email" component="div" />

            <label htmlFor='password'>Password</label>
            <Field id="password" name="password"></Field>
            <ErrorMessage name="password" component="div" />
            
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <Field id="passwordConfirm" name="passwordConfirm"></Field>
            <ErrorMessage name="passwordConfirm" component="div" />
            
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    </div>
  )
}
