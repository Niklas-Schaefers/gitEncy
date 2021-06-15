import React from "react";

function MainPinkBubble(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 415.349 199.366"
      {...props}
    >
      <path
        id="BUBBLE_GREY"
        data-name="BUBBLE GREY"
        d="M100.489,697.538c-33.624-18.922-25.754-44.363-36.441-90.292s-36.6-73.489-6.309-93.422S127.793,516.9,185.2,527.514s48.079,20.3,102.158,28.752,29.169-1.3,114.158,5.041S463.175,661.9,420.338,692.528,292.932,690,230.166,683.838,134.113,716.46,100.489,697.538Z"
        transform="translate(-43.525 -505.965)"
        fill="var(--tertiary-bg-color)"
      />
    </svg>
  );
}

export default MainPinkBubble;
