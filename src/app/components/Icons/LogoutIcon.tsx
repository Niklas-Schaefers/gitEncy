import React from "react";

function LogoutIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="24"
      viewBox="0 0 32.571 28.5"
    >
      <path
        data-name="Icon open-account-logout"
        d="M12.214,0V4.071H28.5V24.429H12.214V28.5H32.571V0ZM8.143,8.143,0,14.25l8.143,6.107V16.286H24.429V12.214H8.143Z"
        fill="var(--text-color)"
      />
    </svg>
  );
}

export default LogoutIcon;
