export default async (page: number, pageSize: number) => {
  const url = new URL(
    "articles/list",
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );
  url.search = new URLSearchParams({
    current: page.toString(),
    pageSize: pageSize.toString(),
  }).toString();

  const response = await fetch(url,{
    credentials: "include",
    method: "GET",
  });
  const resObject = await response.json();
  return resObject.data as ListDataMeta<GotArticle>;
};