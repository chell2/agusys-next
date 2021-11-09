import Link from 'next/link';

export default function Pagination() {
  return (
    <div className="btn-group flex justify-end mt-5 mb-10 pr-2">
      <button className="btn btn-s">«</button>
      <button className="btn btn-s btn-active">1</button>
      <button className="btn btn-s">2</button>
      <button className="btn btn-s">3</button>
      <button className="btn btn-s">4</button>
      <button className="btn btn-s">»</button>
    </div>
  );
}
