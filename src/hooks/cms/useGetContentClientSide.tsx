"use client";
import { useEffect, useState } from "react";

interface UseGetContentProps {
  path: string;
  query?: string;
}

const useGetContentClientSide = ({ path, query }: UseGetContentProps) => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}${
    query ? `?${query}` : ""
  }`;
  const [data, setData] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          headers: new Headers({
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          }),
        });

        const { data } = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetContentClientSide;
