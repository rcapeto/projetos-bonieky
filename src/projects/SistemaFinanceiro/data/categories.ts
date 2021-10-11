import { Categories } from '../types';

export const categories: Categories = {
   food: {
      title: 'Alimentação',
      color: 'blue',
      expense: true
   },
   rent: {
      title: 'Aluguel',
      color: 'brown',
      expense: true
   },
   salary: {
      color: 'green',
      title: 'Salário',
      expense: false
   },
   bill: {
      color: 'orange',
      title: 'Conta',
      expense: true
   },
   freela: {
      color: 'green',
      title: 'Trabalho',
      expense: false
   }
};