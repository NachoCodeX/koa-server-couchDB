import * as Nano from 'nano'
import { COUCHDB_URI, DB } from '../config';

const nano = Nano(COUCHDB_URI)



// nano.db.list()
//     .then((dbs: string[]) => dbs.some(db => db === SIIDB))
//     .then((isExist: boolean) => isExist ? nano.db.create(SIIDB) : null)

export const db = nano.db.use(DB)


