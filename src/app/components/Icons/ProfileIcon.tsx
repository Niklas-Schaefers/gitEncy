import React from "react";
import { useLocation } from "react-router-dom";

function ProfileIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  const currentPath = useLocation().pathname;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.236"
      height="30.241"
      viewBox="0 0 70.27 76.59"
      {...props}
    >
      <path
        d="M-1492.135,73.119c7.241-7.854,25.174-11.84,35.135-11.84s27.893,3.986,35.135,11.84A44.918,44.918,0,0,1-1457,90,44.918,44.918,0,0,1-1492.135,73.119Zm15.987-40.562A19.2,19.2,0,0,1-1457,13.41a19.2,19.2,0,0,1,19.147,19.147A19.2,19.2,0,0,1-1457,51.705,19.2,19.2,0,0,1-1476.148,32.557Z"
        transform="translate(1492.135 -13.41)"
        fill={
          currentPath === "/profile"
            ? "var(--tertiary-bg-color)"
            : "var(--details-color)"
        }
      />
    </svg>
  );
}

export default ProfileIcon;
