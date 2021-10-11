import { FunctionComponent } from 'react';
import { Item } from '../../types';
import { Table, TableHeadColumn } from './styles';
import { TableItem } from '../TableItem';

type Props = {
   list: Item[];
};

export const TableArea: FunctionComponent<Props> = ({ list }) => {
   return(
      <Table>
         <thead>
            <tr>
               <TableHeadColumn width={100}>Data</TableHeadColumn>
               <TableHeadColumn width={130}>Categoria</TableHeadColumn>
               <TableHeadColumn>Título</TableHeadColumn>
               <TableHeadColumn width={150}>Valor</TableHeadColumn>
            </tr>
         </thead>
         <tbody>
            {
               list.map((item, index) => <TableItem key={String(index)} item={item}/>)
            }
         </tbody>
      </Table>
   );
};