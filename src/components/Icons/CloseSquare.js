import * as React from "react";

const SvgCloseSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.758 7.757 8.485 8.486M7.758 16.243l8.485-8.486"
      stroke="#8E95A9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

export default SvgCloseSquare;
