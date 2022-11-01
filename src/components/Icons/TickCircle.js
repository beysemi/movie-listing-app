import * as React from "react";

const SvgTickCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.75 12 2.83 2.83 5.67-5.66"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

export default SvgTickCircle;
