import React from "react";
import { Story } from "@storybook/react";
import { CardI } from "./Card";
declare const _default: {
    title: string;
    component: React.FC<CardI>;
    argTypes: {
        cardType: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
            defaultValue: string;
        };
        extraClass: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        title: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        subTitle: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        media: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        action: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        primaryAction: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        secondaryAction: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Primary: Story<CardI>;
export declare const Card_Type: any;
export declare const Card_with_Header_and_header_action: any;
export declare const card_with_footer_actions: any;
export declare const Card_with_media: any;
