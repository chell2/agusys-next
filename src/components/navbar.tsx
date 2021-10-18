import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} className="m-1 btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-neutral"
          >
            <li>
              <a>ホーム</a>
            </li>
            <li>
              <a>報告データ</a>
            </li>
            <li>
              <a>農地別一覧</a>
            </li>
            <li>
              <a>全体地図</a>
            </li>
            <li>
              <Link href="/login">
                <a>ログアウト</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">あぐしす</span>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-ghost" />
        </div>
      </div>
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
