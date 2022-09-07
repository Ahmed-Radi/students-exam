import React, { useState } from 'react'

function Question({ data, click }) {
    return (
        <div>
            <p>{data?.wordList?.length}/{click+1}</p>
            Question
            {data?.wordList?.map(d => <p key={d}>{d.word}</p>).splice(click,1)}
        </div>
    )
}

export default Question