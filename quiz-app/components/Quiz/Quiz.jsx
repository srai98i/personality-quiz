import { useState } from "react";
import Question from "../Question";
import { questionsArray, heroStages, answerOptions } from "../../lib/quizData";


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
    const mostOccuring = answerArray.reduce((previous, current, i, arr) =>
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
        ? previous
        : current
    );

    setIsSubmitted(true);
    setFinalAnswer(getFinalAnswer(mostOccuring));
  };
  const getFinalAnswer = (mostOccuring) => {
    switch (mostOccuring) {
      case answerOptions[0]:
        return heroStages.Agree;

      case answerOptions[1]:
        return  heroStages.SlightlyAgree;

      case answerOptions[2]:
        return heroStages.Neutral;

      case answerOptions[3]:
        return heroStages.SlightlyDisagree;

      case answerOptions[4]:
        return heroStages.Disagree;
    }
    
  };
  return (
    <form className="flex flex-col w-screen  box-border " onSubmit={handleSubmit}>
      <ol className="flex ml-[20%] flex-col w-[100%] box-border self-center">
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
        className="bg-[#E1A774] py-[2vh] px-[2vw] rounded-full self-center m-8"
      />
      <p className="flex w-[80%] self-center m-[1em] text-[2em] text-[#E1A774]">{isSubmitted ? finalAnswer : null}</p>
    </form>
  );
}