/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

function useFetch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchResult, setFetchResult] = useState<string | null>(null);

  const fetchData = async (url: string, method: string = "GET", data?: any) => {
    setLoading(true);
    setError(null);
    setFetchResult(null);

    const config: AxiosRequestConfig = {
      method: method,
      url: url,
      data: data,
    };

    try {
      const response = await axios(config);
      if (!response.data) {
        throw new Error("No data received");
      }
      setFetchResult("Fetch successful!");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchResult, fetchData };
}

export default useFetch;
