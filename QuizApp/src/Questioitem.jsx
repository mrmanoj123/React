import QuestionOptions from "./QuestionOptions"
const Questionitem = ({ item, TotalQuestions, selected, setselected, dispatch, questionanswered }) => {
    return (
        <>
            <p>Question {item.id} Of {TotalQuestions} </p>
            <h3>{item.question}</h3>
            <QuestionOptions options={item.options} selected={selected} setselected={setselected} dispatch={dispatch} setsel={setselected} questionanswered={questionanswered} qno={item.id} />
        </>
    )
}

export default Questionitem