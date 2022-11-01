import * as React from "react";

const SvgLogout = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.44 14.62 20 12.06 17.44 9.5M9.76 12.06h10.17M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
      stroke="#767E94"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

export default SvgLogout;
