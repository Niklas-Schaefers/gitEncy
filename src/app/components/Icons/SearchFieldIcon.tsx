import React from "react";
import { useLocation } from "react-router-dom";

function SearchFieldIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  const currentPath = useLocation().pathname;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.236"
      height="30.241"
      viewBox="0 0 30.236 30.241"
      {...props}
    >
      <path
        id="SEARCH"
        d="M29.825,26.145l-5.888-5.888a1.416,1.416,0,0,0-1-.413H21.97a12.279,12.279,0,1,0-2.126,2.126v.963a1.416,1.416,0,0,0,.413,1l5.888,5.888a1.412,1.412,0,0,0,2,0l1.671-1.671a1.424,1.424,0,0,0,.006-2.008Zm-17.541-6.3a7.56,7.56,0,1,1,7.56-7.56A7.555,7.555,0,0,1,12.284,19.844Z"
        fill={
          currentPath === "/search"
            ? "var(--tertiary-bg-color)"
            : "var(--details-color)"
        }
      />
    </svg>
  );
}

export default SearchFieldIcon;
