import * as React from "react";
const SvgAdd = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12h12M12 18V6"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

export default SvgAdd;
