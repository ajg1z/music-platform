import { ITopCollection } from 'entities/TopCollection';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchTopCollection = createAsyncThunk<ITopCollection, string, ThunkConfig<string>>(
    'mainPage/fetchTopCollection',
    async (topCollectionId, thunkApi) => {
        try {
            const { extra } = thunkApi;

            const response = await extra.publicApi.get<ITopCollection>(
                `/topCollections/${topCollectionId}`,
            );

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    },
);
