import AnswerButtons from '../AnswerButtons';

export default function Question({ question, onChange }) {
  return (
    <section className="flex relative place-items-center w-[80%] h-[5rem] bg-[#180520] text-[#E1A774]  border-b-[#E1A774] box-border border-b-[0.1rem] text-[0.8rem] scale-100">
      
    
      <label className="flex  text-[1.25em] w-[50%] box-border" htmlFor={question}>
        {question} {"\n"}
      </label>
        

      <AnswerButtons
        className="flex flex-row w-[50%] 
        text-[0.8em]" 
        question={question}
        onChange={onChange}
      />
    
      <p></p> {/*for spacing*/}
     
    </section>
  );
}

