

//export const LineItem = item => <li key={uuid()}>{item}</li>

//export const List = () => array.map(item => <LineItem item={item} />)

export default function Question({ question, onChange }) {
  const buttonTypes = [
    "Agree",
    "Slightly Agree",
    "Neutral",
    "Slightly Disagree",
    "Disagree",
  ];

  const buttonKey = Math.floor(Math.random() * 1000);
//Getting rid of key Error
// 



  return (
    <>
      <label htmlFor={question} >
        {question} {"\n"}
      </label>

      {buttonTypes.map((buttonType) => (
        <>
          <input
            type="radio"
            name={question}
            key={question + buttonType}
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
