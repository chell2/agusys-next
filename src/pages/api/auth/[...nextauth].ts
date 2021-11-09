import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      // NextAuthの認証関数。credentialsにログイン情報が格納される。
      authorize: async (credentials) => {
        if (
          credentials.login === process.env.NEXT_PUBLIC_LOGIN_ID &&
          credentials.password === process.env.NEXT_PUBLIC_PASSWORD
        ) {
          // ログイン成功後ユーザー情報を返却する。値はsessionに格納される。
          return Promise.resolve({ name: 'admin' });
        } else {
          // ログイン失敗後認証を拒否し、エラーメッセージを返却する。
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // ログインページを指定する。今回はトップページのため'/'を指定。
  pages: {
    signIn: '/login',
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
