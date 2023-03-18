import cn from 'classnames';
import type { PropsWithChildren } from 'react';
import { CardItem } from 'shared/ui/CardItem';
import cls from './Collections.module.scss';

interface CollectionsProps {
    className?: string;
}

const MOCK = [
    {
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Europe Street ',
    },
    {
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Europe Street 3213',
    },
    {
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: 'Europe Street beat',
    },
];

export const Collections = (props: PropsWithChildren<CollectionsProps>) => {
    const { className } = props;

    return (
        <div className={cls.Collections}>
            {MOCK.map((el) => (
                <CardItem key={el.title} src={el.src} title={el.title} />
            ))}
        </div>
    );
};
