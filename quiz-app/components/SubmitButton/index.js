export default function SubmitButton({ getQuizResult, answers }) {
  console.log({ answers });
  return (
    <>
      <input
        type="submit"
        onSubmit={(answers) => {
          getQuizResult(answers);
        }}
        label="Submit"
      />
    </>
  );
}
