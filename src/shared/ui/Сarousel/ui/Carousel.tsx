import cn from 'classnames';
import { PropsWithChildren, memo, ReactNode, Fragment, useMemo } from 'react';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { createArray } from 'shared/utils/array';
import { useCarousel } from '../lib/useCarousel';
import cls from './Carousel.module.scss';

export interface Slide {
    id: string;
    element: ReactNode;
}

interface CarouselProps {
    className?: string;
    items: Slide[];
    showSlideCount: number;
}

export const Carousel = memo((props: PropsWithChildren<CarouselProps>) => {
    const { className, items, showSlideCount } = props;

    const {
        carouselRef,
        slideListRef,
        countDots,
        nextSlide,
        offset,
        pagination,
        prevSlide,
        activeSlide,
    } = useCarousel(items, showSlideCount);

    return (
        <div className={cn(className, cls.Carousel)} ref={carouselRef}>
            <div
                className={cls.items}
                ref={slideListRef}
                style={{ transform: `translateX(${offset}px)` }}
            >
                {items.map((item) => (
                    <Fragment key={item.id}>{item.element}</Fragment>
                ))}
            </div>

            <div className={cls.dots}>
                {createArray(countDots).map((index) => (
                    <div
                        key={index}
                        className={cn(activeSlide === index && cls.activeDot, cls.dot)}
                        onClick={() => pagination(index)}
                    />
                ))}
            </div>

            <Button className={cls.rightBtn} onClick={nextSlide}>
                <Icon name='MdChevronRight' />
            </Button>

            <Button className={cls.leftBtn} onClick={prevSlide}>
                <Icon name='MdChevronLeft' />
            </Button>
        </div>
    );
});
