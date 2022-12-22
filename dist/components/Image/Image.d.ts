import React from "react";
import "./Image.css";
declare const Image: React.FC<ImageI>;
export interface ImageI {
    src?: string;
    height?: number;
    width?: number;
    alt?: string;
    radius?: "circle" | "corner-radius" | "none";
    type?: "black & white" | "none";
    fit?: "cover" | "fill" | "center" | "scale-down" | "none";
}
export default Image;
