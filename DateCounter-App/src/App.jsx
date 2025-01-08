import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  let time = new Date();
  time.setDate(time.getDate() + count * step);

  return (
    <div className="md:container ">
      <div className="flex">
        <button
          className="m-1 px-2 rounded-sm bg-red-500"
          onClick={() => setStep(step - 1)}
        >
          -
        </button>
        <p className="m-1 p-1 rounded-sm bg-slate-300">Step: {step}</p>
        <button
          className="m-1 px-2 rounded-sm bg-green-500"
          onClick={() => setStep(step + 1)}
        >
          +
        </button>
      </div>
      <div className="flex">
        <button
          className="m-1 px-2 rounded-sm bg-red-500"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </button>
        <input
          className="m-1 p-1 rounded-sm bg-slate-300"
          onChange={() => setCount(event.target.value)}
        >
          {}
        </input>
        <button
          className="m-1 px-2 rounded-sm bg-green-500"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
      </div>
      <span>
        {(count && step === 0) || count === 0
          ? "Today is "
          : count * step > 0
          ? `${count * step} days from today is`
          : `${Math.abs(count * step)} days ago is`}
      </span>
      <p>{time.toDateString()}</p>
    </div>
  );
};

export default App;
