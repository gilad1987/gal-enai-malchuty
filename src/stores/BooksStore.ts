import { observable, computed, runInAction, action } from "mobx";
import Api from "../services/Api";

export class BooksStore {
  api: Api;
  @observable books: any[] = [];
  @observable booksHtml: any = {};

  constructor(api: Api) {
    this.api = api;
  }

  flatBookCategoryToBook = (item: any): any => {
    if (Array.isArray(item)) {
      return item.map(i => this.flatBookCategoryToBook(i));
    }

    if (!item.children) {
      return item;
    }
    return this.flatBookCategoryToBook(item.children);
  };

  @action getAll = async () => {
    const response = await this.api.getBooks();
    runInAction(() => {
      this.books = response.data.children.reduce(
        (accumulator: any, cat: any) => {
          const item = this.flatBookCategoryToBook(cat);
          accumulator = accumulator.concat(item[0]);
          return accumulator;
        },
        []
      );
    });
  };

  @action getHtml = async (bookId: number): Promise<string> => {
    const response = await this.api.getBookHtml(bookId);
    runInAction(() => {
      this.booksHtml[bookId] = response.data;
    });

    return response.data;
  };
}
