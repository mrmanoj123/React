import Questionitem from "./Questioitem"

const Questionsview = ({ questions, currentQuestion, selected, setselected, dispatch, questionanswered }) => {
    return (<>
        <Questionitem item={questions[currentQuestion]} TotalQuestions={questions.length} selected={selected} setselected={setselected} dispatch={dispatch} questionanswered={questionanswered} />
    </>)
}

export default Questionsview