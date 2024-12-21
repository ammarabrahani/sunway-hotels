import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh_-_50px)]">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
