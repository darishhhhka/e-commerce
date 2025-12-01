import Button from "../../src/components/ui/Button/Button";
import Text from "../Text/Text";
import Title from "../../src/components/ui/Title/Title";
import Input from "../../src/components/ui/Input/Input";
import style from "./SingUp.module.css";
import Checkbox from "../../src/components/ui/Checkbox/Checkbox";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface User {
  email: string;
  password: string;
  checkbox1: boolean;
  checkbox2: boolean;
}

export default function SingUp() {
  const shema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("This field is required")
      .email("Incorrect email address"),
    password: yup
      .string()
      .trim()
      .min(
        8,
        "Use 8 or more characters with a mix of letters, numbers & symbols"
      )
      .required("This field is required"),
    checkbox1: yup.boolean().required().oneOf([true], "This field is required"),
    checkbox2: yup.boolean().required().oneOf([true], "This field is required"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(shema),
    defaultValues: {
      email: "",
      password: "",
      checkbox1: false,
      checkbox2: false,
    },
  });

  const submitForm = (data: User) => {
    console.log(data);
    reset();
  };

  return (
    <div className={style.signup}>
      <div className={style.info}>
        <Title>Sing Up</Title>
        <Text>Sign up for free to access to in any of our products </Text>
      </div>
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
      <form
        className={style.form}
        onSubmit={handleSubmit(submitForm)}
        action=""
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              label="Email Address"
              error={errors.email?.message}
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

        <Controller
          name="checkbox1"
          control={control}
          render={({ field }) => (
            <Checkbox
              //   {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              error={errors.checkbox1?.message}
            >
              Agree to our Terms of use and Privacy Policy{" "}
            </Checkbox>
          )}
        />

        <Controller
          name="checkbox2"
          control={control}
          render={({ field }) => (
            <Checkbox
              //   {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              error={errors.checkbox1?.message}
            >
              Subscribe to our monthly newsletter
            </Checkbox>
          )}
        />

        <div>
          <Button variant="fullfill">Sing Up</Button>
          <Text>Already have an account? Log in</Text>
        </div>
      </form>
    </div>
  );
}
