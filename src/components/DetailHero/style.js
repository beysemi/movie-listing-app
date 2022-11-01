import styled from 'styled-components'
import {up, down} from 'styled-breakpoints'

export const Hero = styled.section`
  ${up('lg')} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`
export const HeroImage = styled.img`
  ${up('lg')} {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    opacity: 0.8;
  }
  ${up('xxl')} {
    max-height: 500px;
  }
`
export const HeroBody = styled.div`

  margin-top: -48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  ${up('lg')} {
    padding: 0 78px;
    margin-top: -72px;
    max-width: 560px;
    margin-bottom: 0;
  }
`
export const HeroDetail = styled.div`
  padding:20px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(24px);
  border-radius: 24px;
  ${up('lg')} {
    padding:40px;
    max-width: 560px;
  }
`


export const HeroBreadcrumb = styled.a`
  color: #BEB7FB;
  font-size: 12px;
  line-height: 16px;
`
export const HeroTitle = styled.h3`
  color:#EBEEF5;
`