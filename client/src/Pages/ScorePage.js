import React from 'react'
import Finish from '../components/Finish'

function ScorePage({ percentage, tryAgain }) {
    return (
        <div className="score-container">
            <Finish percentage={percentage} tryAgain={tryAgain} />
        </div>
    )
}

export default ScorePage