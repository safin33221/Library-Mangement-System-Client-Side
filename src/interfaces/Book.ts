
export interface IBook {

    _id?: string
    title: string;
    description: string;
    author: string;
    isbn: string;
    publishedYear?: number;
    genre?: string[];
    available: boolean;
    copies: number;
    createdAt: Date;
    updatedAt: Date;
}