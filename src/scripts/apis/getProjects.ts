const getProjects = async (page: number, pageSize: number) => {
  const url = new URL(
    "projects/list",
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );
  url.search = new URLSearchParams({
    current: page.toString(),
    pageSize: pageSize.toString(),
  }).toString();

  const response = await fetch(url, {
    credentials: "include",
    method: "GET",
  });
  const resObject = await response.json();
  return resObject.data as ListDataMeta<GotProject>;
};

const getIndexProjects = async () => {
  const url = new URL(
    "projects/list/index",
    import.meta.env.PUBLIC_API_ENDPOINT as string,
  );

  const response = await fetch(url, {
    credentials: "include",
    method: "GET",
  });
  const resObject = await response.json();
  console.log(resObject.data);
  return resObject.data as ListDataMeta<Project>;
};

export {
  getProjects,
  getIndexProjects
}