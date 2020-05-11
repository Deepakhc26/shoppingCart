import {  FETCH_PRODUCTS } from "../actions/types";

const initState = { items: [], prodItems: [] };

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // debugger
      return { ...state, items: action.payload, prodItems: action.payload };

    default:
      return state;
  }
}
