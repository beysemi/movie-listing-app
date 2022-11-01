import React from "react";
import * as Icons from "../Icons";
import {ButtonElement} from "./style"


ButtonElement.defaultProps = {
  variant: "primary",
};
const Button = ({ leftIcon, rightIcon, text, type, name }) => {
  return (
    <ButtonElement type={type} name={name}>
      {leftIcon}
      {text}
      {rightIcon}
    </ButtonElement>
  );
};

export default Button;
