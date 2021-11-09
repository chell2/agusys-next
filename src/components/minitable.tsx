import Moment from 'react-moment';
import useSWR from 'swr';
import { fetcher } from './fetcher';

export default function MiniTable(): JSX.Element {
  const { data, error } = useSWR('/api/farms', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div className="overflow-x-auto mt-5 shadow-2xl rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>項目</th>
              <th>農地住所</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{data[0].category}</div>
                    <div className="text-sm opacity-50">
                      {' '}
                      <Moment format="YYYY-MM-DD">{data[0].record_date}</Moment>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{data[0].farm_address}</div>
                <span className="badge badge-outline badge-sm">
                  {data[0].latitude} / {data[0].longitude}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">詳細</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{data[1].category}</div>
                    <div className="text-sm opacity-50">
                      {' '}
                      <Moment format="YYYY-MM-DD">{data[1].record_date}</Moment>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{data[1].farm_address}</div>
                <span className="badge badge-outline badge-sm">
                  {data[1].latitude} / {data[1].longitude}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">詳細</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{data[2].category}</div>
                    <div className="text-sm opacity-50">
                      {' '}
                      <Moment format="YYYY-MM-DD">{data[2].record_date}</Moment>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{data[2].farm_address}</div>
                <span className="badge badge-outline badge-sm">
                  {data[2].latitude} / {data[2].longitude}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">詳細</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{data[3].category}</div>
                    <div className="text-sm opacity-50">
                      {' '}
                      <Moment format="YYYY-MM-DD">{data[3].record_date}</Moment>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{data[3].farm_address}</div>
                <span className="badge badge-outline badge-sm">
                  {data[3].latitude} / {data[3].longitude}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">詳細</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{data[4].category}</div>
                    <div className="text-sm opacity-50">
                      {' '}
                      <Moment format="YYYY-MM-DD">{data[4].record_date}</Moment>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{data[4].farm_address}</div>
                <span className="badge badge-outline badge-sm">
                  {data[4].latitude} / {data[4].longitude}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">詳細</button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>項目</th>
              <th>農地住所</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
