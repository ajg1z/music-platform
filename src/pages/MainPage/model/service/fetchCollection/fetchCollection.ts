import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Collection } from 'entities/Collection';

export const fetchCollection = createAsyncThunk<Collection, string, ThunkConfig<string>>(
    'mainPage/fetchCollection',
    async (collectionId, thunkApi) => {
        try {
            const { extra } = thunkApi;

            const response = await extra.publicApi.get<Collection>(`/collections/${collectionId}`);

            if (!response.data) throw new Error();

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    },
);
