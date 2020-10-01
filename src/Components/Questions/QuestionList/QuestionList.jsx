import React from 'react'
import "./QuestionList.css";

import Question from "../Question/Question.jsx";
import { CircularProgress } from '@material-ui/core';

export default function QuestionList(props) {
    return (
        <div className="QuestionList">
            <h2>Quiz</h2>
            {props.loading ? 

                <CircularProgress />
                :
                props.questions.map((question, index) => 
                    <Question key={index} index={index} answers={props.answers} setAnswers={props.setAnswers} {...question}/>
                    )    
            }
        </div>
    )
}
