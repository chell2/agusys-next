import Link from 'next/link';
import Pagination from '../components/pagination';
import StatButton from '../components/statbutton';
import Table from './maintable';
import MiniStatButton from './ministatbutton';
import MiniTable from './minitable';

export default function Drawer(): JSX.Element {
  return (
    <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-start drawer-content">
        <div className="hidden text-xs text-center lg:block">
          <StatButton />
          <Table />
          <Pagination />
        </div>
        <div className="text-xs text-center lg:hidden">
          <MiniStatButton />
          <MiniTable />
          <Pagination />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link href="/">
              <a className="active">ホーム</a>
            </Link>
          </li>
          <li>
            <Link href="/reportpage">
              <a>報告一覧</a>
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
