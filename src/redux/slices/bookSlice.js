import { createSlice } from '@reduxjs/toolkit'
import books from '../../fakeData/books.json'

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: books,
        readingList: [],
        finishedList: []
    },

    reducers: {
        addToReadingList: (state, { payload }) => {

            state.readingList.push(payload);
        },
        removeToReadingList: (state, { payload }) => {
            state.readingList = state.readingList.filter(book => book.id !== payload);
        },

    },

})

export const { addToReadingList, removeToReadingList } = bookSlice.actions;

export default bookSlice.reducer;