import Input from "../../src/components/ui/input/Input";
import Text from "../Text/Text";
import Title from "../Title/Title";
import style from "./CreateNewPasssword.module.css";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../src/components/ui/button/Button";

export default function CreateNewPassword() {
  const shema = yup.object().shape({
    password: yup.string().required("this field is required"),
    confirmPassword: yup.string().required("this field is required"),
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const submitForm = (data: { password: string; confirmPassword: string }) => {
    console.log(data);
    reset();
  };

  return (
    <div className={style.create_password}>
      <div className={style.info}>
        <Title>Create New Password</Title>
        <Text>
          Your new password must be different from previous used passwords.
        </Text>
      </div>
      <form
        className={style.form}
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input
              label="Confirm Password"
              type="password"
              error={errors.confirmPassword?.message}
              {...field}
            />
          )}
        />
        <div>
          <Button variant="fullfill">Reset Password</Button>
        </div>
      </form>
    </div>
  );
}
