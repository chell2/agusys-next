const PwChange = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="text-right">
              <a href="/login">
                <button className="btn btn-outline btn-square btn-xs text-neutral hover:bg-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">新しいパスワード</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">新しいパスワード(確認用)</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="form-control mt-8">
              <div className="btn-group">
                <button className="btn btn-outline btn-primary w-1/2">Cancell</button>
                <button className="btn btn-primary w-1/2">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PwChange;
