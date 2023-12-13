import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white shadow-md rounded-md p-3 w-1/4">
        <h4 className="font-semibold text-xl text-center">Login</h4>
        <form>
          <div className="form-group mt-2">
            <label htmlFor="username" className="font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-md px-4 py-2 border w-full mt-2"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password" className="font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md px-4 py-2 border w-full mt-2"
            />
          </div>
          <button
            className="w-full rounded-md bg-blue-500 p-3 mt-4 font-semibold text-white"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
