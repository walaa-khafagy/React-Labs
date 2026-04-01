const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 text-white text-2xl px-4 py-2 rounded hover:bg-purple-600"
    >
      {children}
    </button>
  );
};

export default Button;