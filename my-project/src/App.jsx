import ProfileBody from "./Components/ProfileBody";
import profilePicture from "./profilePicture.jpg";

const App = () => {
  return (
    <div className="container size-1/3">
      <img src={profilePicture} alt="Profile Picture" />
      <ProfileBody />
    </div>
  );
};

export default App;
