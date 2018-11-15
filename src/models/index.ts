import * as Nano from 'nano'
import { COUCHDB_URI } from '../config';

export const SIIDB: string = 'siidb'
const nano = Nano(COUCHDB_URI)

export const db = nano.db.use(SIIDB)

