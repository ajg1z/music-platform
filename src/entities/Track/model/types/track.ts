import { Genre } from 'entities/Genre';

export interface ITrack {
    id: string;
    name: string;
    author: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    genres: Genre[];

    // временно
    isFavorite?: boolean;
}
