import style from "./Button.module.css";

type Props = {
  variant: "outline" | "fullfill";
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: Props) {
  const typeButton =
    props.variant === "outline" ? style.outline : style.fullfill;
  return (
    <button className={`${typeButton} ${style.button}`} {...props}>
      {props.text}
    </button>
  );
}
