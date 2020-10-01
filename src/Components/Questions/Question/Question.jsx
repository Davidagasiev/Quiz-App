import React from 'react'
import "./Question.css";

import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';


export default function Question(props) {

    const answers = [props.correct_answer, ...props.incorrect_answers].sort();

    return (
        <div className="Question">
            <h3>{props.question}</h3>
            <RadioGroup aria-label="gender" name="gender1">
                {answers.map(answer =>
                    <FormControlLabel value={answer} control={<Radio />} label={answer} />
                )
                }
            </RadioGroup>
        </div>
    )
}
