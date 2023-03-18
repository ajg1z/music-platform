import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
    const { className, children, ...otherProps } = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Link {...otherProps} className={cn(cls.AppLink, className)}>
            {children}
        </Link>
    );
};
