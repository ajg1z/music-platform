import { ReactNode, useState, useRef } from 'react';

export const useCarousel = (items: ReactNode[], showCount: number) => {
    const [countDots, setCountDots] = useState(Math.floor(items.length / showCount));

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {};

    const prevSlide = () => {};

    return {
        countDots,
        nextSlide,
        prevSlide,
        wrapperRef,
        carouselRef,
    };
};
