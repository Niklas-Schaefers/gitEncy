import React from "react";

function FolderIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      viewBox="0 0 30.849 25.064"
      {...props}
    >
      <path
        id="Icon_metro-folder-open"
        data-name="Icon metro-folder-open"
        d="M27.635,30.849l5.784-15.424H8.355L2.571,30.849ZM6.427,13.5,2.571,30.849V5.784h8.676L15.1,9.64H27.635V13.5Z"
        transform="translate(-2.571 -5.784)"
        fill="var(--tertiary-bg-color)"
      />
    </svg>
  );
}

export default FolderIcon;
