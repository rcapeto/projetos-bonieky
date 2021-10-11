import { useState, useEffect, useMemo } from 'react';

import * as StyledComponent from './App.styles';

import { Categories, Item } from './types';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

export default function SistemaFinanceiro() {
   const [list, setList] = useState<Item[]>(items);
   const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
   const [filteredList, setFilteredList] = useState<Item[]>([]);

   document.title = 'Sistema Financeiro';

   useEffect(() => {
      setFilteredList(filterListByMonth(list, currentMonth))
   }, [list, currentMonth]);

   function handleMonthChange(newMonth: string) {
      setCurrentMonth(newMonth);
   }

   const values = useMemo(() => {
      let income = 0;
      let expensive = 0;

      for(const item of filteredList) {
         (categories[item.category].expense) ? expensive += item.value : income += item.value;
      }

      return { income, expensive };

   }, [filteredList]);

   const handleAddItem = (item: Item) => {
      setList([...list, item]);
   };

   return(
      <StyledComponent.Container>
         <StyledComponent.Header>
            <StyledComponent.HeaderText>
               Sistema Financeiro
            </StyledComponent.HeaderText>
         </StyledComponent.Header>

         <StyledComponent.Body>
            <InfoArea 
               values={values}
               currentMonth={currentMonth}
               onMonthChange={handleMonthChange}
            />

            <InputArea 
               onAdd={handleAddItem}
            />

            <TableArea list={filteredList}/>
         </StyledComponent.Body>
      </StyledComponent.Container>
   );
}