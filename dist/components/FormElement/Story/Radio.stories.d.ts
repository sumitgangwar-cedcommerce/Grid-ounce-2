import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<import("../Radio").CheckBoxI>;
    argTypes: {
        name: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        labelVal: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onClick: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        description: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        checked: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
            defaultValue: boolean;
        };
        value: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
            defaultValue: boolean;
        };
        required: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        id: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const RadioRequired: any;
export declare const DisableRadio: any;
export declare const RadioWithDescription: any;
