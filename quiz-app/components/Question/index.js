import AnswerButton from "../AnswerButton";

export default function Question({ question, onChange }) {
  const buttonTypes = [
    "Agree",
    "Slightly Agree",
    "Neutral",
    "Slightly Disagree",
    "Disagree",
  ];

  return (
    <>
      <label htmlFor={question} >
        {question} {"\n"}
      </label>

     <AnswerButton question={question}/>
     <p></p> {/*for spacing*/}
    </>
  );
}

/* 
Radio component

    <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Huey</label>
    </div>

*/
