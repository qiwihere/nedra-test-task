import { fuelTypes, bodyTypes, gearboxTypes } from "../../data";
import { fuelTypesLang, bodyTypesLang, gearboxTypesLang } from "../../lang/ru";

export default function getFilterValues() {
  const fuelTypesSelect = Object.values(fuelTypes).map((v) => ({
    label: fuelTypesLang[v],
    value: v,
  }));

  const bodyTypesSelect = Object.values(bodyTypes).map((v) => ({
    label: bodyTypesLang[v],
    value: v,
  }));

  const gearboxTypesSelect = Object.values(gearboxTypes).map((v) => ({
    label: gearboxTypesLang[v],
    value: v,
  }));

  const yearsSelect = [...Array(20).keys()].map((v) => {
    const year = new Date().getFullYear() - v;
    return {
      label: year,
      value: year,
    };
  });

  return { fuelTypesSelect, bodyTypesSelect, gearboxTypesSelect, yearsSelect };
}
