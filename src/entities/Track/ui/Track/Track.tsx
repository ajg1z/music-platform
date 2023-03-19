import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';
import cls from './Track.module.scss';

interface TrackProps {
    className?: string;
    image: string;
    author: string;
    name: string;
    isPlay?: boolean;
}

export const Track = memo((props: PropsWithChildren<TrackProps>) => {
    const { className, author, image, name, isPlay } = props;

    return (
        <div className={cn(cls.Track, className)}>
            <img src={image} className={cls.image} alt={name} />
            <Button theme='clear' className={cls.play}>
                <Icon name={isPlay ? 'MdPause' : 'MdPlayArrow'} />
            </Button>
            <Text text={author} textCls={cls.author} fontWeight={600} />
            {' — '}
            <Text text={name} textCls={cls.name} />
        </div>
    );
});
