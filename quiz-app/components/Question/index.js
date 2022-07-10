import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <>
      <label htmlFor={question}>
        {question} {"\n"}
      </label>
      <AnswerButtons question={question} onChange={onChange} />
      <p></p> {/*for spacing*/}
    </>
  );
}
