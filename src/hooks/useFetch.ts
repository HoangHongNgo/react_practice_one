import { useState, useEffect } from "react";
import { HttpMethod } from "../types/httpMethod";

export interface RequestOptions {
  method: HttpMethod;
  body?: string;
  headers?: HeadersInit;
}

interface FetchResult<T> {
  response: T | null;
  error: unknown | null;
  abort: () => void;
}

const useFetch = <T>(url: string, options: RequestOptions) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [abort, setAbort] = useState<() => void>(() => () => {});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const abortController = new AbortController();
        const signal = abortController.signal;
        setAbort(() => abortController.abort);
        const res = await fetch(url, { ...options, signal });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

    return () => {
      abort();
    };
  }, []);

  return { response, error, abort };
};

export default useFetch;
