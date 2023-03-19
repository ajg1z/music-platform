import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './AddToFavorite.module.scss';

interface AddToFavoriteProps {
    className?: string;
}

export const AddToFavorite = memo((props: PropsWithChildren<AddToFavoriteProps>) => {
    const { className } = props;

    return (
        <Button theme='clear' className={cn(className, cls.AddToFavorite)}>
            <Icon name='MdFavoriteBorder' className={cls.icon} />
        </Button>
    );
});
