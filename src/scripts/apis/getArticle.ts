export default async (slug: number|string) => {
  const url = new URL(
    `articles/detail/${slug}`,
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );


  const response = await fetch(url,{
    method: "GET",
    credentials: "include",
  });
  const resObject = await response.json();
  return resObject.data as GotArticle;
};
