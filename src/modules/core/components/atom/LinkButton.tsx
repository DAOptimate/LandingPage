import { Link } from 'react-router-dom';

interface IProps {
  to: string,
  children: string
}
// TODO: Check if the link is active and change color
function LinkButton({ to, children }: IProps) {
  return (
    <Link to={to} className="px-4 text-neutral-600 hover:text-neutral-800">{children}</Link>
  );
}

export default LinkButton;
