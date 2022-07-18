import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex flex-col box-border">
      <div className="flex relative  space-x-4 divide-y-10 left-[20vw] right-[20vw] justify-between w-[60%] h-16 bg-[#180520] text-[#E1A774] p-[8%] min-h-full text-[1rem] scale-100">
        {/* <div className="flex self-start object-scale-down"> */}
          <label className="flex  justify-self-start" htmlFor={question}>
            {question} {"\n"}
          </label>
        {/* </div> */}

        <AnswerButtons
          className="flex flex-row "
          question={question}
          onChange={onChange}
        />
      </div>
      <p></p> {/*for spacing*/}
      <div className="flex flex-col h-full w-full">
        <hr className="bg-[#E1A774] w-[60%] border-[#E1A774] h-1 self-center justify-center " />
      </div>
    </section>
  );
}