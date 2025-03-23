export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
  [key: string]: any;
}
