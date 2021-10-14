const PwChange = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
            <div className="form-control mt-6">
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
