export default function Button({ text, type, onClick, disabled, style }) {
  return (
    <button
      className="regular-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
}
