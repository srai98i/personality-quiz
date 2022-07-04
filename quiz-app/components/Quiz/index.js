import Question from "../Question";
import Answer from "../Answer";
import SubmitButton from "../SubmitButton";
import { questionsArray } from "../../lib/quizData";

export default function Quiz() {
    return (
      <>
        <Question text={questionsArray[0]} />
        <Answer />
        <Question text={questionsArray[1]} />
        <Answer />
        <Question text={questionsArray[2]} />
        <Answer />
        <SubmitButton />
      </>
    );
}


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



 */