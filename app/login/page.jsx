import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="text-center min-h-screen mt-10 items-center  max-sm:w-full w-1/2 container mx-auto">
      <div className="">
        <h1 className="text-2xl uppercase font-bold">Login</h1>
      </div>
      <div className="flex flex-col mt-5">
        <label className="">Email</label>
        <input
          className="input w-full  mx-auto input-bordered mt-3"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="">Password</label>
        <input
          className="input w-full mx-auto input-bordered mt-3"
          type="password"
          name="username"
          id="username"
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="">
          <label className="label max-sm:text-sm cursor-pointer justify-start">
            <input
              type="checkbox"
              className="checkbox max-sm:h-4  max-sm:w-4 max-sm:rounded mr-1 checkbox-primary"
            />
            <span>Remember Me</span>
          </label>
        </div>
        <div className="mr-2">
          <p className="max-sm:text-sm max-md:text-xs">
            Don&apos;t have an Account ?
            <span>
              <Link href="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-wide">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
