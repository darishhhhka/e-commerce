import style from "./ProductCard.module.css";

export interface Card {
  price: number;
  title: string;
  brand: string;
  image: string;
  is_favorite: boolean;
}

type Props = {
  card: Card;
  like_icon?: boolean;
  arrow_button?: boolean;
  price?: boolean;
  type: "fullSize" | "smallSize";
};

export default function ProductCard({
  card,
  like_icon,
  type = "fullSize",
  arrow_button,
  price,
}: Props) {
  const like = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget as HTMLElement;
    if (!card.is_favorite) {
      card.is_favorite = true;
      element.style.backgroundColor = "red";
    } else {
      element.style.backgroundColor = "white";
      card.is_favorite = false;
    }
  };

  return (
    <div className={style.card}>
      {like_icon && (
        <div onClick={like} className={style.like}>
          <img className={style.like_img} src="/icons/heart.svg" alt="heart" />
        </div>
      )}
      <div className={style.imge}>
        <img src={card.image} alt="card image" />
      </div>
      <div className={style.card_footer}>
        <div className={style.info}>
          <h5 className={style.title}>{card.title}</h5>
          <span className={style.brand}>{card.brand}</span>
        </div>
        {price && <div className={style.price}> ${card.price}.00</div>}
        {arrow_button && (
          <div>
            <img src="/icons/fullSizeArrow.svg" alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
}
