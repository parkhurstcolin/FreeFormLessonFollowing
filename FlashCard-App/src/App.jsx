import { useState } from "react";
import flashCardData from "./flashCardData";

const App = () => {
  const [showCard, setShowCard] = useState(2352352365);
  function FlashCards() {
    return (
      <div className="grid grid-cols-3 grid-rows-4 p-4 m-4">
        {flashCardData.map(({ id, question, answer }) => (
          <button key={id} onClick={() => setShowCard(id)}>
            {id === showCard ? answer : question}
          </button>
        ))}
      </div>
    );
  }
  return <FlashCards />;
};

export default App;
