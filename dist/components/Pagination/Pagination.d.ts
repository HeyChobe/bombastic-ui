import { Dispatch, SetStateAction } from "react";
interface PaginationProps {
    total: number;
    onChange: Dispatch<SetStateAction<number | undefined>>;
    page: number | undefined;
    bgColor?: string;
    currentNumberColor?: string;
    numberColor?: string;
}
export default function Pagination({ total, onChange, page, bgColor, numberColor, currentNumberColor, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
