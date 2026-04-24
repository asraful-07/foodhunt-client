export interface ICategory {
  id: string;
  name: string;
}

export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  category: ICategory;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateMealPayload {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
}

export type IUpdateMealPayload = Partial<ICreateMealPayload>;
