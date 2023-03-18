import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import cls from './Sidebar.module.scss';
import { Menu } from './Menu';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
    const { className } = props;

    return (
        <div className={cn(cls.Sidebar, className)}>
            <Menu />
        </div>
    );
};
