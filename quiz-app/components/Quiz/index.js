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

  const getQuizResult = (answers) => {
    const answerArray = [...answers];
    console.log(answerArray);
    const sortedArray = answerArray.sort((a, b) => b - a);
    console.log(sortedArray);
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(answers);
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
