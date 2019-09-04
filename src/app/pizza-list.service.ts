import { Injectable } from '@angular/core';
import {Pizza} from './model/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaListService {
  pizze: Pizza[] = [
    {
      name: 'Marinara',
      toppings: ['tomato', 'basil', 'garlic', 'oregano'],
      price: 9,
      veganFriendly: true,
    },
    {
      name: 'Napolitana',
      toppings: ['tomato', 'mozzarella', 'anchovies', 'oregano'],
      price: 11,
      veganFriendly: false,
    },
    {
      name: 'Margherita',
      toppings: ['tomato', 'mozzarella', 'basil'],
      price: 9,
      veganFriendly: false,
    },
    {
      name: 'Regina',
      toppings: ['tomato', 'mozzarella', 'prosciutto', 'mushroom'],
      price: 9,
      veganFriendly: false,
    },
    {
      name: 'Antonia',
      toppings: ['cherry tomato', 'mozzarella', 'olive', 'mushroom', 'rocket'],
      price: 9,
      veganFriendly: true,
    },
  ];

}
