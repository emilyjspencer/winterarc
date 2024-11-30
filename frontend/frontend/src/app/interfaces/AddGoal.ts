import { ICategory} from './Category';

export interface IAddGoal {
    name: string;
    description: string;
    content: string;
    publishedDate: Date;
    status: string;
    categories: ICategory[]
}