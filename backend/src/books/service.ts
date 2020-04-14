import { books } from "../db/books"
import { db } from "../db/connection";

export const findAll = async (): Promise<Array<books>> => {
    return db.select().table('books');
}
