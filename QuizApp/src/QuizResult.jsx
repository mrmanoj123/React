const Quizresult = (finalmarks) => {
    return (<>
        {
            finalmarks >= 8 ?
                <p>Congratulation you passed the test</p> :
                <p>Sorry you couldn't clear the test</p>
        }
    </>)
}

export default Quizresult