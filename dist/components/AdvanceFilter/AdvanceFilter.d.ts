import React from "react";
import "./AdvanceFilter.css";
declare const AdvanceFilter: React.FC<Filter1>;
export interface FilterI {
    props?: Filter1;
}
export interface Filter1 {
    filters: FI[];
    heading?: string;
    button?: string;
    icon?: React.ReactNode;
    type?: "Primary" | "Danger" | "DangerOutlined" | "Secondary" | "Outlined" | "DangerPlain" | "TextButton";
    onApply?: () => void;
    onClose?: () => void;
    resetFilter?: () => void;
    disableReset?: boolean;
    disableApply?: boolean;
}
export interface FI {
    name: string;
    children: React.ReactNode;
}
export default AdvanceFilter;
