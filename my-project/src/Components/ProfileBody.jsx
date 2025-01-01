import Tags from "./Tags";

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
      <Tags />
    </div>
  );
};

export default ProfileBody;
