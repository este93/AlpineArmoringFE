import React from 'react';
import { IconProps } from 'types';

const YoutubeIcon = ({ color, className }: IconProps) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1623_2515)">
        <path
          d="M17.4045 14.7496L14.0355 13.1776C13.7415 13.0411 13.5 13.1941 13.5 13.5196V16.4806C13.5 16.8061 13.7415 16.9591 14.0355 16.8226L17.403 15.2506C17.6985 15.1126 17.6985 14.8876 17.4045 14.7496ZM15 0.600098C7.04701 0.600098 0.600006 7.0471 0.600006 15.0001C0.600006 22.9531 7.04701 29.4001 15 29.4001C22.953 29.4001 29.4 22.9531 29.4 15.0001C29.4 7.0471 22.953 0.600098 15 0.600098ZM15 20.8501C7.62901 20.8501 7.50001 20.1856 7.50001 15.0001C7.50001 9.8146 7.62901 9.1501 15 9.1501C22.371 9.1501 22.5 9.8146 22.5 15.0001C22.5 20.1856 22.371 20.8501 15 20.8501Z"
          fill={`${color ? color : '#171717'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_1623_2515">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
