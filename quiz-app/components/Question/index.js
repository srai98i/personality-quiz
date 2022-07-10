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
      <label htmlFor={question}>
        {question} {"\n"}
      </label>

      {buttonTypes.map((buttonType) => (
        <>
          <input
            type="radio"
            name={question}
            key={buttonType}
            id={question + buttonType}
            value={buttonType}
            onClick={() => onChange(buttonType)}
          />
          <label htmlFor={question + buttonType}>{buttonType}</label>
        </>
      ))}
      <p></p>
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
