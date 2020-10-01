import React from 'react'
import "./Question.css";

import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';


export default function Question(props) {

    const answers = [props.correct_answer, ...props.incorrect_answers].sort();

    function answerChanged(e) {
        const answers = [...props.answers];
        if(e.target.value === props.correct_answer){
            answers[props.index] = true;
            props.setAnswers(answers);
        }else{
            answers[props.index] = false;
            props.setAnswers(answers);
        }
    }

    return (
        <div className="Question">
            <h3>{props.question}</h3>
            <RadioGroup aria-label="gender" name="gender1" onChange={answerChanged}>
                {answers.map(answer =>
                    <FormControlLabel value={answer} control={<Radio />} label={answer} />
                )
                }
            </RadioGroup>
        </div>
    )
}
