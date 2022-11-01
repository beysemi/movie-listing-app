import styled from "styled-components";

const Svg = styled.svg`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    path{
        fill: ${({fill}) => fill};
        stroke: ${({stroke}) => stroke} ;
    }
`;

export default Svg;