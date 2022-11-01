import styled from "styled-components";
import {up} from "styled-breakpoints"

export const NotFoundSection = styled.section`
    position: relative;
    margin-bottom: 48px;
`
export const NotFoundGif = styled.div`
    ${up('xl')} {
       max-width: 1048px;
        margin-left: auto;
        margin-right: auto;
        height: 389px;
        position: fixed;
        bottom: 0px;
        right: 0px;
        z-index: 8;
        left: calc(50% - 100px);
        background: url(404.gif) no-repeat right bottom;
    }
`
export const NotFoundImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h3{
        color: #EBEEF5;
    }
    p{
        color: #8E95A9;
    }
`