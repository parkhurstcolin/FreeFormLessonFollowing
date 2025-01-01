import Tag from "./Tags/Tag";
import tagsData from "./Tags/tagsData";

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
        {tagsData.map((tag) => (
          <Tag tagObj={tag} key={tag.skill} />
        ))}
      </div>
    </div>
  );
};

export default ProfileBody;
