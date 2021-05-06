import * as mysql from 'mysql';
import { MySQL_Response } from '../../utilities/types';
import { sqlConfig } from '../config';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = MySQL_Response>(query: string, values?: any[]) => {
    const formattedSql = mysql.format(query, values);

    // Super handy debugger - logs every SQL statement out as how it's formatted
    console.log({ formattedSql });

    return new Promise<T>((resolve, reject) => {
        pool.query(formattedSql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}