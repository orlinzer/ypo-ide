
export interface GetUserResult {
  info: Info;
  results: User[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface User {
  name: string,
  about: string,
  image: string
}