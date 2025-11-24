import Text from "../Text/Text";
import Title from "../Title/Title";
import Button from "../../src/conponents/ui/button/Button";
import Input from "../../src/conponents/ui/input/Input";
import style from "./ResetPassword.module.css";

export default function ResetPassword() {
  return (
    <div className={style.reset_password}>
      <div className={style.info}>
        <Title>Reset Your Password</Title>
        <Text>
          Enter your email and we'll send you a link to reset your password.
        </Text>
        <Text>Please check it.</Text>
      </div>
      <Input label="Email" />
      <div>
        <Button type="submit" text="Send" variant="fullfill" />
      </div>
    </div>
  );
}
