import { Button } from '@material-ui/core';
import React from 'react'
import "./Results.css";

export default function Results(props) {

    const reset = () => {
        props.loadingNewQuestions();
        props.setShowResult(false);
    }

    return (
        <div className="Results">
            <h2>Your Result is:</h2>
            <h2>{props.answers.filter(answer => answer === true).length} of 20</h2>

            <Button onClick={reset} variant="contained" color="secondary">
                Try Again
            </Button>
        </div>
    )
}
