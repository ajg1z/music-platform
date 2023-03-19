import cn from 'classnames';
import { memo, PropsWithChildren } from 'react';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 'M' | 'L';

interface TextProps {
    wrapCls?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    titleCls?: string;
    textCls?: string;
    fontWeight?: number;
}

export const Text = memo((props: PropsWithChildren<TextProps>) => {
    const {
        text,
        title,
        align = 'left',
        theme = 'primary',
        size = 'M',
        wrapCls,
        titleCls,
        textCls,
        fontWeight,
    } = props;

    return (
        <div
            className={cn(
                cls.Text,
                wrapCls,
                cls[theme],
                cls[align],
                cls[size],
                cls[`fontWeight-${fontWeight}`],
            )}
        >
            {title && <p className={cn(titleCls, cls.title)}>{title}</p>}
            {text && <p className={cn(textCls, cls.text)}>{text}</p>}
        </div>
    );
});
