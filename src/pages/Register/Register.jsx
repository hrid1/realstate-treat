import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvier/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  // hande form submit
  const onSubmit = ({ username, email, password, terms }) => {
    // clean errro
    setError("");

    // checking terms and condtions
    if (!terms) return setError("plz accept terms and condtions !");

    console.log(email, password, terms);
    // create user
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: username,
        }).then(() => {
          // show moldal after register
          Swal.fire({
            icon: "success",
            title: "Your account has been Created",
            timer: 1500,
          });
          // navigate after register
          navigate("/");
        });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Login failed",
          timer: 1500,
        });
      });
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
          defaultValue="thor@gmail.com"
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
          type="password"
        />
        <br />
        <div className="flex gap-2.5 items-center bg-blue -700">
          <input className="w-4" type="checkbox" {...register("terms")} />{" "}
          <p>Accept terms and conditions</p>
        </div>
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        {error && <p className="text-red-500 font-semibold">{error}</p>}
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
