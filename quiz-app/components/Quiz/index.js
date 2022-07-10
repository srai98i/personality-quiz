import { useState } from "react";
import Question from "../Question";
import questionsArray from "../../lib/quizData";

// key needs to be on the looped elements - the parent element

export default function Quiz() {
  //programatically generates an array of length questionsArray and fills with null values.
  const [answers, setAnswers] = useState(
    Array(questionsArray.length).fill(null)
  );
  const handleChange = (index, buttonType) => {
    setAnswers(
      answers.map((buttonTypeElement, elementIndex) =>
        elementIndex === index ? buttonType : buttonTypeElement
      )
    );
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      const answerArray = [...answers];
      //const sortedArray = answerArray.sort((a, b) => b - a);
      const mostOccuring = answerArray.reduce((previous, current, i, arr) =>
      arr.filter(item => item === previous).length >
      arr.filter(item => item === current).length ? previous : current
      
);
console.log(mostOccuring)
return mostOccuring  
  };

  return (
    <form onSubmit={handleSubmit}>
      <ol>
        {questionsArray.map((questionText, index) => (
          <li key={index.toString()}>
            <Question
              question={questionText}
              onChange={(buttonType) => handleChange(index, buttonType)}
            ></Question>
          </li>
        ))}
      </ol>
      <input type="submit" />
    </form>
  );
}


/* 
switch statement takes in mostOccuring
gives us back result that aligns with mostOccuring value 
want to render text conditionally based on that return 

do we want to:
- send to another page?
- work on a toggle which renders a result, and then send to another page after mvp ? 
*/

/* NEXT STEPS
- conditionally render result of mostOccuring
- lib.js make object with k/v pair of {buttonType: heros journey}
- import into quiz and use object to conditionally render result on browser
   = our logic for generating results is DONE 
*/