import {Pizza} from '../model/pizza';

export const pizze: Pizza[] = [
  {
    name: 'Marinara',
    ingredients: ['tomato', 'basil', 'garlic', 'oregano'],
    price: 9,
    veganFriendly: true,
  },
  {
    name: 'Napolitana',
    ingredients: ['tomato', 'mozzarella', 'anchovies', 'oregano'],
    price: 11,
    veganFriendly: false,
  },
  {
    name: 'Margherita',
    ingredients: ['tomato', 'mozzarella', 'basil'],
    price: 9,
    veganFriendly: false,
  },
  {
    name: 'Regina',
    ingredients: ['tomato', 'mozzarella', 'prosciutto', 'mushroom'],
    price: 9,
    veganFriendly: false,
  },
  {
    name: 'Antonia',
    ingredients: ['cherry tomato', 'mozzarella', 'olive', 'mushroom', 'rocket'],
    price: 9,
    veganFriendly: true,
  },
];
