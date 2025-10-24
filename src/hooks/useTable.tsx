import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface IProps<T> {
  api: (params: any) => Promise<any>;
  key?: string;
}

export default function useTable<T = any[]>(props: IProps<T>) {
  const { api, key } = props;

  const [params, setParams] = useState({});
  const [enabled, setEnabled] = useState();
  const [currentPage, _setCurrentPage] = useState(0);
  const [counter, setCounter] = useState(0);

  const refetch = () => setCounter((prev) => prev + 1);

  const setCurrentPage = (page: number) => {
    setParams({ ...params, page });
    _setCurrentPage(page);
  };

  const [debouncedParams,] = useDebounce(counter, 100); // wait 400ms after last change

  const { data, isLoading } = useQuery<T>({
    queryFn: () => api({ ...params }).then((res: any) => res.data),
    initialData: [] as T,
    queryKey: [api.name, params, key, debouncedParams],
    enabled: true,
  });

  return {
    data: data as T,
    isLoading,
    params,
    setParams,
    enabled,
    setEnabled,
    currentPage,
    setCurrentPage,
    refetch,
  };
}
