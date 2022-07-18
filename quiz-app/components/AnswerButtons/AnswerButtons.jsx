import { answerOptions } from "../../lib/quizData";

export default function AnswerButtons({ question, onChange }) {
  return (
    <>
      {answerOptions.map((buttonType) => (
        <div
          className=" flex flex-col items-center w-[10%] box-border"
          key={question + buttonType}
        >
          <input
            className=" m-[0.5em] appearance-none w-[3em] h-[3em] checked:bg-[#E1A774] rounded-full box-border border-solid border-2 border-[#E1A774] "
            type="radio"
            name={question}
            key={question + buttonType}
            id={question + buttonType}
            value={buttonType}
            onClick={() => onChange(buttonType)}
          />
          <label
            className="flex flex-col place-self-center items-center w-[90%] h-[1rem] box-border text-[1em]"
            htmlFor={question + buttonType}
          >
            {buttonType}
          </label>
        </div>
      ))}
    </>
  );
}