import { GET } from '@/api/axios';
import { CatRespType } from '@/shared/type';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

export const getSearchCat = async () => {
  return (await GET(API_ENDPOINT)) as CatRespType;
};
