import { Category} from '../interfaces/Category';

export interface Item {
    id: string;
    name: string;
    caption: string;
    content: string;
    publishedDate: Date;
    isVisible: boolean;
    status: string;
    categories: Category[]
}