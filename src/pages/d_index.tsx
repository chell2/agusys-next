import { GetStaticProps, NextPage } from 'next';
// import * as R from 'ramda'
import React from 'react';

// import { BookListPartLabel } from '~/src/types/domain/googleAnalyticsEvents/Labels'

// ドメインで利用する型
type farmsListItem = {
  farm_id: any;
  farm_address: any;
  latitude: any;
  longitude: any;
  record_date: any;
  category: any;
  crop_name: any;
  damage_target: any;
  damege_status: any;
};

type Props = {
  farmsGroups: {
    heading: string;
    farms: farmsListItem[];
    // part: BookListPartLabel // GA イベント名
  }[];
};

// トップページの表示用のコンポーネント
const Component: NextPage<Props> = (props) => (
  <>
    {/* Top Page */}
    {/* <HeroComponent /> */}

    {/* 書籍一覧 */}
    <section className={CSS['farmsList']}>
      {props.farmsGroups.map((group) => (
        // 以下はさらに小さい粒度でコンポーネントとして切り出していますが、
        // ここでは説明のためにコンポーネントとして切り出していない形で記述しています
        <div className={CSS['farmsList__farm_id']} key={group.heading}>
          <h2 className={CSS['farmsList__farm_address']}>{group.heading}</h2>
          <ul className={CSS['farmsList__category']}>
            <li>{['farmsList__crop_name']}</li>
            <li>{['damage_target']}</li>
            <li>{['damege_status']}</li>
          </ul>
        </div>
      ))}
    </section>
  </>
);

// API のレスポンスボディの型
type TopPageFarmsBody = {
  farm_id: any;
  farm_address: any;
  // latitude: any;
  // longitude: any;
  record_date: any;
  category: any;
  crop_name: any;
  damage_target: any;
  damege_status: any;
}[];

export async function getStaticProps(): Promise<void> {
  // GOOGLE_APPS_SCRIPT_TOP_PAGE_BOOKS は GAS の API の URL
  const endpoint =
    'https://script.google.com/macros/s/AKfycbxYpioqRBZ1FR2Ca-1uacg5rcY2MAGgKEoc1qoNmE_htZwocKFmnE6OzWMkSQ_aQcIb6g/exec';
  // const authKey = process.env.AUTH_KEY
  // プログラムから GAS の API をコールするためには、オプションとして { redirect : 'follow' } が必須
  // const res = await fetch(`${endpoint}?auth_key=${authKey}`, { redirect: 'follow' })
  const res = await fetch(`${endpoint}`, { redirect: 'follow' });
  const json: TopPageFarmsBody = await res.json();

  // 変数 groups の中身は以下。ramda.js の groupBy 関数で heading が同じ書籍をまとめる
  // {
  //   '民法': [{ heading: '民法', event_name: 'pickup', ... }, {...}, ... ],
  //   '一般民事' : [{ heading: '一般民事', event_name: 'popular', ... }, {...}, ... ],
  //   // ...
  // }
  // const groups = R.groupBy((book: TopPageBooksBody[number]) => book.heading)(json)
  // const bookGroups = Object.entries(groups).map(([heading, bookGroup]) => ({
  //   heading,
  //   part: bookGroup[0].event_name
  //   books: bookGroup.map<BookListItem>((book) => ({
  //     id: book.id,
  //     title: book.title,
  //     author: book.author,
  //     publishedAt: book.published_at,
  //     thumbnailUrl: book.thumbnail_url,
  //   })),

  // return props: {farmsGroups},
  // revalidate: 300, // 5分単位で更新
}

export default Component;
