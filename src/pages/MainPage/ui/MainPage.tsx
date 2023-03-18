import type { PropsWithChildren } from 'react';
import { Collections } from 'widgets/Coollections';

interface MainPageProps {}

const MainPage = (props: PropsWithChildren<MainPageProps>) => (
    <div>
        <Collections />
    </div>
);

export default MainPage;
