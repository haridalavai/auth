import { useState, useEffect } from "react";
import { getUserProfile } from "../lib/auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user1 = await getUserProfile();
      setUser(user1);
    };
    fetchData();
  }, []);

  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default Profile;
