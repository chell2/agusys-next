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

// import { signIn, signOut, useSession } from 'next-auth/client';

// export default function Home() {
//   const [session, loading] = useSession();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {session && (
//         <>
//           Signed in as {session.user.name} <br />
//           <button onClick={signOut}>Sign out</button>
//         </>
//       )}
//       {!session && (
//         <>
//           Not signed in <br />
//           <button onClick={signIn}>Sign in</button>
//         </>
//       )}
//     </div>
//   );
// }

// import { getCsrfToken, useSession, signOut } from 'next-auth/client';
// import { useRouter } from 'next/router';

// const LoginPage = ({ csrfToken }) => {
//   const { error } = useRouter().query;
//   const [session] = useSession();

//   return (
//     <div>
//       <h1>カスタムログインページ</h1>
//       {session ? (
//         // ログイン状態の場合。ユーザー名、ログアウトボタンを表示。
//         <>
//           <div>ユーザー：{session.user?.name}</div>
//           <button onClick={signOut}>ログアウト</button>
//         </>
//       ) : (
//         // ログアウト状態の場合。入力フォームを表示。
//         <form method="post" action="/api/auth/callback/credentials">
//           <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//           <label>
//             <div>ログインID</div>
//             <input name="login" />
//           </label>
//           <label>
//             <div>パスワード</div>
//             <input name="password" type="password" />
//           </label>
//           <div>
//             <button type="submit">ログイン</button>
//           </div>
//           {/* ログイン失敗後、エラーメッセージを表示。*/}
//           {error && <div>ログインID又はパスワードが間違っています。</div>}
//         </form>
//       )}
//     </div>
//   );
// };

// // POSTリクエスト(サインイン・サインアウトなど)に必要なCSRFトークンを返却する。
// export const getServerSideProps = async (context) => {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// };

// export default LoginPage;
