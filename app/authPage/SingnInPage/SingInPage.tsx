"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { shema } from "./shema";
import style from "./SingInPage.module.css";
import Input from "../../src/components/ui/input/Input";
import Button from "../../src/components/ui/button/Button";
import Line from "../../src/components/ui/line/Line";
import Title from "../Title/Title";
import Text from "../Text/Text";

export interface User {
  username: string;
  password: string;
}

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    resolver: yupResolver(shema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submitForm = (data: User) => {
    console.log(data);
    reset();
  };
  return (
    <div className={style.signin}>
      <Title>Sign In Page</Title>
      <div className={style.buttons}>
        <Button variant="outline">
          <img src="/icons/Google.svg" alt="google logo" />
          Continue With Google
        </Button>
        <Button variant="outline">
          <img src="/icons/twitter.svg" alt="twitter logo" />
          Continue With Twitter
        </Button>
      </div>
      <div className={style.spacer}>
        <Line />
        OR
        <Line />
      </div>
      <form
        className={style.form}
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              label="User name or email address"
              error={errors.username?.message}
              {...field}
            />
          )}
        />
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
        <div className={style.btn}>
          <Button variant="fullfill">Sing in</Button>
          <Text>Don’t have an account? Sign up </Text>
        </div>
      </form>
    </div>
  );
}
