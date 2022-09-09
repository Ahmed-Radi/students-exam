import AnswerList from './AnswerList';

function Answer({ handleClick, refHight, answer, click, selectedIsCorrect }) {

    return (
        <>
            <ul className="answer-list" ref={refHight}>
                <AnswerList answer={answer} click={click} selectedIsCorrect={selectedIsCorrect} handleClick={handleClick} />
            </ul>
        </>
    )
}

export default Answer