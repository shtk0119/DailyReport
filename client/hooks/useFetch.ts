import axios from 'axios';
import useSWR from 'swr';

const fetcher = async <ResponseData, Data>(url: string, dataKey: keyof ResponseData): Promise<Data> => {
  const response = await axios.get<ResponseData>(url);
  const data = response.data[dataKey];
  return data as Data;
};

export const useFetch = <ResponseData, Data>(url: string, dataKey: keyof ResponseData) => {
  const { data, error, isLoading, isValidating } = useSWR<Data, Error>(
    url,
    async (fetchUrl: string) => fetcher<ResponseData, Data>(fetchUrl, dataKey)
  );

  return { data, error, isLoading, isValidating };
};
