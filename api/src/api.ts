import * as t from "io-ts";

export type api<Req, Res> = {
    path: string,
    reqCodec: t.Decoder<unknown, Req>,
    resCodec: t.Decoder<unknown, Res>,
}

const nothing = t.type({});

const Id = t.type({
  id: t.Int,
});

const BookFields = t.type({
    title: t.string,
    author: t.union([t.string, t.null])
});

export const Book = t.intersection([Id, BookFields])

export const Books = t.array(Book);


function makeApi<ReqCodec extends t.Any, ResCodec extends t.Any>(path: string, reqCodec: ReqCodec, resCodec: ResCodec)
    : api<t.TypeOf<ReqCodec>, t.TypeOf<ResCodec>> {
    return { path,  reqCodec, resCodec }
}

export const books = makeApi("/", nothing, Books);
