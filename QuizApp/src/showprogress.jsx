const Showprogress = ({ answeredquestions, TotalQuestion }) => {
    console.log(answeredquestions)
    return (<>
        <div
            style={{
                width: '100%',
                background: 'lightgray',
                border: '1px solid gray',
                height: '10px',
                borderRadius: '10px',
                textAlign: 'center'
            }}>

            <div
                style={{
                    width: answeredquestions * 189,
                    background: 'green',
                    border: '1px solid green',
                    height: '8px',
                    borderRadius: '10px',

                }}

            >

            </div>
            <span>Total Questions :  {TotalQuestion}</span>
        </div>
    </>)
}
export default Showprogress