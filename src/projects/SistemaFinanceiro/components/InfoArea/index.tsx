import { FunctionComponent } from 'react';

import { Container, MonthArea, MonthArrow, MonthDisplay, ResumeArea } from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

interface Props {
   currentMonth: string;
   onMonthChange: (newMonth: string) => void;
   values: {
      income: number;
      expensive: number;
   };
};

export const InfoArea: FunctionComponent<Props> = ({ currentMonth, onMonthChange, values }) => {
   const handlePrevMonth = () => {
      const [year, month] = currentMonth.split('-');
      const currentDate = new Date(+year, +month - 1, 1); //`${year}/${month}/1`
      currentDate.setMonth(currentDate.getMonth() - 1);
      onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
   };

   const handleNextMonth = () => {
      const [year, month] = currentMonth.split('-');
      const currentDate = new Date(+year, +month - 1, 1); //`${year}/${month}/1`
      currentDate.setMonth(currentDate.getMonth() + 1);
      onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
   };

   return(
      <Container>
         <MonthArea>
            <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
            <MonthDisplay>{formatCurrentMonth(currentMonth)}</MonthDisplay>
            <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
         </MonthArea>
         <ResumeArea>
            <ResumeItem title="Receitas" value={values.income}/>
            <ResumeItem title="Despesas" value={values.expensive}/>
            <ResumeItem 
               title="Balanço" 
               value={values.income - values.expensive} 
               color={(values.income - values.expensive) < 0 ? 'red' : 'green'}
            />
         </ResumeArea>
      </Container>
   );
};