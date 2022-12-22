import AutoComplete from "./AutoComplete";
declare const _default: {
    title: string;
    component: typeof AutoComplete;
    argTypes: {
        name: {
            name: string;
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        options: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        value: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        prefix: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        suffix: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        showHelp: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        placeHolder: {
            description: string;
            control: {
                type: string;
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
        setHiglighted: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        showPopover: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        onChange: {
            description: string;
            control: {
                type: string;
            };
        };
        onClick: {
            description: string;
            control: {
                type: string;
            };
        };
        onEnter: {
            description: string;
            control: {
                type: string;
            };
        };
        clearButton: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        clearFunction: {
            description: string;
            control: {
                type: string;
                disable: boolean;
            };
        };
        loading: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        popoverPosition: {
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
export declare const autocomplete_without_Higlight: any;
export declare const autocomplete_with_popover_position: any;
