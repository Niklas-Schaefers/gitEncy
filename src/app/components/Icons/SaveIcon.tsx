import React from "react";

function SaveIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      viewBox="0 0 27 27"
      {...props}
    >
      <path
        id="Icon_awesome-save"
        data-name="Icon awesome-save"
        d="M26.153,8.153,21.1,3.1a2.893,2.893,0,0,0-2.046-.847H2.893A2.893,2.893,0,0,0,0,5.143V26.357A2.893,2.893,0,0,0,2.893,29.25H24.107A2.893,2.893,0,0,0,27,26.357V10.2a2.893,2.893,0,0,0-.847-2.046ZM13.5,25.393a3.857,3.857,0,1,1,3.857-3.857A3.857,3.857,0,0,1,13.5,25.393ZM19.286,7.04V13.1a.723.723,0,0,1-.723.723H4.58a.723.723,0,0,1-.723-.723V6.83a.723.723,0,0,1,.723-.723H18.353a.723.723,0,0,1,.511.212l.21.21a.723.723,0,0,1,.212.511Z"
        transform="translate(0 -2.25)"
      />
    </svg>
  );
}

export default SaveIcon;
