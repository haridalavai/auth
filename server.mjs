import next from "next";
import express from "express";
import Axios from "axios";
import cookieParser from "cookie-parser";

const dev = process.env.NODE_ENV !== "production";

const port = process.env.port || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = "haridalavaicookieeparser";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
};

const authenticate = async (username, password) => {
  const { data } = await Axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data.find((user) => {
    if (user.email === username && user.website === password) {
      return user;
    }
  });
};

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cookieParser(COOKIE_SECRET));

  server.post("/api/login", async (req, res) => {
    //  console.log(req.body);
    const { username, password } = req.body;
    console.log(username, password);
    const user = await authenticate(username, password);

    if (!user) {
      return res.status(403).send("invalid user info");
    }

    const userData = {
      name: user.name,
      email: user.email,
      type: AUTH_USER_TYPE,
    };
    res.cookie("token", userData, COOKIE_OPTIONS);
    res.json(userData);
  });

  server.get("/api/profile", async (req, res) => {
    const { signedCookies = {} } = req;
    const { token } = signedCookies;

    if (token && token.email) {
      const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const userProfile = data.find((user) => token.email === user.email);
      return res.json({
        user: userProfile,
      });
      res.sendStatus(404);
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
