import db from "../../../db.json";
import { Order } from "../OrderModel";

export const ordersMock: Order[] = [
  {
    id: 1674051844793,
    price: 79.92,
    products: [{ product: db["products"][0], quantity: 3 }],
    user: {
      firstname: "Anna",
      lastname: "Nowak",
      email: "adsd@wrap.pl",
      postcode: "34-344",
      city: "Warszawa",
      street: "Dolna",
      housenumber: 56,
    },
  },
  {
    id: 1674047733104,
    price: 29.99,
    products: [
      { product: db["products"][1], quantity: 3 },
      { product: db["products"][2], quantity: 1 },
    ],
    user: {
      firstname: "Katarzyna",
      lastname: "Raszyńska",
      email: "adsd@23.pl",
      postcode: "34-342",
      city: "Krynica Zdrój",
      street: "Jesionowa",
      housenumber: 12,
    },
  },
  {
    id: 1674051773691,
    price: 17.5,
    products: [
      { product: db["products"][5], quantity: 1 },
      { product: db["products"][4], quantity: 1 },
      { product: db["products"][1], quantity: 2 },
    ],
    user: {
      firstname: "Filip",
      lastname: "Kowalski",
      email: "filipkowals@23.pl",
      postcode: "52-22",
      city: "Dąbrowa Górnicza",
      street: "Kwiecista",
      housenumber: 1,
    },
  },
];
