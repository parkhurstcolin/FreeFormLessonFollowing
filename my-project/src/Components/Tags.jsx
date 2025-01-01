const Tags = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-1 p-1 font-bold">
      <button className=" rounded-md bg-blue-500 ">
        React {String.fromCodePoint(128077)}
      </button>
      <button className="rounded-md  bg-yellow-600 ">
        JavaScript {String.fromCodePoint(128077)}
      </button>
      <button className="rounded-md bg-green-700 ">
        Virtualization {String.fromCodePoint(129302)}
      </button>
      <button className="rounded-md bg-red-600 ">
        Self-Hosting {String.fromCodePoint(9889)}
      </button>
    </div>
  );
};

export default Tags;
