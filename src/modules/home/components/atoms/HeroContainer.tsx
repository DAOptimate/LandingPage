import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}
function HeroContainer({ children }: IProps) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  );
}

export default HeroContainer;
