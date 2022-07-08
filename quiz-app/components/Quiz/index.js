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
    console.log({ index, buttonType });
    setAnswers([
      ...answers.slice(0, index),
      buttonType,
      ...answers.slice(index + 1),
    ]);
  };

  console.log({ answers });
  //


  return (
    <form>
      <ol>
        {questionsArray.map((questionText, index) => (
          <li key={questionText}>
            <Question
              question={questionText}
              
              onChange={(buttonType) => handleChange(index, buttonType)}
            />
           
          </li>
        ))}
      </ol>
    </form>
  );

}

/* 
- Radio buttons
- One big state or smaller states with useReducer;
- UseReducer - when we have a state within state -


*/

/*
PLAN
- for answer and submit functionality 
  > record user submission for each question
  > store each score 
  > submit button calculates an overall score 
  > translates to stage in hero journey 
- decide on the state management strategy
  > context
  > Redux
 */

/* 
PLAN FOR QUIZ LOGIC
- make lib folder with question array > renders on page ✅ 
- answers array in Quiz, use a handleAnswer function to push values into array (...spread)

- array to add answer values to 
  > sort array to find most common value 
  > assign a stage of a heros journey to each value
  > return that stage when submit is clicked 

handleAnswer functions
 - onclick prop for each button 
 - 5 functions to handle each button
 - each button has own array of answers
 - buttons add something to the array
 - submit button handles calculating result 

Submit button
- handleSubmit prop for submit button 
- when submit is clicked, result rendered under submit button 
- when submit is clicked, state is changed to show the correct result // result, setResult 
- initial state is empty string
  => length of each array is compared 
  => longest array is the final answer
  => show updated state (use switch statement) => hero's journey stage



  -- Inputs with radios with labels associate with labels
 */
