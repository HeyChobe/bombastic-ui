import styles from "./ImageCard.module.css";

interface ImageCardProps {
  title: string;
  text: string;
  titleButton: string;
  src: string;
  alt: string;
  theme?: string;
  bgButtonColor?: string;
}

export default function ImageCard({
  title = "Title",
  text = "Example of text content",
  titleButton = "Go Somewhere",
  src = "",
  alt = "",
  theme = "dark",
  bgButtonColor = "",
}: ImageCardProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme !== "light" ? "var(--black)" : "var(--grey)",
      }}
    >
      <div
        style={{
          backgroundImage: `url("${src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label={alt}
        className={styles.image}
      ></div>
      <div
        className={styles.info}
        style={{ color: theme !== "light" ? "var(--grey)" : "var(--black)" }}
      >
        <span className={styles.title}>
          {title.length <= 39 ? title : title.slice(0, 39) + "..."}
        </span>
        <p className={styles.text}>
          {text.length <= 82 ? text : text.slice(0, 82) + "..."}
        </p>
        <button
          style={{
            backgroundColor:
              bgButtonColor === "" ? "var(--disabled)" : bgButtonColor,
          }}
          className={styles.button}
          type="button"
        >
          {titleButton}
        </button>
      </div>
    </div>
  );
}
