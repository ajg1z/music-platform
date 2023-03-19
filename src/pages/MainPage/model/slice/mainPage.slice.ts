import { createSlice } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/mainPage';
import { fetchCollection } from '../service/fetchCollection/fetchCollection';
import { fetchTopCollection } from '../service/fetchTopCollection/fetchTopCollection';

const initialState: MainPageSchema = {
    isLoadingCollection: true,
    isLoadingTopCollection: true,
};

export const mainPageSlice = createSlice({
    initialState,
    name: 'mainPage',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollection.fulfilled, (state, action) => {
                state.isLoadingCollection = false;
                state.collection = action.payload;
            })
            .addCase(fetchCollection.pending, (state) => {
                state.isLoadingCollection = true;
                state.errorCollection = undefined;
            })
            .addCase(fetchCollection.rejected, (state, action) => {
                state.isLoadingCollection = false;
                state.errorCollection = action.payload;
            })

            .addCase(fetchTopCollection.fulfilled, (state, action) => {
                state.isLoadingTopCollection = false;
                state.topCollection = action.payload;
            })
            .addCase(fetchTopCollection.pending, (state) => {
                state.isLoadingTopCollection = true;
                state.errorTopCollection = undefined;
            })
            .addCase(fetchTopCollection.rejected, (state, action) => {
                state.isLoadingTopCollection = false;
                state.errorTopCollection = action.payload;
            });
    },
});

export const { actions: mainPageActions } = mainPageSlice;
export const { reducer: mainPageReducer } = mainPageSlice;
