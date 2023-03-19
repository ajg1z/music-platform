import { ITrack } from 'entities/Track';

export interface Collection {
    id: string;
    name: string;
    images: string[];
    tracks: ITrack[];
}
