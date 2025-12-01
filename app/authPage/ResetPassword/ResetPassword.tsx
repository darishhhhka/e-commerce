import Text from "../Text/Text";
import Title from "../../src/components/ui/Title/Title";
import Button from "../../src/components/ui/Button/Button";
import Input from "../../src/components/ui/Input/Input";
import style from "./ResetPassword.module.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ResetPassword() {
  const shema = yup.object().shape({
    email: yup.string().trim().email().required("this field is required"),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
    defaultValues: {
      email: "",
    },
  });

  const submitForm = (data: { email: string }) => {
    console.log(data);
    reset();
  };

  return (
    <div className={style.reset_password}>
      <div className={style.info}>
        <Title>Reset Your Password</Title>
        <Text>
          Enter your email and we'll send you a link to reset your password.
        </Text>
        <Text>Please check it.</Text>
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        action=""
        className={style.form}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input label="Email" error={errors.email?.message} {...field} />
          )}
        />
        <div>
          <Button variant="fullfill">Send</Button>
        </div>
      </form>
    </div>
  );
}
