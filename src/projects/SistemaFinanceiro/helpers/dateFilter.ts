import { Item } from '../types';

const months = [
   'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
   'Outubro', 'Novembro', 'Dezembro'
];

const getCurrentMonth = () => {
   const now = new Date();
   return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

const filterListByMonth = (list: Item[], date: string): Item[] => {
   const [year, month] = date.split('-');

   return list.filter(item => {
      const itemDateYear = item.date.getFullYear();
      const itemDateMonth = item.date.getMonth() + 1;
      return (itemDateYear === +year && itemDateMonth === +month) ? true : false;
   });
};

const formatDate = (date: Date): string => {
   const year = date.getFullYear();
   const month = date.getMonth() + 1;
   const day = date.getDate();
   return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
};

const addZeroToDate = (value: number): string => {
   return String(value).padStart(2, '0')
};

const formatCurrentMonth = (currentMonth: string): string => {
   const [year, month] = currentMonth.split('-');
   return `${months[+month - 1]} ${year}`;

};

export {
   getCurrentMonth,
   filterListByMonth,
   formatDate,
   formatCurrentMonth
};