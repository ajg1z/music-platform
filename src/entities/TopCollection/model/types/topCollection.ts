import { Collection } from 'entities/Collection';

export interface ITopCollection {
    name: string;
    id: string;
    collections: Collection[];
}
