/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Carousel } from 'shared/ui/Сarousel';
import { Card } from 'shared/ui/Card';
import cls from './TopCollection.module.scss';
import { ITopCollection } from '../model/types/topCollection';

interface TopCollectionProps {
    className?: string;
    collection?: ITopCollection;
}

const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU';

const images = [img, img, img, img];

export const TopCollection = memo((props: PropsWithChildren<TopCollectionProps>) => {
    const { className, collection } = props;
    const { t } = useTranslation();

    const popularCollections = [
        <Card images={images} link='' title='Dougil Frank toulp' />,
        <Card images={images} link='' title='Alpha mir async. Frank toulp' />,
        <Card images={images} link='' title='Template week, qwerty right jop' />,
        <Card images={images} link='' title='Dougil Frank.' />,
        <Card images={images} link='' title='aAAA.' />,
        <Card images={images} link='' title='https://encrypted-tbn0.gstatic.com/images.' />,
    ];

    return (
        <div className={cn(cls.TopCollection, className)}>
            <div className={cls.header}>
                <Text title={collection?.name} />
                <Button>{t('button.showAll')}</Button>
            </div>
            <Carousel items={popularCollections} />
        </div>
    );
});
