import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing:0%;
        background-image: url('/bg.png');
        background-color: #121829;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    h1{
        font-size: 32px;
        line-height: 40px;
        font-weight: 600;
        @media screen and (min-width: 992px) {
            font-size: 64px;
            line-height: 80px;
        }
        
    }
    h2{
        font-size: 24px;
        line-height: 28px;
        line-height: 56px;
        font-weight: 600;
        letter-spacing: -2%;
        @media screen and (min-width: 992px) {
            font-size: 48px;
            line-height: 56px;
        }
    }
    h3{
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        letter-spacing: -2%;
        @media screen and (min-width: 992px) {
            font-size: 32px;
            line-height: 40px;
        }
    }
    h4{
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 24px;
            line-height: 32px;
        }
    }
    h5{
        font-size: 10px;
        line-height: 12px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 20px;
            line-height: 24px;
        }
        
    }
    h6{
        font-size: 8px;
        line-height: 12px;
        font-weight: 700;
        letter-spacing: -1.5%;
        @media screen and (min-width: 992px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    i{
        font-style: normal !important;
    }
    .no-scroll {
        overflow: hidden;
    }
    .slick-track{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
    }
    .slick-slide{
        height: auto;
        & > div{
            height: 100%;
        }
    }
    .slick-arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        background: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
       
    }
    .slick-disabled{
        visibility: hidden;
    }
    .slick-prev{
        left: 1%;
        &::before{
            content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 2L5 8L11 14' stroke='%230A0A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
        &:hover{
            background: #fff;
        }
    }
    .slick-next{
        right: 1%;
        &::before{
            content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 2L11 8L5 14' stroke='%230A0A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
        &:hover{
            background: #fff;
        }
    }
`;
export default GlobalStyle;

