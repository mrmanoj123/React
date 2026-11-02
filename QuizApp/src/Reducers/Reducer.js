const reducer = (state, action) => {

    switch (action.type) {

        case "next": {
            const currentval = state.currentQuestion + 1;
            const valuecheck = currentval > 10

            return {
                ...state,
                currentQuestion: valuecheck ? state.currentQuestion : state.currentQuestion + 1,

            };
        }
        case "prev": {
            const currentval = state.currentQuestion - 1;
            const valuecheck = currentval < 0
            return {
                ...state,
                currentQuestion: valuecheck ? state.currentQuestion : state.currentQuestion - 1
            }
        }
        case "selected": {
            console.log("Selected answer:", action.answer);

            return {
                ...state,
                questionanswered: state.questionanswered.map((ele, index) =>
                    index === state.currentQuestion
                        ? action.answer
                        : ele
                )
            };
        }
        case "submit": {
            const finalmarks = state.questions.filter((ele, index) =>
                ele.answer === state.questionanswered[index]
            )
            console.log(finalmarks)

        }
            break

        default:
            return state;
    }
};

export default reducer;