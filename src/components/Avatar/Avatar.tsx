import styles from "./Avatar.module.css";

const defaultColors = [
  "#FF0000", // Rojo
  "#0000FF", // Azul
  "#00FF00", // Verde
  "#FFFF00", // Amarillo
  "#FFA500", // Naranja
  "#FFC0CB", // Rosa
  "#800080", // Morado
  "#808080", // Gris
  "#40E0D0", // Turquesa
  "#A52A2A", // Marrón
];

interface AvatarProps {
  alt?: string;
  src?: string;
  pointer?: boolean;
  width?: string;
  height?: string;
  letter?: string;
  bgColor?: string;
}

export default function Avatar({
  alt = "",
  src = "",
  pointer = false,
  width = "100px",
  height = "100px",
  letter = "",
  bgColor = "",
}: AvatarProps) {
  if (src && src !== "" && !letter && letter === "")
    return (
      <img
        className={styles.image}
        style={{
          cursor: pointer ? "pointer" : undefined,
          width: width,
          height: height,
        }}
        alt={alt}
        src={src}
      ></img>
    );

  return (
    <span
      style={{
        cursor: pointer ? "pointer" : undefined,
        width: width,
        height: height,
        backgroundColor:
          bgColor && bgColor !== ""
            ? bgColor
            : defaultColors[Math.floor(Math.random() * defaultColors.length)],
        color: "var(--white)",
        fontSize: "1.3rem",
        fontWeight: "500",
      }}
      className={styles.letter}
    >
      {letter.length <= 2
        ? letter.toUpperCase()
        : letter.slice(0, 2).toUpperCase()}
    </span>
  );
}
