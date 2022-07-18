import AnswerButtons from "../AnswerButtons";

export default function Question({ question, onChange }) {
  return (
    <section className="flex relative justify-items-center w-screen h-[5rem] bg-[#180520] text-[#E1A774]  border-b-[#E1A774] box-border border-[0.1rem] text-[0.8rem] scale-100">
      
        {/* <div className="flex self-start object-scale-down"> */}
          <label className="flex  place-self-center text-[0.8em] w-[30%] border-[#E1A774] box-border border-[0.1rem]" htmlFor={question}>
            {question} {"\n"}
          </label>
        {/* </div> */}

        <AnswerButtons
          className="flex flex-row w-[90%] 
          self-center justify-center text-[0.8em]"
          question={question}
          onChange={onChange}
        />
    
      <p></p> {/*for spacing*/}
     
    </section>
  );
}

//  <hr className="bg-[#E1A774] w-[60%] border-[#E1A774] h-1 self-center justify-center " />