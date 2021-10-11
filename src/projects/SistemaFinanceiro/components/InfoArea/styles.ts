import styled from "styled-components";

export const Container = styled.div`
   background-color: #fff;
   box-shadow: 0 0 5px #ccc;
   border-radius: 10px;
   padding: 20px;
   margin-top: -60px;
   display: flex;
   align-items: center;
   gap: 20px;
`;


export const MonthArea = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

export const MonthArrow = styled.div`
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   font-size: 25px;
   transition: filter ease .6s;

   &:hover {
      filter: brightness(.8)
   }
`;

export const MonthDisplay = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
`;


export const ResumeArea = styled.div`
   flex: 2;
   display: flex;
   align-items: center;
`;