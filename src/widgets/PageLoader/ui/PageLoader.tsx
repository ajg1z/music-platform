import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import { SquareLoader } from 'shared/ui/Loaders/SquareLoader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    text?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
    const { className, text } = props;

    return (
        <div className={cn('center-page', className)}>
            <div className={cls.loaderBlock}>
                <SquareLoader />
                {text && <p>{text}</p>}
            </div>
        </div>
    );
};
