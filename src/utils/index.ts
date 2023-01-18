import { Order } from "../models/OrderModel";

export function incrementInput() {
  console.log("increment");
}
export function decrementInput() {
  console.log("decrement");
}
export function getDate(id: number) {
  const date = new Date(id);
  let day: string | number;
  let month: string | number;
  let year: number;

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  const str = day + "." + month + "." + year;

  return str;
}

export function sortOrdersByDate(orders: Order[]) {
  orders.sort(function (a, b) {
    return b.id - a.id;
  });

  return orders;
}
