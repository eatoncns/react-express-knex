import * as BookService from "./service";
import * as api from "api";
import {router} from "../router";

export const booksRouter = router();

booksRouter.handleGet(api.books, async () => {
   return await BookService.findAll();
});

booksRouter.handlePost(api.createBook, async (bookFields) => {
   return await BookService.create(bookFields);
});
