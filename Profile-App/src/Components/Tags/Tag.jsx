const Tag = ({ tagObj }) => {
  const emojiMap = new Map([
    ["advanced", "💪"],
    ["intermediate", "👍"],
    ["beginner", "🤯"],
  ]);
  return (
    <button className={`rounded-md ${tagObj.color}`}>
      {tagObj.skill}
      {emojiMap.get(tagObj.emoji)}
    </button>
  );
};

export default Tag;
