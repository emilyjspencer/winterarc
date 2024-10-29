import { Category } from "./Category";

export interface Goal {
    id: string;
    name: string;
    description: string;
    content: string;
    publishedDate: Date;
    status: string;
    categories: Category[]
}