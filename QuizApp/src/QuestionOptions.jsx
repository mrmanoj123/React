
const QuestionOptions = ({ options, selected, dispatch, setsel, questionanswered, qno }) => {

    const unsel = {
        listStyle: "none",
        padding: "16px 20px",
        marginBottom: "12px",
        border: "2px solid #e5e7eb",
        borderRadius: "12px",
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "12px"
    };

    const selct = {
        ...unsel,
        border: "2px solid #6366f1",
        backgroundColor: "#eef2ff",
        color: "#4338ca",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(99,102,241,0.15)"
    };

    const handleSelect = (value) => {
        dispatch({
            type: "selected",
            answer: value
        });
        setsel(value)
    };



    return (
        <div>

            {
                questionanswered[qno] === null ?
                    options.map((ele) => (
                        <li
                            key={ele}
                            style={selected === ele ? selct : unsel}
                            onClick={(e) => handleSelect(e.currentTarget.innerText)}
                        >
                            {ele}
                        </li>
                    ))
                    :

                    options.map((ele) => (
                        <li
                            key={ele}
                            style={questionanswered[qno - 1] === ele ? selct : unsel}
                            onClick={(e) => handleSelect(e.currentTarget.innerText)}
                        >
                            {ele}
                        </li>
                    ))

            }

        </div>
    );
};

export default QuestionOptions;
