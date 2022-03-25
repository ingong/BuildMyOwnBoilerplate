import { GET } from '@/utils/axios';
import { CatRespType } from '@/shared/type';

const API_ENDPOINT = 'https://api.thecatapi.com/v1/images/search';

export const getSearchCat = async () => {
  return (await GET(API_ENDPOINT)) as CatRespType;
};
