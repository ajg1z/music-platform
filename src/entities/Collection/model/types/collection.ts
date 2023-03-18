import { Track } from 'entities/Track';

export interface Collection {
    id: string;
    name: string;
    tracks: Track[];
}
