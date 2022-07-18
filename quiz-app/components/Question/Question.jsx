import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex relative justify-items-center w-[200%] h-[5rem] bg-[#180520] text-[#E1A774]  border-[#E1A774] box-border border-[0.25rem] text-[0.8rem] scale-100 p-[0.5rem] m-[0.5rem]">
      
        <div className="flex text-[.75em] min-h-full w-[30%] h-[4em] border-white box-border border-[0.25rem]">
          <label  htmlFor={question}>
            {question} {"\n"}
          </label>
        </div>

        <AnswerButtons
          className="flex flex-row w-[90%] self-center justify-center text-[0.8em]"
          question={question}
          onChange={onChange}
        />
    
      <p></p> {/*for spacing*/}
     
    </section>
  );
}

//  <hr className="bg-[#E1A774] w-[60%] border-[#E1A774] h-1 self-center justify-center " />