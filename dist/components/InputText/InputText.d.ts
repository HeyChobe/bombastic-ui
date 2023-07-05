interface InputTextProps {
    placeholder: string;
    onChange: (e: any) => void;
    value: any;
    color?: string;
    disabled?: boolean;
    labelColor?: string;
}
export default function InputText({ onChange, value, placeholder, color, labelColor, disabled, }: InputTextProps): import("react/jsx-runtime").JSX.Element;
export {};
