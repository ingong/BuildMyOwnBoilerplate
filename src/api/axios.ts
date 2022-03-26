import axios, { AxiosRequestConfig } from 'axios';

type MethodType = 'get' | 'post' | 'put' | 'delete';

const fetchWrap = async ({
  method,
  url,
  params,
  body,
}: {
  method: MethodType;
  url: string;
  params?: {};
  body?: {};
}) => {
  const source = axios.CancelToken.source();
  try {
    const config: AxiosRequestConfig = {
      // baseURL: API_ENDPOINT,
      // withCredentials: true,
      params,
      cancelToken: source.token,
      // headers: {
      //   Authorization: token ? `Bearer ${token}` : "",
      // }
    };

    const { data, status } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};
    return { data, isError: false, status };
  } catch (error: any) {
    // if (error.response.status === 401) {
    //   localStorage.removeItem('token');
    //   window.location.href = '/401';
    // }
    // 에러 발생 시 추가동작
    console.log(error.response.status, error);
    source.cancel();
    return { data: error, isError: true, status: 400 };
  }
};

export const GET = (url: string, params?: {}) => fetchWrap({ method: 'get', url, params });

export const POST = (url: string, body?: {}, params?: {}) =>
  fetchWrap({ method: 'post', url, body, params });

export const PUT = (url: string, body?: {}, params?: {}) =>
  fetchWrap({ method: 'put', url, body, params });

export const DELETE = (url: string) => fetchWrap({ method: 'delete', url });
