import styled from "styled-components";

export const Container = styled.div`
   background-color: #27282F;
   color: #fff;
   min-height: 100vh;
`;


export const Area = styled.div`
   margin: auto;
   max-width: 980px;
   padding: 30px 5px;
`;

export const Header = styled.h1`
   text-align: center;
   margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
   text-align: center;

   .emoji {
      font-size: 50px;
      margin-bottom: 20px;
   }
`;

export const UploadArea = styled.form`
   background-color: #3d3f43;
   padding: 15px;
   border-radius: 10px;
   margin-bottom: 30px;
   display: flex;
   align-items: center;
   gap: 20px;

   button {
      background-color: #756df4;
      border: 0;
      color: #fff;
      padding: 8px 16px;
      display: flex;
      border-radius: 10px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      transition: filter ease .6s;

      &:hover {
         filter: brightness(.8);
      }
   }

`;

export const PhotosList = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 10px;
`;