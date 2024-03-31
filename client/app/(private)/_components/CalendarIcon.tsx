import { SVGProps } from 'react';

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5m"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 19V8H5v11zM16 1h2v2h1a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8zm0 11.5v2H8v-2z"
      ></path>
    </svg>
  );
}
