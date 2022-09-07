import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function Question({ data, click }) {
    return (
        <div>
            <ProgressBar completed={click+1} maxCompleted={data?.wordList?.length} />
            <p>{data?.wordList?.length}/{click+1}</p>
            Question
            {data?.wordList?.map(d => <p key={d}>{d.word}</p>).splice(click,1)}
        </div>
    )
}

export default Question