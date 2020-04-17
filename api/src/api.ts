import * as t from "io-ts";

export type api<Req, Res, ReqCodec, ResCodec> = {
    path: string,
    reqCodec: ReqCodec,
    resCodec: ResCodec,
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


function makeApi<ReqCodec extends t.Any, ResCodec extends t.Any>(path: string, reqCodec: ReqCodec, resCodec: ResCodec)
    : api<t.TypeOf<ReqCodec>, t.TypeOf<ResCodec>, ReqCodec, ResCodec> {
    return { path,  reqCodec, resCodec }
}

export const books = makeApi("/", t.void, Books);
