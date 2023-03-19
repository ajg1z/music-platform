import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { ITrack, Track } from 'entities/Track';
import { AddToPlaylist } from 'features/AddToPlaylist';
import { AddToFavorite } from 'features/AddToFavorite';
import cls from './FullTrack.module.scss';

interface FullTrackProps {
    className?: string;
    track: ITrack;
    active?: boolean;
}

export const FullTrack = memo((props: PropsWithChildren<FullTrackProps>) => {
    const { className, track, active } = props;
    const { t } = useTranslation();

    return (
        <div className={cn(cls.FullTrack, className, { [cls.active]: active })}>
            <Track author={track.author} image={track.picture} name={track.name} />
            <div className={cls.action}>
                <AddToPlaylist />
                <AddToFavorite />
            </div>
        </div>
    );
});
