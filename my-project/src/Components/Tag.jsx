const Tag = ({ text, emoji, css }) => {
  return (
    <button className={css}>
      {text}
      {emoji}
    </button>
  );
};

export default Tag;
