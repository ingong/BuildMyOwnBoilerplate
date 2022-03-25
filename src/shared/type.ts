export interface CatRespType {
  data: Error | Array<CatCardType>;
  isError: boolean;
  status: number;
}

export interface CatCardType {
  breeds: [];
  height: number;
  width: number;
  id: string;
  url: string;
}
