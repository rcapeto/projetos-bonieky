import styled from "styled-components";

interface Props {
   width?: number;
}

export const Table = styled.table`
   width: 100%;
   background-color: #fff;
   padding: 20px;
   box-shadow: 0 0 5px #ccc;
   border-radius: 10px;
`;

export const TableHeadColumn = styled.th<Props>`
   padding: 10px 0;
   text-align: left;
   width: ${props => `${props.width}px` ?? 'auto'}
`;