import { FC, memo } from 'react';
import cn from 'classNames';
import cls from './CircleLoader.module.scss';

type CircleLoaderSize = 'small' | 'medium' | 'large';

interface CircleLoaderProps {
    size?: CircleLoaderSize;
    className?: string;
}

export const CircleLoader: FC<CircleLoaderProps> = memo((props) => {
    const { className, size = 'large' } = props;
    return (
        <div className={cn(cls.CircleLoader, className, cls[size])}>
            <span />
        </div>
    );
});
