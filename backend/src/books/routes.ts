import express, {Request, Response} from "express";
import { books } from "../db/books";
import * as BookService from "./service";

export const booksRouter = express.Router();

booksRouter.get("/", async (req: Request, res: Response) => {
   try {
       const books: Array<books> = await BookService.findAll();
       res.status(200).send(books);
   } catch(e) {
       res.status(404).send(e.message);
   }
});