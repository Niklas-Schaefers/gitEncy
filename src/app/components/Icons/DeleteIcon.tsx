import React from "react";

function DeleteIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      viewBox="0 0 22.556 29"
      {...props}
    >
      <path
        id="Icon_material-delete-forever"
        data-name="Icon material-delete-forever"
        d="M9.111,30.278A3.232,3.232,0,0,0,12.333,33.5H25.222a3.232,3.232,0,0,0,3.222-3.222V10.944H9.111Zm3.963-11.471,2.272-2.272,3.432,3.416,3.416-3.416,2.272,2.272-3.416,3.416,3.416,3.416-2.272,2.272-3.416-3.416-3.416,3.416-2.272-2.272,3.416-3.416Zm11.342-12.7L22.806,4.5H14.75L13.139,6.111H7.5V9.333H30.056V6.111Z"
        transform="translate(-7.5 -4.5)"
      />
    </svg>
  );
}

export default DeleteIcon;
