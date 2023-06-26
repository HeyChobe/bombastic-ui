import styles from "./Title.module.css";

const modeOptions = ["left", "right", "center", "justify"];

const bgOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

interface TitleProps {
  h: number;
  label: string;
  italic?: boolean;
  underlined?: boolean;
  onClick?: (event: any) => void;
  color?: string;
  strong?: boolean;
  mode?: string;
}

export default function Title({
  h = 1,
  label = "Title",
  italic = false,
  underlined = false,
  onClick,
  color = "primary",
  strong = true,
  mode = "left",
}: TitleProps) {
  const isCustomColor = !Object.values(bgOptions).includes(color);

  const colorStyle = {
    color: isCustomColor ? color : undefined,
  };

  const modeSelected = modeOptions.includes(mode) ? mode : "left";

  if (h <= 1)
    return (
      <h1
        style={colorStyle}
        data-mode={modeSelected}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        onClick={onClick}
        className={`${styles.title} ${styles.h1}`}
      >
        {label}
      </h1>
    );
  if (h === 2)
    return (
      <h2
        style={colorStyle}
        data-mode={modeSelected}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        onClick={onClick}
        className={`${styles.title}, ${styles.h2}`}
      >
        {label}
      </h2>
    );
  if (h === 3)
    return (
      <h3
        style={colorStyle}
        data-mode={modeSelected}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        onClick={onClick}
        className={`${styles.title} ${styles.h3}`}
      >
        {label}
      </h3>
    );
  if (h === 4)
    return (
      <h4
        style={colorStyle}
        data-mode={modeSelected}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        onClick={onClick}
        className={`${styles.title} ${styles.h4}`}
      >
        {label}
      </h4>
    );
  if (h === 5)
    return (
      <h5
        style={colorStyle}
        data-mode={modeSelected}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        onClick={onClick}
        className={`${styles.title} ${styles.h5}`}
      >
        {label}
      </h5>
    );
  return (
    <h6
      style={colorStyle}
      data-mode={modeSelected}
      data-color={color}
      data-italic={italic}
      data-strong={strong}
      data-underlined={underlined}
      onClick={onClick}
      className={`${styles.title} ${styles.h6}`}
    >
      {label}
    </h6>
  );
}
