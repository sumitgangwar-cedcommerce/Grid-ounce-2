import React from "react";
import "./Button.css";
declare const Button: ({ type, length, thickness, halign, loading, disable, ...props }: ButtonI) => JSX.Element;
export interface ButtonI {
    children?: string | React.ReactNode | JSX.Element | any;
    content?: string;
    type?: "Primary" | "Plain" | "Danger" | "DangerOutlined" | "Secondary" | "Shadowed" | "Outlined" | "DangerPlain" | "TextButton";
    length?: "fullBtn" | "none" | any;
    thickness?: "extraThin" | "thin" | "large";
    halign?: "Equal" | "End" | "Start" | "Between" | "Center";
    icon?: React.ReactNode;
    onAction?: () => void;
    onClick?: () => void;
    loading?: boolean;
    disable?: boolean;
    iconAlign?: "left" | "right";
    iconRound?: boolean;
    tabIndex?: number;
}
export default Button;
