import styled from 'styled-components';
import {up} from 'styled-breakpoints';

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.slider.titleColor};
    font-size: 32px;
    margin-left: 12px;
    margin-bottom: 16px;
    ${up('lg')} {
        margin-bottom:24px;
        margin-left:16px;
    }
`;
export const Section = styled.section`
    position:relative;
    padding: 24px 0;
    ${up('lg')} {
        padding: 48px 0;
    }
`;
