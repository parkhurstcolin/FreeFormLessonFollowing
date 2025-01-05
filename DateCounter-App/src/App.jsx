import { useState } from "react";

const App = () => {
  let time = new Date().toLocaleDateString();
  const [day, setDay] = useState(time);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function changeDate() {
    let thirtyOneMonths = [1, 3, 5, 6, 8, 10, 12];
    time = time.split("/");
    let day = count == 1 ? time[1] : Number(time[1]) + Number(step * count);
    let month = time[0];
    while (day > 28) {
      if (thirtyOneMonths.includes(month)) {
        if (day > 31) {
          day -= 31;
          month++;
        }
      } else if (month == 2) {
        if (day > 28) {
          day -= 28;
          month++;
        }
      } else {
        day -= 30;
        month++;
      }
    }
    time[0] = month;
    time[1] = day;
    time = time.join("/");
    setDay(time);
  }

  function increaseCounter() {
    changeDate();
    setCount(count + 1);
  }
  function decreaseCounter() {
    changeDate();
    setCount(count - 1);
  }

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
          onClick={() => decreaseCounter()}
        >
          -
        </button>
        <p className="m-1 p-1 rounded-sm bg-slate-300">Count: {count}</p>
        <button
          className="m-1 px-2 rounded-sm bg-green-500"
          onClick={() => increaseCounter()}
        >
          +
        </button>
      </div>
      <div className="p-1 m-1 rounded-sm bg-slate-300 w-min ">
        <p>{day}</p>
      </div>
    </div>
  );
};

export default App;
