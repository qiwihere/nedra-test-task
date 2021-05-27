import {
  CLEAR_FILTER,
  CLEAR_SEARCH,
  SET_FILTER_VALUE,
  SET_SEARCH_QUERY,
  SET_SELECTED_ITEMS,
  SET_SORT,
} from "./types";

export const setFilter = (key, value) => (dispatch) =>
  dispatch({
    type: SET_FILTER_VALUE,
    payload: { key, value },
  });

export const clearFilter = () => (dispatch, getState) => {
  const { selectedSort, collection } = getState().collection;
  dispatch({
    type: CLEAR_FILTER,
  });
  return dispatch(setSort(selectedSort, collection));
};

export const setSearchQuery = (query) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_QUERY,
    payload: query,
  });
  if (!query) {
    dispatch(clearSearch());
  }
};

export const clearSearch = () => (dispatch, getState) => {
  const { selectedSort, collection } = getState().collection;
  dispatch({
    type: CLEAR_SEARCH,
  });
  return dispatch(setSort(selectedSort, collection));
};

export const applySearch = () => (dispatch, getState) => {
  const { searchQuery, collection, selectedSort } = getState().collection;
  const arSearchVariants = {};
  collection.forEach((v, k) => {
    const brand = v.brand.toLowerCase();
    const model = v.model.toLowerCase();
    arSearchVariants[brand] = [...(arSearchVariants[brand] || []), k];
    arSearchVariants[model] = [...(arSearchVariants[model] || []), k];
    arSearchVariants[`${brand} ${model}`] = [
      ...(arSearchVariants[`${brand} ${model}`] || []),
      k,
    ];
    arSearchVariants[`${model} ${brand}`] = [
      ...(arSearchVariants[`${model} ${brand}`] || []),
      k,
    ];
  });

  let arSearchResult = [];
  Object.keys(arSearchVariants).forEach((v) => {
    if (v.includes(searchQuery.toLowerCase()))
      arSearchResult = [...arSearchVariants[v], ...arSearchResult];
  });
  arSearchResult = [...new Set(arSearchResult)];

  const selectedItems = collection.filter((_, k) => arSearchResult.includes(k));

  dispatch(setSort(selectedSort, selectedItems));
};

export const applyFilter = () => (dispatch, getState) => {
  const { filter, collection, selectedSort } = getState().collection;
  let selectedItems = collection;

  for (let filterParam of Object.keys(filter)) {
    let filterValue = filter[filterParam];
    if (!filterValue) continue;
    if (filterValue.value) filterValue = filterValue.value;
    let filterFunction;
    if (filterParam.includes("From"))
      filterFunction = (auto) =>
        auto[filterParam.replace("From", "")] >= filterValue;
    else if (filterParam.includes("To"))
      filterFunction = (auto) =>
        auto[filterParam.replace("To", "")] <= filterValue;
    else
      filterFunction = (auto) =>
        auto[filterParam].toString() === filterValue.toString();

    selectedItems = selectedItems.filter(filterFunction);
  }
  dispatch(setSort(selectedSort, selectedItems));
};

export const setSort =
  (sort, selectedItems = null) =>
  (dispatch, getState) => {
    if (!selectedItems) selectedItems = getState().collection.selectedItems;
    if (sort) {
      const { field, direction } = sort;

      if (field && direction) {
        let sortFunction;
        if (direction === "ASC") sortFunction = (a, b) => a[field] - b[field];
        else sortFunction = (a, b) => b[field] - a[field];

        selectedItems = selectedItems.sort(sortFunction);
      }
    }
    dispatch({
      type: SET_SELECTED_ITEMS,
      payload: selectedItems,
    });

    return dispatch({
      type: SET_SORT,
      payload: sort,
    });
  };
