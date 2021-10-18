import styled from "styled-components";

export const Container = styled.div`
   background-color: #3d3f43;
   border-radius: 10px;
   padding: 10px;
   display: flex;
   flex-direction: column;
   gap: 10px;

   img {
      max-width: 100%;
      display: block;
      max-height: 200px;
      object-fit: contain;
      border-radius: 10px;
   }
`;