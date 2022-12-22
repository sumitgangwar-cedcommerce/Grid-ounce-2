import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Avatar").AvatarI>;
    argTypes: {
        text: {
            name: string;
            description: string;
            defaultValue: string;
            control: {
                type: string;
            };
        };
        color: {
            name: string;
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        type: {
            name: string;
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        zoom: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        image: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        size: {
            name: string;
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;
export declare const Types: any;
export declare const Color: any;
export declare const Size: any;
export declare const Avatar_with_Image: any;
