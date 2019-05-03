import React from 'react';

const GearIcon = props => (
  <svg
    className={`icon icon-gear ${props.class}`}
    role="img"
    viewBox="0 0 14 16"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    aria-hidden="true"
    focusable="false"
  >
    <title>Gear icon</title>
    <path
      fill={props.fill}
      d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  </svg>
);

export default GearIcon;