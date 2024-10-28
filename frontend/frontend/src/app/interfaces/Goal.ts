import { Category} from '../interfaces/Category';

export interface AddGoal {
    name: string;
    description: string;
    content: string;
    publishedDate: Date;
    status: string;
    categories: Category[]
}