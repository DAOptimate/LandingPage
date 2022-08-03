import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}
function HeaderContainer({ children }: IProps) {
  return (
    <header className="bg-pink-100">
      <div className="max-w-6xl m-auto p-4 flex justify-between items-center">
        {children}
      </div>
    </header>
  );
}

export default HeaderContainer;
