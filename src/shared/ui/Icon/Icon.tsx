import { FC, memo, VFC, SVGProps } from 'react';
import cn from 'classnames';
import * as MaterialIcons from 'react-icons/md';
import cls from './Icon.module.scss';

type TypeMaterialIconName = keyof typeof MaterialIcons;

interface IconProps {
    className?: string;
    name: TypeMaterialIconName;
}

export const Icon: FC<IconProps> = memo((props) => {
    const { className, name } = props;
    const Component = MaterialIcons[name];

    return <Component className={cn(cls.icon, className)} />;
});
