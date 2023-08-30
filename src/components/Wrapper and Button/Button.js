export default function Button({ text, type, onClick }) {
  return (
    <button className="regular-button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
