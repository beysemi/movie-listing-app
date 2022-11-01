import styled from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(80px);
    border-radius: 12px;
    padding: 8px;
    height: 100%;
`;
export const CardHead = styled.div`
    position: relative;
`;
export const CardImg = styled.img`
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: auto;
    ${up('lg')}{
        height: 460px;
        object-fit: cover;
    }
`;
export const CardBody = styled.div`
    margin-top: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const CardActions = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: auto;
`;
export const CardAction = styled.button`
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
`;
export const CardTitle = styled.h4`
    color: white;
    font-size: 18px;
    line-height: 28px;
    min-height: 56px;
`;
export const CardRating = styled.div`
    position: absolute;
    top:8px;
    left: 8px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    color: #FFAD49;
    svg{
        margin-right: 4px;
    }
`;