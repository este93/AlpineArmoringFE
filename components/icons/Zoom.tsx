import React from 'react';
import { IconProps } from 'types';

const ZoomIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1728 14.1641C14.9006 14.5414 14.5977 14.8979 14.2644 15.2312C13.9311 15.5645 13.5746 15.8674 13.1973 16.1396L17.861 20.8033C18.0792 21.0215 18.433 21.0215 18.6512 20.8033L19.8364 19.618C20.0547 19.3998 20.0547 19.046 19.8364 18.8278L15.1728 14.1641Z"
        fill="white"
        stroke="white"
        strokeWidth="0.0715212"
      />
      <path
        d="M8.12437 17.2155C9.86341 17.2155 11.4747 16.669 12.7962 15.7385C13.5629 15.1987 14.2319 14.5297 14.7718 13.763C15.7022 12.4416 16.2487 10.8302 16.2487 9.09116C16.2487 4.60419 12.6113 0.966797 8.12437 0.966797C3.63741 0.966797 1.03e-10 4.60419 1.03e-10 9.09116C-2.23503e-05 13.5781 3.63739 17.2155 8.12437 17.2155ZM4.09569 8.41506C4.09569 8.16818 4.29581 7.96806 4.54269 7.96806H6.58775H7.01241V7.5434V5.49834C7.01241 5.25146 7.21254 5.05133 7.45942 5.05133H8.80044C9.04733 5.05133 9.24745 5.25146 9.24745 5.49834V7.96806H11.7172C11.9641 7.96806 12.1642 8.16818 12.1642 8.41506V9.75609C12.1642 10.003 11.9641 10.2031 11.7172 10.2031H11.2118H9.24745V12.1898V12.6728C9.24745 12.9197 9.04733 13.1198 8.80044 13.1198H7.45942C7.21254 13.1198 7.01241 12.9197 7.01241 12.6728V10.2031H4.54269C4.29581 10.2031 4.09569 10.003 4.09569 9.75609V8.41506Z"
        fill="white"
        stroke="white"
        strokeWidth="0.0715212"
      />
    </svg>
  );
};

export default ZoomIcon;
