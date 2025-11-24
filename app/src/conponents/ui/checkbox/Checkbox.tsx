import Text from "@/app/authPage/Text/Text";
import style from "./Checkbox.module.css";
import ErrorMessage from "../errorMessage/ErrorMessage";

type Props = {
  children: React.ReactNode;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ children, ...props }: Props) {
  return (
    <div>
      <label className={style.checkbox}>
        <input className={style.input} type="checkbox" {...props} />
        <Text>{children}</Text>
      </label>
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </div>
  );
}
