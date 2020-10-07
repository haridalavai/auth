import { useState, useEffect } from "react";
import { getUserProfile } from "../lib/auth";
import Layout from "../components/Layout";
const Profile = () => {
  const [user, setUser] = useState(null);
  const fetchData = async () => {
    const user1 = await getUserProfile();
    setUser(user1);
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <Layout>
      <div>{JSON.stringify(user, null, 2)}</div>
    </Layout>
  );
};

export default Profile;
