import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoadingCollection = (state: StateSchema) => state.mainPage?.isLoadingCollection;
export const getLoadingTopCollection = (state: StateSchema) =>
    state.mainPage?.isLoadingTopCollection;

export const getErrorCollection = (state: StateSchema) => state.mainPage?.errorCollection;
export const getErrorTopCollection = (state: StateSchema) => state.mainPage?.errorTopCollection;

export const getCollection = (state: StateSchema) => state.mainPage?.collection;
export const getTopCollection = (state: StateSchema) => state.mainPage?.topCollection;
