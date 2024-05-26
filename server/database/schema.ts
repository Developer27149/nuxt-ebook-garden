import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const books = sqliteTable("books", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  isbn10: text("isbn10", { length: 10 }).default(""),
  isbn13: text("isbn13", { length: 13 }).default(""),
  // 书名
  title: text("title", { length: 255 }).default(""),
  // 购买链接
  url: text("url", { length: 255 }).default(""),
  // 下载地址
  downloadUrls: text("downloadUrls", { mode: "json" }).default([]),
  // 图片
  images: text("images", { mode: "json" })
    .$type<{
      small: string;
      large: string;
      medium: string;
    }>()
    .default({
      small: "",
      large: "",
      medium: "",
    }),
  // 作者
  author: text("author", { mode: "json" }).$type<string[]>().default([]),
  // 译者
  translator: text("translator", { mode: "json" }).default([]),
  // 投票
  rating: text("rating", { mode: "json" }).default({
    max: 10,
    numRaters: 0,
    average: 0,
    min: 0,
  }),
  // 标签
  tags: text("tags", { mode: "json" }).$type<string[]>().default([]),
  // 同类作品 id 列表
  similar_book_ids: text("similar_books", { mode: "json" }).default([]),
});
