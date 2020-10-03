import { useForm } from "react-hook-form";
import Axios from "axios";
import loginuser from "../lib/auth.js";
import Router from "next/router";
function LoginForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ email, password }) => {
    loginuser(email, password).then(() => {
      Router.push("/profile");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue=" Nathan@yesenia.net"
            ref={register}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            defaultValue="ramiro.info"
            ref={register}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
