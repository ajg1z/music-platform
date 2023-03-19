/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, memo, useMemo } from 'react';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Carousel, Slide } from 'shared/ui/Сarousel';
import { Card } from 'shared/ui/Card';
import cls from './TopCollection.module.scss';
import { ITopCollection } from '../model/types/topCollection';

interface TopCollectionProps {
    className?: string;
    collection: ITopCollection;
}

export const TopCollection = memo((props: PropsWithChildren<TopCollectionProps>) => {
    const { className, collection } = props;
    const { t } = useTranslation();

    const items: Slide[] = useMemo(
        () =>
            collection.collections.map((item) => ({
                id: item.id,
                element: <Card link={item.id} title={item.name} images={item.images} />,
            })),
        [collection.collections],
    );

    return (
        <div className={cn(cls.TopCollection, className)}>
            <div className={cls.header}>
                <Text title={collection?.name} titleCls={cls.title} />
                <Button className={cls.showAll}>{t('button.showAll')}</Button>
            </div>
            <Carousel items={items} showSlideCount={4} />
        </div>
    );
});
