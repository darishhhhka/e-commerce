"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { shema } from "./shema";
import style from "./SingIn.module.css";
import Input from "@/app/src/conponents/ui/input/Input";
import Button from "@/app/src/conponents/ui/button/Button";
import Line from "@/app/src/conponents/ui/line/Line";

interface User {
  username: string;
  password: string;
}

export default function SignIn() {
  const { control, handleSubmit, reset } = useForm<User>({
    resolver: yupResolver(shema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submitForm = (data: User) => {
    console.log(data);
  };
  return (
    <div className={style.signin}>
      <h1 className={style.title}>Sing In Page</h1>

      <div className={style.buttons}>
        <Button type="outline" text="Continue With Google" />
        <Button type="outline" text="Continue With Twitter" />
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
          render={({ field }) => <Input label="User name or email address" />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input label="Password" type="password" />}
        />
        <div className={style.btn}>
          <Button text="Sing in" type="fullfill" />
        </div>
      </form>
    </div>
  );
}
