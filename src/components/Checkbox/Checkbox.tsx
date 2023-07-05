import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  color?: string;
  onChange: (e: any) => void;
}

const bgOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

export default function Checkbox({
  onChange,
  color = "primary",
  ghost = false,
  checked = false,
  disabled = false,
}: CheckboxProps) {
  const onChangeColor = (newColor: string) => {
    document.documentElement.style.setProperty("--current-color", newColor);
    return { color: "currentcolor" };
  };

  const isCustomColor = !Object.values(bgOptions).includes(color);

  return (
    <input
      type="checkbox"
      className={styles.input}
      style={isCustomColor ? onChangeColor(color) : undefined}
      data-color={color}
      data-ghost={ghost}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      required
    />
  );
}
