import styles from "./Text.module.css";

const bgOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

const modeOptions = ["left", "right", "center", "justify"];

interface TextProps {
  italic?: boolean;
  underlined?: boolean;
  onClick?: (event: any) => void;
  color?: string;
  strong?: boolean;
  label: string;
  size?: number;
  mode?: string;
}

export default function Text({
  label = "Text",
  italic = false,
  underlined = false,
  onClick,
  color = "primary",
  strong = false,
  size = 1,
  mode = "left",
}: TextProps) {
  const isCustomColor = !Object.values(bgOptions).includes(color);

  const colorStyle = {
    color: isCustomColor ? color : undefined,
  };

  const modeSelected = modeOptions.includes(mode) ? mode : "left";

  if (size <= 1)
    return (
      <p
        style={colorStyle}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        data-mode={modeSelected}
        onClick={onClick}
        className={`${styles.text} ${styles.size_1}`}
      >
        {label}
      </p>
    );
  if (size === 2)
    return (
      <p
        style={colorStyle}
        data-color={color}
        data-italic={italic}
        data-strong={strong}
        data-underlined={underlined}
        data-mode={modeSelected}
        onClick={onClick}
        className={`${styles.text} ${styles.size_2}`}
      >
        {label}
      </p>
    );

  return (
    <p
      style={colorStyle}
      data-color={color}
      data-italic={italic}
      data-strong={strong}
      data-underlined={underlined}
      data-mode={modeSelected}
      onClick={onClick}
      className={`${styles.text} ${styles.size_3}`}
    >
      {label}
    </p>
  );
}
