import { collection } from "../../data";
import {
  CLEAR_FILTER,
  CLEAR_SEARCH,
  SET_FILTER_VALUE,
  SET_SEARCH_QUERY,
  SET_SELECTED_ITEMS,
  SET_SORT,
} from "../types";

const initialState = {
  collection: collection,
  selectedItems: collection,
  brands: [...new Set(collection.map((v) => v.brand))],
  models: [...new Set(collection.map((v) => v.model))],
  filter: {},
  searchQuery: "",
  selectedSort: null,
};

export default function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        searchQuery: "",
        filter: {
          ...state.filter,
          [action.payload.key]: action.payload.value,
        },
      };
    case CLEAR_FILTER:
      return {
        ...state,
        selectedItems: collection,
        filter: {},
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        filter: {},
        searchQuery: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        selectedItems: collection,
        searchQuery: "",
      };
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        selectedSort: action.payload,
      };
    default:
      return state;
  }
}
