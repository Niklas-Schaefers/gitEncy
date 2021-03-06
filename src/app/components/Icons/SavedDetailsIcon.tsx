import React from "react";
import { useLocation } from "react-router-dom";

function SavedDetailsIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  const currentPath = useLocation().pathname;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33.657"
      height="25.243"
      viewBox="0 0 33.657 25.243"
      {...props}
    >
      <path
        id="PROFILE"
        d="M35.752,11.318H33.4V7.787l-4.859-.075.025,3.606h-14.6l.1-3.606-4.758.075v3.606l-2.4-.075a2.4,2.4,0,0,0-2.4,2.4V30.551a2.4,2.4,0,0,0,2.4,2.4H35.752a2.4,2.4,0,0,0,2.4-2.4V13.722A2.4,2.4,0,0,0,35.752,11.318Zm-6.01-2.4h2.4v4.808h-2.4ZM14.115,17.1c1.452,0,2.63,1.547,2.63,3.456s-1.178,3.456-2.63,3.456-2.63-1.547-2.63-3.456,1.178-3.456,2.63-3.456ZM10.509,8.914h2.4v4.808h-2.4Zm-1.6,19.17s.285-2.286.933-2.718a9.219,9.219,0,0,1,2.512-.719s1.209,1.292,1.724,1.292S15.8,24.648,15.8,24.648a9.191,9.191,0,0,1,2.513.719c.761.507.951,2.718.951,2.718H8.907Zm24.441-1.14H22.529v-1.2H33.348Zm0-2.4H22.529v-1.2H33.348Zm0-2.4H22.529v-1.2H33.348Zm0-2.4H22.529v-1.2H33.348Z"
        transform="translate(-4.499 -7.712)"
        fill={
          currentPath === "/savedresults"
            ? "var(--tertiary-bg-color)"
            : "var(--details-color)"
        }
      />
    </svg>
  );
}

export default SavedDetailsIcon;
