import React from 'react';

interface IProps {
    children: React.ReactNode
}

function NavBarContainer({ children }: IProps) {
  return (
    <nav className="flex flex-col gap-4 pt-28">
      {children}
    </nav>
  );
}

export default NavBarContainer;
