interface RatingProps {
    color?: string;
    readonly?: boolean;
    disabled?: boolean;
    onChange: (e: any) => void;
}
export default function Rating({ color, readonly, disabled, onChange, }: RatingProps): import("react/jsx-runtime").JSX.Element;
export {};
