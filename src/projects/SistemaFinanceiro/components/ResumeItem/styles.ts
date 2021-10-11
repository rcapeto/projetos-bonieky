import styled from "styled-components";

interface ColorProps {
   color: string;
};

export const Container = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Info = styled.div<ColorProps>`
   font-weight: bold;
   color: ${props => props.color};
`;

export const Title = styled.div`
   font-weight: bold;
   color: #888;
`;