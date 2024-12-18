import { ICategory } from '../../app/interfaces/Category';

export interface IAddItem {
    name: string;
    caption: string;
    content: string;
    publishedDate: Date;
    isVisible: boolean;
    status: string;
    categories: ICategory[]
}