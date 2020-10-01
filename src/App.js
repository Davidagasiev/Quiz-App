import React, {useState, useEffect} from 'react';
import './App.css';

import axios from "axios";
import Select from './Components/Select/Select.jsx';
import QuestionList from "./Components/Questions/QuestionList/QuestionList.jsx";
import { Button, Divider } from '@material-ui/core';
import Results from './Components/Results/Results';

function App() {
// For Controlling Question Answers

const [answers, setAnswers] = useState(new Array(10));
const [showResult, setShowResult] = useState(false);

// For getting new questions

const [questions, setQuestions] = useState([]);
const [loading, setLoading] = useState(true);
const [category, setCategory] = useState(9);
const [difficulty, setDifficulty] = useState("easy");

function loadingNewQuestions(){
  setLoading(true);
  axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
  .then(function (response) {
    // handle success
    setQuestions(response.data.results)
  })
  .catch(function (error) {
    // handle error
    alert(error.message);
  })
  .then(() => {
    setLoading(false);
    setAnswers(new Array(10));
  })
}

useEffect(() => {
  loadingNewQuestions();
}, [category, difficulty])

  return (
    <div className="App">
      <div className="container">
        <h1>Sweeft digital</h1>
        <Divider />
        <Select 
          category={category} 
          setCategory={setCategory} 
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        <QuestionList answers={answers} setAnswers={setAnswers} loading={loading} questions={questions}/>

        <Button onClick={() => setShowResult(true)} style={{marginTop: "30px"}} variant="contained" color="primary">
          Show Results
        </Button>

        {showResult ?
          <Results 
            loadingNewQuestions={loadingNewQuestions}
            setShowResult={setShowResult} 
            answers={answers}/>
          :
          ""
        }

      </div>
    </div>
  );
}

export default App;