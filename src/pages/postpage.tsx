const PostPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">POST Request</h2>
              <form
                method="POST"
                action="https://script.google.com/macros/s/AKfycbw-IxWvYlyKWVjEAVY3cU6eWzYH26glPJlZHFEjMBzRU8Yi49B9rVUjc5Ode_EzRvrW/exec"
              >
                <p>post_param1</p>
                <input name="post_param1" type="text" />
                <p>post_param2</p>
                <input name="post_param2" type="text" />
                <p>post_param3</p>
                <input name="post_param3" type="text" />
                <p>post_param4</p>
                <input name="post_param4" type="text" />
                <br />
                <button type="submit" className="btn btn-md mt-3">
                  post
                </button>
              </form>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">GET Request</h2>
              <form
                method="GET"
                action="https://script.google.com/macros/s/AKfycbw-IxWvYlyKWVjEAVY3cU6eWzYH26glPJlZHFEjMBzRU8Yi49B9rVUjc5Ode_EzRvrW/exec"
              >
                <p>get_param1</p>
                <input name="get_param1" type="text" />
                <p>get_param2</p>
                <input name="get_param2" type="text" />
                <p>get_param3</p>
                <input name="get_param3" type="text" />
                <p>get_param4</p>
                <input name="get_param4" type="text" />
                <br />
                <button type="submit" className="btn btn-md mt-3">
                  get
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostPage;
