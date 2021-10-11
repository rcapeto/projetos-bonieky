import { FunctionComponent } from 'react';
import { Item } from '../../types';
import { TableLine, TableColumn, Category, Value } from './styles';
import { categories } from '../../data/categories';
import { formatDate } from '../../helpers/dateFilter';

interface Props {
   item: Item
};

export const TableItem: FunctionComponent<Props> = ({ item }) => {
   const formatValue = (value: number) => {
      return value.toLocaleString('pt-BR', {
         currency: 'BRL',
         style: 'currency'
      });
   };

   const categoryName = categories[item.category].title;
   const categoryColor = categories[item.category].color;
   const isExpense = categories[item.category].expense;

   return(
      <TableLine>
         <TableColumn>{formatDate(item.date)}</TableColumn>
         <TableColumn>
            <Category color={categoryColor}>
               {categoryName}
            </Category>
         </TableColumn>
         <TableColumn>{item.title}</TableColumn>
         <TableColumn>
            <Value color={isExpense ? 'red' : 'green'}>
               {formatValue(item.value)}
            </Value>
         </TableColumn>
      </TableLine>
   );
};