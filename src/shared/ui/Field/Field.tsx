import type { PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Field.module.scss';

interface FieldProps {
    label: string;
    className?: string;
}

export function Field(props: PropsWithChildren<FieldProps>) {
    const { className, label, children } = props;

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={cn(cls.Field, className)}>
            <span>{label}</span>
            {children}
        </label>
    );
}
