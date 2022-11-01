import styled from "styled-components";
import { up, down, between, only } from 'styled-breakpoints';

export const Section = styled.section`
  background-color: transparent;
  padding: 24px 0;
  text-align: center;
  ${up('lg')} {
    padding: 48px 0;
  }
`;
export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.hero.titleColor};
  margin-bottom: 16px;
  ${up('lg')} {
    margin-bottom: 24px;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.hero.textColor};
`;