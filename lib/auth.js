import Axios from "axios";

Axios.defaults.withCredentials = true;

const loginuser = async (username, password) => {
  const { data } = await Axios.post("/api/login", { username, password });
  if (data) {
    console.log(data);
  } else {
    console.log("nothing");
  }
};

const getUserProfile = async () => {
  const { data } = await Axios.get("/api/profile");
  return data;
};

export default loginuser;
export { getUserProfile };
