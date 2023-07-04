import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  width: string;
  bgColor?: string;
}

export default function ({ width = "100%", bgColor = "" }: ProgressBarProps) {
  return (
    <div
      className={styles.container}
      role="progressbar"
      aria-label="progressBar"
    >
      <div
        style={{
          backgroundColor: bgColor !== "" ? bgColor : "var(--blue)",
          width: width,
        }}
        className={styles.progress}
      ></div>
    </div>
  );
}
