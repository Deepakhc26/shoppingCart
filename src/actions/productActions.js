import {  FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:3000/data/data.json")
  .then((res) => res.json())
  .catch((err) =>
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => data.products)      
  )
  .then((data) => {
    dispatch({ type: FETCH_PRODUCTS, payload: data.products });
  });
};

