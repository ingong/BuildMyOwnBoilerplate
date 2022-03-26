export interface CatRespType {
  data: Error | Array<CatCardType>;
  isError: boolean;
  status: number;
}

export interface CatCardType {
  breeds: [];
  title: string;
  width: number;
  id: string;
  url: string;
}
