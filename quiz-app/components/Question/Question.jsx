import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex space-x-4 justify-between h-4 border-b-[1rem] bg-[#180520] [#E1A774]">
      <label className="flex justify-self-start" htmlFor={question}>
        {question} {"\n"}
      </label>
      <AnswerButtons
        className="flex justify-self-end"
        question={question}
        onChange={onChange}
      />
      <p></p> {/*for spacing*/}
    </section>
  );
}