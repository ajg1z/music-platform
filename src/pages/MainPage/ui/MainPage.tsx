/* eslint-disable max-len */
import type { PropsWithChildren } from 'react';
import { Card } from 'shared/ui/Card';
import { Collections } from 'widgets/Coollections';

interface MainPageProps {}

const MainPage = (props: PropsWithChildren<MainPageProps>) => (
    <div>
        <Card
            images={[
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU',
            ]}
            link=''
            size='medium'
            title='Google animate focus boiox'
        />
    </div>
);

export default MainPage;
