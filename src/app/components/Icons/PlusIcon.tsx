import React from "react";

function PlusIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   width="15.75"
      //   height="15.75"
      viewBox="0 0 15.75 15.75"
      {...props}
    >
      <path
        id="PLUS_MINUS"
        data-name="PLUS MINUS"
        d="M14.625,8.438H9.563V3.375A1.125,1.125,0,0,0,8.438,2.25H7.313A1.125,1.125,0,0,0,6.188,3.375V8.438H1.125A1.125,1.125,0,0,0,0,9.563v1.125a1.125,1.125,0,0,0,1.125,1.125H6.188v5.063A1.125,1.125,0,0,0,7.313,18H8.438a1.125,1.125,0,0,0,1.125-1.125V11.813h5.063a1.125,1.125,0,0,0,1.125-1.125V9.563A1.125,1.125,0,0,0,14.625,8.438Z"
        transform="translate(0 -2.25)"
        fill="#ff6495"
      />
    </svg>
  );
}

export default PlusIcon;
