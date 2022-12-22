import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./Alert").AlertI>;
    argTypes: {
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        children: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        onClose: {
            description: string;
            control: {
                type: string;
            };
        };
        destroy: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        desciption: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Primary: ({ icon, ...rest }: any) => JSX.Element;
export declare const Types: any;
export declare const Alert_without_destroy: any;
export declare const Alert_with_description_and_destroy: any;
