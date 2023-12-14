import React from 'react';
import { IconProps } from 'types';

const MailIcon = ({ color, className }: IconProps) => {
  return (
    <svg 
      className={className}
      height="20" 
      width="20" 
      viewBox="0 0 30 30" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="white" d="M 17.507812 18.378906 C 16.761719 18.878906 15.894531 19.140625 15 19.140625 C 14.105469 19.140625 13.238281 18.878906 12.492188 18.378906 L 0.199219 10.183594 C 0.132812 10.140625 0.0664062 10.09375 0 10.042969 L 0 23.472656 C 0 25.011719 1.25 26.234375 2.761719 26.234375 L 27.238281 26.234375 C 28.777344 26.234375 30 24.984375 30 23.472656 L 30 10.042969 C 29.933594 10.09375 29.867188 10.140625 29.800781 10.183594 Z M 17.507812 18.378906 "/>
      <path fill="white" d="M 1.175781 8.722656 L 13.46875 16.917969 C 13.933594 17.226562 14.464844 17.382812 15 17.382812 C 15.535156 17.382812 16.066406 17.226562 16.53125 16.917969 L 28.824219 8.722656 C 29.5625 8.230469 30 7.410156 30 6.527344 C 30 5.003906 28.761719 3.765625 27.238281 3.765625 L 2.761719 3.765625 C 1.238281 3.765625 0 5.003906 0 6.527344 C 0 7.410156 0.4375 8.230469 1.175781 8.722656 Z M 1.175781 8.722656 "/>
    </svg>
  );
};

export default MailIcon;