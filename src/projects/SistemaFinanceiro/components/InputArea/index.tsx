import { FunctionComponent, useState, ChangeEvent } from 'react';
import { Item } from '../../types';

import { Container, Input, Label, InputWrapper, InputWrapperSide, Select, Button } from './styles';
import { categories } from '../../data/categories';

interface Props {
   onAdd: (item: Item) => void;
};

const initialFormState = {
   title: '',
   date: '',
   category: '',
   value: ''
};

export const InputArea: FunctionComponent<Props> = ({ onAdd }) => {
   const [formState, setFormState] = useState(initialFormState);

   function handleSubmit() {
      let hasError = false;

      for(const [_, value] of Object.entries(formState)) {
         if(!value) hasError = true;
      }

      if(hasError) {
         window.alert('Por favor preencha todos os campos!');
         return;
      }

      const item: Item = {
         date: new Date(formState.date.replace(/\-/g, '/')),
         title: formState.title,
         category: formState.category,
         value: +formState.value
      };

      onAdd(item);
   };

   return(
      <Container>
         <InputWrapper>
            <Label>Título</Label>
            <Input 
               value={formState.title}
               onChange={({ target: { value }}) => setFormState({ ...formState, title: value })}
            />
         </InputWrapper>

         <InputWrapperSide>
            <InputWrapper>
               <Label>Data</Label>
               <Input 
                  type="date"
                  value={formState.date}
                  onChange={({ target: { value }}) => setFormState({ ...formState, date: value })}
               />
            </InputWrapper>
            <InputWrapper>
               <Label>Valor</Label>
               <Input 
                  type="number"
                  value={formState.value}
                  onChange={({ target: { value }}) => setFormState({ ...formState, value })}
               />
            </InputWrapper>
            <InputWrapper>
               <Label>Categorias</Label>
               <Select
                  onChange={({ target: { value }}) => setFormState({ ...formState, category: value })}
               >
                  {
                     Object.keys(categories).map((categoryName, index) => (
                        <option value={categoryName} key={String(index)}>
                           {categories[categoryName].title}
                        </option>
                     ))
                  }
               </Select>
            </InputWrapper>
         </InputWrapperSide>

         <Button onClick={handleSubmit}>Adicionar</Button>
      </Container>
   );
};