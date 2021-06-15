import React from "react";
import styles from "./Bubbles.module.css";

function BubbleFooter(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 428 82.385"
      {...props}
      className={styles.BubbleFooter}
    >
      <path
        id="Intersection_2"
        data-name="Intersection 2"
        d="M-407.939,124.238V45.683c15.474-.016,32.323.636,50.714,1.288,19.449.689,40.616,1.379,63.687,1.279,39.023-.17,56.849,1.383,72.912,2.937,18.082,1.748,33.931,3.5,75.269,2.788C-67.3,52.638-103.584,49.479,18.7,42.9l.36-.019v81.358Z"
        transform="translate(408.439 -42.353)"
        fill="#14005a"
        stroke-width="1"
      />
    </svg>
  );
}

export default BubbleFooter;
