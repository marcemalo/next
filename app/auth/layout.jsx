import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-gray-100">
        <div className="max-w-[450px] w-full bg-white rounded-lg shadow-lg p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
