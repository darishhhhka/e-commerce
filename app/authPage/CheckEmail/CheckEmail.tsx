import Text from "../Text/Text";
import Title from "../Title/Title";
import style from "./CheckEmail.module.css";

export default function CheckEmail() {
  return (
    <div className={style.check_email}>
      <div className={style.info}>
        <Title>Check Email</Title>
        <Text>
          Please check your email inbox and click on the provided link to reset
          your password . If you don’t receive email,
          <span className={style.purple_text}>Click here to resend</span>
        </Text>
      </div>
      <div className={style.link_back}>
        <img src="/arrowIcon.svg" alt="" />
        <Text>Back to Login</Text>
      </div>
    </div>
  );
}
