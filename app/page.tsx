"use client";

import { Provider, useDispatch } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./src/store/rootReducer";
import ProductCard from "./components/ProductCard/ProductCard";
import { LIMELIGHT, MENCATEGORIES, WOMENCATEGORIES } from "./products";
import style from "./HomePage.module.css";
import ListCard from "./components/ListCard/ListCard";
import { useEffect } from "react";
import { fetchHome } from "./src/store/homeSlice";
import { useAppDispatch } from "./src/store/store";

export default function Home() {
  const store = createStore(rootReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHome);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((data) => data.json())
  //     .then((data) => console.log(data));
  // }, []);

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
