import * as React from "react"
const BGLine1 = ({stroke, clas}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={500}
    height={364}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    className={`absolute ${clas}`}
  >
    <path
      d="M497.311 109.655c51.978 62.891 91.542 59.574 122.831 81.085 55.611 38.234 54.067 85.974 121.87 121.419 40.032 20.927 74.382 9.695 116.322 38.738 48.468 33.563 86.369 101.519 111.115 118.531"
      style={{
        strokeWidth: "2px",
      }}
      className={`fill-none stroke-${stroke}`}
      transform="translate(-495.227 -107.572)"
    />
    <path
      d="M497.311 109.655c51.978 62.891 91.542 59.574 122.831 81.085 55.611 38.234 54.067 85.974 121.87 121.419 40.032 20.927 74.382 9.695 116.322 38.738 48.468 33.563 86.369 101.519 111.115 118.531"
      style={{
        strokeWidth: "2px",
      }}
      className={`fill-none stroke-${stroke}`}
      transform="translate(-472.469 -107.572)"
    />
  </svg>
)
export default BGLine1
