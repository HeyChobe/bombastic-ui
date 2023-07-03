import { Dispatch, SetStateAction, useRef, useState } from "react";
import styles from "./ComboBox.module.css";

interface ObjectOptions {
  label: string;
  value: string | number;
}

interface Props {
  theme?: string;
  themeColor?: string;
  placeholder?: string;
  labelBgColor?: string;
  options: ObjectOptions[];
  onChange: Dispatch<SetStateAction<string | number | undefined>>;
}

const defaultOptions = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
];

export default function ComboBox({
  theme = "dark",
  placeholder = "Select an option",
  themeColor = "",
  labelBgColor = "",
  options = defaultOptions,
  onChange,
}: Props) {
  const [focus, setFocus] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const ref = useRef<HTMLDivElement | null>(null);
  const labelBgColorStyle =
    labelBgColor !== "" && focus ? labelBgColor : undefined;

  const onSelectOption = (e: any): void => {
    if (!ref.current) return;

    setSelected(e.target.dataset.value);
    onChange(e.target.dataset.value);

    Array.from(ref.current.children).forEach((option) => {
      option.classList.remove(styles["option-selected"]);
    });
    e.target.classList.add(styles["option-selected"]);

    setFocus(false);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => setFocus((current) => !current)}
        style={
          themeColor === ""
            ? theme !== "light"
              ? { borderColor: "var(--black)" }
              : { borderColor: "var(--grey2)" }
            : { borderColor: themeColor }
        }
        className={styles["select-container"]}
      >
        <span
          style={
            themeColor === ""
              ? theme !== "light"
                ? { color: "var(--black)" }
                : { color: "var(--grey2)" }
              : { color: themeColor }
          }
          className={styles.selected}
        >
          {selected}
        </span>
        <svg
          style={
            focus
              ? {
                  rotate: "180deg",
                  transform: "none",
                  marginTop: "7px",
                  marginRight: "6px",
                }
              : { rotate: "0deg" }
          }
          className={styles.icon}
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke={
              themeColor === ""
                ? theme !== "light"
                  ? "var(--black)"
                  : "var(--grey2)"
                : themeColor
            }
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <label
          style={
            themeColor === ""
              ? theme !== "light"
                ? {
                    color: "var(--black)",
                    backgroundColor: labelBgColorStyle,
                  }
                : {
                    color: "var(--grey2)",
                    backgroundColor: labelBgColorStyle,
                  }
              : { color: themeColor, backgroundColor: labelBgColorStyle }
          }
          className={
            focus || selected !== ""
              ? `${styles.label} ${styles["label-focus"]}`
              : styles.label
          }
        >
          {placeholder}
        </label>
      </div>
      <div
        ref={ref}
        style={focus ? { display: "block" } : { display: "none" }}
        className={styles["option-container"]}
      >
        {options.map((option, index) => (
          <li
            key={index}
            style={
              theme !== "light"
                ? { backgroundColor: "var(--black)", color: "var(--grey)" }
                : { backgroundColor: "var(--grey)", color: "var(--black)" }
            }
            data-value={option.value}
            className={styles.option}
            onClick={onSelectOption}
          >
            {option.label}
          </li>
        ))}
      </div>
    </div>
  );
}
