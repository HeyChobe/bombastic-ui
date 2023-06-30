import { useRef, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  description: string;
  bg?: string;
}

export default function Accordion({
  title = "Title",
  description = "This is an example of paragraph",
  bg = "dark",
}: AccordionProps) {
  const [toggleClick, setToggleClick] = useState<boolean>(false);
  const ref = useRef<SVGSVGElement | null>(null);

  const onClickHandler = () => {
    if (!ref.current) return;

    toggleClick
      ? (ref.current.style.rotate = "0deg")
      : (ref.current.style.rotate = "180deg");

    setToggleClick((current) => !current);
  };

  return (
    <div
      style={{
        borderBottomColor: bg !== "light" ? "var(--blue)" : "var(--black)",
        backgroundColor: bg !== "light" ? "var(--black)" : "var(--grey)",
        borderBottomWidth: toggleClick ? undefined : "1px",
      }}
      className={styles.container}
    >
      <div onClick={onClickHandler} className={styles["title-container"]}>
        <span
          style={
            bg !== "light"
              ? { color: "var(--grey)" }
              : { color: "var(--black)" }
          }
          className={styles.title}
        >
          {title}
        </span>
        <svg
          ref={ref}
          className={styles.icon}
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke={bg !== "light" ? "var(--grey)" : "var(--black)"}
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className={styles["text-container"]}
        style={!toggleClick ? { display: "none" } : { display: "block" }}
      >
        <p
          style={
            bg !== "light"
              ? { color: "var(--grey)" }
              : { color: "var(--black)" }
          }
          className={styles.text}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
