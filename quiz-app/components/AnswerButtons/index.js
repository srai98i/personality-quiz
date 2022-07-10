export default function AnswerButtons({ question, onChange }) {
  const answerOptions = [
    "Agree",
    "Slightly Agree",
    "Neutral",
    "Slightly Disagree",
    "Disagree",
  ];

  return (
    <>
      {answerOptions.map((buttonType) => (
        <span key={question + buttonType}>
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
