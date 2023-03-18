import { AppLink } from 'shared/ui/AppLink';
import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    images: string[];
    link: string;
    title?: string;
    size?: 'medium' | 'large';
}

export const Card = memo((props: PropsWithChildren<CardProps>) => {
    const { className, images, link, title, size = 'medium' } = props;

    return (
        <div className={cn(className, cls.Card, cls[size])}>
            <AppLink to={link}>
                <div className={cls.images}>
                    {images.map((image) => (
                        <img
                            src={image}
                            key={image}
                            alt={title}
                            className={cn(
                                cls.image,
                                images.length === 1 ? cls.singleImage : cls.multipleImages,
                            )}
                        />
                    ))}
                </div>
                <h2 className={cls.title}>{title}</h2>
            </AppLink>
        </div>
    );
});
