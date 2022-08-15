export interface IListResults<T> {
    count: number;
    next: string;
    previous: string;
    results: T[]
}