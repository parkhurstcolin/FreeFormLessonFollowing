import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  let time = new Date();
  time.setDate(time.getDate() + count * step);

  function resetFields() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="md:container ">
      <div className="flex">
        <button
          className="m-1 px-2 rounded-sm bg-red-500"
          onClick={() => setStep(step - 1)}
          disabled={step == 1}
        >
          -
        </button>
        <div className="m-1 p-1 rounded-sm bg-slate-300">
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={() => setStep(event.target.value)}
          ></input>
          <span>{step}</span>
        </div>
        <button
          className="m-1 px-2 rounded-sm bg-green-500"
          onClick={() => setStep(step + 1)}
          disabled={step == 10}
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
          value={count}
        ></input>
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
      {step !== 1 || count !== 0 ? (
        <button onClick={resetFields}>Reset</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
