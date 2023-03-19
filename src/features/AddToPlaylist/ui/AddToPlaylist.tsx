import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './AddToPlaylist.module.scss';

interface AddToPlaylistProps {
    className?: string;
}

export const AddToPlaylist = memo((props: PropsWithChildren<AddToPlaylistProps>) => {
    const { className } = props;

    return (
        <Button theme='clear' className={cn(className, cls.AddToPlaylist)}>
            <Icon name='MdAddCircleOutline' className={cls.icon} />
        </Button>
    );
});
