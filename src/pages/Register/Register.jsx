import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvier/AuthProvider";



const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    // console.log(email, password)
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="bg-gray-100 rounded-md w-11/12 md:w-1/2 lg:w-1/3 mx-auto p-6 my-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        Register Your Account
      </h1>
      <form
        className="flex flex-col justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-xl font-semibold" htmlFor="username">
          Username
        </label>{" "}
        <input
          className="border px-3 py-2 rounded-md"
          //   defaultValue="test"
          {...register("username")}
          placeholder="Enter your username"
        />
        <br />
        <label className="text-xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="border px-3 py-2 rounded-md"
          defaultValue="test@gmail.com"
          {...register("email")}
        />
        <br />
        <label className="text-xl font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="border px-3 py-2 rounded-md"
          defaultValue="123456"
          {...register("password")}
        />
        <br />
        <div className="flex gap-2.5 items-center bg-blue -700">
          <input className="w-4" type="checkbox" />{" "}
          <p>Accept terms and conditions</p>
        </div>
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="btn bg-teal-600 text-lg rounded-md text-white "
          type="submit"
        />
        <br />
      </form>
      <p>
        Already have an account yet? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
