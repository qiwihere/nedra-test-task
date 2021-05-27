import { BasicSelect } from "@consta/uikit/BasicSelect";
import React from "react";
import { uiLang } from "../../lang/ru";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../store/actions";

const sortVariants = [
  {
    field: "price",
    direction: "ASC",
    label: uiLang.sortPriceAsc,
  },
  {
    field: "price",
    direction: "DESC",
    label: uiLang.sortPriceDesc,
  },
  {
    field: "year",
    direction: "ASC",
    label: uiLang.sortYearAsc,
  },
  {
    field: "year",
    direction: "DESC",
    label: uiLang.sortYearDesc,
  },
  {
    field: "mileage",
    direction: "ASC",
    label: uiLang.sortMileageAsc,
  },
  {
    field: "mileage",
    direction: "DESC",
    label: uiLang.sortMileageDesc,
  },
];

export default function SortDropdown() {
  const { selectedSort } = useSelector((state) => state.collection);
  const dispatch = useDispatch();
  return (
    <BasicSelect
      options={sortVariants}
      value={selectedSort}
      onChange={(e) => dispatch(setSort(e))}
      id={"sort"}
      getOptionLabel={(option) => option.label}
      placeholder={uiLang.sort}
    />
  );
}
