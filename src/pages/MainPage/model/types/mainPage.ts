import { Collection } from 'entities/Collection';
import { ITopCollection } from 'entities/TopCollection';

export interface MainPageSchema {
    isLoadingTopCollection: boolean;
    errorTopCollection?: string;
    topCollection?: ITopCollection;
    collection?: Collection;
    errorCollection?: string;
    isLoadingCollection: boolean;
}
