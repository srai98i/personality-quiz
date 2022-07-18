import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex shrink-10 relative space-x-4 left-[20vw] right-[20vw] justify-between w-[60%] h-16 bg-[#180520] text-[#E1A774] p-[8%] min-h-full text-[.5rem] scale-100">
      <div className="flex self-start object-scale-down">
      <label className="flex  justify-self-start" htmlFor={question}>
        {question} {"\n"}
      </label>
      </div>
      
      <AnswerButtons
        className="flex flex-row  object-scale-down"
        question={question}
        onChange={onChange}
      />
      <p></p> {/*for spacing*/}
      <hr className=" border-b-[#E1A774] w-[50%]"/>
    </section>
  );
}