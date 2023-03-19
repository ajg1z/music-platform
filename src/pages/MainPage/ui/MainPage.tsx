/* eslint-disable max-len */
import { TopCollection } from 'entities/TopCollection';
import { memo, PropsWithChildren, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/wrapper/DynamicModuleLoader';
import { ReducersList } from 'shared/lib/wrapper/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button';
import { SquareLoader } from 'shared/ui/Loaders/SquareLoader';
import { Text } from 'shared/ui/Text';
import { TrackList } from 'widgets/TrackList';
import {
    getCollection,
    getErrorCollection,
    getErrorTopCollection,
    getLoadingCollection,
    getLoadingTopCollection,
    getTopCollection,
} from '../model/selectors/mainPage';
import { fetchCollection } from '../model/service/fetchCollection/fetchCollection';
import { fetchTopCollection } from '../model/service/fetchTopCollection/fetchTopCollection';
import { mainPageReducer } from '../model/slice/mainPage.slice';
import cls from './MainPage.module.scss';

interface MainPageProps {}

const reducers: ReducersList = {
    mainPage: mainPageReducer,
};

const MainPage = memo((props: PropsWithChildren<MainPageProps>) => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();

    const collection = useSelector(getCollection);
    const topCollection = useSelector(getTopCollection);

    const isLoadingCollection = useSelector(getLoadingCollection);
    const isLoadingTopCollection = useSelector(getLoadingTopCollection);

    const errorTopCollection = useSelector(getErrorTopCollection);
    const errorCollection = useSelector(getErrorCollection);

    useEffect(() => {
        dispatch(fetchTopCollection('1'));
        dispatch(fetchCollection('1'));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
            <div>
                {isLoadingTopCollection ? (
                    <SquareLoader className={cls.loader} />
                ) : (
                    topCollection && <TopCollection collection={topCollection} />
                )}

                {errorTopCollection && (
                    <Text
                        theme='error'
                        align='center'
                        text={t('errorTopCollection')}
                        wrapCls={cls.errorText}
                    />
                )}

                <Text title={t('title')} titleCls={cls.title} />

                <Text text={t('subTitle')} wrapCls={cls.subTitle} />

                <Text text={t('text')} textCls={cls.text} />

                <Button className={cls.btn}>{t('listenTop100')}</Button>

                {isLoadingCollection ? (
                    <SquareLoader className={cls.loader} />
                ) : (
                    collection && <TrackList tracks={collection?.tracks} />
                )}

                {errorCollection && (
                    <Text
                        wrapCls={cls.errorText}
                        align='center'
                        theme='error'
                        text={t('errorCollection')}
                    />
                )}
            </div>
        </DynamicModuleLoader>
    );
});

export default MainPage;
