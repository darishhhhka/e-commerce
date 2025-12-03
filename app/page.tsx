"use client";

import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./src/store/rootReducer";
import ProductCard from "./components/ProductCard/ProductCard";
import { LIMELIGHT, MENCATEGORIES, WOMENCATEGORIES } from "./products";
import style from "./HomePage.module.css";
import ListCard from "./components/ListCard/ListCard";

export default function Home() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <main className={style.container}>
        <div className={style.content}>
          <ListCard
            title="Categories For Men"
            items={MENCATEGORIES.map((el) => (
              <ProductCard card={el} arrow_button type="fullSize" />
            ))}
          />
          <ListCard
            title="Categories For Women"
            items={WOMENCATEGORIES.map((el) => (
              <ProductCard card={el} arrow_button type="fullSize" />
            ))}
          />
          <ListCard
            title="In The Limelight"
            items={LIMELIGHT.map((el) => (
              <ProductCard card={el} price like_icon type="fullSize" />
            ))}
          />
        </div>
      </main>
    </Provider>
  );
}
