@react.component
let make = (~className, ~color) =>
  <svg
    className
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1L2 10L11 19" stroke=color strokeWidth="2" strokeLinecap="round" />
    <path d="M20 1L11 10L20 19" stroke=color strokeWidth="2" strokeLinecap="round" />
  </svg>
