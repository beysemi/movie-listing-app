import styled from "styled-components"
import {up, down} from "styled-breakpoints"

export const MovieSection = styled.section`
  padding: 48px 0 ;

  ${up('lg')} {
    padding: 32px 0;
    margin-top: 250px;
    background-color: rgba(18, 24, 41, 0.7);
    border-radius: 25px;
  }
  ${up('xl')} {
    margin-top: 300px;
  }
  ${up('xxl')} {
    margin-top: 300px;
  }
`
export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  max-height:350px;
  border-radius:24px;
  margin-bottom: 32px;
  ${up('lg')} {
    max-height:unset;
  }

`
export const MovieDetail = styled.div`

`
export const MovieTitle = styled.h3`
  color:#fff;
  margin-bottom: 24px;
  
`
export const MovieText = styled.p`
  color:#8E95A9;
  margin-bottom: 24px;
`

export const MovieRank = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  color: #FFAD49;
  margin-bottom: 24px;
  svg{
      margin-right: 4px;
  }
`
export const MovieDetailBox = styled.div`
  color:#8E95A9;
  margin-bottom: 24px;
  h6{
    color:#fff;
    ${down('lg')} {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  ul{
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    li + li{
      margin-left: 16px;
    }
  }
`
