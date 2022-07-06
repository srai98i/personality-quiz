export default function Question({ question, onChange }) {
  const buttonTypes = ["agree", "slightlyAgree", "slightlyDisagree", "disagre"];

  return (
    <>
      <p>{question}</p>
      {buttonTypes.map((buttonType) => (
        <button
          type="button"
          key={buttonType}
          onClick={() => onChange(buttonType)}>
          {buttonType}{" "}
        </button>
      ))}
    </>
  );
}
