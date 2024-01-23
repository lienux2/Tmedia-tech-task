"use client";
import { usePathname } from "next/navigation";

export const Settings = () => {
  const pathname = usePathname();
  let fillColor = "#9DA0AF";

  if (pathname === "/settings") {
    fillColor = "#3498DB";
  }
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0231 2C14.1261 2 15.0231 2.897 15.0231 4V4.598C15.6981 4.878 16.3371 5.253 16.9191 5.71L17.4481 5.404C18.3711 4.871 19.6481 5.216 20.1791 6.136L21.1781 7.865C21.7301 8.82 21.4021 10.045 20.4471 10.597L19.9421 10.889C19.9961 11.257 20.0231 11.629 20.0231 12C20.0231 12.371 19.9961 12.742 19.9421 13.113L20.4471 13.405C21.4021 13.956 21.7301 15.182 21.1781 16.137L20.1791 17.866C19.6461 18.785 18.3711 19.127 17.4481 18.597L16.9191 18.291C16.3371 18.747 15.6981 19.122 15.0231 19.402V20C15.0231 21.103 14.1261 22 13.0231 22H11.0231C9.92008 22 9.02308 21.103 9.02308 20V19.402C8.34808 19.122 7.70908 18.747 7.12708 18.29L6.59808 18.596C5.67708 19.127 4.39908 18.783 3.86808 17.866L2.86808 16.136C2.31608 15.181 2.64408 13.955 3.59908 13.403L4.10408 13.111C4.05008 12.742 4.02308 12.371 4.02308 12C4.02308 11.629 4.05008 11.257 4.10408 10.888L3.59908 10.596C2.64408 10.045 2.31608 8.819 2.86808 7.864L3.86708 6.135C4.39808 5.216 5.67408 4.872 6.59808 5.403L7.12708 5.709C7.70908 5.253 8.34808 4.878 9.02308 4.598V4C9.02308 2.897 9.92008 2 11.0231 2H13.0231ZM13.0231 4H11.0231V5.3C11.0231 5.739 10.7361 6.128 10.3151 6.256C9.43808 6.524 8.61408 7.008 7.93108 7.655C7.61008 7.962 7.12708 8.018 6.74308 7.797L5.59808 7.135L4.60008 8.864L5.72308 9.514C6.11008 9.737 6.30108 10.189 6.19308 10.622C6.08108 11.074 6.02308 11.538 6.02308 12C6.02308 12.461 6.08108 12.925 6.19408 13.378C6.30108 13.811 6.11008 14.263 5.72308 14.486L4.59908 15.137L5.59908 16.866L6.74308 16.204C6.89908 16.114 7.07108 16.07 7.24308 16.07C7.49308 16.07 7.74108 16.163 7.93108 16.345C8.61408 16.992 9.43808 17.475 10.3151 17.744C10.7361 17.872 11.0231 18.261 11.0231 18.7V20H13.0251L13.0231 18.7C13.0231 18.261 13.3101 17.872 13.7311 17.744C14.6081 17.476 15.4321 16.992 16.1151 16.345C16.4361 16.037 16.9201 15.982 17.3031 16.203L18.4481 16.864L19.4461 15.135L18.3231 14.486C17.9361 14.263 17.7451 13.811 17.8521 13.378C17.9651 12.925 18.0231 12.461 18.0231 12C18.0231 11.538 17.9651 11.074 17.8531 10.622C17.7451 10.19 17.9361 9.738 18.3231 9.514L19.4471 8.865L18.4471 7.136L17.3031 7.797C16.9211 8.017 16.4361 7.962 16.1151 7.655C15.4321 7.008 14.6081 6.525 13.7311 6.256C13.3101 6.128 13.0231 5.739 13.0231 5.3V4ZM12.0231 8C14.2291 8 16.0231 9.794 16.0231 12C16.0231 14.206 14.2291 16 12.0231 16C9.81708 16 8.02308 14.206 8.02308 12C8.02308 9.794 9.81708 8 12.0231 8ZM12.0231 10C10.9391 10 10.0231 10.916 10.0231 12C10.0231 13.084 10.9391 14 12.0231 14C13.1071 14 14.0231 13.084 14.0231 12C14.0231 10.916 13.1071 10 12.0231 10Z"
          fill={fillColor}
        />
      </svg>
    </>
  );
};
