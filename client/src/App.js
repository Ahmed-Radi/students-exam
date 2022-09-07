import "./App.css";
import QuestionPage from "./Pages/QuestionPage";
import ScorePage from "./Pages/ScorePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [click, setClick] = useState(0);
	const [percentage, setPercentage] = useState(0);
    const [next, setNext] = useState(false)
    const [selectedIsCorrect, setSelectedIsCorrect] = useState()
    const navigate = useNavigate();

	useEffect(() => {
		axios("http://localhost:4001/").then(res => setData(res.data));
	}, []);

	const handleClick = choose => {
        const newData = [...data.wordList];
        let word = newData?.splice(click, 1)[0]?.word;
        setAnswer(prev => prev.concat({ word, choose: choose }));
        setClick(prev => prev + 1);
        setSelectedIsCorrect(prev => prev = true)
	};

    const isCorrectFun = () => {
        const output = answer.map(({ word, choose }) => ({
            word,
            choose,
            isCorrect: data?.wordList?.find((item) => word === item.word)?.pos === choose,
        }));
        setAnswer(prev => prev = output);
    }

    const calculateResult = () => {
        let score = answer?.reduce((prev, {word, choose}) => {
            return data?.wordList.find(item => word === item.word)?.pos === choose ? prev + 1 : prev
        }, 0)
        setPercentage(prev => prev = ((score / data?.wordList?.length)* 100).toFixed(0))
    }

    useEffect(() => {
        setSelectedIsCorrect(prev => prev = answer[click-1]?.isCorrect)
        isCorrectFun()
        calculateResult()
    } , [click])

	const tryAgain = () => {
        navigate('/');
		setClick(prev => (prev = 0));
		setAnswer(prev => (prev = []));
        setPercentage(0)
	};

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<QuestionPage
							data={data}
							click={click}
							handleClick={handleClick}
                            answer={answer}
                            selectedIsCorrect={selectedIsCorrect}
                            setNext={setNext}
						/>
					}
				/>
				<Route path='/score' element={<ScorePage percentage={percentage} tryAgain={tryAgain} />} />
			</Routes>
		</>
	);
}

export default App;