import * as React from "react";

const SvgSearchNormal = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

export default SvgSearchNormal;
