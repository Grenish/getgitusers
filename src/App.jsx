import React, {useState} from "react";
import { Navbar, Search, Profile } from "./components";

const App = () => {
  const [profileData, setProfileData] = useState(null);
  return (
    <div>
      <Navbar />
      <section>
        <Search setProfileData={setProfileData} />
        {profileData && <Profile profileData={profileData} />}
      </section>
    </div>
  );
};

export default App;
