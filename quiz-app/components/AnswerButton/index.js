export default function AnswerButton({ size, colour, functionality, type }) {
  return (
    <button size={size} colour={colour} onClick={functionality}>
      {type}
    </button>
  );
}
