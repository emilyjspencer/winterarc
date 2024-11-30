import { ICategory} from '../interfaces/Category';

export interface IUpdateItem {
    name: string;
    caption: string;
    content: string;
    publishedDate: Date;
    isVisible: boolean;
    status: string;
    categories: string[]
}

