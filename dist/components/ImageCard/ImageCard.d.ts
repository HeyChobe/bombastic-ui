interface ImageCardProps {
    title: string;
    text: string;
    titleButton: string;
    src: string;
    alt: string;
    theme?: string;
    bgButtonColor?: string;
}
export default function ImageCard({ title, text, titleButton, src, alt, theme, bgButtonColor, }: ImageCardProps): import("react/jsx-runtime").JSX.Element;
export {};
