import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface IProps<T> {
  api: (params: any) => Promise<T>;
}

export default function useTable<T = any[]>(props: IProps<T>) {
  const { api } = props;

  const [params, setParams] = useState({});
  const [enabled, setEnabled] = useState();
  const [currentPage, _setCurrentPage] = useState(0);

  const setCurrentPage = (page: number) => {
    setParams({ ...params, page });
    _setCurrentPage(page);
  };

  console.log(params);

  const { data, isLoading } = useQuery<T>({
    queryFn: () => api({ ...params }).then((res: any) => res.data),
    initialData: [] as T,
    queryKey: [api.name, params],
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
  };
}
