import { useState } from "react";
import Question from "../Question";
import { questionsArray, heroStages, answerOptions } from "../../lib/quizData";

// key needs to be on the looped elements - the parent element

export default function Quiz() {
  //programatically generates an array of length questionsArray and fills with null values.
  const [answers, setAnswers] = useState(
    Array(questionsArray.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState("");

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
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
        ? previous
        : current
    );

    console.log(mostOccuring);

    setIsSubmitted(true);
    setFinalAnswer(getFinalAnswer(mostOccuring));
  };
  const getFinalAnswer = (mostOccuring) => {
    switch (mostOccuring) {
      case answerOptions[0]:
        return "First String";

      case answerOptions[1]:
        return "Second String";

      case answerOptions[2]:
        return "Third string";

      case answerOptions[3]:
        return "Fourth String";

      case answerOptions[4]:
        return "Fifth String";
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
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
      <input
        type="submit"
        className="bg-[#E1A774] py-[2vh] px-[2vw] rounded-full m-8 self-center"
      />
      <p className="final-result">{isSubmitted ? finalAnswer : null}</p>
    </form>
  );
}