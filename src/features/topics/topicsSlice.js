import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const {id, name, icon} = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      }
    },
    addQuizIdForTopic: (state, action) => {
      const {quizId, topicId} = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = state => state.topicsReducer.topics;

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
