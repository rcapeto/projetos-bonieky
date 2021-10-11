import { FunctionComponent } from 'react';

import { Container, Title, Info } from './styles';

interface Props {
   value: number;
   title: string;
   color?: string;
};

export const ResumeItem: FunctionComponent<Props> = ({ value, title, color }) => {
   const formatValue = (value: number) => {
      return value.toLocaleString('pt-BR', {
         currency: 'BRL',
         style: 'currency'
      });
   };
   
   return(
      <Container>
         <Title>{title}</Title>
         <Info color={color ?? '#000'}>{formatValue(value)}</Info>
      </Container>
   );
};