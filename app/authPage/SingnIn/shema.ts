import * as yup from "yup"

export const shema = yup.object().shape({
    username: yup.string().trim().required("Это поле обязательно"),
    password: yup.string().trim().required("Это поле обязательно")
})