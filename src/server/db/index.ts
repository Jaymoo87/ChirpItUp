import * as mysql from 'mysql';
import * as express from 'express';

import chirps from './chirps';
import users from './users'

export const config = {
    user: 'root',
    password: 'password',
    host: 'localhost',
    port: 3306,
    database: 'chirperdb'
};

const pool = mysql.createPool(config)

export const Query = <T = mysql.OkPacket>  (query: string, values: unknown[] = []) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

export default {
    chirps,
    users
}