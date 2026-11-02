import { useReducer, useState } from "react"
import reducer from "./Reducers/Reducer"
import quizData from "./Data/Questions"
import Showprogress from "./showprogress"
import Questionsview from "./QuestionView"
import Quizresult from "./QuizResult"
import Header from "./header"
import ThemeContext from "./ContextAPi/ThemeContext"
import './App.css'
const App = () => {

  const initialState = {
    questionanswered: Array.from({ length: quizData.length }).fill(null),
    submitted: false,
    questions: quizData,
    currentQuestion: 0,
    finalmarks: 0
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [selected, setselected] = useState("")
  const [theme, setTheme] = useState("light")
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }} >
        <div className={`app ${theme}`}>
          <Header />
          <Showprogress answeredquestions={state.currentQuestion} TotalQuestion={quizData.length} />
          <Questionsview questions={state.questions} currentQuestion={state.currentQuestion} selected={selected} setselected={setselected} dispatch={dispatch} questionanswered={state.questionanswered} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "30px",
              gap: "12px",
              flexWrap: "wrap"
            }}
          >
            {/* Previous Button */}
            <button
              onClick={() => dispatch({ type: "prev" })}
              style={{
                padding: "12px 22px",
                border: "1px solid #c7d2fe",
                borderRadius: "10px",
                backgroundColor: "#eef2ff",
                color: "#4338ca",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              ← Previous
            </button>

            {/* Next Button */}
            <button
              onClick={() => dispatch({
                type: "next",
                seleanswer: selected
              })}
              style={{
                padding: "12px 26px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#4f46e5",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(79,70,229,0.2)"
              }}
            >
              Next →
            </button>

            {/* Submit Button */}
            {state.currentQuestion + 1 === quizData.length && <button
              onClick={() => dispatch({ type: "submit" })}
              style={{
                padding: "12px 26px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#16a34a",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(22,163,74,0.2)"
              }}
            >
              ✓ Submit
            </button>}
          </div>
          <div>
            {
              state.submitted && <Quizresult finalmarks={state.finalmarks} />
            }
          </div>
        </div>
      </ThemeContext.Provider>

    </>
  )
}

export default App