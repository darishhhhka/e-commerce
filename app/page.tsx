"use client";

import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./src/store/rootReducer";

export default function Home() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <div>hi</div>
    </Provider>
  );
}
