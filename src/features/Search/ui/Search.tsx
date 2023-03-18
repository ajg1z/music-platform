/* eslint-disable indent */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, useState, useMemo, useCallback, useRef } from 'react';
import { MenuFoldOutlined } from '@ant-design/icons/lib/icons';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './Search.module.scss';
import { Input } from 'shared/ui/Input';
import { Icon } from 'shared/ui/Icon';
import { Button } from 'shared/ui/Button';

interface SearchProps {
    className?: string;
}

export const Search = (props: PropsWithChildren<SearchProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const searchRef = useRef<InputRef | null>(null);

    const [activeFilter, setFilter] = useState('1');

    const filterOptions: MenuProps['items'] = useMemo(
        () => [
            {
                key: '1',
                label: t('search.by_name'),
            },
            {
                key: '2',
                label: t('search.by_artist'),
            },
            {
                key: '3',
                label: t('search.by_collection'),
            },
            {
                key: '4',
                label: t('search.by_radio'),
            },
        ],
        [t],
    );

    const onSearch = () => {
        if (searchRef.current?.input) {
            navigate({
                pathname: RoutePaths.tracks,
                search: `q=${searchRef.current?.input?.value}?filter=${activeFilter}`,
            });
        }
    };

    const activeFilterText = useMemo(() => {
        switch (activeFilter) {
            case '2':
                return t('search.by_artist');
            case '3':
                return t('search.by_collection');
            case '4':
                return t('search.by_radio');
            default:
                return t('search.by_name');
        }
    }, [activeFilter, t]);

    return (
        <div className={cls.Search}>
            <Input />
            <div className={cls.activeFilter}>{activeFilterText}</div>
            <Icon Svg={MenuFoldOutlined} />

            <Button>{t('button.find')}</Button>
        </div>
    );
};
