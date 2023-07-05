interface TitleProps {
    h: number;
    label: string;
    italic?: boolean;
    underlined?: boolean;
    onClick?: (event: any) => void;
    color?: string;
    strong?: boolean;
    mode?: string;
}
export default function Title({ h, label, italic, underlined, onClick, color, strong, mode, }: TitleProps): import("react/jsx-runtime").JSX.Element;
export {};
