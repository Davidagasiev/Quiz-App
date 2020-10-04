import React from 'react'
import "./Question.css";

import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';


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
        <div className={`Question ${props.showResult && props.answers[props.index] ? 
                                        "right"
                                    : 
                                        ""}`
                                    }>
            <h3>{props.question}</h3>
            <RadioGroup aria-label="gender" name="gender1" onChange={answerChanged}>
                {answers.map((answer, index) =>
                    props.showResult ?
                    <div key={index} className="answer">
                        <FormControlLabel
                            disabled
                            value={answer} 
                            control={<Radio />} 
                            label={answer} />
                        { answer === props.correct_answer ?
                                <CheckCircleSharpIcon style={{color: "green"}} />
                            :
                                <CancelSharpIcon style={{color: "red"}} />
                        }
                    </div>
                        :
                    <FormControlLabel
                        key={index}
                        value={answer} 
                        control={<Radio />} 
                        label={answer} />
                )
                }
            </RadioGroup>
        </div>
    )
}
