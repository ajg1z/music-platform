import { ITrack, Track } from 'entities/Track';
import { FullTrack } from 'widgets/FullTrack';
import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import cls from './TrackList.module.scss';

interface TrackListProps {
    className?: string;
    tracks: ITrack[];
}

export const TrackList = memo((props: PropsWithChildren<TrackListProps>) => {
    const { className, tracks } = props;

    return (
        <div className={cn(cls.TrackList, className)}>
            {tracks.map((track) => (
                <FullTrack key={track.id} track={track} />
            ))}
        </div>
    );
});
