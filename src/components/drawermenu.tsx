import Main from '../components/main';

// import Link from 'next/link';
// export default function index({ posts }) {
//   return (
//     <div>
//       <h1>POST一覧</h1>
//       <ul>
//         {posts.map((post) => {
//           return (
//             <li key={post.id}>
//               <Link href={`/posts/${post.id}`}>
//                 <a>{post.title}</a>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

const Drawer = () => {
  return (
    <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center drawer-content">
        <Main />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>Menu Item</a>
          </li>
          <li>
            <a>Menu Item</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
