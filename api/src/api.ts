import * as t from "io-ts";

export type api<T> = {
    path: string,
}

export const Book = t.type({
    id: t.number,
    title: t.string,
    author: t.union([t.string, t.null])
});

export const Books = t.array(Book);

export type booksT = api<t.TypeOf<typeof Books>>;
export const books: booksT = {
    path: "/",
}
