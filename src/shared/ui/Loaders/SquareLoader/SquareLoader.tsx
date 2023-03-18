import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import cls from './SquareLoader.module.scss';

interface SquareLoaderProps {
    className?: string;
}

export const SquareLoader = (props: PropsWithChildren<SquareLoaderProps>) => {
    const { className } = props;

    return <div className={cn(cls.loader, className)} />;
};
