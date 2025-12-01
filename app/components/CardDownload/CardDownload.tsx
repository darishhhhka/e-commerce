import style from "./CardDownload.module.css";

type Props = {
  aplication_name: string;
  aplication_subtitle: string;
  img: string;
};

export default function CardDownload({
  aplication_subtitle,
  aplication_name,
  img,
}: Props) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={img} alt="icon" />
      </div>
      <div className={style.info}>
        <span className={style.subtitle}>{aplication_subtitle}</span>
        <span className={style.title}>{aplication_name}</span>
      </div>
    </div>
  );
}
