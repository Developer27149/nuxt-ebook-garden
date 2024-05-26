import { tables, useDrizzle } from "~/server/utils/drizzle";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const _book = await useDrizzle()
    .insert(tables.books)
    .values(body)
    .returning()
    .get();

  return _book;
});
