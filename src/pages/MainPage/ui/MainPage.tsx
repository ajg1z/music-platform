/* eslint-disable max-len */
import { TopCollection } from 'entities/TopCollection';
import { ITrack, Track } from 'entities/Track';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import cls from './MainPage.module.scss';

interface MainPageProps {}

const img: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU';

const images = [img, img, img, img];
const tracks: ITrack[] = [];

const MainPage = (props: PropsWithChildren<MainPageProps>) => {
    const { t } = useTranslation('main');

    return (
        <div>
            <TopCollection
                collection={{
                    id: '1',
                    name: 'Popular collections',
                    collections: [
                        { id: '1', name: 'Every day', tracks, images },
                        { id: '2', name: 'Sport music', tracks, images },
                        { id: '3', name: 'Holiday collection', tracks, images },
                        { id: '4', name: 'Verify', tracks, images },
                        { id: '5', name: 'Fifteen', tracks, images },
                        { id: '6', name: 'Ramsteain', tracks, images },
                        { id: '7', name: 'Hollywood Undead', tracks, images },
                        { id: '8', name: 'Width Dogs 2', tracks, images },
                    ],
                }}
            />

            <Text title={t('title')} titleCls={cls.title} />

            <Text text={t('subTitle')} wrapCls={cls.subTitle} />

            <Text text={t('text')} textCls={cls.text} />

            <Button className={cls.btn}>{t('listenTop100')}</Button>

            <Track author='Jon Till' image={img} name='Hoop' />
        </div>
    );
};

export default MainPage;
