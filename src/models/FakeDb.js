import { Burger } from "./Burgers.js";

export const FakeDb = {
  burgers: [
    new Burger({
      name: 'Double Double 💗 Stopper',
      price: 11,
      ingredients: ['meat', 'bread', 'cheese']

    })
  ]
}
