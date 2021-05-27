export const fuelTypes = {
  DIESEL: "diesel",
  PETROL: "petrol",
  ELECTRIC: "electric",
  HYBRID: "hybrid",
};

export const bodyTypes = {
  HATCH: "Hatchback",
  ESTATE: "Estate",
  SUV: "SUV",
  SEDAN: "Sedan",
  MPV: "MPV",
  PICKUP: "PICKUP",
  CABRIO: "CABRIO",
};

export const gearboxTypes = {
  MT: "MT",
  AMT: "AMT",
  AT: "AT",
  CVT: "CVT",
};

export const collection = [
  {
    brand: "Volkswagen",
    model: "Passat",
    year: 2017,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.SEDAN,
    price: 27000,
    mileage: 65000,
    gearbox: gearboxTypes.AMT,
    image:
      "https://s.auto.drom.ru/i24207/c/photos/generations/500x_volkswagen_passat_g3682.jpg",
  },
  {
    brand: "BMW",
    model: "3 series 320i",
    year: 2021,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.SEDAN,
    price: 30000,
    mileage: 3800,
    gearbox: gearboxTypes.AT,
    image:
      "https://ii.drivenn.ru/itumyv8uhqqqi_2epstu_h-1000/bmw-3-series-foto-1.jpeg",
  },
  {
    brand: "Mercedes-Benz",
    model: "E-Class E220d",
    year: 2020,
    fuel: fuelTypes.DIESEL,
    bodyType: bodyTypes.ESTATE,
    price: 39000,
    mileage: 14000,
    gearbox: gearboxTypes.AT,
    image:
      "https://parkers-images.bauersecure.com/Scale/pagefiles/247334/cut-out/450x300/mercedes-benz-e-class.jpg",
  },
  {
    brand: "Peugeot",
    model: "308",
    year: 2015,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.HATCH,
    price: 15000,
    mileage: 97000,
    gearbox: gearboxTypes.MT,
    image:
      "https://s.auto.drom.ru/i24198/c/photos/fullsize/peugeot/308/peugeot_308_543193.jpg",
  },
  {
    brand: "Toyota",
    model: "Prius",
    year: 2014,
    fuel: fuelTypes.HYBRID,
    bodyType: bodyTypes.HATCH,
    price: 17000,
    mileage: 120000,
    gearbox: gearboxTypes.CVT,
    image:
      "https://avtoved.news/images/gallery/cars/toyota/prius/2014/smart_thumbs/Toyota-Prius-2014-01_thumb_large1280_0.jpg",
  },
  {
    brand: "Tesla",
    model: "Model X",
    year: 2019,
    fuel: fuelTypes.ELECTRIC,
    bodyType: bodyTypes.SUV,
    price: 78000,
    mileage: 30000,
    gearbox: gearboxTypes.AT,
    image: "https://a.d-cd.net/wYAAAgLILuA-960.jpg",
  },
  {
    brand: "Honda",
    model: "Odyssey",
    year: 2014,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.MPV,
    price: 32000,
    mileage: 180000,
    gearbox: gearboxTypes.AT,
    image: "https://volga-rast.ru/images/news/Honda/honda-odyssey-2014.jpg",
  },
  {
    brand: "Ford",
    model: "F-150",
    year: 2014,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.PICKUP,
    price: 50000,
    mileage: 250000,
    gearbox: gearboxTypes.MT,
    image:
      "https://s.auto.drom.ru/i24251/c/photos/fullsize/ford/f150/ford_f150_980747.jpg",
  },
  {
    brand: "Audi",
    model: "R8 Spyder V10",
    year: 2017,
    fuel: fuelTypes.PETROL,
    bodyType: bodyTypes.CABRIO,
    price: 120000,
    mileage: 7500,
    gearbox: gearboxTypes.MT,
    image:
      "https://cartechnic.ru/img/news/1/1966/audi_r8_spyder_2017_chto_stoit_ozhidat1.jpg",
  },
];
