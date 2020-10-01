import React from 'react'
import "./QuestionList.css";

import Question from "../Question/Question.jsx";

export default function QuestionList(props) {
    return (
        <div className="QuestionList">
            {props.questions.map(question => 
                <Question question={question}/>
                )    
            }
        </div>
    )
}
