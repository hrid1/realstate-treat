import { useForm } from "react-hook-form";
import loghome from "../../assets/lg-home.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col md:flex-row justify-center  items-center">
      {/* form */}
      <div className="w-10/12 lg:w-2/5 ">
        <img className="lg:w-2/3 mx-auto round-md" src={loghome} alt="" />
      </div>
      {/* lgoin form */}
      <div className="w-9/12 lg:w-1/3 ">
        <div className="bg-gray-100 rounded-md w-11/12  mx-auto p-6 my-10">
          <h1 className="text-2xl font-bold text-center mb-4">
            Login Your Account
          </h1>
          <form
            className="flex flex-col justify-center "
            onSubmit={handleSubmit(onSubmit)}
          >
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
              Username
            </label>
            <input
              className="border px-3 py-2 rounded-md"
              defaultValue="123456"
              {...register("password")}
            />
           
            
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
            Already have an account yet? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
