import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex shrink-10 relative space-x-4 left-[20vw] right-[20vw] justify-between w-[60%] h-16 border-b-[0.1rem] border-b-[#E1A774] bg-[#180520] text-[#E1A774] text-[75%] p-[1%] ">
      <label className="flex shrink-10 justify-self-start" htmlFor={question}>
        {question} {"\n"}
      </label>
      <AnswerButtons
        className="flex shrink-10 justify-self-end"
        question={question}
        onChange={onChange}
      />
      <p></p> {/*for spacing*/}
    </section>
  );
}