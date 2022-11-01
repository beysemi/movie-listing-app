import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 100%;
    height: 100%;
    &::after{
        content : "";
        background-color: #121829;
        opacity: 0.7;
        filter: blur(8px);
        position: fixed;
        inset: 0;
        z-index: -1;
    }
`
export const LoadingItem = styled.div`
   
`