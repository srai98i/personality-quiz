import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex shrink-10 relative space-x-4 left-[20vw] right-[20vw] justify-between w-[60%] h-16 border-b-[0.1rem] border-b-[#E1A774] bg-[#180520] text-[#E1A774] text-[3vh] p-[8%]  ">
      <div className="flex self-start w-[100%]">
      <label className="flex  justify-self-start" htmlFor={question}>
        {question} {"\n"}
      </label>
      </div>
      
      <AnswerButtons
        className="flex  flex-row"
        question={question}
        onChange={onChange}
      />
      <p></p> {/*for spacing*/}
    </section>
  );
}