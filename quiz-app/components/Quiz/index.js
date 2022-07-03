import Question from "../Question";
import Answer from "../Answer";
import SubmitButton from "../SubmitButton";

export default function Quiz() {
    return (
        <>
           <Question text="What is your favourite colour?"/>
           <Answer/>
           <Question text="What is your favourite food?"/>
           <Answer/> 
           <Question text="What is your favourite song?"/>
           <Answer/>
           <SubmitButton/>
        </>
    )
}


/*
PLAN
- for answer and submit functionality 
  > record user submission for each question
  > store each score 
  > submit button calculates an overall score 
  > translates to stage in hero journey 

 */