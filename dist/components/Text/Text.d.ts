interface TextProps {
    italic?: boolean;
    underlined?: boolean;
    onClick?: (event: any) => void;
    color?: string;
    strong?: boolean;
    label: string;
    size?: number;
    mode?: string;
}
export default function Text({ label, italic, underlined, onClick, color, strong, size, mode, }: TextProps): import("react/jsx-runtime").JSX.Element;
export {};
