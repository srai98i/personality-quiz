import AnswerButton from "../AnswerButton";
import { useState } from "react";

export default function Answer() {
  /* 
  Static array 
   - with a useReducer
   - one global state
   Formik:
   - Schema - a configuration - accept this kind of value 
    - follows a given patern 
    - validating data input from a 
  */

  const [agree, setAgree] = useState([]);

  const [slightlyAgree, setSlightlyAgree] = useState([]);

  const [neutral, setNeutral] = useState([]);

  const [slightlyDisagree, setSlightlyDisagree] = useState(["d"]);

  const [disagree, setDisagree] = useState([]);

  function handleAgree() {
    const addedValue = "a";
    setAgree([...agree, addedValue]);
  }

  function handleSlightlyAgree() {
    const addedValue = "b";
    setSlightlyAgree([...slightlyAgree, addedValue]);
  }

  function handleNeutral() {
    const addedValue = "c";
    setNeutral([...neutral, addedValue]);
    console.log(neutral);
  }

  function handleSlightlyDisagree() {
    const addedValue = "d";
    setSlighltyDisagree([...slightlyDisagree, addedValue]);
    console.log(slightlyDisagree);
  }

  function handleDisagree() {
    const addedValue = "e";
    setDisagree([...disagree, addedValue]);
  }

  return (
    <>
      <AnswerButton type="agree" functionality={handleAgree} />
      <AnswerButton type="slightly agree" functionality={handleSlightlyAgree} />
      <AnswerButton type="neutral" functionality={handleNeutral} />
      <AnswerButton
        type="slightly disagree"
        functionality={handleSlightlyDisagree}
      />

      <AnswerButton type="disagree" functionality={handleDisagree} />
    </>
  );
}

/*
create an answer array 
when the buttton nwith a corresponding letter is clicked
spread the array and add the corresponding letter to the answerArray 
*/
