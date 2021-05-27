import { bodyTypes, fuelTypes, gearboxTypes } from "../data";

export const fuelTypesLang = {
  [fuelTypes.PETROL]: "Бензин",
  [fuelTypes.ELECTRIC]: "Электро",
  [fuelTypes.HYBRID]: "Гибрид",
  [fuelTypes.DIESEL]: "Дизель",
};

export const bodyTypesLang = {
  [bodyTypes.SEDAN]: "Седан",
  [bodyTypes.CABRIO]: "Кабриолет",
  [bodyTypes.PICKUP]: "Пикап",
  [bodyTypes.MPV]: "Минивэн",
  [bodyTypes.SUV]: "Кроссовер",
  [bodyTypes.ESTATE]: "Универсал",
  [bodyTypes.HATCH]: "Хэтчбек",
};

export const gearboxTypesLang = {
  [gearboxTypes.AMT]: "Робот",
  [gearboxTypes.AT]: "Автоматическая",
  [gearboxTypes.MT]: "Механическая",
  [gearboxTypes.CVT]: "Вариатор",
};

export const autoDescLang = {
  brand: "Марка",
  model: "Модель",
  year: "Год выпуска",
  fuel: "Двигатель",
  bodyType: "Кузов",
  price: "Цена",
  mileage: "Пробег",
  gearbox: "Коробка",
  image: "Фото",
  priceFrom: "Цена от",
  priceTo: "до",
  mileageFrom: "Пробег от, км",
  mileageTo: "до",
  yearFrom: "Год от",
  yearTo: "до",
  km: "км",
};

export const uiLang = {
  show: "Показать",
  clear: "Очистить",
  catalog: "Каталог",
  search: "Поиск",
  filter: "Фильтр",
  notFound: "Ничего не найдено",
  brandOrModel: "Марка или модель",
  sortYearAsc: "Год по возрастанию",
  sortYearDesc: "Год по убыванию",
  sortPriceAsc: "Цена по возрастанию",
  sortPriceDesc: "Цена по убыванию",
  sortMileageAsc: "Пробег по возрастанию",
  sortMileageDesc: "Пробег по убыванию",
  sort: "Сортировка",
};
