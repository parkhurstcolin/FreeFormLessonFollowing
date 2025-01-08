import { useState } from "react";
import flashCardData from "./flashCardData";

const App = () => {
  const [showCard, setShowCard] = useState(2352352365);
  function FlashCards() {
    return (
      <div className={`grid grid-cols-3 grid-rows-4`}>
        {flashCardData.map(({ id, question, answer }) => (
          <button
            className={`rounded-md m-2 p-1 ${
              id === showCard ? "bg-red-100" : "bg-yellow-200"
            }`}
            key={id}
            onClick={() => setShowCard(id)}
          >
            {id === showCard ? answer : question}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="container">
      <FlashCards />;
    </div>
  );
};

export default App;
