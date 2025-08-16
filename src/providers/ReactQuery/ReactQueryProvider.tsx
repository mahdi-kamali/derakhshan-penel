"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function ReactQueryProvider(props: IProps) {
  const { children } = props;

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
