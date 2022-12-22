import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { FC } from "react";
import React from "react";
import "antd/dist/antd.css";
import "./Datepicker.css";
declare const Datepicker: FC<DateI>;
export default Datepicker;
export interface DateI {
    value?: any;
    ref?: any;
    name?: string;
    placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    onChange?: (() => void) | any;
    placeholder?: string;
    showToday?: boolean;
    picker?: "date" | "week" | "month" | "quarter" | "year";
    showTime?: boolean;
    range?: boolean;
    disabled?: boolean;
    timeZone?: any;
    disabledDate?: any;
    thickness?: "thin" | "thick";
    format?: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY/MM/DD" | "DD-MM-YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD" | string | any;
    defaultValue?: any;
    controlStates?: "Sucess" | "Warning" | "Error" | any;
    showHelp?: string;
    helpIcon?: React.ReactNode;
}
