import { actionType } from "../action/type";

const intialState = {
    questionList: [],
    resultList: [],
};
const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.SET_QUESTION: {
            state.questionList = action.payload
            return { ...state }
        }
        case actionType.SET_ANSWER: {
            let cloneAnswers = [...state.resultList]
            const isInResultList = state.resultList.findIndex(result => result.QuestionId === action.payload.QuestionId);
            if (isInResultList !== -1) {
                cloneAnswers[isInResultList].answer = action.payload.answer
            } else {
                cloneAnswers.push(action.payload)
            }
            state.resultList = cloneAnswers

            return { ...state }
        }
        default:
            return state;
    }
}
export default reducer;