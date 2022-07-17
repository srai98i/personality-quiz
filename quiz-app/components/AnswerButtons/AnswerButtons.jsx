import { answerOptions } from "../../lib/quizData";

export default function AnswerButtons({ question, onChange }) {
  return (
    <>
      {answerOptions.map((buttonType) => (
        <span key={question + buttonType}>
          <input
            className="w-8 h-8 accent-[#E1A774] "
            type="radio"
            name={question}
            key={question + buttonType}
            id={question + buttonType}
            value={buttonType}
            onClick={() => onChange(buttonType)}
          />
          <label
            className="flex flex-col self-center"
            htmlFor={question + buttonType}
          >
            {buttonType}
          </label>
        </span>
      ))}
    </>
  );
}