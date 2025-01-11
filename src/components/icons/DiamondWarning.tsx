interface DiamondWarningProps {
  size?: string;
}
const DiamondWarning = ({ size }: DiamondWarningProps) => {
  return (
    <svg
      aria-hidden="true"
      aria-label=""
      height={size ? size : '16'}
      width={size ? size : '16'}
      role="img"
      viewBox="0 0 24 24"
      fill="#bd5b00"
    >
      <path d="m23.12 9.87-9-9a3 3 0 0 0-4.25 0l-9 9a3 3 0 0 0 0 4.26l9 9a3 3 0 0 0 4.26 0l9-9a3 3 0 0 0 0-4.26M12 19.01a1.56 1.56 0 1 1 0-3.13 1.56 1.56 0 0 1 0 3.13m1.57-6.22a1.56 1.56 0 0 1-3.13 0V6.55a1.56 1.56 0 0 1 3.13 0z"></path>
    </svg>
  );
};

export default DiamondWarning;
