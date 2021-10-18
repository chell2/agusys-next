import Main from '../components/main';
import Stat from '../components/stat';

const Drawer = () => {
  return (
    <div className="bg-base-200 drawer drawer-mobile h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center drawer-content">
        <Stat />
        <Main />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu pt-10 p-4 overflow-y-auto w-60 bg-base-100 rounded-lg shadow-xl text-base-content">
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
            <a href="/login">ログアウト</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
