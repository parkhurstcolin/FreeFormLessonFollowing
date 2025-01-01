import Tag from "./Tag";

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
        <Tag
          css="rounded-md bg-blue-500"
          emoji={String.fromCodePoint(128077)}
          text="React"
        />
        <Tag
          css="rounded-md bg-green-700"
          emoji={String.fromCodePoint(129302)}
          text="Virtualization"
        />
        <Tag
          css="rounded-md  bg-yellow-600"
          emoji={String.fromCodePoint(128077)}
          text="Javascript"
        />

        <Tag
          css="rounded-md bg-red-600"
          emoji={String.fromCodePoint(9889)}
          text="Self-Hosting"
        />
      </div>
    </div>
  );
};

export default ProfileBody;
