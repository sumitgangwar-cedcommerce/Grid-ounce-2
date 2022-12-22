import React from "react";
import "antd/dist/antd.css";
import "./Grid.css";
declare function Grid({ dataSource, columns, size, bordered, loading, showHeader, tableLayout, scrollX, scrollY, rowSelection, expandable, rowKey, onChange, }: GridI): JSX.Element;
export interface GridI {
    columns?: any;
    dataSource?: ObjI[] | any;
    size?: "middle" | "small" | "large";
    bordered?: boolean;
    loading?: boolean;
    showHeader?: boolean;
    tableLayout?: "auto" | "fixed";
    scrollX?: any;
    scrollY?: any;
    rowSelection?: any;
    expandable?: any;
    rowKey?: any;
    onChange?: any;
}
interface ObjI {
    [name: string]: React.ReactNode | string | number | boolean;
}
export default Grid;
