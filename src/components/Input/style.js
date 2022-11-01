import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  border-radius: 12px;
  margin: 24px 0;
  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export  const InputElement = styled.input`
  background-color: ${({ theme }) => theme.input.backgroundColor};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.input.borderColor};
  border-radius: 12px;
  max-height: 64px;
  width: 100%;
  height: 64px;
  color: ${({ theme }) => theme.input.color};
  font-size: 16px;
  line-height: 24px;
  text-indent: 40px;
  transition: opacity 0.4s ease-in-out;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    opacity: 1;
  }
`;