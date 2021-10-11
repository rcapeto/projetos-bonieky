import styled from "styled-components";

export const Container = styled.div`
   border-radius: 10px;
   padding: 20px;
   background-color: #ffffff;
   box-shadow: 0 0 5px #ccc;
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

export const Input = styled.input`
   background-color: #ffffff;
   box-shadow: 0 0 5px #ccc;
   width: 100%;
   padding: 10px;
   border: 0;
`;

export const Label = styled.label`
   font-size: 16px;
   font-weight: 200;
   color: #000;
`;

export const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
`;

export const InputWrapperSide = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`;

export const Select = styled.select`
   width: 100%;
   background-color: #ffffff;
   box-shadow: 0 0 5px #ccc;
   width: 100%;
   padding: 10px;
   border: 0;
`;

export const Button = styled.button`
   background-color: darkblue;
   color: #ffffff;
   font-size: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 12px 8px;
   border-radius: 10px;
   width: 100%;
   max-width: 200px;
   margin: 0 auto;
   border: 0;
   box-shadow: 0 0 5px #ccc;
   transition: filter .6s ease;

   &:hover {
      filter: brightness(.8)
   }
`;