import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const books = sqliteTable("books", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  isbn10: text("isbn10", { length: 10 }),
  isbn13: text("isbn13", { length: 13 }),
  title: text("title", { length: 255 }),
  origin_title: text("origin_title", { length: 255 }).default(""),
  alt_title: text("alt_title", { length: 255 }).default(""),
  subtitle: text("subtitle", { length: 255 }).default(""),
  url: text("url", { length: 255 }).default(""),
  alt: text("alt", { length: 255 }).default(""),
  image: text("image", { length: 255 }).default(""),
  images: text("images", { mode: "json" }).default({}),
  author: text("author", { mode: "json" }).default([]),
  translator: text("translator", { mode: "json" }).default([]),
  publisher: text("publisher", { length: 255 }),
  pubdate: text("pubdate", { length: 10 }),
  rating: text("rating", { mode: "json" }).default({
    max: 10,
    numRaters: 0,
    average: 0,
    min: 0,
  }),
  tags: text("tags", { mode: "json" }).$type<string[]>().default([]),
  binding: text("binding", { length: 255 }).default(""),
  price: text("price", { length: 255 }).default(""),
  series: text("series", { mode: "json" }).$type<{
    id: string;
    title: string;
  }>(),
  pages: text("pages", { length: 255 }).default(""),
  author_intro: text("author_intro").default(""),
  summary: text("summary").default(""),
  catalog: text("catalog").default(""),
  ebook_url: text("ebook_url", { length: 255 }).default(""),
  ebook_price: text("ebook_price", { length: 255 }).default(""),
});
