import { tables, useDrizzle } from "~/server/utils/drizzle";

export default eventHandler(async (event) => {
  const { book } = await readBody(event);
  console.log(book);
  const _book = await useDrizzle()
    .insert(tables.books)
    .values(book)
    .returning()
    .get();

  return _book;
});
