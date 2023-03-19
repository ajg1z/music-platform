import { Artist } from 'entities/Artist';
import { ITrack } from 'entities/Track';

export interface Album {
    id: string;
    author: Artist;
    name: string;
    tracks: ITrack[];
}
