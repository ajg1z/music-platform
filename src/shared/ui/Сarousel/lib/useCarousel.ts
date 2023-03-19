import { useState, useRef, useEffect } from 'react';
import { Slide } from '../ui/Carousel';

export const useCarousel = (items: Slide[], showSlideCount: number) => {
    const [countDots, setCountDots] = useState(Math.ceil(items.length / showSlideCount));
    const [offset, setOffset] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const slideListRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const nextSlide = () => {
        if (activeSlide >= countDots - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide((state) => state + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide <= 0) {
            setActiveSlide(countDots - 1);
        } else {
            setActiveSlide((state) => state - 1);
        }
    };

    const pagination = (index: number) => {
        setActiveSlide(index);
    };

    useEffect(() => {
        if (carouselRef.current && slideListRef.current) {
            const widthSlide = carouselRef.current.clientWidth / showSlideCount;
            slideListRef.current.style.gridTemplateColumns = items
                .map(() => `${widthSlide}px`)
                .join(' ');
        }
        setCountDots(Math.ceil(items.length / showSlideCount));
    }, [items, showSlideCount]);

    useEffect(() => {
        const widthCarousel = carouselRef.current?.clientWidth ?? 0;
        setOffset(activeSlide * -widthCarousel);
    }, [activeSlide]);

    return {
        countDots,
        nextSlide,
        prevSlide,
        slideListRef,
        carouselRef,
        offset,
        pagination,
        activeSlide,
    };
};
