import AnswerButton from "../AnswerButton";
import { useState } from "react";

export default function Answer() {
    
    const [agree, setAgree] = useState([])
    
    const [slightlyAgree, setSlightlyAgree] = useState([])
    
    const [neutral, setNeutral] = useState([])
    
    const [slightlyDisagree, setSlightlyDisagree] = useState([])
    
    const [disagree, setDisagree] = useState([])
    
    function handleAgree () {
    const addedValue = 'a';
    setAgree([...agree, addedValue]);
    }

    function handleSlightlyAgree () {
    const addedValue = 'b';
    setSlightlyAgree([...slightlyAgree, addedValue]);
    }

    function handleNeutral () {
    const addedValue = 'c';
    setNeutral([...neutral, addedValue]);
    }

    function handleSlightlyDisagree () {
    const addedValue = 'd';
    setSlighltyDisagree([...slightlyDisagree, addedValue]);
    }

    function handleDisagree () {
    const addedValue = 'e';
    setDisagree([...disagree, addedValue]);
    }
    
    return (
        <>
       <AnswerButton type="agree"/>
       <AnswerButton type="slightly agree"/>
       <AnswerButton type="neutral"/>
       <AnswerButton type="slightly disagree"/>
       <AnswerButton type="disagree"/>
        </>
    )
}




/*
create an answer array 
when the buttton nwith a corresponding letter is clicked
spread the array and add the corresponding letter to the answerArray 
*/