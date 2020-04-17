import * as t from "io-ts";

export type api<T> = {
    path: string,
}

const Id = t.type({
  id: t.Int,
});

const BookFields = t.type({
    title: t.string,
    author: t.union([t.string, t.null])
});

export const Book = t.intersection([Id, BookFields])

export const Books = t.array(Book);

export type booksT = api<t.TypeOf<typeof Books>>;
export const books: booksT = {
    path: "/",
}

