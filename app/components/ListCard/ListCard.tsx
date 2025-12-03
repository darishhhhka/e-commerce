import Title from "@/app/src/components/ui/Title/Title";
import style from "./ListCard.module.css";

type Props = { items: React.ReactNode[]; title: string };

export default function ListCard({ items, title }: Props) {
  return (
    <div>
      <div className={style.title}>
        <Title line color="black">
          {title}
        </Title>
      </div>
      <div className={style.list}>
        {items.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
}
