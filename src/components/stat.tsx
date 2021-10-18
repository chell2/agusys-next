import Image from 'next/image';

const Stat = () => {
  return (
    <div className="overflow-x-auto mt-5 shadow-xl rounded-lg">
      <div className="w-full shadow stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">申請件数</div>
          <div className="stat-value text-primary">25.6件</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">被害面積</div>
          <div className="stat-value text-info">2.6ha</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-info">
            <div className="avatar online">
              <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                <Image
                  src="/images/logo-ss.png"
                  alt="image"
                  layout="fixed"
                  width={80}
                  height={80}
                  className="mask mask-squircle"
                />
              </div>
            </div>
          </div>
          <div className="stat-value">26%</div>
          <div className="stat-title">農地に占める割合</div>
          <div className="stat-desc text-info">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
