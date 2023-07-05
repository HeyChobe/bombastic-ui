import { Dispatch, SetStateAction } from "react";
interface ObjectOptions {
    label: string;
    value: string | number;
}
interface Props {
    theme?: string;
    themeColor?: string;
    placeholder?: string;
    labelBgColor?: string;
    options: ObjectOptions[];
    onChange: Dispatch<SetStateAction<string | number | undefined>>;
}
export default function ComboBox({ theme, placeholder, themeColor, labelBgColor, options, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
