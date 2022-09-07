import AnswerList from './AnswerList'

function Answer({ handleClick, answer, click, selectedIsCorrect }) {
    return (
        <>
            <ul>
                <AnswerList answer={answer} click={click} selectedIsCorrect={selectedIsCorrect} handleClick={handleClick} />
            </ul>
        </>
    )
}

export default Answer