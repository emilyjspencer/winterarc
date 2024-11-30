import { ICategory} from '../interfaces/Category';

export interface IItem {
    id: string;
    name: string;
    caption: string;
    content: string;
    publishedDate: Date;
    isVisible: boolean;
    status: string;
    categories: ICategory[]
}