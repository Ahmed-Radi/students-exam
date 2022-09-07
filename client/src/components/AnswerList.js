import { useEffect, useRef } from "react"

function AnswerList({  handleClick, answer, click, selectedIsCorrect }) {
    const words = ["adjective", "noun", "verb", "adverb"]
    const wrong = {
        background: 'red',
    }
    return (
        <>
            {
                words.map((word,i) => (
                    <>
                    <li key={word} onClick={_ => handleClick(word)}>{word}</li>
                        {/* {console.log(word, answer[click]?.isCorrect)} */}
                    </>
                ))
            }
        </>
    )
}

export default AnswerList