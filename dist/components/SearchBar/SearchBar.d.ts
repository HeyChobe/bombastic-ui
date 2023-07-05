interface SearchBarProps {
    disabled?: boolean;
    color?: string;
    onChange: (e: any) => void;
    onSubmit: (e: any) => void;
}
export default function SearchBar({ onChange, onSubmit, color, disabled, }: SearchBarProps): import("react/jsx-runtime").JSX.Element;
export {};
