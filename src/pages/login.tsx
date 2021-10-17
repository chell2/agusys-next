const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <figure>
              <img alt="logo" src="../../public/images/logo.png" className="rounded-xl" />
            </figure>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered focus:ring-2 focus:ring-primary"
              />
              <label className="cursor-pointer label mt-3">
                <span className="label-text-alt">Remember me</span>
                <input type="checkbox" className="checkbox checkbox-xs checkbox-accent" />
              </label>
              <label className="label">
                <a href="#" className="label-text-alt text-primary hover:text-primary-focus">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-5">
              <input type="button" value="Login" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
