import router from 'next/router';

const handleDownloadFarms = () => {
  router.push('/downloadfarms');
};
const handleDownloadImages = () => {
  router.push('/downloadimages');
};

export default function StatButton() {
  return (
    <>
      <div className="overflow-x-auto mt-5 shadow-xl rounded-lg">
        <div className="w-full shadow stats">
          <div className="stat">
            <div className="stat-figure text-primary">
              <button className="btn btn-secondary" onClick={() => handleDownloadFarms()}>
                ダウンロード
              </button>
            </div>
            <div className="stat-title">CSVデータ</div>
            <div className="card-title text-secondary">報告一覧</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-info">
              <button className="btn btn-info" onClick={() => handleDownloadImages()}>
                ダウンロード
              </button>
            </div>
            <div className="stat-title">CSVデータ</div>
            <div className="card-title text-info">写真一覧</div>
          </div>
        </div>
      </div>
    </>
  );
}
