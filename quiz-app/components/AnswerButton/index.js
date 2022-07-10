export default function AnswerButton({ question }) {
  const buttonTypes = [
    "Agree",
    "Slightly Agree",
    "Neutral",
    "Slightly Disagree",
    "Disagree",
  ];

  return (
    <>
    {buttonTypes.map((buttonType) => (
      <span key={question +  buttonType}>
        <input
          type="radio"
          name={question}
          key={question + buttonType}
          id={question + buttonType}
          value={buttonType}
          onClick={() => onChange(buttonType)}
        />
        <label htmlFor={question + buttonType}>{buttonType}</label>
      </span>
    ))}
    </>
  );
}
