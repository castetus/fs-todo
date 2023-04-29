export interface IUser {
  id: number,
  name: string,
};

export interface ITask {
  id: number,
  listId: number,
  name: string,
  description?: string,
  createdAt: number,
  created: IUser,
  completed: boolean,
  estimate?: string,
};

export interface IList {
  id: number,
  name: string,
  createdAt: Date | number,
  estimate?: Date | number,
  completed: boolean,
};

export interface IResponse {
  err_code: number,
  text: string,
};