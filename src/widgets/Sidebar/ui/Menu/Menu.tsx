import { useTranslation } from 'react-i18next';
import { Card } from 'antd';
import cn from 'classnames';
import { PropsWithChildren, useMemo } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Menu.module.scss';

interface MenuProps {
    className?: string;
}

export interface IMenuList {
    path: string;
    label: string;
}

export const Menu = (props: PropsWithChildren<MenuProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    const menuList: IMenuList[] = useMemo(
        () => [
            {
                path: RoutePaths.genres,
                label: t('menu.genres'),
            },
            {
                path: RoutePaths.artists,
                label: t('menu.artists'),
            },
            {
                path: RoutePaths.albums,
                label: t('menu.albums'),
            },
            {
                path: RoutePaths.radio,
                label: t('menu.radio'),
            },
            {
                path: RoutePaths.collections,
                label: t('menu.collections'),
            },
        ],
        [t],
    );

    return (
        <Card className={cn(cls.Menu, className)}>
            <ul className={cls.menuList}>
                {menuList.map((el) => (
                    <AppLink key={el.path} to={el.path}>
                        {el.label}
                    </AppLink>
                ))}
            </ul>
        </Card>
    );
};
