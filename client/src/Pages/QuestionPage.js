import Question from "../components/Question";
import Answer from "../components/Answer";
import { Navigate } from "react-router-dom";

function QuestionPage({ data, handleClick, answer, click, setNext, selectedIsCorrect }) {
    console.log(click,answer.length, data?.wordList?.length)
	return (
		<div className="question-container">
			<div className='question-body'>
				{answer.length === data?.wordList?.length ? (
                        <Navigate to="/score" />
				) : (
					<>
						<Question data={data} click={click} />
						<Answer
							click={click}
							handleClick={handleClick}
                            answer={answer}
                            selectedIsCorrect={selectedIsCorrect}
						/>
                        <button onClick={() => setNext(true)}>next</button>
					</>
				)}
			</div>
		</div>
	);
}

export default QuestionPage;
