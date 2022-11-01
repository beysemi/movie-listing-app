import * as React from "react";

const SvgThankyou = (props) => (
  <svg
    width={120}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M99.3 40.458c0 .75 0 1.5-.05 2.2-7.65-2.85-16.65-1.1-22.65 4.3-4.05-3.65-9.3-5.7-14.9-5.7-12.3 0-22.3 10.05-22.3 22.45 0 14.15 7.1 24.5 13.9 31.2-.55-.05-1-.15-1.4-.3-12.95-4.45-41.9-22.85-41.9-54.15 0-13.8 11.1-24.95 24.8-24.95 8.15 0 15.35 3.9 19.85 9.95 4.55-6.05 11.75-9.95 19.85-9.95 13.7 0 24.8 11.15 24.8 24.95Z"
      fill="url(#thankyou_svg__a)"
      {...props}
    />
    <path
      d="M90 47.95c-5.35 0-10.2 2.6-13.2 6.6-3-4-7.8-6.6-13.2-6.6-9.1 0-16.5 7.4-16.5 16.6 0 3.55.55 6.799 1.55 9.799 4.7 14.85 19.15 23.7 26.3 26.151 1 .35 2.65.35 3.7 0 7.15-2.45 21.6-11.301 26.3-26.151 1-3.05 1.55-6.3 1.55-9.8 0-9.2-7.4-16.6-16.5-16.6Z"
      fill="url(#thankyou_svg__b)"
      {...props}
    />
    <defs>
      <linearGradient
        id="thankyou_svg__a"
        x1={54.65}
        y1={15.508}
        x2={54.65}
        y2={94.908}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF33F7" />
        <stop offset={0.503} stopColor="#B66DFF" />
        <stop offset={1} stopColor="#7B6EF6" />
      </linearGradient>
      <linearGradient
        id="thankyou_svg__b"
        x1={76.8}
        y1={47.949}
        x2={76.8}
        y2={100.762}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF33F7" />
        <stop offset={0.503} stopColor="#B66DFF" />
        <stop offset={1} stopColor="#7B6EF6" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgThankyou;
