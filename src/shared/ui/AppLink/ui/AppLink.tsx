import cn from 'classnames';
import { FC, memo } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { className, children, theme = 'primary', ...rest } = props;

    return (
        <Link
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
            className={cn(cls.AppLink, className, cls[theme])}
        >
            {children}
        </Link>
    );
});
