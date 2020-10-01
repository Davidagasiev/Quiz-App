import React, {useState, useEffect} from 'react';
import './App.css';

import axios from "axios";
import Select from './Components/Select/Select.jsx';
import QuestionList from "./Components/Questions/QuestionList/QuestionList.jsx";
import { CircularProgress, Divider } from '@material-ui/core';

function App() {

  const [questions, setQuestions] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
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
    })
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
        { loading ?
          <CircularProgress />
            :
          <QuestionList questions={questions}/>
        }
      </div>
    </div>
  );
}

export default App;
