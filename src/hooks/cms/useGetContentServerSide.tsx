'use server'
interface UseGetContentProps {
  path: string;
  query?: string;
}

const useGetContentServerSide = async ({ path, query }: UseGetContentProps) => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}${
    query ? `?${query}` : ""
  }`;

  const response = await fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    }),
  });

  const { data } = await response.json();

  return data;
};

export default useGetContentServerSide;
