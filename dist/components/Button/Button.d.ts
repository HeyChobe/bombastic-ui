interface ButtonProps {
    label: string;
    onClick: (event: any) => void;
    bg?: string;
    ghost?: boolean;
    small?: boolean;
    disabled?: boolean;
}
export default function Button({ label, onClick, bg, ghost, small, disabled, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
