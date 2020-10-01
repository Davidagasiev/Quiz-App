import React from 'react'
import "./Question.css";

export default function Question(props) {
    return (
        <div className="Question">
            <h3>{props.question.question}</h3>
        </div>
    )
}
