import style from "./Title.module.css";

type Props = {
  children: string;
  color: "black" | "white";
  size?: "large" | "normal";
  line?: boolean;
};

export default function Title({
  children,
  color,
  size = "large",
  line,
}: Props) {
  const colorType = color === "black" ? style.black : style.white;
  const sizeType = size === "large" ? style.large : style.normal;
  return (
    <div className={style.title}>
      {line && <div className={style.line}></div>}
      <h1 className={`${style.title} ${colorType} ${sizeType}`}>{children}</h1>
    </div>
  );
}
