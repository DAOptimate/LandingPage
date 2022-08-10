import React from 'react';

interface IProps {
    children: React.ReactNode
}

function LayoutContainer({ children }: IProps) {
  return (
    <div className="min-h-screen flex p-4 bg-dark-grey">
      <div className="grow bg-brand-primary border border-1 border-black relative flex">
        {children}
      </div>
    </div>
  );
}

export default LayoutContainer;
