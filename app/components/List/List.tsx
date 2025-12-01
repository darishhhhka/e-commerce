import Title from "@/app/src/components/ui/Title/Title";
import style from "./List.module.css";

type Props = { list: { title: string; list: string[] } };

export default function List({ list }: Props) {
  return (
    <div className={style.list_container}>
      <div className={style.title}>
        <Title color="white" size="normal">
          {list.title}
        </Title>
      </div>

      <div className={style.list}>
        {list.list.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </div>
  );
}
