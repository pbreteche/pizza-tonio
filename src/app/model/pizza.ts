export class Topping {
  name: string;
}

export class Pizza {
  name: string;
  toppings: Topping[] = [];
  price: number;
  veganFriendly: boolean;
}
