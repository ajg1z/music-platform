/* eslint-disable indent */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, useState, useMemo, useCallback, useRef } from 'react';
import { Input, Dropdown, MenuProps, InputRef } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons/lib/icons';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './Search.module.scss';

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

    const filter = useMemo(() => {
        let filterText = t('search.by_name');
        switch (activeFilter) {
            case '2':
                filterText = t('search.by_artist');
                break;
            case '3':
                filterText = t('search.by_collection');
                break;
            case '4':
                filterText = t('search.by_radio');
                break;
            default:
                filterText = t('search.by_name');
        }

        return (
            <Dropdown
                menu={{
                    items: filterOptions,
                    selectable: true,
                    selectedKeys: [activeFilter],
                    onSelect: (e) => {
                        setFilter(e.key);
                    },
                }}
                trigger={['click']}
            >
                <div className={cls.filter}>
                    <p>{filterText}</p>
                    <MenuFoldOutlined />
                </div>
            </Dropdown>
        );
    }, [activeFilter, t, filterOptions]);

    return (
        <Input.Search
            suffix={filter}
            enterButton={t('button.find')}
            className={cn(cls.Search, className)}
            onSearch={onSearch}
            ref={searchRef}
            required
        />
    );
};
