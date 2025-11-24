import Button from "@/app/src/conponents/ui/button/Button";
import Input from "@/app/src/conponents/ui/input/Input";
import style from "./Verification.module.css";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Code {
  code: string;
}

export default function Verification() {
  const shema = yup.object().shape({
    code: yup.string().trim().required("This field is required"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Code>({
    resolver: yupResolver(shema),
    defaultValues: {
      code: "",
    },
  });

  const submitForm = (data: Code) => {
    console.log(data);
    console.log("code");

    reset();
  };

  return (
    <div className={style.verificatoin}>
      <div className={style.info}>
        <Title>Verification</Title>
        <Text>Verify your code.</Text>
      </div>
      <form
        className={style.form}
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <Input
              label="Verification Code "
              error={errors.code?.message}
              {...field}
            />
          )}
        />

        <div className={style.button}>
          <Button type="submit" text="Verify Code" variant="fullfill" />
        </div>
      </form>
    </div>
  );
}
