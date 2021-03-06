import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { siteTitle } from './index';

export default function Login() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <figure className="justify-center card-actions">
              <Image
                alt="logo"
                src="/images/logo.png"
                layout="fixed"
                width={180}
                height={180}
                className="mask mask-hexagon-2"
              />
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
                type="password"
                placeholder="password"
                className="input input-bordered focus:ring-2 focus:ring-primary"
              />
              <label className="cursor-pointer label mt-3">
                <span className="label-text-alt">Remember me</span>
                <input type="checkbox" className="checkbox checkbox-xs checkbox-accent" />
              </label>
              <label className="label">
                <Link href="/resetpw">
                  <a className="label-text-alt text-primary hover:text-primary-focus">
                    Forgot password?
                  </a>
                </Link>
              </label>
            </div>
            <Link href="/.">
              <a>
                <div className="form-control mt-5">
                  <input type="button" value="Login" className="btn btn-primary" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
