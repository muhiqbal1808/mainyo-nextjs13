import Link from "next/link";

export default function Register() {
  return (
    <div className="text-center min-h-screen mt-10 items-center  max-sm:w-full w-1/2 container mx-auto">
      <div className="">
        <h1 className="text-2xl uppercase font-bold">Register</h1>
      </div>
      <div className="flex flex-col mt-5">
        <label className="">Name</label>
        <input
          className="input w-full  mx-auto input-bordered mt-3"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label className="">Username</label>
        <input
          className="input w-full  mx-auto input-bordered mt-3"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
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
      <div className="flex flex-col mt-5">
        <label className="">Confirm Password</label>
        <input
          className="input w-full mx-auto input-bordered mt-3"
          type="password"
          name="confpassword"
          id="confpassword"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="">
          <label className="label max-sm:text-sm cursor-pointer justify-start">
            <input
              type="checkbox"
              className="checkbox max-sm:h-4  max-sm:w-4 max-sm:rounded mr-1 checkbox-primary"
            />
            <span>Agree to Terms and Conditions</span>
          </label>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-wide">Register</button>
      </div>
    </div>
  );
}
