import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2 lg:flex">
        <Image alt="logo" src="/images/logo-ss.png" layout="fixed" width={30} height={30} />
        <Link href="/login">
          <a>
            <div className="text-lg font-bold pl-2">あぐしす</div>
          </a>
        </Link>
      </div>
      <div className="flex-initial lg:flex-none">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-ghost" />
        </div>
      </div>
      <div className="flex-none">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden">
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
      </label>
    </div>
  );
}
