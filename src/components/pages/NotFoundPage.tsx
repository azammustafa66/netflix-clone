import React from "react";

import Header from "../layout/Header";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header isBrowsePage={false} />
      <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-4">Page Not Found</p>
        <p className="text-lg">
          Whoops, we couldn't find that page. Try going back to your previous
          page.
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
