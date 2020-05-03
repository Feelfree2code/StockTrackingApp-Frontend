import { ColumnType } from '../types/column.type';


export interface GridData {
    columns: GridColumn[];
    dataset: GridRowData[];
    routeSuffix: string;
}

export interface GridRowData {
    values: string[];
}

export interface GridCellValue {
    value: string;
}

export interface GridColumn {
    name: string;
    displayName: string;
    isHidden: boolean;
    orderNum: number;
    columnType: ColumnType;
}
