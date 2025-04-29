import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(5,"Enter a valid Passsword").required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],"Password must be same").required(),
})

export default validations;