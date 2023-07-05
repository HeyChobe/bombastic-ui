interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    color?: string;
    onChange: (e: any) => void;
}
export default function Checkbox({ onChange, color, ghost, checked, disabled, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
