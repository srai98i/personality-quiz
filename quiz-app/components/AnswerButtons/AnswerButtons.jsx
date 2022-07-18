import { answerOptions } from "../../lib/quizData";

export default function AnswerButtons({ question, onChange }) {
  return (
    <>
      {answerOptions.map((buttonType) => (
        <div
          className=" flex flex-col items-center w-[10%] border-[#E1A774] box-border border-[0.1rem]"
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
            className="flex flex-col items-center w-[90%] h-[1rem] border-green-500 box-border border-[0.1rem]"
            htmlFor={question + buttonType}
          >
            {buttonType}
          </label>
        </div>
      ))}
    </>
  );
}