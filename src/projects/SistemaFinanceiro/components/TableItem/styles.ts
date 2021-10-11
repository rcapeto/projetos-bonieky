import styled from "styled-components";

interface ColorProps {
   color: string;
};

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
   padding: 10px 0;
`;

export const Category = styled.div<ColorProps>`
   display: inline-block;
   padding: 5px 10px;
   border-radius: 5px;
   color: #fff;
   background-color: ${props => props.color}
`;

export const Value = styled.div<ColorProps>`
   color: ${props => props.color}
`;