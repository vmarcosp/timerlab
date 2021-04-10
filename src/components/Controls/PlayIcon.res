@react.component
let make = (~color) =>
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16.5" cy="16.5" r="15.5" stroke=color strokeWidth="2" />
    <path d="M23 15.6316L13 9V23L23 15.6316Z" fill=color />
  </svg>
