import React from 'react'

function Finish({ percentage, tryAgain }) {
    return (
        <>
            <div className='result'>your result is {percentage}</div>
            <button className='try-button' onClick={tryAgain}>try again</button>
        </>
    )
}

export default Finish