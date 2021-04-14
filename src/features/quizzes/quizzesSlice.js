import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdForTopic } from '../topics/topicsSlice';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const {id, topicId, name, cardIds} = action.payload;
      state.quizzes[id] = {
        id, 
        topicId,
        name,
        cardIds
      };
    }
  }
});

export const addQuizForTopicId = (quizPayload) => { 
  const {id, topicId} = quizPayload;
  return dispatch => {
  dispatch(addQuizIdForTopic({quizId: id, topicId: topicId}));
  dispatch(quizzesSlice.actions.addQuiz(quizPayload));
}
}
export const selectQuizzes = state => state.quizzes.quizzes;

export const {addQuiz} = quizzesSlice.actions;

export default quizzesSlice.reducer;
