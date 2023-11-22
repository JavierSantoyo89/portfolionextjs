interface Props {
  widthSkillIcon?: number;
  heightSkillIcon?: number;
}

function JavaScriptIcon({ widthSkillIcon = 40, heightSkillIcon = 40 }: Props) {
  return (
    <svg
      height={heightSkillIcon}
      viewBox="2.59 0 214.09101008 224"
      width={widthSkillIcon}
      className="fill-current fill: rgb(0, 0, 0); --darkreader-inline-fill: #e3e1de;"
      aria-label="Jira"
    >
      <path
        d="m214.06 105.73-96.39-96.39-9.34-9.34-72.56 72.56-33.18 33.17a8.89 8.89 0 0 0 0 12.54l66.29 66.29 39.45 39.44 72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39-33.12-33.12 33.12-33.12 33.11 33.12z"
        fill="current"
      />
      <path
        d="m108.33 78.88a55.75 55.75 0 0 1 -.24-78.61l-72.47 72.44 39.44 39.44z"
        fill="current"
      />
      <path
        d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86l72.67-72.63z"
        fill="current"
      />
    </svg>
  );
}

export default JavaScriptIcon;
