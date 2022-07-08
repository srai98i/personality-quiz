export default function Question({ question, onChange }) {
  const buttonTypes = ["agree", "slightlyAgree", "slightlyDisagree", "disagre"];

  return (
    <>
      {buttonTypes.map((buttonType) => (
        <input
          type="radio"
          name={question}
          key={buttonType}
          id={question + buttonType}
          onClick={() => onChange(buttonType)}
        />
      ))}
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
