import style from "./Button.module.css";

type Props = { type: "outline" | "fullfill"; text: string };

export default function Button({ type, text }: Props) {
  const typeButton = type === "outline" ? style.outline : style.fullfill;
  return <button className={`${typeButton} ${style.button}`}>{text}</button>;
}
