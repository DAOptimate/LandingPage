import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}
function HeaderContainer({ children }: IProps) {
  return (
    <header>
      <div className="p-4 flex justify-between items-center">
        {children}
      </div>
    </header>
  );
}

export default HeaderContainer;
