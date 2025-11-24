import * as yup from "yup"

export const shema = yup.object().shape({
    username: yup.string().trim().required("This field is required"),
    password: yup.string().trim().required("This field is required")
})