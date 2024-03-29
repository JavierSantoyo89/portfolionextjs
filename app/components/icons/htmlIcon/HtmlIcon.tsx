import React from "react"
interface Props {
  widthSkillIcon?: number
  heightSkillIcon?: number
}

function HtmlIcon({ widthSkillIcon = 40, heightSkillIcon = 40 }: Props) {
  return (
    <svg
      color="current"
      width={widthSkillIcon}
      height={heightSkillIcon}
      viewBox="0 0 24 20"
      className="fill-current fill: rgb(0, 0, 0); --darkreader-inline-fill: #e3e1de;"
      aria-label="HTML"
    >
      <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
    </svg>
  )
}

export default HtmlIcon
