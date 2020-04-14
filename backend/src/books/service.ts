import { book } from "../db/book"
import { db } from "../db/connection";

export const findAll = async (): Promise<Array<book>> => {
    return db.select().table('book');
}
