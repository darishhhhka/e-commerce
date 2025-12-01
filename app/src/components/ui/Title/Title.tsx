import style from "./Title.module.css";

type Props = {
  children: string;
  color: "black" | "white";
  size?: "large" | "normal";
};

export default function Title({ children, color, size = "large" }: Props) {
  const colorType = color === "black" ? style.black : style.white;
  const sizeType = size === "large" ? style.large : style.normal;
  return (
    <div>
      <h1 className={`${style.title} ${colorType} ${sizeType}`}>{children}</h1>
    </div>
  );
}
