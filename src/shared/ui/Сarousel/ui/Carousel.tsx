import cn from 'classnames';
import { PropsWithChildren, memo, ReactNode, Fragment } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import cls from './Carousel.module.scss';

interface CarouselProps {
    className?: string;
    items: ReactNode[];
}

export const Carousel = memo((props: PropsWithChildren<CarouselProps>) => {
    const { className, items } = props;

    return (
        <div className={cn(className, cls.Carousel)}>
            <div className={cls.items}>
                {items.map((item) => (
                    <Fragment key={item?.toString()}>{item}</Fragment>
                ))}
            </div>

            <div className={cls.dots}>
                {items.map((item) => (
                    <div key={item?.toString()} className={cls.dot} />
                ))}
            </div>

            <Button className={cls.rightBtn}>
                <Icon name='MdChevronRight' />
            </Button>

            <Button className={cls.leftBtn}>
                <Icon name='MdChevronLeft' />
            </Button>
        </div>
    );
});
