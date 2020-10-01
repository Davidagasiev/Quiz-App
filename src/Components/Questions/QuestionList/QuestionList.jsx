import React from 'react'
import "./QuestionList.css";

import Question from "../Question/Question.jsx";

export default function QuestionList(props) {
    return (
        <div className="QuestionList">
            <h2>Quiz</h2>
            {props.questions.map((question, index) => 
                <Question key={index}  {...question}/>
                )    
            }
        </div>
    )
}
