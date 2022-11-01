import * as React from "react";

const SvgPlaceholder = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.861 5.5 4.207-2.64c1.99-1.248 4.572.188 4.572 2.543v13.194c0 2.355-2.582 3.79-4.572 2.542L12 18.587"
      stroke="#8E95A9"
      strokeWidth={1.5}
      {...props}
    />
    <path
      d="M18.446 9.458 7.93 2.86c-1.99-1.249-4.572.187-4.572 2.542v13.194c0 2.355 2.582 3.79 4.572 2.542l10.515-6.597c1.871-1.174 1.871-3.91 0-5.084Z"
      stroke="#8E95A9"
      strokeWidth={1.5}
      {...props}
    />
  </svg>
);

export default SvgPlaceholder;
