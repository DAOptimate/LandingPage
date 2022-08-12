import { Link } from 'react-router-dom';

interface IProps {
  to: string,
}
function LinkButton({ to }: IProps) {
  return (
    <Link to={to} className="w-full">
      <div className="bg-light-grey w-10 h-10 border border-1 border-dark-grey" />
    </Link>
  );
}

export default LinkButton;
