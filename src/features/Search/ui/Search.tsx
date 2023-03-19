/* eslint-disable indent */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, useState, useMemo, useCallback, useRef, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'shared/ui/Dropdown';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Input } from 'shared/ui/Input';
import { Icon } from 'shared/ui/Icon';
import { Button } from 'shared/ui/Button';
import cls from './Search.module.scss';

interface SearchProps {
    className?: string;
}

export const Search = (props: PropsWithChildren<SearchProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const [activeFilter, setActiveFilter] = useState('1');

    const filterOptions = useMemo(
        () => [
            {
                id: '1',
                label: t('search.byName'),
            },
            {
                id: '2',
                label: t('search.byArtist'),
            },
            {
                id: '3',
                label: t('search.byCollection'),
            },
            {
                id: '4',
                label: t('search.byRadio'),
            },
        ],
        [t],
    );

    const onSelectItem = useCallback((id: string) => setActiveFilter(id), []);

    const onSearch = () => {
        navigate({
            pathname: RoutePaths.tracks,
            search: `q=${searchValue}?filter=${activeFilter}`,
        });
    };

    const onSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const activeFilterText = useMemo(() => {
        switch (activeFilter) {
            case '2':
                return t('search.byArtist');
            case '3':
                return t('search.byCollection');
            case '4':
                return t('search.byRadio');
            default:
                return t('search.byName');
        }
    }, [activeFilter, t]);

    return (
        <div className={cn(className, cls.Search)}>
            <Input className={cls.input} value={searchValue} onChange={onSearchValue} />
            <div className={cls.activeFilter}>{activeFilterText}</div>
            <Dropdown
                className={cls.dropdown}
                items={filterOptions}
                selectedItem={activeFilter}
                selectItem={onSelectItem}
            >
                <Icon name='MdTune' className={cls.selectFilter} />
            </Dropdown>
            <Button className={cls.bttn} onClick={onSearch}>
                {t('button.find')}
            </Button>
        </div>
    );
};
