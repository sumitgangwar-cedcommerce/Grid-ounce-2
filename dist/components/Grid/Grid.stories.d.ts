import Grid from './Grid';
declare const _default: {
    title: string;
    component: typeof Grid;
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        loading: {
            control: {
                type: string;
            };
        };
        expandable: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        bordered: {
            control: {
                type: string;
            };
        };
        pagination: {
            control: {
                type: string;
            };
        };
        showHeader: {
            control: {
                type: string;
            };
        };
        tableLayout: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Primary: any;
export declare const FixedColoumn: any;
export declare const Fixedheader: any;
export declare const ExpandableRow: any;
export declare const Selection: any;
export declare const GridWithPaginationDemo: any;
