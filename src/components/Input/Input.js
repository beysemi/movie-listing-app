import React from "react";
import * as Icons from "../Icons";
import {InputContainer, InputElement} from'./style'

const Input = ({
  leftIcon,
  rightIcon,
  labelText,
  type,
  name,
  placeholder = "Label",
  onChange,
  value
}) => {
  return (
    <>
      <InputContainer>
        {leftIcon}
        <InputElement type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        {rightIcon}
      </InputContainer>
    </>
  );
};

export default Input;
