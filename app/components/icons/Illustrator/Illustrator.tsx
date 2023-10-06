interface Props {
  widthSkillIcon?: number
  heightSkillIcon?: number
}

function Illustrator({ widthSkillIcon = 40, heightSkillIcon = 40 }: Props) {
  return (
    <svg
      width={widthSkillIcon}
      height={heightSkillIcon}
      viewBox="0 0 24 24"
      fill="fill-current"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustrator"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.048"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M15.9325 10.143V15.5H14.5685V10.143H15.9325Z"
          fill="fill-current"
        ></path>
        <path
          d="M14.4915 8.64703C14.4915 8.22903 14.7995 7.91003 15.2505 7.91003C15.7125 7.91003 15.9985 8.22903 16.0095 8.64703C16.0095 9.05403 15.7125 9.37303 15.2395 9.37303C14.7885 9.37303 14.4915 9.05403 14.4915 8.64703Z"
          fill="fill-current"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.634 15.5L11.963 13.399H9.60904L8.97104 15.5H7.57404L9.95004 8.08603H11.677L14.086 15.5H12.634ZM10.401 10.55L9.82904 12.376H11.732L11.149 10.55C11.0333 10.185 10.932 9.78397 10.8392 9.41687C10.8174 9.3304 10.796 9.24582 10.775 9.16403H10.753C10.7154 9.31097 10.6777 9.46822 10.6391 9.62917C10.5651 9.93809 10.4878 10.2608 10.401 10.55Z"
          fill="fill-current"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2583 2.83306C13.7917 2.44562 10.2083 2.44562 6.74177 2.83306C4.72971 3.05794 3.10538 4.64295 2.86883 6.66548C2.45429 10.2098 2.45429 13.7903 2.86883 17.3346C3.10538 19.3571 4.72971 20.9422 6.74177 21.167C10.2083 21.5545 13.7917 21.5545 17.2583 21.167C19.2703 20.9422 20.8946 19.3571 21.1312 17.3346C21.5457 13.7903 21.5457 10.2098 21.1312 6.66548C20.8946 4.64295 19.2703 3.05794 17.2583 2.83306ZM6.90838 4.32378C10.2642 3.94871 13.7358 3.94871 17.0916 4.32378C18.4218 4.47244 19.4872 5.52205 19.6414 6.83973C20.0424 10.2683 20.0424 13.7318 19.6414 17.1604C19.4872 18.478 18.4218 19.5277 17.0916 19.6763C13.7358 20.0514 10.2642 20.0514 6.90838 19.6763C5.57827 19.5277 4.51278 18.478 4.35867 17.1604C3.95767 13.7318 3.95767 10.2683 4.35867 6.83973C4.51278 5.52205 5.57827 4.47244 6.90838 4.32378Z"
          fill="fill-current"
        ></path>
      </g>
    </svg>
  )
}

export default Illustrator
