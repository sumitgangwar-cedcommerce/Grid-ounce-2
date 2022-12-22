import React from "react";
import "./ButtonDropdown.css";
declare function ButtonDropdown({ list, icon, iconAlign, ...props }: ButtonDropdownI): JSX.Element;
declare namespace ButtonDropdown {
    var defaultProps: {
        children: string;
    };
}
export interface ButtonDropdownI {
    title: string;
    list: any;
    children?: string | React.ReactNode | JSX.Element | any;
    content?: string;
    type?: "Primary" | "Danger" | "DangerOutlined" | "Secondary" | "Outlined" | "DangerPlain" | "TextButton";
    thickness?: "extraThin" | "thin" | "large";
    icon?: React.ReactNode | any;
    onClick?: () => void;
    loading?: boolean;
    disable?: boolean;
    iconAlign?: "left" | "right";
}
export default ButtonDropdown;
