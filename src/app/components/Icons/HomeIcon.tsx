import React from "react";

function HomeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="33"
      viewBox="0 0 30 33"
      {...props}
    >
      <g id="HOME" transform="translate(1.5 1.5)">
        <path
          d="M4.5,13.5,18,3,31.5,13.5V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3Z"
          transform="translate(-4.5 -3)"
          fill="none"
          stroke="var(--details-color)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M13.5,33V18h9V33"
          transform="translate(-4.5 -3)"
          fill="none"
          stroke="var(--details-color)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

export default HomeIcon;
