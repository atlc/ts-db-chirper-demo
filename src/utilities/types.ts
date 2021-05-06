export interface MySQL_Success {
    fieldCount?: number;
    affectedRows?: number;
    insertId?: number;
    serverStatus?: number;
    warningCount?: number;
    message?: string;
    protocol41?: boolean;
    changedRows?: number;
}

export interface MySQL_Error {
    code?: string;
    errno?: number;
    sqlMessage?: string;
    sqlState?: string;
    index?: number;
    sql?: string;
}

export type MySQL_Response = MySQL_Success & MySQL_Error;