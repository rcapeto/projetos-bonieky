import { FunctionComponent } from 'react';

import { Container } from './styles';

interface Props {
   name: string;
   url: string;
};

export const PhotoComponent: FunctionComponent<Props> = ({ name, url }) => {
   return(
      <Container>
        <img src={url} alt={name} />
        <p>{name}</p>
      </Container>
   );
};