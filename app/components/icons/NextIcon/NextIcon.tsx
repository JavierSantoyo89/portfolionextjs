interface Props {
  widthSkillIcon?: number
  heightSkillIcon?: number
}

function NextIcon({ widthSkillIcon = 40, heightSkillIcon = 40 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-nextjs"
      width={widthSkillIcon}
      hanging={heightSkillIcon}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="NextJs"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
      <path d="M15 12v-3"></path>
    </svg>
  )
}

export default NextIcon
