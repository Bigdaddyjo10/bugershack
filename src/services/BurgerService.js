import { FakeDb } from "../models/FakeDb.js";

const Dbburgers = [
  {
    name: 'members',
    price: 10
  },
  {
    name: 'bugzilla',
    price: 300
  },

]


class BurgerService {

  getBurger() {
    const burger = Dbburgers
    return burger
  }
}


export const burgerService = new BurgerService()
