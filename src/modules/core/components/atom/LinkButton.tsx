import { Link } from 'react-router-dom';

interface IProps {
  to: string,
  children: string
}
// TODO: Check if the link is active and change color
function LinkButton({ to, children }: IProps) {
  return (
    <Link to={to} className="button-styles">{children}</Link>
  );
}

export default LinkButton;
