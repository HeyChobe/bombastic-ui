import styles from "./Rating.module.css";

interface RatingProps {
  color?: string;
  readonly?: boolean;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const colorOptions = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OK: "ok",
  CANCEL: "cancel",
  WARNING: "warning",
};

export default function Rating({
  color = "primary",
  readonly = false,
  disabled = false,
  onChange,
}: RatingProps) {
  const onChangeColor = (newColor: string) => {
    document.documentElement.style.setProperty("--current-color", newColor);
    return { color: "currentcolor" };
  };

  const isCustomColor = !Object.values(colorOptions).includes(color);

  return (
    <div
      className={styles.rate}
      style={isCustomColor ? onChangeColor(color) : undefined}
      data-color={color}
      data-disabled={disabled}
      data-readonly={readonly}
    >
      <input
        onChange={onChange}
        disabled={disabled || readonly}
        type="radio"
        id="star5"
        name="rate"
        value={5}
      />
      <label htmlFor="star5" title="text">
        5 stars
      </label>

      <input
        onChange={onChange}
        disabled={disabled || readonly}
        type="radio"
        id="star4"
        name="rate"
        value={4}
      />
      <label htmlFor="star4" title="text">
        4 stars
      </label>

      <input
        onChange={onChange}
        disabled={disabled || readonly}
        type="radio"
        id="star3"
        name="rate"
        value={3}
      />
      <label htmlFor="star3" title="text">
        3 stars
      </label>

      <input
        onChange={onChange}
        disabled={disabled || readonly}
        type="radio"
        id="star2"
        name="rate"
        value={2}
      />
      <label htmlFor="star2" title="text">
        2 stars
      </label>

      <input
        onChange={onChange}
        disabled={disabled || readonly}
        type="radio"
        id="star1"
        name="rate"
        value={1}
      />
      <label htmlFor="star1" title="text">
        1 star
      </label>
    </div>
  );
}
