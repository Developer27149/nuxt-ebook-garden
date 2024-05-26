import type { IQuery } from "~/types/common";

export default eventHandler(async (event) => {
  const query: IQuery = await getQuery(event);
  const { page = 1, limit = 6 } = query;
  const res = await useDrizzle().query.books.findMany({
    limit: limit,
    offset: (page - 1) * limit,
  });
  return res;
});
