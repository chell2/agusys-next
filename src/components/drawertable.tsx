import Link from 'next/link';
import Table from './maintable';
import MiniStat from './ministat';
import MiniTable from './minitable';
import Pagination from './pagination';
import Stat from './stat';

export default function Drawer(): JSX.Element {
  return (
    <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-start drawer-content">
        <div className="hidden text-xs text-center lg:block">
          <Stat />
          <Table />
          <Pagination />
        </div>
        <div className="text-xs text-center lg:hidden">
          <MiniStat />
          <MiniTable />
          <Pagination />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link href="/">
              <a>ホーム</a>
            </Link>
          </li>
          <li>
            <Link href="/reportpage">
              <a className="active">報告一覧</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>全体地図</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>ログアウト</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
