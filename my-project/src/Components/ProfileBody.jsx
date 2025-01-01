const ProfileBody = () => {
  return (
    <div className="p-1">
      <div className="border-solid border-black border rounded p-1 bg-yellow-50">
        <h1 className="text-3xl font-bold">Colin Parkhurst</h1>
        <p>
          A Learning web developer looking for a job. When not coding or
          workings, I like to play games & Study world events and Poltics
        </p>
      </div>
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
    </div>
  );
};

export default ProfileBody;
