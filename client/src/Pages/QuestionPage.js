import Question from "../components/Question";
import Answer from "../components/Answer";
import { Navigate } from "react-router-dom";

function QuestionPage({ data, handleClick, answer,setClick, click, next, setNext, selectedIsCorrect }) {
    console.log(click,answer.length, data?.wordList?.length)
	const fun = () => {
        setClick(prev => prev + 1);
		setNext(prev=> prev = true)
	}
	console.log(answer[click]?.isCorrect)
	return (
		<div className="question-container">
			<div className='question-body'>
				{answer.length === data?.wordList?.length ? (
                        <Navigate to="/score" />
				) : (
					<>
						{
							next ? <>
								<Question data={data} click={click} />
								<Answer
									click={click}
									handleClick={handleClick}
									answer={answer}
									selectedIsCorrect={selectedIsCorrect}
								/>
							</> : <>
								{
									answer[click]?.isCorrect ? <p>true</p> : <p>false</p>
								}

							</>
						}
                        <button onClick={() => fun()}>next</button>
					</>
				)}
			</div>
		</div>
	);
}

export default QuestionPage;
