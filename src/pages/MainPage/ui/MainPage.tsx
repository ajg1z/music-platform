/* eslint-disable max-len */
import { TopCollection } from 'entities/TopCollection';
import type { PropsWithChildren } from 'react';
import { Card } from 'shared/ui/Card';
import { Collections } from 'widgets/Coollections';

interface MainPageProps {}

const MainPage = (props: PropsWithChildren<MainPageProps>) => (
    <div>
        <TopCollection />
    </div>
);

export default MainPage;
