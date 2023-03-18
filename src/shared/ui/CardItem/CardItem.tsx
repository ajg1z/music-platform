import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { PropsWithChildren, ReactNode, useMemo } from 'react';
import { Card } from 'antd';
import cls from './CardItem.module.scss';

export type CardItemSize = 'medium' | 'small';

interface CardItemProps {
    className?: string;
    src?: string;
    title?: string;
    description?: string;
    size?: CardItemSize;
}

const { Meta } = Card;

export const CardItem = (props: PropsWithChildren<CardItemProps>) => {
    const { className, description, title, src, size = 'medium' } = props;

    const cover = useMemo(() => <img className={cls.img} src={src} alt='' />, [src]);

    return (
        <Card cover={cover} className={cn(cls.CardItem, className, cls[size])}>
            <Meta title={title} description={description} />
        </Card>
    );
};
