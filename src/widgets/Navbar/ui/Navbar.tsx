import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import Logo from 'shared/assets/img/logo.png';
import { Search } from 'features/Search';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { UserOutlined } from '@ant-design/icons';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: PropsWithChildren<NavbarProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cn(cls.Navbar, className)}>
            <div className={cls.content}>
                <div className={cls.logo}>
                    <a href={RoutePaths.main}>
                        <img src={Logo} alt='Logo' />
                    </a>
                </div>
                <Search />
                <div className={cls.login}>
                    <UserOutlined />
                    <p>{t('myMusic')}</p>
                </div>
            </div>
        </div>
    );
};
