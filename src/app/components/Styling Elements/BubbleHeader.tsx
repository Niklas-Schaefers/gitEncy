import React from "react";

function BubbleHeader(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 428.001 150.762"
      {...props}
    >
      <path
        id="Intersection_2"
        data-name="Intersection 2"
        d="M-418.426,205.146V59.36h427v73.1c-21.679,17.759-40.951,30.453-40.951,30.453s-48.341,20.36-118.256,33.018c-47.279,8.56-110.572,11.281-152.175,10.486-38.193-.731-60.579.248-75,1.228-10.911.74-17.26,1.481-22.442,1.481C-406.146,209.121-410.534,208.161-418.426,205.146Z"
        transform="translate(418.926 -58.86)"
        fill="var(--secondary-bg-color)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default BubbleHeader;
