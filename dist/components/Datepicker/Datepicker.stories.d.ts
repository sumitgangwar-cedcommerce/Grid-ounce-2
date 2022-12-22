import React from "react";
import "./Datepicker.css";
import "moment/locale/zh-cn";
declare const _default: {
    title: string;
    component: React.FC<import("./Datepicker").DateI>;
    argTypes: {
        showToday: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        picker: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        placement: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        showTime: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        range: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        controlStates: {
            control: {
                type: string;
                options: string[];
            };
        };
        thickness: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        placeholder: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        showHelp: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        value: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        ref: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        format: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        name: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        disabledDate: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        timeZone: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        helpIcon: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        defaultValue: {
            description: string;
            control: {
                disable: boolean;
            };
        };
    };
};
export default _default;
declare function Template({ ...rest }: {
    [x: string]: any;
}): JSX.Element;
export declare const Primary: typeof Template;
export declare const Placement: any;
export declare const Picker: any;
export declare const Thickness: any;
export declare const Placeholder: any;
export declare const Format: any;
export declare const Default_Value: any;
export declare const Date_with_Time: any;
export declare const disabled_date: any;
export declare const disabled_date_picker: any;
export declare const date_picker_Locale: any;
export declare const disabled_range_picker: any;
